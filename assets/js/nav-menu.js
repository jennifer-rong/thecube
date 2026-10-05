(function () {
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('nav-links');
  if (!toggle || !panel) return;
  var root = document.documentElement;

  function setOpen(open) {
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
  }

  toggle.addEventListener('click', function () { setOpen(!root.classList.contains('menu-open')); });
  panel.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.classList.contains('menu-open')) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (root.classList.contains('menu-open') && !e.target.closest('.masthead')) setOpen(false);
  });
  window.matchMedia('(min-width: 721px)').addEventListener('change', function (e) { if (e.matches) setOpen(false); });
})();
