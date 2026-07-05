// ==========================================================================
// Cali 2026 - Guía informativa (solo front-end, sin CRUD / sin base de datos)
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {

  // Resalta el ítem activo del bottom-nav y del menú lateral según la página actual
  var currentPage = (window.location.pathname.split('/').pop() || 'index.html');

  document.querySelectorAll('.bottom-nav .nav-item, .offcanvas-cali a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Botones "Ver en el mapa" / "Cómo llegar": abren Google Maps con la dirección indicada
  document.querySelectorAll('[data-map-query]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var query = encodeURIComponent(btn.getAttribute('data-map-query'));
      window.open('https://www.google.com/maps/search/?api=1&query=' + query, '_blank');
    });
  });

  // Efecto táctil sutil en tarjetas/botones interactivos (solo visual, informativo)
  document.querySelectorAll('.bento-card, .btn-cali-primary, .btn-cali-secondary, .nav-item').forEach(function (el) {
    el.addEventListener('touchstart', function () { el.style.opacity = '0.85'; }, { passive: true });
    el.addEventListener('touchend', function () { el.style.opacity = '1'; }, { passive: true });
  });

});
