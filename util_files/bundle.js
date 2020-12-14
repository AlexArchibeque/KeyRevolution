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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar eventListeners = function eventListeners(canvas, game, ctx) {\n  // clicking difficulties buttons.\n  // Add functionality to disable buttons completely\n  var BUTTON_NAMES = [\"a-button\", \"s-button\", \"d-button\", \"f-button\", \"j-button\", \"k-button\", \"l-button\", \"colon-button\", \"space-button\"];\n  var edit = document.getElementById(\"edit-button\");\n\n  edit.onclick = function () {\n    game.setKeyMap(\"edit\");\n    game.stop(\"restart\");\n  };\n\n  var easy = document.getElementById(\"easy-button\");\n\n  easy.onclick = function () {\n    game.setKeyMap(\"easy\");\n    game.stop(\"restart\");\n  };\n\n  var medium = document.getElementById(\"medium-button\");\n\n  medium.onclick = function () {\n    game.setKeyMap(\"medium\");\n    game.stop(\"restart\");\n  };\n\n  var hard = document.getElementById(\"hard-button\");\n\n  hard.onclick = function () {\n    game.setKeyMap(\"hard\");\n    game.stop(\"restart\");\n  }; // Audio event listeners\n\n\n  var volumeDown1 = document.getElementById(\"volume-down-1\");\n\n  volumeDown1.onclick = function () {\n    game.handleAudio(\"down\");\n  };\n\n  var volumeUp1 = document.getElementById(\"volume-up-1\");\n\n  volumeUp1.onclick = function () {\n    game.handleAudio(\"up\");\n  };\n\n  var volumeDown = document.getElementById(\"volume-down\");\n\n  volumeDown.onclick = function () {\n    game.handleAudio(\"down\");\n  };\n\n  var volumeUp = document.getElementById(\"volume-up\");\n\n  volumeUp.onclick = function () {\n    game.handleAudio(\"up\");\n  };\n\n  var playButton = document.getElementById(\"play-button\");\n\n  playButton.onclick = function () {\n    if (game.audio.paused) {\n      game.audio.play();\n    } else {\n      game.audio.pause();\n    }\n  }; // Score event Listeners\n\n\n  var submitScoreButton = document.getElementById(\"submit-score\");\n\n  submitScoreButton.onclick = function () {\n    submitScoreButton.disabled = true;\n    submitScoreButton.classList = \"disabled-for-now\";\n    game.submitScore(document.getElementById('name').value);\n  }; // Difficulty event listeners\n\n\n  var buttercup = document.getElementById(\"buttercup\");\n\n  buttercup.onclick = function () {\n    game.songName = \"Buttercup\";\n    game.setKeyMap(game.currentKeyMap);\n    game.stop(\"restart\");\n  };\n\n  var hillsofradience = document.getElementById(\"hillsofradience\");\n\n  hillsofradience.onclick = function () {\n    game.songName = \"Hills of Radiance\";\n    game.setKeyMap(game.currentKeyMap);\n    game.stop(\"restart\");\n  };\n\n  var dummy = document.getElementById(\"dummy\");\n\n  dummy.onclick = function () {\n    game.songName = \"Dummy\";\n    game.setKeyMap(game.currentKeyMap);\n    game.stop(\"restart\");\n  }; // Listening for key presses\n\n\n  document.addEventListener(\"keydown\", function (event) {\n    switch (event.code) {\n      case \"KeyA\":\n        // A Key\n        game.handleKey(\"a-button\", \"a\");\n        game.editMode(\"a\");\n        return;\n\n      case \"KeyS\":\n        // S Key\n        game.handleKey(\"s-button\", \"s\");\n        game.editMode(\"s\");\n        return;\n\n      case \"KeyD\":\n        // D Key\n        game.handleKey(\"d-button\", \"d\");\n        game.editMode(\"d\");\n        return;\n\n      case \"KeyF\":\n        // F Key\n        game.handleKey(\"f-button\", \"f\");\n        game.editMode(\"f\");\n        return;\n      // case \"KeyJ\": // J Key\n      //     game.handleKey(\"j-button\",\"j\");\n      //     return;\n      // case \"KeyK\": // K Key\n      //     game.handleKey(\"k-button\",\"k\");\n      //     return;\n      // case \"KeyL\": // L Key\n      //     game.handleKey(\"l-button\",\"l\");\n      //     return;\n      // case \"Semicolon\": // : Key\n      //     game.handleKey(\"colon-button\",\"colon\");\n      //     return;\n\n      case \"Space\":\n        // space Key\n        game.handleKey(\"space-button\", \"space\");\n        return;\n\n      case \"Escape\":\n        // Escape key.dff\n        return game.stop(\"escape\");\n\n      case \"KeyR\":\n        return game.stop('r');\n\n      default:\n        return;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);\n\n//# sourceURL=webpack://keyrevolution/./javascript/event_listeners.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listeners */ \"./javascript/event_listeners.js\");\n/* harmony import */ var _key_maps_easy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key_maps/easy */ \"./javascript/key_maps/easy.js\");\n/* harmony import */ var _key_maps_medium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key_maps/medium */ \"./javascript/key_maps/medium.js\");\n/* harmony import */ var _key_maps_hard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key_maps/hard */ \"./javascript/key_maps/hard.js\");\n/* harmony import */ var _key_maps_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key_maps/keys */ \"./javascript/key_maps/keys.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n //Difficulties\n\n\n\n // Edit Key\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas, width, height) {\n    _classCallCheck(this, Game);\n\n    // Keeps track of where we are in animation frames.\n    this.frameCount = 0; // Audio Stuff\n\n    this.audio;\n    this.audioVolume = 1.0; // Current key map set into arrays as to keep track of order.\n\n    this.currentKeyMap = ''; // handles of clicking difficulties\n\n    this.reset = false; // handles clicking on song\n\n    this.songName = \"Buttercup\"; // Streak of keys hit\n\n    this.streak = 0; // Score\n\n    this.numScore = {\n      perfect: 0,\n      ok: 0,\n      bad: 0,\n      total: 0\n    }; // Local Storage Scores\n\n    this.storedScores;\n    this.keys = {\n      // a:[new KeyA(1,-10000)],\n      a: [],\n      s: [],\n      d: [],\n      f: [] // j:[],\n      // k:[],\n      // l:[],\n      // colon:[],\n      // space:[]\n\n    };\n    this.editKeyMap = {\n      a: [],\n      s: [],\n      d: [],\n      f: []\n    }; // Current Score\n\n    this.score = {\n      perfect: 0,\n      ok: 0,\n      bad: 0,\n      missed: 0\n    };\n    this.total = 0; // Set the width/height of the game screen.\n\n    this.canvas = canvas;\n    this.canvas.width = width;\n    this.canvas.height = height; // Game Over Check\n\n    this.gameOver = false;\n    this.finished = false; // Allows the use of r on finish screen\n\n    this.finishScreen; // Score Screen\n\n    this.scoreScreen = false;\n    this.ctx = this.canvas.getContext(\"2d\");\n    (0,_event_listeners__WEBPACK_IMPORTED_MODULE_0__.default)(this.canvas, this, this.ctx);\n    this.setKeyMap(\"easy\");\n  }\n\n  _createClass(Game, [{\n    key: \"submitScore\",\n    value: function submitScore(name) {\n      // this.currentKeyMap == difficulty\n      // this.songName == song's name\n      var storageName = \"\".concat(this.currentKeyMap, \"-\").concat(this.songName);\n      var currentScores = JSON.parse(window.localStorage.getItem(storageName));\n      var newScore = [name, this.numScore.total];\n\n      if (currentScores === null) {\n        window.localStorage.setItem(storageName, JSON.stringify([newScore]));\n      } else {\n        currentScores.push(newScore);\n        window.localStorage.setItem(storageName, JSON.stringify(currentScores));\n      }\n\n      this.retrieveScores();\n    }\n  }, {\n    key: \"retrieveScores\",\n    value: function retrieveScores() {\n      var storageName = \"\".concat(this.currentKeyMap, \"-\").concat(this.songName);\n      this.storedScores = JSON.parse(window.localStorage.getItem(storageName));\n      this.renderScores();\n    }\n  }, {\n    key: \"renderScores\",\n    value: function renderScores() {\n      var htmlString = '';\n\n      if (this.storedScores) {\n        this.sortArray(this.storedScores).forEach(function (entry) {\n          htmlString += \"<li> <p>\".concat(entry[0], \"</p> <p>\").concat(entry[1], \"</p></li>\");\n        });\n        document.getElementById(\"num-score-ul\").innerHTML = htmlString;\n      } else {\n        document.getElementById(\"num-score-ul\").innerHTML = '<p>None!</p>';\n      }\n    }\n  }, {\n    key: \"sortArray\",\n    value: function sortArray(arr) {\n      if (arr.length === 1) {\n        return arr;\n      }\n\n      var sorted = false;\n\n      while (!sorted) {\n        sorted = true;\n\n        for (var i = 0; i < arr.length - 1; i++) {\n          if (arr[i + 1][1] > arr[i][1]) {\n            var _ref = [arr[i + 1], arr[i]];\n            arr[i] = _ref[0];\n            arr[i + 1] = _ref[1];\n            sorted = false;\n          }\n        }\n      }\n\n      return arr;\n    }\n  }, {\n    key: \"editMode\",\n    value: function editMode(key) {\n      var i = 0;\n      this.editKeyMap[\"\".concat(key)].push(this.frameCount);\n      i = i++;\n    }\n  }, {\n    key: \"setKeyMap\",\n    value: function setKeyMap(difficulty) {\n      if (this.audio) {\n        this.audio.pause();\n      }\n\n      this.frameCount = 0;\n      this.numScore = {\n        perfect: 0,\n        ok: 0,\n        bad: 0,\n        total: 0\n      };\n      this.streak = 0;\n      this.score = {\n        perfect: 0,\n        ok: 0,\n        bad: 0,\n        missed: 0\n      };\n      document.getElementById(\"streak-number\").innerHTML = \"<p class=\\\"weak-streak\\\">Streak: \".concat(this.streak, \" </p>\");\n      document.getElementById(\"streak-score\").innerHTML = \"<p class=\\\"weak-score\\\">Score: \".concat(this.numScore.total, \" </p>\");\n      document.getElementById(\"streak-type\").innerHTML = \"<p class=\\\"missed-class\\\">Reset</p>\";\n\n      if (difficulty === \"easy\") {\n        var easyArr = (0,_key_maps_easy__WEBPACK_IMPORTED_MODULE_1__.default)(this.songName);\n        this.keys = easyArr[0];\n        this.audio = easyArr[1];\n        this.audio.volume = this.audioVolume;\n        this.total = easyArr[2];\n        this.currentKeyMap = \"easy\";\n      } else if (difficulty === \"medium\") {\n        var mediumArr = (0,_key_maps_medium__WEBPACK_IMPORTED_MODULE_2__.default)(this.songName);\n        this.keys = mediumArr[0];\n        this.audio = mediumArr[1];\n        this.audio.volume = this.audioVolume;\n        this.total = mediumArr[2];\n        this.currentKeyMap = \"medium\";\n      } else if (difficulty === \"hard\") {\n        var hardArr = (0,_key_maps_hard__WEBPACK_IMPORTED_MODULE_3__.default)(this.songName);\n        this.keys = hardArr[0];\n        this.audio = hardArr[1];\n        this.audio.volume = this.audioVolume;\n        this.total = hardArr[2];\n        this.currentKeyMap = \"hard\";\n      } else if (difficulty === \"edit\") {\n        var Arr = (0,_key_maps_easy__WEBPACK_IMPORTED_MODULE_1__.default)(this.songName);\n        this.audio = Arr[1];\n        this.audio.volume = this.audioVolume;\n        this.keys = {\n          a: [new _key_maps_keys__WEBPACK_IMPORTED_MODULE_4__.KeyA(1, -10000)],\n          s: [],\n          d: [],\n          f: [] // j:[],\n          // k:[],\n          // l:[],\n          // colon:[],\n          // space:[]\n\n        };\n        this.editKeyMap = {\n          a: [],\n          s: [],\n          d: [],\n          f: []\n        };\n        this.currentKeyMap = \"edit\";\n      } else {}\n    } // Audio Methods\n\n  }, {\n    key: \"handleAudio\",\n    value: function handleAudio(input) {\n      if (input === \"down\" && this.audioVolume >= 0.05) {\n        this.audioVolume -= 0.05;\n      } else if (input === \"up\" && this.audioVolume <= 0.95) {\n        this.audioVolume += 0.05;\n      }\n\n      var volumePercentage = document.getElementById(\"volume-percentage\");\n      volumePercentage.innerHTML = \"Volume: \".concat(Math.floor(this.audioVolume * 100), \" \");\n      document.getElementById(\"volume-percentage-1\").innerHTML = \"Volume: \".concat(Math.floor(this.audioVolume * 100), \" \");\n      this.audio.volume = this.audioVolume;\n    }\n  }, {\n    key: \"stopAudio\",\n    value: function stopAudio() {\n      this.audio.pause();\n      this.audio.currentTime = 0;\n    } // End of Audio Methods\n\n  }, {\n    key: \"handleKeyAnimation\",\n    value: function handleKeyAnimation(button) {\n      var currentButton = document.getElementById(button);\n\n      if (currentButton.className != \"disabled-button\") {\n        currentButton.className = \"pressed-button\";\n        setTimeout(function () {\n          currentButton.className = \"\";\n        }, 100);\n      }\n    }\n  }, {\n    key: \"handleKey\",\n    value: function handleKey(button, key) {\n      // Handles if there are no keys left.\n      this.handleKeyAnimation(button);\n\n      if (this.keys[key].length === 0) {\n        return;\n      }\n\n      var gameCanvas = document.getElementById(\"game-canvas\").getBoundingClientRect();\n      var currentButton = document.getElementById(button).getBoundingClientRect(); // Grabs Y position of button \n      // subtracts half the height of the current button in order to get the middle.\n\n      var buttonY = currentButton.top - gameCanvas.top - currentButton.height / 2; // Grabs Y position of first in line key falling down the screen.\n\n      var firstKey = this.keys[key][this.keys[key].length - 1]; // Takes Y Position of current key, adds frameCount to it to get the relative position.\n      // Then adds the total height of the key and divides by 2 to get the middle of the element\n\n      var keyY = firstKey.posY + this.frameCount + firstKey.height / 2; // Calculates if button is close enough to removed/counted etc\n\n      this.handleKeyAlignmentCollision(keyY, buttonY, key);\n    }\n  }, {\n    key: \"handleKeyAlignmentCollision\",\n    value: function handleKeyAlignmentCollision(keyY, buttonY, key) {\n      var overlapPosY = keyY - buttonY;\n      var streakType = document.getElementById(\"streak-type\");\n      var positivePosY = 0;\n\n      if (overlapPosY < 0) {\n        positivePosY = overlapPosY * -1;\n      }\n\n      if (overlapPosY >= 15 && overlapPosY <= 35) {\n        this.keys[key].pop();\n        this.score[\"perfect\"] += 1;\n        this.numScore[\"perfect\"] += Math.ceil(100 * (overlapPosY * .01));\n        this.numScore[\"total\"] += Math.ceil(100 * (overlapPosY * .01));\n        streakType.innerHTML = \"<p class='perfect-class'>PERFECT!!</p>\";\n        this.streak += 1;\n      } else if (overlapPosY >= 36 && overlapPosY <= 55 || overlapPosY <= 14 && overlapPosY >= -6) {\n        this.keys[key].pop();\n        this.score[\"ok\"] += 1;\n\n        if (positivePosY > 0) {\n          this.numScore[\"ok\"] += Math.ceil(50 * (positivePosY * .01));\n          this.numScore[\"total\"] += Math.ceil(50 * (positivePosY * .01));\n        } else {\n          this.numScore[\"ok\"] += Math.ceil(50 * (overlapPosY * .01));\n          this.numScore[\"total\"] += Math.ceil(50 * (overlapPosY * .01));\n        }\n\n        streakType.innerHTML = \"<p class='ok-class'>O.K.</p>\";\n        this.streak += 1;\n      } else if (overlapPosY >= 56 && overlapPosY <= 75 || overlapPosY <= -7 && overlapPosY >= -27) {\n        this.keys[key].pop();\n        this.score[\"bad\"] += 1;\n\n        if (positivePosY > 0) {\n          this.numScore[\"bad\"] += Math.ceil(25 * (positivePosY * .01));\n          this.numScore[\"total\"] += Math.ceil(25 * (positivePosY * .01));\n        } else {\n          this.numScore[\"bad\"] += Math.ceil(25 * (overlapPosY * .01));\n          this.numScore[\"total\"] += Math.ceil(25 * (overlapPosY * .01));\n        }\n\n        streakType.innerHTML = \"<p class='bad-class'>BAD :(</p>\";\n        this.streak += 1;\n      }\n\n      if (this.streak < 30) {\n        document.getElementById(\"streak-number\").innerHTML = \"<p class=\\\"weak-streak\\\">Streak: \".concat(this.streak, \" </p>\");\n      } else if (this.streak > 30 && this.streak < 60) {\n        document.getElementById(\"streak-number\").innerHTML = \"<p class=\\\"med-streak\\\">Streak: \".concat(this.streak, \" </p>\");\n      } else if (this.streak > 60) {\n        document.getElementById(\"streak-number\").innerHTML = \"<p class=\\\"strong-streak\\\">Streak: \".concat(this.streak, \" </p>\");\n      }\n\n      if (this.numScore.total < 1000) {\n        document.getElementById(\"streak-score\").innerHTML = \"<p class=\\\"weak-score\\\">Score: \".concat(this.numScore.total, \" </p>\");\n      } else if (this.numScore.total > 1000 && this.numScore.total < 2000) {\n        document.getElementById(\"streak-score\").innerHTML = \"<p class=\\\"med-score\\\">Score: \".concat(this.numScore.total, \" </p>\");\n      } else if (this.numScore.total > 2000) {\n        document.getElementById(\"streak-score\").innerHTML = \"<p class=\\\"strong-score\\\">Score: \".concat(this.numScore.total, \" </p>\");\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(count) {\n      var _this = this;\n\n      // Draws each element in current key map.\n      Object.keys(this.keys).forEach(function (key) {\n        _this.keys[key].forEach(function (keyElement) {\n          _this.ctx.drawImage(keyElement.img, keyElement.posX, keyElement.posY + count, keyElement.width, keyElement.height);\n        });\n      });\n    }\n  }, {\n    key: \"keyCleanUp\",\n    value: function keyCleanUp(count) {\n      var _this2 = this;\n\n      var gameCanvas = document.getElementById(\"game-canvas\").getBoundingClientRect(); // Checks each array of keys to see if they are out of bounds to be removed from play.\n\n      Object.keys(this.keys).forEach(function (key) {\n        var newKeyArr = [];\n        var currentButton = document.getElementById(\"\".concat(key, \"-button\")).getBoundingClientRect();\n        var buttonBounds = currentButton.top - gameCanvas.top - currentButton.height / 2;\n\n        _this2.keys[key].forEach(function (keyElement) {\n          var keyElePos = keyElement.posY + count + keyElement.height / 2;\n\n          if (keyElePos - buttonBounds <= 80) {\n            newKeyArr.push(keyElement);\n          }\n        });\n\n        if (_this2.keys[key].length != newKeyArr.length) {\n          _this2.score[\"missed\"] += _this2.keys[key].length - newKeyArr.length;\n          document.getElementById(\"streak-type\").innerHTML = \"<p class='missed-class'>MISSED</p>\";\n          document.getElementById(\"streak-number\").innerHTML = \"Streak: 0\";\n          _this2.streak = 0;\n        }\n\n        _this2.keys[key] = newKeyArr;\n      });\n    } // Soon to be modal to show current screen/gameover etc.\n\n  }, {\n    key: \"setScreenScores\",\n    value: function setScreenScores() {\n      var perfLI = document.getElementById(\"perfect-score\");\n      perfLI.innerHTML = this.score[\"perfect\"];\n      document.getElementById(\"perf-num-score\").innerHTML = this.numScore.perfect;\n      var okLI = document.getElementById(\"ok-score\");\n      okLI.innerHTML = this.score[\"ok\"];\n      document.getElementById(\"ok-num-score\").innerHTML = this.numScore.ok;\n      var badLI = document.getElementById(\"bad-score\");\n      badLI.innerHTML = this.score[\"bad\"];\n      document.getElementById(\"bad-num-score\").innerHTML = this.numScore.bad;\n      var missedLI = document.getElementById(\"missed-score\");\n      missedLI.innerHTML = this.score[\"missed\"];\n      var totalLi = document.getElementById(\"total-score\");\n      totalLi.innerHTML = this.total;\n      document.getElementById(\"total-num-score\").innerHTML = this.numScore.total;\n    }\n  }, {\n    key: \"showPauseScreen\",\n    value: function showPauseScreen(fin) {\n      this.setScreenScores();\n      this.retrieveScores();\n      var modal = document.getElementById(\"score-screen-outer-modal\"); // Changes inner HTML depending on if game is paused or finished.\n\n      var h1Modal = document.getElementById(\"paused-or-finished\");\n      var escInstructions = document.getElementById(\"esc-to-continue\");\n      var secondaryInstructions = document.getElementById(\"secondary-instructions\");\n\n      if (fin === \"finished\") {\n        this.finishScreen = true;\n        h1Modal.innerHTML = \"Finished!\";\n        secondaryInstructions.innerHTML = \"<strong>ESC</strong>- To restart\";\n        escInstructions.innerHTML = \"Congrats!\";\n        document.getElementById(\"submit-score-form\").classList = \"show\";\n      } else if (fin === \"songOrDiffChange\") {\n        h1Modal.innerHTML = \"\".concat(this.songName.charAt(0).toUpperCase() + this.songName.slice(1), \" restart!\");\n        secondaryInstructions.innerHTML = \"Difficulty: <strong>\".concat(this.currentKeyMap.charAt(0).toUpperCase() + this.currentKeyMap.slice(1), \" </strong\");\n        escInstructions.innerHTML = \"<strong>ESC</strong> - To Start!\";\n      } else {\n        h1Modal.innerHTML = \"Paused\";\n        secondaryInstructions.innerHTML = \"<strong>R</strong>- To restart\";\n        escInstructions.innerHTML = \"<strong>ESC</strong> - To Continue\";\n      }\n\n      document.getElementById(\"submit-score\").classList = \"\";\n      document.getElementById(\"submit-score\").disabled = false;\n\n      if (modal.style.display === \"block\") {\n        document.getElementById(\"submit-score-form\").classList = \"hidden\";\n        modal.style.display = \"none\";\n        this.scoreScreen = false;\n        this.reset = false;\n        this.finishScreen = false;\n      } else {\n        modal.style.display = \"block\";\n        this.scoreScreen = true;\n        this.audio.pause();\n      }\n    } // Temporary stop game\n\n  }, {\n    key: \"checkGameOver\",\n    value: function checkGameOver() {\n      var _this3 = this;\n\n      var over = true;\n      Object.keys(this.keys).forEach(function (key) {\n        if (_this3.keys[key].length > 0) {\n          over = false;\n        }\n      });\n      this.gameOver = over;\n      this.finished = over;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop(key) {\n      //Reset Function\n      if (key === \"r\" && this.gameOver === true) {\n        if (!this.finishScreen) {\n          this.showPauseScreen();\n          this.handleReset();\n        }\n      } else if (key === \"restart\") {\n        this.gameOver ? this.gameOver = false : this.gameOver = true;\n        this.reset = true;\n      } else if (key === \"escape\") {\n        if (this.finishScreen) {\n          this.showPauseScreen(\"songOrDiffChange\");\n          this.handleReset();\n        } else {\n          if (this.currentKeyMap === \"edit\") {\n            console.clear();\n            console.log(this.editKeyMap);\n          }\n\n          this.gameOver ? this.gameOver = false : this.gameOver = true; // If score screen is up.\n\n          if (this.scoreScreen) {\n            this.showPauseScreen(); // Plays audio when pause screen is put away.\n\n            this.audio.play();\n            this.start();\n          }\n        }\n      }\n    }\n  }, {\n    key: \"handleReset\",\n    value: function handleReset() {\n      // Sets keys to origional of keyMap specificed\n      this.setKeyMap(this.currentKeyMap); // Resets frame count\n\n      this.frameCount = 0;\n      this.gameOver = false; // KeyScore reset\n\n      this.score = {\n        perfect: 0,\n        ok: 0,\n        bad: 0,\n        missed: 0\n      }; // NumberScore Reset\n\n      this.numScore = {\n        perfect: 0,\n        ok: 0,\n        bad: 0,\n        total: 0\n      }; // Right side reset\n\n      document.getElementById(\"streak-type\").innerHTML = \"<p class='missed-class'></p>\";\n      document.getElementById(\"streak-number\").innerHTML = \"Streak: 0\";\n      document.getElementById(\"streak-score\").innerHTML = \"Score: \".concat(this.numScore.total); // Pauses audio, resets it to begging of the track\n\n      this.stopAudio(); // Sets audio's volume to what user has it set at.\n\n      this.handleAudio(); // Starts audio track\n\n      this.audio.play();\n      this.start();\n    } // StartCountdown method.\n\n  }, {\n    key: \"startTimer\",\n    value: function startTimer() {\n      var _this4 = this;\n\n      var countdownBox = document.getElementById(\"countdown-box\");\n      countdownBox.style.display = \"block\";\n      setTimeout(function () {\n        countdownBox.innerHTML = \"3\";\n      }, 900);\n      setTimeout(function () {\n        countdownBox.innerHTML = \"2\";\n      }, 1900);\n      setTimeout(function () {\n        countdownBox.innerHTML = \"1\";\n      }, 2900);\n      setTimeout(function () {\n        countdownBox.style.display = \"none\";\n\n        _this4.audio.play();\n\n        _this4.start();\n      }, 4000);\n    } // Game loop\n\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n      if (this.currentKeyMap === \"easy\") {\n        this.draw(this.frameCount++);\n      } else if (this.currentKeyMap === \"medium\") {\n        this.draw(this.frameCount += 1.5);\n      } else if (this.currentKeyMap === \"hard\") {\n        this.draw(this.frameCount += 2);\n      } // Uncomment this and button to make key maps\n      // easy = 1.0\n      // medium = 1.5\n      // hard = 2.0\n      else if (this.currentKeyMap === \"edit\") {\n          this.frameCount += 2;\n        }\n\n      this.keyCleanUp(this.frameCount);\n\n      if (!this.gameOver) {\n        requestAnimationFrame(this.start.bind(this));\n        this.checkGameOver();\n      } else if (this.finished) {\n        this.showPauseScreen(\"finished\");\n      } else if (this.reset) {\n        this.showPauseScreen(\"songOrDiffChange\");\n      } else {\n        this.showPauseScreen();\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://keyrevolution/./javascript/game.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./javascript/game.js\");\n/* harmony import */ var _start_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_view */ \"./javascript/start_view.js\");\n\n\nvar GAME_X = 1000;\nvar GAME_Y = 600;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvasEl = document.getElementById('game-canvas');\n  var gameEl = new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvasEl, GAME_X, GAME_Y);\n  var startView = new _start_view__WEBPACK_IMPORTED_MODULE_1__.default(gameEl);\n  startView.start();\n});\n\n//# sourceURL=webpack://keyrevolution/./javascript/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"./javascript/key_maps/keys.js\");\n\nvar PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));\n\nfunction easy(song) {\n  var audioTrack;\n  var a = [];\n  var d = [];\n  var f = [];\n  var s = [];\n\n  if (song === \"Buttercup\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/buttercup.mp3\"));\n    a = [210, 529, 917, 1162, 1401, 1999, 2061, 2661, 2838, 3320, 3797, 4216, 4399];\n    d = [322, 798, 981, 1222, 1579, 1879, 2183, 2360, 2420, 2599, 2901, 2991, 3380, 3470, 3917, 4100, 4280, 4518];\n    f = [380, 504, 859, 1044, 1283, 1641, 1761, 1879, 2241, 2299, 2360, 2479, 2962, 3442, 3981, 4038, 4400];\n    s = [265, 439, 624, 918, 1101, 1340, 1402, 1700, 1940, 2121, 2539, 2871, 3021, 3348, 3500, 3858, 4159, 4280, 4518];\n  } else if (song === \"Dummy\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/dummy.mp3\"));\n    a = [130, 411, 704, 817, 876, 1219, 1276, 1449, 1794, 2138, 2254, 2543, 2830, 2947, 3178, 3520, 4153, 4210, 4442, 4500];\n    d = [240, 529, 644, 760, 990, 1162, 1336, 1394, 1562, 1734, 1965, 2313, 2428, 2659, 2774, 3062, 3121, 3235, 3293, 3349, 3636, 4041, 4268, 4410, 4528, 4701];\n    f = [299, 586, 705, 818, 1047, 1336, 1622, 1909, 2023, 2369, 2713, 3005, 3062, 3292, 3408, 3694, 4096, 4324, 4557, 4644];\n    s = [183, 354, 472, 645, 759, 932, 1103, 1276, 1393, 1505, 1679, 1851, 2081, 2196, 2486, 2598, 2773, 2889, 3005, 3121, 3179, 3235, 3467, 3577, 3982, 4211, 4268, 4381, 4473, 4585];\n  } else if (song === \"Hills of Radiance\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/hillsofradiant.mp3\"));\n    a = [98, 621, 996, 1499, 1697, 2236, 2990, 3272, 3797];\n    d = [360, 716, 902, 1233, 1332, 1524, 1861, 2126, 2504, 2658, 3095, 3394, 3563, 3934];\n    f = [438, 717, 1082, 1332, 1950, 2573, 2659, 3152, 3456, 3621];\n    s = [279, 524, 622, 821, 1154, 1492, 1773, 2039, 2127, 2417, 2748, 3034, 3213, 3336, 3512, 3681, 3748, 3858, 3935];\n  } // Grab the keymap letter you want to insert a letter into.\n  // push it in\n  // new KeyX(imageType, position in line);\n\n\n  var keyMap = {\n    a: [],\n    s: [],\n    d: [],\n    f: [] // j:[], k:[], l:[], colon:[],\n    // space:[]\n\n  };\n  a.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyA(1, (posY - 470) * -1);\n    keyMap[\"a\"].unshift(key);\n  });\n  s.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyS(1, (posY - 470) * -1);\n    keyMap[\"s\"].unshift(key);\n  });\n  d.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyD(1, (posY - 470) * -1);\n    keyMap[\"d\"].unshift(key);\n  });\n  f.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyF(1, (posY - 470) * -1);\n    keyMap[\"f\"].unshift(key);\n  });\n  return [keyMap, audioTrack, a.length + d.length + f.length + s.length];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (easy);\n\n//# sourceURL=webpack://keyrevolution/./javascript/key_maps/easy.js?");

/***/ }),

