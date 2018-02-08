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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a) {
  let seen = {};
  let out = [];
  let len = a.length;
  let j = 0;

  for (let i = 0; i < len; i++) {
    let item = a[i];

    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }

  return out;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs-jetpack");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"name":"development","description":"Add here any environment specific stuff you like."}

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesheets_main_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesheets_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylesheets_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs_jetpack__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs_jetpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs_jetpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_env__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_env___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_env__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_os__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mkdirp__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mkdirp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mkdirp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_2chan__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_4chan__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_nsfw4chan__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_nsfwissoutv__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_issoutv__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__model_webmland__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__model_webmshare__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__model_wobm__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_webmxyz__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_http_https__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_http_https___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_http_https__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_file_type__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_file_type___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_file_type__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__model_cleanarray__ = __webpack_require__(1);
 // ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------





















if (!__WEBPACK_IMPORTED_MODULE_6_fs___default.a.existsSync(__WEBPACK_IMPORTED_MODULE_5_os___default.a.homedir() + '/Documents/webmtv/settings.json')) {
  __WEBPACK_IMPORTED_MODULE_7_mkdirp___default()(__WEBPACK_IMPORTED_MODULE_5_os___default.a.homedir() + '/Documents/webmtv/', function (err) {
    if (!err) {
      __WEBPACK_IMPORTED_MODULE_6_fs___default.a.writeFileSync(__WEBPACK_IMPORTED_MODULE_5_os___default.a.homedir() + '/Documents/webmtv/settings.json', JSON.stringify([]));
    }
  });
}

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

  if (qs('#dowebmxyz').checked) {
    playlists.push("webmxyz");
  }

  storesettings(playlists);
  return playlists;
}

function random() {
  globalindex = Math.floor(Math.random() * (globalarray.length - 1));
  play();
}

