export const koridorData = {
    "BRT": {
        "1": {
            start: "Blok M",
            end: "Kota",
            operator: "Transjakarta (TJ), DAMRI (DMR), Bianglala Metropolitan (BMP),Mayasari Bakti (MB/MYS)",
            isAMARI: true,
            busType: [
                "Zhongtong Bus LCK6180GC",
                "SAG Golden Dragon XML6125JEVJ0C3",
                "Hino RK1JSNL",
                "Mercedes-Benz OH 1626",
                "Scania K320IA","Scania K3410IB",
                "Skywell NJL6126BEV",
                "Hino RK8 R260",
                "Mercedes-Benz OC 500 RF 2542",
            ],
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
            busType: [
                "Hino RK8 R260",
                "Zhongtong Bus LCK6126EVGRA1", 
                "Skywell NJL6126BEV",
            ],
            isAmari: true,
            haltes: ["Pulo Gadung", "Bermis", "Pulo Mas", "Perintis Kemerdekaan", "Pedongkelan",
                "Cempaka Mas", "Sumur Batu", "Cempaka Baru", "Pasar Cempaka Putih",
                "Rawa Selatan", "Galur", "Senen TOYOTA Rangga", "Senen Raya", "RSPAD",
                "Pejambon", "Gambir", "Istiqlal", "Juanda", "Pecenongan","Kwitang",
               "Gambir 2", "Balai Kota",  "Monumen Nasional"]
            },
        "2A": {
            start: "Pulo Gadung",
            end: "Rawa Buaya",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            busType: [
                "Zhongtong Bus LCK6126EVGRA1",
                "Mercedes-Benz OH 1626",
                "Scania K320IA","Scania K3410IB",
                "Skywell NJL6126BEV",
            ],
            operator: "Pahala Kencana Transportation (PKT), Mayasari Bakti (MYS) , DAMRI (DMR)",
            haltes: ["Pulo Gadung", "Bermis", "Pulo Mas", "Perintis Kemerdekaan", "Pedongkelan",
                "Cempaka Mas", "Sumur Batu", "Cempaka Baru", "Pasar Cempaka Putih",
                "Rawa Selatan", "Galur", "Senen TOYOTA Rangga", "Kwitang", "Gambir 2", "Balai Kota", "Petojo", "Roxy", "Grogol", "Jelambar", "Damai", "Taman Kota", "Jembatan Gantung", "Jembatan Baru", "Rawa Buaya"]
            },
            "3": {
                start: "Kalideres",
                end: "Monumen Nasional via Veteran",
                isAMARI: true,
                busType: [
                "Hino RK8 R260",
                "Mercedes-Benz OH 1626",
                "Scania K320IA","Scania K3410IB",
                "Volvo B11R"
            ],
                operator: "Steady Safe (SAF), Bianglala Metropolitan (BMP) , Mayasari Bakti (MB/MYS)",
            haltes: ["Kalideres", "Pesakih", "Sumur Bor", "Rawa Buaya", "Jembatan Baru", "Pulo Nangka",
                "Jembatan Gantung", "Taman Kota", "Damai", "Jelambar", "Grogol", "Roxy", "Petojo", "Monumen Nasional"]},
            "3F": {
                start: "Kalideres",
                end: "Senayan BANK DKI",
                operationalSchedule: {
                    weekday: {
                        days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                        hours: { start: 5, end: 22 }
                    },
                    },
                operator: "Transjakarta (TJ) , Mayasari Bakti (MB/MYS)",
            haltes: ["Kalideres", "Pesakih", "Sumur Bor", "Rawa Buaya", "Jembatan Baru", "Pulo Nangka",
                "Jembatan Gantung", "Taman Kota", "Damai", "Jelambar", "Grogol Reformasi", "Tanjung Duren", "Kota Bambu", "Kemanggisan", "Petamburan", "Gerbang Pemuda", "Senayan BANK DKI"]
        },
            "3H": {
                start: "Damai",
                end: "Kota",
                operationalSchedule: {
                    weekday: {
                        days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                        hours: { start: 5, end: 22 }
                    },
                    },
                operator: "Transjakarta (TJ) , Mayasari Bakti (MB/MYS)",
            haltes: ["Damai","Jelambar","Grogol","Roxy","Petojo","Harmoni","Sawah Besar","Mangga Besar","Taman Sari","Glodok","Kali Besar","Museum Sejarah Jakarta","Kota"]
        },
        "4": {
            start: "Pulo Gadung",
            end: "Galunggung",
            operator: "Transjakarta (TJ) , DAMRI (DMR)",
            busType: [
                "Zhongtong Bus LCK6126EVGRA1",
                "Hino RK8 R260",
                "Mercedes-Benz OH 1626",
                "Mercedes-Benz OH 1526",
                "Skywell NJL6126BEV"
            ],
            isAMARI: true,
            haltes: ["Pulo Gadung", "Pemuda Merdeka", "Layur", "Pemuda Rawamangun", "Velodrome", "Kayu Jati", "Rawamangun", "Simpang Pramuka", "Pramuka Sari", "Utan Kayu", "Pasar Genjing", "Flyover Pramuka", "Matraman", "Tegalan", "Kesatrian", "Manggarai", "Pasar Rumput", "Halimun", "Galunggung"]
        },
        "4D": {
            start: "Pulo Gadung",
            end: "Patra Kuningan",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            operator: "Transjakarta (TJ) , Steady Safe (SAF)",
            haltes: ["Pulo Gadung", "Pasar Pulo Gadung", "Pemuda Merdeka", "Layur", "Pemuda Rawamangun", "Velodrome", "Kayu Jati", "Rawamangun", "Simpang Pramuka", "Pramuka Sari", "Utan Kayu", "Pasar Genjing", "Flyover Pramuka", "Matraman", "Tegalan", "Kesatrian", "Manggarai", "Pasar Rumput", "Halimun", "Flyover Kuningan", "Setiabudi", "Kuningan Madya", "Karet Kuningan", "Rasuna Said", "Patra Kuningan"]
        },
        
        "5": {
            start: "Kampung Melayu",
            end: "Ancol",
            isAMARI: true,
            busType: [
                "Zhongtong Bus LCK6126EVGRA1",
                "Volvo B11R","Scania K3410IB",
                "Mercedes-Benz OH 1626",
                "Zhongtong Bus LCK6180GC",
                "Hino RK8 R260",
                "Skywell NJL6126BEV"
            ],
            operator: "Transjakarta (TJ), DAMRI (DMR), , Steady Safe (SAF)",
            haltes: ["Ancol", "Pademangan", "Gunung Sahari", "Jembatan Merah", "Pasar Baru Timur", "Lapangan Banteng", "Senen Sentral", "Pal Putih", "Kramat Sentiong", "Salemba", "Paseban", "Matraman", "Tegalan", "Kesatrian", "Matraman Baru", "Bali Mester", "Jatinegara", "Kampung Melayu"]
        },
        "5C": {
            start: "Cililitan",
            end: "Juanda",
            operator: "Transjakarta (TJ), Steady Safe (SAF), , DAMRI (DMR)",
             busType: [
                "Zhongtong Bus LCK6126EVGRA1",
                "Volvo B11R","Scania K3410IB",
                "Mercedes-Benz OH 1626",
                "Zhongtong Bus LCK6180GC",
            ],
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            haltes: ["Cililitan","Cawang Cililitan", "Cawang Sentral", "Cawang", "Cawang Baru", "Gelanggang Remaja", "Bidara Cina", "Kampung Melayu", "Jatinegara", "Bali Mester", "Matraman Baru", "Kesatrian", "Tegalan", "Matraman", "Paseban","Salemba","Kramat Sentiong","Pal Putih", "Kwitang", "Balai Kota", "Monumen Nasional", "Pecenongan", "Juanda", "Lapangan Banteng"]
        },
        "6": {
            start: "Ragunan",
            end: "Galunggung",
            isAMARI: true,
            operator: "DAMRI (DMR) , Bianglala Metropolitan (BMP), Mayasari Bakti (MYS)",
            busType: [
                "SAG Golden Dragon XML6125JEVJ0C3",
                "Skywell NJL6126BEV",
               "Zhongtong Bus LCK6126EVGRA1",
               "Mercedes-Benz OH 1626"
            ],
            haltes: ["Ragunan","Simpang Ragunan Ar-Raudhah","Jati Barat", "Jati Padang", "Pejaten", "Buncit Indah", "Warung Jati", "Warung Buncit", "Duren Tiga", "Mampang Prapatan", "Underpass Kuningan", "Patra Kuningan", "Kuningan", "Rasuna Said", "Karet Kuningan", "Kuningan Madya", "Setiabudi", "Flyover Kuningan", "Halimun", "Galunggung"]
        },
        "6A": {
            start: "Ragunan",
            end: "Balai Kota via Kuningan",
             busType: [
                "SAG Golden Dragon XML6125JEVJ0C3",
                "Skywell NJL6126BEV",
               "Zhongtong Bus LCK6126EVGRA1",
               "Mercedes-Benz OH 1626"
            ],
            operator: "DAMRI (DMR) , Bianglala Metropolitan (BMP), Mayasari Bakti (MYS)",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            haltes: ["Ragunan","Simpang Ragunan Ar-Raudhah","Jati Barat", "Jati Padang", "Pejaten", "Buncit Indah", "Warung Jati", "Warung Buncit", "Duren Tiga", "Mampang Prapatan", "Underpass Kuningan", "Patra Kuningan", "Kuningan", "Rasuna Said", "Karet Kuningan", "Kuningan Madya", "Setiabudi", "Bundaran HI ASTRA", "M.H Thamrin", "Kebon Sirih", "Balai Kota"]
        },
        "6B" : {
            start: "Ragunan",
            end: "Balai Kota via Semanggi",
            busType: [
                "SAG Golden Dragon XML6125JEVJ0C3",
                "Skywell NJL6126BEV",
               "Zhongtong Bus LCK6126EVGRA1",
               "Mercedes-Benz OH 1626"
            ],
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            operator: "DAMRI (DMR) , Bianglala Metropolitan (BMP), Mayasari Bakti (MYS)",
            haltes: ["Ragunan","Simpang Ragunan Ar-Raudhah","Jati Barat", "Jati Padang", "Pejaten", "Buncit Indah", "Warung Jati", "Warung Buncit", "Duren Tiga", "Mampang Prapatan", "Denpasar", "Widya Chandra Telkomsel", "Semanggi", "Karet", "Dukuh Atas", "Tosari", "Bundaran HI ASTRA", "M.H Thamrin", "Kebon Sirih", "Balai Kota"]
        },
        "6V" : {
            start: "Ragunan",
            end: "Senayan BANK DKI",
            busType: [
                "SAG Golden Dragon XML6125JEVJ0C3",
                "Skywell NJL6126BEV",
               "Zhongtong Bus LCK6126EVGRA1",
               "Mercedes-Benz OH 1626"
            ],
            operator: "DAMRI (DMR) , Bianglala Metropolitan (BMP), Mayasari Bakti (MYS)",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            haltes: ["Ragunan","Simpang Ragunan Ar-Raudhah","Jati Barat", "Jati Padang", "Pejaten", "Buncit Indah", "Warung Jati", "Warung Buncit", "Duren Tiga", "Mampang Prapatan", "Tegal Mampang", "Rawa Barat", "Pasar Santa", "ASEAN","Masjid Agung", "Bundaran Senayan", "Senayan BANK DKI"]
        },
        "7": {
            start: "Kampung Melayu",
            end: "Kampung Rambutan",
            isAMARI: true,
            busType: [
                "Mercedes-Benz OH 1526",
                "Skywell NJL6126BEV",
                "Hino RK8 R260",
               "Zhongtong Bus LCK6126EVGRA1",
               "Mercedes-Benz OH 1626"
            ],
            operator: "Mayasari Bakti (MYS), Steady Safe (SAF), Bianglala Metropolitan (BMP)",
            haltes: ["Kampung Rambutan", "Tanah Merdeka", "Flyover Raya Bogor", "Trikora", "Pasar Induk", "Kramat Jati", "Cililitan", "Cawang Cililitan", "Cawang Sentral", "Cawang", "Cawang Baru", "Gelanggang Remaja", "Bidara Cina", "Kampung Melayu"]
        },
        "7F": {
            start: "Kampung Rambutan",
            end: "Juanda via Cempaka Putih",
            busType: [
                "Volvo B11R",
                "Hino RK8 R260",
               "Mercedes-Benz OH 1626"
            ],
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6],
                    hours: [
                        { start: 5, end: 9 },    // Pagi: 05:00 - 09:00
                        { start: 15, end: 21 }   // Sore: 15:00 - 21:00
                    ]
                }
            },
            operator: "DAMRI (DMR), Mayasari Bakti (MYS), Transjakarta (TJ)",
            haltes: ["Juanda", "Pecenongan", "Pasar Baru", "Monumen Nasional", "Balai Kota", "Kwitang", "Senen TOYOTA Rangga", "Galur", "Rawa Selatan", "Pasar Cempaka Putih", "Cempaka Baru", "Sumur Batu", "Cempaka Mas", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pasar Induk", "Trikora", "Flyover Raya Bogor", "Kampung Rambutan"]
        },
        "8": {
            start: "Lebak Bulus",
            end: "Pasar Baru",
            isAMARI: true,
            operator: "Bianglala Metropolitan (BMP) , Transjakarta (TJ)",
            haltes: ["Lebak Bulus", "Pondok Pinang", "Underpass Lebak Bulus", "Pondok Indah", "Tanah Kusir", "Bungur", "Kebayoran", "Simprug", "Permata Hijau", "Arteri", "Pos Pengumben", "Kelapa Dua Sasak", "Kebon Jeruk", "Duri Kepa", "Kedoya Panjang", "Kedoya", "Damai", "Jelembar", "Grogol Reformasi", "Tanjung Duren", "Tomang Raya", "Tarakan", "Petojo", "Pecenongan", "Juanda", "Pasar Baru"]
        },
        "9": {
            start: "Pinang Ranti",
            end: "Pluit",
            isAMARI: true,
            busType: [
                "Zhongtong Bus LCK6126EVGRA1",
                "Zhongtong Bus LCK6180GC",
                "Volvo B11R",
                "Mercedes-Benz OH 1626",
                "Mercedes-Benz OH 1526",
                "Mercedes-Benz OC 500 RF 2542",
                "Scania K320IA","Scania K310IB",
                "Skywell NJL6126BEV",
            ],
            operator: "DAMRI (DMR), Transjakarta (TJ) , Mayasari Bakti (MB/MYS)",
            haltes: ["Pinang Ranti", "Makasar", "Cawang Sentral", "Cawang", "Ciliwung", "Cikoko", "Tebet Eco Park", "Pancoran Tugu", "Pancoran", "Tegal Parang", "Simpang Kuningan", "Denpasar", "Widya Chandra Telkomsel", "Semanggi", "Gerbang Pemuda", "Petamburan","Kemanggisan","Kota Bambu", "Tanjung Duren", "Grogol Reformasi", "Kali Grogol", "Jembatan Besi", "Jembatan Dua", "Jembatan Tiga", "Penjaringan", "Pluit"]
        },
        "9A": {
            start: "Cililitan",
            end: "Grogol",
            operator: "Transjakarta (TJ) , Mayasari Bakti (MB/MYS)",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            haltes: ["Cililitan", "Cawang Cililitan", "Cawang", "Ciliwung", "Cikoko", "Tebet Eco Park", "Pancoran Tugu", "Pancoran", "Tegal Parang", "Simpang Kuningan", "Denpasar", "Widya Chandra Telkomsel", "Semanggi", "Gerbang Pemuda", "Petamburan","Kemanggisan","Kota Bambu", "Tanjung Duren", "Grogol Reformasi"]
        },
        "9C": {
            start: "Pinang Ranti",
            end: "Bundaran Senayan",
            operator: "Transjakarta (TJ) , Mayasari Bakti (MB/MYS)",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            haltes: ["Pinang Ranti", "Makasar", "Cawang Sentral", "Cawang", "Ciliwung", "Cikoko", "Tebet Eco Park", "Pancoran Tugu", "Pancoran", "Tegal Parang", "Simpang Kuningan", "Denpasar", "Widya Chandra Telkomsel", "Semanggi", "Senayan BANK DKI", "Bundaran Senayan"]
        },

        "9N": { 
            start: "Pinang Ranti",
            end: "Simpang Cawang",
            busType: [
                 "Mercedes-Benz OH 1626",
            ],
            operator: "Transjakarta (TJ) , Mayasari Bakti (MB/MYS)",operationalSchedule: {
                weekday: {
                    days: [6,0], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            haltes: ["Pinang Ranti", "Makasar", "Cawang Sentral", "Simpang Cawang"]
        },
        "10" : {
            start: "Tanjung Priok",
            end: "PGC",
            isAMARI: true,
            busType: [
                "Zhongtong Bus LCK6180GC",
                "Volvo B11R",
                "Mercedes-Benz OH 1626",
                "Hino RK8 R260",
                "Scania K320IA","Scania K3410IB",
                "Skywell NJL6126BEV","VKTR BYD D9 (EV)",
            ],
            operator: "Steady Safe (SAF), Mayasari Bakti (MB), DAMRI (DMR) , Sinar Jaya Megah (SJM)",
            haltes: ["Tanjung Priok", "Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Kodamar", "Simpang Cempaka", "Cempaka Putih", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pisangan", "Flyover Jatinegara", "Pedati Perumpung", "Kebon Nanas", "Halim", "Simpang Cawang", "Cawang Sentral", "Cawang Cililitan", "PGC"]
        },
        "10D" : {
            start: "Tanjung Priok",
            end: "Kampung Rambutan",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6],
                    hours: [
                        { start: 5, end: 9 },    // Pagi: 05:00 - 09:00
                        { start: 15, end: 21 }   // Sore: 15:00 - 21:00
                    ]
                }
            },
            operator: "Steady Safe (SAF), Mayasari Bakti (MB/MYS), DAMRI (DMR) , Sinar Jaya Megah (SJM)",
            haltes: ["Tanjung Priok", "Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Kodamar", "Simpang Cempaka", "Cempaka Putih", "Pulomas Bypass", "Kayu Putih Rawasari", "Pemuda Pramuka", "Utan Kayu Rawamangun", "Pasar Induk", "Trikora","Flyover Raya Bogor","Kampung Rambutan"]
        },
        "10H" : {
            start: "Tanjung Priok",
            end: "Bundaran Senayan",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            operator: "Steady Safe (SAF), Mayasari Bakti (MB/MYS), DAMRI (DMR) , Sinar Jaya Megah (SJM)",
            haltes: ["Tanjung Priok", "Pademangan", "Gunung Sahari", "Jembatan Merah", "Pasar Baru Timur", "Juanda", "Pecenongan", "Petojo", "Tarakan", "Tomang Raya", "Kota Bambu", "Kemanggisan", "Petamburan", "Gerbang Pemuda", "Senayan BANK DKI", "Bundaran Senayan"]
        },
        "11": {
            start: "Kampung Melayu",
            end: "Pulo Gebang",
            isAMARI: true,
            busType: [
                "Volvo B11R",
                "Mercedes-Benz OH 1626"
            ],
            operator: "Steady Safe (SAF) , Bianglala Metropolitan (BMP)",
            haltes: ["Pulo Gebang", "Walikota Jakarta Timur", "Penggilingan", "Flyover Pondok Kopi", "Simpang Buaran", "Buaran", "Kampung Sumur", "Klender", "Stasiun Klender", "Cipinang", "Flyover Cipinang", "Pasar Enjo", "Flyover Jatinegara", "Stasiun Jatinegara", "Jatinegara", "Kampung Melayu"]
        },
        "12": {
            start: "Tanjung Priok",
            end: "Pluit",
            isAMARI: true,
            operator: "Transjakarta (TJ) , DAMRI (DMR)",
            haltes: ["Tanjung Priok","Mambo", "Koja", "Walikota Jakarta Utara", "Plumpang", "Sunter Kelapa Gading", "Sunter Boulevard Barat", "Sunter Karya", "Sunter Utara", "Danau Agung", "Landasan Pacu", "Jembatan Merah", "Gunung Sahari", "Mangga Dua", "Mangga Dua Raya", "Kali Besar", "Bandengan", "Penjaringan", "Pluit", "Pluit Selatan", "Pakin", "Gedong Panjang", "Museum Sejarah Jakarta", "Kota"]
        },
        "13": {
            start: "Puri Beta 2",
            end: "Tegal Mampang",
            isAMARI: true,
            operator: "Transjakarta (TJ) , Mayasari Bakti (MYS)",
            haltes: ["Tegal Mampang", "Rawa Barat", "Pasar Santa", "CSW", "Mayestik", "Velbak", "Kebayoran Lama", "Seskoal", "Cipulir", "Swadarma ParagonCorp", "JORR", "Petukangan D'MASIV", "Puri Beta 1", "Puri Beta 2"]
        },
        "13B": {
            start: "Puri Beta 2",
            end: "Pancoran",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            operator: "Transjakarta (TJ) , Mayasari Bakti (MYS)",
            haltes: ["Pancoran","Tegal Mampang", "Rawa Barat", "Pasar Santa", "CSW", "Mayestik", "Velbak", "Kebayoran Lama", "Seskoal", "Cipulir", "Swadarma ParagonCorp", "JORR", "Petukangan D'MASIV", "Puri Beta 1", "Puri Beta 2"]
        },
        "13E": {
            start: "Puri Beta 2",
            end: "Pancoran",
            operationalSchedule: {
                weekday: {
                    days: [6, 0], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            operator: "Transjakarta (TJ) , Mayasari Bakti (MYS)",
            haltes: ["Flyover Kuningan","Setiabudi", "Kuningan Madya","Karet Kuningan","Rasuna Said","Kuningan","Patra Kuningan","Underpass Kuningan","Simpang Kuningan","Tegal Mampang", "Rawa Barat", "Pasar Santa", "CSW", "Mayestik", "Velbak", "Kebayoran Lama", "Seskoal", "Cipulir", "Swadarma ParagonCorp", "JORR", "Petukangan D'MASIV", "Puri Beta 1", "Puri Beta 2"]
        },
        "L13E": {
            start: "Puri Beta",
            end: "Flyover Kuningan (Express)",
            operationalSchedule: {
                weekday: {
                    days: [1, 2, 3, 4, 5], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            operator: "Transjakarta (TJ) , Mayasari Bakti (MYS)",
            haltes: ["Flyover Kuningan","Setiabudi", "Kuningan Madya","Karet Kuningan","Rasuna Said","Kuningan","Patra Kuningan","Underpass Kuningan","Simpang Kuningan","Tegal Mampang", "CSW", "Velbak", "Petukangan D'MASIV", "Puri Beta 1", "Puri Beta 2"]
        },
        "14": {
            start: "Jakarta International Stadium",
            end: "Senen",
            isAMARI: true,
            busType: [
                "Mercedes-Benz OH 1626",
                "Hino RK8 R260",
                "Skywell NJL6126BEV","VKTR BYD D9 (EV)",
            ],
            operator: "Transjakarta (TJ), Sinar Jaya Megah (SJM) , DAMRI (DMR)",
            haltes: ["Senen TOYOTA Rangga", "Senen Raya", "Tanah Tinggi", "Kemayoran", "JIEXPO Kemayoran", "Landasan Pacu", "Danau Agung", "Danau Sunter", "Jembatan Item", "Jakarta International Stadium"]
        },
    },
    "Non-BRT": {
        "4C": {
            start: "JIEP",
            end: "Bundaran Senayan",
            operator: "Transjakarta (TJ) , DAMRI (DMR)",
            busType: [
                "Skywell NJL6129BEV",
                "Mercedes-Benz O500U",
                "Scania K250UB"
            ],
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            haltes: ["Komplek Pergudangan JIEP", "Bundaran JIEP 2", "Jln. Rawa Gelam I", "Sbr. Pasifik Logistik Berserikat", "Jln. Pulo Lentut", "Simpang Jln. Pulo Lentut", "Pintu Kawasan 1", "TU Gas 1", "Kantor Pos Jaktim", "Layur 1", "Jln. Sunan Drajad", "Arion Mall", "Velodrome 1", "Sunan Giri 2", "UNJ 2", "Pramuka BPKP 2", "Pramuka LIA 2", "Utan Kayu 2", "Jln. Pramuka 4", "Jln. Pramuka 2", "Simpang Matraman 2", "Tugu Proklamasi", "Tugu Proklamasi 2", "Jln. Penataran", "SMPN 8", "Gedung Wanita", "Museum Proklamasi", "KPU", "Graha Mandiri", "Tosari 3", "Bumiputera", "Chase Plaza", "Karet Sudirman 1", "Flyover Karet 2", "Plaza Sentral", "Gelura Bung Karno 1", "Summitmas", "Bundaran Senayan 1", "Bundaran Senayan 2", "FX Sudirman", "Gelora Bung Karno 2", "GBK Pintu 7", "Benhil 3", "Karet Sudirman 2", "Karet Sudirman 3", "Grand Sahid", "Menara Astra","Dukuh Atas 4","St. Sudirman 2","Tosari 2", "Imam Bonjol","Kartini","Taman Suropati","Surabaya","St. Cikini Selatan","Megaria","RSCM 1","RSCM 2","RS Carolus","Kemensos","Pasar Genjing 1","Jln. Pramuka 5","Pramuka BPKP 1","Ibnu Chaldun","UNJ 1","Sunan Giri 1","Velodrome 2","Jakarta International Velodrome","Pulo Asem","Layur 2","Sbr. Kantor Pos Jaktim","TU Gas 2", "Jln. Pulolio 2", "Jln. Rawa Terate III", "Sbr. Jln. Pulo Kambing I","Jln. Pulo Kambing Raya 1","Sbr. Jln. Pulosidik","Jln. Pulo Ayang 1","Jln. Pulo Ayang 2","Sbr. Jln. Rawa Sumur II","Sbr. Jln Pulobuaran IV", "Sbr. Komplek Pergudangan JIEP"],
            directions: {
                "Bundaran Senayan": [
        "Komplek Pergudangan JIEP", "Bundaran JIEP 2", "Jln. Rawa Gelam I", "Sbr. Pasifik Logistik Berserikat", "Jln. Pulo Lentut", "Simpang Jln. Pulo Lentut", "Pintu Kawasan 1",
        "TU Gas 1", "Kantor Pos Jaktim", "Layur 1", "Jln. Sunan Drajad", "Arion Mall", "Velodrome 1", "Sunan Giri 2", "UNJ 2", "Pramuka BPKP 2", "Pramuka LIA 2", "Utan Kayu 2",
        "Jln. Pramuka 4", "Jln. Pramuka 2", "Simpang Matraman 2", "Tugu Proklamasi", "Tugu Proklamasi 2", "Jln. Penataran", "SMPN 8", "Gedung Wanita", "Museum Proklamasi",
        "KPU", "Graha Mandiri", "Tosari 3", "Bumiputera", "Chase Plaza", "Karet Sudirman 1", "Flyover Karet 2", "Plaza Sentral", "Gelura Bung Karno 1", "Summitmas", "Bundaran Senayan 1"
    ],
    "JIEP": [
        "Bundaran Senayan 1", "Bundaran Senayan 2", "FX Sudirman", "Gelora Bung Karno 2", "GBK Pintu 7", "Benhil 3", "Karet Sudirman 2", "Karet Sudirman 3", "Grand Sahid", "Menara Astra",
        "Dukuh Atas 4", "St. Sudirman 2", "Tosari 2", "Imam Bonjol", "Kartini", "Taman Suropati", "Surabaya", "St. Cikini Selatan", "Megaria", "RSCM 1", "RSCM 2", "RS Carolus",
        "Kemensos", "Pasar Genjing 1", "Jln. Pramuka 5", "Pramuka BPKP 1", "Ibnu Chaldun", "UNJ 1", "Sunan Giri 1", "Velodrome 2", "Jakarta International Velodrome", "Pulo Asem",
        "Layur 2", "Sbr. Kantor Pos Jaktim", "TU Gas 2", "Jln. Pulolio 2", "Jln. Rawa Terate III", "Sbr. Jln. Pulo Kambing I", "Jln. Pulo Kambing Raya 1", "Sbr. Jln. Pulosidik",
        "Jln. Pulo Ayang 1", "Jln. Pulo Ayang 2", "Sbr. Jln. Rawa Sumur II", "Sbr. Jln Pulobuaran IV", "Sbr. Komplek Pergudangan JIEP"
    ]
            }
        },
        "4K": {
            start: "Pulo Gadung",
            end: "Kejaksaan Agung",
            operator: "Mayasari Bakti (MYS)",
            busType: [
                "Mercedes-Benz OH 1626"
            ],
            haltes: ["Term. Pulo Gadung","Gg. Suzuki","Ananda Pulo Gadung","Ps. Pulo Gadung 1","Pintu Kawasan 1","TU Gas 1","Kantor Pos Jaktim","Layur 1","Jln. Sunan Drajad","Arion Mall","Velodrome 1","Sunan Giri 2","UNJ 2","Utan Kayu Rawamangun 2","SMP Pelita Tiga","Ahmad Yani Bea Cukai 1", "Flyover Jatinegara", "Pedati Prumpung", "Pedati 4","Samsat Jakarta Timur", "Cipinang Kb. Nanas 2", "SPBU Jln. DI Panjaitan 2","Penas Kalimalang 2","Halim PK", "Cawang Soetoyo 2", "Cawang", "Ciliwung", "Cikoko", "Tebet Eco Park", "Pancoran Tugu", "Pancoran", "Tegal Mampang", "Rawa Barat", "Pasar Santa", "Kejaksaan Agung","Pasar Santa", "Rawa Barat", "Tegal Mampang", "Pancoran", "Pancoran Tugu", "Tebet Eco Park", "Cikoko", "Ciliwung", "Cawang", "Cawang Soetoyo 1", "Yodya Tower","Penas Kalimalang 1","SPBU Jln. DI Panjaitan", "Cipinang Kb. Nanas 1","Pedati 1","Pedati Prumpung","Flyover Jatinegara", "Ahmad Yani Bea Cukai 2","Universitas Terbuka", "Utan Kayu Rawamangun 1", "UNJ 1","Sunan Giri 1", "Velodrome 2","Jakarta International Velodrome","Pemuda Rawamangun 1","Pulo Asem","Layur 2","Sbr. Kantor Pos Jaktim", "TU Gas 2","Pintu Kawasan 2", "Ps. Pulo Gadung 2","PKB Pulo Gadung","Pulo Gadung 4","Term. Pulo Gadung"]
        },
        "5B": {
            start: "St. Tebet",
            end: "Bidara Cina",
            operator: "Transjakarta (TJ)",
            haltes: ["Bidara Cina", "Gelanggang Remaja", "Flyover Kampung Melayu", "Kampung Melayu Besar 2", "St. Tebet 1", "Masjid Attahiriyah", "Kampung Melayu Kecil", "Rusun Jatinegara Barat", "RS Hermina", "Santa Maria", "Bukit Duri", "Bali Mester", "Jatinegara", "Kampung Melayu"]
        },
        "7D": {
            start: "TMII",
            end: "Pancoran",
            operator: "Bayu Holong Persada (BHL)",
            haltes: ["TMII Pintu 3", "Museum Nasional Visible Storage", "Nizamia Andalusia", "Jln. Bambu Hubuny", "Gerbang Tol Bambu Apus 2", "Jln. Gempol Raya", "Gempol", "RS Adhiyaksa", "Jln. Rawa Segaran", "Jln. Nangka", "Simpang Mabes Hankam", "Jembatan Pintu Satu", "Sbr. Masjid At Tin", "Sbr. RS Moh Ridwan Meuraksa", "Tamini Square 1", "Pondok Gede Raya", "Dukuh 5", "Cawang Sentral", "Cawang", "Ciliwung", "Cikoko", "Tebet Eco Park", "Pancoran Tugu", "TIS Square", "Tebet Eco Park", "Cikoko", "Ciliwung", "Cawang", "Cawang Sentral", "Tamini Square 2", "RS Moh Ridwan Meuraksa", "Masjid At Tin", "Sbr. Jembatan Pintu Satu", "Green Terrace", "Green Terrace 2", "TMII Pintu 3"]
        },
        "9D": {
            start: "Pasar Minggu",
            end: "Tanah Abang",
            operator: "Transjakarta (TJ) , Mayasari Bakti (MB/MYS)",
            haltes: ["Term. Pasar Minggu", "Pancoran", "Simpang Kuningan", "Semanggi", "Bundaran HI ASTRA", "M.H Thamrin", "Transjakarta Tanah Abang 2"]
        },
        "11D": {
            start: "Pulo Gebang",
            end: "Pulo Gadung via PIK",
            operator: "Trans Swadaya (TSW)",
            haltes: ["Pulo Gebang", "SMPN 172","Walikota Jakarta Timur", "Penggilingan", "Simpang Tiga","At Thahirlah","Simpang Kampung Jembatan","SMK Ristek Kikin", "Pintu Masuk PIK", "Sbr. PGP", "Sbr. Pospol PIK Penggilingan", "Taman PIK Penggilingan", "Pajak , Retribusi Penggilingan", "SDN Penggilingan", "Lapangan PIK Penggilingan", "Romantis PIK Penggilingan", "Sbr. Cagar Budaya Ratu Penggilingan", "Rusun Pulo Jahe", "Cagar Budaya Ratu Penggilingan","Aneka PIK Penggilingan", "Kel. Penggilingan", "Pospol PIK Penggilingan", "PGP", "Gg. Sawo 1", "Gg. Aim 1", "Perum TPI 1", "Taman Elok 1", "Suzuki", "Al Wathoniyah 1", "Jagal 1", "Kampung Padaengan 1", "United Tractors 1", "Raya Penggilingan", "Cakung United Tractors 2", "Tipar Cakung", "IGI", "PTC Pulo Gadung 1", "Makam Wakaf", "Term. Pulo Gadung"]
        },
        "11Q": {
            start: "Pulo Gebang",
            end: "Kampung Melayu via BKT",
            operator: "PT Transportasi Jakarta (TJ) , DAMRI (DMR)",
            busType: [
                "Skywell NJL6129BEV",
                "Mercedes-Benz O500U",
                "Scania K250UB"
            ],
            directions: {
                "Kampung Melayu via BKT": ["Pulo Gebang", "SMPN 172", "Walikota Jakarta Timur 2", "Penggilingan 2", "Perumnas Klender 1", "Rusun Klender", "Flyover Radin Inten 1", "SMKN 48", "Budhaya Santo Agustinus", "Gedung Senam", "Taman UT Aheme", "Jami Nurul Ain 2", "RS Duren Sawit", "Komplek Abadi 2", "Komplek Wijaya Kusuma 2", "Jln. Melati Bakti", "Masjid Jami At Taqwa 2", "Cipinang Indah", "Simpang Perintis 2", "SMAN 100", "Nusantara", "Sbr . Ps. Inpres Cipinang Besar", "Mall Basura 2", "Awab Dalam", "Sekolah Cahaya Sakti Otista", "Bidara Cina 1", "Bidara Cina 2", "Term. Kampung Melayu 4"],
                "Pulo Gebang": ["Term. Kampung Melayu 4", "Rusun Jatinegara Barat", "RS Hermina", "Santa Maria", "Bukit Duri", "SMPN 14", "Jatinegara RS Premier 1", "Masjid Jami Al Inayah", "Mall Basura 1", "Ps. Inpres Cipinang Besar", "Hero Basuki Rahmat", "Simpang Perintis 1", "Cipinang BKT", "Masjid Jami At Taqwa", "Jln. Masjid Abidin", "Komplek Wijaya Kusuma 1", "Komplek Abadi 1", "Baladewa Residence", "Masjid Jami Al Barkah 1", "Jln. Serdang", "Jln. Swadaya Raya", "Masjid Jami Nurul Ain 1", "Jln. H. Aman", "Wisma Atlet Radin Inten", "Dinas Kebersihan Duren Sawit", "Buaran Plaza", "Taman Buaran Indah", "Flyover Radin Inten 2", "Perumnas Klender 2", "Penggilingan 1", "Walikota Jakarta Timur 1", "Pulo Gebang"]
            },
            haltes: ["Pulo Gebang", "SMPN 172", "Walikota Jakarta Timur 2", "Penggilingan 2", "Perumnas Klender 1", "Rusun Klender", "Flyover Radin Inten 1", "SMKN 48", "Budhaya Santo Agustinus", "Gedung Senam", "Taman UT Aheme", "Masjid Jami Nurul Ain 2", "RS Duren Sawit", "Komplek Abadi 2", "Komplek Wijaya Kusuma 2", "Jln. Melati Bakti", "Masjid Jami At Taqwa 2", "Cipinang Indah", "Simpang Perintis 2", "SMAN 100", "Nusantara", "Sbr . Ps. Inpres Cipinang Besar", "Mall Basura 2", "Awab Dalam", "Sekolah Cahaya Sakti Otista", "Bidara Cina 1", "Bidara Cina 2", "Term. Kampung Melayu 4", "Rusun Jatinegara Barat", "RS Hermina", "Santa Maria", "Bukit Duri", "SMPN 14", "Jatinegara RS Premier 1", "Masjid Jami Al Inayah", "Mall Basura 1", "Ps. Inpres Cipinang Besar", "Hero Basuki Rahmat", "Simpang Perintis 1", "Cipinang BKT", "Masjid Jami At Taqwa", "Jln. Masjid Abidin", "Komplek Wijaya Kuawqrwaesuma 1", "Komplek Abadi 1", "Baladewa Residence", "Masjid Jami Al Barkah 1", "Jln. Serdang", "Jln. Swadaya Raya", "Masjid Jami Nurul Ain 1", "Jln. H. Aman", "Wisma Atlet Radin Inten", "Dinas Kebersihan Duren Sawit", "Buaran Plaza", "Taman Buaran Indah", "Flyover Radin Inten 2", "Perumnas Klender 2", "Penggilingan 1", "Walikota Jakarta Timur 1", "Pulo Gebang"]
        },
        "B41": {
            start: "Vida Bekasi",
            end: "Cawang Sentral via Jatiasih",
            busType: "Mercedes-Benz OH 1626",
            operationalSchedule: {
                weekday: {
                    days: [0,1, 2, 3, 4, 5,6], // Senin-Jumat
                    hours: { start: 5, end: 22 }
                },
                },
            operator: "Mayasari Bakti (MYS)",
            haltes: ["Marketing Office Vida (Penaikan)", "Simpang Cipendawa 1", "Komsen", "Jatibening 1", "Pool Taksi Cawang", "Cawang Sentral", "Jatibening 2", "Komsen", "Simpang Cipendawa 2", "Marketing Office Vida (Penurunan)"]
        },
        "T31": {
            start: "PIK 2",
            end: "Blok M",
            busType: "Mercedes-Benz OH 1626",
            operator: "PT Transportasi Jakarta (TJ) , Mayasari Bakti (MYS)",
            haltes: ["PIK 2", "Mega Kuningan PIK 2","NICE", "San Antonio","Sedayu Watertown","Menara Syariah","Aloha","Pantai Pasir Putih 1","Marketing Gallery","Pantai Maju","PIK Avenue","Kemanggisan","Petamburan","Gerbang Pemuda","Senayan BANK DKI","Masjid Agung","Kejaksaan Agung","Blok M","ASEAN", "Masjid Agung", "Senayan BANK DKI","Gerbang Pemuda", "Petamburan","Buddha Tzu Chi", "Pantai Pasir Putih","Thamrin CBD","Spring Ville","Tokyo Riverside Selatan","PIK 2"]
        },
    }
};

export const halteKRL = [
    "Manggarai", "Duri", "Stasiun Jatinegara", "Tanah Abang", "Juanda", "Kampung Bandan", "Simpang Buaran", "Stasiun Klender", "Matraman Baru","Kota", "Gambir 2", "Gambir","Cikoko", "Flyover Radin Inten 1", "Flyover Radin Inten 2"
];

export const halteMRT = [
    "Bundaran HI ASTRA", "Dukuh Atas", "Setiabudi", "Bendungan Hilir", "Istora Mandiri", "Senayan", "ASEAN", "Blok M", "Blok A", "Haji Nawi", "Cipete Raya", "Fatmawati", "Lebak Bulus", "CSW", "Dukuh Atas","Cikoko","Kejaksaan Agung"
];

export const integrasiBadge = {
    "Velbak": ["8"],
    "Kebayoran": ["13"],
    "Semanggi": ["1"],
    "Bendungan Hilir": ["9"],
    "Senen TOYOTA Rangga": ["5"],
    "Senen Sentral": ["2"],
    "CSW": ["1", "4K"],
    "ASEAN": ["13", "13B","13E", "4K"],
    "Kejaksaan Agung": ["13", "13B","13E" ],
    "Cempaka Mas": ["10"],
    "Simpang Cempaka": ["2"],
    "Dukuh Atas": ["4"],
    "Galunggung": ["1"],
    "Term. Kampung Melayu 4": ["5", "11"],
};

export const halteIntegrasi = [
    // [halte1, halte2, keterangan]
    ["Velbak", "Kebayoran", "JPO Integrasi"],
    ["Simpang Cempaka", "Cempaka Mas", "JPO Integrasi"],
    ["CSW", "ASEAN", "JPO Integrasi"],
    ["Kejaksaan Agung", "CSW", "JPO Integrasi"],
    ["Kejaksaan Agung", "ASEAN", "JPO Integrasi"],
    ["Galunggung", "Dukuh Atas", "JPO Integrasi"],
    ["Bendungan Hilir", "Semanggi", "Jalan kaki ±300m"],
    ["Senen Sentral", "Senen TOYOTA Rangga", "Jalan kaki ±300m"],
];
