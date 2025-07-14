window.addEventListener('scroll', function () {
  const navbar = document.getElementById('NavBar');
  if (!navbar) return;
  if (window.scrollY > 0) {
    navbar.classList.add('shadow-sm');
  } else {
    navbar.classList.remove('shadow-sm');
  }
});

function loadFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="p-2 mt-3">
      <div class="container mb-2 text-center">
        <a href="https://instagram.com/muhfhri._" class="btn btn-outline-dark rounded-5 btn-floating m-1" role="button"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/Flixdz" class="btn btn-outline-dark rounded-5 btn-floating m-1" role="button"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.tiktok.com/@flixpseal" class="btn btn-outline-dark rounded-5 btn-floating m-1" role="button"><i class="fa-brands fa-tiktok"></i></a>
        <a href="https://discordapp.com/users/899644068697620491" class="btn btn-outline-dark rounded-5 btn-floating m-1" role="button"><iconify-icon inline icon="ic:baseline-discord"></iconify-icon></a>
      </div>
      <div class="container small text-center">
        <div class="row">
          <div class="col-md-4">
            <font class="h5 fw-bold">Projects</font>
            <br><a href="https://muhfhri.github.io/tj" class="link-none">Transjakarta Route</a>
            <br><a href="https://flixdz.github.io/minecraft" class="link-none">Material 3 Website</a><br>
            <font class="text-muted">For more project visit my GitHub</font>
            <br><a href="https://github.com/muhfhri" class="link-none">Muhfhri GitHub</a>
          </div>
          <div class="col-md-4">
            <br><br>
            <blockquote class="h5 text-muted" style="font-family: poppins"><iconify-icon icon="mingcute:quote-left-fill"></iconify-icon>
              Keep Calm and Stay Focused!
              <iconify-icon icon="mingcute:quote-right-fill"></iconify-icon>
            </blockquote>
            <br><br>
          </div>
          <div class="col-md-4">
            <font class="h5 fw-bold">Framework</font>
            <br>Iconify
            <br>Font Awesome
            <br>Bootstrap 5
            <br><a href="https://github.com/muhfhri/-" class="text-muted link-none">More...</a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center small p-3" id="copy">
      Website ini dibuat dengan <i class="fa fa-code" style="color: #00bcd4"></i>
      <br> <a href="index" class="text-decoration-none"><img id="light" width="70px"></a> &copy; 2025
      <br>v5.0 <span class="text-danger fw-bold">New UI</span>
      <br>Updated at 08.49 14/07/2025
    </div>
  `;
}
window.addEventListener('DOMContentLoaded', loadFooter);