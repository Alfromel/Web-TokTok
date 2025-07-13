const CACHE_NAME = 'toktok-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/scripts.js',
  '/manifest.json',
  '/img/1.png',
  '/img/2.png',
  '/img/3.png',
  '/img/tigo.jpg',
  '/img/viva.jpg',
  '/img/entel.jpg',
  '/img/por.jpg',
  '/img/freefire.png',
  '/img/mobillegens.jpg'
];

// Instalar el service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar y limpiar cachés viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// Interceptar peticiones y servir desde caché si es posible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
