// Language switch logic
const translations = {
    id: {
        dynamic_version: "Versi Dinamis",
        github_page: "Halaman GitHub <iconify-icon inline icon=\"line-md:github-loop\"></iconify-icon>",
        about: "Tentang",
        web: "Web",
        others: "Lainnya",
        nama: "Muhammad Fachri Al Husein",
        nickname: "dikenal sebagai @flixpseal atau @muhfhri._",
        dev_level: "pengembang pemula (aku mah pemula)",
        dev_note: "*berusaha jadi pengembang website, walaupun ribet",
        whoami_title: "Tentang Saya",
        whoami_desc: `Saya adalah seseorang yang sangat tertarik dengan dunia teknologi terutama Software, Website ataupun Android sudah menjadi kesukaan saya sejak lama.<br><span class='geist-mono'>Alumni SMK Nurul Islam Jakarta ke-35 Jurusan Rekayasa Perangkat Lunak</span>`,
        whoami_note: "*Ga juga sih, tapi emang suka aja, kenapa nggak?",
        achievements_title: "Pencapaian",
        cool_stuff: "Logo",
        logo_desc: `<h5 class="fw-bold mb-2">Makna Logo</h5>
          <ul class="mb-2" style="padding-left: 1.2em;">
            <li><b>Bentuk Geometris Kiri:</b> Melambangkan pondasi hidup yang kuat dan sederhana.</li>
            <li><b>Teks <span class='geist-mono'>Muhfhri</span>:</b> Titik dan garis pada teks menggambarkan arah dan perjalanan hidup.</li>
            <li><b>Panah ke Kanan:</b> Simbol semangat untuk terus maju ke depan.</li>
            <li><b>Panah ke Kiri:</b> Mengingatkan untuk tidak melupakan pengalaman masa lalu.</li>
            <li><b>Desain Minimalis:</b> Mencerminkan siklus hidup antara masa lalu dan masa depan, serta semangat untuk terus berkembang menjadi lebih baik.</li>
          </ul>
          <div class="fst-italic text-secondary small">Logo ini adalah refleksi perjalanan hidup yang sederhana, penuh makna, dan selalu berproses.</div>`,
        framework_title: "Framework & Editor Kode",
        framework_note: "* Semua framework bersifat open-source dan gratis dipakai",
        framework_bootstrap: "Bootstrap 5 <sup class=\"manrope rounded-2 btn-outline-m3\">&nbsp;<iconify-icon inline icon=\"carbon:fork\"></iconify-icon>main&nbsp;</sup>",
        framework_iconify: "Iconify <sup class=\"manrope rounded-2 bg-warning\">&nbsp;HTML | CSS&nbsp;</sup>",
        framework_aos: "AOS Library <sup class=\"manrope rounded-2 bg-primary\">&nbsp;CSS&nbsp;</sup>",
        framework_vscode: "VS Code",
        framework_acode: "Acode",
        fonts_used: "Font yang Dipakai",
        collab_title: "Mau kolaborasi?",
        collab_desc: "Jika kamu ingin mengembangkan website ini atau kolaborasi projek lain, silakan hubungi saya lewat sosial media atau email:",
        editor_by: "Editor Kode oleh <iconify-icon inline icon=\"meteor-icons:visual-studio-code\"></iconify-icon>",
        android: "Android",
        windows: "Windows",
        others_title: "Lainnya :",
        basic_html: "HTML Dasar",
        format_text: "Format Teks",
        basic_php: "PHP Dasar",
        var_php: "Variabel PHP",
        tj: "Transjakarta",
        material3: "Material 3 Web",
        skill_js: "JavaScript",
        skill_js_desc: "Bahasa pemrograman web interaktif.",
        skill_php: "php",
        skill_php_desc: "Bahasa backend populer untuk web dinamis.",
        skill_laravel: "Laravel",
        skill_laravel_desc: "Framework PHP modern dan powerful.",
        skill_filament: "Filament",
        skill_filament_desc: "Toolkit admin panel untuk Laravel.",
        skills_title: "Languages & Framework Learned",
        projects_title: "Projek",
        project1_title: "Transjakarta (TJ)",
        project1_desc: "Website interaktif untuk pencarian rute, koridor, dan informasi bus Transjakarta. Dibuat dengan data real dan UI modern.",
        project1_btn: "Lihat Projek",
        project2_title: "Material 3 Website",
        project2_desc: "Website demo Material 3 (Material You) dengan tema dinamis, komponen interaktif, dan desain modern berbasis Google Material Design.",
        project2_btn: "Lihat Projek",
        project3_title: "Hexa Team Developer",
        project3_desc: "Kontributor dan developer di <b>Hexa Team</b>, komunitas pengembang yang berfokus pada kolaborasi dan pengembangan aplikasi/website open-source.",
        project3_btn: "Lihat Portofolio",
        skills_title: "Bahasa & Framework yang dipelajari",
        pendidikan_title: "Riwayat Pendidikan",
    },
    en: {
        dynamic_version: "Dynamic Version",
        github_page: "GitHub Page <iconify-icon inline icon=\"line-md:github-loop\"></iconify-icon>",
        about: "About",
        web: "Web",
        others: "Others",
        nama: "Muhammad Fachri Al Husein",
        nickname: "know as @flixpseal or @muhfhri._",
        dev_level: "beginner developer (I'm just a newbie)",
        dev_note: "*trying to be a web developer, even though it's complicated",
        whoami_title: "About Me",
        whoami_desc: `I am someone who is very interested in the world of technology, especially Software, Websites, and Android, which have been my passion for a long time.<br><span class='geist-mono'>Alumnus of SMK Nurul Islam Jakarta 35, Software Engineering Major</span>`,
        whoami_note: "*actually not a big fan because it's complex, but why not?",
        achievements_title: "Achievements",
        cool_stuff: "Logo",
        logo_desc: `<h5 class="fw-bold mb-2">Logo Meaning</h5>
          <ul class="mb-2" style="padding-left: 1.2em;">
            <li><b>Left Geometric Shape:</b> Represents a strong and simple foundation in life.</li>
            <li><b>Text <span class='geist-mono'>Muhfhri</span>:</b> The dots and lines in the text symbolize direction and the journey of life.</li>
            <li><b>Right Arrow:</b> Symbolizes the spirit to always move forward.</li>
            <li><b>Left Arrow:</b> Reminds us not to forget past experiences.</li>
            <li><b>Minimalist Design:</b> Reflects the life cycle between past and future, and the spirit to keep growing and improving.</li>
          </ul>
          <div class="fst-italic text-secondary small">This logo is a reflection of a simple, meaningful, and ever-evolving life journey.</div>`,
        framework_title: "Framework & Code Editor",
        framework_note: "* All framework are Open-Source and free to use",
        framework_bootstrap: "Bootstrap 5 <sup class=\"manrope rounded-2 btn-outline-m3\">&nbsp;<iconify-icon inline icon=\"carbon:fork\"></iconify-icon>main&nbsp;</sup>",
        framework_iconify: "Iconify <sup class=\"manrope rounded-2 bg-warning\">&nbsp;HTML | CSS&nbsp;</sup>",
        framework_aos: "AOS Library <sup class=\"manrope rounded-2 bg-primary\">&nbsp;CSS&nbsp;</sup>",
        framework_vscode: "VS Code",
        framework_acode: "Acode",
        fonts_used: "Fonts Used",
        collab_title: "Want some collaboration?",
        collab_desc: "If you want to develop this website or collaborate on other projects, please contact me via social media or email:",
        editor_by: "Code Editor by <iconify-icon inline icon=\"meteor-icons:visual-studio-code\"></iconify-icon>",
        android: "Android",
        windows: "Windows",
        others_title: "Others :",
        basic_html: "Basic HTML",
        format_text: "Format Text",
        basic_php: "Basic PHP",
        var_php: "PHP Variables",
        tj: "Transjakarta",
        material3: "Material 3 Web",
        skill_js: "JavaScript",
        skill_js_desc: "Interactive web programming language.",
        skill_php: "php",
        skill_php_desc: "Popular backend language for dynamic websites.",
        skill_laravel: "Laravel",
        skill_laravel_desc: "Modern and powerful PHP framework.",
        skill_filament: "Filament",
        skill_filament_desc: "Admin panel toolkit for Laravel.",
        skills_title: "Languages & Framework Learned",
        projects_title: "Projects",
        project1_title: "Transjakarta (TJ)",
        project1_desc: "An interactive website for searching routes, corridors, and Transjakarta bus information. Built with real data and a modern UI.",
        project1_btn: "View Project",
        project2_title: "Material 3 Website",
        project2_desc: "A Material 3 (Material You) demo website with dynamic themes, interactive components, and modern design based on Google Material Design.",
        project2_btn: "View Project",
        project3_title: "Hexa Team Developer",
        project3_desc: "Contributor and developer at <b>Hexa Team</b>, a developer community focused on collaboration and open-source app/website development.",
        project3_btn: "View Portfolio",
        skills_title:"Languanges & Framework Learned",
        pendidikan_title: "Educational Background"
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    // Ganti semua teks
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        let html = translations[lang][key];
        if (html) {
            el.innerHTML = html;
        }
    });
    if (typeof window.setAchievementsLang === 'function') {
        window.setAchievementsLang(lang);
    }
}
// Language switch logic
let currentLang = 'en';
function updateLangButton(lang) {
  const flagIcon = lang === 'id' ? '<iconify-icon icon="twemoji:flag-indonesia" style="font-size:1.5rem;"></iconify-icon>' : '<iconify-icon icon="twemoji:flag-united-states" style="font-size:1.5rem;"></iconify-icon>';
  document.getElementById('lang-main-flag').innerHTML = flagIcon;
  // Hide current lang from dropdown
  document.getElementById('lang-option-id').style.display = lang === 'id' ? 'none' : 'flex';
  document.getElementById('lang-option-en').style.display = lang === 'en' ? 'none' : 'flex';
}
function closeDropdown() {
  document.getElementById('lang-dropdown').style.display = 'none';
  // Tidak perlu caret
}
function openDropdown() {
  document.getElementById('lang-dropdown').style.display = 'block';
  // Tidak perlu caret
}
window.addEventListener('DOMContentLoaded', function() {
  // Pastikan tombol utama benar-benar bisa diklik
  const langMainBtn = document.getElementById('lang-main-btn');
  langMainBtn.style.pointerEvents = 'auto';
  langMainBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown.style.display === 'block') {
      closeDropdown();
    } else {
      openDropdown();
    }
  });
  document.getElementById('lang-option-id').onclick = function() {
    setLanguage('id');
    currentLang = 'id';
    updateLangButton('id');
    localStorage.setItem('lang', 'id');
    closeDropdown();
  };
  document.getElementById('lang-option-en').onclick = function() {
    setLanguage('en');
    currentLang = 'en';
    updateLangButton('en');
    localStorage.setItem('lang', 'en');
    closeDropdown();
  };
  document.addEventListener('click', function(e) {
    if (!document.getElementById('lang-float-switch').contains(e.target)) {
      closeDropdown();
    }
  });
  // Set default language to last used or EN
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
  updateLangButton(savedLang);
});
// Pastikan dropdown bahasa selalu disembunyikan saat load awal
window.addEventListener('DOMContentLoaded', function() {
  var langDropdown = document.getElementById('lang-dropdown');
  if (langDropdown) langDropdown.style.display = 'none';
});

