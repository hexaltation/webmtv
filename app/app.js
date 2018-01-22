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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesheets_main_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesheets_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylesheets_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs_jetpack__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs_jetpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs_jetpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_env__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_env___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_env__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_request__);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_os__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mkdirp__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mkdirp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mkdirp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_2chan__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_4chan__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_nsfw4chan__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_nsfwissoutv__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_issoutv__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_webmland__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__model_webmshare__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__model_wobm__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_webmxyz__ = __webpack_require__(28);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_2chan__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_4chan__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_nsfw4chan__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_nsfwissoutv__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_issoutv__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_webmland__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_webmshare__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_wobm__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__model_webmxyz__ = __webpack_require__(25);
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
 // ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------


<<<<<<< HEAD



=======
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7













<<<<<<< HEAD
if (!__WEBPACK_IMPORTED_MODULE_6_fs___default.a.existsSync(__WEBPACK_IMPORTED_MODULE_5_os___default.a.homedir() + '/Documents/webmtv/settings.json')) {
  __WEBPACK_IMPORTED_MODULE_7_mkdirp___default()(__WEBPACK_IMPORTED_MODULE_5_os___default.a.homedir() + '/Documents/webmtv/', function (err) {
    if (!err) {
      __WEBPACK_IMPORTED_MODULE_6_fs___default.a.writeFileSync(__WEBPACK_IMPORTED_MODULE_5_os___default.a.homedir() + '/Documents/webmtv/settings.json', JSON.stringify([]));
    }
  });
}

=======
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
let globalarray = [];
let globalindex = 0;
const app = __WEBPACK_IMPORTED_MODULE_1_electron__["remote"].app;
const appDir = __WEBPACK_IMPORTED_MODULE_2_fs_jetpack___default.a.cwd(app.getAppPath());

const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

function storesettings(data) {
  __WEBPACK_IMPORTED_MODULE_6_fs___default.a.writeFileSync(__WEBPACK_IMPORTED_MODULE_5_os___default.a.homedir() + '/Documents/webmtv/settings.json', JSON.stringify(data));
}

function getsettings(data) {
  return JSON.parse(__WEBPACK_IMPORTED_MODULE_6_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_5_os___default.a.homedir() + '/Documents/webmtv/settings.json', {
    encoding: "utf8"
  }));
}

function initcheckboxes() {
  console.log(getsettings());

  for (let o of getsettings()) {
    qs('#do' + o).checked = true;
  }
}

function whattoload() {
  let playlists = [];

  if (qs('#do2chan').checked) {
    playlists.push("2chan");
  }

  if (qs('#do4chan').checked) {
    playlists.push("4chan");
  }

  if (qs('#donsfw4chan').checked) {
    playlists.push("nsfw4chan");
  }

  if (qs('#dowebmshare').checked) {
    playlists.push("webmshare");
  }

  if (qs('#dowobm').checked) {
    playlists.push("wobm");
  }

  if (qs('#doissoutv').checked) {
    playlists.push("issoutv");
  }

  if (qs('#donsfwissoutv').checked) {
    playlists.push("nsfwissoutv");
  }

  if (qs('#dowebmland').checked) {
    playlists.push("webmland");
  }

  storesettings(playlists);
  return playlists;
}

function play() {
  if (!qs('video').paused) {
    qs('video').pause();
  }

  qs('#currentmedia').innerHTML = globalarray[globalindex];
  qs('video').src = globalarray[globalindex];
  qs('video').addEventListener('error', (e, d) => {
    console.log(e, d); //next()
  });
  qs('video').addEventListener('ended', () => {
    next();
  });
  qs('video').addEventListener("loadedmetadata", function (e) {
    if (this.videoHeight > this.videoWidth) {
      qs('video').classList.remove('normal');
      qs('video').classList.add('phone');
    } else {
      qs('video').classList.remove('phone');
      qs('video').classList.add('normal');
    }
  }, false);
  qs('video').addEventListener("canplay", (e, d) => {
    console.log(e, d);
    qs('video').play();
  });
}