/***/ "./javascript/key_maps/hard.js":
/*!*************************************!*\
  !*** ./javascript/key_maps/hard.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"./javascript/key_maps/keys.js\");\n\nvar PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));\n\nfunction hard(song) {\n  var audioTrack;\n  var a = [];\n  var d = [];\n  var f = [];\n  var s = [];\n\n  if (song === \"Buttercup\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/buttercup.mp3\"));\n    a = [78, 642, 1060, 1958, 2442, 2562, 2622, 3578, 3702, 3760, 4120, 4542, 5350, 5614, 6042, 6400, 6750, 6886, 7360, 8078, 8794];\n    d = [286, 400, 526, 822, 1234, 1482, 1606, 1842, 2054, 2200, 2800, 3044, 3160, 3282, 3454, 3886, 4008, 4242, 4358, 4420, 4600, 4718, 4956, 5200, 5408, 5558, 5676, 5802, 5920, 6166, 6402, 6642, 7002, 7122, 7240, 7476, 7596, 7958, 8312, 8494, 8676, 9036, 9274];\n    f = [346, 526, 890, 1362, 1606, 1726, 2114, 2260, 2924, 3106, 3222, 3284, 4010, 4360, 4840, 5080, 5528, 5738, 5920, 6278, 6522, 7122, 7720, 8196, 8432, 9158, 9394];\n    s = [164, 642, 760, 1002, 1844, 2022, 2144, 2320, 2502, 2588, 2736, 3398, 3514, 3638, 3758, 3884, 4118, 4242, 4480, 4720, 5200, 5318, 5584, 5646, 6044, 6164, 6268, 6520, 6698, 6886, 7002, 7240, 7360, 7474, 7848, 8014, 8552, 8674, 8916]; // a = [35, 319, 406, 681, 802, 919, 1160, 1220, 1266, 1313, 1581, 1821, 2418, 2539, 2598, 2839, 2958, 3015, 3226, 3288, 3679, 3722, 4036, 4144, 4398, 4472, 4506]\n    // d = [138, 200, 469, 618, 742, 861, 1009, 1056, 1103, 1369, 1462, 1520, 1640, 1699, 1760, 1854, 2002, 2182, 2238, 2270, 2675, 2777, 2823, 2899, 3046, 3109, 3167, 3346, 3408, 3468, 3559, 3597, 3860, 4007, 4203, 4280, 4336, 4543]\n    // f = [170, 500, 682, 802, 1023, 1071, 1400, 1462, 1700, 1943, 2121, 2210, 2253, 2299, 2703, 2792, 3080, 3139, 3376, 3499, 3707, 3753, 3950, 4233, 4281, 4558, 4624]\n    // s = [76, 261, 378, 438, 529, 617, 743, 861, 980, 1131, 1207, 1249, 1298, 1519, 1581, 1640, 1789, 1882, 2060, 2359, 2476, 2569, 2659, 2766, 2808, 2869, 2925, 2987, 3199, 3258, 3317, 3437, 3527, 3582, 3629, 3802, 3916, 3977, 4085, 4203, 4367, 4399, 4444, 4506, 4592, 4691]\n  } else if (song === \"Dummy\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/dummy.mp3\")); // Slow speed 1.0\n    // a = [68, 242, 412, 438, 456, 615, 810, 845, 876, 904, 929, 1127, 1247, 1397, 1535, 1576, 1611, 1794, 1823, 1936, 1950, 2186, 2201, 2215, 2240, 2257, 2270, 2282, 2629, 2830, 3195, 3256, 3308, 3633, 3722, 3777, 3820, 3845, 3872, 3896, 3923, 4268, 4322, 4379, 4418]\n    // d = [129, 216, 300, 369, 397, 527, 557, 671, 728, 797, 956, 985, 1014, 1042, 1098, 1217, 1335, 1464, 1522, 1565, 1638, 1736, 1764, 1850, 1882, 2005, 2018, 2055, 2066, 2110, 2169, 2307, 2344, 2398, 2417, 2460, 2472, 2520, 2532, 2580, 2611, 2715, 2916, 2975, 3059, 3090, 3167, 3355, 3385, 3416, 3432, 3472, 3516, 3540, 3575, 3606, 3658, 3970, 3992, 4008, 4036, 4049, 4066, 4092, 4115, 4138, 4159, 4184, 4454, 4469, 4499, 4527, 4556, 4574, 4614, 4674]\n    // f = [159, 328, 425, 479, 556, 699, 758, 970, 1000, 1029, 1154, 1275, 1398, 1476, 1496, 1654, 1680, 1703, 1723, 1751, 2030, 2043, 2083, 2098, 2144, 2322, 2358, 2371, 2386, 2428, 2447, 2487, 2498, 2655, 2744, 2946, 3114, 3369, 3399, 3447, 3488, 3528, 3549, 4026, 4056, 4107, 4150, 4473, 4514, 4567, 4700]\n    // s = [98, 187, 271, 354, 383, 500, 584, 616, 642, 672, 781, 824, 860, 889, 916, 941, 1068, 1186, 1335, 1449, 1486, 1551, 1593, 1624, 1665, 1692, 1714, 1778, 1809, 1838, 1868, 1894, 1908, 1921, 1966, 1985, 2122, 2155, 2227, 2293, 2330, 2545, 2563, 2597, 2686, 2774, 2887, 3005, 3036, 3138, 3230, 3282, 3332, 3378, 3458, 3592, 3617, 3643, 3692, 3751, 3807, 3832, 3863, 3890, 3916, 3941, 3956, 3980, 4002, 4080, 4128, 4213, 4244, 4293, 4349, 4402, 4431, 4464, 4486, 4540, 4583, 4644, 4674]\n\n    a = [134, 470, 818, 1118, 1232, 1344, 1748, 1858, 1912, 2208, 2550, 2780, 2960, 3466, 3526, 3930, 4388, 4650, 5142, 5262, 6580, 6700, 6812, 6980, 7090, 7202, 7676, 8650, 8772];\n    d = [246, 420, 596, 758, 854, 942, 1060, 1170, 1290, 1462, 1630, 1676, 2036, 2094, 2376, 2666, 3068, 3206, 3354, 3584, 3690, 3748, 4050, 4280, 4510, 4744, 4972, 5086, 5202, 5378, 5490, 5666, 5778, 5894, 6056, 6234, 6292, 6404, 6920, 7036, 7148, 7260, 7318, 7386, 7506, 7786, 7922, 8022, 8188, 8240, 8426, 8536, 8882, 9002, 9114];\n    f = [314, 648, 892, 1114, 1234, 1346, 1402, 1522, 2208, 2440, 2782, 3130, 3298, 3646, 3718, 4164, 4216, 4852, 5144, 5268, 5430, 5546, 5666, 5832, 5950, 6118, 6348, 7852, 7914, 8214, 8310, 8428, 9002];\n    s = [184, 370, 528, 598, 702, 838, 914, 1004, 1062, 1172, 1288, 1582, 1660, 1700, 1802, 1884, 1974, 2092, 2320, 2496, 2664, 3012, 3180, 3234, 3412, 3492, 3816, 4190, 4620, 4684, 5086, 5202, 5320, 6010, 6172, 6264, 6462, 6580, 6702, 6752, 6866, 6946, 7062, 7172, 7448, 7508, 7616, 7734, 7876, 8138, 8596, 8712, 8772, 8880, 9116];\n  } else if (song === \"Hills of Radiance\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/hillsofradiant.mp3\")); // a = [54, 504, 574, 824, 1157, 1681, 1990, 2035, 2485, 2575, 2680, 3069, 3154, 3207, 3393, 3534, 3672, 3934]\n    // d = [85, 269, 399, 443, 623, 780, 996, 1082, 1122, 1496, 1794, 1837, 1918, 2187, 2391, 2563, 3056, 3093, 3138, 3228, 3268, 3336, 3380, 3485, 3518, 3571, 3614, 3642, 3707, 3739, 3781, 3844]\n    // f = [270, 416, 721, 1081, 1509, 1793, 1850, 2202, 2535, 2990, 3113, 3247, 3361, 3495, 3810]\n    // s = [61, 359, 429, 530, 592, 794, 997, 1133, 1345, 1532, 1682, 1823, 1863, 1946, 2006, 2137, 2223, 2399, 2550, 2757, 3033, 3080, 3124, 3193, 3217, 3254, 3283, 3349, 3370, 3454, 3505, 3553, 3591, 3624, 3658, 3687, 3702, 3717, 3729, 3867, 3981]\n\n    a = [116, 874, 1058, 1178, 2284, 3000, 3854, 3972, 4068, 5092, 6164, 6226, 6796, 7108, 7416, 7474];\n    d = [180, 370, 708, 842, 1420, 1542, 1992, 2218, 2498, 3050, 3420, 3638, 3710, 4276, 4402, 4840, 4982, 5356, 6080, 6320, 6404, 6464, 6564, 6696, 6916, 7036, 7148, 7212, 7250, 7606, 7730, 7886];\n    f = [372, 566, 792, 1424, 1584, 1842, 2132, 2694, 3418, 3566, 4278, 4424, 5126, 5504, 5982, 6070, 6376, 6428, 6530, 6798, 7192, 7236, 7266, 7690];\n    s = [142, 818, 996, 1142, 1248, 1632, 2250, 2328, 2952, 3674, 3742, 3902, 4008, 4460, 4838, 5054, 5168, 6126, 6192, 6258, 6698, 6918, 7070, 7360, 7446, 7492, 7556, 7886];\n  } // Grab the keymap letter you want to insert a letter into.\n  // push it in\n  // new KeyX(imageType, position in line);\n\n\n  var keyMap = {\n    a: [],\n    s: [],\n    d: [],\n    f: [] // j:[], k:[], l:[], colon:[],\n    // space:[]\n\n  };\n  a.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyA(1, (posY - 470) * -1);\n    keyMap[\"a\"].unshift(key);\n  });\n  s.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyS(1, (posY - 470) * -1);\n    keyMap[\"s\"].unshift(key);\n  });\n  d.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyD(1, (posY - 470) * -1);\n    keyMap[\"d\"].unshift(key);\n  });\n  f.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyF(1, (posY - 470) * -1);\n    keyMap[\"f\"].unshift(key);\n  });\n  return [keyMap, audioTrack, a.length + d.length + f.length + s.length];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hard);\n\n//# sourceURL=webpack://keyrevolution/./javascript/key_maps/hard.js?");

/***/ }),

