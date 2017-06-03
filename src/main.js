const {app, BrowserWindow, ipcMain} = require('electron')
require('electron-reload')(__dirname);
let mainWindow;

/**

  Main Process manages render processes
    Always one main
    Multiple Renderers
    See "modules for the main window" in docs
*/

function createWindow () {
  let mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', _ => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