function next() {
  globalindex++;

  if (globalindex >= globalarray.length) {
    globalindex = 0;
  }

  play();
}

function prev(webmsarrays, index) {
  globalindex--;

  if (globalindex <= 0) {
    globalindex = 0;
  }

  play();
}

let playlist = [];
<<<<<<< HEAD

function loadsite(site) {
  switch (site) {
    case "2chan":
      Object(__WEBPACK_IMPORTED_MODULE_8__model_2chan__["a" /* default */])(webmsarrays => {
        globalarray.push(...webmsarrays);
=======
__WEBPACK_IMPORTED_MODULE_1_electron__["ipcRenderer"].on('change_site', function (event, data) {
  localStorage.setItem("current_site", data.site);

  switch (data.site) {
    case "2chan":
      Object(__WEBPACK_IMPORTED_MODULE_6__model_2chan__["a" /* default */])(webmsarrays => {
        globalindex = 0;
        globalarray = webmsarrays;
        qs('video').src = getprefix() + globalarray[globalindex];
        play();
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
      });
      break;

    case "wobm":
<<<<<<< HEAD
      Object(__WEBPACK_IMPORTED_MODULE_15__model_wobm__["a" /* default */])(webmsarrays => {
        globalarray.push(...webmsarrays.reverse());
=======
      Object(__WEBPACK_IMPORTED_MODULE_13__model_wobm__["a" /* default */])(webmsarrays => {
        globalindex = 0;
        globalarray = webmsarrays;
        qs('video').src = getprefix() + globalarray[globalindex];
        play();
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
      });
      break;

    case "webmxyz":
<<<<<<< HEAD
      Object(__WEBPACK_IMPORTED_MODULE_16__model_webmxyz__["a" /* default */])(webmsarrays => {
        globalarray.push(...webmsarrays);
=======
      Object(__WEBPACK_IMPORTED_MODULE_14__model_webmxyz__["a" /* default */])(webmsarrays => {
        globalindex = 0;
        globalarray = webmsarrays;
        qs('video').src = getprefix() + globalarray[globalindex];
        play();
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
      });
      break;

    case "4chan":
<<<<<<< HEAD
      Object(__WEBPACK_IMPORTED_MODULE_9__model_4chan__["a" /* default */])(webmsarrays => {
        globalarray.push(...webmsarrays);
=======
      Object(__WEBPACK_IMPORTED_MODULE_7__model_4chan__["a" /* default */])(webmsarrays => {
        globalindex = 0;
        globalarray = webmsarrays;
        qs('video').src = getprefix() + globalarray[globalindex];
        play();
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
      });
      break;

    case "nsfw4chan":
<<<<<<< HEAD
      Object(__WEBPACK_IMPORTED_MODULE_10__model_nsfw4chan__["a" /* default */])(webmsarrays => {
        globalarray.push(...webmsarrays);
=======
      Object(__WEBPACK_IMPORTED_MODULE_8__model_nsfw4chan__["a" /* default */])(webmsarrays => {
        globalindex = 0;
        globalarray = webmsarrays;
        qs('video').src = getprefix() + globalarray[globalindex];
        play();
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
      });
      break;

    case "webmshare":
<<<<<<< HEAD
      Object(__WEBPACK_IMPORTED_MODULE_14__model_webmshare__["a" /* default */])(webmsarrays => {
        globalarray.push(...webmsarrays);
=======
      Object(__WEBPACK_IMPORTED_MODULE_12__model_webmshare__["a" /* default */])(webmsarrays => {
        globalindex = 0;
        globalarray = webmsarrays;
        qs('video').src = getprefix() + globalarray[globalindex];
        play();
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
      });
      break;

    case "webmland":
<<<<<<< HEAD
      Object(__WEBPACK_IMPORTED_MODULE_13__model_webmland__["a" /* default */])(webmsarrays => {
        globalarray.push(...webmsarrays);
=======
      Object(__WEBPACK_IMPORTED_MODULE_11__model_webmland__["a" /* default */])(webmsarrays => {
        globalindex = 0;
        globalarray = webmsarrays;
        qs('video').src = getprefix() + globalarray[globalindex];
        play();
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
      });
      break;

    case "issoutv":
<<<<<<< HEAD
      Object(__WEBPACK_IMPORTED_MODULE_12__model_issoutv__["a" /* default */])(webmsarrays => {
=======
      Object(__WEBPACK_IMPORTED_MODULE_10__model_issoutv__["a" /* default */])(webmsarrays => {
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
        console.log(webmsarrays);
        globalindex = 0;
        globalarray.push(...webmsarrays);
      });
      break;

    case "nsfwissoutv":
<<<<<<< HEAD
      Object(__WEBPACK_IMPORTED_MODULE_11__model_nsfwissoutv__["a" /* default */])(webmsarrays => {
        console.log(webmsarrays); //globalindex=0;

        globalarray.push(...webmsarrays);
      });
      break;
  }
}

function initplaylist() {
  for (let o of whattoload()) {
    loadsite(o);
  }
}

for (let o of qsa('input[type=checkbox]')) {
  o.addEventListener('change', () => {
    console.log('changed');
    console.log(whattoload()); //initcheckboxes()
  });
}

initcheckboxes();
qs('#initplaylist').addEventListener('click', e => {
  globalindex = 0;
  initplaylist();
  play();
=======
      Object(__WEBPACK_IMPORTED_MODULE_9__model_nsfwissoutv__["a" /* default */])(webmsarrays => {
        console.log(webmsarrays);
        globalindex = 0;
        globalarray = webmsarrays;
        qs('video').src = getprefix() + globalarray[globalindex];
        play();
      });
      break;
  }
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
});
document.addEventListener('keydown', e => {
  console.log(e);
  e = e || window.event;

  if (e.keyCode == '38') {// up arrow
  } else if (e.keyCode == '40') {// down arrow
  } else if (e.keyCode == '37') {
    prev();
  } else if (e.keyCode == '39') {
    next();
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(15)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "*{\n  padding:0px;\n  margin:0px;\n}\n.main {\n\tdisplay: grid;\n\tgrid-template-columns: auto 250px;\n  grid-template-rows: 100vh;\n\n\n}\n\n\n.normal{\n  width:100%;\n  height:auto;\n}\n\n.phone{\n  height:100%;\n    max-height:600px;\n  width:auto;\n}\n.player{\n  width:100%;\n  height:100%;\n  max-height:600px;\n  background:#000;\n  text-align: center;\n\n background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=');\n\n\n}\n.currentdata{\n  height: 50px;\n  display:block;\n  width: 100%;\n  background-color: #000;\n  color:#fff;\n}\n\n\n.player::before,\n.player::after {\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-direction: alternate-reverse;\n  overflow: hidden;\n  position: absolute;\n  top: -100%;\n  clip: rect(0, 900px, 0, 0);\n  content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=');\n\n}\n\n.player::after {\n  animation-name: glitch-animation;\n  animation-duration: 4s;\n  left: 4px;\n  text-shadow: -1px 0 #ffa800;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=');\n\n}\n\n.player::before {\n  animation-name: glitch-animation-2;\n  animation-duration: 6s;\n  left: -4px;\n  text-shadow: 1px 0 #00d8ff;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=');\n\n}\n\n.infos{\n  background:#123;\n}\n\n\n\n\n\n\n@keyframes glitch-animation {\n  0% {\n    clip: rect(42px, 9999px, 44px, 0);\n  }\n  5% {\n    clip: rect(12px, 9999px, 59px, 0);\n  }\n  10% {\n    clip: rect(48px, 9999px, 29px, 0);\n  }\n  15.0% {\n    clip: rect(42px, 9999px, 73px, 0);\n  }\n  20% {\n    clip: rect(63px, 9999px, 27px, 0);\n  }\n  25% {\n    clip: rect(34px, 9999px, 55px, 0);\n  }\n  30.0% {\n    clip: rect(86px, 9999px, 73px, 0);\n  }\n  35% {\n    clip: rect(20px, 9999px, 20px, 0);\n  }\n  40% {\n    clip: rect(26px, 9999px, 60px, 0);\n  }\n  45% {\n    clip: rect(25px, 9999px, 66px, 0);\n  }\n  50% {\n    clip: rect(57px, 9999px, 98px, 0);\n  }\n  55.0% {\n    clip: rect(5px, 9999px, 46px, 0);\n  }\n  60.0% {\n    clip: rect(82px, 9999px, 31px, 0);\n  }\n  65% {\n    clip: rect(54px, 9999px, 27px, 0);\n  }\n  70% {\n    clip: rect(28px, 9999px, 99px, 0);\n  }\n  75% {\n    clip: rect(45px, 9999px, 69px, 0);\n  }\n  80% {\n    clip: rect(23px, 9999px, 85px, 0);\n  }\n  85.0% {\n    clip: rect(54px, 9999px, 84px, 0);\n  }\n  90% {\n    clip: rect(45px, 9999px, 47px, 0);\n  }\n  95% {\n    clip: rect(37px, 9999px, 20px, 0);\n  }\n  100% {\n    clip: rect(4px, 9999px, 91px, 0);\n  }\n}\n@keyframes glitch-animation-2 {\n  0% {\n    clip: rect(65px, 9999px, 100px, 0);\n  }\n  5% {\n    clip: rect(52px, 9999px, 74px, 0);\n  }\n  10% {\n    clip: rect(79px, 9999px, 85px, 0);\n  }\n  15.0% {\n    clip: rect(75px, 9999px, 5px, 0);\n  }\n  20% {\n    clip: rect(67px, 9999px, 61px, 0);\n  }\n  25% {\n    clip: rect(14px, 9999px, 79px, 0);\n  }\n  30.0% {\n    clip: rect(1px, 9999px, 66px, 0);\n  }\n  35% {\n    clip: rect(86px, 9999px, 30px, 0);\n  }\n  40% {\n    clip: rect(23px, 9999px, 98px, 0);\n  }\n  45% {\n    clip: rect(85px, 9999px, 72px, 0);\n  }\n  50% {\n    clip: rect(71px, 9999px, 75px, 0);\n  }\n  55.0% {\n    clip: rect(2px, 9999px, 48px, 0);\n  }\n  60.0% {\n    clip: rect(30px, 9999px, 16px, 0);\n  }\n  65% {\n    clip: rect(59px, 9999px, 50px, 0);\n  }\n  70% {\n    clip: rect(41px, 9999px, 62px, 0);\n  }\n  75% {\n    clip: rect(2px, 9999px, 82px, 0);\n  }\n  80% {\n    clip: rect(47px, 9999px, 73px, 0);\n  }\n  85.0% {\n    clip: rect(3px, 9999px, 27px, 0);\n  }\n  90% {\n    clip: rect(26px, 9999px, 55px, 0);\n  }\n  95% {\n    clip: rect(42px, 9999px, 97px, 0);\n  }\n  100% {\n    clip: rect(38px, 9999px, 49px, 0);\n  }\n}\n\n\n\n.progress-wrap {\n  background: #000;\n    width: 100%;\n  margin: 20px 0;\n  overflow: hidden;\n  position: relative;\n    height: 20px;\n}\n .progress-bar {\n  background: #ddd;\n  left: 0;\n  position: relative;\n  height: 100%;\n  width:0px;\n  top: 0;\n}\n", ""]);
=======
exports.push([module.i, "*{\r\n  padding:0px;\r\n  margin:0px;\r\n}\r\n.main {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: auto 250px;\r\n  grid-template-rows: 100vh;\r\n\r\n\r\n}\r\n\r\n\r\n.normal{\r\n  width:100%;\r\n  height:auto;\r\n}\r\n\r\n.phone{\r\n  height:100%;\r\n  width:auto;\r\n}\r\n.player{\r\n  width:100%;\r\n  height:100%;\r\n  background:#000;\r\n  text-align: center;\r\n\r\n}\r\n.infos{\r\n  background:#123;\r\n}\r\n\r\n\r\n\r\n\r\n.progress-wrap {\r\n  background: #000;\r\n    width: 100%;\r\n  margin: 20px 0;\r\n  overflow: hidden;\r\n  position: relative;\r\n    height: 20px;\r\n}\r\n .progress-bar {\r\n  background: #ddd;\r\n  left: 0;\r\n  position: relative;\r\n  height: 100%;\r\n  width:0px;\r\n  top: 0;\r\n}\r\n", ""]);
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 17 */
<<<<<<< HEAD
/***/ (function(module, exports) {

module.exports = require("os");
=======
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7

/***/ }),
/* 18 */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);


=======
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  const qs = e => {
    return document.querySelector(e);
  };

  const qsa = e => {
    return document.querySelectorAll(e);
  };

  let requestindex = 0;
  let nichanpages = ["http://may.2chan.net/webm/futaba.htm", "http://may.2chan.net/webm/1.htm", "http://may.2chan.net/webm/2.htm", "http://may.2chan.net/webm/3.htm", "http://may.2chan.net/webm/4.htm", "http://may.2chan.net/webm/5.htm"];
  let webmsarrays = [];

  for (let pageurl of nichanpages) {
    __WEBPACK_IMPORTED_MODULE_0_request___default.a.get(pageurl, (error, response, html) => {
      if (!error) {
        // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
        var allLinks = $('.thre a').map(function (i, el) {
          return $(el).attr('href');
        }).get();
        var regex = new RegExp(".webm");
        let webms = allLinks.filter(/./.test.bind(new RegExp('.webm')));
        var uniqueNames = [];

        for (let i of webms) {
          if (uniqueNames.indexOf(i) === -1) {
            console.log(i.split('.webm')[1]);

            if (i.split('.webm')[1] != undefined) {
              uniqueNames.push("http://may.2chan.net" + i);
            }
          }
        }

        webmsarrays.push(...uniqueNames);
        requestindex++;
        qs('.load-2chan .progress-bar').style.width = requestindex / 6 * 100 + "%";

        if (requestindex === 6) {
          console.log('completed');
          cb(webmsarrays);
        }
      }
    });
  }
});

/***/ }),
<<<<<<< HEAD
/* 21 */
=======
/* 18 */
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

function query4chanAPI(index, array, cb) {
  __WEBPACK_IMPORTED_MODULE_0_request___default.a.get('https://a.4cdn.org/wsg/' + index + '.json', (error, response, data) => {
    let arr = [];
    let d = JSON.parse(data);
    console.log(index, d);

    for (let i of d.threads) {
      for (let o of i.posts) {
        if (o.ext === ".webm") {
          arr.push("http://i.4cdn.org/wsg/" + o.tim + o.ext);
        }
      }
    }

    array.push(...arr);
    setTimeout(() => {
      index++;
      qs('.load-4chan .progress-bar').style.width = index / 11 * 100 + "%";

      if (index === 11) {
        return cb();
      } else {
        query4chanAPI(index, array, cb);
      }
    }, 1000);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  let webms = [];
  let requestindex = 0;
  let index = 1;
  query4chanAPI(index, webms, () => {
    cb(webms);
  });
});

/***/ }),
<<<<<<< HEAD
/* 22 */
=======
/* 19 */
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

function querynsfw4chanAPI(index, array, cb) {
  __WEBPACK_IMPORTED_MODULE_0_request___default.a.get('https://a.4cdn.org/gif/' + index + '.json', (error, response, data) => {
    let arr = [];
    let d = JSON.parse(data);
    console.log(index, d);

    for (let i of d.threads) {
      for (let o of i.posts) {
        if (o.ext === ".webm") {
          arr.push("http://i.4cdn.org/gif/" + o.tim + o.ext);
        }
      }
    }

    array.push(...arr);
    setTimeout(() => {
      index++;
      qs('.load-4channsfw .progress-bar').style.width = index / 11 * 100 + "%";

      if (index === 11) {
        return cb();
      } else {
        querynsfw4chanAPI(index, array, cb);
      }
    }, 1000);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  let webms = [];
  let requestindex = 0;
  let index = 1;
  querynsfw4chanAPI(index, webms, () => {
    cb(webms);
  });
});

/***/ }),
<<<<<<< HEAD
/* 23 */
=======
/* 20 */
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  console.log('nsfw issou filling');
  let requestindex = 0;
  __WEBPACK_IMPORTED_MODULE_0_request___default.a.get("http://issoutv.com/videos/category/18", (error, response, html) => {
    if (!error) {
      let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
      let arr = $('.v-pagination li a').map(function (i, el) {
        return $(el).html();
      }).get();
      let arr2 = [];

      for (let i of arr) {
        if (!isNaN(i)) {
          arr2.push(Number(i));
        }
      }

      requestindex = arr2[arr2.indexOf(Math.max(...arr2))];
      let issoupages = [];

      for (let o = requestindex; o > 0; o--) {
        issoupages.push("http://issoutv.com/videos/category/18/page/" + o);
      }

      console.log(issoupages, requestindex);
      let webmsarrays = [];

      for (let pageurl of issoupages) {
        __WEBPACK_IMPORTED_MODULE_0_request___default.a.get(pageurl, (error, response, html) => {
          console.log("issou/" + pageurl);

          if (!error) {
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
            let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
            var allLinks = $('video').map(function (i, el) {
              console.log("===", el.children[0].attribs.src, "++++");
              return el.children[0].attribs.src;
            }).get(); //console.log($('video'))

            var regex = new RegExp(".webm");
            let webms = allLinks.filter(/./.test.bind(new RegExp('.webm')));
            var uniqueNames = [];

            for (let i of webms) {
              if (uniqueNames.indexOf(i) === -1) {
                console.log(i.split('.webm')[1]);

                if (i.split('.webm')[1] != undefined) {
                  uniqueNames.push("http://issoutv.com" + i);
                }
              }
            }

            webmsarrays.push(...uniqueNames);
            requestindex--;
            qs('.load-issoutvnsfw .progress-bar').style.width = 100 - requestindex / issoupages.length * 100 + "%";
            console.log(requestindex);

            if (requestindex === 1) {
              console.log('completed');
              cb(webmsarrays);
            }
          }
        });
      }
    }
  });
});

/***/ }),
<<<<<<< HEAD
/* 24 */
=======
/* 21 */
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  console.log('issou filling');
  let requestindex = 0;
  __WEBPACK_IMPORTED_MODULE_0_request___default.a.get("http://issoutv.com/", (error, response, html) => {
    if (!error) {
      let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
      let arr = $('.v-pagination li a').map(function (i, el) {
        return $(el).html();
      }).get();
      let arr2 = [];

      for (let i of arr) {
        if (!isNaN(i)) {
          arr2.push(Number(i));
        }
      }

      requestindex = arr2[arr2.indexOf(Math.max(...arr2))];
      let issoupages = [];

      for (let o = requestindex; o > 0; o--) {
        issoupages.push("http://issoutv.com/videos/page/" + o);
      }

      console.log(issoupages, requestindex);
      let webmsarrays = [];

      for (let pageurl of issoupages) {
        __WEBPACK_IMPORTED_MODULE_0_request___default.a.get(pageurl, (error, response, html) => {
          console.log("issou/" + pageurl);

          if (!error) {
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
            let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
            var allLinks = $('video').map(function (i, el) {
              console.log("===", el.children[0].attribs.src, "++++");
              return el.children[0].attribs.src;
            }).get(); //console.log($('video'))

            var regex = new RegExp(".webm");
            let webms = allLinks.filter(/./.test.bind(new RegExp('.webm')));
            var uniqueNames = [];

            for (let i of webms) {
              if (uniqueNames.indexOf(i) === -1) {
                console.log(i.split('.webm')[1]);

                if (i.split('.webm')[1] != undefined) {
                  uniqueNames.push("http://issoutv.com" + i);
                }
              }
            }

            webmsarrays.push(...uniqueNames);
            requestindex--;
            qs('.load-issoutv .progress-bar').style.width = 100 - requestindex / issoupages.length * 100 + "%";
            console.log(requestindex);

            if (requestindex === 0) {
              console.log('completed');
              cb(webmsarrays);
            }
          }
        });
      }
    }
  });
});

/***/ }),
<<<<<<< HEAD
/* 25 */
=======
/* 22 */
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  console.log('issou filling');
  let requestindex = 1;
  __WEBPACK_IMPORTED_MODULE_0_request___default.a.get("http://webm.land/", (error, response, html) => {
    if (!error) {
      let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
      let arr = $('.pagination li a').map(function (i, el) {
        return $(el).html();
      }).get();
      let arr2 = [];

      for (let i of arr) {
        if (!isNaN(i)) {
          arr2.push(Number(i));
        }
      }

      requestindex = arr2[arr2.indexOf(Math.max(...arr2))];
      let issoupages = [];

      for (let o = requestindex; o > 0; o--) {
        issoupages.push("http://webm.land/?page=" + o);
      }

      console.log(issoupages, requestindex);
      let webmsarrays = [];

      for (let pageurl of issoupages) {
        __WEBPACK_IMPORTED_MODULE_0_request___default.a.get(pageurl, (error, response, html) => {
          console.log("webm.land/" + pageurl);

          if (!error) {
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
            let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
            var allLinks = $('.webms a').map(function (i, el) {
              console.log("===", el.attribs.href, "++++");
              return el.attribs.href;
            }).get();
            console.log(allLinks);
            let webms = [];

            for (let t of allLinks) {
              webms.push(t.split('/w/')[1].split('/')[0]);
            }

            var uniqueNames = [];

            for (let i of webms) {
              uniqueNames.push("http://webm.land/media/" + i + '.webm');
            }

            webmsarrays.push(...uniqueNames);
            requestindex--;
            qs('.load-webmland .progress-bar').style.width = 100 - requestindex / issoupages.length * 100 + "%";
            console.log(requestindex);

            if (requestindex === 0) {
              console.log('completed', webmsarrays);
              cb(webmsarrays);
            }
          }
        });
      }
    }
  });
});

/***/ }),
<<<<<<< HEAD
/* 26 */
=======
/* 23 */
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  let webms = [];
  let uniquepages = [];
  let idx = 1;

  for (let o = 1; o <= 500; o++) {
    __WEBPACK_IMPORTED_MODULE_0_request___default.a.get('https://webmshare.com/uploads/latest?page=' + o, (error, response, html) => {
      idx++;
      console.log(o);

      if (!error) {
        let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
        let arr = $('.thumbnail').map(function (i, el) {
          return $(el).attr('href');
        }).get();
        uniquepages.push(...arr);
        qs('.load-webmshare .progress-bar').style.width = idx / 500 * 100 + "%";

        if (idx === 500) {
          console.log(uniquepages);

          for (let u of uniquepages) {
            webms.push('https://s1.webmshare.com' + u + '.webm');
          }

          cb(webms);
        }
      }
    });
  }
});

