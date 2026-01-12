const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 500
  })

  win.loadURL('http://127.0.0.1:5555')
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()
})
