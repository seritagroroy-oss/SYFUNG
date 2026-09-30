const CACHE_NAME = 'syfung-cache-v5';

// Fichiers statiques qui changent rarement
const STATIC_ASSETS = [
    './favicon.svg',
    './author.jpg',
    './poster.jpg'
];

// Installation : on met en cache uniquement les assets statiques
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
    );
});

// Activation : supprime les vieux caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        ).then(() => self.clients.claim())
    );
});

// Stratégie NETWORK FIRST :
// - Pour data.js, style.css, app.js, index.html → toujours le réseau en premier
// - Pour les images/assets statiques → cache en premier
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    const isDynamic = url.pathname.includes('/data/') || ['/style.css', '/app.js', '/index.html', '/'].some(p => url.pathname.endsWith(p));

    if (isDynamic) {
        // Network First : essaie le réseau, fallback cache si offline
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // Cache First pour les assets statiques (images, fonts, etc.)
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) return cached;
                return fetch(event.request).then(response => {
                    if (response && response.status === 200 && response.type === 'basic') {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                });
            })
        );
    }
});
