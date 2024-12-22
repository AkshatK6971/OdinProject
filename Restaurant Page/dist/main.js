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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    margin: 0;\r\n    font-family: roboto,sans-serif;\r\n    background-color: lightskyblue;\r\n}\r\n\r\nh1{\r\n    display: flex;\r\n    justify-self: center;\r\n    font-size: 48px;\r\n}\r\n\r\nnav{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 48px;\r\n    margin-top: 24px;\r\n    margin-bottom: 48px;\r\n}\r\n\r\n#content{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nbutton{\r\n    background-color: lightskyblue;\r\n    font-weight: 700;\r\n    border-radius: 16px;\r\n    padding: 12px 24px;\r\n    font-size: 18px;\r\n    outline: 2px solid blue;\r\n}\r\n\r\n.menu{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n    outline: 8px solid blue;\r\n    border-radius: 16px;\r\n}\r\n\r\nul{\r\n    list-style: none;\r\n    padding: 20px 40px;\r\n}\r\n\r\nli{\r\n    margin: 12px;\r\n}\r\n\r\n.input{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n    gap: 12px;\r\n}\r\n\r\nform{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 48px;\r\n}\r\n\r\ninput{\r\n    border-radius: 8px;\r\n    height: 24px;\r\n    width: 190px;\r\n    padding: 4px 8px;\r\n}\r\n\r\n.contact{\r\n    flex-direction: column;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 24px;\r\n    margin: 24px;\r\n    padding: 24px;\r\n    outline: 8px solid blue;\r\n    border-radius: 16px;\r\n}\r\n\r\n.contact > button{\r\n    display: flex;\r\n    justify-self: center;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n    let content = document.querySelector(\"#content\");\r\n    content.textContent = \"\";\r\n\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"contact\");\r\n\r\n    let form = document.createElement(\"form\");\r\n\r\n    let class_input = document.createElement(\"div\");\r\n    class_input.classList.add(\"input\");\r\n    let label = document.createElement(\"label\");\r\n    label.setAttribute(\"for\",\"name\");\r\n    label.textContent = \"Name: \";\r\n    let input = document.createElement(\"input\");\r\n    input.id = \"name\";\r\n    input.setAttribute(\"type\",\"text\");\r\n    class_input.appendChild(label);\r\n    class_input.appendChild(input);\r\n    form.appendChild(class_input);\r\n\r\n    class_input = document.createElement(\"div\");\r\n    class_input.classList.add(\"input\");\r\n    label = document.createElement(\"label\");\r\n    label.setAttribute(\"for\",\"number\");\r\n    label.textContent = \"Number: \";\r\n    input = document.createElement(\"input\");\r\n    input.id = \"number\";\r\n    input.setAttribute(\"type\",\"number\");\r\n    class_input.appendChild(label);\r\n    class_input.appendChild(input);\r\n    form.appendChild(class_input);\r\n\r\n    div.appendChild(form);\r\n\r\n    let button = document.createElement(\"button\");\r\n    button.textContent = \"Submit\";\r\n    div.appendChild(button);\r\n\r\n    content.appendChild(div);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _restaurant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.js */ \"./src/restaurant.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_restaurant_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nlet homebtn = document.querySelector(\"#home\");\r\nlet menubtn = document.querySelector(\"#menu\");\r\nlet contactbtn = document.querySelector(\"#contact\");\r\n\r\nhomebtn.addEventListener(\"click\", _restaurant_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nmenubtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\ncontactbtn.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n    let content = document.querySelector(\"#content\");\r\n    content.textContent = \"\";\r\n\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"menu\");\r\n\r\n    let list = document.createElement(\"ul\");\r\n\r\n    let item = document.createElement(\"li\");\r\n    item.textContent = \"Chole Bhature\";\r\n    list.appendChild(item);\r\n    item = document.createElement(\"li\");\r\n    item.textContent = \"Pav Bhaji\";\r\n    list.appendChild(item);\r\n    item = document.createElement(\"li\");\r\n    item.textContent = \"Grilled Sandwich\";\r\n    list.appendChild(item);\r\n    item = document.createElement(\"li\");\r\n    item.textContent = \"Paneer Roll\";\r\n    list.appendChild(item);\r\n    item = document.createElement(\"li\");\r\n    item.textContent = \"Cheese Burger\";\r\n    list.appendChild(item);\r\n\r\n    div.appendChild(list);\r\n    content.appendChild(div);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction restaurantHomePage() {\r\n    let content = document.querySelector(\"#content\");\r\n    content.textContent = \"\";\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"pagecontent\");\r\n\r\n    let image = document.createElement(\"img\");\r\n    image.src = \"data:image/jpeg;base64,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\"\r\n    image.style.cssText = \"height: 400px; width: 400px; outline: 8px solid blue; border-radius: 16px\";\r\n    div.appendChild(image);\r\n\r\n    content.appendChild(div);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (restaurantHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.js?");

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