const { app, BrowserWindow, Menu } = require('electron')
const { ipcMain } = require('electron/main')
const menuTemplate = require('./js/menu');

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  })
  let templateMenu = menuTemplate.gerarMenu(app);
  let menuPrincipal = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(menuPrincipal);
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if (sobreWindow == null) {
    sobreWindow = new BrowserWindow({
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true
      },
      width: 460,
      height: 420,
      alwaysOnTop: true,
      frame: false
    });

    sobreWindow.on('closed', () => {
      sobreWindow = null;
    });
  }
  sobreWindow.loadURL(__dirname + "/form-sobre.html");
});

let msgWindow = null;
ipcMain.on('abrir-janela-msg', () => {
  if (sobreWindow == null) {
    sobreWindow = new BrowserWindow({
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true
      },
      width: 460,
      height: 420,
      alwaysOnTop: true,
      frame: false
    });

    sobreWindow.on('closed', () => {
      sobreWindow = null;
    });
  }
  sobreWindow.loadURL(__dirname + "/form-msg.html");
});

ipcMain.on('fechar-janela-sobre', ()=>{
  sobreWindow.close();
})