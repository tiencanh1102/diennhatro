/**
 * Cloudflare Pages Function Proxy — Nhà Cho Thuê V5
 * Route: /api
 *  1. Ẩn hoàn toàn link Google Apps Script (/exec) qua biến môi trường GAS_URL
 *  2. Proxy ảnh VietQR (?action=qrProxy) có CORS sạch giúp hiển thị & tải PNG phiếu thu 100% không lỗi
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
  const incomingUrl = new URL(context.request.url);
  const action = incomingUrl.searchParams.get("action") || "";

  // Proxy ảnh VietQR sạch CORS cho phiếu thu & html2canvas
  if (action === "qrProxy") {
    const bank = (incomingUrl.searchParams.get("bank") || "").replace(/[^a-zA-Z0-9]/g, "");
    const acc = (incomingUrl.searchParams.get("acc") || "").replace(/[^a-zA-Z0-9]/g, "");
    const amount = (incomingUrl.searchParams.get("amount") || "0").replace(/[^0-9]/g, "");
    const info = incomingUrl.searchParams.get("info") || "";
    const name = incomingUrl.searchParams.get("name") || "";
    const tpl = (incomingUrl.searchParams.get("tpl") || "compact2").replace(/[^a-zA-Z0-9_]/g, "");

    if (!bank || !acc) {
      return new Response("Missing bank or account", { status: 400, headers: CORS_HEADERS });
    }
    try {
      const qrUrl = `https://img.vietqr.io/image/${bank}-${acc}-${tpl}.png?amount=${amount}&addInfo=${encodeURIComponent(info)}&accountName=${encodeURIComponent(name)}`;
      const imgResp = await fetch(qrUrl, { method: "GET", redirect: "follow" });
      if (!imgResp.ok) {
        return new Response("QR upstream error", { status: imgResp.status, headers: CORS_HEADERS });
      }
      const buf = await imgResp.arrayBuffer();
      return new Response(buf, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": imgResp.headers.get("Content-Type") || "image/png",
          "Cache-Control": "public, max-age=300"
        }
      });
    } catch (err) {
      return new Response("QR proxy failed", { status: 502, headers: CORS_HEADERS });
    }
  }

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
      JSON.stringify({ ok: false, error: "Lỗi kết nối máy chủ: " + (err && err.message ? err.message : String(err)) }),
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
      JSON.stringify({ ok: false, error: "Lỗi gửi dữ liệu tới máy chủ: " + (err && err.message ? err.message : String(err)) }),
      { status: 502, headers: { ...CORS_HEADERS, "Content-Type": "application/json; charset=utf-8" } }
    );
  }
}
