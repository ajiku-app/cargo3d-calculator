const { app, BrowserWindow, Menu, dialog, shell, ipcMain } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

const CHECK_INTERVAL_MS = 4 * 60 * 60 * 1000; // cek update tiap 4 jam
let mainWindow = null;
let manualCheck = false;
let updateReadyShown = false;

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 840,
    minWidth: 1024,
    minHeight: 640,
    backgroundColor: '#0a0e17',
    title: 'Cargo3D Calculator',
    icon: path.join(__dirname, 'build', 'icon.ico'),
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.loadFile(path.join(__dirname, 'app', 'index.html'));

  // Laporan cetak dibuka lewat window.open('') -> izinkan jendela kosong,
  // link http(s) dibuka di browser bawaan.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!url || url === 'about:blank') {
      return {
        action: 'allow',
        overrideBrowserWindowOptions: { autoHideMenuBar: true, width: 1000, height: 800 }
      };
    }
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) {
      event.preventDefault();
      if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    }
  });

  mainWindow.on('closed', () => { mainWindow = null; });
}

function buildMenu() {
  const template = [
    {
      label: 'File',
      submenu: [{ role: 'quit', label: 'Keluar' }]
    },
    {
      label: 'Tampilan',
      submenu: [
        { role: 'reload', label: 'Muat Ulang' },
        { role: 'togglefullscreen', label: 'Layar Penuh' },
        { type: 'separator' },
        { role: 'resetZoom', label: 'Ukuran Normal' },
        { role: 'zoomIn', label: 'Perbesar' },
        { role: 'zoomOut', label: 'Perkecil' },
        ...(app.isPackaged ? [] : [{ type: 'separator' }, { role: 'toggleDevTools' }])
      ]
    },
    {
      label: 'Bantuan',
      submenu: [
        { label: 'Cek Pembaruan...', click: () => checkForUpdates(true) },
        {
          label: 'Tentang Cargo3D',
          click: () => dialog.showMessageBox(mainWindow, {
            type: 'info',
            title: 'Tentang Cargo3D',
            message: 'Cargo3D Calculator',
            detail: 'Versi ' + app.getVersion() + '\nCopyright 2026 Septa Aji',
            buttons: ['OK']
          })
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

// ---------- Auto update (GitHub Releases) ----------
function setupAutoUpdater() {
  autoUpdater.autoDownload = true;           // unduh otomatis di latar belakang
  autoUpdater.autoInstallOnAppQuit = true;   // terpasang otomatis saat aplikasi ditutup

  autoUpdater.on('update-available', info => {
    if (manualCheck && mainWindow) {
      dialog.showMessageBox(mainWindow, {
        type: 'info',
        title: 'Pembaruan Tersedia',
        message: 'Versi ' + info.version + ' sedang diunduh di latar belakang.',
        detail: 'Anda akan diberi tahu saat siap dipasang.',
        buttons: ['OK']
      });
    }
  });

  autoUpdater.on('update-not-available', () => {
    if (manualCheck && mainWindow) {
      dialog.showMessageBox(mainWindow, {
        type: 'info',
        title: 'Cek Pembaruan',
        message: 'Anda sudah memakai versi terbaru (' + app.getVersion() + ').',
        buttons: ['OK']
      });
    }
    manualCheck = false;
  });

  autoUpdater.on('update-downloaded', async info => {
    manualCheck = false;
    if (updateReadyShown) return;
    updateReadyShown = true;
    const { response } = await dialog.showMessageBox(mainWindow, {
      type: 'info',
      title: 'Pembaruan Siap',
      message: 'Versi ' + info.version + ' siap dipasang.',
      detail: 'Mulai ulang sekarang untuk memakai versi baru. Data Anda tidak akan hilang. Jika memilih Nanti, pembaruan dipasang otomatis saat aplikasi ditutup.',
      buttons: ['Mulai Ulang Sekarang', 'Nanti'],
      defaultId: 0,
      cancelId: 1
    });
    if (response === 0) autoUpdater.quitAndInstall();
  });

  autoUpdater.on('error', err => {
    console.error('Auto update error:', err == null ? 'unknown' : (err.stack || err).toString());
    if (manualCheck && mainWindow) {
      dialog.showMessageBox(mainWindow, {
        type: 'warning',
        title: 'Cek Pembaruan',
        message: 'Tidak bisa memeriksa pembaruan.',
        detail: 'Pastikan komputer terhubung ke internet lalu coba lagi.',
        buttons: ['OK']
      });
    }
    manualCheck = false;
  });
}

function checkForUpdates(manual) {
  if (!app.isPackaged) {
    if (manual && mainWindow) {
      dialog.showMessageBox(mainWindow, {
        type: 'info',
        message: 'Cek pembaruan hanya aktif pada aplikasi yang sudah dipasang.',
        buttons: ['OK']
      });
    }
    return;
  }
  manualCheck = !!manual;
  autoUpdater.checkForUpdates().catch(() => {});
}

ipcMain.handle('app:get-version', () => app.getVersion());
ipcMain.handle('app:check-updates', () => { checkForUpdates(true); });

app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

app.whenReady().then(() => {
  buildMenu();
  createWindow();
  setupAutoUpdater();
  if (app.isPackaged) {
    setTimeout(() => checkForUpdates(false), 5000);
    setInterval(() => checkForUpdates(false), CHECK_INTERVAL_MS);
  }
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
