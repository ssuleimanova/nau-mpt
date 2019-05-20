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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/app.js":
/*!***************************!*\
  !*** ./javascript/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./javascript/controller.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./javascript/view.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ \"./javascript/model.js\");\n\r\n\r\n\r\nwindow.onload = function() {\r\n    let view = new _view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    let model = new _model_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    let controller = new _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](view, model);\r\n};\n\n//# sourceURL=webpack:///./javascript/app.js?");

/***/ }),

/***/ "./javascript/controller.js":
/*!**********************************!*\
  !*** ./javascript/controller.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nclass Controller {\r\n    constructor(view, model) {\r\n        this.view = view;\r\n        this.model = model;\r\n        this.view.setSubmit = () => this.handleClick();\r\n        this.view.setQuestion = this.model.getNextQuestion();\r\n    }\r\n\r\n    handleClick() {\r\n        let result = this.model.check(this.view.getAnswer);\r\n        this.view.setError = result;\r\n        if (result == \"\") {\r\n            this.view.setQuestion = this.model.getNextQuestion();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./javascript/controller.js?");

/***/ }),

/***/ "./javascript/model.js":
/*!*****************************!*\
  !*** ./javascript/model.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\nclass Model {\r\n    constructor() {\r\n        this.count = -1;\r\n        this.question = [\"Привіт! \", \"Як тебе звати? \", \"Скільки тобі років? \", \"Ну ми починаємо! \"];\r\n        this.options = [\"Привіт\", \"Hi\", \"Хай\", \"Добрий день\"];\r\n        this.numbers = /^[0-9]+$/i;\r\n        this.symbol = /^[a-zа-яёії]+$/i;\r\n    }\r\n\r\n    getNextQuestion() {\r\n        this.count++;\r\n        return this.question[this.count];\r\n    }\r\n\r\n    checkGreeting(greeting) {\r\n        if (this.options.includes(greeting)) {\r\n            return \"\";\r\n        }\r\n        return \" Привітайся нормально!\";\r\n    }\r\n    checkName(name) {\r\n        if (this.checkSymbol(name, this.symbol)) {\r\n            return \"\";\r\n        }\r\n        return \" Ти ж не робот, напиши нормально!\";\r\n    }\r\n\r\n    checkSymbol(str, myRe) {\r\n        return myRe.test(str);\r\n    }\r\n\r\n    checkAge(age) {\r\n        if (!this.checkSymbol(age, this.numbers))\r\n            return \" Дані введені не коректно!\";\r\n        if (age < 10) {\r\n            return \" Йди звідси, щеня!\";\r\n        }\r\n        if (age > 100) {\r\n            return \" Що ти тут забув, старий?\";\r\n        }\r\n        return \"\";\r\n    }\r\n\r\n    check(str) {\r\n        switch (this.count) {\r\n            case 0: return this.checkGreeting(str);\r\n            case 1: return this.checkName(str);\r\n            case 2: return this.checkAge(str);\r\n            default: return \" Не поспішай!\";\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./javascript/model.js?");

/***/ }),

/***/ "./javascript/view.js":
/*!****************************!*\
  !*** ./javascript/view.js ***!
  \****************************/
/*! exports provided: viewBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewBase\", function() { return viewBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass viewBase {\r\n    constructor() {\r\n        let id = 0;\r\n    }\r\n\r\n    init(nodeName, elementId, elementType) {\r\n        let element = document.createElement(nodeName);\r\n        if (elementId != undefined)\r\n            element.setAttribute(\"id\", elementId);\r\n        else {\r\n            element.setAttribute(\"id\", id);\r\n            id++;\r\n        }\r\n        if (elementType != undefined)\r\n            element.setAttribute(\"type\", elementType);\r\n        document.body.appendChild(element);\r\n        return element;\r\n    }\r\n}\r\n\r\nclass View extends viewBase {\r\n    constructor() {\r\n        super()\r\n        let question = super.init(\"label\", \"question\");\r\n        let answer = super.init(\"input\", \"answer\", \"text\");\r\n        let submit = super.init(\"input\", \"submit\", \"submit\");\r\n        let error = super.init(\"label\", \"error\");\r\n    }\r\n\r\n    set setQuestion(text) {\r\n        question.innerHTML = text;\r\n    }\r\n\r\n    get getAnswer() {\r\n        return answer.value;\r\n    }\r\n\r\n    set setError(text) {\r\n        error.innerHTML = text || \"\";\r\n    }\r\n\r\n    set setSubmit(func) {\r\n        submit.onclick = func;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./javascript/view.js?");

/***/ })

/******/ });