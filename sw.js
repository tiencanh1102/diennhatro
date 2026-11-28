const APP_VERSION = "8.0.0";
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
      .then(() => self.clients.matchAll({ type: "window", includeUncontrolled: true }))
      .then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: "APP_UPDATED", version: APP_VERSION });
        });
      })
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (
    event.request.method !== "GET" ||
    url.pathname.startsWith("/api") ||
    url.hostname.includes("script.google.com") ||
    url.hostname.includes("googleusercontent.com") ||
    url.hostname.includes("vietqr.io")
  ) {
    return;
  }

  // Network-first with no-store for HTML/navigation so every device always gets the newest UI
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
