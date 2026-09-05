# 🍲 Desak Maknyus - Catering Landing Page 1234

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Design](https://img.shields.io/badge/Aesthetic-Neo--Brutalism-FACC15?style=for-the-badge)

Landing page modern dan interaktif untuk layanan katering Nusantara & Harian **Desak Maknyus**. Dibangun dengan gaya visual **Neo-Brutalism** (garis tepi tegas, bayangan solid/hard shadows, palet warna berani, dan tipografi modern *Plus Jakarta Sans*).

---

## ✨ Fitur Utama

- 🍱 **Showcase Menu Interaktif**: Slider carousel hidangan unggulan (*Ayam Bakar Betutu, Nasi Kotak Rendang, Prasmanan Nusantara, Tumpeng Mini, dan Snack Box*) lengkap dengan ulasan, rating, dan badge promo.
- 🧮 **Kalkulator Biaya Katering Otomatis**: Hitung estimasi biaya katering secara *real-time* berdasarkan pilihan paket, jumlah porsi (*pax*), diskon otomatis, dan item tambahan (*extra addon*).
- 📱 **Integrasi Langsung WhatsApp**:
  - Tombol pesan langsung mengirim rincian kalkulasi harga dan pesanan ke WhatsApp admin.
  - Floating WhatsApp button untuk konsultasi kilat.
- 📋 **Formulir Pemesanan Cepat (Modal Popup)**: Modal reservasi interaktif yang memvalidasi input nama, nomor HP, paket, porsi, dan tanggal acara.
- 💎 **Katalog Menu Lengkap**: Tampilan kartu menu makanan lengkap dengan harga, foto hidangan, dan deskripsi isi paket.
- 💬 **Testimoni & Jaminan Kualitas**: Review pelanggan terverifikasi dan poin keunggulan bahan baku serta sertifikasi halal.
- ❓ **FAQ Interaktif**: Pertanyaan umum seputar pemesanan, minimal order, dan sistem pengiriman.
- 📱 **Desain Responsif**: Optimal untuk tampilan perangkat desktop, tablet, dan smartphone.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik dan ramah SEO (*Search Engine Optimization*).
- **CSS3 (Vanilla)**: Desain sistem Neo-Brutalism kustom tanpa framework eksternal yang membebani loading website.
- **JavaScript (Vanilla ES6+)**: Logika interaktif slider menu, kalkulator harga otomatis, dan pembentukan URL pesan WhatsApp.
- **Tipografi**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts.
- **Serve**: Simple local development server.

---

## 📁 Struktur Proyek

```text
Landing Page Desak Maknyus/
├── assets/
│   └── img/                 # Gambar hidangan katering & aset visual
│       ├── dish_ayam_betutu.jpg
│       ├── dish_nasi_kotak.jpg
│       ├── dish_prasmanan.jpg
│       ├── dish_snack_box.jpg
│       └── dish_tumpeng.jpg
├── app.js                   # Logika interaktif & kalkulator katering
├── index.html               # Halaman utama landing page
├── package.json             # Konfigurasi npm & script dev server
├── style.css                # Desain sistem & stylesheet Neo-Brutalism
└── README.md                # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Proyek

### Opsi 1: Menggunakan NPM (Development Server)

Pastikan [Node.js](https://nodejs.org/) telah terpasang di komputer Anda:

```bash
# 1. Masuk ke folder proyek
cd "Landing Page Desak Maknyus"

# 2. Jalankan server lokal
npm run dev
```

Akses website melalui browser di: `http://localhost:3000`

---

### Opsi 2: Langsung Buka File HTML (Tanpa Server)

Karena proyek ini berbasis web statis murni, Anda dapat langsung membukanya:

- Klik dua kali file `index.html` di File Explorer, atau
- Jalankan di terminal PowerShell:
  ```powershell
  Start-Process index.html
  ```

---

### Opsi 3: Menggunakan Python Server

```bash
python -m http.server 3000
```

Buka browser di `http://localhost:3000`.

---

## ⚙️ Konfigurasi Nomor WhatsApp

Untuk mengubah nomor WhatsApp tujuan pemesanan:

1. Buka file [app.js](file:///d:/Project%20Beruntun/Landing%20Page%20Desak%20Maknyus/app.js)
2. Ubah variabel `waNumber` (gunakan kode negara tanpa tanda `+`, contoh: `6281234567890`):
   ```javascript
   const waNumber = "6281234567890";
   ```
3. Buka file [index.html](file:///d:/Project%20Beruntun/Landing%20Page%20Desak%20Maknyus/index.html) dan perbarui link pada tombol floating WhatsApp:
   ```html
   <a href="https://wa.me/6281234567890?text=..." class="floating-wa-btn">
   ```

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan landing page bisnis kuliner katering **Desak Maknyus**. Bebas dimodifikasi sesuai kebutuhan.
