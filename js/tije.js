const koridorData = {
    "BRT": {
        "1": {
            start: "Blok M",
            end: "Kota",
            operator: "Transjakarta (TJ), DAMRI (DMR), Bianglala Metropolitan (BMP) & Mayasari Bakti (MB/MYS)",
            haltes: ["Blok M", "ASEAN", "Kejaksaan Agung", "Masjid Agung", "Bundaran Senayan",
                "Senayan BANK DKI", "Polda Metro Jaya", "Bendungan Hilir", "Karet",
                "Dukuh Atas", "Tosari", "Bundaran HI ASTRA", "M.H. Thamrin",
                "Kebon Sirih", "Monumen Nasional", "Harmoni", "Sawah Besar",
                "Mangga Besar", "Taman Sari", "Glodok", "Museum Sejarah Jakarta", "Kali Besar"]
        },
        "2": {
            start: "Pulo Gadung",
            end: "Monumen Nasional",
            operator: "DAMRI (DMR) & Pahala Kencana Transportation (PKT)",
            haltes: ["Pulo Gadung", "Bermis", "Pulomas", "Perintis Kemerdekaan", "Pedongkelan",
                "Cempaka Mas", "Sumur Batu", "Cempaka Baru", "Pasar Cempaka Putih",
                "Rawa Selatan", "Galur", "Senen TOYOTA Rangga", "Senen Raya", "RSPAD",
                "Pejambon", "Gambir", "Istiqlal", "Juanda", "Pecenongan",
                "Balai Kota", "Gambir 2", "Kwitang", "Monumen Nasional"]
            },
            "3": {
                start: "Kalideres",
                end: "Monumen Nasional via Veteran",
                operator: "Steady Safe (SAF) & Mayasari Bakti (MB/MYS)",
            haltes: ["Kalideres", "Pesakih", "Sumur Bor", "Rawa Buaya", "Jembatan Baru", "Pulo Nangka",
                "Jembatan Gantung", "Taman Kota", "Damai", "Jelambar", "Grogol", "Roxy", "Petojo", "Monumen Nasional"]
        },
        "5": {
            start: "Kampung Melayu",
            end: "Ancol",
            operator: "Transjakarta (TJ), DAMRI (DMR), Steady Safe (SAF), & Mayasari Bakti (MB/MYS)",
            haltes: ["Kampung Melayu", "Jatinegara", "Bali Mester", "Matraman Baru", "Kesatrian", "Tegalan", "Matraman", "Paseban","Salemba","Kramat Sentiong","Pal Putih", "Senen Sentral","Lapangan Banteng", "Pasar Baru Timur", "Jembatan Merah", "Gunung Sahari", "Pademangan", "Ancol"]
        },
        "9": {
            start: "Pinang Ranti",
            end: "Pluit",
            operator: "DAMRI (DMR)",
            haltes: ["Pinang Ranti", "Makasar", "Cawang Sentral", "Cawang", "Ciliwung", "Cikoko", "Tebet Eco Park", "Pancoran Tugu", "Pancoran", "Tegal Parang", "Simpang Kuningan", "Denpasar", "Widya Chandra Telkomsel", "Semanggi", "Gerbang Pemuda", "Petamburan","Kemanggisan","Kota Bambu", "Tanjung Duren", "Grogol Reformasi", "Kali Grogol", "Jembatan Besi", "Jembatan Dua", "Jembatan Tiga", "Penjaringan", "Pluit"]
        },
        "10" : {
            start: "Tanjung Priok",
            end: "PGC",
            operator: "Steady Safe (SAF), Mayasari Bakti (MB/MYS), DAMRI (DMR) & Sinar Jaya Megah (SJM)",
            haltes: ["Tanjung Priok", "Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Kodamar", "Simpang Cempaka", "Cempaka Putih", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pisangan", "Flyover Jatinegara", "Pedati Perumpung", "Kebon Nanas", "Halim", "Simpang Cawang", "Cawang Sentral", "Cawang Cililitan", "PGC"]
        },
        "11": {
            start: "Kampung Melayu",
            end: "Pulo Gebang",
            operator: "Steady Safe (SAF) & Bianglala Metropolitan (BMP)",
            haltes: ["Kampung Melayu", "Jatinegara", "Stasiun Jatinegara", "Flyover Jatinegara", "Pasar Enjo", "Flyover Cipinang", "Cipinang","Stasiun Klender", "Klender", "Kampung Sumur", "Buaran", "Simpang Buaran", "Flyover Pondok Kopi", "Penggilingan", "Walikota Jakarta Timur", "Pulo Gebang"]
        },
        "12": {
            start: "Tanjung Priok",
            end: "Pluit",
            haltes: ["Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Sunter Boulevard Barat", "Sunter Karya", "Sunter Utara", "Danau Agung", "Landasan Pacu", "Jembatan Merah", "Gunung Sahari", "Mangga Dua", "Mangga Dua Raya", "Kali Besar", "Bandengan", "Penjaringan", "Pluit", "Pluit Selatan", "Pakin", "Gedong Panjang", "Museum Sejarah Jakarta", "Kota"]
        },
        // Tambahkan koridor lainnya...
    },
    "Non-BRT": {
        "11Q": {
            start: "Kampung Melayu",
            end: "Pulo Gebang via BKT",
            operator: "DAMRI (DMR) & Transjakarta (TJ)",
            haltes: ["Pulo Gebang", "Walikota Jakarta Timur", "Penggilingan", "Perumnas Klender"]
        }
    }
};

// Update daftar koridor berdasarkan layanan
function updateKoridorOptions(service) {
    const koridorSelect = document.getElementById('koridorSelect');
    koridorSelect.innerHTML = '<option value="">Pilih Koridor</option>';

    if (service && koridorData[service]) {
        for (const koridor in koridorData[service]) {
            const option = document.createElement('option');
            option.value = koridor;
            option.textContent = `Koridor ${koridor}`;
            koridorSelect.appendChild(option);
        }
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
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex bg-light justify-content-between ';
        const halteLink = document.createElement('a');
        halteLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Halte Transjakarta ' + halte)}`;
        halteLink.target = '_blank';
        halteLink.textContent = halte;
        halteLink.className = 'text-decoration-none text-dark';

        listItem.appendChild(halteLink);


        const badges = document.createElement('span');
        servicesAndKoridors.forEach(({ service, koridor }) => {
            const badge = document.createElement('span');
            badge.className = `badge ${service === 'BRT' ? 'btn btn-primary btn-sm rounded-5' : 'bg-warning rounded-5'} mx-1`;
            badge.textContent = `${koridor}`;
            badge.style.cursor = "pointer";
            badge.onclick = () => selectKoridor(service, koridor);
            badges.appendChild(badge);
        });

        listItem.appendChild(badges);
        resultsContainer.appendChild(listItem);
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
        <div class="pt-sans-narrow-bold"><strong>Koridor ${koridorNumber}</strong></div>
        <div class="pt-sans-narrow-bold">${halteAwal} - ${halteAkhir}</div>
        <div class="pt-sans-narrow-bold">${operator}</div>
    `;
}

// Menampilkan daftar halte dalam koridor yang dipilih
function displayKoridorResults(service, koridor) {
    const resultsContainer = document.getElementById('koridorResults');
    resultsContainer.innerHTML = '';

    const koridorDataEntry = koridorData[service]?.[koridor];
    if (!service || !koridor || !koridorDataEntry) return;

    koridorDataEntry.haltes.forEach(halte => {
        const servicesAndKoridors = getServicesAndKoridorsByHalte(halte);

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex bg-light justify-content-between align-items-center';
        const halteLink = document.createElement('a');
        halteLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Halte Transjakarta ' + halte)}`;
        halteLink.target = '_blank';
        halteLink.textContent = halte;
        halteLink.className = 'text-decoration-none text-dark';

        listItem.appendChild(halteLink);

        const badges = document.createElement('span');
        servicesAndKoridors.forEach(({ service, koridor }) => {
            const badge = document.createElement('span');
            badge.className = `badge ${service === 'BRT' ? 'btn btn-sm btn-primary rounded-5' : 'bg-warning rounded-5'} mx-1`;
            badge.textContent = `${koridor}`;
            badge.style.cursor = "pointer";
            badge.onclick = () => selectKoridor(service, koridor);
            badges.appendChild(badge);
        });

        listItem.appendChild(badges);
        resultsContainer.appendChild(listItem);
    });

    getJurusan(koridor, service);
}