/***/ "./javascript/key_maps/keys.js":
/*!*************************************!*\
  !*** ./javascript/key_maps/keys.js ***!
  \*************************************/
/*! namespace exports */
/*! export KeyA [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyColon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyD [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyF [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyJ [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyK [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyL [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeySpace [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyA\": () => /* binding */ KeyA,\n/* harmony export */   \"KeyS\": () => /* binding */ KeyS,\n/* harmony export */   \"KeyD\": () => /* binding */ KeyD,\n/* harmony export */   \"KeyF\": () => /* binding */ KeyF,\n/* harmony export */   \"KeyJ\": () => /* binding */ KeyJ,\n/* harmony export */   \"KeyK\": () => /* binding */ KeyK,\n/* harmony export */   \"KeyL\": () => /* binding */ KeyL,\n/* harmony export */   \"KeyColon\": () => /* binding */ KeyColon,\n/* harmony export */   \"KeySpace\": () => /* binding */ KeySpace\n/* harmony export */ });\n/* harmony import */ var _imgs_keys_singles_a_key_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../imgs/keys/singles/a-key.png */ \"./imgs/keys/singles/a-key.png\");\n/* harmony import */ var _imgs_keys_singles_s_key_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imgs/keys/singles/s-key.png */ \"./imgs/keys/singles/s-key.png\");\n/* harmony import */ var _imgs_keys_singles_d_key_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../imgs/keys/singles/d-key.png */ \"./imgs/keys/singles/d-key.png\");\n/* harmony import */ var _imgs_keys_singles_f_key_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../imgs/keys/singles/f-key.png */ \"./imgs/keys/singles/f-key.png\");\n/* harmony import */ var _imgs_keys_singles_j_key_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../imgs/keys/singles/j-key.png */ \"./imgs/keys/singles/j-key.png\");\n/* harmony import */ var _imgs_keys_singles_k_key_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../imgs/keys/singles/k-key.png */ \"./imgs/keys/singles/k-key.png\");\n/* harmony import */ var _imgs_keys_singles_l_key_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../imgs/keys/singles/l-key.png */ \"./imgs/keys/singles/l-key.png\");\n/* harmony import */ var _imgs_keys_singles_colon_key_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../imgs/keys/singles/colon-key.png */ \"./imgs/keys/singles/colon-key.png\");\n/* harmony import */ var _imgs_keys_doubles_a2_key_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../imgs/keys/doubles/a2-key.png */ \"./imgs/keys/doubles/a2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_s2_key_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../imgs/keys/doubles/s2-key.png */ \"./imgs/keys/doubles/s2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_d2_key_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imgs/keys/doubles/d2-key.png */ \"./imgs/keys/doubles/d2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_f2_key_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../imgs/keys/doubles/f2-key.png */ \"./imgs/keys/doubles/f2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_j2_key_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../imgs/keys/doubles/j2-key.png */ \"./imgs/keys/doubles/j2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_k2_key_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../imgs/keys/doubles/k2-key.png */ \"./imgs/keys/doubles/k2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_l2_key_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../imgs/keys/doubles/l2-key.png */ \"./imgs/keys/doubles/l2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_colon2_key_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../imgs/keys/doubles/colon2-key.png */ \"./imgs/keys/doubles/colon2-key.png\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Brown keys, singular\n\n\n\n\n\n\n\n // green keys double.\n\n\n\n\n\n\n\n\n\nvar KeyA = function KeyA(img, posY) {\n  _classCallCheck(this, KeyA);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_a_key_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_a2_key_png__WEBPACK_IMPORTED_MODULE_8__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 10;\n  this.posY = posY;\n};\nvar KeyS = function KeyS(img, posY) {\n  _classCallCheck(this, KeyS);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_s_key_png__WEBPACK_IMPORTED_MODULE_1__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_s2_key_png__WEBPACK_IMPORTED_MODULE_9__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 100;\n  this.posY = posY;\n};\nvar KeyD = function KeyD(img, posY) {\n  _classCallCheck(this, KeyD);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_d_key_png__WEBPACK_IMPORTED_MODULE_2__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_d2_key_png__WEBPACK_IMPORTED_MODULE_10__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 190;\n  this.posY = posY;\n};\nvar KeyF = function KeyF(img, posY) {\n  _classCallCheck(this, KeyF);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_f_key_png__WEBPACK_IMPORTED_MODULE_3__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_f2_key_png__WEBPACK_IMPORTED_MODULE_11__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 280;\n  this.posY = posY;\n};\nvar KeyJ = function KeyJ(img, posY) {\n  _classCallCheck(this, KeyJ);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_j_key_png__WEBPACK_IMPORTED_MODULE_4__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_j2_key_png__WEBPACK_IMPORTED_MODULE_12__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = \"placeholder\";\n  this.posY = posY;\n};\nvar KeyK = function KeyK(img, posY) {\n  _classCallCheck(this, KeyK);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_k_key_png__WEBPACK_IMPORTED_MODULE_5__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_k2_key_png__WEBPACK_IMPORTED_MODULE_13__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = \"placeholder\";\n  this.posY = posY;\n};\nvar KeyL = function KeyL(img, posY) {\n  _classCallCheck(this, KeyL);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_l_key_png__WEBPACK_IMPORTED_MODULE_6__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_l2_key_png__WEBPACK_IMPORTED_MODULE_14__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 820;\n  this.posY = posY;\n};\nvar KeyColon = function KeyColon(img, posY) {\n  _classCallCheck(this, KeyColon);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_colon_key_png__WEBPACK_IMPORTED_MODULE_7__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_colon2_key_png__WEBPACK_IMPORTED_MODULE_15__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 910;\n  this.posY = posY;\n};\nvar KeySpace = function KeySpace(img, posY) {\n  _classCallCheck(this, KeySpace);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n  keysImg.src = img;\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = \"placeholder\";\n  this.posY = posY;\n};\n\n//# sourceURL=webpack://keyrevolution/./javascript/key_maps/keys.js?");

