// Material 3 Portfolio JavaScript

// Material You Color Palettes
const materialYouPalettes = [
    // Purple (Default)
    {
        name: 'Purple',
        primary: '#6750A4',
        onPrimary: '#FFFFFF',
        primaryContainer: '#EADDFF',
        onPrimaryContainer: '#21005D',
        secondary: '#625B71',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#E8DEF8',
        onSecondaryContainer: '#1D192B',
        tertiary: '#7D5260',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#FFD8E4',
        onTertiaryContainer: '#31111D'
    },
    // Blue
    {
        name: 'Blue',
        primary: '#1B69DA',
        onPrimary: '#FFFFFF',
        primaryContainer: '#D3E3FD',
        onPrimaryContainer: '#041E49',
        secondary: '#535F70',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#D6E3F7',
        onSecondaryContainer: '#0F1C2B',
        tertiary: '#6B5B92',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#F2DAFF',
        onTertiaryContainer: '#26004E'
    },
    // Green
    {
        name: 'Green',
        primary: '#006A6B',
        onPrimary: '#FFFFFF',
        primaryContainer: '#6FF6F7',
        onPrimaryContainer: '#002020',
        secondary: '#4A6363',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#CCE8E7',
        onSecondaryContainer: '#051F1F',
        tertiary: '#4D6042',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#CDE5BE',
        onTertiaryContainer: '#0B1F05'
    },
    // Orange
    {
        name: 'Orange',
        primary: '#A05D00',
        onPrimary: '#FFFFFF',
        primaryContainer: '#FFDF9C',
        onPrimaryContainer: '#331C00',
        secondary: '#6F5B40',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#FAE0BB',
        onSecondaryContainer: '#271905',
        tertiary: '#516440',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#D3EABB',
        onTertiaryContainer: '#0F2004'
    },
    // Red
    {
        name: 'Red',
        primary: '#B3261E',
        onPrimary: '#FFFFFF',
        primaryContainer: '#F9DEDC',
        onPrimaryContainer: '#410E0B',
        secondary: '#775652',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#FFDAD6',
        onSecondaryContainer: '#2C1512',
        tertiary: '#75442A',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#FFDCC2',
        onTertiaryContainer: '#2B1700'
    },
    // Teal
    {
        name: 'Teal',
        primary: '#00696C',
        onPrimary: '#FFFFFF',
        primaryContainer: '#6FF6F9',
        onPrimaryContainer: '#002021',
        secondary: '#4A6365',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#CCE8EA',
        onSecondaryContainer: '#051F20',
        tertiary: '#456179',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#CCE5FF',
        onTertiaryContainer: '#001E30'
    }
];

// Initialize Material You colors with lock support
function initMaterialYouColors() {
    const savedPalette = localStorage.getItem('material-you-palette');
    const isLocked = localStorage.getItem('palette-locked') === 'true';
    let palette;
    
    if (savedPalette && isLocked) {
        // Use saved palette if locked
        palette = JSON.parse(savedPalette);
    } else {
        // Always pick a random palette if not locked
        const randomIndex = Math.floor(Math.random() * materialYouPalettes.length);
        palette = materialYouPalettes[randomIndex];
        localStorage.setItem('material-you-palette', JSON.stringify(palette));
    }
    
    applyPaletteColors(palette);
    
    console.log(`🎨 Material You palette loaded: ${palette.name}`);
    
    // Update footer palette name
    const paletteSpan = document.getElementById('current-palette');
    if (paletteSpan) {
        paletteSpan.textContent = `${palette.name} Palette`;
    }
}

