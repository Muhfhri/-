const koridorData = {
    "BRT": {
        "1": {
            start: "Blok M",
            end: "Kota",
            operator: "Transjakarta (TJ), DAMRI (DMR), Bianglala Metropolitan (BMP) & Mayasari Bakti (MB/MYS)",
            haltes: ["Blok M", "ASEAN", "Kejaksaan Agung", "Masjid Agung", "Bundaran Senayan",
                "Senayan BANK DKI", "Polda Metro Jaya", "Bendungan Hilir", "Karet",
                "Dukuh Atas", "Tosari", "Bundaran HI ASTRA", "M.H Thamrin",
                "Kebon Sirih", "Monumen Nasional", "Harmoni", "Sawah Besar",
                "Mangga Besar", "Taman Sari", "Glodok","Kota", "Museum Sejarah Jakarta", "Kali Besar"]
        },
        "2": {
            start: "Pulo Gadung",
            end: "Monumen Nasional",
            operator: "DAMRI (DMR)",
            haltes: ["Pulo Gadung", "Bermis", "Pulo Mas", "Perintis Kemerdekaan", "Pedongkelan",
                "Cempaka Mas", "Sumur Batu", "Cempaka Baru", "Pasar Cempaka Putih",
                "Rawa Selatan", "Galur", "Senen TOYOTA Rangga", "Senen Raya", "RSPAD",
                "Pejambon", "Gambir", "Istiqlal", "Juanda", "Pecenongan","Kwitang",
               "Gambir 2", "Balai Kota",  "Monumen Nasional"]
            },
        "2A": {
            start: "Pulo Gadung",
            end: "Rawa Buaya",
            operator: "Pahala Kencana Transportation (PKT), Mayasari Bakti (MYS) & DAMRI (DMR)",
            haltes: ["Pulo Gadung", "Bermis", "Pulo Mas", "Perintis Kemerdekaan", "Pedongkelan",
                "Cempaka Mas", "Sumur Batu", "Cempaka Baru", "Pasar Cempaka Putih",
                "Rawa Selatan", "Galur", "Senen TOYOTA Rangga", "Kwitang", "Gambir 2", "Balai Kota", "Petojo", "Roxy", "Grogol", "Jelambar", "Damai", "Taman Kota", "Jembatan Gantung", "Jembatan Baru", "Rawa Buaya"]
            },
            "3": {
                start: "Kalideres",
                end: "Monumen Nasional via Veteran",
                operator: "Steady Safe (SAF) & Mayasari Bakti (MB/MYS)",
            haltes: ["Kalideres", "Pesakih", "Sumur Bor", "Rawa Buaya", "Jembatan Baru", "Pulo Nangka",
                "Jembatan Gantung", "Taman Kota", "Damai", "Jelambar", "Grogol", "Roxy", "Petojo", "Monumen Nasional"]},
            "3A": {
                start: "Kalideres",
                end: "Senayan BANK DKI",
                operator: "Transjakarta (TJ) & Mayasari Bakti (MB/MYS)",
            haltes: ["Kalideres", "Pesakih", "Sumur Bor", "Rawa Buaya", "Jembatan Baru", "Pulo Nangka",
                "Jembatan Gantung", "Taman Kota", "Damai", "Jelambar", "Grogol Reformasi", "Tanjung Duren", "Kota Bambu", "Kemanggisan", "Petamburan", "Gerbang Pemuda", "Senayan BANK DKI"]
        },
        "4": {
            start: "Pulo Gadung",
            end: "Galunggung",
            operator: "Transjakarta (TJ) & DAMRI (DMR)",
            haltes: ["Pulo Gadung", "Pemuda Merdeka", "Layur", "Pemuda Rawamangun", "Velodrome", "Kayu Jati", "Rawamangun", "Simpang Pramuka", "Pramuka Sari", "Utan Kayu", "Pasar Genjing", "Flyover Pramuka", "Matraman", "Tegalan", "Kesatrian", "Manggarai", "Pasar Rumput", "Halimun", "Galunggung"]
        },
        "4D": {
            start: "Pulo Gadung",
            end: "Patra Kuningan",
            operator: "Transjakarta (TJ) & Steady Safe (SAF)",
            haltes: ["Pulo Gadung", "Pasar Pulo Gadung", "Pemuda Merdeka", "Layur", "Pemuda Rawamangun", "Velodrome", "Kayu Jati", "Rawamangun", "Simpang Pramuka", "Pramuka Sari", "Utan Kayu", "Pasar Genjing", "Flyover Pramuka", "Matraman", "Tegalan", "Kesatrian", "Manggarai", "Pasar Rumput", "Halimun", "Flyover Kuningan", "Setiabudi", "Kuningan Madya", "Karet Kuningan", "Rasuna Said", "Patra Kuningan"]
        },
        "4K": {
            start: "Pulo Gadung",
            end: "Kejaksaan Agung",
            operator: "Mayasari Bakti (MYS)",
            haltes: ["Pulo Gadung", "Flyover Jatinegara", "Pedati Prumpung", "Cawang", "Ciliwung", "Cikoko", "Tebet Eco Park", "Pancoran Tugu", "Pancoran", "Tegal Mampang", "Rawa Barat", "Pasar Santa", "Kejaksaan Agung"]
        },
        "5": {
            start: "Kampung Melayu",
            end: "Ancol",
            operator: "Transjakarta (TJ), DAMRI (DMR), & Steady Safe (SAF)",
            haltes: ["Ancol", "Pademangan", "Gunung Sahari", "Jembatan Merah", "Pasar Baru Timur", "Lapangan Banteng", "Senen Sentral", "Pal Putih", "Kramat Sentiong", "Salemba", "Paseban", "Matraman", "Tegalan", "Kesatrian", "Matraman Baru", "Bali Mester", "Jatinegara", "Kampung Melayu"]
        },
        "5C": {
            start: "Cililitan",
            end: "Juanda",
            operator: "Transjakarta (TJ), Steady Safe (SAF), & DAMRI (DMR)",
            haltes: ["Cililitan","Cawang Cililitan", "Cawang Sentral", "Cawang", "Cawang Baru", "Gelanggang Remaja", "Bidara Cina", "Kampung Melayu", "Jatinegara", "Bali Mester", "Matraman Baru", "Kesatrian", "Tegalan", "Matraman", "Paseban","Salemba","Kramat Sentiong","Pal Putih", "Kwitang", "Balai Kota", "Monumen Nasional", "Pecenongan", "Juanda", "Lapangan Banteng"]
        },
        "6": {
            start: "Ragunan",
            end: "Galunggung",
            operator: "DAMRI (DMR) & Bianglala Metropolitan (BMP), Mayasari Bakti (MYS)",
            haltes: ["Ragunan","Simpang Ragunan Ar-Raudhah","Jati Barat", "Jati Padang", "Pejaten", "Buncit Indah", "Warung Jati", "Warung Buncit", "Duren Tiga", "Mampang Prapatan", "Underpass Kuningan", "Patra Kuningan", "Kuningan", "Rasuna Said", "Karet Kuningan", "Kuningan Madya", "Setiabudi", "Flyover Kuningan", "Halimun", "Galunggung"]
        },
        "6A": {
            start: "Ragunan",
            end: "Balai Kota via Kuningan",
            operator: "DAMRI (DMR) & Bianglala Metropolitan (BMP), Mayasari Bakti (MYS)",
            haltes: ["Ragunan","Simpang Ragunan Ar-Raudhah","Jati Barat", "Jati Padang", "Pejaten", "Buncit Indah", "Warung Jati", "Warung Buncit", "Duren Tiga", "Mampang Prapatan", "Underpass Kuningan", "Patra Kuningan", "Kuningan", "Rasuna Said", "Karet Kuningan", "Kuningan Madya", "Setiabudi", "Bundaran HI ASTRA", "M.H Thamrin", "Kebon Sirih", "Balai Kota"]
        },
        "7": {
            start: "Kampung Melayu",
            end: "Kampung Rambutan",
            operator: "Mayasari Bakti (MYS) & Steady Safe (SAF)",
            haltes: ["Kampung Rambutan", "Tanah Merdeka", "Flyover Raya Bogor", "Trikora", "Pasar Induk", "Kramat Jati", "Cililitan", "Cawang Cililitan", "Cawang Sentral", "Cawang", "Cawang Baru", "Gelanggang Remaja", "Bidara Cina", "Kampung Melayu"]
        },
        "7F": {
            start: "Kampung Rambutan",
            end: "Juanda via Cempaka Putih",
            operator: "DAMRI (DMR), Mayasari Bakti (MYS), Transjakarta (TJ)",
            haltes: ["Juanda", "Pecenongan", "Pasar Baru", "Monumen Nasional", "Balai Kota", "Kwitang", "Senen TOYOTA Rangga", "Galur", "Rawa Selatan", "Pasar Cempaka Putih", "Cempaka Baru", "Sumur Batu", "Cempaka Mas", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pasar Induk", "Trikora", "Flyover Raya Bogor", "Kampung Rambutan"]
        },
        "8": {
            start: "Lebak Bulus",
            end: "Pasar Baru",
            operator: "Bianglala Metropolitan (BMP) & Transjakarta (TJ)",
            haltes: ["Lebak Bulus", "Pondok Pinang", "Underpass Lebak Bulus", "Pondok Indah", "Tanah Kusir", "Bungur", "Kebayoran", "Simprug", "Permata Hijau", "Arteri", "Pos Pengumben", "Kelapa Dua Sasak", "Kebon Jeruk", "Duri Kepa", "Kedoya Panjang", "Kedoya", "Damai", "Jelembar", "Grogol Reformasi", "Tanjung Duren", "Tomang Raya", "Tarakan", "Petojo", "Pecenongan", "Juanda", "Pasar Baru"]
        },
        "9": {
            start: "Pinang Ranti",
            end: "Pluit",
            operator: "DAMRI (DMR), Transjakara (TJ) & Mayasari Bakti (MB/MYS)",
            haltes: ["Pinang Ranti", "Makasar", "Cawang Sentral", "Cawang", "Ciliwung", "Cikoko", "Tebet Eco Park", "Pancoran Tugu", "Pancoran", "Tegal Parang", "Simpang Kuningan", "Denpasar", "Widya Chandra Telkomsel", "Semanggi", "Gerbang Pemuda", "Petamburan","Kemanggisan","Kota Bambu", "Tanjung Duren", "Grogol Reformasi", "Kali Grogol", "Jembatan Besi", "Jembatan Dua", "Jembatan Tiga", "Penjaringan", "Pluit"]
        },
        "10" : {
            start: "Tanjung Priok",
            end: "PGC",
            operator: "Steady Safe (SAF), Mayasari Bakti (MB), DAMRI (DMR) & Sinar Jaya Megah (SJM)",
            haltes: ["Tanjung Priok", "Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Kodamar", "Simpang Cempaka", "Cempaka Putih", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pisangan", "Flyover Jatinegara", "Pedati Perumpung", "Kebon Nanas", "Halim", "Simpang Cawang", "Cawang Sentral", "Cawang Cililitan", "PGC"]
        },
        "10D" : {
            start: "Tanjung Priok",
            end: "Kampung Rambutan",
            operator: "Steady Safe (SAF), Mayasari Bakti (MB/MYS), DAMRI (DMR) & Sinar Jaya Megah (SJM)",
            haltes: ["Tanjung Priok", "Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Kodamar", "Simpang Cempaka", "Cempaka Putih", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pasar Induk", "Trikora","Flyover Raya Bogor","Kampung Rambutan"]
        },
        "10H" : {
            start: "Tanjung Priok",
            end: "Bundaran Senayan",
            operator: "Steady Safe (SAF), Mayasari Bakti (MB/MYS), DAMRI (DMR) & Sinar Jaya Megah (SJM)",
            haltes: ["Tanjung Priok", "Pademangan", "Gunung Sahari", "Jembatan Merah", "Pasar Baru Timur", "Juanda", "Pecenongan", "Petojo", "Tarakan", "Tomang Raya", "Kota Bambu", "Kemanggisan", "Petamburan", "Gerbang Pemuda", "Senayan BANK DKI", "Bundaran Senayan"]
        },
        "11": {
            start: "Kampung Melayu",
            end: "Pulo Gebang",
            operator: "Steady Safe (SAF) & Bianglala Metropolitan (BMP)",
            haltes: ["Pulo Gebang", "Walikota Jakarta Timur", "Penggilingan", "Flyover Pondok Kopi", "Simpang Buaran", "Buaran", "Kampung Sumur", "Klender", "Stasiun Klender", "Cipinang", "Flyover Cipinang", "Pasar Enjo", "Flyover Jatinegara", "Stasiun Jatinegara", "Jatinegara", "Kampung Melayu"]
        },
        "12": {
            start: "Tanjung Priok",
            end: "Pluit",
            operator: "Transjakarta (TJ) & DAMRI (DMR)",
            haltes: ["Tanjung Priok","Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Sunter Boulevard Barat", "Sunter Karya", "Sunter Utara", "Danau Agung", "Landasan Pacu", "Jembatan Merah", "Gunung Sahari", "Mangga Dua", "Mangga Dua Raya", "Kali Besar", "Bandengan", "Penjaringan", "Pluit", "Pluit Selatan", "Pakin", "Gedong Panjang", "Museum Sejarah Jakarta", "Kota"]
        },
        "13": {
            start: "Puri Beta 2",
            end: "Tegal Mampang",
            operator: "Transjakarta (TJ) & Mayasari Bakti (MB/MYS)",
            haltes: ["Tegal Mampang", "Rawa Barat", "Pasar Santa", "CSW", "Mayestik", "Velbak", "Kebayoran Lama", "Seskoal", "Cipulir", "Swadarma ParagonCorp", "JORR", "Petukangan D'MASIV", "Puri Beta 1", "Puri Beta 2"]
        },
        "13B": {
            start: "Puri Beta 2",
            end: "Pancoran",
            operator: "Transjakarta (TJ) & Mayasari Bakti (MB/MYS)",
            haltes: ["Pancoran","Tegal Mampang", "Rawa Barat", "Pasar Santa", "CSW", "Mayestik", "Velbak", "Kebayoran Lama", "Seskoal", "Cipulir", "Swadarma ParagonCorp", "JORR", "Petukangan D'MASIV", "Puri Beta 1", "Puri Beta 2"]
        },
        "14": {
            start: "Jakarta International Stadium",
            end: "Senen",
            operator: "Transjakarta (TJ), Sinar Jaya Megah (SJM) & DAMRI (DMR)",
            haltes: ["Senen TOYOTA Rangga", "Senen Raya", "Tanah Tinggi", "Kemayoran", "JIEXPO Kemayoran", "Landasan Pacu", "Danau Agung", "Danau Sunter", "Jembatan Item", "Jakarta International Stadium"]
        },
    },
    "Non-BRT": {
        //akan diperbaiki dan dikembangkan di lain waktu 
    }
};

const halteKRL = [
    "Manggarai", "Duri", "Stasiun Jatinegara", "Tanah Abang", "Juanda", "Kampung Bandan", "Simpang Buaran", "Stasiun Klender", "Matraman","Kota", "Gambir 2", "Cikoko"
    // Tambahkan halte lain yang terhubung ke KRL
];
const halteMRT = [
    "Bundaran HI ASTRA", "Dukuh Atas", "Setiabudi", "Bendungan Hilir", "Istora Mandiri", "Senayan", "ASEAN", "Blok M", "Blok A", "Haji Nawi", "Cipete Raya", "Fatmawati", "Lebak Bulus", "CSW"
    // Tambahkan halte lain yang terhubung ke MRT
];

function getKoridorBadgeColor(koridor) {
    const colorMap = {
        "1": "#D02027",    
        "2": "#264697",   
        "2A": "#4FA8DE",   
        "3": "#FCC81B",    
        "3A": "#b39233",    
        "4": "#562A62",    
        "4D": "#E58BBA",    
        "4K": "#9626b5",    
        "5": "#BC5827",   
        "5C": "#9CD2C6",   
        "6": "#2FA449",   
        "6A": "#76C18A",
        "7": "#E2275B",   
        "7F": "#ff326b", 
        "8": "#CC2990", 
        "9": "#3F9593",    
        "10": "#8F1A1E",   
        "10D": "#9b3337",   
        "10H": "#9c050a",   
        "11": "#2F4FA2",   
        "11Q": "#10C0FF",
        "12": "#62BD73",   
        "13": "#5C359D",   
        "13B": "#972489",   
        "14": "#FF7F00",
        // Tambahkan mapping lain sesuai kebutuhan
    };
    return colorMap[koridor] || "#adb5bd"; // Default abu-abu jika tidak ada warna
}

// Update daftar koridor berdasarkan layanan
function updateKoridorOptions() {
    const koridorSelect = document.getElementById('koridorSelect');
    koridorSelect.innerHTML = '<option value="" selected>Koridor</option>';
    koridorSelect.disabled = false;
    for (const koridor in koridorData["BRT"]) {
        const option = document.createElement('option');
        option.value = koridor;
        option.textContent = `Koridor ${koridor}`;
        koridorSelect.appendChild(option);
    }
}

// Mendapatkan daftar layanan dan koridor berdasarkan nama halte
function getServicesAndKoridorsByHalte(halteName) {
    const results = [];
    for (const [service, koridors] of Object.entries(koridorData)) {
        for (const [koridor, koridorInfo] of Object.entries(koridors)) {
            if (koridorInfo.haltes.includes(halteName)) {
                results.push({ service, koridor });
            }
        }
    }
    return results;
}

// Menampilkan hasil pencarian halte
function displaySearchResults(query) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (query === '') {
        resultsContainer.innerHTML = '<li class="list-group-item">Masukkan nama halte untuk mencari.</li>';
        return;
    }

    const results = new Set();
    for (const koridors of Object.values(koridorData)) {
        for (const koridorInfo of Object.values(koridors)) {
            koridorInfo.haltes.forEach(halte => {
                if (halte.toLowerCase().includes(query.toLowerCase())) {
                    results.add(halte);
                }
            });
        }
    }

    if (results.size === 0) {
        resultsContainer.innerHTML = '<li class="list-group-item">Halte tidak ditemukan.</li>';
        return;
    }

    results.forEach(halte => {
        const servicesAndKoridors = getServicesAndKoridorsByHalte(halte);
        servicesAndKoridors.forEach(({ service, koridor }) => {
            const koridorEntry = koridorData[service][koridor];
            const idx = koridorEntry.haltes.indexOf(halte);

            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex bg-light align-items-center';

            // Badge koridor
            const koridorBadge = createKoridorBadge(service, koridor);
            koridorBadge.style.marginRight = "8px";

            // Badge nomor urut halte
            const nomorBadge = document.createElement('span');
            nomorBadge.textContent = String(idx + 1).padStart(2, '0');
            nomorBadge.style.backgroundColor = getKoridorBadgeColor(koridor);
            nomorBadge.style.color = "#fff";
            nomorBadge.style.width = "24px";
            nomorBadge.style.height = "24px";
            nomorBadge.style.display = "inline-flex";
            nomorBadge.style.alignItems = "center";
            nomorBadge.style.justifyContent = "center";
            nomorBadge.style.borderRadius = "50%";
            nomorBadge.style.fontWeight = "bold";
            nomorBadge.style.fontSize = "0.8rem";
            nomorBadge.style.marginRight = "10px";

            // Nama halte (link)
            const halteLink = document.createElement('a');
            halteLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Halte Transjakarta ' + halte)}`;
            halteLink.target = '_blank';
            halteLink.className = 'text-decoration-none text-dark';
            halteLink.innerHTML = halte 
        + (halteKRL.includes(halte)
            ? ` <iconify-icon inline icon="jam:train"></iconify-icon>`
            : '')
            + (halteMRT.includes(halte)
        ? ` <iconify-icon inline icon="pepicons-pop:train-circle"></iconify-icon>`
        : ''
        );

            listItem.appendChild(koridorBadge);
            listItem.appendChild(nomorBadge);
            listItem.appendChild(halteLink);

            resultsContainer.appendChild(listItem);
        });
    });
}

// Fungsi untuk mendapatkan jurusan berdasarkan nomor koridor
function getJurusan(koridorNumber, service) {
    const koridor = koridorData[service]?.[koridorNumber];
    const outputElement = document.getElementById("jurusan");

    if (!koridor) {
        outputElement.innerHTML = `Koridor ${koridorNumber} tidak ditemukan.`;
        return;
    }

    const halteAwal = koridor.start;
    const halteAkhir = koridor.end;
    const operator = koridor.operator || "Operator tidak tersedia";

    outputElement.innerHTML = `
    <div class="pt-sans-narrow-bold">
        Koridor<br>
        <span 
            class="mt-2 h3 d-inline-flex justify-content-center align-items-center"
            style="
                width:48px;
                height:48px;
                border-radius:50%;
                background:${getKoridorBadgeColor(koridorNumber)};
                color:#fff;
                display:inline-flex;
                font-size:1.5rem;
                font-weight:bold;
            "
        >${koridorNumber}</span>
    </div>
    <div class="pt-sans-narrow-bold fw-bold">${halteAwal} - ${halteAkhir}</div>
    <div class="pt-sans-narrow-bold mt-2">Operator : ${operator}</div>
`;
}

// Menampilkan daftar halte dalam koridor yang dipilih
function displayKoridorResults(service, koridor) {
    const resultsContainer = document.getElementById('koridorResults');
    resultsContainer.innerHTML = '';

    const koridorDataEntry = koridorData["BRT"]?.[koridor];
    if (!koridor || !koridorDataEntry) return;

    // Tampilkan jurusan di atas daftar halte
    const jurusanDiv = document.createElement('div');
    resultsContainer.appendChild(jurusanDiv);

    koridorDataEntry.haltes.forEach((halte, idx) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex bg-light align-items-center justify-content-between';

        // Kiri: badge nomor urut + nama halte
        const left = document.createElement('span');
        left.className = "d-flex align-items-center";

        // Badge nomor urut halte (warna sesuai koridor utama)
        const nomorBadge = document.createElement('span');
        nomorBadge.textContent = String(idx + 1).padStart(2, '0'); // <-- dua digit
        nomorBadge.style.backgroundColor = getKoridorBadgeColor(koridor);
        nomorBadge.style.color = "#fff";
        nomorBadge.style.width = "24px";
        nomorBadge.style.height = "24px";
        nomorBadge.style.display = "inline-flex";
        nomorBadge.style.alignItems = "center";
        nomorBadge.style.justifyContent = "center";
        nomorBadge.style.borderRadius = "50%";
        nomorBadge.style.fontWeight = "bold";
        nomorBadge.style.fontSize = "0.9rem";
        nomorBadge.style.marginRight = "10px";

        // Nama halte (link)
        const halteLink = document.createElement('a');
        halteLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Halte Transjakarta ' + halte)}`;
        halteLink.target = '_blank';
        halteLink.className = 'text-decoration-none text-dark';
        halteLink.innerHTML = halte 
        + (halteKRL.includes(halte)
            ? ` <iconify-icon inline icon="jam:train"></iconify-icon>`
            : '')
            + (halteMRT.includes(halte)
        ? ` <iconify-icon inline icon="pepicons-pop:train-circle"></iconify-icon>`
        : ''
        );

        left.appendChild(nomorBadge);
        left.appendChild(halteLink);

        // Kanan: badge koridor lain (selain koridor utama)
        const badges = document.createElement('span');
        const servicesAndKoridors = getServicesAndKoridorsByHalte(halte);
        servicesAndKoridors.forEach(({ service: svc, koridor: kor }) => {
            if (kor !== koridor) {
                const badge = createKoridorBadge(svc, kor);
                badges.appendChild(badge);
            }
        });

        listItem.appendChild(left);
        listItem.appendChild(badges);
        resultsContainer.appendChild(listItem);
    });

    getJurusan(koridor, "BRT");
}

// Fungsi untuk memilih koridor ketika badge diklik
function selectKoridor(service, koridor) {
    updateKoridorOptions();
    setTimeout(() => {
        document.getElementById('koridorSelect').value = koridor;
        displayKoridorResults("BRT", koridor);
    }, 100);
}

// Fungsi untuk mencari layanan dan koridor
function searchServiceKoridor(query) {
    const results = [];
    for (const service in koridorData) {
        for (const koridor in koridorData[service]) {
            const koridorEntry = koridorData[service][koridor];

            // Periksa apakah query cocok dengan nomor koridor
            const isKoridorMatch = koridor.toLowerCase().includes(query.toLowerCase());

            // Periksa apakah query cocok dengan halte awal, akhir, atau nama halte
            const isStartMatch = koridorEntry.start.toLowerCase().includes(query.toLowerCase());
            const isEndMatch = koridorEntry.end.toLowerCase().includes(query.toLowerCase());
            const matchingHaltes = koridorEntry.haltes.filter(halte =>
                halte.toLowerCase().includes(query.toLowerCase())
            );

            // Jika cocok, tambahkan ke hasil
            if (isKoridorMatch || isStartMatch || isEndMatch || matchingHaltes.length > 0) {
                results.push({
                    service,
                    koridor,
                    jurusan: `${koridorEntry.start} - ${koridorEntry.end}`,
                    haltes: matchingHaltes // Halte yang cocok
                });
            }
        }
    }
    return results;
}

// Fungsi untuk menampilkan hasil pencarian
function displayAutocompleteResults(results) {
    const autocompleteResults = document.getElementById("autocompleteResults");
    autocompleteResults.innerHTML = ""; // Bersihkan hasil sebelumnya

    if (results.length === 0) {
        const noResultItem = document.createElement("li");
        noResultItem.className = "list-group-item text-center";
        noResultItem.textContent = "Tidak ada hasil ditemukan.";
        autocompleteResults.appendChild(noResultItem);
        return;
    }

    results.forEach(({ service, koridor, jurusan, haltes }) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item bg-light d-flex flex-column";

        // Baris atas: badge koridor + jurusan
        const topRow = document.createElement("div");
        topRow.className = "d-flex align-items-center mb-1";

        // Badge koridor
        const koridorBadge = createKoridorBadge(service, koridor);
        koridorBadge.style.marginRight = "10px";
        koridorBadge.style.fontSize = "1em";
        koridorBadge.style.width = "28px";
        koridorBadge.style.height = "28px";

        // Jurusan
        const jurusanText = document.createElement("span");
        jurusanText.className = "fw-bold";
        jurusanText.textContent = jurusan;

        topRow.appendChild(koridorBadge);
        topRow.appendChild(jurusanText);

        // Baris bawah: halte yang cocok (jika ada)
        let haltesRow = null;
        if (haltes.length > 0) {
            haltesRow = document.createElement("div");
            haltesRow.className = "mt-1";
            haltes.forEach(halte => {
                const halteBadge = document.createElement("span");
                halteBadge.textContent = halte;
                halteBadge.style.background = "#eee";
                halteBadge.style.color = "#333";
                halteBadge.style.borderRadius = "12px";
                halteBadge.style.fontSize = "0.85em";
                halteBadge.style.padding = "2px 10px";
                halteBadge.style.marginRight = "6px";
                halteBadge.style.display = "inline-block";
                halteBadge.style.marginBottom = "2px";
                haltesRow.appendChild(halteBadge);
            });
        }

        // Gabungkan ke list item
        listItem.appendChild(topRow);
        if (haltesRow) listItem.appendChild(haltesRow);

        // Klik: pilih koridor
        listItem.onclick = () => {
            const searchInput = document.getElementById("searchServiceKoridor");
            searchInput.value = koridor;
            autocompleteResults.innerHTML = "";
            selectKoridor(service, koridor);
        };

        autocompleteResults.appendChild(listItem);
    });
}

