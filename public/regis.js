navigator.serviceWorker.register("/sw.js").then(
  function (registration) {
    console.log(
      "Service Worker registration successful with scope: ",
      registration.scope
    );
  },
  function (err) {
    console.log("Service Worker registration failed: ", err);
  }
);

function showNotification() {
  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}

// showNotification()