// Apply palette colors with proper dark/light theme support
function applyPaletteColors(palette) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        // Dark theme colors (inverted and adjusted)
        document.documentElement.style.setProperty('--md-sys-color-primary', lightenColor(palette.primary, 20));
        document.documentElement.style.setProperty('--md-sys-color-on-primary', palette.onPrimaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-primary-container', darkenColor(palette.primaryContainer, 40));
        document.documentElement.style.setProperty('--md-sys-color-on-primary-container', palette.primaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-secondary', lightenColor(palette.secondary, 15));
        document.documentElement.style.setProperty('--md-sys-color-on-secondary', palette.onSecondaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-secondary-container', darkenColor(palette.secondaryContainer, 40));
        document.documentElement.style.setProperty('--md-sys-color-on-secondary-container', palette.secondaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-tertiary', lightenColor(palette.tertiary, 15));
        document.documentElement.style.setProperty('--md-sys-color-on-tertiary', palette.onTertiaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-tertiary-container', darkenColor(palette.tertiaryContainer, 40));
        document.documentElement.style.setProperty('--md-sys-color-on-tertiary-container', palette.tertiaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-inverse-primary', palette.primary);
    } else {
        // Light theme colors (original)
        document.documentElement.style.setProperty('--md-sys-color-primary', palette.primary);
        document.documentElement.style.setProperty('--md-sys-color-on-primary', palette.onPrimary);
        document.documentElement.style.setProperty('--md-sys-color-primary-container', palette.primaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-on-primary-container', palette.onPrimaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-secondary', palette.secondary);
        document.documentElement.style.setProperty('--md-sys-color-on-secondary', palette.onSecondary);
        document.documentElement.style.setProperty('--md-sys-color-secondary-container', palette.secondaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-on-secondary-container', palette.onSecondaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-tertiary', palette.tertiary);
        document.documentElement.style.setProperty('--md-sys-color-on-tertiary', palette.onTertiary);
        document.documentElement.style.setProperty('--md-sys-color-tertiary-container', palette.tertiaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-on-tertiary-container', palette.onTertiaryContainer);
        document.documentElement.style.setProperty('--md-sys-color-inverse-primary', lightenColor(palette.primary, 20));
    }
}

// Helper functions for color manipulation
function lightenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R > 255 ? 255 : R < 0 ? 0 : R) * 0x10000 +
        (G > 255 ? 255 : G < 0 ? 0 : G) * 0x100 +
        (B > 255 ? 255 : B < 0 ? 0 : B)).toString(16).slice(1);
}

// Palette notification removed per user request

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const themeIcon = themeToggle.querySelector('.material-symbols-rounded');
const themeText = themeToggle.querySelector('.theme-text');
const appBarLogo = document.getElementById('app-bar-logo');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);
syncPreloadStyle(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    syncPreloadStyle(newTheme);
    
    // Reapply colors for the new theme
    const savedPalette = localStorage.getItem('material-you-palette');
    if (savedPalette) {
        const palette = JSON.parse(savedPalette);
        applyPaletteColors(palette);
    }
});

// Keep the preloaded inline style tag (used to prevent theme flash) in sync
function syncPreloadStyle(theme) {
    try {
        const tag = document.getElementById('preload-theme-style');
        if (tag) {
            tag.textContent = theme === 'dark'
                ? 'html{background:#131318;color:#E6E0E9;}'
                : 'html{background:#FFFBFE;color:#1C1B1F;}';
        }
    } catch (e) {}
}

function updateThemeIcon(theme) {
    const logoDisplay = document.getElementById('logo-display');
    
    if (theme === 'dark') {
        themeIcon.textContent = 'light_mode';
        themeText.textContent = 'Light';
        if (appBarLogo) {
            appBarLogo.src = 'css/image/dark.gif';
        }
        if (logoDisplay) {
            logoDisplay.src = 'css/image/dark.gif';
        }
    } else {
        themeIcon.textContent = 'dark_mode';
        themeText.textContent = 'Dark';
        if (appBarLogo) {
            appBarLogo.src = 'css/image/light.gif';
        }
        if (logoDisplay) {
            logoDisplay.src = 'css/image/light.gif';
        }
    }
}

// Navigation functionality with localStorage
const navChips = document.querySelectorAll('.chip[data-section]');
const sections = document.querySelectorAll('.page-section');

// Function to show specific section
function showSection(sectionId) {
    // Update active chip
    navChips.forEach(c => c.classList.remove('active'));
    const activeChip = document.querySelector(`.chip[data-section="${sectionId}"]`);
    if (activeChip) activeChip.classList.add('active');
    
    // Show target section
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
    }
    
    // Save to localStorage
    localStorage.setItem('lastActiveSection', sectionId);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load last active section or default to 'about'
function loadLastActiveSection() {
    const lastSection = localStorage.getItem('lastActiveSection') || 'about';
    showSection(lastSection);
}

// Add click listeners to navigation chips
navChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const targetSection = chip.getAttribute('data-section');
        showSection(targetSection);
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// YouTube stats (simulated)
function loadYouTubeStats() {
    const ytStats = document.getElementById('yt-stats');
    // Simulate API call delay
    setTimeout(() => {
        ytStats.innerHTML = '<span class="material-symbols-rounded" style="font-size: 16px; vertical-align: middle; margin-right: 4px;">visibility</span>1.2K subscribers';
    }, 1500);
}

// Load stats when page loads
loadYouTubeStats();

