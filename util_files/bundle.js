/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/event_listeners.js":
/*!***************************************!*\
  !*** ./javascript/event_listeners.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar eventListeners = function eventListeners(canvas, game, ctx) {\n  // clicking difficulties buttons.\n  // Add functionality to disable buttons completely\n  var BUTTON_NAMES = [\"a-button\", \"s-button\", \"d-button\", \"f-button\", \"j-button\", \"k-button\", \"l-button\", \"colon-button\", \"space-button\"];\n  var easy = document.getElementById(\"easy-button\");\n\n  easy.onclick = function () {\n    BUTTON_NAMES.forEach(function (idName) {\n      var ele = document.getElementById(idName);\n\n      if (idName === \"a-button\" || idName === \"s-button\" || idName === \"l-button\" || idName === \"colon-button\") {\n        ele.className = idName;\n      } else {\n        ele.className = \"disabled-button\";\n      }\n    });\n    game.setKeyMap(\"easy\");\n  };\n\n  var medium = document.getElementById(\"medium-button\");\n\n  medium.onclick = function () {\n    BUTTON_NAMES.forEach(function (idName) {\n      var ele = document.getElementById(idName);\n\n      if (idName === \"a-button\" || idName === \"s-button\" || idName === \"l-button\" || idName === \"colon-button\" || idName === \"d-button\" || idName === \"k-button\") {\n        ele.className = idName;\n      } else {\n        ele.className = \"disabled-button\";\n      }\n    });\n    game.setKeyMap(\"medium\");\n  };\n\n  var hard = document.getElementById(\"hard-button\");\n\n  hard.onclick = function () {\n    BUTTON_NAMES.forEach(function (idName) {\n      var ele = document.getElementById(idName);\n\n      if (idName === \"a-button\" || idName === \"s-button\" || idName === \"l-button\" || idName === \"colon-button\" || idName === \"d-button\" || idName === \"k-button\" || idName === \"j-button\" || idName === \"f-button\") {\n        ele.className = idName;\n      } else {\n        ele.className = \"disabled-button\";\n      }\n    });\n    game.setKeyMap(\"hard\");\n  };\n\n  var extreme = document.getElementById(\"extreme-button\");\n\n  extreme.onclick = function () {\n    BUTTON_NAMES.forEach(function (idName) {\n      var ele = document.getElementById(idName);\n      ele.className = idName;\n    });\n    game.setKeyMap(\"extreme\");\n  }; // Listening for key presses\n\n\n  document.addEventListener(\"keydown\", function (event) {\n    switch (event.keyCode) {\n      case 65:\n        // A Key\n        game.handleKey(\"a-button\", \"a\");\n        return;\n\n      case 83:\n        // S Key\n        game.handleKey(\"s-button\", \"s\");\n        return;\n\n      case 68:\n        // D Key\n        game.handleKey(\"d-button\", \"d\");\n        return;\n\n      case 70:\n        // F Key\n        game.handleKey(\"f-button\", \"f\");\n        return;\n\n      case 74:\n        // J Key\n        game.handleKey(\"j-button\", \"j\");\n        return;\n\n      case 75:\n        // K Key\n        game.handleKey(\"k-button\", \"k\");\n        return;\n\n      case 76:\n        // L Key\n        game.handleKey(\"l-button\", \"l\");\n        return;\n\n      case 186:\n        // : Key\n        game.handleKey(\"colon-button\", \"colon\");\n        return;\n\n      case 32:\n        // space Key\n        game.handleKey(\"space-button\", \"space\");\n        return;\n\n      case 27:\n        // Escape key.dff\n        return game.stop(\"escape\");\n\n      case 82:\n        return game.stop('r');\n\n      default:\n        return;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);\n\n//# sourceURL=webpack://keyrevolution/./javascript/event_listeners.js?");

/***/ }),

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listeners */ \"./javascript/event_listeners.js\");\n/* harmony import */ var _key_maps_easy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key_maps/easy */ \"./javascript/key_maps/easy.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n //Difficulties\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas, width, height) {\n    _classCallCheck(this, Game);\n\n    //\n    this.frameCount = 0; // Current key map set into arrays as to keep track of order.\n\n    this.currentKeyMap = '';\n    this.keys = {\n      a: [],\n      s: [],\n      d: [],\n      f: [],\n      j: [],\n      k: [],\n      l: [],\n      colon: [],\n      space: []\n    }; // Current Score\n\n    this.score = {\n      perfect: 0,\n      ok: 0,\n      bad: 0,\n      missed: 0\n    }; // Set the width/height of the game screen.\n\n    this.canvas = canvas;\n    this.canvas.width = width;\n    this.canvas.height = height; // Game Over Check\n\n    this.gameOver = false; // Score Screen\n\n    this.scoreScreen = false;\n    this.ctx = this.canvas.getContext(\"2d\");\n    (0,_event_listeners__WEBPACK_IMPORTED_MODULE_0__.default)(this.canvas, this, this.ctx);\n    this.setKeyMap(\"easy\");\n  }\n\n  _createClass(Game, [{\n    key: \"setKeyMap\",\n    value: function setKeyMap(difficulty) {\n      if (difficulty === \"easy\") {\n        this.keys = (0,_key_maps_easy__WEBPACK_IMPORTED_MODULE_1__.default)();\n        this.currentKeyMap = \"easy\";\n      } else if (difficulty === \"medium\") {} else if (difficulty === \"hard\") {} else {}\n    }\n  }, {\n    key: \"handleKey\",\n    value: function handleKey(button, key) {\n      // Handles if there are no keys left.\n      if (this.keys[key].length === 0) {\n        return;\n      }\n\n      var gameCanvas = document.getElementById(\"game-canvas\").getBoundingClientRect();\n      var currentButton = document.getElementById(button).getBoundingClientRect(); // Grabs Y position of button \n      // subtracts half the height of the current button in order to get the middle.\n\n      var buttonY = currentButton.top - gameCanvas.top - currentButton.height / 2; // Grabs Y position of first in line key falling down the screen.\n\n      var firstKey = this.keys[key][0]; // Takes Y Position of current key, adds frameCount to it to get the relative position.\n      // Then adds the total height of the key and divides by 2 to get the middle of the element\n\n      var keyY = firstKey.posY + this.frameCount + firstKey.height / 2; // Calculates if button is close enough to removed/counted etc\n\n      this.handleKeyAlignmentCollision(keyY, buttonY, key);\n    }\n  }, {\n    key: \"handleKeyAlignmentCollision\",\n    value: function handleKeyAlignmentCollision(keyY, buttonY, key) {\n      var overlapPosY = keyY - buttonY;\n\n      if (overlapPosY >= 15 && overlapPosY <= 35) {\n        this.keys[key].shift();\n        this.score[\"perfect\"] += 1;\n      } else if (overlapPosY >= 36 && overlapPosY <= 55 || overlapPosY <= 14 && overlapPosY >= -6) {\n        this.keys[key].shift();\n        this.score[\"ok\"] += 1;\n      } else if (overlapPosY >= 56 && overlapPosY <= 75 || overlapPosY <= -7 && overlapPosY >= -27) {\n        this.keys[key].shift();\n        this.score[\"bad\"] += 1;\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(count) {\n      var _this = this;\n\n      // Draws each element in current key map.\n      Object.keys(this.keys).forEach(function (key) {\n        _this.keys[key].forEach(function (keyElement) {\n          _this.ctx.drawImage(keyElement.img, keyElement.posX, keyElement.posY + count, keyElement.width, keyElement.height);\n        });\n      });\n    }\n  }, {\n    key: \"keyCleanUp\",\n    value: function keyCleanUp(count) {\n      var _this2 = this;\n\n      var gameCanvas = document.getElementById(\"game-canvas\").getBoundingClientRect(); // Checks each array of keys to see if they are out of bounds to be removed from play.\n\n      Object.keys(this.keys).forEach(function (key) {\n        var newKeyArr = [];\n        var currentButton = document.getElementById(\"\".concat(key, \"-button\")).getBoundingClientRect();\n        var buttonBounds = currentButton.top - gameCanvas.top - currentButton.height / 2;\n\n        _this2.keys[key].forEach(function (keyElement) {\n          var keyElePos = keyElement.posY + count + keyElement.height / 2;\n\n          if (keyElePos - buttonBounds <= 80) {\n            newKeyArr.push(keyElement);\n          }\n        });\n\n        if (_this2.keys[key].length != newKeyArr) {\n          _this2.score[\"missed\"] += _this2.keys[key].length - newKeyArr.length;\n        }\n\n        _this2.keys[key] = newKeyArr;\n      });\n    } // Soon to be modal to show current screen/gameover etc.\n\n  }, {\n    key: \"showPauseScreen\",\n    value: function showPauseScreen() {\n      var modal = document.getElementById(\"score-screen-outer-modal\");\n\n      if (modal.style.display === \"block\") {\n        modal.style.display = \"none\";\n        this.scoreScreen = false;\n      } else {\n        modal.style.display = \"block\";\n        this.scoreScreen = true;\n      } // this.start();\n\n    } // Temporary stop game\n\n  }, {\n    key: \"checkGameOver\",\n    value: function checkGameOver() {\n      var _this3 = this;\n\n      var over = true;\n      Object.keys(this.keys).forEach(function (key) {\n        if (_this3.keys[key].length > 0) {\n          over = false;\n        }\n      });\n      this.gameOver = over;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop(key) {\n      //Reset Function\n      if (key === \"r\" && this.gameOver === true) {\n        this.showPauseScreen();\n        this.handleReset();\n      } else if (key === \"escape\") {\n        this.gameOver ? this.gameOver = false : this.gameOver = true;\n\n        if (this.scoreScreen) {\n          this.showPauseScreen();\n          this.start();\n        }\n      }\n    }\n  }, {\n    key: \"handleReset\",\n    value: function handleReset() {\n      // Sets keys to origional of keyMap specificed\n      this.setKeyMap(this.currentKeyMap); // Resets frame count\n\n      this.frameCount = 0;\n      this.gameOver = false;\n      this.start();\n    } // Game loop\n\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.draw(this.frameCount++);\n      this.keyCleanUp(this.frameCount);\n\n      if (!this.gameOver) {\n        requestAnimationFrame(this.start.bind(this));\n        this.checkGameOver();\n      } else {\n        this.showPauseScreen();\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://keyrevolution/./javascript/game.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./javascript/game.js\");\n\nvar GAME_X = 1000;\nvar GAME_Y = 600;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvasEl = document.getElementById('game-canvas');\n  var gameEl = new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvasEl, GAME_X, GAME_Y);\n  gameEl.start();\n  window.score = gameEl.score;\n});\n\n//# sourceURL=webpack://keyrevolution/./javascript/index.js?");

