// Mobile-friendly seasonal dropdown & general nav behavior
(function () {
  const seasonal = document.querySelector('.seasonal');
  if (!seasonal) return;

  const trigger = seasonal.querySelector(':scope > a.seasonal-trigger');
  const menu = seasonal.querySelector('.menu');

  if (!trigger || !menu) return;

  // Ensure ARIA states
  trigger.setAttribute('aria-haspopup', 'true');
  trigger.setAttribute('aria-expanded', 'false');

  // Toggle open/close on tap/click (prevent navigating on the label)
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    const isOpen = seasonal.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(isOpen));

    // Keep menu in viewport on narrow screens
    const rect = menu.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      menu.style.left = 'auto';
      menu.style.right = '0';
    } else {
      menu.style.right = 'auto';
      menu.style.left = '0';
    }
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!seasonal.contains(e.target)) {
      seasonal.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      seasonal.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }
  });
})();
