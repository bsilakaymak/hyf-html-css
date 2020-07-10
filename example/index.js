if (navigator.serviceWorker) {
  window.onload = navigator.serviceWorker
    .register("service-worker.js")
    .then((_) => console.log("registered"));
}
