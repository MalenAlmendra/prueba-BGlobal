module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Post.jsx":
/*!*****************************!*\
  !*** ./components/Post.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/es */ "moment/locale/es");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Malen\\Desktop\\prueba-bglobal\\components\\Post.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Post = props => {
  let image = '';
  let date = moment__WEBPACK_IMPORTED_MODULE_2__(props.art.display_date).format('D MMMM YYYY');

  if (props.art.promo_items) {
    if (props.art.promo_items.basic.resized_urls) {
      image = __jsx("img", {
        src: props.art.promo_items.basic.resized_urls[2].resizedUrl,
        alt: props.art.promo_items.basic.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: undefined
      });
    } else image = __jsx("img", {
      className: "image",
      src: props.art.promo_items.basic.url,
      alt: props.art.promo_items.basic.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    });
  }

  return __jsx("div", {
    className: "jsx-528844419" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("article", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, image), __jsx("div", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, props.art.headlines.basic), __jsx("p", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, date))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1716571045",
    __self: undefined
  }, "h1.jsx-528844419{color:#0f0f0f;}.post.jsx-528844419{grid-column:span 4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxQb3N0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2lCLEFBSW9CLEFBRXVCLGNBRnRCLEtBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYWxlblxcRGVza3RvcFxccHJ1ZWJhLWJnbG9iYWxcXGNvbXBvbmVudHNcXFBvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VzJ1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcyk9PntcclxuICAgIFxyXG5cclxuICAgIGxldCBpbWFnZT0nJ1xyXG4gICAgbGV0IGRhdGUgPSBtb21lbnQocHJvcHMuYXJ0LmRpc3BsYXlfZGF0ZSkuZm9ybWF0KCdEIE1NTU0gWVlZWScpO1xyXG5cclxuICAgIGlmIChwcm9wcy5hcnQucHJvbW9faXRlbXMpe1xyXG4gICAgICAgIGlmKHByb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5yZXNpemVkX3VybHMpe1xyXG4gICAgICAgICAgICBpbWFnZT08aW1nIHNyYz17cHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnJlc2l6ZWRfdXJsc1syXS5yZXNpemVkVXJsfSBhbHQ9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5zdWJ0aXRsZX0gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgaW1hZ2U9IDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy51cmx9IGFsdD17cHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnN1YnRpdGxlfS8+XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICB7LyogSW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBDb250ZW50IHRleHQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFydC5oZWFkbGluZXMuYmFzaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57ZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzBmMGYwZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9zdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDoxNzFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Malen\\\\Desktop\\\\prueba-bglobal\\\\components\\\\Post.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "30579311",
    __self: undefined
  }, "img{max-width:171px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxQb3N0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQytCLEFBSWtDLGdCQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hbGVuXFxEZXNrdG9wXFxwcnVlYmEtYmdsb2JhbFxcY29tcG9uZW50c1xcUG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZXMnXHJcblxyXG5jb25zdCBQb3N0ID0gKHByb3BzKT0+e1xyXG4gICAgXHJcblxyXG4gICAgbGV0IGltYWdlPScnXHJcbiAgICBsZXQgZGF0ZSA9IG1vbWVudChwcm9wcy5hcnQuZGlzcGxheV9kYXRlKS5mb3JtYXQoJ0QgTU1NTSBZWVlZJyk7XHJcblxyXG4gICAgaWYgKHByb3BzLmFydC5wcm9tb19pdGVtcyl7XHJcbiAgICAgICAgaWYocHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnJlc2l6ZWRfdXJscyl7XHJcbiAgICAgICAgICAgIGltYWdlPTxpbWcgc3JjPXtwcm9wcy5hcnQucHJvbW9faXRlbXMuYmFzaWMucmVzaXplZF91cmxzWzJdLnJlc2l6ZWRVcmx9IGFsdD17cHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnN1YnRpdGxlfSAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBpbWFnZT0gPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz17cHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnVybH0gYWx0PXtwcm9wcy5hcnQucHJvbW9faXRlbXMuYmFzaWMuc3VidGl0bGV9Lz5cclxuICAgIH1cclxuICAgIFxyXG4gXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIENvbnRlbnQgdGV4dCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuYXJ0LmhlYWRsaW5lcy5iYXNpY31cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntkYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMGYwZjBmXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjpzcGFuIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjE3MXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Malen\\\\Desktop\\\\prueba-bglobal\\\\components\\\\Post.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./components/Posts.jsx":