/***/ }),

/***/ "./javascript/key_maps/medium.js":
/*!***************************************!*\
  !*** ./javascript/key_maps/medium.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"./javascript/key_maps/keys.js\");\n\nvar PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));\n\nfunction medium(song) {\n  var audioTrack;\n  var a = [];\n  var d = [];\n  var f = [];\n  var s = [];\n\n  if (song === \"Buttercup\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/buttercup.mp3\"));\n    a = [393, 930, 1473, 1831.5, 1923, 2373, 2548.5, 2908.5, 3312, 3630, 3720, 4168.5, 4528.5, 4980, 5251.5, 5341.5, 5610, 6057, 6241.5, 6331.5, 6775.5];\n    d = [208.5, 486, 664.5, 1021.5, 1296, 1381.5, 1698, 2058, 2191.5, 2286, 2595, 2820, 2998.5, 3265.5, 3403.5, 3541.5, 3813, 3991.5, 4302, 4437, 4710, 5068.5, 5158.5, 5428.5, 5518.5, 5787, 6150, 6420, 6502.5, 6598.5, 6957];\n    f = [301.5, 486, 754.5, 1206, 1296, 1650, 2104.5, 2191.5, 2641.5, 3090, 3448.5, 3630, 3811.5, 4033.5, 4350, 4800, 5430, 5880, 6243, 6504, 7044];\n    s = [121.5, 393, 576, 799.5, 1111.5, 1383, 1558.5, 1743, 2014.5, 2286, 2373, 2463, 2775, 3184.5, 3360, 3541.5, 3721.5, 3900, 4081.5, 4260, 4483.5, 4621.5, 4887, 5025, 5205, 5343, 5520, 5608.5, 5698.5, 5967, 6148.5, 6331.5, 6420, 6687, 6870];\n  } else if (song === \"Dummy\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/dummy.mp3\"));\n    a = [39, 451.5, 796.5, 1309.5, 1438.5, 1659, 2301, 2437.5, 2563.5, 2694, 3511.5, 3813, 3898.5, 3985.5, 4072.5, 4249.5, 4554, 4980, 5283, 5454, 6060, 6795];\n    d = [181.5, 363, 582, 711, 880.5, 1050, 1140, 1570.5, 1791, 2001, 2088, 2346, 2479.5, 2605.5, 2736, 2863.5, 3121.5, 3204, 3294, 3382.5, 4161, 4377, 4467, 4891.5, 5152.5, 5200.5, 5412, 5587.5, 5758.5, 5845.5, 6183, 6663, 6748.5, 6838.5];\n    f = [270, 450, 624, 963, 1095, 1660.5, 1831.5, 2089.5, 2950.5, 3037.5, 3160.5, 4249.5, 4645.5, 5025, 5283, 5671.5, 5800.5, 5886, 6318, 6492, 6576, 6748.5, 6882];\n    s = [97.5, 364.5, 535.5, 664.5, 748.5, 838.5, 1225.5, 1395, 1480.5, 1570.5, 1744.5, 1911, 2217, 2391, 2521.5, 2649, 2779.5, 3468, 3556.5, 3640.5, 3727.5, 3858, 4161, 4333.5, 4422, 4846.5, 5110.5, 5199, 5368.5, 5499, 5970, 6144, 6229.5, 6793.5, 6838.5];\n  } else if (song === \"Hills of Radiance\") {\n    audioTrack = new Audio(\"\".concat(PATH, \"/songs/hillsofradiant.mp3\"));\n    a = [57, 753, 864, 931.5, 1597.5, 1698, 1744.5, 2565, 2982, 3057, 3841.5, 4608, 4653, 5091, 5658];\n    d = [120, 376.5, 598.5, 669, 1156.5, 1231.5, 1492.5, 2016, 2254.5, 2736, 2773.5, 2877, 3210, 3297, 3715.5, 3877.5, 4134, 4540.5, 4725, 4789.5, 4839, 4915.5, 4990.5, 5182.5, 5383.5, 5445, 5760];\n    f = [379.5, 624, 1186.5, 2244, 2757, 2802, 3319.5, 3789, 4485, 4771.5, 4809, 4834.5, 5269.5, 5397, 5524.5, 5788.5];\n    s = [88.5, 523.5, 646.5, 796.5, 888, 1077, 1494, 1668, 1719, 2295, 2691, 2916, 3010.5, 3210, 3364.5, 3628.5, 3808.5, 4014, 4587, 4626, 4966.5, 5005.5, 5356.5, 5412, 5607, 5698.5, 5896.5];\n  }\n\n  var keyMap = {\n    a: [],\n    s: [],\n    d: [],\n    f: [] // j:[], k:[], l:[], colon:[],\n    // space:[]\n\n  };\n  a.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyA(1, (posY - 470) * -1);\n    keyMap[\"a\"].unshift(key);\n  });\n  s.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyS(1, (posY - 470) * -1);\n    keyMap[\"s\"].unshift(key);\n  });\n  d.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyD(1, (posY - 470) * -1);\n    keyMap[\"d\"].unshift(key);\n  });\n  f.forEach(function (posY) {\n    var key = new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyF(1, (posY - 470) * -1);\n    keyMap[\"f\"].unshift(key);\n  });\n  return [keyMap, audioTrack, a.length + d.length + f.length + s.length];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (medium);\n\n//# sourceURL=webpack://keyrevolution/./javascript/key_maps/medium.js?");

/***/ }),

