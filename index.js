const { app, BrowserWindow, autoUpdater } = require("electron");
// const path = require("path");

const server = "https://hazel-phi-mauve.vercel.app";
const url = `${server}/update/${process.platform}/${app.getVersion()}`;
autoUpdater.setFeedURL({ url });

const UPDATE_CHECK_INTERVAL = 10 * 60 * 1000;
setInterval(() => {
  autoUpdater.checkForUpdates();
}, UPDATE_CHECK_INTERVAL);

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, "preload.js"),
    // },
  });

  // and load the index.html of the app.
  mainWindow.loadURL("https://google.com");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
};

app.on("ready", createWindow);