// Navigation logic
function navigate(page) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.btn-group .btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    const activeButton = document.getElementById(`btn-${page}`);
    if (activeButton) activeButton.classList.add('active');

    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('show'));

    // Show the selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) selectedPage.classList.add('show');

    // Update the URL hash
    window.history.pushState({}, '', `#${page}`);
}

window.onload = function () {
    // Get the initial page from the URL hash or default to 'home'
    const initialPage = window.location.hash.substring(1) || 'home';
    const selectedPage = document.getElementById(initialPage) ? initialPage : 'home';
    navigate(selectedPage);
};

// Achievement rotation logic
const achievements_id = [
    "🎓 Ranking 2 Semester 1 Kelas 10",
    "🚀 Ranking 1 Semester 2 Kelas 10",
    "🎓 Ranking 1 Semester 1 Kelas 11",
    "🥈 Ranking 2 Semester 2 Kelas 11",
    "🎓 Ranking 3 Semester 1 Kelas 12",
    "🚀 Ranking 1 Semester 2 Kelas 12",
    "🩺 Ketua PMR sekolah tahun ajaran 2022–2023",
    "💻 Anggota aktif OSIS Divisi IT 2022–2024",
    "🏆 Nilai tertinggi di jurusan Rekayasa Perangkat Lunak dan nilai teratas di seluruh jurusan akademik sekolah",
];
const achievements_en = [
    "🎓 Achieved 2nd place in Semester 1 Grade 10",
    "🚀 Achieved 1st place in Semester 2 Grade 10",
    "🎓 Achieved 1st place in Semester 1 Grade 11",
    "🥈 Achieved 2nd place in Semester 2 Grade 11",
    "🎓 Achieved 3rd place in Semester 1 Grade 12",
    "🚀 Achieved 1st place in Semester 2 Grade 12",
    "🩺 Served as the Head of the School Red Cross Youth (PMR) for the 2022–2023 academic year",
    "💻 Served as an active member of the Student Council (OSIS), IT Division, from 2022 to 2024",
    "🏆 Earned the highest academic performance in the Software Engineering major and ranked top across all academic majors at the school",
];
let index = 0;
let currentAchievements = achievements_en;
const box = document.getElementById("rotatingAchievement");
const indicatorsContainer = document.getElementById("achievement-indicators");

