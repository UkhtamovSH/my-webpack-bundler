/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./analytics.js":
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
/***/ (() => {

eval("function createAnalytics() {\r\n  let counter = 0\r\n  let destroy = false\r\n\r\n  const listener = () => counter++\r\n\r\n  document.addEventListener('click', listener)\r\n\r\n  return {\r\n    destroy() {\r\n      document.removeEventListener('click', listener)\r\n      destroy = true\r\n    },\r\n\r\n    getClicks() {\r\n      if (destroy) {\r\n        return `Analytics is destroyed. Total clicks ${counter}`\r\n      }\r\n      return counter\r\n    }\r\n  }\r\n}\r\n\r\nwindow.analytics = createAnalytics()\n\n//# sourceURL=webpack:///./analytics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./analytics.js"]();
/******/ 	
/******/ })()
;