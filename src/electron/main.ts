import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const env = process.env.NODE_ENV || 'development';

// If development environment
if (env === 'development') {
    console.log("Running Electron from ", path.join(__dirname, 'node_modules', '.bin', 'electron'))
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    });
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});