webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Posts.jsx":
/*!******************************!*\
  !*** ./components/Posts.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ "./components/Post.jsx");
var _jsxFileName = "C:\\Users\\Malen\\Desktop\\prueba-bglobal\\components\\Posts.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Posts = function Posts(props) {
  return __jsx("div", {
    className: "posts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.articles.map(function (article) {
    return article.subtype === '7' ? __jsx(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: article._id,
      art: article,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }) : null;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false

})
//# sourceMappingURL=index.js.ab14886cc25b892a8e02.hot-update.js.map