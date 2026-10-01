const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('cargo3dDesktop', {
  isDesktop: true,
  getVersion: () => ipcRenderer.invoke('app:get-version'),
  checkForUpdates: () => ipcRenderer.invoke('app:check-updates')
});
