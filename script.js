if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
  

  function lockOrientation() {
    if (screen.orientation) {
        screen.orientation.lock('portrait').catch(error => {
            console.error('Orientation lock failed:', error);
        });
    } else {
        console.log('screen.orientation API is not supported on this device.');
    }
}

// Lock orientation on page load
window.addEventListener('load', lockOrientation);

// Handle orientation change
window.addEventListener('orientationchange', () => {
    console.log('Orientation changed to:', window.orientation);
    lockOrientation(); // Re-lock orientation if it changes
});