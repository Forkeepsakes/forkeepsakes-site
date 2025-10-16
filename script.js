/* ====== ForKeepSakes Core Scripts (2025-10-16) ====== */

// Smooth scroll for in-page anchors (optional polish)
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// Automatically add aria-current="page" based on current URL
document.querySelectorAll('.nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
});
