const APP_VERSION = "11.0.0";
const CACHE_NAME = "nha-cho-thue-v" + APP_VERSION;
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-192.svg",
  "./icon-512.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS.map((u) => new Request(u, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // Tuyệt đối không cache API, version.json, Apps Script hay ảnh ngoài
  if (
    event.request.method !== "GET" ||
    url.pathname.startsWith("/api") ||
    url.pathname.endsWith("version.json") ||
    url.hostname.includes("script.google.com") ||
    url.hostname.includes("googleusercontent.com") ||
    url.hostname.includes("vietqr.io")
  ) {
    return;
  }

  const isNav = event.request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname === "/";
  const req = isNav ? new Request(event.request.url, { cache: "no-store" }) : event.request;

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200 && url.origin === self.location.origin) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
