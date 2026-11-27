/**
 * Cloudflare Pages Function Proxy — Nhà Cho Thuê V2
 * Route: /api
 * Ẩn hoàn toàn link Google Apps Script (/exec) bằng biến môi trường GAS_URL
 * Cấu hình tại: Cloudflare Pages -> Settings -> Variables and Secrets -> GAS_URL
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-App-Version",
  "Cache-Control": "no-store, no-cache, must-revalidate"
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

function getGasUrl(env) {
  return (env && (env.GAS_URL || env.GOOGLE_SCRIPT_URL || env.SCRIPT_URL || "")).trim();
}

export async function onRequestGet(context) {
  const gasUrl = getGasUrl(context.env);
  if (!gasUrl) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Chưa cấu hình biến môi trường GAS_URL trong Cloudflare Pages (Settings -> Variables and Secrets)."
      }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json; charset=utf-8" } }
    );
  }

  try {
    const incomingUrl = new URL(context.request.url);
    const targetUrl = new URL(gasUrl);
    incomingUrl.searchParams.forEach((value, key) => {
      targetUrl.searchParams.set(key, value);
    });

    const resp = await fetch(targetUrl.toString(), {
      method: "GET",
      redirect: "follow",
      headers: { "Accept": "application/json" }
    });

    const text = await resp.text();
    return new Response(text, {
      status: resp.status,
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: "Lỗi kết nối máy chủ proxy: " + (err?.message || String(err)) }),
      { status: 502, headers: { ...CORS_HEADERS, "Content-Type": "application/json; charset=utf-8" } }
    );
  }
}

export async function onRequestPost(context) {
  const gasUrl = getGasUrl(context.env);
  if (!gasUrl) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Chưa cấu hình biến môi trường GAS_URL trong Cloudflare Pages (Settings -> Variables and Secrets)."
      }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json; charset=utf-8" } }
    );
  }

  try {
    const rawBody = await context.request.text();

    const resp = await fetch(gasUrl, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
        "Accept": "application/json"
      },
      body: rawBody
    });

    const text = await resp.text();
    return new Response(text, {
      status: resp.status,
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: "Lỗi gửi dữ liệu qua proxy: " + (err?.message || String(err)) }),
      { status: 502, headers: { ...CORS_HEADERS, "Content-Type": "application/json; charset=utf-8" } }
    );
  }
}
