const cache_name = 'static_cache';
const assets = ['/index.html',
                '/manifest.json',
            '/Styles/style.css',
                '/JavaScripts/javaS.js',
            '/JavaScripts/service_worker.js',
        '/assets/icons/pause_white_24dp.svg',
    '/assets/icons/play_arrow_white_24dp.svg',
'/assets/icons/radio_white_24dp.svg',
'/assets/icons/skip_next_white_24dp.svg',
'/assets/icons/skip_previous_white_24dp.svg',
'/assets/images/radio.png'];



self.addEventListener('install', function (event){
    event.waitUntil(
        caches.open(cache_name).then((cache) => {
          cache.addAll(assets);
        })
      );
});

self.addEventListener('fetch', function(fetch_evt){
    fetch_evt.respondWith(
        caches.match(fetch_evt.request)
        .then( function(cacheRes){
            return cacheRes || fetch(fetch_evt.request);
        })
    );
});