/***/ }),
<<<<<<< HEAD
/* 27 */
=======
/* 24 */
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  console.log('nsfw issou filling');
  let requestindex = 0;
  __WEBPACK_IMPORTED_MODULE_0_request___default.a.get("https://w0bm.com/index", (error, response, html) => {
    if (!error) {
      let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
      let arr = $('.pagination li a').map(function (i, el) {
        return $(el).html();
      }).get();
      let arr2 = [];

      for (let i of arr) {
        if (!isNaN(i)) {
          arr2.push(Number(i));
        }
      }

      requestindex = arr2[arr2.indexOf(Math.max(...arr2))];
      console.log(requestindex);
      __WEBPACK_IMPORTED_MODULE_0_request___default.a.get('https://w0bm.com/index?page=' + requestindex, (error, response, html) => {
        console.log(html);

        if (!error) {
          let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
          let arr4 = $('.vid a').map(function (i, el) {
            return $(el).html();
          }).get();
          console.log(arr4);
          let arr3 = [];

          for (let i of arr4) {
            if (!isNaN(i)) {
              arr3.push(Number(i));
            }
          }

          let requestindex2 = arr3[arr3.indexOf(Math.max(...arr3))];
          console.log(requestindex2);
          let webms = [];

          for (let o = 1; o <= Number(requestindex2); o++) {
            qs('.load-wobm .progress-bar').style.width = o / Number(requestindex2) * 100 + "%";
            webms.push("https://b.w0bm.com/" + o + ".webm");

            if (o === Number(requestindex2)) {
              cb(webms);
            }
          }
        }
      }); //  let issoupages=[]
      //  for(let o=requestindex;o>0;o--){
      //    issoupages.push("http://issoutv.com/videos/category/18/page/"+o)
      //  }
      //  console.log(issoupages,requestindex)
      //  let webmsarrays=[]
      //  for(let pageurl of issoupages){
      //
      //    request.get(pageurl,(error, response, html)=>{
      //      console.log("issou/"+pageurl)
      //          if(!error){
      //              // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      //              let $ = cheerio.load(html);
      //  var allLinks = $('video').map(function(i,el) { console.log("===",el.children[0].attribs.src,"++++");return el.children[0].attribs.src; }).get();
      //  //console.log($('video'))
      //  var regex = new RegExp(".webm");
      //
      //  let webms = allLinks.filter(/./.test.bind(new RegExp('.webm')));
      //  var uniqueNames = [];
      //  for(let i of webms){
      //    if(uniqueNames.indexOf(i)=== -1){
      //      console.log(i.split('.webm')[1])
      //      if(i.split('.webm')[1]!=undefined){
      //            uniqueNames.push(i)
      //      }
      //
      //    }
      //  }
      //  webmsarrays.push(...uniqueNames)
      //  requestindex--;
      //  console.log(requestindex)
      //  if(requestindex===1){
      //    console.log('completed')
      //    cb(webmsarrays)
      //  }
      //
      //          }
      //
      //    })
      //   }
    }
  });
});

