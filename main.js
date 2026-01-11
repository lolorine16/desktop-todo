const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400
  })

  win.loadURL('http://localhost:5555')
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()
})
