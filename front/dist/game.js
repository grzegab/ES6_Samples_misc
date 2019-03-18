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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index_game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/attemps.js":
/*!*****************************!*\
  !*** ./src/game/attemps.js ***!
  \*****************************/
/*! exports provided: increaseAttemps, getAttempsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseAttemps\", function() { return increaseAttemps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAttempsCount\", function() { return getAttempsCount; });\nlet attemp = 1;\n\nconst increaseAttemps = () => {\n    attemp++;\n};\n\nconst getAttempsCount = () => {\n    return attemp;\n};\n\n//# sourceURL=webpack:///./src/game/attemps.js?");

/***/ }),

/***/ "./src/game/index.js":
/*!***************************!*\
  !*** ./src/game/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ \"./src/game/random.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/game/input.js\");\n/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success */ \"./src/game/success.js\");\n/* harmony import */ var _userInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userInfo */ \"./src/game/userInfo.js\");\n/* harmony import */ var _attemps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attemps */ \"./src/game/attemps.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    let num = Object(_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    while (num !== _random__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n        Object(_attemps__WEBPACK_IMPORTED_MODULE_4__[\"increaseAttemps\"])();\n        Object(_userInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(num, _random__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        num = Object(_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n    Object(_success__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_attemps__WEBPACK_IMPORTED_MODULE_4__[\"getAttempsCount\"])());\n});\n\n//# sourceURL=webpack:///./src/game/index.js?");

/***/ }),

/***/ "./src/game/info.js":
/*!**************************!*\
  !*** ./src/game/info.js ***!
  \**************************/
/*! exports provided: TOO_SMALL, TOO_BIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOO_SMALL\", function() { return TOO_SMALL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOO_BIG\", function() { return TOO_BIG; });\nconst TOO_SMALL = 'Your number is too small!';\nconst TOO_BIG = 'Your number is too big!';\n\n//# sourceURL=webpack:///./src/game/info.js?");

/***/ }),

/***/ "./src/game/input.js":
/*!***************************!*\
  !*** ./src/game/input.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ASK_USER = 'Gimme number: ';\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => parseInt(prompt(ASK_USER)));\n\n//# sourceURL=webpack:///./src/game/input.js?");

/***/ }),

/***/ "./src/game/random.js":
/*!****************************!*\
  !*** ./src/game/random.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nalert('Number was choosen! Try go guess it! (it can be somethig between 1 and 50)...');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Math.floor(Math.random() * 50 + 1));\n\n//# sourceURL=webpack:///./src/game/random.js?");

/***/ }),

/***/ "./src/game/success.js":
/*!*****************************!*\
  !*** ./src/game/success.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((attemps) => alert(`You got it after ${attemps} attemps!`));\n\n//# sourceURL=webpack:///./src/game/success.js?");

/***/ }),

/***/ "./src/game/userInfo.js":
/*!******************************!*\
  !*** ./src/game/userInfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info */ \"./src/game/info.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((num, expected) => {\n    num > expected ? alert(_info__WEBPACK_IMPORTED_MODULE_0__[\"TOO_BIG\"]) : alert(_info__WEBPACK_IMPORTED_MODULE_0__[\"TOO_SMALL\"]);\n});\n\n//# sourceURL=webpack:///./src/game/userInfo.js?");

/***/ }),

/***/ "./src/index_game.js":
/*!***************************!*\
  !*** ./src/index_game.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/index */ \"./src/game/index.js\");\n\n\nObject(_game_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index_game.js?");

/***/ })

/******/ });