// Simple hover animations
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize fade animations
function initFadeAnimations() {
    document.querySelectorAll('.card, .timeline-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Time Display
function updateTime() {
    const now = new Date();
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const timeElement = document.getElementById('time-display');
    const dateElement = document.getElementById('date-display');
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('id-ID', timeOptions);
    }
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('id-ID', dateOptions);
    }
}

// Weather Widget integrated from weather.js
// Real-time weather functionality is handled by weather.js

// Achievements Rotator - Academic Rankings
const achievements = [
    "🎓 Ranking 2 Semester 1 Kelas 10",
    "🚀 Ranking 1 Semester 2 Kelas 10",
    "🎓 Ranking 1 Semester 1 Kelas 11",
    "🥈 Ranking 2 Semester 2 Kelas 11",
    "🎓 Ranking 3 Semester 1 Kelas 12",
    "🚀 Ranking 1 Semester 2 Kelas 12",
    "🩺 Ketua PMR sekolah tahun ajaran 2022–2023",
    "💻 Anggota aktif OSIS Divisi IT 2022–2024",
    "🏆 Nilai tertinggi di jurusan Rekayasa Perangkat Lunak dan nilai teratas di seluruh jurusan akademik sekolah"
];

let currentAchievementIndex = 0;

function rotateAchievements() {
    const achievementBox = document.getElementById('rotating-achievement');
    const indicators = document.querySelectorAll('.achievement-dot');
    
    if (achievementBox) {
        achievementBox.style.opacity = '0';
        
        setTimeout(() => {
            achievementBox.textContent = achievements[currentAchievementIndex];
            achievementBox.style.opacity = '1';
            
            // Update indicators
            indicators.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentAchievementIndex);
            });
            
            currentAchievementIndex = (currentAchievementIndex + 1) % achievements.length;
        }, 300);
    }
}

// Initialize achievement indicators
function initAchievementIndicators() {
    const container = document.getElementById('achievement-indicators');
    if (container) {
        container.innerHTML = '';
        achievements.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'achievement-dot';
            if (index === 0) dot.classList.add('active');
            
            // Make dots clickable
            dot.onclick = () => goToAchievement(index);
            dot.title = `Achievement ${index + 1}`;
            
            container.appendChild(dot);
        });
    }
}

// Go to specific achievement
function goToAchievement(index) {
    if (index >= 0 && index < achievements.length) {
        currentAchievementIndex = index;
        const achievementBox = document.getElementById('rotating-achievement');
        const indicators = document.querySelectorAll('.achievement-dot');
        
        if (achievementBox) {
            achievementBox.style.opacity = '0';
            
            setTimeout(() => {
                achievementBox.textContent = achievements[currentAchievementIndex];
                achievementBox.style.opacity = '1';
                
                // Update indicators
                indicators.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentAchievementIndex);
                });
            }, 150);
        }
    }
}

// Typing Effect - Fixed to prevent layout shift
const typingTexts = [
    "Welcome to my portfolio! 👋",
    "Selamat datang di portofolio saya! 🚀",
    "Let's build something amazing together! ✨",
    "Mari kita buat sesuatu yang luar biasa! 🌟"
];

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const currentText = typingTexts[typingIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % typingTexts.length;
            setTimeout(typeEffect, 800);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 3000); // Longer pause when complete
            return;
        }
    }
    
    setTimeout(typeEffect, isDeleting ? 75 : 120);
}

// Initialize typing effect with stable layout
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        // Set initial text to reserve space
        typingElement.textContent = "Welcome to my portfolio! 👋";
        
        // Clear and start typing after a moment
        setTimeout(() => {
            typingElement.textContent = "";
            charIndex = 0;
            typeEffect();
        }, 1500);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme first
    root.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    syncPreloadStyle(currentTheme);
    
    // Initialize Material You colors after theme is set
    initMaterialYouColors();
    
    initFadeAnimations();
    
    // Initialize time display
    updateTime();
    setInterval(updateTime, 1000);
    
    // Weather initialization is handled by weather.js
    
    // Initialize achievements
    initAchievementIndicators();
    const achievementBox = document.getElementById('rotating-achievement');
    if (achievementBox) {
        achievementBox.textContent = achievements[0];
        setInterval(rotateAchievements, 4000);
    }
    
    // Initialize typing effect with stable layout
    initTypingEffect();
    
    // Load last active section
    loadLastActiveSection();
    
    // Initialize settings panel
    initSettingsPanel();
    
    // Debug theme
    console.log(`🌙 Theme initialized: ${currentTheme}`);
});

