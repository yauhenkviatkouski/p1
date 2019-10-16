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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common-elements.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common-elements.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".button-arrow {\\n  position: relative;\\n  height: 42px;\\n  width: 138px;\\n  border: 2px solid white;\\n  margin-bottom: 30px; }\\n  @media (max-width: 690px) {\\n    .button-arrow {\\n      background-color: #7a8e81; } }\\n\\n.button-arrow:after {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  background-color: #7a8e81;\\n  top: 35px;\\n  left: 60px;\\n  transform: rotate(-45deg);\\n  width: 15px;\\n  height: 15px;\\n  border: 2px solid white;\\n  border-right: 0;\\n  border-top: 0; }\\n\\n.button-arrow:before {\\n  content: \\\"READ MORE\\\";\\n  top: 12px;\\n  left: 33px;\\n  position: absolute;\\n  display: block;\\n  font-family: 'FjallaOne-Regular';\\n  font-size: 17px;\\n  color: white; }\\n\\n.header-lines:before {\\n  content: '';\\n  position: absolute;\\n  top: 13px;\\n  left: -138px;\\n  height: 1px;\\n  width: 122px;\\n  border-top: solid 1px #387d89; }\\n  @media (max-width: 700px) {\\n    .header-lines:before {\\n      display: none; } }\\n\\n.header-lines:after {\\n  content: '';\\n  position: absolute;\\n  top: 13px;\\n  right: -139px;\\n  height: 1px;\\n  width: 117px;\\n  border-top: solid 1px #387d89; }\\n  @media (max-width: 700px) {\\n    .header-lines:after {\\n      display: none; } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/common-elements.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/fonts.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/fonts.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/fonts/FjallaOne-Regular.ttf */ \"./src/assets/fonts/FjallaOne-Regular.ttf\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../assets/fonts/SourceSansPro-Regular.ttf */ \"./src/assets/fonts/SourceSansPro-Regular.ttf\"));\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: 'FjallaOne-Regular';\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \"); }\\n\\n@font-face {\\n  font-family: 'SourceSansPro-Regular';\\n  src: url(\" + ___CSS_LOADER_URL___1___ + \"); }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/fonts.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/images/footer/facebook.png */ \"./src/assets/images/footer/facebook.png\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../assets/images/footer/twitter.png */ \"./src/assets/images/footer/twitter.png\"));\n// Module\nexports.push([module.i, \"footer {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-top: 91px;\\n  width: 100%;\\n  height: 200px;\\n  background-color: #245963; }\\n  footer .footer-contacts {\\n    margin-top: 50px;\\n    position: relative; }\\n    @media (max-width: 400px) {\\n      footer .footer-contacts .footer-contacts__tel {\\n        display: block; } }\\n    footer .footer-contacts a {\\n      position: relative;\\n      font-family: 'SourceSansPro-Regular';\\n      font-size: 15px;\\n      font-weight: 400;\\n      color: white;\\n      text-decoration: none;\\n      margin: 0 19px; }\\n    footer .footer-contacts .footer-contacts__email {\\n      margin-left: 10px; }\\n    footer .footer-contacts .footer-contacts__facebook:before {\\n      content: url(\" + ___CSS_LOADER_URL___0___ + \");\\n      position: absolute;\\n      top: -9px;\\n      left: -24px; }\\n    footer .footer-contacts .footer-contacts__twitter:before {\\n      content: url(\" + ___CSS_LOADER_URL___1___ + \");\\n      position: absolute;\\n      top: -9px;\\n      left: -17px; }\\n  footer .footer-contacts:after {\\n    content: '';\\n    position: absolute;\\n    top: 59px;\\n    left: 54px;\\n    height: 1px;\\n    width: 282px;\\n    border-top: solid 1px #387d89; }\\n    @media (max-width: 400px) {\\n      footer .footer-contacts:after {\\n        display: none; } }\\n  footer .footer-copyright {\\n    margin-top: 74px;\\n    font-family: 'SourceSansPro-Regular';\\n    color: white;\\n    font-size: 16.25px; }\\n    footer .footer-copyright a {\\n      text-decoration: none;\\n      color: #fdbd1f; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/footer.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".header {\\n  min-height: 67px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  padding-top: 10px;\\n  font-family: 'FjallaOne-Regular';\\n  border: 1px solid #3175839c;\\n  background-color: #3175834b; }\\n  .header h1 {\\n    min-width: 100px;\\n    padding-left: 30px;\\n    font-weight: 400;\\n    font-size: 18pt; }\\n    .header h1 a {\\n      color: white;\\n      text-decoration: none; }\\n  .header .nav-bar {\\n    display: flex;\\n    justify-content: space-around;\\n    width: 303px;\\n    padding-right: 17px; }\\n    @media (max-width: 675px) {\\n      .header .nav-bar {\\n        padding-left: 0px;\\n        padding-right: 0px; } }\\n  .header .nav-bar__item {\\n    list-style-type: none; }\\n    .header .nav-bar__item a {\\n      text-decoration: none;\\n      color: white;\\n      font-size: 18px;\\n      font-weight: 100; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/header.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-contact-area.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-contact-area.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/images/contact/Mail.png */ \"./src/assets/images/contact/Mail.png\"));\n// Module\nexports.push([module.i, \".contact-area {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 80px; }\\n  .contact-area .mail-picture {\\n    margin-left: 3px;\\n    position: relative;\\n    background-color: white;\\n    border-radius: 50%;\\n    width: 99px;\\n    height: 99px; }\\n  .contact-area .mail-picture:before {\\n    content: url(\" + ___CSS_LOADER_URL___0___ + \");\\n    position: absolute;\\n    left: 22px;\\n    top: 22px; }\\n  .contact-area h3, .contact-area h4 {\\n    font-family: 'FjallaOne-Regular';\\n    font-weight: 400;\\n    color: white;\\n    padding-left: 3px; }\\n  .contact-area h3 {\\n    margin: 27px 0 10px 0;\\n    font-size: 29px; }\\n  .contact-area h4 {\\n    position: relative;\\n    margin-top: 0px;\\n    font-size: 21px; }\\n  .contact-area .header-lines:after {\\n    width: 72px;\\n    right: -93px; }\\n  .contact-area .header-lines:before {\\n    left: -100px;\\n    width: 78px; }\\n\\n.contact-form {\\n  display: grid;\\n  width: 100%;\\n  padding-top: 7px;\\n  max-width: 570px;\\n  grid-template-areas: 'name email' 'message message' 'button button';\\n  grid-gap: 30px;\\n  grid-template-rows: 46px 126px 35px;\\n  grid-template-columns: 1fr 1fr; }\\n  @media (max-width: 420px) {\\n    .contact-form {\\n      grid-template-columns: 45% 45%; } }\\n  .contact-form input, .contact-form textarea {\\n    background-color: #245963;\\n    border: 1px solid #387d89;\\n    resize: none; }\\n  .contact-form .contact-form__name {\\n    grid-area: name; }\\n  .contact-form .contact-form__email {\\n    grid-area: email; }\\n  .contact-form .contact-form__message {\\n    grid-area: message; }\\n  .contact-form .contact-form__button-submit {\\n    grid-area: button;\\n    position: relative;\\n    width: 100px;\\n    margin: 0 calc(50% - 47px); }\\n    .contact-form .contact-form__button-submit input {\\n      display: block;\\n      grid-area: button;\\n      background-color: #245963;\\n      position: relative;\\n      height: 36px;\\n      width: 102px;\\n      font-family: 'FjallaOne-Regular';\\n      text-transform: uppercase;\\n      color: white; }\\n  .contact-form .contact-form__button-submit:after {\\n    content: \\\"\\\";\\n    display: block;\\n    position: absolute;\\n    background-color: #245963;\\n    top: 28px;\\n    left: 43px;\\n    transform: rotate(-45deg);\\n    width: 15px;\\n    height: 15px;\\n    border: 1px solid #387d89;\\n    border-right: 0;\\n    border-top: 0; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/main-contact-area.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-cards.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-cards.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/images/promo-cards/Chat.png */ \"./src/assets/images/promo-cards/Chat.png\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../assets/images/promo-cards/Pencil.png */ \"./src/assets/images/promo-cards/Pencil.png\"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../assets/images/promo-cards/Crown.png */ \"./src/assets/images/promo-cards/Crown.png\"));\nvar ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../assets/images/promo-cards/User.png */ \"./src/assets/images/promo-cards/User.png\"));\n// Module\nexports.push([module.i, \".promo-cards {\\n  display: grid;\\n  grid-template-rows: 1fr 1fr;\\n  grid-template-columns: 1fr 1fr;\\n  min-height: 672px;\\n  color: white; }\\n  @media (max-width: 675px) {\\n    .promo-cards {\\n      display: block; } }\\n  .promo-cards div {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding-top: 164px; }\\n    .promo-cards div h3 {\\n      position: relative;\\n      font-family: 'FjallaOne-Regular';\\n      margin-top: 18px;\\n      margin-bottom: 5px;\\n      font-size: 29px;\\n      font-weight: 400; }\\n    .promo-cards div h3:before {\\n      position: absolute;\\n      top: -125px;\\n      left: calc(50% - 51px); }\\n    .promo-cards div p {\\n      text-align: center;\\n      margin-top: 0;\\n      padding: 0 62px 0 47px;\\n      font-family: 'SourceSansPro-Regular'; }\\n  .promo-cards .card-1 {\\n    background-color: #e84c3d; }\\n    .promo-cards .card-1 h3:before {\\n      content: url(\" + ___CSS_LOADER_URL___0___ + \");\\n      position: absolute;\\n      top: -125px;\\n      left: calc(50% - 51px); }\\n  .promo-cards .card-2 {\\n    background-color: #fdbd1f; }\\n    .promo-cards .card-2 h3:before {\\n      content: url(\" + ___CSS_LOADER_URL___1___ + \"); }\\n  .promo-cards .card-3 {\\n    background-color: #1bbc9b; }\\n    .promo-cards .card-3 h3:before {\\n      content: url(\" + ___CSS_LOADER_URL___2___ + \"); }\\n  .promo-cards .card-4 {\\n    background-color: #9b58b5; }\\n    .promo-cards .card-4 h3:before {\\n      content: url(\" + ___CSS_LOADER_URL___3___ + \"); }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/main-promo-cards.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-persons.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-persons.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/images/promo-persons/person-1.png */ \"./src/assets/images/promo-persons/person-1.png\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../assets/images/promo-persons/person-2.png */ \"./src/assets/images/promo-persons/person-2.png\"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../assets/images/promo-persons/person-3.png */ \"./src/assets/images/promo-persons/person-3.png\"));\n// Module\nexports.push([module.i, \".promo-persons {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n  .promo-persons h3 {\\n    margin: 76px 0 10px 0;\\n    padding-left: 3px;\\n    font-family: 'FjallaOne-Regular';\\n    font-size: 29px;\\n    font-weight: 400;\\n    color: white; }\\n  .promo-persons h4 {\\n    position: relative;\\n    margin-top: 0px;\\n    padding-left: 3px;\\n    font-family: 'FjallaOne-Regular';\\n    font-size: 21px;\\n    font-weight: 400;\\n    color: white; }\\n\\n.person-cards-wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  padding-top: 37px; }\\n  @media (max-width: 940px) {\\n    .person-cards-wrapper {\\n      flex-direction: column;\\n      align-items: center; } }\\n  .person-cards-wrapper .person-card {\\n    flex-grow: 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding-top: 45px;\\n    height: 445px;\\n    max-width: 370px;\\n    background-color: #245963; }\\n    @media (max-width: 940px) {\\n      .person-cards-wrapper .person-card {\\n        margin-bottom: 35px;\\n        width: 100%;\\n        max-width: none; } }\\n    .person-cards-wrapper .person-card .person-card__foto {\\n      width: 181px;\\n      height: 181px;\\n      border-radius: 50%; }\\n    .person-cards-wrapper .person-card .person-card__text {\\n      width: 100%;\\n      padding-top: 10px;\\n      text-align: center;\\n      font-family: 'SourceSansPro-Regular';\\n      color: #5b94a0;\\n      line-height: 27px; }\\n    .person-cards-wrapper .person-card .button-arrow {\\n      margin: 16px 0px 0 8px;\\n      height: 36px;\\n      width: 102px;\\n      border: none; }\\n    .person-cards-wrapper .person-card .button-arrow:after {\\n      border: none;\\n      left: 44px;\\n      top: 28px; }\\n    .person-cards-wrapper .person-card .button-arrow:before {\\n      font-size: 14px;\\n      letter-spacing: 0.5px;\\n      left: 20px;\\n      top: 10px; }\\n  .person-cards-wrapper .person-card:nth-child(1) {\\n    border-top: 7px solid #e84c3d; }\\n    .person-cards-wrapper .person-card:nth-child(1) .person-card__foto {\\n      background: url(\" + ___CSS_LOADER_URL___0___ + \"); }\\n    .person-cards-wrapper .person-card:nth-child(1) .button-arrow,\\n    .person-cards-wrapper .person-card:nth-child(1) .button-arrow:after {\\n      background-color: #e84c3d; }\\n  .person-cards-wrapper .person-card:nth-child(2) {\\n    border-top: 7px solid #fdbd1f; }\\n    @media (min-width: 940px) {\\n      .person-cards-wrapper .person-card:nth-child(2) {\\n        margin: 0 8px; } }\\n    .person-cards-wrapper .person-card:nth-child(2) .person-card__foto {\\n      background: url(\" + ___CSS_LOADER_URL___1___ + \"); }\\n    .person-cards-wrapper .person-card:nth-child(2) .button-arrow,\\n    .person-cards-wrapper .person-card:nth-child(2) .button-arrow:after {\\n      background-color: #fdbd1f; }\\n  .person-cards-wrapper .person-card:nth-child(3) {\\n    border-top: 7px solid #1bbc9b; }\\n    .person-cards-wrapper .person-card:nth-child(3) .person-card__foto {\\n      background: url(\" + ___CSS_LOADER_URL___2___ + \"); }\\n    .person-cards-wrapper .person-card:nth-child(3) .button-arrow,\\n    .person-cards-wrapper .person-card:nth-child(3) .button-arrow:after {\\n      background-color: #1bbc9b; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/main-promo-persons.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-text.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-text.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".promo-text {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  min-height: 336px;\\n  padding-top: 105px;\\n  font-family: 'FjallaOne-Regular';\\n  color: white; }\\n  .promo-text h2 {\\n    margin-bottom: 0px;\\n    padding-left: 3px;\\n    font-size: 40px;\\n    letter-spacing: 5.4px;\\n    font-weight: 400; }\\n  .promo-text h3 {\\n    margin-top: 18px;\\n    margin-bottom: 23px;\\n    padding-left: 7px;\\n    font-size: 29px;\\n    letter-spacing: 5.9px;\\n    font-weight: 400; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/main-promo-text.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/normalize.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/normalize.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */\\n/**\\n * 1. Set default font family to sans-serif.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\nhtml {\\n  font-family: sans-serif;\\n  /* 1 */\\n  -ms-text-size-adjust: 100%;\\n  /* 2 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/**\\n * Remove default margin.\\n */\\nbody {\\n  margin: 0; }\\n\\n/* HTML5 display definitions\\n   ========================================================================== */\\n/**\\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\\n * and Firefox.\\n * Correct `block` display not defined for `main` in IE 11.\\n */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmain,\\nmenu,\\nnav,\\nsection,\\nsummary {\\n  display: block; }\\n\\n/**\\n * 1. Correct `inline-block` display not defined in IE 8/9.\\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\\n */\\naudio,\\ncanvas,\\nprogress,\\nvideo {\\n  display: inline-block;\\n  /* 1 */\\n  vertical-align: baseline;\\n  /* 2 */ }\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0; }\\n\\n/**\\n * Address `[hidden]` styling not present in IE 8/9/10.\\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\\n */\\n[hidden],\\ntemplate {\\n  display: none; }\\n\\n/* Links\\n   ========================================================================== */\\n/**\\n * Remove the gray background color from active links in IE 10.\\n */\\na {\\n  background-color: transparent; }\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\na:active,\\na:hover {\\n  outline: 0; }\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\\n */\\nabbr[title] {\\n  border-bottom: 1px dotted; }\\n\\n/**\\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\\n */\\nb,\\nstrong {\\n  font-weight: bold; }\\n\\n/**\\n * Address styling not present in Safari and Chrome.\\n */\\ndfn {\\n  font-style: italic; }\\n\\n/**\\n * Address variable `h1` font-size and margin within `section` and `article`\\n * contexts in Firefox 4+, Safari, and Chrome.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/**\\n * Address styling not present in IE 8/9.\\n */\\nmark {\\n  background: #ff0;\\n  color: #000; }\\n\\n/**\\n * Address inconsistent and variable font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsup {\\n  top: -0.5em; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove border when inside `a` element in IE 8/9/10.\\n */\\nimg {\\n  border: 0; }\\n\\n/**\\n * Correct overflow not hidden in IE 9/10/11.\\n */\\nsvg:not(:root) {\\n  overflow: hidden; }\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * Address margin not present in IE 8/9 and Safari.\\n */\\nfigure {\\n  margin: 1em 40px; }\\n\\n/**\\n * Address differences between Firefox and other browsers.\\n */\\nhr {\\n  -moz-box-sizing: content-box;\\n  box-sizing: content-box;\\n  height: 0; }\\n\\n/**\\n * Contain overflow in all browsers.\\n */\\npre {\\n  overflow: auto; }\\n\\n/**\\n * Address odd `em`-unit font size rendering in all browsers.\\n */\\ncode,\\nkbd,\\npre,\\nsamp {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\\n * styling of `select`, unless a `border` property is set.\\n */\\n/**\\n * 1. Correct color not being inherited.\\n *    Known issue: affects color of disabled elements.\\n * 2. Correct font properties not being inherited.\\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  color: inherit;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n  margin: 0;\\n  /* 3 */ }\\n\\n/**\\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\\n */\\nbutton {\\n  overflow: visible; }\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\\n * Correct `select` style inheritance in Firefox.\\n */\\nbutton,\\nselect {\\n  text-transform: none; }\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n */\\nbutton,\\nhtml input[type=\\\"button\\\"],\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n  /* 2 */\\n  cursor: pointer;\\n  /* 3 */ }\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\nbutton[disabled],\\nhtml input[disabled] {\\n  cursor: default; }\\n\\n/**\\n * Remove inner padding and border in Firefox 4+.\\n */\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0; }\\n\\n/**\\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\ninput {\\n  line-height: normal; }\\n\\n/**\\n * It's recommended that you don't attempt to style these elements.\\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\\n *\\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\\n * 2. Remove excess padding in IE 8/9/10.\\n */\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\\n * `font-size` values of the `input`, it causes the cursor style of the\\n * decrement button to change from `default` to `text`.\\n */\\ninput[type=\\\"number\\\"]::-webkit-inner-spin-button,\\ninput[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\\n *    (include `-moz` to future-proof).\\n */\\ninput[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  -moz-box-sizing: content-box;\\n  -webkit-box-sizing: content-box;\\n  /* 2 */\\n  box-sizing: content-box; }\\n\\n/**\\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\\n * Safari (but not Chrome) clips the cancel button when the search input has\\n * padding (and `textfield` appearance).\\n */\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\nfieldset {\\n  border: 1px solid #c0c0c0;\\n  margin: 0 2px;\\n  padding: 0.35em 0.625em 0.75em; }\\n\\n/**\\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\\n */\\nlegend {\\n  border: 0;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Remove default vertical scrollbar in IE 8/9/10/11.\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\n * Don't inherit the `font-weight` (applied by a rule above).\\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\\n */\\noptgroup {\\n  font-weight: bold; }\\n\\n/* Tables\\n   ========================================================================== */\\n/**\\n * Remove most spacing between table cells.\\n */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\ntd,\\nth {\\n  padding: 0; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/normalize.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/images/main-foto.png */ \"./src/assets/images/main-foto.png\"));\n// Module\nexports.push([module.i, \"body {\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center -1px;\\n  background-color: #29606b; }\\n\\n.common-wrapper {\\n  max-width: 1170px;\\n  margin: 0 auto; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/fonts/FjallaOne-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/FjallaOne-Regular.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4fa3683005fa20dd058f47b9cfd411df.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/FjallaOne-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/SourceSansPro-Regular.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/SourceSansPro-Regular.ttf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c1678b46f7dd3f50ceac94ed4e0ad01a.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/SourceSansPro-Regular.ttf?");

/***/ }),