function findRoutePanduan(halteAsal, halteTujuan) {
    // 1. Cari koridor yang langsung menghubungkan kedua halte
    for (const [service, koridors] of Object.entries(koridorData)) {
        for (const [koridor, data] of Object.entries(koridors)) {
            if (data.haltes.includes(halteAsal) && data.haltes.includes(halteTujuan)) {
                return `Naik ${service} Koridor ${koridor} langsung dari ${halteAsal} ke ${halteTujuan}.`;
            }
        }
    }

    // 2. Jika tidak ada koridor langsung, cari transit
    // Buat daftar: halteAsal ada di koridor mana saja, halteTujuan ada di koridor mana saja
    const asalKoridorList = [];
    const tujuanKoridorList = [];
    for (const [service, koridors] of Object.entries(koridorData)) {
        for (const [koridor, data] of Object.entries(koridors)) {
            if (data.haltes.includes(halteAsal)) asalKoridorList.push({ service, koridor, haltes: data.haltes });
            if (data.haltes.includes(halteTujuan)) tujuanKoridorList.push({ service, koridor, haltes: data.haltes });
        }
    }

    // 3. Cari halte transit yang sama di dua koridor berbeda
    for (const asal of asalKoridorList) {
        for (const tujuan of tujuanKoridorList) {
            if (asal.service === tujuan.service && asal.koridor === tujuan.koridor) continue; // Sudah dicek di atas
            // Cari halte transit yang sama
            const halteTransit = asal.haltes.find(h => tujuan.haltes.includes(h));
            if (halteTransit) {
                return `Naik ${asal.service} Koridor ${asal.koridor} dari ${halteAsal} ke ${halteTransit}, lalu transit ke ${tujuan.service} Koridor ${tujuan.koridor} menuju ${halteTujuan}.`;
            }
        }
    }

    return "Rute tidak ditemukan atau transit lebih dari satu kali diperlukan.";
}