// Contact email functionality
function openEmailClient() {
    window.location.href = 'mailto:frezzcraft109@gmail.com?subject=Collaboration%20Inquiry';
}

// Utility function to truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Initialize project descriptions truncation
function initProjectDescriptions() {
    document.querySelectorAll('.project-description').forEach(desc => {
        const originalText = desc.textContent;
        const maxLength = 120;
        
        if (originalText.length > maxLength) {
            desc.textContent = truncateText(originalText, maxLength);
            desc.title = originalText; // Show full text on hover
        }
    });
}

// Call when projects section is loaded
initProjectDescriptions();

// Settings Panel Functions
function initSettingsPanel() {
    const settingsBtn = document.getElementById('settingsButton');
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsOverlay = document.getElementById('settingsOverlay');
    const closeBtn = document.getElementById('closeSettings');
    const themeToggleAlt = document.getElementById('themeToggleAlt');
    const paletteLockToggle = document.getElementById('paletteLockToggle');
    const refreshPaletteBtn = document.getElementById('refreshPaletteBtn');
    
    // Open settings
    settingsBtn.addEventListener('click', openSettings);
    
    // Close settings
    closeBtn.addEventListener('click', closeSettings);
    settingsOverlay.addEventListener('click', closeSettings);
    
    // Theme toggle in settings
    themeToggleAlt.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        updateSettingsThemeToggle(newTheme);
        syncPreloadStyle(newTheme);
        
        // Reapply colors for the new theme
        const savedPalette = localStorage.getItem('material-you-palette');
        if (savedPalette) {
            const palette = JSON.parse(savedPalette);
            applyPaletteColors(palette);
        }
    });
    
    // Palette lock toggle
    paletteLockToggle.addEventListener('click', togglePaletteLock);
    
    // Refresh palette button
    refreshPaletteBtn.addEventListener('click', refreshPalette);
    
    // Initialize settings UI
    updateSettingsThemeToggle(currentTheme);
    updatePaletteLockToggle();
}

function openSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsOverlay = document.getElementById('settingsOverlay');
    
    settingsPanel.classList.add('show');
    settingsOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsOverlay = document.getElementById('settingsOverlay');
    
    settingsPanel.classList.remove('show');
    settingsOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

function updateSettingsThemeToggle(theme) {
    const themeToggleAlt = document.getElementById('themeToggleAlt');
    if (!themeToggleAlt) return;
    
    const icon = themeToggleAlt.querySelector('.material-symbols-rounded');
    const text = themeToggleAlt.querySelector('.toggle-text');
    
    if (theme === 'dark') {
        icon.textContent = 'light_mode';
        text.textContent = 'Light';
    } else {
        icon.textContent = 'dark_mode';
        text.textContent = 'Dark';
    }
}

function togglePaletteLock() {
    const isLocked = localStorage.getItem('palette-locked') === 'true';
    const newLockState = !isLocked;
    
    localStorage.setItem('palette-locked', newLockState.toString());
    updatePaletteLockToggle();
    
    console.log(`🔒 Palette ${newLockState ? 'locked' : 'unlocked'}`);
}

function updatePaletteLockToggle() {
    const paletteLockToggle = document.getElementById('paletteLockToggle');
    if (!paletteLockToggle) return;
    
    const isLocked = localStorage.getItem('palette-locked') === 'true';
    const icon = paletteLockToggle.querySelector('.material-symbols-rounded');
    const text = paletteLockToggle.querySelector('.toggle-text');
    
    if (isLocked) {
        icon.textContent = 'lock';
        text.textContent = 'Lock';
        paletteLockToggle.classList.add('locked');
    } else {
        icon.textContent = 'lock_open';
        text.textContent = 'Unlock';
        paletteLockToggle.classList.remove('locked');
    }
}

function refreshPalette() {
    const isLocked = localStorage.getItem('palette-locked') === 'true';
    if (isLocked) {
        console.log('🔒 Palette is locked, cannot refresh');
        return;
    }
    
    // Don't reload page, just change palette
    const randomIndex = Math.floor(Math.random() * materialYouPalettes.length);
    const newPalette = materialYouPalettes[randomIndex];
    
    localStorage.setItem('material-you-palette', JSON.stringify(newPalette));
    applyPaletteColors(newPalette);
    
    // Update footer palette name
    const paletteSpan = document.getElementById('current-palette');
    if (paletteSpan) {
        paletteSpan.textContent = `${newPalette.name} Palette`;
    }
    
    console.log(`🎨 Palette refreshed: ${newPalette.name}`);
}
