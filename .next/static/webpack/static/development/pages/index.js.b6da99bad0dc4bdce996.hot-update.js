webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Tags.jsx":
/*!*****************************!*\
  !*** ./components/Tags.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Malen\\Desktop\\prueba-bglobal\\components\\Tags.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Tags = function Tags(props) {
  return __jsx("div", {
    className: "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.tags.slice(0, 10).map(function (t) {
    return __jsx("a", {
      className: "tag",
      href: "/temas/" + t.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "\u2022 ", t.text);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ })

})
//# sourceMappingURL=index.js.b6da99bad0dc4bdce996.hot-update.js.map