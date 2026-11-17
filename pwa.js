/* PWA SMPI Yambu'ul Qur'an: Service Worker registration (tanpa UI tombol/banner) */
(function () {
  'use strict';
  function dalamIframe() { try { return window.self !== window.top; } catch (e) { return true; } }
  if ('serviceWorker' in navigator && location.protocol === 'https:' && !dalamIframe()) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
})();