/***/ "./src/assets/images/contact/Mail.png":
/*!********************************************!*\
  !*** ./src/assets/images/contact/Mail.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4f720504311f81370811c2416115210a.png\";\n\n//# sourceURL=webpack:///./src/assets/images/contact/Mail.png?");

/***/ }),

/***/ "./src/assets/images/footer/facebook.png":
/*!***********************************************!*\
  !*** ./src/assets/images/footer/facebook.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"67dc907e987297234c3506c3550bdde1.png\";\n\n//# sourceURL=webpack:///./src/assets/images/footer/facebook.png?");

/***/ }),

/***/ "./src/assets/images/footer/twitter.png":
/*!**********************************************!*\
  !*** ./src/assets/images/footer/twitter.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0aff14562a69f06ae62c729008e39875.png\";\n\n//# sourceURL=webpack:///./src/assets/images/footer/twitter.png?");

/***/ }),

/***/ "./src/assets/images/main-foto.png":
/*!*****************************************!*\
  !*** ./src/assets/images/main-foto.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3453766feef3af93286d28722b96eefc.png\";\n\n//# sourceURL=webpack:///./src/assets/images/main-foto.png?");

/***/ }),

/***/ "./src/assets/images/promo-cards/Chat.png":
/*!************************************************!*\
  !*** ./src/assets/images/promo-cards/Chat.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"095ebd3df32299673d0f60086b589e16.png\";\n\n//# sourceURL=webpack:///./src/assets/images/promo-cards/Chat.png?");

/***/ }),

