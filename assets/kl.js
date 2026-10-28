// Okno na nieruchome zdjęcie: tło (position:fixed) włączamy dopiero, gdy sekcja jest blisko ekranu.
(function () {
  var s = document.querySelectorAll('.stopklatka');
  if (!s.length) return;
  if (!('IntersectionObserver' in window)) { s.forEach(function (e) { e.classList.add('on'); }); return; }
  var io = new IntersectionObserver(function (w) {
    w.forEach(function (e) { e.target.classList.toggle('on', e.isIntersecting); });
  }, { rootMargin: '300px 0px' });
  s.forEach(function (e) { io.observe(e); });
})();