function findRoutePanduanMultiTransit(halteAsal, halteTujuan) {
    // Buat graph halte: halte -> [{halteTujuan, service, koridor}]
    const halteGraph = {};

    for (const [service, koridors] of Object.entries(koridorData)) {
        for (const [koridor, data] of Object.entries(koridors)) {
            for (let i = 0; i < data.haltes.length; i++) {
                const halte = data.haltes[i];
                if (!halteGraph[halte]) halteGraph[halte] = [];
                // Tambahkan edge ke halte sebelum dan sesudahnya
                if (i > 0) {
                    halteGraph[halte].push({ halteTujuan: data.haltes[i - 1], service, koridor, idx: i - 1 });
                }
                if (i < data.haltes.length - 1) {
                    halteGraph[halte].push({ halteTujuan: data.haltes[i + 1], service, koridor, idx: i + 1 });
                }
            }
        }
    }

    // BFS dengan prioritas: lanjutkan di koridor yang sama selama mungkin
    const queue = [{
        halte: halteAsal,
        path: [{ halte: halteAsal, service: null, koridor: null }],
        service: null,
        koridor: null
    }];
    const visited = new Set([`${halteAsal}|`]);

    while (queue.length > 0) {
        const { halte, path, service: currService, koridor: currKoridor } = queue.shift();
        if (halte === halteTujuan) {
            // Format hasil rute
            let result = "";
            for (let i = 1; i < path.length; i++) {
                const prev = path[i - 1];
                const curr = path[i];
                if (
                    !prev.service ||
                    prev.service !== curr.service ||
                    prev.koridor !== curr.koridor
                ) {
                    if (result) {
                        result += ", lanjut naik ";
                    } else {
                        result += "Naik ";
                    }
                    result += `${curr.service} Koridor ${curr.koridor} dari ${prev.halte} ke `;
                }
                if (
                    i === path.length - 1 ||
                    curr.service !== path[i + 1]?.service ||
                    curr.koridor !== path[i + 1]?.koridor
                ) {
                    result += `${curr.halte}`;
                }
            }
            result += ".";
            return result;
        }
        for (const next of halteGraph[halte] || []) {
            // Jika masih di koridor yang sama, prioritaskan lanjut di koridor itu
            let nextKey = `${next.halteTujuan}|${next.service}|${next.koridor}`;
            if (!visited.has(nextKey)) {
                // Jika masih di koridor yang sama, masukkan ke depan queue (prioritas)
                if (currService === next.service && currKoridor === next.koridor) {
                    queue.unshift({
                        halte: next.halteTujuan,
                        path: [...path, { halte: next.halteTujuan, service: next.service, koridor: next.koridor }],
                        service: next.service,
                        koridor: next.koridor
                    });
                } else {
                    queue.push({
                        halte: next.halteTujuan,
                        path: [...path, { halte: next.halteTujuan, service: next.service, koridor: next.koridor }],
                        service: next.service,
                        koridor: next.koridor
                    });
                }
                visited.add(nextKey);
            }
        }
    }
    return "Rute tidak ditemukan.";
}

