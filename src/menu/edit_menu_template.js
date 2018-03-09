export const editMenuTemplate = {
  label: "sites",
  submenu: [{
      label: "2chan",
      type: "radio",
      click: ()=> {

        global.mainWindow.webContents.send('change_site', {
          site: '2chan'
        });
      }
    },
    {
      label: "4chan",
      type: "radio",
      click: () => {
        global.mainWindow.webContents.send('change_site', {
          site: '4chan'
        })
      }
    },
    {
      label: "nsfw 4chan",
      type: "radio",
      click: () => {
        global.mainWindow.webContents.send('change_site', {
          site: 'nsfw4chan'
        })
      }
    },
    {
      label: "webmshare",
      type: "radio",
      click: () => {
        global.mainWindow.webContents.send('change_site', {
          site: 'webmshare'
        })
      }
    },
    {
      label: "webmland",
      type: "radio",
      click: () => {
        global.mainWindow.webContents.send('change_site', {
          site: 'webmland'
        })
      }
    },
    {
        label: "wobm",
        type: "radio",
        click: ()=> {

          global.mainWindow.webContents.send('change_site', {
            site: 'wobm'
          });
        }
      },
    {
      label: "issoutv",
      type: "radio",
      click: () => {
        global.mainWindow.webContents.send('change_site', {
          site: 'issoutv'
        })
      }
    },
    {
      label: "nsfw issoutv",
      type: "radio",
      click: () => {
        global.mainWindow.webContents.send('change_site', {
          site: 'nsfwissoutv'
        })
      }
    },
    {
      label: "webmxyz",
      type: "radio",
      click: () => {
        global.mainWindow.webContents.send('change_site', {
          site: 'webmxyz'
        })
      }
    }


  ]
};