function renderIndicators() {
    indicatorsContainer.innerHTML = "";
    for (let i = 0; i < currentAchievements.length; i++) {
        const dot = document.createElement("span");
        dot.className = "achievement-dot" + (i === index ? " active" : "");
        dot.setAttribute('data-index', i);
        dot.style.cursor = 'pointer';
        dot.onclick = function() {
            index = i;
            showNextAchievement(true); // true = manual
            resetAchievementInterval();
        };
        indicatorsContainer.appendChild(dot);
    }
}

let achievementInterval;
function showNextAchievement(manual = false) {
    box.style.opacity = 0;
    setTimeout(() => {
        box.innerHTML = currentAchievements[index];
        box.style.opacity = 1;
        renderIndicators();
        if (!manual) index = (index + 1) % currentAchievements.length;
    }, 300);
}
function resetAchievementInterval() {
    clearInterval(achievementInterval);
    achievementInterval = setInterval(showNextAchievement, 3500);
}
function setAchievementsLang(lang) {
    currentAchievements = lang === 'id' ? achievements_id : achievements_en;
    index = 0;
    showNextAchievement();
    resetAchievementInterval();
}

showNextAchievement();
resetAchievementInterval();
window.setAchievementsLang = setAchievementsLang;

// Typing effect logic
const texts = [
    "Muhammad Fachri Al Husein",
    "Flixdz",
    "@muhfhri._",
    "Front End Developer",
    "UI Design",
    "To The Top!",
    "Junior Web Developer",
];

