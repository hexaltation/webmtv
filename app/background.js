/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs-jetpack");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"name":"development","description":"Add here any environment specific stuff you like."}

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_electron__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_dev_menu_template__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_edit_menu_template__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_window__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_env__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_env___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_env__);
// This is main process of Electron, started as first thing when your
// app starts. It runs through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.
global.mainWindow = null;





 // Special module holding environment variables which you declared
// in config/env_xxx.json file.



const setApplicationMenu = () => {
  const menus = [__WEBPACK_IMPORTED_MODULE_4__menu_edit_menu_template__["a" /* editMenuTemplate */]];

  if (__WEBPACK_IMPORTED_MODULE_6_env___default.a.name !== "production") {
    menus.push(__WEBPACK_IMPORTED_MODULE_3__menu_dev_menu_template__["a" /* devMenuTemplate */]);
  }

  __WEBPACK_IMPORTED_MODULE_2_electron__["Menu"].setApplicationMenu(__WEBPACK_IMPORTED_MODULE_2_electron__["Menu"].buildFromTemplate(menus));
}; // Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.


if (__WEBPACK_IMPORTED_MODULE_6_env___default.a.name !== "production") {
  const userDataPath = __WEBPACK_IMPORTED_MODULE_2_electron__["app"].getPath("userData");
  __WEBPACK_IMPORTED_MODULE_2_electron__["app"].setPath("userData", `${userDataPath} (${__WEBPACK_IMPORTED_MODULE_6_env___default.a.name})`);
}

__WEBPACK_IMPORTED_MODULE_2_electron__["app"].on("ready", () => {
  setApplicationMenu();
  global.mainWindow = Object(__WEBPACK_IMPORTED_MODULE_5__helpers_window__["a" /* default */])("main", {
    width: 1000,
    height: 600
  });
  global.mainWindow.loadURL(__WEBPACK_IMPORTED_MODULE_1_url___default.a.format({
    pathname: __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, "app.html"),
    protocol: "file:",
    slashes: true
  }));

  if (__WEBPACK_IMPORTED_MODULE_6_env___default.a.name === "development") {
    global.mainWindow.openDevTools();
  }
});
__WEBPACK_IMPORTED_MODULE_2_electron__["app"].on("window-all-closed", () => {
  __WEBPACK_IMPORTED_MODULE_2_electron__["app"].quit();
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);

const devMenuTemplate = {
  label: "Development",
  submenu: [{
    label: "Reload",
    accelerator: "CmdOrCtrl+R",
    click: () => {
      __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"].getFocusedWindow().webContents.reloadIgnoringCache();
    }
  }, {
    label: "Toggle DevTools",
    accelerator: "Alt+CmdOrCtrl+I",
    click: () => {
      __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"].getFocusedWindow().toggleDevTools();
    }
  }, {
    label: "Quit",
    accelerator: "CmdOrCtrl+Q",
    click: () => {
      __WEBPACK_IMPORTED_MODULE_0_electron__["app"].quit();
    }
  }]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = devMenuTemplate;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const editMenuTemplate = {
  label: "sites",
  submenu: [{
    label: "2chan",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: '2chan'
      });
    }
  }, {
    label: "4chan",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: '4chan'
      });
    }
  }, {
    label: "nsfw 4chan",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: 'nsfw4chan'
      });
    }
  }, {
    label: "webmshare",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: 'webmshare'
      });
    }
  }, {
    label: "webmland",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: 'webmland'
      });
    }
  }, {
    label: "wobm",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: 'wobm'
      });
    }
  }, {
    label: "issoutv",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: 'issoutv'
      });
    }
  }, {
    label: "nsfw issoutv",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: 'nsfwissoutv'
      });
    }
  }, {
    label: "webmxyz",
    type: "radio",
    click: () => {
      global.mainWindow.webContents.send('change_site', {
        site: 'webmxyz'
      });
    }
  }]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = editMenuTemplate;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs_jetpack__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs_jetpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs_jetpack__);
// This helper remembers the size and position of your windows (and restores
// them in that place after app relaunch).
// Can be used for more than one window, just construct many
// instances of it and give each different name.


/* harmony default export */ __webpack_exports__["a"] = ((name, options) => {
  const userDataDir = __WEBPACK_IMPORTED_MODULE_1_fs_jetpack___default.a.cwd(__WEBPACK_IMPORTED_MODULE_0_electron__["app"].getPath("userData"));
  const stateStoreFile = `window-state-${name}.json`;
  const defaultSize = {
    width: options.width,
    height: options.height
  };
  let state = {};
  let win;

  const restore = () => {
    let restoredState = {};

    try {
      restoredState = userDataDir.read(stateStoreFile, "json");
    } catch (err) {// For some reason json can't be read (might be corrupted).
      // No worries, we have defaults.
    }

    return Object.assign({}, defaultSize, restoredState);
  };

  const getCurrentPosition = () => {
    const position = win.getPosition();
    const size = win.getSize();
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1]
    };
  };

  const windowWithinBounds = (windowState, bounds) => {
    return windowState.x >= bounds.x && windowState.y >= bounds.y && windowState.x + windowState.width <= bounds.x + bounds.width && windowState.y + windowState.height <= bounds.y + bounds.height;
  };

  const resetToDefaults = () => {
    const bounds = __WEBPACK_IMPORTED_MODULE_0_electron__["screen"].getPrimaryDisplay().bounds;
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2
    });
  };

  const ensureVisibleOnSomeDisplay = windowState => {
    const visible = __WEBPACK_IMPORTED_MODULE_0_electron__["screen"].getAllDisplays().some(display => {
      return windowWithinBounds(windowState, display.bounds);
    });

    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }

    return windowState;
  };

  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }

    userDataDir.write(stateStoreFile, state, {
      atomic: true
    });
  };

  state = ensureVisibleOnSomeDisplay(restore());
  win = new __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"](Object.assign({}, options, state));
  win.on("close", saveState);
  return win;
});

/***/ })
/******/ ]);
//# sourceMappingURL=background.js.map