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
                "Mangga Besar", "Taman Sari", "Glodok","Kota", "Museum Sejarah Jakarta", "Kali Besar"]
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
        "4": {
            start: "Pulo Gadung",
            end: "Galunggung",
            operator: "Transjakarta (TJ), DAMRI (DMR) & Steady Safe (SAF)",
            haltes: ["Pulo Gadung", "Pemuda Merdeka", "Layur", "Pemuda Rawamangun", "Velodrome", "Kayu Jati", "Rawamangun", "Simpang Pramuka", "Pramuka Sari", "Utan Kayu", "Pasar Genjing", "Flyover Pramuka", "Matraman", "Tegalan", "Kesatrian", "Manggarai", "Pasar Rumput", "Halimun", "Galunggung"]
        },
        "5": {
            start: "Kampung Melayu",
            end: "Ancol",
            operator: "Transjakarta (TJ), DAMRI (DMR), Steady Safe (SAF), & Mayasari Bakti (MB/MYS)",
            haltes: ["Kampung Melayu", "Jatinegara", "Bali Mester", "Matraman Baru", "Kesatrian", "Tegalan", "Matraman", "Paseban","Salemba","Kramat Sentiong","Pal Putih", "Senen Sentral","Lapangan Banteng", "Pasar Baru Timur", "Jembatan Merah", "Gunung Sahari", "Pademangan", "Ancol"]
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
            operator: "DAMRI (DMR) & Bianglala Metropolitan (BMP)",
            haltes: ["Ragunan","Simpang Ragunan","Jati Barat", "Jati Padang", "Pejaten", "Buncit Indah", "Warung Jati", "Warung Buncit", "Duren Tiga", "Mampang Prapatan", "Underpass Kuningan", "Patra Kuningan", "Kuningan", "Rasuna Said", "Karet Kuningan", "Kuningan Madya", "Setiabudi", "Flyover Kuningan", "Halimun", "Galunggung"]
        },
        "7": {
            start: "Kampung Melayu",
            end: "Kampung Rambutan",
            operator: "Mayasari Bakti (MB/MYS) & Steady Safe (SAF)",
            haltes: ["Kampung Melayu", "Bidara Cina", "Gelanggang Remaja", "Cawang Baru", "Cawang", "Cawang Sentral", "Cawang Cililitan","Cililitan","Kramat Jati", "Pasar Induk", "Trikora", "Flyover Raya Bogor", "Tanah Merdeka","Kampung Rambutan"]
        },
        "7F": {
            start: "Kampung Rambutan",
            end: "Juanda via Cempaka Putih",
            operator: "DAMRI (DMR) & Mayasari Bakti (MYS)",
            haltes: ["Juanda", "Pacenongan", "Pasar Baru", "Monumen Nasional", "Balai Kota", "Kwitang", "Senen TOYOTA Rangga", "Galur", "Rawa Selatan", "Pasar Cempaka Putih", "Cempaka Baru", "Sumur Batu", "Cempaka Mas", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pasar Induk", "Trikora", "Flyover Raya Bogor", "Kampung Rambutan"]
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
        "10D" : {
            start: "Tanjung Priok",
            end: "Kampung Rambutan",
            operator: "Steady Safe (SAF), Mayasari Bakti (MB/MYS), DAMRI (DMR) & Sinar Jaya Megah (SJM)",
            haltes: ["Tanjung Priok", "Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Kodamar", "Simpang Cempaka", "Cempaka Putih", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pasar Induk", "Trikora","Flyover Raya Bogor","Kampung Rambutan"]
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
    },
    "Non-BRT": {
        //akan diperbaiki dan dikembangkan di lain waktu 
    }
};

// Update daftar koridor berdasarkan layanan
function updateKoridorOptions(service) {
    const koridorSelect = document.getElementById('koridorSelect');
    koridorSelect.innerHTML = '<option value="" disabled selected>Koridor</option>';

    // Jika belum memilih layanan, tetap disabled
    koridorSelect.disabled = !service;

    if (service && koridorData[service]) {
        koridorSelect.disabled = false;
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
            const badge = createKoridorBadge(service, koridor);
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
    <div class="pt-sans-narrow-bold">${halteAwal} - ${halteAkhir}</div>
    <div class="pt-sans-narrow-bold mt-2">Operator : ${operator}</div>
`;
}

// Menampilkan daftar halte dalam koridor yang dipilih
function displayKoridorResults(service, koridor) {
    const resultsContainer = document.getElementById('koridorResults');
    resultsContainer.innerHTML = '';

    // Tambahkan alert jika layanan belum dipilih
    if (!service) {
        alert('Silakan pilih layanan terlebih dahulu sebelum memilih koridor.');
        return;
    }

    const koridorDataEntry = koridorData[service]?.[koridor];
    if (!koridor || !koridorDataEntry) return;

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
            const badge = createKoridorBadge(service, koridor);
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

// Contoh penggunaan:
console.log(findRoutePanduanMultiTransit("Penggilingan", "Tebet Eco Park"));

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
function getKoridorBadgeColor(koridor) {
    const colorMap = {
        "1": "#D02027",    
        "2": "#264697",   
        "3": "#FCC81B",    
        "4": "#562A62",    
        "5": "#BC5827",   
        "5C": "#9CD2C6",   
        "6": "#2FA449",   
        "7": "#E2275B",   
        "7F": "#ff326b", 
        "9": "#3F9593",    
        "10": "#8F1A1E",   
        "10D": "#9b3337",   
        "11": "#2F4FA2",   
        "11Q": "#10C0FF",
        "12": "#62BD73",   
        // Tambahkan mapping lain sesuai kebutuhan
    };
    return colorMap[koridor] || "#adb5bd"; // Default abu-abu jika tidak ada warna
}

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