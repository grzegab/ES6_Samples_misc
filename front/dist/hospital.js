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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hospital.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hospital.js":
/*!*************************!*\
  !*** ./src/hospital.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hospital_sample_es6_to_es5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hospital/sample_es6_to_es5 */ \"./src/hospital/sample_es6_to_es5.js\");\n/* harmony import */ var _hospital_sample_es6_to_es5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hospital_sample_es6_to_es5__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst nurseOlynyk = new _hospital_sample_es6_to_es5__WEBPACK_IMPORTED_MODULE_0__[\"HospitalEmployee\"]('Olynyk', ['Trauma','Pediatrics']);\nlet nurseDurant = new _hospital_sample_es6_to_es5__WEBPACK_IMPORTED_MODULE_0__[\"HospitalEmployee\"]('Durant', ['Orthopedics']);\n\n\nnurseOlynyk.takeVacationDays(5);\nconsole.log(nurseOlynyk.remainingVacationDays);\nnurseOlynyk.addCertification('Genetics');\nconsole.log(nurseOlynyk.certifications);\n\n//# sourceURL=webpack:///./src/hospital.js?");

/***/ }),

/***/ "./src/hospital/sample_es6_to_es5.js":
/*!*******************************************!*\
  !*** ./src/hospital/sample_es6_to_es5.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass HospitalEmployee {\n  constructor(name) {\n    this._name = name;\n    this._remainingVacationDays = 20;\n  }\n  \n  get name() {\n    return this._name;\n  }\n  \n  get remainingVacationDays() {\n    return this._remainingVacationDays;\n  }\n  \n  takeVacationDays(daysOff) {\n    this._remainingVacationDays -= daysOff;\n  }\n  \n  static generatePassword() {\n    return Math.floor(Math.random()*10000);\n  }\n}\n\nclass Nurse extends HospitalEmployee {\n  constructor(name, certifications) {\n    super(name);\n    this._certifications = certifications;\n  } \n  \n  get certifications() {\n    return this._certifications;\n  }\n  \n  addCertification(newCertification) {\n    this.certifications.push(newCertification);\n  }\n}\nmodule.exports = Nurse;\nmodule.exports = HospitalEmployee;\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/hospital/sample_es6_to_es5.js?");

/***/ })

/******/ });