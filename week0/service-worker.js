self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("cache1")
      .then((cache) => cache.addAll(["index.html", "index.js", "style.css"]))
      .then(() => self.skipWaiting())
  );
});
