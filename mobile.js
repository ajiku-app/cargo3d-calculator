// Pelengkap tampilan mobile: layar sambutan (sekali), tombol keluar di header, warna status bar.
(function () {
  var mq = window.matchMedia('(max-width: 880px)');
  if (!mq.matches) return;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', '#1f7a52');

  var right = document.querySelector('.topbar-right');
  if (right && !document.querySelector('.m-logout')) {
    var b = document.createElement('button');
    b.className = 'm-logout'; b.setAttribute('aria-label', 'Keluar');
    b.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></svg>';
    b.onclick = function () { if (window.tryLogout) tryLogout(); };
    right.appendChild(b);
  }

  var seen = false;
  try { seen = localStorage.getItem('cargo3d_m_splash') === '1'; } catch (e) {}
  if (seen) return;
  var s = document.createElement('div');
  s.className = 'm-splash';
  s.innerHTML = '<div class="m-splash-card"><div class="m-splash-icon"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1f7a52" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg></div>' +
    '<h1>Cargo3D<span>Calculator</span></h1><p>Hitung dan lihat simulasi muat kontainer 3D langsung dari ponsel Anda.</p><div class="m-dots"><i></i><i></i><i></i></div></div>' +
    '<button class="m-splash-btn" type="button">MULAI</button>';
  s.querySelector('button').onclick = function () {
    try { localStorage.setItem('cargo3d_m_splash', '1'); } catch (e) {}
    s.remove();
  };
  document.body.appendChild(s);
})();