function getAllHalteNames() {
    const halteSet = new Set();
    for (const koridors of Object.values(koridorData)) {
        for (const koridorInfo of Object.values(koridors)) {
            koridorInfo.haltes.forEach(halte => halteSet.add(halte));
        }
    }
    return Array.from(halteSet);
}

function populateHalteDatalist() {
    const halteList = document.getElementById('halteList');
    halteList.innerHTML = '';
    getAllHalteNames().forEach(halte => {
        const option = document.createElement('option');
        option.value = halte;
        halteList.appendChild(option);
    });
}

// Panggil fungsi ini sekali saat halaman dimuat
populateHalteDatalist();

// Event listeners
document.getElementById('koridorSelect').addEventListener('change', function () {
    displayKoridorResults("BRT", this.value);
});

document.getElementById('searchInput').addEventListener('input', function () {
    displaySearchResults(this.value);
});

document.getElementById("searchServiceKoridor").addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
        const results = searchServiceKoridor(query);
        displayAutocompleteResults(results);
    } else {
        document.getElementById("autocompleteResults").innerHTML = ""; // Bersihkan hasil jika input kosong
    }
});

document.getElementById('cariRuteBtn').addEventListener('click', function () {
    const asal = document.getElementById('halteAsalInput').value.trim();
    const tujuan = document.getElementById('halteTujuanInput').value.trim();
    const hasilDiv = document.getElementById('hasilRute');
    hasilDiv.innerHTML = ""; // Kosongkan dulu

    if (!asal || !tujuan) {
        hasilDiv.textContent = "Silakan isi kedua nama halte.";
        return;
    }

    // Dapatkan rute terbaik
    let hasil = findRoutePanduan(asal, tujuan);
    let isMulti = false;
    if (hasil === "Rute tidak ditemukan atau transit lebih dari satu kali diperlukan.") {
        hasil = findRoutePanduanMultiTransit(asal, tujuan);
        isMulti = true;
    }

    // Parsing hasil untuk badge interaktif
    // Regex: cari "Koridor X" dan ganti X dengan badge
    let html = hasil;
    const koridorRegex = /([A-Za-z]+) Koridor (\w+)/g;
    let match, lastIndex = 0;
    hasilDiv.innerHTML = ""; // Kosongkan hasil

    while ((match = koridorRegex.exec(hasil)) !== null) {
        // Teks sebelum badge
        hasilDiv.append(document.createTextNode(hasil.slice(lastIndex, match.index)));
        // Badge interaktif
        const badge = createKoridorBadge(match[1], match[2]);
        hasilDiv.appendChild(document.createTextNode(`${match[1]} Koridor `));
        hasilDiv.appendChild(badge);
        lastIndex = koridorRegex.lastIndex;
    }
    // Sisa teks setelah badge terakhir
    hasilDiv.append(document.createTextNode(hasil.slice(lastIndex)));
});

// Fungsi untuk menentukan warna badge berdasarkan nomor koridor


function createKoridorBadge(service, koridor) {
    const badge = document.createElement('span');
    badge.textContent = koridor;
    badge.title = `Lihat daftar halte Koridor ${koridor}`;
    badge.style.backgroundColor = getKoridorBadgeColor(koridor);
    badge.style.color = "#fff";
    badge.style.width = "24px";
    badge.style.height = "24px";
    badge.style.display = "inline-flex";
    badge.style.alignItems = "center";
    badge.style.justifyContent = "center";
    badge.style.borderRadius = "50%";
    badge.style.fontWeight = "bold";
    badge.style.fontSize = "0.7rem";
    badge.style.cursor = "pointer";
    badge.style.margin = "0 4px";
    badge.onclick = () => selectKoridor(service, koridor);
    return badge;
}

//jam
function updateLiveClock() {
    const clock = document.getElementById('liveClock');
    if (!clock) return;
    const now = new Date();
    const pad = n => n.toString().padStart(2, '0');
    clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}
setInterval(updateLiveClock, 1000);
updateLiveClock();

// Panggil updateKoridorOptions saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    updateKoridorOptions();
});