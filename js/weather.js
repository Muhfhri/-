
const apiKey = '962322a87800402e0b9d7052cb5e8f16';

let currentCity = localStorage.getItem('weatherCity') || 'Jakarta';
let weatherLabelTimeout;
let weatherLabelInterval;
let lastWeatherData = { city: '', temp: '', desc: '' };
let weatherInfoStates = [];
let weatherInfoStateIndex = 0;

function setWeatherInfoCity() {
    const weatherInfo = document.getElementById('weather-info');
    if (weatherInfo) weatherInfo.textContent = ` ${lastWeatherData.city} - ${lastWeatherData.temp}°C`;
}
function setWeatherInfoDesc() {
    const weatherInfo = document.getElementById('weather-info');
    if (weatherInfo) weatherInfo.textContent = ` ${capitalizeDesc(lastWeatherData.desc)} - ${lastWeatherData.temp}°C`;
}
function capitalizeDesc(desc) {
    return desc.charAt(0).toUpperCase() + desc.slice(1);
}

function setWeatherInfoState(idx) {
    const weatherInfo = document.getElementById('weather-info');
    if (weatherInfo && weatherInfoStates[idx]) weatherInfo.textContent = weatherInfoStates[idx];
}

function showWeatherInfoLoop() {
    weatherInfoStateIndex = 0;
    setWeatherInfoState(weatherInfoStateIndex);
    if (weatherLabelTimeout) clearTimeout(weatherLabelTimeout);
    if (weatherLabelInterval) clearInterval(weatherLabelInterval);
    weatherLabelInterval = setInterval(() => {
        weatherInfoStateIndex = (weatherInfoStateIndex + 1) % weatherInfoStates.length;
        setWeatherInfoState(weatherInfoStateIndex);
    }, 4000);
}

function fetchWeather(city, showErrorInEditBox = false) {
    if (weatherLabelInterval) clearInterval(weatherLabelInterval);
    if (weatherLabelTimeout) clearTimeout(weatherLabelTimeout);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=id&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('notfound');
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description.toLowerCase();
            const temperature = Math.floor(data.main.temp);
            const tempMin = Math.floor(data.main.temp_min);
            const tempMax = Math.floor(data.main.temp_max);
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const windSpeed = data.wind.speed;
            const windDeg = data.wind.deg;
            const windDir = degToCompass(windDeg);
            const country = countryName(data.sys.country);
            const weatherIcon = document.getElementById('weather-icon');
            const iconCode = data.weather[0].icon;
            if (weatherIcon) {
                if (iconCode) {
                    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${weatherDescription}" style="width:2em;height:2em;vertical-align:middle;">`;
                    weatherIcon.className = '';
                } else {
                    // fallback fontawesome
                    if (weatherDescription.includes('hujan')) {
                        weatherIcon.className = 'fas fa-cloud-showers-heavy';
                    } else if (weatherDescription.includes('awan') || weatherDescription.includes('halimun')) {
                        weatherIcon.className = 'fas fa-cloud';
                    } else if (weatherDescription.includes('petir')) {
                        weatherIcon.className = 'fas fa-thunderstorm';
                    }
                    else if (weatherDescription.includes('badai')) {
                        weatherIcon.className = 'fa-solid fa-tornado';
                    }
                    else if (weatherDescription.includes('kabut')) {
                        weatherIcon.className = 'fa-solid fa-wind';
                    }
                    else {
                        weatherIcon.className = 'fas fa-sun';
                    }
                    weatherIcon.innerHTML = '';
                }
            }
            lastWeatherData = { city, temp: temperature, desc: weatherDescription };
            weatherInfoStates = [
                `${city} ${countryFlag(data.sys.country)} - ${temperature}°C`,
                `Cuaca: ${capitalizeDesc(weatherDescription)}`,
                `Kelembapan: ${humidity}%`,
                `Tekanan: ${pressure} hPa`,
                `Angin: ${windSpeed} m/s ${compassLongName(windDir)}`
            ];
            showWeatherInfoLoop();
            currentCity = city;
            hideEditBox();
            // Hapus pesan error jika ada
            const editBox = document.getElementById('weather-edit-box');
            if (editBox) editBox.innerHTML = '';
        })
        .catch(error => {
            if (showErrorInEditBox) {
                const editBox = document.getElementById('weather-edit-box');
                if (editBox) {
                    let msg = '<div class="text-danger small mt-1">Lokasi tidak ditemukan, pilih lokasi lain</div>';
                    if (!editBox.innerHTML.includes('weather-city-input')) {
                        // If edit box is not open, open it
                        showEditBox();
                    }
                    if (!editBox.innerHTML.includes(msg)) {
                        editBox.innerHTML += msg;
                    }
                }
            } else {
                const weatherInfo = document.getElementById('weather-info');
                const editBox = document.getElementById('weather-edit-box');
                if (weatherInfo) weatherInfo.textContent = 'Lokasi tidak ditemukan';
                if (editBox) {
                    editBox.innerHTML = '<div class="text-danger small mt-1">Lokasi tidak ditemukan, klik pensil untuk ubah lokasi</div>';
                    editBox.style.display = '';
                }
                const editBtn = document.getElementById('weather-edit-btn');
                if (editBtn) editBtn.style.display = '';
            }
        });
}

