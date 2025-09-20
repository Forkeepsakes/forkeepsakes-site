<script>
  const open = document.getElementById('openModal');
  const modal = document.getElementById('coverModal');
  const closeA = document.getElementById('closeModal');
  const closeB = document.getElementById('closeModalBtn');

  function show() { modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); }
  function hide() { modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); }

  open?.addEventListener('click', show);
  closeA?.addEventListener('click', hide);
  closeB?.addEventListener('click', hide);
  window.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
</script>
