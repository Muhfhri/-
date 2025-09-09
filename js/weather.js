// Weather Widget - OpenWeatherMap Integration
// Handles: displaying current weather, editing location, geolocation, caching
(function () {
    'use strict';

    const WEATHER_API_KEY = '962322a87800402e0b9d7052cb5e8f16';
    const WEATHER_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
    const LS_LOCATION_KEY = 'weather-location';
    let latestWeatherData = null;
    let weatherInfoRotateTimer = null;
    let weatherInfoMessages = [];
    let weatherInfoIndex = 0;
    
    // Fungsi untuk mendapatkan icon berdasarkan weather id
    function getWeatherDescIcon(weatherId) {
        if (weatherId >= 200 && weatherId < 300) return 'thunderstorm';
        if (weatherId >= 300 && weatherId < 400) return 'grain';  // Drizzle
        if (weatherId >= 500 && weatherId < 600) return 'rainy';
        if (weatherId >= 600 && weatherId < 700) return 'ac_unit';
        if (weatherId >= 700 && weatherId < 800) return 'foggy';
        if (weatherId === 800) return 'wb_sunny';
        if (weatherId === 801) return 'wb_cloudy';
        if (weatherId === 802) return 'cloud';
        if (weatherId === 803 || weatherId === 804) return 'cloud_queue';
        return 'info';
    }
    
    // Fungsi untuk update tampilan informasi cuaca
    function updateWeatherInfo() {
        const descEl = document.getElementById('weather-description');
        const descIconEl = document.getElementById('weather-desc-icon');
        const descContainer = document.querySelector('.weather-description-container');
        
        if (descContainer && weatherInfoMessages.length > 0) {
            const currentMessage = weatherInfoMessages[weatherInfoIndex];
            
            // Fade out effect
            if (descContainer) descContainer.style.opacity = '0';
            
            setTimeout(() => {
                // Update content using innerHTML untuk HTML content
                if (descContainer && currentMessage.html) {
                    descContainer.innerHTML = currentMessage.html;
                }
                
                // Fade in effect
                if (descContainer) descContainer.style.opacity = '1';
            }, 300);
        }
    }

    function init() {
        const iconEl = document.getElementById('weather-icon');
        const infoEl = document.getElementById('weather-info');
        const editBtn = document.getElementById('weather-edit-btn');
        const editBox = document.getElementById('weather-edit-box');

        if (!iconEl || !infoEl || !editBtn || !editBox) return;

        // Build edit UI once
        buildEditUI(editBox);

        // Toggle editor
        editBtn.addEventListener('click', () => {
            const isHidden = editBox.style.display === 'none' || editBox.style.display === '';
            editBox.style.display = isHidden ? 'block' : 'none';
            if (editBox.style.display === 'block') {
                const input = document.getElementById('weather-city-input');
                if (input) input.focus();
            }
        });

        // Click city-temp to open detailed overlay
        const cityTempEl = document.getElementById('weather-city-temp');
        if (cityTempEl) {
            cityTempEl.addEventListener('click', (e) => {
                e.stopPropagation();
                openWeatherOverlay();
            });
        }

        // Prevent clicks inside edit box from bubbling to weather card
        if (editBox) {
            editBox.addEventListener('click', (e) => e.stopPropagation());
        }

        // Ensure overlay styles are present
        ensureOverlayStyles();

        // Load weather on start
        loadAndRenderWeather();
    }

    function buildEditUI(container) {
        const saved = getSavedLocation();
        const savedCity = saved && saved.mode === 'city' ? saved.city : '';
        container.innerHTML = '' +
            '<div style="display:flex; gap:8px; align-items:center; margin-top:8px; flex-wrap: wrap;">' +
            '  <input id="weather-city-input" type="text" placeholder="Masukkan kota (mis. Jakarta)"' +
            `         value="${escapeHtml(savedCity)}"` +
            '         style="flex:1; min-width:180px; padding:8px 10px; border-radius:8px; border:1px solid var(--md-sys-color-outline); background:transparent; color:inherit;" />' +
            '  <button id="weather-save-btn" class="btn btn-filled">' +
            '    <span class="material-symbols-rounded" style="font-size:16px; margin-right:6px;">save</span>Simpan' +
            '  </button>' +
            '  <button id="weather-geo-btn" class="btn btn-outlined">' +
            '    <span class="material-symbols-rounded" style="font-size:16px; margin-right:6px;">my_location</span>Lokasi saya' +
            '  </button>' +
            '</div>' +
            '<div class="body-small" style="color: var(--md-sys-color-on-surface-variant); margin-top:6px;">' +
            '  Tekan Enter untuk simpan. Contoh: "Jakarta" atau "Bekasi".' +
            '</div>' +
            '<div id="weather-edit-error" class="body-small" style="color: var(--md-sys-color-error); margin-top:6px; display:none;"></div>';

        // Events
        const input = document.getElementById('weather-city-input');
        const saveBtn = document.getElementById('weather-save-btn');
        const geoBtn = document.getElementById('weather-geo-btn');

        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    onSaveCity();
                }
            });
        }
        if (saveBtn) saveBtn.addEventListener('click', onSaveCity);
        if (geoBtn) geoBtn.addEventListener('click', onUseGeolocation);
    }

    function onSaveCity() {
        const input = document.getElementById('weather-city-input');
        const errEl = document.getElementById('weather-edit-error');
        if (!input) return;
        const city = input.value.trim();
        if (!city) {
            input.focus();
            return;
        }
        if (errEl) {
            errEl.style.display = 'none';
            errEl.textContent = '';
        }
        validateCityName(city)
            .then((ok) => {
                if (!ok) {
                    if (errEl) {
                        errEl.textContent = 'Lokasi tidak ditemukan';
                        errEl.style.display = 'block';
                    }
                    return;
                }
                saveLocation({ mode: 'city', city });
                hideEditor();
                loadAndRenderWeather();
            })
            .catch(() => {
                if (errEl) {
                    errEl.textContent = 'Lokasi tidak ditemukan';
                    errEl.style.display = 'block';
                }
            });
    }

    function onUseGeolocation() {
        const infoEl = document.getElementById('weather-info');
        if (infoEl) infoEl.textContent = 'Mendapatkan lokasi...';
        if (!navigator.geolocation) {
            if (infoEl) infoEl.textContent = 'Geolokasi tidak didukung.';
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                saveLocation({ mode: 'coords', lat: latitude, lon: longitude });
                hideEditor();
                loadAndRenderWeather();
            },
            (err) => {
                const info = document.getElementById('weather-info');
                if (info) info.textContent = 'Gagal mengakses lokasi.';
                console.warn('Geolocation error:', err);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
        );
    }

    function hideEditor() {
        const editBox = document.getElementById('weather-edit-box');
        if (editBox) editBox.style.display = 'none';
    }

    function loadAndRenderWeather(options) {
        const iconEl = document.getElementById('weather-icon');
        const infoEl = document.getElementById('weather-info');
        if (!iconEl || !infoEl) return;

        const loc = getEffectiveLocation();
        infoEl.textContent = 'Memuat cuaca...';

        const cacheKey = makeCacheKey(loc);
        const cached = readCache(cacheKey);
        if (cached) {
            renderWeather(cached);
        }

        fetchLiveWeather(loc)
            .then((data) => {
                if (!data) throw new Error('No data');
                writeCache(cacheKey, data);
                renderWeather(data);
                updateOverlayIfOpen();
            })
            .catch((err) => {
                if (!cached) {
                    if (err && (err.code === 'CITY_NOT_FOUND' || (typeof err.message === 'string' && err.message.includes('404')))) {
                        infoEl.textContent = 'Tidak dapat memuat cuaca, lokasi tidak valid';
                    } else {
                        infoEl.textContent = 'Tidak dapat memuat cuaca.';
                    }
                }
                console.warn('Weather fetch error:', err);
            });
    }

    function getEffectiveLocation() {
        const saved = getSavedLocation();
        if (saved && saved.mode === 'city' && saved.city) return saved;
        if (saved && saved.mode === 'coords' && isFinite(saved.lat) && isFinite(saved.lon)) return saved;
        // Default fallback
        return { mode: 'city', city: 'Jakarta' };
    }

    function fetchLiveWeather(location) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 12000);
        let url;
        if (location.mode === 'coords') {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(location.lat)}&lon=${encodeURIComponent(location.lon)}&appid=${WEATHER_API_KEY}&units=metric&lang=id`;
        } else {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location.city)}&appid=${WEATHER_API_KEY}&units=metric&lang=id`;
        }
        return fetch(url, { signal: controller.signal })
            .then(async (res) => {
                clearTimeout(timeoutId);
                const data = await res.json().catch(() => null);
                if (!res.ok) {
                    const err = new Error((data && data.message) ? data.message : `HTTP ${res.status}`);
                    if (res.status === 404) err.code = 'CITY_NOT_FOUND';
                    throw err;
                }
                return data;
            })
            .catch((err) => {
                clearTimeout(timeoutId);
                throw err;
            });
    }

    function renderWeather(data) {
        const iconEl = document.getElementById('weather-icon');
        const infoEl = document.getElementById('weather-info');
        const cityTempEl = document.getElementById('weather-city-temp');
        const descEl = document.getElementById('weather-description');
        const descIconEl = document.getElementById('weather-desc-icon');
        if (!iconEl || !infoEl || !cityTempEl) return;

        try {
            latestWeatherData = data;
            const temp = data && data.main ? Math.round(data.main.temp) : null;
            const weather = data && data.weather && data.weather[0] ? data.weather[0] : null;
            const id = weather ? weather.id : 800;
            const desc = weather ? formatWeatherDescription(weather.description) : 'Cerah';
            const name = data && data.name ? data.name : 'Lokasi';
            const iconCode = weather && weather.icon ? weather.icon : null;
            if (iconCode) {
                const url = getOwmIconUrl(iconCode, 2);
                iconEl.innerHTML = `<img src="${url}" alt="${escapeHtml(desc)}" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;" />`;
            } else {
                const isDay = computeIsDay(data);
                const fallbackIcon = mapIcon(id, isDay);
                iconEl.textContent = fallbackIcon;
            }

            const tempMain = typeof temp === 'number' ? `${temp}°C` : '';
            
            // Baris pertama: Kota, Suhu (langsung ke elemen terpisah)
            const cityTempText = `${name}, ${tempMain}`.trim();
            cityTempEl.textContent = cityTempText;
            
            // Tampilkan deskripsi cuaca dan mulai animasi berganti-ganti
            const descContainer = document.querySelector('.weather-description-container');
            if (descContainer) {
                // Gunakan fungsi buildInfoMessages yang sudah ada
                weatherInfoMessages = buildInfoMessages(data, desc);
                
                // Mulai rotasi jika ada pesan
                if (weatherInfoMessages.length > 0) {
                    startWeatherInfoRotation();
                } else {
                    descContainer.innerHTML = '<span class="material-symbols-rounded" style="font-size: 18px; margin-right: 6px; color: var(--md-sys-color-primary);">info</span><span class="weather-description">Data cuaca tidak tersedia</span>';
                }
            }

            // Clear info element (tidak digunakan)
            infoEl.textContent = '';
        } catch (e) {
            infoEl.textContent = 'Gagal menampilkan cuaca.';
        }
    }

    function computeIsDay(data) {
        try {
            const dt = data.dt * 1000;
            const sunrise = data.sys.sunrise * 1000;
            const sunset = data.sys.sunset * 1000;
            return dt >= sunrise && dt < sunset;
        } catch (_) {
            return true;
        }
    }

    function mapIcon(weatherId, isDay) {
        if (weatherId >= 200 && weatherId < 300) return 'thunderstorm';
        if (weatherId >= 300 && weatherId < 500) return 'rainy';
        if (weatherId >= 500 && weatherId < 600) return 'rainy';
        if (weatherId >= 600 && weatherId < 700) return 'snowing';
        if (weatherId >= 700 && weatherId < 800) return 'foggy';
        if (weatherId === 800) return isDay ? 'sunny' : 'clear_night';
        if (weatherId === 801) return isDay ? 'partly_cloudy_day' : 'partly_cloudy_night';
        return 'cloudy';
    }

    function capitalize(text) {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    
    // Fungsi untuk memperbaiki dan memformat deskripsi cuaca dari OWM
    function formatWeatherDescription(description) {
        if (!description) return '';
        
        // Mapping untuk memperbaiki terjemahan aneh dari OWM
        const weatherMapping = {
            'awan pecah': 'Berawan Sebagian',
            'awan tersebar': 'Berawan',
            'awan mendung': 'Mendung',
            'langit cerah': 'Cerah',
            'cerah': 'Cerah',
            'hujan ringan': 'Hujan Ringan',
            'hujan sedang': 'Hujan Sedang',
            'hujan lebat': 'Hujan Lebat',
            'hujan sangat lebat': 'Hujan Sangat Lebat',
            'hujan ekstrem': 'Hujan Ekstrem',
            'hujan beku': 'Hujan Es',
            'hujan rintik-rintik': 'Gerimis',
            'hujan rintik ringan': 'Gerimis Ringan',
            'hujan rintik': 'Gerimis',
            'hujan dan rintik-rintik': 'Hujan Gerimis',
            'intensitas cahaya hujan rintik-rintik': 'Gerimis Ringan',
            'kabut': 'Berkabut',
            'kabut asap': 'Kabut Asap',
            'asap': 'Berasap',
            'debu': 'Berdebu',
            'pasir': 'Badai Pasir',
            'abu': 'Abu Vulkanik',
            'angin topan': 'Angin Kencang',
            'tornado': 'Tornado',
            'badai petir ringan': 'Hujan Petir Ringan',
            'badai petir': 'Hujan Petir',
            'badai petir dengan hujan ringan': 'Hujan Petir Ringan',
            'badai petir dengan hujan': 'Hujan Petir',
            'badai petir dengan hujan lebat': 'Hujan Petir Lebat',
            'badai petir ringan': 'Petir Ringan',
            'badai petir berat': 'Petir Lebat',
            'badai petir compang-camping': 'Petir Tidak Merata',
            'badai petir dengan gerimis ringan': 'Petir dengan Gerimis',
            'badai petir dengan gerimis': 'Petir dengan Gerimis',
            'badai petir dengan gerimis lebat': 'Petir dengan Gerimis Lebat',
            'salju ringan': 'Salju Ringan',
            'salju': 'Bersalju',
            'salju lebat': 'Salju Lebat',
            'salju tipis': 'Salju Tipis',
            'hujan salju': 'Hujan Salju',
            'hujan shower': 'Hujan Deras',
            'shower hujan ringan': 'Hujan Deras Ringan',
            'shower hujan lebat': 'Hujan Deras Lebat',
            'shower hujan compang-camping': 'Hujan Deras Tidak Merata',
            'beberapa awan': 'Berawan Sebagian',
            'sedikit berawan': 'Sedikit Berawan'
        };
        
        // Ubah ke lowercase untuk pencocokan
        const lowerDesc = description.toLowerCase();
        
        // Cek apakah ada mapping yang cocok
        let formatted = weatherMapping[lowerDesc] || description;
        
        // Jika tidak ada mapping, gunakan Title Case
        if (!weatherMapping[lowerDesc]) {
            // Ubah setiap kata menjadi huruf kapital di awal
            formatted = description
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }
        
        return formatted;
    }

    // LocalStorage helpers
    function getSavedLocation() {
        try {
            const raw = localStorage.getItem(LS_LOCATION_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (_) {
            return null;
        }
    }

    function saveLocation(obj) {
        try {
            localStorage.setItem(LS_LOCATION_KEY, JSON.stringify(obj));
        } catch (_) {}
    }

    function makeCacheKey(location) {
        if (location.mode === 'coords') {
            const lat = Number(location.lat).toFixed(3);
            const lon = Number(location.lon).toFixed(3);
            return `weatherCache:coords:${lat},${lon}`;
        }
        return `weatherCache:city:${(location.city || '').toLowerCase()}`;
    }

    function readCache(key) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return null;
            const obj = JSON.parse(raw);
            if (!obj || !obj.timestamp || !obj.data) return null;
            const isFresh = Date.now() - obj.timestamp < WEATHER_CACHE_TTL_MS;
            return isFresh ? obj.data : null;
        } catch (_) {
            return null;
        }
    }

    function writeCache(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
        } catch (_) {}
    }

    function escapeHtml(text) {
        return String(text || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getCountryName(countryCode) {
        const countries = {
            'AD': 'Andorra', 'AE': 'Uni Emirat Arab', 'AF': 'Afghanistan', 'AG': 'Antigua dan Barbuda',
            'AI': 'Anguilla', 'AL': 'Albania', 'AM': 'Armenia', 'AO': 'Angola', 'AQ': 'Antarktika',
            'AR': 'Argentina', 'AS': 'Samoa Amerika', 'AT': 'Austria', 'AU': 'Australia', 'AW': 'Aruba',
            'AX': 'Kepulauan Åland', 'AZ': 'Azerbaijan', 'BA': 'Bosnia dan Herzegovina', 'BB': 'Barbados',
            'BD': 'Bangladesh', 'BE': 'Belgia', 'BF': 'Burkina Faso', 'BG': 'Bulgaria', 'BH': 'Bahrain',
            'BI': 'Burundi', 'BJ': 'Benin', 'BL': 'Saint Barthélemy', 'BM': 'Bermuda', 'BN': 'Brunei',
            'BO': 'Bolivia', 'BQ': 'Bonaire', 'BR': 'Brasil', 'BS': 'Bahama', 'BT': 'Bhutan',
            'BV': 'Pulau Bouvet', 'BW': 'Botswana', 'BY': 'Belarus', 'BZ': 'Belize', 'CA': 'Kanada',
            'CC': 'Kepulauan Cocos', 'CD': 'Republik Demokratik Kongo', 'CF': 'Republik Afrika Tengah',
            'CG': 'Republik Kongo', 'CH': 'Swiss', 'CI': 'Pantai Gading', 'CK': 'Kepulauan Cook',
            'CL': 'Chili', 'CM': 'Kamerun', 'CN': 'Tiongkok', 'CO': 'Kolombia', 'CR': 'Kosta Rika',
            'CU': 'Kuba', 'CV': 'Tanjung Verde', 'CW': 'Curaçao', 'CX': 'Pulau Christmas', 'CY': 'Siprus',
            'CZ': 'Republik Ceko', 'DE': 'Jerman', 'DJ': 'Djibouti', 'DK': 'Denmark', 'DM': 'Dominika',
            'DO': 'Republik Dominika', 'DZ': 'Aljazair', 'EC': 'Ekuador', 'EE': 'Estonia', 'EG': 'Mesir',
            'EH': 'Sahara Barat', 'ER': 'Eritrea', 'ES': 'Spanyol', 'ET': 'Etiopia', 'FI': 'Finlandia',
            'FJ': 'Fiji', 'FK': 'Kepulauan Falkland', 'FM': 'Mikronesia', 'FO': 'Kepulauan Faroe',
            'FR': 'Prancis', 'GA': 'Gabon', 'GB': 'Britania Raya', 'GD': 'Grenada', 'GE': 'Georgia',
            'GF': 'Guyana Prancis', 'GG': 'Guernsey', 'GH': 'Ghana', 'GI': 'Gibraltar', 'GL': 'Greenland',
            'GM': 'Gambia', 'GN': 'Guinea', 'GP': 'Guadeloupe', 'GQ': 'Guinea Khatulistiwa', 'GR': 'Yunani',
            'GS': 'Georgia Selatan', 'GT': 'Guatemala', 'GU': 'Guam', 'GW': 'Guinea-Bissau', 'GY': 'Guyana',
            'HK': 'Hong Kong', 'HM': 'Pulau Heard', 'HN': 'Honduras', 'HR': 'Kroasia', 'HT': 'Haiti',
            'HU': 'Hongaria', 'ID': 'Indonesia', 'IE': 'Irlandia', 'IL': 'Israel', 'IM': 'Pulau Man',
            'IN': 'India', 'IO': 'Teritorial Britania di Samudra Hindia', 'IQ': 'Irak', 'IR': 'Iran',
            'IS': 'Islandia', 'IT': 'Italia', 'JE': 'Jersey', 'JM': 'Jamaika', 'JO': 'Yordania',
            'JP': 'Jepang', 'KE': 'Kenya', 'KG': 'Kirgizstan', 'KH': 'Kamboja', 'KI': 'Kiribati',
            'KM': 'Komoro', 'KN': 'Saint Kitts dan Nevis', 'KP': 'Korea Utara', 'KR': 'Korea Selatan',
            'KW': 'Kuwait', 'KY': 'Kepulauan Cayman', 'KZ': 'Kazakhstan', 'LA': 'Laos', 'LB': 'Lebanon',
            'LC': 'Saint Lucia', 'LI': 'Liechtenstein', 'LK': 'Sri Lanka', 'LR': 'Liberia', 'LS': 'Lesotho',
            'LT': 'Lithuania', 'LU': 'Luksemburg', 'LV': 'Latvia', 'LY': 'Libya', 'MA': 'Maroko',
            'MC': 'Monako', 'MD': 'Moldova', 'ME': 'Montenegro', 'MF': 'Saint Martin', 'MG': 'Madagaskar',
            'MH': 'Kepulauan Marshall', 'MK': 'Makedonia Utara', 'ML': 'Mali', 'MM': 'Myanmar',
            'MN': 'Mongolia', 'MO': 'Makau', 'MP': 'Kepulauan Mariana Utara', 'MQ': 'Martinique',
            'MR': 'Mauritania', 'MS': 'Montserrat', 'MT': 'Malta', 'MU': 'Mauritius', 'MV': 'Maladewa',
            'MW': 'Malawi', 'MX': 'Meksiko', 'MY': 'Malaysia', 'MZ': 'Mozambik', 'NA': 'Namibia',
            'NC': 'Kaledonia Baru', 'NE': 'Niger', 'NF': 'Pulau Norfolk', 'NG': 'Nigeria', 'NI': 'Nikaragua',
            'NL': 'Belanda', 'NO': 'Norwegia', 'NP': 'Nepal', 'NR': 'Nauru', 'NU': 'Niue',
            'NZ': 'Selandia Baru', 'OM': 'Oman', 'PA': 'Panama', 'PE': 'Peru', 'PF': 'Polinesia Prancis',
            'PG': 'Papua Nugini', 'PH': 'Filipina', 'PK': 'Pakistan', 'PL': 'Polandia',
            'PM': 'Saint Pierre dan Miquelon', 'PN': 'Kepulauan Pitcairn', 'PR': 'Puerto Riko',
            'PS': 'Palestina', 'PT': 'Portugal', 'PW': 'Palau', 'PY': 'Paraguay', 'QA': 'Qatar',
            'RE': 'Réunion', 'RO': 'Rumania', 'RS': 'Serbia', 'RU': 'Rusia', 'RW': 'Rwanda',
            'SA': 'Arab Saudi', 'SB': 'Kepulauan Solomon', 'SC': 'Seychelles', 'SD': 'Sudan',
            'SE': 'Swedia', 'SG': 'Singapura', 'SH': 'Saint Helena', 'SI': 'Slovenia', 'SJ': 'Svalbard',
            'SK': 'Slovakia', 'SL': 'Sierra Leone', 'SM': 'San Marino', 'SN': 'Senegal', 'SO': 'Somalia',
            'SR': 'Suriname', 'SS': 'Sudan Selatan', 'ST': 'São Tomé dan Príncipe', 'SV': 'El Salvador',
            'SX': 'Sint Maarten', 'SY': 'Suriah', 'SZ': 'Eswatini', 'TC': 'Kepulauan Turks dan Caicos',
            'TD': 'Chad', 'TF': 'Teritorial Selatan Prancis', 'TG': 'Togo', 'TH': 'Thailand',
            'TJ': 'Tajikistan', 'TK': 'Tokelau', 'TL': 'Timor Leste', 'TM': 'Turkmenistan', 'TN': 'Tunisia',
            'TO': 'Tonga', 'TR': 'Turki', 'TT': 'Trinidad dan Tobago', 'TV': 'Tuvalu', 'TW': 'Taiwan',
            'TZ': 'Tanzania', 'UA': 'Ukraina', 'UG': 'Uganda', 'UM': 'Kepulauan Terpencil AS',
            'US': 'Amerika Serikat', 'UY': 'Uruguay', 'UZ': 'Uzbekistan', 'VA': 'Vatikan',
            'VC': 'Saint Vincent dan Grenadines', 'VE': 'Venezuela', 'VG': 'Kepulauan Virgin Britania',
            'VI': 'Kepulauan Virgin AS', 'VN': 'Vietnam', 'VU': 'Vanuatu', 'WF': 'Wallis dan Futuna',
            'WS': 'Samoa', 'YE': 'Yaman', 'YT': 'Mayotte', 'ZA': 'Afrika Selatan', 'ZM': 'Zambia', 'ZW': 'Zimbabwe'
        };
        return countries[countryCode] || countryCode;
    }

    function getShortCountryName(fullName) {
        // Shortened versions for display in widget
        const shortNames = {
            'Indonesia': 'Indonesia',
            'Amerika Serikat': 'AS',
            'Britania Raya': 'UK',
            'Uni Emirat Arab': 'UAE',
            'Arab Saudi': 'Saudi',
            'Selandia Baru': 'NZ',
            'Korea Selatan': 'Korsel',
            'Korea Utara': 'Korut',
            'Republik Ceko': 'Ceko',
            'Republik Dominika': 'Dominika',
            'Bosnia dan Herzegovina': 'Bosnia',
            'Antigua dan Barbuda': 'Antigua',
            'Saint Kitts dan Nevis': 'St. Kitts',
            'Saint Vincent dan Grenadines': 'St. Vincent',
            'Trinidad dan Tobago': 'Trinidad',
            'São Tomé dan Príncipe': 'São Tomé',
            'Kepulauan Marshall': 'Marshall',
            'Kepulauan Solomon': 'Solomon',
            'Papua Nugini': 'Papua',
            'Afrika Selatan': 'Afrika Sel.'
        };
        return shortNames[fullName] || fullName;
    }

    function getOwmIconUrl(iconCode, scale) {
        const sz = scale === 4 ? '@4x' : (scale === 2 ? '@2x' : '');
        return `https://openweathermap.org/img/wn/${iconCode}${sz}.png`;
    }

    function buildInfoMessages(data, descMsg) {
        const messages = [];

        const main = data.main || {};
        const wind = data.wind || {};
        const clouds = (data.clouds && data.clouds.all) || 0;
        const vis = typeof data.visibility === 'number' ? data.visibility : null;
        const isDay = computeIsDay(data);
        const descIcon = mapIcon((data.weather && data.weather[0] && data.weather[0].id) || 800, isDay);
        const descText = descMsg || formatWeatherDescription((data.weather && data.weather[0] && data.weather[0].description) || '');

        const rows = [];
        if (descText) rows.push({ icon: descIcon, text: descText });
        if (typeof main.feels_like === 'number') rows.push({ icon: 'device_thermostat', text: `Terasa Seperti ${Math.round(main.feels_like)}°C` });
        if (typeof main.humidity === 'number') rows.push({ icon: 'humidity_percentage', text: `Kelembaban ${main.humidity}%` });
        if (typeof main.pressure === 'number') rows.push({ icon: 'compress', text: `Tekanan Udara ${main.pressure} hPa` });
        const windText = formatWind(wind);
        if (windText && windText !== '-') rows.push({ icon: 'air', text: `Angin ${windText}` });
        if (clouds > 0) rows.push({ icon: 'cloud', text: `Tutupan Awan ${clouds}%` });
        if (vis != null) rows.push({ icon: 'visibility', text: `Jarak Pandang ${(vis/1000).toFixed(1)} km` });

        rows.forEach(r => {
            messages.push({
                html: `<span class="material-symbols-rounded" style="font-size:16px; vertical-align:middle; margin-right:6px;">${r.icon}</span>${escapeHtml(r.text)}`,
                isCity: false
            });
        });

        return messages;
    }

    function startWeatherInfoRotation() {
        // Clear timer yang ada
        if (weatherInfoRotateTimer) {
            clearInterval(weatherInfoRotateTimer);
            weatherInfoRotateTimer = null;
        }
        
        // Reset index
        weatherInfoIndex = 0;
        
        // Tampilkan pesan pertama
        updateWeatherInfo();
        
        // Jika ada lebih dari 1 pesan, mulai rotasi
        if (weatherInfoMessages.length > 1) {
            weatherInfoRotateTimer = setInterval(() => {
                weatherInfoIndex = (weatherInfoIndex + 1) % weatherInfoMessages.length;
                updateWeatherInfo();
            }, 3000); // Ganti setiap 3 detik
        }
    }

    // ============== Overlay (Detail Cuaca) ==============
    function ensureOverlayStyles() {
        if (document.getElementById('weather-overlay-style')) return;
        const style = document.createElement('style');
        style.id = 'weather-overlay-style';
        style.textContent = (
            '.weather-overlay{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.4);backdrop-filter:saturate(120%) blur(2px);z-index:1000;}' +
            '.weather-overlay.show{display:flex;}' +
            '.weather-dialog{width:min(560px,92vw);max-height:88vh;overflow:auto;overflow-x:hidden;border-radius:16px;padding:20px;background:var(--md-sys-color-surface);color:var(--md-sys-color-on-surface);box-shadow:0 12px 40px rgba(0,0,0,0.3);}' +
            '.weather-header{display:flex;align-items:center;justify-content:flex-end;margin-bottom:8px;gap:8px;}' +
            '.weather-actions{display:flex;gap:8px;flex-wrap:wrap;}' +
            '.weather-actions .btn{display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border-radius:10px;border:1px solid var(--md-sys-color-outline);background:transparent;color:inherit;cursor:pointer;}' +
            '.weather-actions .btn-filled{background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);border:none;}' +
            '.weather-caption{font-weight:600;margin:6px 0 8px 0;}' +
            '.weather-main{display:flex;align-items:center;gap:12px;margin:6px 0 8px 0;flex-wrap:nowrap;}' +
            '.weather-main img{width:56px;height:56px;object-fit:contain;}' +
            '.weather-temp{font-size:42px;font-weight:700;line-height:1;}' +
            '.weather-sub{color:var(--md-sys-color-on-surface-variant);}' +
            '.weather-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:6px;}' +
            '.wg-item{padding:10px;border-radius:12px;background:var(--md-sys-color-surface-variant);color:var(--md-sys-color-on-surface-variant);}' +
            '.wg-item strong{display:block;color:var(--md-sys-color-on-surface);margin-bottom:2px;}' +
            '.weather-footer{margin-top:12px;display:flex;align-items:center;justify-content:space-between;color:var(--md-sys-color-on-surface-variant);font-size:12px;}'
        );
        document.head.appendChild(style);
    }

    function ensureOverlayDom() {
        let overlay = document.getElementById('weather-overlay');
        if (overlay) return overlay;

        overlay = document.createElement('div');
        overlay.id = 'weather-overlay';
        overlay.className = 'weather-overlay';
        overlay.innerHTML = '' +
            '<div class="weather-dialog" role="dialog" aria-modal="true" aria-label="Detail Cuaca">' +
            '  <div class="weather-header">' +
            '    <div class="weather-actions">' +
            '      <button id="weather-dialog-refresh" class="btn">' +
            '        <span class="material-symbols-rounded">refresh</span>Refresh' +
            '      </button>' +
            '      <button id="weather-dialog-close" class="btn btn-filled">' +
            '        <span class="material-symbols-rounded">close</span>Tutup' +
            '      </button>' +
            '    </div>' +
            '  </div>' +
            '  <div class="weather-caption">Cuaca di <span id="weather-dialog-location">Kota</span></div>' +
            '  <div class="weather-main">' +
            '    <img id="weather-dialog-icon-img" alt="icon" />' +
            '    <div>' +
            '      <div id="weather-dialog-temp" class="weather-temp">--°C</div>' +
            '      <div id="weather-dialog-desc" class="weather-sub">Deskripsi</div>' +
            '    </div>' +
            '  </div>' +
            '  <div class="weather-grid" id="weather-dialog-grid"></div>' +
            '  <div class="weather-footer">' +
            '    <div id="weather-dialog-updated">Diperbarui: -</div>' +
            '  </div>' +
            '</div>';

        document.body.appendChild(overlay);

        // Close interactions
        overlay.addEventListener('click', (e) => {
            const dlg = overlay.querySelector('.weather-dialog');
            if (dlg && !dlg.contains(e.target)) closeWeatherOverlay();
        });
        document.addEventListener('keydown', (e) => {
            if (overlay.classList.contains('show') && e.key === 'Escape') closeWeatherOverlay();
        });

        const btnClose = document.getElementById('weather-dialog-close');
        const btnRefresh = document.getElementById('weather-dialog-refresh');
        if (btnClose) btnClose.addEventListener('click', closeWeatherOverlay);
        if (btnRefresh) btnRefresh.addEventListener('click', () => {
            const upd = document.getElementById('weather-dialog-updated');
            if (upd) upd.textContent = 'Memperbarui...';
            loadAndRenderWeather({ forceRefresh: true });
        });

        return overlay;
    }

    function openWeatherOverlay() {
        const overlay = ensureOverlayDom();
        renderOverlay(latestWeatherData);
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeWeatherOverlay() {
        const overlay = document.getElementById('weather-overlay');
        if (!overlay) return;
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    function updateOverlayIfOpen() {
        const overlay = document.getElementById('weather-overlay');
        if (overlay && overlay.classList.contains('show')) {
            renderOverlay(latestWeatherData);
        }
    }

    function renderOverlay(data) {
        const locEl = document.getElementById('weather-dialog-location');
        const descEl = document.getElementById('weather-dialog-desc');
        const iconImg = document.getElementById('weather-dialog-icon-img');
        const tempEl = document.getElementById('weather-dialog-temp');
        const gridEl = document.getElementById('weather-dialog-grid');
        const updEl = document.getElementById('weather-dialog-updated');

        if (!locEl || !descEl || !iconImg || !tempEl || !gridEl || !updEl) return;

        if (!data) {
            locEl.textContent = 'Memuat detail cuaca...';
            descEl.textContent = '';
            tempEl.textContent = '--°C';
            gridEl.innerHTML = '';
            updEl.textContent = '';
            return;
        }

        const name = data.name || 'Lokasi';
        const w = (data.weather && data.weather[0]) || {};
        const iconCode = w.icon || null;
        const main = data.main || {};
        const wind = data.wind || {};
        const clouds = (data.clouds && data.clouds.all) || 0;
        const vis = typeof data.visibility === 'number' ? data.visibility : null;
        const sys = data.sys || {};
        const tz = typeof data.timezone === 'number' ? data.timezone : 0;

        const countryCode = data.sys && data.sys.country ? data.sys.country : '';
        const countryName = countryCode ? getCountryName(countryCode) : '';
        locEl.textContent = countryName ? `${name}, ${countryName}` : name;
        descEl.textContent = formatWeatherDescription(w.description || '');
        if (iconCode) {
            iconImg.src = getOwmIconUrl(iconCode, 2);
            iconImg.alt = w.description || 'icon';
        }
        tempEl.textContent = typeof main.temp === 'number' ? `${Math.round(main.temp)}°C` : '--°C';
        const tmin = typeof main.temp_min === 'number' ? `${Math.round(main.temp_min)}°` : '-';
        const tmax = typeof main.temp_max === 'number' ? `${Math.round(main.temp_max)}°` : '-';
        const items = [
            { label: 'Terasa Seperti', value: typeof main.feels_like === 'number' ? `${Math.round(main.feels_like)}°C` : '-', icon: 'device_thermostat' },
            { label: 'Kelembaban', value: typeof main.humidity === 'number' ? `${main.humidity}%` : '-', icon: 'humidity_percentage' },
            { label: 'Tekanan Udara', value: typeof main.pressure === 'number' ? `${main.pressure} hPa` : '-', icon: 'compress' },
            { label: 'Angin', value: formatWind(wind), icon: 'air' },
            { label: 'Tutupan Awan', value: `${clouds}%`, icon: 'cloud' },
            { label: 'Jarak Pandang', value: vis != null ? `${(vis/1000).toFixed(1)} km` : '-', icon: 'visibility' },
            { label: 'Suhu Min/Maks', value: `${tmin} / ${tmax}`, icon: 'thermostat' },
            { label: 'Matahari', value: `Terbit ${formatTime(sys.sunrise, tz)} • Terbenam ${formatTime(sys.sunset, tz)}`, icon: 'wb_sunny' }
        ];
        gridEl.innerHTML = items.map(it => (
            `<div class=\"wg-item\">` +
            `  <strong><span class=\"material-symbols-rounded\" style=\"font-size:16px; vertical-align:middle; margin-right:6px;\">${it.icon}</span>${it.label}</strong>` +
            `  <div>${it.value}</div>` +
            `</div>`
        )).join('');

        const updated = data.dt ? formatDateTime(data.dt, tz) : '-';
        updEl.textContent = `Diperbarui: ${updated}`;
    }

    function formatWind(wind) {
        if (!wind) return '-';
        
        // Konversi kecepatan angin dari m/s ke km/jam
        const speedKmh = typeof wind.speed === 'number' ? (wind.speed * 3.6).toFixed(1) : null;
        const speedText = speedKmh ? `${speedKmh} km/jam` : '-';
        
        // Dapatkan arah angin dalam bahasa Indonesia
        const dir = typeof wind.deg === 'number' ? degToCompassIndo(wind.deg) : '';
        
        // Format dengan lebih baik
        if (dir && speedKmh) {
            return `${speedText} dari ${dir}`;
        } else if (speedKmh) {
            return speedText;
        }
        return '-';
    }

    function degToCompass(num) {
        const val = Math.floor((num / 22.5) + 0.5);
        const arr = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
        return arr[val % 16];
    }
    
    function degToCompassIndo(num) {
        const val = Math.floor((num / 22.5) + 0.5);
        const arr = [
            'Utara', 'Utara Timur Laut', 'Timur Laut', 'Timur Timur Laut',
            'Timur', 'Timur Tenggara', 'Tenggara', 'Selatan Tenggara',
            'Selatan', 'Selatan Barat Daya', 'Barat Daya', 'Barat Barat Daya',
            'Barat', 'Barat Barat Laut', 'Barat Laut', 'Utara Barat Laut'
        ];
        return arr[val % 16];
    }

    function pad2(n) { return n < 10 ? '0' + n : '' + n; }

    function formatTime(unixSec, tzOffsetSec) {
        if (!unixSec) return '-';
        const d = new Date((unixSec + (tzOffsetSec || 0)) * 1000);
        // Show as HH:MM local to city
        return `${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}`;
    }

    function formatDateTime(unixSec, tzOffsetSec) {
        if (!unixSec) return '-';
        const d = new Date((unixSec + (tzOffsetSec || 0)) * 1000);
        return `${d.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long' })} ${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}`;
    }

    function validateCityName(city) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${WEATHER_API_KEY}&units=metric&lang=id`;
        return fetch(url, { signal: controller.signal })
            .then((res) => {
                clearTimeout(timeoutId);
                if (res.ok) return true;
                if (res.status === 404) return false;
                return false;
            })
            .catch(() => false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();


