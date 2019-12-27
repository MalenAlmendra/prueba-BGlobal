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
var _jsxFileName = "C:\\Users\\Malen\\Desktop\\prueba-bglobal\\components\\Post.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Post = function Post(props) {
  var image = '';
  var now = moment__WEBPACK_IMPORTED_MODULE_2__(props.art.display_date).format('DD/MM/YYYY');
  console.log(now);

  if (props.art.promo_items) {
    if (props.art.promo_items.basic.resized_urls) {
      image = __jsx("img", {
        src: props.art.promo_items.basic.resized_urls[2].resizedUrl,
        alt: props.art.promo_items.basic.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    } else image = __jsx("img", {
      className: "image",
      src: props.art.promo_items.basic.url,
      alt: props.art.promo_items.basic.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "jsx-528844419" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, image), __jsx("div", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.art.headlines.basic), __jsx("p", {
    className: "jsx-528844419",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, now))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1716571045",
    __self: this
  }, "h1.jsx-528844419{color:#0f0f0f;}.post.jsx-528844419{grid-column:span 4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxQb3N0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2lCLEFBSW9CLEFBRXVCLGNBRnRCLEtBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYWxlblxcRGVza3RvcFxccHJ1ZWJhLWJnbG9iYWxcXGNvbXBvbmVudHNcXFBvc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpPT57XHJcbiAgICBcclxuXHJcbiAgICBsZXQgaW1hZ2U9JydcclxuICAgIGxldCBub3cgPW1vbWVudChwcm9wcy5hcnQuZGlzcGxheV9kYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKTtcclxuICAgIGNvbnNvbGUubG9nKG5vdylcclxuXHJcbiAgICBpZiAocHJvcHMuYXJ0LnByb21vX2l0ZW1zKXtcclxuICAgICAgICBpZihwcm9wcy5hcnQucHJvbW9faXRlbXMuYmFzaWMucmVzaXplZF91cmxzKXtcclxuICAgICAgICAgICAgaW1hZ2U9PGltZyBzcmM9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5yZXNpemVkX3VybHNbMl0ucmVzaXplZFVybH0gYWx0PXtwcm9wcy5hcnQucHJvbW9faXRlbXMuYmFzaWMuc3VidGl0bGV9IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIGltYWdlPSA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9wcy5hcnQucHJvbW9faXRlbXMuYmFzaWMudXJsfSBhbHQ9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5zdWJ0aXRsZX0vPlxyXG4gICAgfVxyXG4gICAgXHJcbiBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgey8qIEltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogQ29udGVudCB0ZXh0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcnQuaGVhZGxpbmVzLmJhc2ljfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e25vd308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzBmMGYwZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9zdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDoxNzFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Malen\\\\Desktop\\\\prueba-bglobal\\\\components\\\\Post.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "30579311",
    __self: this
  }, "img{max-width:171px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFsZW5cXERlc2t0b3BcXHBydWViYS1iZ2xvYmFsXFxjb21wb25lbnRzXFxQb3N0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQytCLEFBSWtDLGdCQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hbGVuXFxEZXNrdG9wXFxwcnVlYmEtYmdsb2JhbFxcY29tcG9uZW50c1xcUG9zdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcyk9PntcclxuICAgIFxyXG5cclxuICAgIGxldCBpbWFnZT0nJ1xyXG4gICAgbGV0IG5vdyA9bW9tZW50KHByb3BzLmFydC5kaXNwbGF5X2RhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpO1xyXG4gICAgY29uc29sZS5sb2cobm93KVxyXG5cclxuICAgIGlmIChwcm9wcy5hcnQucHJvbW9faXRlbXMpe1xyXG4gICAgICAgIGlmKHByb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5yZXNpemVkX3VybHMpe1xyXG4gICAgICAgICAgICBpbWFnZT08aW1nIHNyYz17cHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnJlc2l6ZWRfdXJsc1syXS5yZXNpemVkVXJsfSBhbHQ9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy5zdWJ0aXRsZX0gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgaW1hZ2U9IDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3Byb3BzLmFydC5wcm9tb19pdGVtcy5iYXNpYy51cmx9IGFsdD17cHJvcHMuYXJ0LnByb21vX2l0ZW1zLmJhc2ljLnN1YnRpdGxlfS8+XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICB7LyogSW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBDb250ZW50IHRleHQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFydC5oZWFkbGluZXMuYmFzaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bm93fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMGYwZjBmXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjpzcGFuIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjE3MXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Malen\\\\Desktop\\\\prueba-bglobal\\\\components\\\\Post.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=index.js.8fff545c5deae2ce5aea.hot-update.js.map