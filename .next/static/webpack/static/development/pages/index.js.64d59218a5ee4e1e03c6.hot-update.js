webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Post.jsx":
/*!*****************************!*\
  !*** ./components/Post.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Malen\\Desktop\\prueba-bglobal\\components\\Post.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Post = function Post(props) {
  var image = '';
  var now = moment__WEBPACK_IMPORTED_MODULE_2__().format(props.art.display_date, 'LL');
  console.log(now);

  if (props.art.promo_items) {
    if (props.art.promo_items.basic.resized_urls) {
      image = __jsx("img", {
        src: props.art.promo_items.basic.resized_urls[2].resizedUrl,
        alt: props.art.promo_items.basic.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
    } else image = __jsx("img", {
      className: "image",
      src: props.art.promo_items.basic.url,
      alt: props.art.promo_items.basic.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "jsx-528844419" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, image), __jsx("div", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.art.headlines.basic), __jsx("p", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, Date.parse(props.art.display_date)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1716571045",
    __self: this
  }, "h1.jsx-528844419{color:#0f0f0f;}.post.jsx-528844419{grid-column:span 4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxQb3N0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2lCLEFBSW9CLEFBRXVCLGNBRnRCLEtBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYWxlblxcRGVza3RvcFxccHJ1ZWJhLWJnbG9iYWxcXGNvbXBvbmVudHNcXFBvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VzJztcclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpPT57XHJcbiAgICBsZXQgaW1hZ2U9JydcclxuICAgIGxldCBub3cgPSBtb21lbnQoKS5mb3JtYXQocHJvcHMuYXJ0LmRpc3BsYXlfZGF0ZSwnTEwnKTtcclxuICAgIGNvbnNvbGUubG9nKG5vdylcclxuXHJcbiAgICBpZiAocHJvcHMuYXJ0LnByb21vX2l0ZW1zKXtcclxuICAgICAgICBpZihwcm9wcy5hcnQucHJvbW9faXRlbXMuYmFzaWMucmVzaXplZF91cmxzKXtcclxuICAgICAgICAgICAgaW1hZ2U9PGltZyBzcmM9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5yZXNpemVkX3VybHNbMl0ucmVzaXplZFVybH0gYWx0PXtwcm9wcy5hcnQucHJvbW9faXRlbXMuYmFzaWMuc3VidGl0bGV9IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIGltYWdlPSA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9wcy5hcnQucHJvbW9faXRlbXMuYmFzaWMudXJsfSBhbHQ9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5zdWJ0aXRsZX0vPlxyXG4gICAgfVxyXG4gICAgXHJcbiBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgey8qIEltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogQ29udGVudCB0ZXh0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcnQuaGVhZGxpbmVzLmJhc2ljfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e0RhdGUucGFyc2UocHJvcHMuYXJ0LmRpc3BsYXlfZGF0ZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwZjBmMGZcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3R7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOnNwYW4gNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MTcxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Malen\\\\Desktop\\\\prueba-bglobal\\\\components\\\\Post.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "30579311",
    __self: this
  }, "img{max-width:171px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxQb3N0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QytCLEFBSWtDLGdCQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hbGVuXFxEZXNrdG9wXFxwcnVlYmEtYmdsb2JhbFxcY29tcG9uZW50c1xcUG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZXMnO1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcyk9PntcclxuICAgIGxldCBpbWFnZT0nJ1xyXG4gICAgbGV0IG5vdyA9IG1vbWVudCgpLmZvcm1hdChwcm9wcy5hcnQuZGlzcGxheV9kYXRlLCdMTCcpO1xyXG4gICAgY29uc29sZS5sb2cobm93KVxyXG5cclxuICAgIGlmIChwcm9wcy5hcnQucHJvbW9faXRlbXMpe1xyXG4gICAgICAgIGlmKHByb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5yZXNpemVkX3VybHMpe1xyXG4gICAgICAgICAgICBpbWFnZT08aW1nIHNyYz17cHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnJlc2l6ZWRfdXJsc1syXS5yZXNpemVkVXJsfSBhbHQ9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5zdWJ0aXRsZX0gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgaW1hZ2U9IDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy51cmx9IGFsdD17cHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnN1YnRpdGxlfS8+XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICB7LyogSW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBDb250ZW50IHRleHQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFydC5oZWFkbGluZXMuYmFzaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57RGF0ZS5wYXJzZShwcm9wcy5hcnQuZGlzcGxheV9kYXRlKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzBmMGYwZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9zdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDoxNzFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Malen\\\\Desktop\\\\prueba-bglobal\\\\components\\\\Post.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=index.js.64d59218a5ee4e1e03c6.hot-update.js.map