// Fungsi untuk memilih koridor ketika badge diklik
function selectKoridor(service, koridor) {
    document.getElementById('serviceSelect').value = service;
    updateKoridorOptions(service);

    setTimeout(() => {
        document.getElementById('koridorSelect').value = koridor;
        displayKoridorResults(service, koridor);
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

        // Tambahkan nama koridor
        const koridorText = document.createElement("span");
        koridorText.className = "fw-bold";
        koridorText.textContent = `Koridor ${koridor}`;

        // Tambahkan jurusan (halte awal dan akhir)
        const jurusanText = document.createElement("span");
        jurusanText.className = "text-muted";
        jurusanText.textContent = `Jurusan: ${jurusan}`;

        // Tambahkan daftar halte yang cocok
        const haltesText = document.createElement("span");
        haltesText.className = "text-secondary";
        haltesText.textContent = haltes.length > 0
            ? `Halte yang cocok: ${haltes.join(", ")}`
            : "";

        // Tambahkan badge untuk layanan
        const badge = document.createElement("span");
        badge.className = `badge ${service === "BRT" ? "bg-primary" : "bg-warning"} rounded-pill mt-1`;
        badge.textContent = service;

        // Gabungkan elemen ke dalam list item
        listItem.appendChild(koridorText);
        listItem.appendChild(jurusanText);
        if (haltes.length > 0) listItem.appendChild(haltesText);
        listItem.appendChild(badge);

        // Tambahkan event klik untuk memilih koridor
        listItem.onclick = () => {
            const searchInput = document.getElementById("searchServiceKoridor");
            searchInput.value = koridor; // Hanya menampilkan nomor koridor
            autocompleteResults.innerHTML = ""; // Bersihkan hasil setelah memilih
            selectKoridor(service, koridor); // Pilih koridor yang diklik
        };

        autocompleteResults.appendChild(listItem);
    });
}

// Event listeners
document.getElementById('serviceSelect').addEventListener('change', function () {
    updateKoridorOptions(this.value);
    document.getElementById('koridorResults').innerHTML = '';
    document.getElementById('jurusan').innerHTML = 'Jurusan akan ditampilkan di sini';
});

document.getElementById('koridorSelect').addEventListener('change', function () {
    displayKoridorResults(document.getElementById('serviceSelect').value, this.value);
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