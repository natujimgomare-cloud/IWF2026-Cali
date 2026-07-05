/* ==========================================================================
   Cali 2026 IWF World Youth Championships — Mobile Info Site
   All buttons are functional but purely informational (no backend/CRUD).
   ========================================================================== */

(function () {
  'use strict';

  /**
   * Small helper to show a temporary toast message at the bottom of the
   * screen. Used to give feedback for actions that don't navigate anywhere
   * (e.g. "Get Directions" opening a map, copy actions, etc).
   */
  function showToast(message, duration) {
    var toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.className = 'toast-note';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toast._hideTimeout);
    toast._hideTimeout = window.setTimeout(function () {
      toast.classList.remove('is-visible');
    }, duration || 2200);
  }

  /**
   * Opens a Google Maps search in a new tab for a given place/address.
   * This keeps "Get Directions" / "View on Map" buttons genuinely useful
   * without needing any backend or stored coordinates.
   */
  function openOnMap(query) {
    var url = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
    window.open(url, '_blank', 'noopener');
    showToast('Opening map…');
  }

  document.addEventListener('click', function (event) {
    var mapTrigger = event.target.closest('[data-map-query]');
    if (mapTrigger) {
      openOnMap(mapTrigger.getAttribute('data-map-query'));
    }
  });

  /**
   * Highlights the current page in the bottom navigation bar and in the
   * slide-out menu, based on the data-page attribute set on <body>.
   */
  function highlightActiveNav() {
    var currentPage = document.body.getAttribute('data-page');
    if (!currentPage) return;

    document.querySelectorAll('.app-bottomnav__item').forEach(function (item) {
      var isActive = item.getAttribute('data-page') === currentPage;
      item.classList.toggle('is-active', isActive);
    });

    document.querySelectorAll('.offcanvas-cali .list-group-item').forEach(function (item) {
      var isActive = item.getAttribute('data-page') === currentPage;
      item.classList.toggle('is-active', isActive);
    });
  }

  document.addEventListener('DOMContentLoaded', highlightActiveNav);
})();
