// Membuat page loader secara dinamis dan animasi progress bar

window.addEventListener('DOMContentLoaded', function () {
  // Buat page loader jika belum ada
  if (!document.getElementById('page-loader')) {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="d-flex flex-column align-items-center">
        <img alt="Logo" id="light" style="width:120px; opacity:0; transition:opacity 1s;">
        <div class="progress mt-4" style="width:120px; height:10px; border-radius:6px; overflow:hidden;">
          <div class="progress-bar bg-success" role="progressbar"
            style="width:0%; height:100%; transition:width 1.5s;" id="horizontal-progress"></div>
        </div>
      </div>
    `;
    document.body.prepend(loader);
  }

  const loader = document.getElementById('page-loader');
  const logo = document.getElementById('light');
  const hbar = document.getElementById('horizontal-progress');
  let loading = true;
  let start = null;

  // Fade in logo dan animasi progress bar ke 90%
  setTimeout(() => {
    logo.style.opacity = 1;
    function animateProgressBar(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 1200, 0.9); // 0.9 = 90%
      hbar.style.width = (progress * 100) + "%";
      if (progress < 0.9 && loading) {
        requestAnimationFrame(animateProgressBar);
      } else if (loading) {
        hbar.style.width = "90%";
      }
    }
    requestAnimationFrame(animateProgressBar);
  }, 100);

  // Jika halaman sudah siap sepenuhnya, bar ke 100% lalu loader hilang
  window.addEventListener('load', function () {
    loading = false;
    hbar.style.transition = "width 0.3s";
    hbar.style.width = "100%";
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => loader.style.display = 'none', 700);
    }, 400);
  });

  // Fallback: jika loading terlalu lama, tetap tutup loader setelah 10 detik
  setTimeout(() => {
    if (loading) {
      loading = false;
      hbar.style.transition = "width 0.3s";
      hbar.style.width = "100%";
      setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => loader.style.display = 'none', 700);
      }, 400);
    }
  }, 10000);
});