const typingSpeed = 100;
const delay = 1500;

const typingElement = document.getElementById("typing-effect");

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        typingElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delay);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, typingSpeed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, typingSpeed / 2);
    }
}

typeText();

// Time display logic
var satuaku = n => {
    return ('0' + n).slice(-2);
}

setInterval(() => {
    var date = new Date();
    var jam = satuaku(date.getHours());
    var menit = satuaku(date.getMinutes());
    var detik = satuaku(date.getSeconds());
    var tampilWaktu = jam + ":" + menit + ":" + detik;

    document.getElementById("waktu").innerHTML = tampilWaktu;
}, 1000);

// Clickable effect logic
const clickableElements = document.querySelectorAll(".clickable");

        clickableElements.forEach(element => {
            element.addEventListener("click", function () {
                if (!element.textContent.endsWith(" #")) {
                    element.textContent += " #";
                }
            });

            document.addEventListener("click", function (event) {
                if (!element.contains(event.target)) {
                    element.textContent = element.textContent.replace(" #", "");
                }
            });
        });

// YouTube API fetch
const channelId = "UCzU0mlmLis0p2XOvRL1r0-Q";
fetch(`https://api.socialcounts.org/youtube-live-subscriber-count/${channelId}`)
  .then(res => res.json())
  .then(data => {
    const count = data.API_sub || data.est_sub || "N/A";
    let views = "", videos = "";
    if(Array.isArray(data.table)) {
      let viewsObj = data.table.find(x => x.name === "Channel Views");
      let videosObj = data.table.find(x => x.name === "Videos");
      views = viewsObj ? `${viewsObj.count.toLocaleString()} views` : '';
      videos = videosObj ? `${videosObj.count} videos` : '';
    }
    document.getElementById("yt-channel-stats").innerHTML =
      `<div class='fw-bold' style='font-size:1.15rem;'>${count.toLocaleString()} subscribers</div>` +
      `<div class='small text-secondary'>${[views, videos].filter(Boolean).join(' <span style=\"font-size:1.2em;vertical-align:middle;\">&bull;</span> ')}</div>`;
  })
  .catch(() => {
    document.getElementById("yt-channel-stats").innerHTML = "<div>Channel stats unavailable</div>";
  });

// scroll progress
  window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  });

  //AOS
  AOS.init({
    once: false,
});