/***/ "./src/assets/images/promo-cards/Crown.png":
/*!*************************************************!*\
  !*** ./src/assets/images/promo-cards/Crown.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"998b04be74ac21b64ae3a35b71b56b75.png\";\n\n//# sourceURL=webpack:///./src/assets/images/promo-cards/Crown.png?");

/***/ }),

/***/ "./src/assets/images/promo-cards/Pencil.png":
/*!**************************************************!*\
  !*** ./src/assets/images/promo-cards/Pencil.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"da939bc3306687838f6623e131bbef55.png\";\n\n//# sourceURL=webpack:///./src/assets/images/promo-cards/Pencil.png?");

/***/ }),

/***/ "./src/assets/images/promo-cards/User.png":
/*!************************************************!*\
  !*** ./src/assets/images/promo-cards/User.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e1d6fc1928bd47f25d8e0210f9820587.png\";\n\n//# sourceURL=webpack:///./src/assets/images/promo-cards/User.png?");

/***/ }),

/***/ "./src/assets/images/promo-persons/person-1.png":
/*!******************************************************!*\
  !*** ./src/assets/images/promo-persons/person-1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b18c8b39d4a931ebf2be4e12fe75d47a.png\";\n\n//# sourceURL=webpack:///./src/assets/images/promo-persons/person-1.png?");

/***/ }),

