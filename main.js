// ============================================================
// main.js — Electron entry point
// This file is the equivalent of root = tk.Tk() in tkinter.
// It creates the desktop window and loads your HTML page.
// ============================================================

// "require" is how JavaScript imports libraries (like Python's "import")
const { app, BrowserWindow } = require('electron')
const path = require('path')

// This function creates the window
function createWindow() {

  // BrowserWindow is the actual desktop window
  const win = new BrowserWindow({
    width: 680,
    height: 780,
    resizable: false,

    // Window title bar styling (Mac)
    titleBarStyle: 'hiddenInset',

    // These are security settings — always include them
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  // Load your HTML file into the window
  // (like opening index.html in a browser, but in a desktop window)
  win.loadFile('index.html')
}

// When Electron is ready, create the window
// app.whenReady() is an event — it fires once Electron has started up
app.whenReady().then(() => {
  createWindow()
})

// Quit the app when all windows are closed (standard behaviour on Windows/Linux)
// On Mac, apps typically stay open until Cmd+Q — this handles that difference
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On Mac: re-open a window if the dock icon is clicked and no windows are open
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