function play() {
  console.log('play');

  if (!qs('video').paused) {
    qs('video').pause();
  }

  qs('#currentmedia').innerHTML = globalarray[globalindex];
  qs('.playlist-position').innerHTML = globalindex + 1 + '/' + globalarray.length;
  qs('.load-all .progress-bar').style.width = (globalindex + 1) / globalarray.length * 100 + "%";
  __WEBPACK_IMPORTED_MODULE_17_http_https___default.a.get(globalarray[globalindex], res => {
    res.once('data', chunk => {
      res.destroy();
      console.log(__WEBPACK_IMPORTED_MODULE_18_file_type___default()(chunk)); //=> {ext: 'gif', mime: 'image/gif'}

      if (__WEBPACK_IMPORTED_MODULE_18_file_type___default()(chunk).mime == 'video/webm') {
        qs('video').src = globalarray[globalindex];
        qs('video').addEventListener('error', (e, d) => {
          console.log(e, d); //next()
        });
        qs('video').addEventListener('ended', () => {
          console.log('ended');
          setTimeout(() => {
            next();
          }, 750);
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
      } else {
        qs('#currentmedia').innerHTML = 'error not a webm  :' + __WEBPACK_IMPORTED_MODULE_18_file_type___default()(chunk).mime + ' => next()';
        next();
      }
    });
  });
  qs('video').addEventListener('progress', function () {
    var bufferedEnd = qs('video').buffered.end(qs('video').buffered.length - 1);
    console.log('buffer', bufferedEnd);
    var duration = qs('video').duration;

    if (duration > 0) {
      var buffPercent = bufferedEnd / duration * 100;
      console.log(buffPercent);
    } //   console.log(buffPercent);
    //   if (buffPercent > 25) {
    //     if (autoplay) {
    //       myAudio.play();
    //       autoplay = false;
    //     }
    //   }
    //   qs('#seekbar span').style.width = buffPercent + "%";
    // }

  });
  qs('video').addEventListener('timeupdate', function () {
    var duration = qs('video').duration;

    if (duration > 0) {
      qs('#seekbar span').style.width = qs('video').currentTime / duration * 100 + "%";
    }
  });
  qs("#seekbar").addEventListener("click", function (e) {
    var offset = qs("#seekbar").getBoundingClientRect();
    var left = e.pageX - offset.left;
    var totalWidth = qs("#seekbar").offsetWidth;
    var percentage = left / totalWidth;
    var vidTime = qs('video').duration * percentage;
    qs('video').currentTime = vidTime;
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

function loadsite(site, next) {
  switch (site) {
    case "2chan":
      Object(__WEBPACK_IMPORTED_MODULE_8__model_2chan__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;

    case "wobm":
      Object(__WEBPACK_IMPORTED_MODULE_15__model_wobm__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays.reverse()));
        next();
      });
      break;

    case "webmxyz":
      Object(__WEBPACK_IMPORTED_MODULE_16__model_webmxyz__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;

    case "4chan":
      Object(__WEBPACK_IMPORTED_MODULE_9__model_4chan__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;

    case "nsfw4chan":
      Object(__WEBPACK_IMPORTED_MODULE_10__model_nsfw4chan__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;

    case "webmshare":
      Object(__WEBPACK_IMPORTED_MODULE_14__model_webmshare__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;

    case "webmland":
      Object(__WEBPACK_IMPORTED_MODULE_13__model_webmland__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;

    case "issoutv":
      Object(__WEBPACK_IMPORTED_MODULE_12__model_issoutv__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;

    case "nsfwissoutv":
      Object(__WEBPACK_IMPORTED_MODULE_11__model_nsfwissoutv__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;

    case "webmxyz":
      Object(__WEBPACK_IMPORTED_MODULE_16__model_webmxyz__["a" /* default */])(globalarray, webmsarrays => {
        globalarray.push(...Object(__WEBPACK_IMPORTED_MODULE_19__model_cleanarray__["a" /* default */])(webmsarrays));
        next();
      });
      break;
  }
}

function initplaylist(next) {
  let index = 0;

  for (let o of whattoload()) {
    loadsite(o, () => {
      index++;

      if (index >= whattoload().length) {
        next();
      }
    });
  }
} // for(let o of qsa('input[type=checkbox]')){
//   o.addEventListener('change',()=>{
//     console.log('changed')
//   console.log(whattoload())
//   //initcheckboxes()
//   })
// }


initcheckboxes();
qs('#initplaylist').addEventListener('click', e => {
  globalindex = 0;
  initplaylist(() => {
    play();
  });
});
document.addEventListener('keydown', e => {
  console.log(e);
  e = e || window.event;

  if (e.keyCode == '38') {
    // up arrow
    random();
  } else if (e.keyCode == '40') {// down arrow
  } else if (e.keyCode == '37') {
    prev();
  } else if (e.keyCode == '39') {
    next();
  }
});
qs('.playctrl').addEventListener('click', () => {
  const video = qs('video');

  if (video.paused) {
    qs('.playctrl').classList.remove('playBtn');
    qs('.playctrl').classList.add('pauseBtn');
    video.play();
  } else {
    qs('.playctrl').classList.remove('pauseBtn');
    qs('.playctrl').classList.add('playBtn');
    video.pause();
  }
});
qs(".load-all").addEventListener("click", function (e) {
  let offset = qs(".load-all").getBoundingClientRect();
  let left = e.pageX - offset.left;
  let totalWidth = qs(".load-all").offsetWidth;
  let percentage = left / totalWidth;
  let current = globalarray.length * percentage;
  globalindex = parseInt(current);
  console.log(globalindex);
  play(); //var vidTime = qs('video').duration * percentage;
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'bit';\n  src: url(data:application/font-woff2;charset=utf-8;base64,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) format(\"woff2\"), url(data:application/font-woff;charset=utf-8;base64,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) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n*{\n  padding:0px;\n  margin:0px;\n}\nbody{\n  font-family: 'bit';\n  color:lime;\n}\n\n.main {\n\tdisplay: grid;\n\tgrid-template-columns: 600px 250px;\n  grid-template-rows: 100vh;\n\n\n}\n\n.left{\n\n}\n.right{\n\n}\n.normal{\n  width:100%;\n  height:auto;\n}\n\n.phone{\n  height:100%;\n  max-height:600px;\n  width:auto;\n}\n.player{\n  position:absolute;\n  display:block;\n  width:100%;\n  height:100%;\n  width:600px;\n  height: 480px;\n  background:#000;\n  text-align: center;\n  border:2px solid lime;\n/*\n background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=');\n\n*/\n}\n.currentdata{\n  height: 50px;\n  display:block;\n  width: 100%;\n  background-color: #000;\n  color:#fff;\n}\n#ctrlz{\n  position:absolute;\n  display:block;\n  top:481px;\n  width:600px;\n  height:300px;\n  border:1px solid red;\n\n}\n\n\n\n.player::before,\n.player::after {\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-direction: alternate-reverse;\n  overflow: hidden;\n  position: absolute;\n  top: -100%;\n  clip: rect(0, 900px, 0, 0);\n  content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=');\n\n}\n\n.player::after {\n  animation-name: glitch-animation;\n  animation-duration: 4s;\n  left: 4px;\n  text-shadow: -1px 0 #ffa800;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=');\n\n}\n\n.player::before {\n  animation-name: glitch-animation-2;\n  animation-duration: 6s;\n  left: -4px;\n  text-shadow: 1px 0 #00d8ff;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAALElEQVQYV2NkYGD4/x9IMAIxAxoDmzhIHfU0gCxFB9S1AacfsFmNJQzAoQIAH84j/OCkeYUAAAAASUVORK5CYII=');\n\n}\n\n.infos{\n  top:0px;\n  right:0px;\n  width:250px;\n  background:#020;\n\n}\n\n.infos ul{\n  position:relative;\n list-style-type: none;\n height:100%;\n}\n\n.infos ul li{\nposition:relative;\ndisplay:block;\nwidth:100%;\nheight:25px;\nborder:1px solid red;\nmargin-bottom:2px;\n}\n.title-ctrl{\n  position:absolute;\n  top:0px;\n  left:0px;\n  width:100%;\n  height:100%;\n  z-index: 999;\n}\n.title-ctrl span{\n  display:inline-block;\n  left:2px;\n}\n.title-ctrl input{\n\n  display:inline-block;\n  position:absolute;\n  right:2px;\n}\n.load-all{\n  width:100%;\n}\n\n\n.progress-wrap {\n  background: #000;\n    width: 100%;\n  margin: 0px ;\n  overflow: hidden;\n  position: relative;\n    height: 20px;\n}\n .progress-bar {\n  background: #ddd;\n  left: 0;\n  position: relative;\n  height: 100%;\n  width:0px;\n  top: 0;\n}\n\n\n.videoControl {\n  position: relative;\n  width:100%;\n  height: 140px;\n  margin-top: -5px;\n  background: rgba(0,255,0,0.6);\n\n}\n\n.playBtn {\n\n  background: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5wbGF5PC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoIEJldGEuPC9kZXNjPjxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPjxnIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIGZpbGw9IiMwMDAwMDAiPjxwYXRoIGQ9Ik03NSwyNi4wMDg1MTU0IEM3NSwyMS41ODU1MzQ1IDcxLjk4NDg3NiwxOS45Mjk2NzkzIDY4LjI1Njc3NzUsMjIuMzE1NjYyNCBMMzEuNzQzMjIyNSw0NS42ODQzMzc2IEMyOC4wMTkwNDM1LDQ4LjA2NzgxMjEgMjguMDE1MTI0LDUxLjkyOTY3OTMgMzEuNzQzMjIyNSw1NC4zMTU2NjI0IEw2OC4yNTY3Nzc1LDc3LjY4NDMzNzYgQzcxLjk4MDk1NjUsODAuMDY3ODEyMSA3NSw3OC40MjE5NDUgNzUsNzMuOTkxNDg0NiBMNzUsMjYuMDA4NTE1NCBMNzUsMjYuMDA4NTE1NCBaIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MS45NzQzMDksIDUwLjAwMDE5MCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNTEuOTc0MzA5LCAtNTAuMDAwMTkwKSAiLz48L2c+PC9nPjwvc3ZnPg==\")\n}\n\n.pauseBtn {\n\n  background: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5wYXVzZTwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaCBCZXRhLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj48ZyBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiBmaWxsPSIjMDAwMDAwIj48cGF0aCBkPSJNMjIsMjkuOTkzNjc3NyBDMjIsMjUuNTc4ODkxNCAyNS41ODAwNzYxLDIyIDI5Ljk5MTY1MjUsMjIgTDM4LjAwODM0NzUsMjIgQzQyLjQyMjAxNTMsMjIgNDYsMjUuNTg4MjQwNSA0NiwyOS45OTM2Nzc3IEw0Niw3MC4wMDYzMjIzIEM0Niw3NC40MjExMDg2IDQyLjQxOTkyMzksNzggMzguMDA4MzQ3NSw3OCBMMjkuOTkxNjUyNSw3OCBDMjUuNTc3OTg0Nyw3OCAyMiw3NC40MTE3NTk1IDIyLDcwLjAwNjMyMjMgTDIyLDI5Ljk5MzY3NzcgTDIyLDI5Ljk5MzY3NzcgWiBNNTQsMjkuOTkzNjc3NyBDNTQsMjUuNTc4ODkxNCA1Ny41ODAwNzYxLDIyIDYxLjk5MTY1MjUsMjIgTDcwLjAwODM0NzUsMjIgQzc0LjQyMjAxNTMsMjIgNzgsMjUuNTg4MjQwNSA3OCwyOS45OTM2Nzc3IEw3OCw3MC4wMDYzMjIzIEM3OCw3NC40MjExMDg2IDc0LjQxOTkyMzksNzggNzAuMDA4MzQ3NSw3OCBMNjEuOTkxNjUyNSw3OCBDNTcuNTc3OTg0Nyw3OCA1NCw3NC40MTE3NTk1IDU0LDcwLjAwNjMyMjMgTDU0LDI5Ljk5MzY3NzcgTDU0LDI5Ljk5MzY3NzcgWiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIvPjwvZz48L2c+PC9zdmc+\")\n}\n\n.playctrl{\n  cursor:pointer;\n  position:absolute;\n  left:5px;\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n}\n.playlist-position{\n  position:relative;\n  display:block;\n  color:lime;\n}\n.currentdata{\n   text-align: left;\n  position:relative;\n  display:block;\n  width:calc(100% - 40px);\n  height:35px;\n  margin-left:40px;\n  top:1px;\n  padding-left:5px;\n\n}\n#currentmedia{\n  text-align: left;\n  position:relative;\n  display:block;\n  color:lime;\n}\n#seekbar {\n  background-color: #000;\n  position: relative;\n  height: 5px;\n  width: 100%;\n}\n\n#seekbar span {\n  background-color: red;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 5px;\n  width: 0%;\n}\n/* following rule is for hiding Stack Overflow's console  */\n.as-console-wrapper{ display: none !important;}\n\n#fullButton {\n  float: right;\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  background: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPkZ1bGwgU2NyZWVuIEZpbGxlZDwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTg1Ljk5NjM4LDYgQzkwLjQxNjY1NzMsNiA5NCw5LjU4NjE4MjQ3IDk0LDE0LjAwMzYyIEw5NCw4NS45OTYzOCBDOTQsOTAuNDE2NjU3MyA5MC40MTM4MTc1LDk0IDg1Ljk5NjM4LDk0IEwxNC4wMDM2Miw5NCBDOS41ODMzNDI3Miw5NCA2LDkwLjQxMzgxNzUgNiw4NS45OTYzOCBMNiwxNC4wMDM2MiBDNiw5LjU4MzM0MjcyIDkuNTg2MTgyNDcsNiAxNC4wMDM2Miw2IEw4NS45OTYzOCw2IEw4NS45OTYzOCw2IFogTTU3LjU1MTE0NTQsNzkuNTkyNzc1OSBMNzkuNzY5NTUyNiw3OS43Njk1NTI2IEw3OS41OTI3NzU5LDU3LjU1MTE0NTQgTDcxLjUxOTk3MzUsNTcuNDkyMjE5OCBMNzEuNTk2MjMwMSw2NS45MzkzNzU5IEw1OC42NTY4NTQyLDUzIEw1Myw1OC42NTY4NTQyIEw2NS45MzkzNzU5LDcxLjU5NjIzMDEgTDU3LjQ5MjIxOTgsNzEuNTE5OTczNSBMNTcuNTUxMTQ1NCw3OS41OTI3NzU5IEw1Ny41NTExNDU0LDc5LjU5Mjc3NTkgWiBNNDIuMjE4NDA3MywyMC4xNzY3NzY3IEwyMCwyMCBMMjAuMTc2Nzc2Nyw0Mi4yMTg0MDczIEwyOC4yNDk1NzkxLDQyLjI3NzMzMjggTDI4LjE3MzMyMjUsMzMuODMwMTc2NyBMNDEuMTEyNjk4NCw0Ni43Njk1NTI2IEw0Ni43Njk1NTI2LDQxLjExMjY5ODQgTDMzLjgzMDE3NjcsMjguMTczMzIyNSBMNDIuMjc3MzMyOCwyOC4yNDk1NzkxIEw0Mi4yMTg0MDczLDIwLjE3Njc3NjcgTDQyLjIxODQwNzMsMjAuMTc2Nzc2NyBaIi8+PC9nPjwvZz48L3N2Zz4=\")\n}\n", ""]);

// exports


/***/ }),
/* 15 */
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
/* 16 */
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

var	fixUrls = __webpack_require__(17);

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
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);




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

/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
  let webms = [];
  let requestindex = 0;
  let index = 1;
  query4chanAPI(index, webms, () => {
    cb(webms);
  });
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);




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
      qs('.load-nsfw4chan .progress-bar').style.width = index / 11 * 100 + "%";

      if (index === 11) {
        return cb();
      } else {
        querynsfw4chanAPI(index, array, cb);
      }
    }, 1000);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
  let webms = [];
  let requestindex = 0;
  let index = 1;
  querynsfw4chanAPI(index, webms, () => {
    cb(webms);
  });
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);




const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);




const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);




const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);




const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);




