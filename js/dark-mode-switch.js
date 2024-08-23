/*!
 * Dark Mode Switch v1.0.1 (https://github.com/coliff/dark-mode-switch)
 * Copyright 2021 C.Oliff
 * Licensed under MIT (https://github.com/coliff/dark-mode-switch/blob/main/LICENSE)
 */
var darkSwitch = document.getElementById("darkSwitch");

// Fungsi untuk menerapkan tema saat halaman dimuat
function initTheme() {
  var darkThemeSelected = localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
  document.body.setAttribute("data-theme", darkThemeSelected ? "dark" : "light");
}

// Fungsi untuk menyimpan tema yang dipilih dan menerapkannya
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
    localStorage.removeItem("darkSwitch");
  }
}

// Menjalankan initTheme secepat mungkin sebelum tampilan tampak
window.addEventListener("DOMContentLoaded", function() {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", resetTheme);
  }
});