/***/ "./javascript/start_view.js":
/*!**********************************!*\
  !*** ./javascript/start_view.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar StartView = /*#__PURE__*/function () {\n  function StartView(game) {\n    _classCallCheck(this, StartView);\n\n    this.game = game;\n  }\n\n  _createClass(StartView, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      var startButton = document.getElementById(\"start-button\");\n      var startScreen = document.getElementById(\"start-screen-outer-modal\");\n      this.game.retrieveScores();\n      startButton.addEventListener(\"click\", function () {\n        startScreen.style.display = \"none\"; //For testing ***\n\n        _this.game.stopAudio();\n\n        _this.game.audio.play();\n\n        _this.game.start(); // this.game.stopAudio();\n        // this.game.startTimer();\n\n      });\n    }\n  }]);\n\n  return StartView;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartView);\n\n//# sourceURL=webpack://keyrevolution/./javascript/start_view.js?");

/***/ }),

/***/ "./imgs/keys/doubles/a2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/a2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"cd08e9ed478e704e31622cec5bac0bd9.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/a2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/colon2-key.png":
/*!******************************************!*\
  !*** ./imgs/keys/doubles/colon2-key.png ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dc37e7af308a1c5bc4a5b562b75d75b1.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/colon2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/d2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/d2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a326f56e7708fd6b5ca5ea04200db24e.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/d2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/f2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/f2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1e73d63860aa61fbec004cc6311580ac.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/f2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/j2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/j2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1ea09369b3b279e8c9015d42ea9c91c8.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/j2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/k2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/k2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"93f65144bb204363e9968424c009b886.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/k2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/l2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/l2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a1c52481341d298317c406bdaeeae00d.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/l2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/s2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/s2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"063eaeae470348956ced0cc324089707.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/s2-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/a-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/a-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c0edd936eba02bfe7f44c31b18b3b51a.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/a-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/colon-key.png":
/*!*****************************************!*\
  !*** ./imgs/keys/singles/colon-key.png ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"325bf04f5582a5b14ea3fe3deb90104d.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/colon-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/d-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/d-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c927c75ef57fd5283677d51bb19dcf36.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/d-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/f-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/f-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fb3870ccf6a0fd83b2e550071f369c06.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/f-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/j-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/j-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0d1f66da2880be5fcd377fae1dc2501e.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/j-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/k-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/k-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c3ed66da8ff4702e4c295309f989018c.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/k-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/l-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/l-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e649d7ec6a8581071b3144a0c9c33c7f.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/l-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/s-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/s-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"861730cfca897b597bddb95561e95028.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/s-key.png?");

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