/***/ "./src/assets/images/promo-persons/person-2.png":
/*!******************************************************!*\
  !*** ./src/assets/images/promo-persons/person-2.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"657c5aacff7e7fae1b0bbc7d8f3ff726.png\";\n\n//# sourceURL=webpack:///./src/assets/images/promo-persons/person-2.png?");

/***/ }),

/***/ "./src/assets/images/promo-persons/person-3.png":
/*!******************************************************!*\
  !*** ./src/assets/images/promo-persons/person-3.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"24d02274183733733efb3d17433e86d9.png\";\n\n//# sourceURL=webpack:///./src/assets/images/promo-persons/person-3.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_common_elements_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/common-elements.scss */ \"./src/styles/common-elements.scss\");\n/* harmony import */ var _styles_common_elements_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_common_elements_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/normalize.scss */ \"./src/styles/normalize.scss\");\n/* harmony import */ var _styles_normalize_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/header.scss */ \"./src/styles/header.scss\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/fonts.scss */ \"./src/styles/fonts.scss\");\n/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_main_promo_text_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main-promo-text.scss */ \"./src/styles/main-promo-text.scss\");\n/* harmony import */ var _styles_main_promo_text_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_promo_text_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_main_promo_cards_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/main-promo-cards.scss */ \"./src/styles/main-promo-cards.scss\");\n/* harmony import */ var _styles_main_promo_cards_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_main_promo_cards_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_main_promo_persons_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/main-promo-persons.scss */ \"./src/styles/main-promo-persons.scss\");\n/* harmony import */ var _styles_main_promo_persons_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_promo_persons_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_main_contact_area_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/main-contact-area.scss */ \"./src/styles/main-contact-area.scss\");\n/* harmony import */ var _styles_main_contact_area_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_main_contact_area_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/footer.scss */ \"./src/styles/footer.scss\");\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/common-elements.scss":
