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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/joke.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/joke.js":
/*!*********************!*\
  !*** ./src/joke.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _joke_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./joke/index */ \"./src/joke/index.js\");\n\n\nObject(_joke_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/joke.js?");

/***/ }),

/***/ "./src/joke/Jokes.js":
/*!***************************!*\
  !*** ./src/joke/Jokes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Jokes; });\n/* This is a model. */\n\nclass Jokes {\n    constructor({type, question, joke}) {\n        this.type = type;\n        this.question = question;\n        this.joke = joke;\n    }\n\n    toString() {\n        return this.question ? `\n        - ${this.question}\n        - ${this.joke}`\n            : `Joke: ${this.joke}`;\n    }\n}\n\n//# sourceURL=webpack:///./src/joke/Jokes.js?");

/***/ }),

/***/ "./src/joke/index.js":
/*!***************************!*\
  !*** ./src/joke/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./src/joke/service.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function () {\n    alert((await Object(_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()).toString());\n});\n\n//# sourceURL=webpack:///./src/joke/index.js?");

/***/ }),

/***/ "./src/joke/jokeApi.js":
/*!*****************************!*\
  !*** ./src/joke/jokeApi.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchJoke; });\nasync function fetchJoke(URL) {\n    try {\n        const response = await fetch(URL);\n\n        if (response.ok) {\n            return (await response.json());\n        }\n\n        // If response code was != 200.\n        throw Error('JOKE not found or any other error ...');\n    } catch (err) {\n        // Show the error to console.\n        console.warn(err);\n\n        return false;\n    }\n}\n\n//# sourceURL=webpack:///./src/joke/jokeApi.js?");

/***/ }),

/***/ "./src/joke/service.js":
/*!*****************************!*\
  !*** ./src/joke/service.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return randomJoke; });\n/* harmony import */ var _jokeApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jokeApi */ \"./src/joke/jokeApi.js\");\n/* harmony import */ var _Jokes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jokes */ \"./src/joke/Jokes.js\");\n\n\n\nconst OFFICIAL_JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';\nconst NERD_JOKE_URL = 'http://api.icndb.com/jokes/random';\n\nasync function randomJoke() {\n\n    const officialJoke = await Object(_jokeApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(OFFICIAL_JOKE_URL);\n    if (officialJoke.type === 'programming') {\n        return new _Jokes__WEBPACK_IMPORTED_MODULE_1__[\"default\"](officialJoke);\n    } else {\n        const nerdJoke = await Object(_jokeApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(NERD_JOKE_URL);\n        if (nerdJoke) {\n            const {value: {joke}} = nerdJoke; // { value: { joke } } === { value: { joke: joke } }\n            return new _Jokes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({type: 'nerd', joke: joke});\n        } else {\n            // Fallback in json.\n            return new _Jokes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                type: 'fallback',\n                question: 'How many programmers does it take to change a lightbulb?',\n                joke: 'None. It doesn\\'t exists'\n            });\n        }\n\n    }\n}\n\n//# sourceURL=webpack:///./src/joke/service.js?");

/***/ })

/******/ });