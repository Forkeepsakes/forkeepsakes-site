/* ====== ForKeepSakes Site Scripts (2025-10-16) ====== */

/*
   The old seasonal dropdown is now retired.
   Keeping this block commented in case it’s reused in the future.
*/

// (function () {
//   const seasonal = document.querySelector('.seasonal');
//   if (!seasonal) return;

//   const trigger = seasonal.querySelector(':scope > a');
//   const menu = seasonal.querySelector('.menu');
//   if (!trigger || !menu) return;

//   trigger.setAttribute('aria-haspopup', 'true');
//   trigger.setAttribute('aria-expanded', 'false');

//   trigger.addEventListener('click', function (e) {
//     e.preventDefault();
//     const isOpen = seasonal.classList.toggle('open');
//     trigger.setAttribute('aria-expanded', String(isOpen));
//     const rect = menu.getBoundingClientRect();
//     if (rect.right > window.innerWidth) {
//       menu.style.left = 'auto';
//       menu.style.right = '0';
//     } else {
//       menu.style.right = 'auto';
//       menu.style.left = '0';
//     }
//   });

//   document.addEventListener('click', function (e) {
//     if (!seasonal.contains(e.target)) {
//       seasonal.classList.remove('open');
//       trigger.setAttribute('aria-expanded', 'false');
//     }
//   });

//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') {
//       seasonal.classList.remove('open');
//       trigger.setAttribute('aria-expanded', 'false');
//       trigger.focus();
//     }
//   });
// })();

/* ====== End of retired code ====== */
