if('serviceWorker' in navigator) {
    // register service worker if browser supports
    navigator.serviceWorker.register('serviceWorker.js')
        .then((reg) => console.log('service worker registered',reg) )
        .catch((err) => console.log('service worker not registered',err) );
}
