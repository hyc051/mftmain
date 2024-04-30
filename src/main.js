
const { app, BrowserWindow } = require('electron')
const url=require('url');
const path = require('path')

function createMainWindow () {
  const mainWindow = new BrowserWindow({
    minWidth: 1000,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  })
  mainWindow.loadFile('./src/index.html')
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
