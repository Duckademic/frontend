// src/js/nav-active.js

export function markActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';

  document
    .querySelectorAll('.sidebar-navigation-list-item a')
    .forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      // якщо посилання веде на поточну сторінку — додаємо клас
      if (href.endsWith(current)) {
        link.parentElement.classList.add('highlighted');
      }
    });
}

document.addEventListener('DOMContentLoaded', markActiveNav);
