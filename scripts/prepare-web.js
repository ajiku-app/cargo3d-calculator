// Menyalin file web ke folder app/ untuk dibungkus Electron.
// Tag <script> three.js dari CDN diganti ke salinan lokal supaya
// versi desktop bisa jalan tanpa internet sejak pertama dipasang.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'app');

const FILES = ['index.html', 'style.css', 'app.js', 'mobile.css', 'mobile.js', 'login-bg.jpg'];
const DIRS = ['icons'];
const CDN_TAG = /<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\/r128\/three\.min\.js"><\/script>/;

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'vendor'), { recursive: true });

for (const f of FILES) fs.copyFileSync(path.join(root, f), path.join(out, f));
for (const d of DIRS) fs.cpSync(path.join(root, d), path.join(out, d), { recursive: true });

const threeSrc = path.join(root, 'node_modules', 'three', 'build', 'three.min.js');
if (!fs.existsSync(threeSrc)) {
  console.error('three.min.js tidak ditemukan. Jalankan "npm install" dulu.');
  process.exit(1);
}
fs.copyFileSync(threeSrc, path.join(out, 'vendor', 'three.min.js'));

const htmlPath = path.join(out, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
if (!CDN_TAG.test(html)) {
  console.error('Tag script three.js CDN tidak ditemukan di index.html.');
  process.exit(1);
}
html = html.replace(CDN_TAG, '<script src="vendor/three.min.js"></script>');

// Label versi di halaman login dan sidebar mengikuti "version" di package.json,
// jadi cukup ubah versi di satu tempat saat merilis.
const version = require(path.join(root, 'package.json')).version;
const VERSION_LABELS = [
  [/STANDALONE · V[\d.]+/, 'STANDALONE · V' + version],
  [/Cargo3D Loader V[\d.]+( Pro)?/, 'Cargo3D Loader V' + version + ' Pro']
];
for (const [pattern, replacement] of VERSION_LABELS) {
  if (!pattern.test(html)) {
    console.error('Label versi tidak ditemukan di index.html: ' + pattern);
    process.exit(1);
  }
  html = html.replace(pattern, replacement);
}
fs.writeFileSync(htmlPath, html);

console.log('Folder app/ siap.');
