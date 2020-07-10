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

self.addEventListener("activate", () => console.log("activated"));