function showEditBox() {
    const editBox = document.getElementById('weather-edit-box');
    if (!editBox) return;
    editBox.innerHTML = `<input type="text" id="weather-city-input" value="${currentCity}" style="width:90px; border-radius:6px; border:1px solid #ccc; padding:2px 6px; font-size:0.95em;"> <button id="weather-city-btn" class="btn btn-sm btn-m3-you-color" style="padding:2px 10px; font-size:0.95em;">OK</button>`;
    editBox.style.display = '';
    document.getElementById('weather-city-input').focus();
    document.getElementById('weather-info').style.display = 'none';
    document.getElementById('weather-edit-btn').style.display = 'none';

    // Event OK
    document.getElementById('weather-city-btn').onclick = saveCityEdit;
    document.getElementById('weather-city-input').onkeydown = function(e) {
        if (e.key === 'Enter') saveCityEdit();
        if (e.key === 'Escape') cancelEditBox();
    };
    setTimeout(() => {
        document.addEventListener('mousedown', clickOutsideEditBox);
    }, 0);
}

function saveCityEdit() {
    const newCity = document.getElementById('weather-city-input').value.trim();
    if (newCity) {
        localStorage.setItem('weatherCity', newCity);
        fetchWeather(newCity, true);
        currentCity = newCity;
    }
    // hideEditBox() now only called on success
}

function cancelEditBox() {
    hideEditBox();
}

function hideEditBox() {
    const editBox = document.getElementById('weather-edit-box');
    if (editBox) editBox.style.display = 'none';
    const weatherInfo = document.getElementById('weather-info');
    if (weatherInfo) weatherInfo.style.display = '';
    const editBtn = document.getElementById('weather-edit-btn');
    if (editBtn) editBtn.style.display = '';
    document.removeEventListener('mousedown', clickOutsideEditBox);
}

function clickOutsideEditBox(e) {
    const editBox = document.getElementById('weather-edit-box');
    if (editBox && !editBox.contains(e.target) && e.target.id !== 'weather-edit-btn') {
        hideEditBox();
    }
}