/***/ }),

/***/ "./javascript/key_maps/easy.js":
/*!*************************************!*\
  !*** ./javascript/key_maps/easy.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keys */ \"./javascript/keys.js\");\n/* harmony import */ var _imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imgs/Alexzander_Archibeque.jpg */ \"./imgs/Alexzander_Archibeque.jpg\");\n\n\n\nfunction easy() {\n  var keyMapObj = {\n    a: [],\n    s: [],\n    d: [],\n    f: [],\n    j: [],\n    k: [],\n    l: [],\n    colon: [],\n    space: []\n  };\n  keyMapObj[\"a\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 10, 0));\n  keyMapObj[\"a\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 10, -70));\n  keyMapObj[\"a\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 10, -140));\n  keyMapObj[\"s\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 100, -100));\n  keyMapObj[\"s\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 100, -140));\n  keyMapObj[\"s\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 100, -240));\n  keyMapObj[\"s\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 100, -290));\n  keyMapObj[\"l\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 820, -120));\n  keyMapObj[\"l\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 820, -180));\n  keyMapObj[\"colon\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 910, -220));\n  keyMapObj[\"colon\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.default(_imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__.default, 80, 80, 910, -280));\n  return keyMapObj;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (easy);\n\n//# sourceURL=webpack://keyrevolution/./javascript/key_maps/easy.js?");

/***/ }),

/***/ "./javascript/keys.js":
/*!****************************!*\
  !*** ./javascript/keys.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Key = function Key(img, width, height, posX, posY) {\n  _classCallCheck(this, Key);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n  keysImg.src = img;\n  this.img = keysImg;\n  this.width = width;\n  this.height = height; // Where it starts on the canvas\n\n  this.posX = posX;\n  this.posY = posY;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Key);\n\n//# sourceURL=webpack://keyrevolution/./javascript/keys.js?");

/***/ }),

/***/ "./imgs/Alexzander_Archibeque.jpg":
/*!****************************************!*\
  !*** ./imgs/Alexzander_Archibeque.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"79f8fbc765311938314ba7e00984144b.jpg\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/Alexzander_Archibeque.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./javascript/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;