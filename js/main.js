// Investment Club – main JavaScript
(function () {
  'use strict';

  // Toggle Foundation and Economy membership content when header is clicked
  function initMembershipToggles() {
    var foundationHeader = document.getElementById('foundation-header');
    var foundationContent = document.getElementById('foundation-content');
    var economyHeader = document.getElementById('economy-header');
    var economyContent = document.getElementById('economy-content');

    function toggle(content, header) {
      if (!content || !header) return;
      content.classList.toggle('is-open');
      header.setAttribute('aria-expanded', content.classList.contains('is-open'));
    }

    if (foundationHeader && foundationContent) {
      foundationHeader.addEventListener('click', function () {
        toggle(foundationContent, foundationHeader);
      });
      foundationHeader.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle(foundationContent, foundationHeader);
        }
      });
    }

    if (economyHeader && economyContent) {
      economyHeader.addEventListener('click', function () {
        toggle(economyContent, economyHeader);
      });
      economyHeader.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle(economyContent, economyHeader);
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMembershipToggles);
  } else {
    initMembershipToggles();
  }
})();