/*!******************************!*\
  !*** ./components/Posts.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./components/Post.jsx");
var _jsxFileName = "C:\\Users\\Malen\\Desktop\\prueba-bglobal\\components\\Posts.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Posts = props => __jsx("div", {
  className: "jsx-2492567942" + " " + "posts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, props.articles.map(article => article.subtype === '7' ? __jsx(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: article._id,
  art: article,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2492567942",
  __self: undefined
}, ".posts{display:grid;grid-template-columns:repeat(12,1fr);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxQb3N0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJhLEFBR2lDLGFBRWpCLHFDQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxQb3N0cy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnXHJcblxyXG5jb25zdCBQb3N0cz0ocHJvcHMpPT4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wcy5hcnRpY2xlcy5tYXAoYXJ0aWNsZT0+KFxyXG5cclxuICAgICAgICAgICAgICAgIGFydGljbGUuc3VidHlwZT09PSc3J1xyXG4gICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2FydGljbGUuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnQ9e2FydGljbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAucG9zdHN7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMTIsMWZyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Malen\\\\Desktop\\\\prueba-bglobal\\\\components\\\\Posts.jsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./components/Tags.jsx":
/*!*****************************!*\
  !*** ./components/Tags.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Malen\\Desktop\\prueba-bglobal\\components\\Tags.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Tags = props => {
  return __jsx("div", {
    className: "jsx-1273335946" + " " + "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, props.tags.slice(0, 10).map(t => __jsx("a", {
    href: `/temas/` + t.slug,
    className: "jsx-1273335946",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "\u2022 ", t.text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1273335946",
    __self: undefined
  }, ".tags.jsx-1273335946{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxUYWdzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXYSxBQUdpQywwRUFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYWxlblxcRGVza3RvcFxccHJ1ZWJhLWJnbG9iYWxcXGNvbXBvbmVudHNcXFRhZ3MuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IFRhZ3MgPShwcm9wcyk9PntcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcHMudGFncy5zbGljZSgwLDEwKS5tYXAodD0+KFxyXG4gICAgICAgICAgICA8YSBocmVmPXtgL3RlbWFzL2ArdC5zbHVnfT7igKIge3QudGV4dH08L2E+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAudGFnc3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFnczsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Malen\\\\Desktop\\\\prueba-bglobal\\\\components\\\\Tags.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Posts */ "./components/Posts.jsx");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tags */ "./components/Tags.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Malen\\Desktop\\prueba-bglobal\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Acumulado Grilla"), __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
  tags: props.tags,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_components_Posts__WEBPACK_IMPORTED_MODULE_1__["default"], {
  articles: props.articles,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}))); //Elimina los objetos duplicados. Se utiliza para eliminar las tags repetidas


const deleteDuplicates = (arr, prop) => {
  let newArray = [];
  let lookup = {};

  for (let i in arr) {
    lookup[arr[i][prop]] = arr[i];
  }

  for (let i in lookup) {
    newArray.push(lookup[i]);
  }

  return newArray;
};

Index.getInitialProps = async req => {
  const data = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://api-test-ln.herokuapp.com/articles');
  const res = await data.json();
  let tags = [];

  for (const art of res.articles) {
    for (const tag of art.taxonomy.tags) {
      tags.push(tag);
    }
  }

  tags = deleteDuplicates(tags, 'text');
  return {
    articles: res.articles,
    tags: tags.sort(function (a, b) {
      if (a.text > b.text) {
        return 1;
      }

      if (a.text < b.text) {
        return -1;
      }

      return 0;
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Malen\Desktop\prueba-bglobal\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "moment/locale/es":
/*!***********************************!*\
  !*** external "moment/locale/es" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/locale/es");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map