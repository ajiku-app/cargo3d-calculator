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
├── index.html            # struktur halaman
├── style.css             # tampilan
├── app.js                # logika aplikasi
├── login-bg.jpg          # latar halaman login
├── manifest.webmanifest  # identitas aplikasi (PWA)
├── sw.js                 # service worker untuk mode offline
├── icons/                # ikon aplikasi
├── main.js, preload.js   # aplikasi desktop Windows (Electron + auto update)
├── scripts/              # skrip build versi desktop
├── build/                # ikon installer Windows
├── .github/workflows/    # build & rilis otomatis
├── package.json
├── LICENSE               # lisensi MIT
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

## Instal sebagai Aplikasi

Aplikasi ini berupa PWA (Progressive Web App), sehingga bisa dipasang di komputer dan HP tanpa toko aplikasi. PWA hanya aktif di alamat `https://` (misalnya Vercel atau GitHub Pages) atau `localhost`, bukan saat dibuka langsung dari `file:///`.

**Komputer (Windows, macOS, Linux)**

1. Buka alamat aplikasi di Chrome atau Edge.
2. Klik ikon **Instal** di ujung kanan kolom alamat, atau menu titik tiga lalu **Cast, save, and share > Install page as app** (Chrome) / **Apps > Install this site as an app** (Edge).
3. Aplikasi terbuka di jendela sendiri dan muncul di menu Start atau Launchpad.

**HP Android**

1. Buka alamat aplikasi di Chrome.
2. Menu titik tiga lalu **Instal aplikasi** atau **Tambahkan ke layar utama**.

**HP iPhone**

1. Buka alamat aplikasi di Safari.
2. Tombol Bagikan lalu **Tambah ke Layar Utama**.

**File APK (Android)**

APK dibuat dari alamat yang sudah online memakai [PWABuilder](https://www.pwabuilder.com):

1. Buka pwabuilder.com, masukkan alamat aplikasi, lalu klik **Start**.
2. Pilih **Package for Stores**, lalu **Android**.
3. Isi **Package ID** (unik, huruf kecil, contoh `com.ajikuapp.cargo3d`), nama aplikasi, dan versi. Pada bagian **Signing key** pilih **New**.
4. Unduh berkas ZIP hasilnya. Simpan berkas kunci (`.keystore`) dan kata sandinya di tempat aman, karena diperlukan untuk setiap pembaruan aplikasi.
5. Salin isi `assetlinks.json` dari ZIP ke `.well-known/assetlinks.json` di repository ini, lalu push. Tanpa langkah ini, aplikasi tetap jalan tetapi menampilkan bilah alamat browser di bagian atas.
6. Pasang `.apk` di HP (izinkan **Instal aplikasi tidak dikenal** saat diminta).

Setelah aplikasi terpasang, pembaruan dari repository otomatis ikut terbawa saat aplikasi dibuka dalam kondisi online.

## Aplikasi Desktop Windows (Installer + Auto Update)

Selain versi web, tersedia installer Windows (`Cargo3D-Calculator-Setup-<versi>.exe`) yang otomatis memeriksa pembaruan dari GitHub Releases. Pengguna cukup memasang sekali; versi berikutnya diunduh di latar belakang dan terpasang tanpa instal ulang. Data pengguna tidak hilang saat update.

**Merilis versi baru**

1. Ubah `version` di `package.json` (contoh `1.0.1`).
2. Commit dan push perubahan.
3. Buat dan push tag yang sama:

```bash
git tag v1.0.1
git push origin v1.0.1
```

GitHub Actions akan membangun installer dan mengunggahnya ke **Releases**. Aplikasi yang sudah terpasang akan mendeteksinya otomatis (cek 5 detik setelah dibuka, lalu tiap 4 jam, atau lewat menu **Bantuan > Cek Pembaruan**).

**Build lokal (opsional)**

```bash
npm install
npm start      # jalankan versi desktop untuk uji coba
npm run dist   # hasil installer ada di folder release/
```

Catatan: repository harus publik agar auto update bisa membaca Releases. Installer belum ditandatangani (code signing), sehingga Windows SmartScreen bisa menampilkan peringatan saat pertama kali dipasang: klik **More info > Run anyway**. Data versi desktop tersimpan terpisah dari data di browser.

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

Setelah aplikasi dibuka sekali dalam keadaan online, kedua dependensi ini disimpan oleh service worker sehingga aplikasi tetap bisa dipakai tanpa internet. Untuk offline sejak pertama dipasang, unduh `three.min.js` ke repository dan ubah tag `<script>` di `index.html` agar menunjuk ke file lokal.

## Catatan Pemakaian

- Dimensi barang dalam **cm** dan berat dalam **kg**.
- Ukuran kontainer pada preset adalah perkiraan ruang muat dalam yang umum dipakai industri. Kapasitas nyata dapat berbeda tergantung armada dan operator.
- Hasil simulasi bersifat estimasi perencanaan, bukan pengganti perhitungan muat resmi.

## Lisensi

Copyright 2026 Septa Aji. All rights reserved.

Licensed under the MIT License. See [LICENSE](LICENSE) file in the project root for full license information.
