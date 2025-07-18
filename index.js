const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "icon.ico"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Spoof a TV user-agent
  win.webContents.setUserAgent(
    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chr0me/53.0.2785.34 Safari/537.36 LG Browser/8.00.00(LGE; 32LM627BPSB; 05.40.45; 1; DTV_W19R); webOS.TV-2019; LG NetCast.TV-2013 Compatible (LGE, 32LM627BPSB, wireless)"
  );

  win.loadURL("https://www.youtube.com/tv");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