/***/ }),
<<<<<<< HEAD
/* 28 */
=======
/* 25 */
>>>>>>> 1ca4b498d9681c55796873da91a6e15296d419e7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  console.log('nsfw issou filling');
  let requestindex = 0;
  __WEBPACK_IMPORTED_MODULE_0_request___default.a.get("https://webm.xyz/", (error, response, html) => {
    console.log(html);

    if (!error) {
      let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
      let pagesmax = $('#pagination').data('pages');
      console.log(pagesmax);
    } //      let arr=$('.v-pagination li a').map(function(i,el) { return $(el).html(); }).get()
    //      let arr2=[]
    //      for(let i of arr){
    //        if(!isNaN(i)){
    //          arr2.push(Number(i))
    //        }
    //      }
    //      requestindex=arr2[arr2.indexOf(Math.max(...arr2))]
    //      let issoupages=[]
    //      for(let o=requestindex;o>0;o--){
    //        issoupages.push("http://issoutv.com/videos/category/18/page/"+o)
    //      }
    //      console.log(issoupages,requestindex)
    //      let webmsarrays=[]
    //      for(let pageurl of issoupages){
    //
    //        request.get(pageurl,(error, response, html)=>{
    //          console.log("issou/"+pageurl)
    //              if(!error){
    //                  // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
    //                  let $ = cheerio.load(html);
    //      var allLinks = $('video').map(function(i,el) { console.log("===",el.children[0].attribs.src,"++++");return el.children[0].attribs.src; }).get();
    //      //console.log($('video'))
    //      var regex = new RegExp(".webm");
    //
    //      let webms = allLinks.filter(/./.test.bind(new RegExp('.webm')));
    //      var uniqueNames = [];
    //      for(let i of webms){
    //        if(uniqueNames.indexOf(i)=== -1){
    //          console.log(i.split('.webm')[1])
    //          if(i.split('.webm')[1]!=undefined){
    //                uniqueNames.push(i)
    //          }
    //
    //        }
    //      }
    //      webmsarrays.push(...uniqueNames)
    //      requestindex--;
    //      qs('.load-issoutvnsfw .progress-bar').style.width=(100-(requestindex/issoupages.length)*100)+"%";
    //
    //      console.log(requestindex)
    //      if(requestindex===1){
    //        console.log('completed')
    //        cb(webmsarrays)
    //      }
    //
    //              }
    //      })
    //     }
    //
    //
    //
    //  }

  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map