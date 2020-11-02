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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\n\nconst eventListeners = (canvas,game) => {\n    // canvas.addEventListener(\"click\",()=>( console.log(\"listening\") ))\n\n    document.addEventListener(\"keydown\", (event)=>{\n        switch(event.keyCode){\n            case 65: // A Key\n                return console.log(\"a key\")\n            case 83: // S Key\n                return console.log(\"s key\")\n            case 68: // D Key\n                return console.log(\"d key\")\n            case 70: // F Key\n                return console.log(\"f key\")\n            case 74: // J Key\n                return console.log(\"j key\")\n            case 75: // K Key\n                return console.log(\"k key\")\n            case 76: // L Key\n                return console.log(\"l key\")\n            case 186: // : Key\n                return console.log(\"; key\")\n            case 32: // space Key\n                return console.log(\"space key\")\n            case 27: // Escape key.\n                return game.stop();\n            default:\n                return;\n        }\n    })\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);\n\n//# sourceURL=webpack://keyrevolution/./javascript/event_listeners.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listeners */ \"./javascript/event_listeners.js\");\n\n\nclass Game { \n    constructor(canvas,width,height){\n        // Set the width/height of the game screen.\n        this.canvas = canvas;\n        this.canvas.width = width;\n        this.canvas.height = height;\n\n        // Game Over Check\n        this.gameOver = false;\n\n        this.ctx = this.canvas.getContext(\"2d\");\n        (0,_event_listeners__WEBPACK_IMPORTED_MODULE_0__.default)(this.canvas,this);\n\n    }\n\n    // Temporary stop game;\n    stop() {\n        this.gameOver = true;\n    }\n    \n    // Game loop\n    start(){\n        if(!this.gameOver){\n            this.draw();\n        }\n    }\n\n    draw(){\n        requestAnimationFrame(this.draw.bind(this))\n    }\n\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://keyrevolution/./javascript/game.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./javascript/game.js\");\n\n\nconst GAME_X = 1000;\nconst GAME_Y = 600;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    const canvasEl = document.getElementById('game-canvas')\n    const gameEl = new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvasEl,GAME_X,GAME_Y);\n\n    // gameEl.start();\n\n})\n\n//# sourceURL=webpack://keyrevolution/./javascript/index.js?");

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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./javascript/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;