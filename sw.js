// sw.js - Service Worker básico para PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Permite que la app pase las peticiones de red normales
});
