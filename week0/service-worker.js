self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("cache1")
      .then((cache) => {
        console.log("caching");
        cache.addAll(["index.html", "index.js", "style.css"]);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== "cache1") {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request)).catch(() => caches.match(e.request));
});
