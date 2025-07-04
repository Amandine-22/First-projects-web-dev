const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      contextIsolation: false,  // ← à mettre sur false
      nodeIntegration: true     // ← à mettre sur true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);