const Y = a => (a => a(a))(b => a(a => b(b)(a)));

const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

function scrap(url, next) {
  try {
    console.log('do ' + url);
    __WEBPACK_IMPORTED_MODULE_0_request___default.a.get({
      url: url,
      timeout: 1200
    }, (error, response, html) => {
      console.log(url + ' error:' + error, response);

      if (!error) {
        let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
        console.log($('video').get(0).attribs.src);

        if ($('video').get(0).attribs.src) {
          next('https:' + $('video').get(0).attribs.src);
        } else {
          next(null);
        }
      } else {
        next(null);
      } //  qs('.load-wobm .progress-bar').style.width=(o/Number(requestindex2))*100+"%";
      //
      //  webms.push("https://b.w0bm.com/"+o+".webm")
      // if(wobindex===Number(requestindex2)){
      // cb(webms)
      // }

    });
  } catch (e) {
    console.log(e);
    next(null);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
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
          console.log('============', requestindex2);
          let webms = [];
          let wobindex = 0;
          let o = 1;
          let fn = Y(fn => () => {
            scrap('https://w0bm.com/' + o, url => {
              console.log(o, 100 - o / requestindex2 * 100);
              qs('.load-wobm .progress-bar').style.width = o / Number(requestindex2) * 100 + "%";
              o++;
              console.log(o, requestindex2, url);

              if (url) {
                webms.push(url);
              }

              if (o <= requestindex2) {
                fn();
              } else {
                cb(webms);
              }
            });
          });
          fn(); //   for(let o=1;o<=Number(requestindex2);o++){
          // }
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleanarray__ = __webpack_require__(1);



const Y = a => (a => a(a))(b => a(a => b(b)(a)));



const qs = e => {
  return document.querySelector(e);
};

const qsa = e => {
  return document.querySelectorAll(e);
};

/* harmony default export */ __webpack_exports__["a"] = (function (playlist, cb) {
  console.log('webm.xyz filling');
  let webmz = [];
  __WEBPACK_IMPORTED_MODULE_0_request___default.a.get("https://webm.xyz/", (error, response, html) => {
    if (!error) {
      let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
      let pagesmax = $('#pagination').data('pages');
      console.log(pagesmax);
      let o = Number(pagesmax);
      let fn = Y(fn => () => {
        console.log(o);
        __WEBPACK_IMPORTED_MODULE_0_request___default.a.get({
          url: "https://webm.xyz/page/" + o,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Referer': 'https://webm.xyz/'
          },
          timeout: 1200
        }, (error, response, html) => {
          if (!error) {
            let $ = __WEBPACK_IMPORTED_MODULE_1_cheerio___default.a.load(html);
            $('.webm-list-item').each(function (i, elem) {
              webmz.push('https://ungern.webm.xyz/' + elem.attribs["data-href"].split('webm/')[1] + '.webm');
              console.log('https://ungern.webm.xyz/' + elem.attribs["data-href"].split('webm/')[1] + '.webm'); //console.log(elem.data('href'))
            }); //      for(let i of els){
            // console.log(i.get(0).attribs)
            //
            //
            //      }
          }

          qs('.load-webmxyz .progress-bar').style.width = 100 - o / pagesmax * 100 + "%";
          o--;

          if (o >= 0) {
            fn();
          } else {
            cb(webmz);
          }
        });
      });
      fn();
    }
  });
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("http-https");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("file-type");

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map