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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/generator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generator_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator/index */ \"./src/generator/index.js\");\n\n\nObject(_generator_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/generator.js?");

/***/ }),

/***/ "./src/generator/component.js":
/*!************************************!*\
  !*** ./src/generator/component.js ***!
  \************************************/
/*! exports provided: BlogPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlogPost\", function() { return BlogPost; });\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./src/generator/service.js\");\n\n\nclass BlogPost extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({mode: 'open'});\n        this.generator = Object(_service__WEBPACK_IMPORTED_MODULE_0__[\"getNextPost\"])();\n        this.currentPost = this.generator.next();\n        this.render();\n    }\n\n    attachClickCallbacks() {\n        this.shadowRoot.getElementById('nextPost').onclick = () => {\n            this.currentPost = this.generator.next();\n            this.render();\n        };\n    }\n\n    render() {\n        this.clean();\n        const paragraph = document.createElement('paragraph');\n\n        paragraph.textContent = `Blog Post Text: ${this.currentPost.value.data}`;\n        paragraph.className = 'blog-text';\n        this.shadowRoot.appendChild(paragraph);\n\n        const button = document.createElement('button');\n        button.className = 'next';\n        button.id = 'nextPost';\n        button.textContent = 'Next item';\n\n        if (!this.currentPost.done) {\n            this.shadowRoot.appendChild(button);\n            this.attachClickCallbacks();\n        }\n    }\n\n    clean() {\n        this.shadowRoot.innerHTML = '';\n    }\n}\n\n//# sourceURL=webpack:///./src/generator/component.js?");

/***/ }),

/***/ "./src/generator/index.js":
/*!********************************!*\
  !*** ./src/generator/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/generator/component.js\");\n// import getBlogPostNames from './service';\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    customElements.define('blog-post', _component__WEBPACK_IMPORTED_MODULE_0__[\"BlogPost\"]);\n});\n\n\n//# sourceURL=webpack:///./src/generator/index.js?");

/***/ }),

/***/ "./src/generator/service.js":
/*!**********************************!*\
  !*** ./src/generator/service.js ***!
  \**********************************/
/*! exports provided: getNextPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextPost\", function() { return getNextPost; });\nfunction getData() {\n        return [\n            {\n                'data': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt purus eget consectetur ullamcorper. Cras feugiat, nunc nec pulvinar rutrum, sapien risus venenatis sem, ac porttitor nisi quam id libero. Nam ligula elit, faucibus id venenatis nec, pharetra eu massa. Donec sollicitudin ligula sed molestie scelerisque. Phasellus tincidunt, risus at rutrum auctor, purus libero tincidunt odio, sit amet sodales justo felis et erat. '\n            },\n            {\n                'data': 'Sed commodo suscipit dictum. Nullam euismod mauris vel nisi ultrices tempus. Nullam eget lacus aliquet, bibendum turpis in, consectetur ligula.'\n            },\n            {\n                'data': 'Praesent tempus odio in lectus consectetur egestas. Nam vel lacus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'\n            },\n            {\n                'data': 'Vivamus vitae leo a est dictum finibus a vel massa. Pellentesque a felis nisi. Maecenas tristique rutrum commodo. Integer a ultricies risus, at consectetur arcu. Sed blandit orci quis velit eleifend, vitae congue leo imperdiet.'\n            },\n            {\n                'data': 'Donec id faucibus ex. Mauris volutpat ante in tortor rutrum commodo. '\n            },\n            {\n                'data': 'quis ornare mauris pulvinar. Vivamus a commodo velit. Curabitur'\n            }\n        ];\n}\n\nfunction* getNextPost() {\n    let index = 0;\n    const postNames = getData().reverse();\n    while (index < postNames.length - 1) {\n        yield postNames[index];\n        index++;\n    }\n    return postNames[index];\n}\n\n//# sourceURL=webpack:///./src/generator/service.js?");

/***/ })

/******/ });