/*!*****************************************!*\
  !*** ./src/styles/common-elements.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./common-elements.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common-elements.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/common-elements.scss?");

/***/ }),

/***/ "./src/styles/fonts.scss":
/*!*******************************!*\
  !*** ./src/styles/fonts.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./fonts.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/fonts.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/fonts.scss?");

/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/footer.scss?");

/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/header.scss?");

/***/ }),

/***/ "./src/styles/main-contact-area.scss":
/*!*******************************************!*\
  !*** ./src/styles/main-contact-area.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main-contact-area.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-contact-area.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/main-contact-area.scss?");

/***/ }),

/***/ "./src/styles/main-promo-cards.scss":
/*!******************************************!*\
  !*** ./src/styles/main-promo-cards.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main-promo-cards.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-cards.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/main-promo-cards.scss?");

/***/ }),

/***/ "./src/styles/main-promo-persons.scss":
/*!********************************************!*\
  !*** ./src/styles/main-promo-persons.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main-promo-persons.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-persons.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/main-promo-persons.scss?");

/***/ }),

/***/ "./src/styles/main-promo-text.scss":
/*!*****************************************!*\
  !*** ./src/styles/main-promo-text.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main-promo-text.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main-promo-text.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/main-promo-text.scss?");

/***/ }),

/***/ "./src/styles/normalize.scss":
/*!***********************************!*\
  !*** ./src/styles/normalize.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./normalize.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/normalize.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/normalize.scss?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });