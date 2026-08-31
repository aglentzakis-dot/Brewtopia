// Ελάχιστο service worker — μόνο για να γίνει το Brewtopia "εγκαταστάσιμο" (PWA).
// Δεν κάνει ΚΑΜΙΑ αποθήκευση/cache επίτηδες, ώστε να βλέπεις πάντα τη νεότερη έκδοση
// μόλις την ανεβάζεις, χωρίς κόλλημα σε παλιά εκδοχή.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Χωρίς fetch handler / χωρίς cache: όλα πηγαίνουν κανονικά στο δίκτυο.
