/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayAbout() {\nlet content = document.getElementById('content');\ncontent.innerHTML = \"\"; \nlet about = document.createElement('div'); \nabout.innerHTML = \"Get the best coffee here!\";\ncontent.appendChild(about);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayContactUs(){\n    let content = document.getElementById('content');\n    content.innerHTML = \"\"; \n    let contacts = document.createElement('div');\n    contacts.id = \"contacts\";  \n    contacts.innerHTML = \"<div> Contacts </div> <div> Email: thecoffeemotel@abc.com </div> <div> Mobile: 999 999 9932 </div>\";\n    content.appendChild(contacts);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContactUs);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\nlet structure = (function () {\n    'use strict';\n    function mainDisplay() {\n        function _tabCreator(text) {\n            let button = document.createElement('button');\n            if (text === \"Menu\")\n                button.id = \"menu\";\n            else if (text === \"About\")\n                button.id = \"about\";\n            else\n                button.id = \"contactUs\";\n            button.textContent = text;\n            return button;\n        }\n        const h1 = document.querySelector('h1');\n        let navBar = document.createElement('nav');\n\n        navBar.appendChild(_tabCreator('About'));\n        navBar.appendChild(_tabCreator('Menu'));\n        navBar.appendChild(_tabCreator('Contact Us'));\n        navBar.id = \"tabs\";\n        h1.insertAdjacentElement('afterend', navBar);\n        function addTabListeners() {\n            let _about = _byId(\"about\");\n            let _menu = _byId(\"menu\");\n            let _contactUs = _byId(\"contactUs\");\n            _about.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_0__.default);\n            _menu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.default);\n            _contactUs.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__.default);\n    \n            function _byId(id) {\n                return document.getElementById(id);\n            }\n        }\n        addTabListeners();\n        (0,_about__WEBPACK_IMPORTED_MODULE_0__.default)(); \n    }\n\n    \n    return { mainDisplay };\n})();\n\nstructure.mainDisplay();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction displayMenu() {\n    let names = [\"Café Latte\", \"Espresso\", \"Americano\", \"Cappucchino\", \"Machhiatto\"];\n    let prices = [3.90, 5.50, 5.50, 5.60, 5.50];\n    let content = document.getElementById('content');\n    let div = document.createElement('div');\n    div.id = \"menu\"; \n    content.innerHTML = \"\";\n    div.style.gridTemplateRows = `repeat(${names.length}, 1fr)`;\n    for (let i = 1; i <= names.length; i++) {\n        let name = document.createElement('div');\n        let price = document.createElement('div');\n        name.textContent = `${names[i-1]}`;\n        price.textContent = `$${prices[i-1] * 100}`;\n        div.appendChild(name);\n        div.appendChild(price);\n    }\n    content.appendChild(div);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;