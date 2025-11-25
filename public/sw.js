const CACHE_NAME = 'amon-sharma-portfolio-v1';
const urlsToCache = [
  '/',
  '/assets/amon.jpeg',
  '/assets/logo.svg',
  '/assets/photo1.png',
  '/fonts/BrogiFREE.woff2',
  '/fonts/BrogiFREE.woff',
  '/fonts/BrogiFREE.ttf',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
      )
  );
});
