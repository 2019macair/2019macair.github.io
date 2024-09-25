const CACHE_NAME = 'task-manager-cache-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/index.html',
    '/manifest.json'
];

// Install service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch requests
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
