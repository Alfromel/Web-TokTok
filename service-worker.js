const CACHE_NAME = 'toktok-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/img/TOKTOK-removebg-preview.png',
  '/img/PORTADA.jpg',
  '/img/1.png',
  '/img/2.png',
  '/img/3.png',
  '/img/4.png',
  '/img/freefire.png',
  '/img/mobillegens.jpg',
  '/img/cod.jpg',
  '/img/pubg.jpg',
  '/img/user-1.jpg',
  '/img/user-2.jpg',
  '/img/user-3.jpg',
  '/formularios/tigo.html',
  '/formularios/entel.html',
  '/formularios/viva.html',
  '/formularios/freefire.html',
  '/formularios/mobilelegends.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});