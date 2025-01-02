
const apiKey = '962322a87800402e0b9d7052cb5e8f16';
const city = 'Jakarta'; // Ubah kota sesuai yang Anda inginkan
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=id&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherDescription = data.weather[0].description.toLowerCase();
        const temperature = data.main.temp;
        // Update ikon cuaca berdasarkan kondisi cuaca
        const weatherIcon = document.getElementById('weather-icon');
        if (weatherDescription.includes('hujan')) {
            weatherIcon.className = 'fas fa-cloud-showers-heavy'; // Ikutin kondisi hujan
        } else if (weatherDescription.includes('awan') || weatherDescription.includes('halimun')) {
            weatherIcon.className = 'fas fa-cloud'; // Ikutin kondisi mendung/berawan
        } else if (weatherDescription.includes('petir')) {
            weatherIcon.className = 'fas fa-thunderstorm'; // Ikutin kondisi petir
        }
        else if (weatherDescription.includes('badai')) {
            weatherIcon.className = 'fa-solid fa-tornado'; // Ikutin badai
        }
        else if (weatherDescription.includes('kabut')) {
            weatherIcon.className = 'fa-solid fa-wind'; // Ikutin badai
        }
        else {
            weatherIcon.className = 'fas fa-sun'; // Ikutin kondisi cerah
        }
        // Konversi deskripsi cuaca ke dalam huruf kapital
        const capitalizedWeatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
        // Update informasi cuaca dengan deskripsi cuaca, suhu, dan nama kota
        document.getElementById('weather-info').textContent = ` ${city} - ${temperature}°C`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').textContent = 'Tidak dapat mengambil data cuaca.';
    });
