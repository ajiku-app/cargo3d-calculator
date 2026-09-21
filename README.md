# Cargo3D Calculator

Aplikasi web untuk menghitung dan mensimulasikan pemuatan barang ke dalam kontainer atau truk secara 3D. Berjalan sepenuhnya di browser tanpa backend, sehingga bisa langsung dibuka atau di-host gratis di GitHub Pages.

## Fitur

- **Dashboard**: ringkasan pemuatan terbaru.
- **Kalkulator & 3D**: hitung muatan dan lihat simulasi 3D yang bisa diputar (drag) dan di-zoom (scroll).
- **Laporan Muat**: laporan siap cetak lengkap dengan tampilan atas dan samping, bisa dicetak atau diunduh sebagai HTML.
- **Master Barang**: daftar barang beserta dimensi (cm) dan berat (kg).
- **Riwayat Muat**: rekam jejak perhitungan sebelumnya.
- **Manajemen User**: akun dengan peran Admin dan Staf, login opsional dengan kata sandi.
- **Pengaturan**: pilih armada (Container 40ft High Cube, Container 20ft, Wingbox/Tronton) atau atur dimensi dan batas berat sendiri.
- **Dua bahasa**: Indonesia dan Inggris.

## Struktur Proyek

```
.
├── index.html   # struktur halaman
├── style.css    # tampilan
├── app.js       # logika aplikasi
├── LICENSE      # lisensi MIT
└── README.md
```

## Cara Menjalankan

**Lokal**

Buka `index.html` langsung di browser, atau jalankan server statis sederhana:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.

**GitHub Pages**

1. Push semua file ke repository GitHub.
2. Buka **Settings > Pages**.
3. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu simpan.
4. Aplikasi tersedia di `https://<username>.github.io/<nama-repo>/`.

## Penyimpanan Data

Semua data (master barang, pengaturan, riwayat, daftar muat, user) disimpan di `localStorage` browser masing-masing pengguna. Konsekuensinya:

- Data tidak dibagikan antar perangkat atau antar browser.
- Menghapus data situs di browser akan menghapus semua data aplikasi.
- Tidak ada data yang dikirim ke server.

## Login dan Keamanan

Login pada aplikasi ini berjalan di sisi browser sehingga **berfungsi sebagai pemisah akun, bukan pengaman data**. Siapa pun yang bisa membuka DevTools pada browser yang sama dapat melihat atau mengubah data lokal.

Yang sudah diterapkan:

- Kata sandi disimpan sebagai hash SHA-256 dengan salt acak per user dan 2.000 putaran, bukan teks polos.
- Tidak ada kata sandi bawaan di dalam kode sumber.
- Data lama dengan kata sandi teks polos otomatis dimigrasikan ke hash saat aplikasi dibuka.

Yang perlu dilakukan pengguna:

- Akun bawaan `Administrator Utama` dibuat **tanpa kata sandi**. Segera atur kata sandi lewat menu **Manajemen User** (ikon gembok) setelah pertama kali masuk.
- Jangan gunakan kata sandi yang sama dengan akun penting lainnya.
- Jangan simpan informasi sensitif di aplikasi ini.

Jika dibutuhkan login yang benar-benar aman atau data yang dibagi antar pengguna, aplikasi perlu dilengkapi backend dengan autentikasi di sisi server.

## Dependensi Eksternal

Dimuat dari CDN sehingga membutuhkan koneksi internet saat pertama dibuka:

- [Three.js r128](https://threejs.org/) untuk simulasi 3D
- [Google Fonts](https://fonts.google.com/) (Inter dan JetBrains Mono)

Untuk penggunaan offline, unduh `three.min.js` ke repository dan ubah tag `<script>` di `index.html` agar menunjuk ke file lokal.

## Catatan Pemakaian

- Dimensi barang dalam **cm** dan berat dalam **kg**.
- Ukuran kontainer pada preset adalah perkiraan ruang muat dalam yang umum dipakai industri. Kapasitas nyata dapat berbeda tergantung armada dan operator.
- Hasil simulasi bersifat estimasi perencanaan, bukan pengganti perhitungan muat resmi.

## Lisensi

Copyright 2026 Septa Aji. All rights reserved.

Licensed under the MIT License. See [LICENSE](LICENSE) file in the project root for full license information.