function degToCompass(num) {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

function compassLongName(short) {
    const map = {
        N: 'Utara', NNE: 'Utara-Timur Laut', NE: 'Timur Laut', ENE: 'Timur-Timur Laut',
        E: 'Timur', ESE: 'Timur-Tenggara', SE: 'Tenggara', SSE: 'Selatan-Tenggara',
        S: 'Selatan', SSW: 'Selatan-Barat Daya', SW: 'Barat Daya', WSW: 'Barat-Barat Daya',
        W: 'Barat', WNW: 'Barat-Barat Laut', NW: 'Barat Laut', NNW: 'Utara-Barat Laut'
    };
    return map[short] || short;
}

function countryName(code) {
    const map = {
        ID: 'Indonesia', US: 'Amerika Serikat', MY: 'Malaysia', SG: 'Singapura', JP: 'Jepang', CN: 'Tiongkok', TH: 'Thailand', PH: 'Filipina', IN: 'India', GB: 'Inggris', DE: 'Jerman', FR: 'Prancis', IT: 'Italia', ES: 'Spanyol', RU: 'Rusia', AU: 'Australia', BR: 'Brasil', CA: 'Kanada', KR: 'Korea Selatan', SA: 'Arab Saudi', TR: 'Turki', NL: 'Belanda', AR: 'Argentina', MX: 'Meksiko', EG: 'Mesir', ZA: 'Afrika Selatan', PK: 'Pakistan', NG: 'Nigeria', VN: 'Vietnam', IR: 'Iran', IQ: 'Irak', UA: 'Ukraina', PL: 'Polandia', SE: 'Swedia', NO: 'Norwegia', FI: 'Finlandia', DK: 'Denmark', CH: 'Swiss', BE: 'Belgia', AT: 'Austria', NZ: 'Selandia Baru', PT: 'Portugal', CZ: 'Ceko', HU: 'Hungaria', RO: 'Rumania', GR: 'Yunani', IL: 'Israel', HK: 'Hong Kong', TW: 'Taiwan', CL: 'Chili', CO: 'Kolombia', PE: 'Peru', CU: 'Kuba', DO: 'Republik Dominika', EC: 'Ekuador', BO: 'Bolivia', UY: 'Uruguay', PY: 'Paraguay', VE: 'Venezuela', CR: 'Kosta Rika', PA: 'Panama', GT: 'Guatemala', HN: 'Honduras', SV: 'El Salvador', NI: 'Nikaragua', JM: 'Jamaika', TT: 'Trinidad dan Tobago', BS: 'Bahama', BB: 'Barbados', AG: 'Antigua dan Barbuda', LC: 'Saint Lucia', KN: 'Saint Kitts dan Nevis', GD: 'Grenada', VC: 'Saint Vincent dan Grenadines', BZ: 'Belize', SR: 'Suriname', GY: 'Guyana', FK: 'Kep. Falkland', GF: 'Guyana Prancis', MQ: 'Martinik', GP: 'Guadeloupe', RE: 'Reunion', YT: 'Mayotte', PM: 'Saint Pierre dan Miquelon', BL: 'Saint Barthelemy', MF: 'Saint Martin', SX: 'Sint Maarten', CW: 'Curacao', AW: 'Aruba', AI: 'Anguilla', BM: 'Bermuda', GL: 'Greenland', IS: 'Islandia', MC: 'Monako', LI: 'Liechtenstein', SM: 'San Marino', VA: 'Vatikan', MT: 'Malta', CY: 'Siprus', LU: 'Luksemburg', EE: 'Estonia', LV: 'Latvia', LT: 'Lituania', SK: 'Slovakia', SI: 'Slovenia', HR: 'Kroasia', BA: 'Bosnia dan Herzegovina', ME: 'Montenegro', RS: 'Serbia', MK: 'Makedonia Utara', AL: 'Albania', MD: 'Moldova', BY: 'Belarus', GE: 'Georgia', AM: 'Armenia', AZ: 'Azerbaijan', KZ: 'Kazakhstan', TM: 'Turkmenistan', UZ: 'Uzbekistan', TJ: 'Tajikistan', KG: 'Kirgizstan', MN: 'Mongolia', AF: 'Afganistan', NP: 'Nepal', LK: 'Sri Lanka', BD: 'Bangladesh', MM: 'Myanmar', KH: 'Kamboja', LA: 'Laos', SG: 'Singapura', BN: 'Brunei', TL: 'Timor Leste', PG: 'Papua Nugini', FJ: 'Fiji', SB: 'Kep. Solomon', VU: 'Vanuatu', NC: 'Kaledonia Baru', PF: 'Polinesia Prancis', WS: 'Samoa', TO: 'Tonga', TV: 'Tuvalu', KI: 'Kiribati', NR: 'Nauru', MH: 'Kep. Marshall', FM: 'Mikronesia', PW: 'Palau', GU: 'Guam', MP: 'Kep. Mariana Utara', AS: 'Samoa Amerika', CK: 'Kep. Cook', NU: 'Niue', TK: 'Tokelau', WF: 'Wallis dan Futuna', FO: 'Kep. Faroe', GI: 'Gibraltar', JE: 'Jersey', GG: 'Guernsey', IM: 'Isle of Man', AX: 'Kep. Aland', SH: 'Saint Helena', MS: 'Montserrat', TC: 'Kep. Turks dan Caicos', VG: 'Kep. Virgin Britania', VI: 'Kep. Virgin AS'
    };
    return map[code] || code;
}

function countryFlag(code) {
    // Convert country code (e.g. 'ID') to emoji flag
    if (!code || code.length !== 2) return '';
    const A = 0x1F1E6;
    const a = 'A'.charCodeAt(0);
    return String.fromCodePoint(...code.toUpperCase().split('').map(c => A + c.charCodeAt(0) - a));
}

document.addEventListener('DOMContentLoaded', function() {
    fetchWeather(currentCity);
    const editBtn = document.getElementById('weather-edit-btn');
    if (editBtn) editBtn.onclick = showEditBox;
    // Tambahkan label span jika belum ada
    if (!document.getElementById('weather-label')) {
        const info = document.getElementById('weather-info');
        if (info) {
            const labelSpan = document.createElement('span');
            labelSpan.id = 'weather-label';
            labelSpan.className = 'geist-mono fw-bold';
            info.parentNode.insertBefore(labelSpan, info);
        }
    }
});
