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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs-jetpack");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"name":"development","description":"Add here any environment specific stuff you like."}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = _interopRequireDefault(__webpack_require__(6));

var _url = _interopRequireDefault(__webpack_require__(7));

var _electron = __webpack_require__(2);

var _dev_menu_template = __webpack_require__(8);

var _edit_menu_template = __webpack_require__(9);

var _window = _interopRequireDefault(__webpack_require__(10));

var _env = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is main process of Electron, started as first thing when your
// app starts. It runs through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.
global.mainWindow = null;

const setApplicationMenu = () => {
  const menus = [_edit_menu_template.editMenuTemplate];

  if (_env.default.name !== "production") {
    menus.push(_dev_menu_template.devMenuTemplate);
  }

  _electron.Menu.setApplicationMenu(_electron.Menu.buildFromTemplate(menus));
}; // Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.


if (_env.default.name !== "production") {
  const userDataPath = _electron.app.getPath("userData");

  _electron.app.setPath("userData", `${userDataPath} (${_env.default.name})`);
}

_electron.app.on("ready", () => {
  setApplicationMenu();
  global.mainWindow = (0, _window.default)("main", {
    width: 1000,
    height: 600
  });
  global.mainWindow.loadURL(_url.default.format({
    pathname: _path.default.join(__dirname, "app.html"),
    protocol: "file:",
    slashes: true
  }));

  if (_env.default.name === "development") {
    global.mainWindow.openDevTools();
  }
});

_electron.app.on("window-all-closed", () => {
  _electron.app.quit();
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devMenuTemplate = void 0;

var _electron = __webpack_require__(2);

const devMenuTemplate = {
  label: "Development",
  submenu: [{
    label: "Reload",
    accelerator: "CmdOrCtrl+R",
    click: () => {
      _electron.BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
    }
  }, {
    label: "Toggle DevTools",
    accelerator: "Alt+CmdOrCtrl+I",
    click: () => {
      _electron.BrowserWindow.getFocusedWindow().toggleDevTools();
    }
  }, {
    label: "Quit",
    accelerator: "CmdOrCtrl+Q",
    click: () => {
      _electron.app.quit();
    }
  }]
};
exports.devMenuTemplate = devMenuTemplate;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editMenuTemplate = void 0;
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
exports.editMenuTemplate = editMenuTemplate;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _electron = __webpack_require__(2);

var _fsJetpack = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This helper remembers the size and position of your windows (and restores
// them in that place after app relaunch).
// Can be used for more than one window, just construct many
// instances of it and give each different name.
var _default = (name, options) => {
  const userDataDir = _fsJetpack.default.cwd(_electron.app.getPath("userData"));

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
    const bounds = _electron.screen.getPrimaryDisplay().bounds;

    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2
    });
  };

  const ensureVisibleOnSomeDisplay = windowState => {
    const visible = _electron.screen.getAllDisplays().some(display => {
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
  win = new _electron.BrowserWindow(Object.assign({}, options, state));
  win.on("close", saveState);
  return win;
};

exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=background.js.map