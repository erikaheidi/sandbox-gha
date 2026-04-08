/**
 * Dummy Scanner — Landing Page JS
 */

(function () {
  'use strict';

  /* ── Mobile navigation toggle ─────────────────────────────────── */
  const navToggle  = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu   = document.getElementById('icon-menu');
  const iconClose  = document.getElementById('icon-close');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');

      mobileMenu.classList.toggle('hidden', isOpen);
      iconMenu.classList.toggle('hidden', !isOpen);
      iconClose.classList.toggle('hidden', isOpen);
      navToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close mobile menu when a link inside it is clicked
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        iconMenu.classList.remove('hidden');
        iconClose.classList.add('hidden');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── FAQ accordion ─────────────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel   = item.querySelector('.faq-panel');
    const icon    = item.querySelector('.faq-icon');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = !panel.classList.contains('hidden');

      // Close all other panels
      faqItems.forEach((other) => {
        if (other !== item) {
          other.querySelector('.faq-panel')?.classList.add('hidden');
          other.querySelector('.faq-icon')?.classList.remove('rotate-180');
        }
      });

      // Toggle the clicked panel
      panel.classList.toggle('hidden', isOpen);
      icon?.classList.toggle('rotate-180', !isOpen);
    });
  });

  /* ── Navbar: add shadow on scroll ──────────────────────────────── */
  const header = document.querySelector('header');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('shadow-lg', window.scrollY > 10);
      header.classList.toggle('shadow-black/60', window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
