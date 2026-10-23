const CACHE_NAME = 'syfung-cache-v6';

// Fichiers statiques qui changent rarement
const STATIC_ASSETS = [
    './favicon.svg',
    './author.jpg',
    './poster.jpg'
];

// Installation : on met en cache les assets statiques et on active immédiatement
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
    );
});

// Activation : supprime les vieux caches et prend le contrôle immédiatement
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

// Stratégie STALE-WHILE-REVALIDATE :
// Réponse instantanée depuis le cache (0ms) tout en mettant à jour en arrière-plan
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Ne pas intercepter les requêtes cross-origin ou chrome-extension
    if (url.origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(cachedResponse => {
                const networkFetch = fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => cachedResponse);

                // Si déjà en cache, servir immédiatement (0ms) ! Sinon attendre le réseau.
                return cachedResponse || networkFetch;
            });
        })
    );
});
