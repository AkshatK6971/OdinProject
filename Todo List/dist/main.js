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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    margin: 0;\r\n    font-family: roboto,sans-serif;\r\n}\r\n\r\nheader{\r\n    font-weight: 700;\r\n    color: white;\r\n    background-color: green;\r\n    margin: 0;\r\n    padding: 12px 48px;\r\n    font-size: 48px;\r\n}\r\n\r\nheader > p{\r\n    margin: 0;\r\n}\r\n\r\n.sidebar{\r\n    height: 100%;\r\n    width: 300px;\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sidebar_item{\r\n    height: 40px;\r\n    width: 80%;\r\n    display: flex;\r\n    align-self: flex-start;\r\n    margin: 6px 24px;\r\n}\r\n\r\n.sidebar_item > button{\r\n    background-color: white;\r\n    height: 100%;\r\n    width: 100%;\r\n    border: none;\r\n    text-align: left;\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    border-radius: 8px;\r\n    text-align: center;\r\n}\r\n\r\n.content{\r\n    display: flex;\r\n    height: 90vh;\r\n    margin-bottom: 2vh;\r\n}\r\n\r\n.todolist{\r\n    width: calc(100% - 300px);\r\n    height: 100%;\r\n}\r\n\r\n.projects{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.project_heading{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 32px;\r\n    width: 90%;\r\n    padding: 0px 18px;\r\n    margin-top: 12px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.project_heading > p{\r\n    margin: 0;\r\n}\r\n\r\n.project_item{\r\n    height: 40px;\r\n    width: 80%;\r\n    display: flex;\r\n    align-self: flex-start;\r\n    margin: 6px 24px;\r\n}\r\n\r\n.project_item > button{\r\n    background-color: white;\r\n    height: 100%;\r\n    width: 100%;\r\n    border: none;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n}\r\n\r\n.sidebar > hr{\r\n    color: black;\r\n    width: 90%;\r\n}\r\n\r\n.project_heading > button{\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    border-radius: 8px;\r\n    background-color: maroon;\r\n    color: white;\r\n}\r\n\r\n.todolist_heading{\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n    display: flex;\r\n    justify-self: center;\r\n    align-items: center;\r\n}\r\n\r\n.task_heading{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 32px;\r\n    padding: 0px 72px;\r\n}\r\n\r\n.task_heading > p{\r\n    margin: 0;\r\n}\r\n\r\n.task_heading > button{\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    border-radius: 8px;\r\n    background-color: maroon;\r\n    color: white;\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.tasks > hr{\r\n    color: black;\r\n    width: 90%;\r\n}\r\n\r\n.task{\r\n    width: 80%;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 0px 48px;\r\n    font-weight: 700;\r\n}\r\n\r\n.todo_content{\r\n    display: flex;\r\n    gap: 12px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.todo_rest{\r\n    display: flex;\r\n    gap: 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.todos{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 18px;\r\n}\r\n\r\n.todo_rest > button{\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    border-radius: 8px;\r\n    background-color: maroon;\r\n    color: white;\r\n    padding: 8px 16px;\r\n}\r\n\r\nh2 {\r\n    font-weight: 700;\r\n    margin: 0;\r\n    margin-bottom: 24px;\r\n}\r\n\r\nform{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\n.input{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2px;\r\n}\r\n\r\n.input_importance{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.input_buttons{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.input_buttons > button{\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    border-radius: 8px;\r\n    background-color: maroon;\r\n    color: white;\r\n    padding: 8px 16px;\r\n}\r\n\r\n.input_importance_edit{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.important{\r\n    background-color: red;\r\n    opacity: 1;\r\n    color: white;\r\n}\r\n\r\n.completed {\r\n    opacity: 0.5;\r\n    background-color: black;\r\n    color: white;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.sidebar_item > button:hover{\r\n    outline: 4px solid black;\r\n}\r\n\r\n.project_item > button:hover{\r\n    outline: 4px solid black;\r\n}\r\n\r\n#createproject:hover{\r\n    outline: 4px solid black;\r\n}\r\n\r\n#createtodo:hover{\r\n    outline: 4px solid black;\r\n}\r\n\r\n.task.completed > .todo_rest > button:hover{\r\n    outline: 4px solid white;\r\n}\r\n\r\n.task > .todo_rest > button:hover{\r\n    outline: 4px solid black;\r\n}\r\n\r\n.input_buttons > button:hover{\r\n    outline: 4px solid black;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/buttonListeners.js":
/*!********************************!*\
  !*** ./src/buttonListeners.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeCompleted: () => (/* binding */ changeCompleted),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   editTodo: () => (/* binding */ editTodo)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _mainHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainHandler */ \"./src/mainHandler.js\");\n\r\n\r\n\r\nfunction editTodo(){\r\n    let project = event.target.parentNode.parentNode.classList[1];\r\n    let title = event.target.parentNode.parentNode.childNodes[0].childNodes[1].textContent;\r\n\r\n    let modaltodoedit = document.querySelector(\".todo_modal_edit\");\r\n    let edittodobtn = document.querySelector(\"#edittodo\");\r\n    let closeedittodobtn = document.querySelector(\"#closetodomodal_edit\");\r\n    let todo_name_edit = document.querySelector(\"#todo_name_edit\");\r\n    let description_edit = document.querySelector(\"#description_edit\");\r\n    let date_edit = document.querySelector(\"#date_edit\");\r\n    let important_edit = document.querySelector(\"#important_edit\");\r\n\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjectList();\r\n    let index = projectList.findIndex(x => x.name == project);\r\n    let todo_index = projectList[index].todosList.findIndex(x => x.title == title);\r\n\r\n    todo_name_edit.value = projectList[index].todosList[todo_index].title;\r\n    description_edit.value = projectList[index].todosList[todo_index].description;\r\n    date_edit.value = projectList[index].todosList[todo_index].date;\r\n    important_edit.checked = projectList[index].todosList[todo_index].important;\r\n\r\n    closeedittodobtn.addEventListener(\"click\", () => {\r\n        event.preventDefault();\r\n        modaltodoedit.close();\r\n    });\r\n\r\n    edittodobtn.addEventListener(\"click\", () => {\r\n        event.preventDefault();\r\n        projectList[index].todosList[todo_index].title = todo_name_edit.value;\r\n        projectList[index].todosList[todo_index].description = description_edit.value;\r\n        projectList[index].todosList[todo_index].date = date_edit.value;\r\n        projectList[index].todosList[todo_index].important = important_edit.checked;\r\n        localStorage.setItem(\"projectList\",JSON.stringify(projectList));\r\n        modaltodoedit.close();\r\n        selectedDisplay();\r\n    });\r\n\r\n    modaltodoedit.showModal();\r\n}\r\n\r\nfunction deleteTodo(){\r\n    let project = event.target.parentNode.parentNode.classList[1];\r\n    let title = event.target.parentNode.parentNode.childNodes[0].childNodes[1].textContent;\r\n\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjectList();\r\n    let index = projectList.findIndex(x => x.name == project);\r\n    let todo_index = projectList[index].todosList.findIndex(x => x.title == title);\r\n    projectList[index].todosList.splice(todo_index,1);\r\n    localStorage.setItem(\"projectList\",JSON.stringify(projectList));\r\n    selectedDisplay();    \r\n}\r\n\r\nfunction changeCompleted(){\r\n    let project = event.target.parentNode.parentNode.classList[1];\r\n    let title = event.target.parentNode.childNodes[1].textContent;\r\n\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjectList();\r\n    let index = projectList.findIndex(x => x.name == project);\r\n    let todo_index = projectList[index].todosList.findIndex(x => x.title == title);\r\n\r\n    projectList[index].todosList[todo_index].completed = event.target.checked;\r\n    localStorage.setItem(\"projectList\", JSON.stringify(projectList));\r\n    selectedDisplay();\r\n}\r\n\r\nfunction selectedDisplay(){\r\n    let todolist_heading = document.querySelector(\".todolist_heading > p\");\r\n    let todos = document.querySelector(\".todos\");\r\n    todos.textContent = \"\";\r\n    if(todolist_heading.textContent == \"All Tasks\")\r\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.allDisplay)();\r\n    else if(todolist_heading.textContent == \"Completed Tasks\")\r\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.completedDisplay)();\r\n    else if(todolist_heading.textContent == \"Important Tasks\")\r\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.importantDisplay)();\r\n    else{\r\n        let name = todolist_heading.textContent;\r\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.todoDisplay)(name);\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/buttonListeners.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allDisplay: () => (/* binding */ allDisplay),\n/* harmony export */   completedDisplay: () => (/* binding */ completedDisplay),\n/* harmony export */   importantDisplay: () => (/* binding */ importantDisplay),\n/* harmony export */   projectDisplay: () => (/* binding */ projectDisplay),\n/* harmony export */   todoDisplay: () => (/* binding */ todoDisplay),\n/* harmony export */   todoDisplayDOM: () => (/* binding */ todoDisplayDOM)\n/* harmony export */ });\n/* harmony import */ var _mainHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainHandler */ \"./src/mainHandler.js\");\n/* harmony import */ var _buttonListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonListeners.js */ \"./src/buttonListeners.js\");\n\r\n\r\n\r\nfunction projectDisplay() {\r\n    let projects = document.querySelector(\".projects\");\r\n    projects.textContent = \"\";\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectList();\r\n    projectList.forEach(project => {\r\n        let project_item = document.createElement(\"div\");\r\n        project_item.classList.add(\"project_item\");\r\n\r\n        let project_heading = document.createElement(\"button\");\r\n        project_heading.classList.add(\"project\");\r\n        project_heading.addEventListener(\"click\", () => {\r\n            let todos = document.querySelector(\".todos\");\r\n            todos.textContent = \"\";\r\n            showProjectTodo();\r\n        });\r\n        project_heading.textContent = project.name;\r\n    \r\n        project_item.appendChild(project_heading);\r\n        projects.appendChild(project_item);\r\n    });\r\n}\r\n\r\nfunction todoDisplay(project,completed=null,important=null){\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectList();\r\n    let index = projectList.findIndex(x => x.name == project);\r\n\r\n    projectList[index].todosList.forEach(todo => {\r\n        todoDisplayDOM(projectList[index].name, todo);\r\n    });\r\n}\r\n\r\nfunction allDisplay(){\r\n    let todos = document.querySelector(\".todos\");\r\n    todos.textContent = \"\";\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectList();\r\n    projectList.forEach(project => todoDisplay(project.name));\r\n    let todolist_heading = document.querySelector(\".todolist_heading > p\");\r\n    todolist_heading.textContent = \"All Tasks\";\r\n}\r\n\r\nfunction completedDisplay(){\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectList();\r\n    let todolist_heading = document.querySelector(\".todolist_heading > p\");\r\n    todolist_heading.textContent = \"Completed Tasks\";\r\n\r\n    let todos = document.querySelector(\".todos\");\r\n    todos.textContent = \"\";\r\n    projectList.forEach(project => {\r\n        project.todosList.forEach(todo => {\r\n            if(todo.completed == true){\r\n                todoDisplayDOM(project.name ,todo);\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\nfunction importantDisplay(){\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectList();\r\n    let todolist_heading = document.querySelector(\".todolist_heading > p\");\r\n    todolist_heading.textContent = \"Important Tasks\";\r\n\r\n    let todos = document.querySelector(\".todos\");\r\n    todos.textContent = \"\";\r\n    projectList.forEach(project => {\r\n        project.todosList.forEach(todo => {\r\n            if(todo.important == true){\r\n                todoDisplayDOM(project.name, todo);\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\nfunction showProjectTodo() {\r\n    let projectList = _mainHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectList();\r\n    let index = projectList.findIndex(x => x.name == event.target.textContent);\r\n    let todolist_heading = document.querySelector(\".todolist_heading > p\");\r\n\r\n    todolist_heading.textContent = event.target.textContent;\r\n    projectList[index].todosList.forEach(todo => {\r\n        todoDisplayDOM(projectList[index].name, todo);\r\n    });\r\n}\r\n\r\nfunction todoDisplayDOM(project, todo){\r\n    let todos = document.querySelector(\".todos\");\r\n    let task = document.createElement(\"div\");\r\n    task.classList.add(\"task\");\r\n    task.classList.add(project);\r\n    if(todo.completed)\r\n        task.classList.add(\"completed\");\r\n    if(todo.important)\r\n        task.classList.add(\"important\");\r\n\r\n    let todo_content = document.createElement(\"div\");\r\n    todo_content.classList.add(\"todo_content\");\r\n    let todo_rest = document.createElement(\"div\");\r\n    todo_rest.classList.add(\"todo_rest\");\r\n\r\n    let input = document.createElement(\"input\");\r\n    input.type = \"checkbox\";\r\n    input.classList.add(\"check\");\r\n    input.checked = todo.completed;\r\n    input.addEventListener(\"change\", _buttonListeners_js__WEBPACK_IMPORTED_MODULE_1__.changeCompleted);\r\n    let p = document.createElement(\"p\");\r\n    p.textContent = todo.title;\r\n\r\n    todo_content.appendChild(input);\r\n    todo_content.append(p);\r\n\r\n    let date = document.createElement(\"p\");\r\n    date.textContent = todo.date;\r\n    let deletebtn = document.createElement(\"button\");\r\n    deletebtn.textContent = \"Delete\";\r\n    deletebtn.addEventListener(\"click\", _buttonListeners_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo);\r\n    let editbtn = document.createElement(\"button\");\r\n    editbtn.textContent = \"Edit\";\r\n    editbtn.addEventListener(\"click\", _buttonListeners_js__WEBPACK_IMPORTED_MODULE_1__.editTodo);\r\n\r\n    todo_rest.appendChild(date);\r\n    todo_rest.appendChild(deletebtn);\r\n    todo_rest.appendChild(editbtn);\r\n\r\n    task.appendChild(todo_content);\r\n    task.appendChild(todo_rest);\r\n    todos.appendChild(task);\r\n}\n\n//# sourceURL=webpack://todo-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectClass.js */ \"./src/projectClass.js\");\n/* harmony import */ var _todoClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoClass.js */ \"./src/todoClass.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _mainHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainHandler.js */ \"./src/mainHandler.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet createprojectbtn = document.querySelector(\"#createproject\");\r\nlet modalproject = document.querySelector(\".modal_project\");\r\nlet projectname = document.querySelector(\"#project_name\");\r\nlet addprojectbtn = document.querySelector(\"#addproject\");\r\nlet closeprojectbtn = document.querySelector(\"#closeprojectmodal\");\r\n\r\ncreateprojectbtn.addEventListener(\"click\" ,() => {\r\n    modalproject.showModal();\r\n});\r\n\r\naddprojectbtn.addEventListener(\"click\" , (event) => {\r\n    event.preventDefault();\r\n    let name = projectname.value;\r\n    let newProject = (0,_projectClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\r\n    _mainHandler_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(newProject);\r\n    projectname.value = \"\";\r\n    modalproject.close();\r\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_4__.projectDisplay)();\r\n});\r\n\r\ncloseprojectbtn.addEventListener(\"click\" ,() => {\r\n    event.preventDefault();\r\n    modalproject.close();\r\n});\r\n\r\nlet createtodobtn = document.querySelector(\"#createtodo\");\r\nlet modaltodo = document.querySelector(\".todo_modal\");\r\nlet addtodobtn = document.querySelector(\"#addtodo\");\r\nlet closetodobtn = document.querySelector(\"#closetodomodal\");\r\nlet title = document.querySelector(\"#todo_name\");\r\nlet description = document.querySelector(\"#description\");\r\nlet date = document.querySelector(\"#date\");\r\nlet important = document.querySelector(\"#important\");\r\nlet todolist_heading = document.querySelector(\".todolist_heading > p\");\r\n\r\ncreatetodobtn.addEventListener(\"click\" ,() => {\r\n    modaltodo.showModal();\r\n});\r\n\r\naddtodobtn.addEventListener(\"click\" ,() => {\r\n    event.preventDefault();\r\n    let project;\r\n    if(todolist_heading.textContent == \"All Tasks\" || todolist_heading.textContent == \"Completed Tasks\" || todolist_heading.textContent == \"Important Tasks\")\r\n        project = \"MyProject\";\r\n    else\r\n        project = todolist_heading.textContent;\r\n\r\n    let newTodo = (0,_todoClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(project,title.value,description.value,date.value,important.checked);\r\n    let projectList = _mainHandler_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getProjectList()\r\n    let index = projectList.findIndex(x => x.name == project);\r\n    projectList[index].addTodos(newTodo);\r\n    localStorage.setItem(\"projectList\",JSON.stringify(projectList));\r\n\r\n    title.value = \"\";\r\n    description.value = \"\"\r\n    date.value = \"\";\r\n    important.checked = false;\r\n    modaltodo.close();\r\n\r\n    let todos = document.querySelector(\".todos\");\r\n    todos.textContent = \"\";\r\n    todolist_heading.textContent = project;\r\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_4__.todoDisplay)(project);\r\n});\r\n\r\nclosetodobtn.addEventListener(\"click\" ,() => {\r\n    event.preventDefault();\r\n    modaltodo.close();\r\n});\r\n\r\nlet allbtn = document.querySelector(\"#all_but\");\r\nlet completed_btn = document.querySelector(\"#completed_but\");\r\nlet important_btn = document.querySelector(\"#important_but\");\r\n\r\nallbtn.addEventListener(\"click\", _display_js__WEBPACK_IMPORTED_MODULE_4__.allDisplay);\r\ncompleted_btn.addEventListener(\"click\", _display_js__WEBPACK_IMPORTED_MODULE_4__.completedDisplay);\r\nimportant_btn.addEventListener(\"click\", _display_js__WEBPACK_IMPORTED_MODULE_4__.importantDisplay);\r\n\r\n(0,_display_js__WEBPACK_IMPORTED_MODULE_4__.projectDisplay)();\r\n(0,_display_js__WEBPACK_IMPORTED_MODULE_4__.allDisplay)();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/mainHandler.js":
/*!****************************!*\
  !*** ./src/mainHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectClass */ \"./src/projectClass.js\");\n/* harmony import */ var _todoClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoClass */ \"./src/todoClass.js\");\n\r\n\r\n\r\nconst mainHandler = (function (){\r\n    let projectList = JSON.parse(localStorage.getItem(\"projectList\"));\r\n    \r\n    if(projectList == null){\r\n        projectList = [];\r\n        let project = (0,_projectClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"MyProject\");\r\n        projectList.push(project);\r\n        localStorage.setItem(\"projectList\",JSON.stringify(projectList));\r\n    }\r\n\r\n    const getProjectList = () => {\r\n        let plainObject = JSON.parse(localStorage.getItem(\"projectList\"));\r\n        projectList = [];\r\n        plainObject.forEach(project => {\r\n            let temp_project = Object.assign((0,_projectClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),project);\r\n            temp_project.todosList.forEach(todo => {\r\n                let temp_todo = Object.assign((0,_todoClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), todo);\r\n                todo = temp_todo;\r\n            });\r\n            projectList.push(temp_project);\r\n        });\r\n        return projectList;\r\n    }\r\n\r\n    const addProject = (project_item) => {\r\n        let temp_projectList = getProjectList();\r\n        temp_projectList.push(project_item);\r\n        localStorage.setItem(\"projectList\",JSON.stringify(temp_projectList));\r\n    }\r\n\r\n    return{\r\n        getProjectList,\r\n        addProject,\r\n    }\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainHandler);\n\n//# sourceURL=webpack://todo-list/./src/mainHandler.js?");

/***/ }),

/***/ "./src/projectClass.js":
/*!*****************************!*\
  !*** ./src/projectClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectClass {\r\n    constructor ( name ) {\r\n        this.name = name;\r\n        this.todosList = [];\r\n    }\r\n\r\n    addTodos (todos) {\r\n        this.todosList.push(todos);\r\n    }\r\n    \r\n    deleteTodos (index) {\r\n        this.todosList.splice(index, 1);\r\n    }\r\n}\r\n\r\nconst createProject = (name) => {\r\n    return new ProjectClass(name);\r\n}\r\n \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/projectClass.js?");

/***/ }),

/***/ "./src/todoClass.js":
/*!**************************!*\
  !*** ./src/todoClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainHandler */ \"./src/mainHandler.js\");\n\r\n\r\nclass Todos {\r\n    constructor(project, title, description, dueDate, important) {\r\n        this.project = project;\r\n        this.title = title;\r\n        this.description = description;\r\n        this.date = dueDate;\r\n        this.important = important;\r\n        this.completed = false;\r\n    }\r\n}\r\n\r\n\r\nconst createTodos = (project, title, description, dueDate, important) => {\r\n    return new Todos(project, title, description, dueDate, important);\r\n}   \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodos);\n\n//# sourceURL=webpack://todo-list/./src/todoClass.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;