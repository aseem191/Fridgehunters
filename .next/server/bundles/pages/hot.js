module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__);
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\Fridgehunters\\components\\Header.js";





 //import "typeface-lobster";

var linkStyle = {
  marginRight: 15,
  border: '2px solid #DDD'
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-620698464"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-620698464"
  }, "Fridgehunters"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "620698464",
    css: "h1.jsx-620698464{font-family:\"Lobster\",Times,serif;font-size:54px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjc0QsQUFJK0Msa0NBRXZDLGVBQUMiLCJmaWxlIjoiY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcQXNlZW1cXFJlYWN0IFByb2plY3RzXFxGcmlkZ2VodW50ZXJzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbi8vaW1wb3J0IFwidHlwZWZhY2UtbG9ic3RlclwiO1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiAxNSxcclxuICBib3JkZXI6ICcycHggc29saWQgI0RERCdcclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgIFx0PGgxIGFsaWduPVwiY2VudGVyXCI+RnJpZGdlaHVudGVyczwvaDE+PHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTRweFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXIgIHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG90XCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiBcIjE2cHhcIiAgfX0+SE9UPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6IFwiMTZweFwiICB9fT5IT01FPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6IFwiMTZweFwiIH19PkNSRUFURTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=components\\Header.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default.a, {
    style: {
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-620698464"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/hot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    style: {
      fontWeight: "bold",
      fontSize: "16px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "HOT")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    style: {
      fontWeight: "bold",
      fontSize: "16px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "HOME")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    style: {
      fontWeight: "bold",
      fontSize: "16px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "CREATE"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meta__ = __webpack_require__("./components/meta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\Fridgehunters\\components\\MyLayout.js";



 //import indigo from '@material-ui/core/colors/violet';
//import pink from '@material-ui/core/colors/blue';
//import red from '@material-ui/core/colors/red';

var theme = Object(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#00cc44' // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main

    },
    secondary: {
      main: '#80a2ff' // dark: will be calculated from palette.secondary.main,

    },
    tertiary: {
      main: '#33ffcc' // dark: will be calculated from palette.secondary.main,

    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!

    }
  }
});
var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__meta__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/meta.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\Fridgehunters\\components\\meta.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  /*background-image: url("/static/download.jpg");
        background-repeat: no-repeat;
        backgroun-attachment: fixed;
        background-position: right bottom;*/
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2117693257"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2117693257"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-2117693257"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2117693257",
    css: "@import url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');@fontface{font-family:'Gentium Book Basic',cursive;src:url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');}@import url('https://fonts.googleapis.com/css?family=Montserrat');@fontface{font-family:'Montserrat',cursive;src:url('https://fonts.googleapis.com/css?family=Montserrat');}@import url('https://fonts.googleapis.com/css?family=Noto+Sans');@fontface{font-family:'Noto Sans',cursive;src:url('https://fonts.googleapis.com/css?family=Noto+Sans');}@import url('https://fonts.googleapis.com/css?family=Lobster');@fontface{font-family:'Lobster',cursive;src:url('https://fonts.googleapis.com/css?family=Lobster');}body{background:#e1ffdb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1ldGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXVCLEFBRzRCLEFBR29ELEFBR3pCLEFBS3FCLEFBRzdCLEFBR21DLEFBR3RDLEFBSTBCLEFBRzVCLG1CQXpCbkMsV0EyQkMsRUFQQSxDQU5FLFFBUkEsZ0RBcUJELElBUEEsRUFORSxnQkFSQSIsImZpbGUiOiJjb21wb25lbnRzXFxtZXRhLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcQXNlZW1cXFJlYWN0IFByb2plY3RzXFxGcmlkZ2VodW50ZXJzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2Rvd25sb2FkLmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bi1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207Ki9cclxuICByZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgYm9keSB7IFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMWZmZGI7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R2VudGl1bStCb29rK0Jhc2ljJyk7XHJcblxyXG4gICAgICAgICAgQGZvbnRmYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHZW50aXVtIEJvb2sgQmFzaWMnLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdlbnRpdW0rQm9vaytCYXNpYycpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQnKTtcclxuXHJcbiAgICAgICAgICBAZm9udGZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zJyk7XHJcblxyXG4gICAgICAgIEBmb250ZmFjZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIGN1cnNpdmU7XHJcbiAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2FucycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlcicpO1xyXG5cclxuICAgICAgICBAZm9udGZhY2Uge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxuICAgICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlcicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKX1cclxuIl19 */\n/*@ sourceURL=components\\meta.js */"
  }));
});

/***/ }),

/***/ "./components/urlname.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("https://herokufhapi.herokuapp.com");

/***/ }),

/***/ "./pages/hot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_urlname_js__ = __webpack_require__("./components/urlname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Chip__ = __webpack_require__("@material-ui/core/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_CardActions__ = __webpack_require__("@material-ui/core/CardActions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Badge__ = __webpack_require__("@material-ui/core/Badge");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Badge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Badge__);
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\Fridgehunters\\pages\\hot.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var RecipeList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecipeList, _React$Component);

  function RecipeList(props) {
    var _this;

    _classCallCheck(this, RecipeList);

    _this = _possibleConstructorReturn(this, (RecipeList.__proto__ || Object.getPrototypeOf(RecipeList)).call(this, props));
    _this.addEndorsement = _this.addEndorsement.bind(_assertThisInitialized(_this));
    _this.state = {
      recipes: [],
      endorsedrecipes: [],
      listready: false
    };
    __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_6__components_urlname_js__["a" /* default */] + "/hotrecipes").then(function (response) {
      return response.text();
    }).then(function (datas) {
      var data = JSON.parse("[" + datas + "]"); //console.log("Show data fetched. Count: " + JSON.stringify(data))

      _this.setState({
        recipes: data,
        listready: true
      });
    });
    return _this;
  }

  _createClass(RecipeList, [{
    key: "addEndorsement",
    value: function addEndorsement(event) {
      var _this2 = this;

      var index = this.state.endorsedrecipes.indexOf(event.currentTarget.getAttribute('key2'));
      var temprec = event.currentTarget.getAttribute('key2');
      var tempendorselist = this.state.endorsedrecipes.slice().concat([temprec]);

      if (index == -1) {
        this.setState(function (prevState, props) {
          return {
            endorsedrecipes: tempendorselist
          };
        });
        __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_6__components_urlname_js__["a" /* default */] + "/endorsement/" + encodeURI(temprec), {
          method: 'PUT'
        }).then(function (response) {
          return response.text();
        }).then(function (data) {
          console.log(data);
          return 1;
        }).then(function (useless) {
          __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_6__components_urlname_js__["a" /* default */] + "/hotrecipes").then(function (response) {
            return response.text();
          }).then(function (datas) {
            var data = JSON.parse("[" + datas + "]");
            console.log("Coming second"); //console.log("Show data fetched. Count: " + JSON.stringify(data))

            _this2.setState({
              recipes: data
            });
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-429575055"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-429575055"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-429575055"
      }), this.state.listready ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-429575055"
      }, "Loading hot recipes..."), this.state.recipes.map(function (recipe) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          className: "jsx-429575055"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Card___default.a, {
          style: {
            maxWidth: 450,
            backgroundColor: '#b3ffb3'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardContent___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default.a, {
          gutterBottom: true,
          variant: "headline",
          component: "h1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          className: "jsx-429575055"
        }, recipe.name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default.a, {
          component: "p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, recipe.ingredients.map(function (ingred) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Chip___default.a, {
            label: ingred,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          });
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          className: "jsx-429575055"
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          className: "jsx-429575055"
        }, recipe.description.split('\n').map(function (item, key) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            className: "jsx-429575055"
          }, item, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            className: "jsx-429575055"
          }));
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default.a, {
          component: "p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          className: "jsx-429575055"
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          className: "jsx-429575055"
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Badge___default.a, {
          color: "secondary",
          badgeContent: recipe.endorse,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default.a, {
          size: "small",
          variant: "contained",
          color: "primary",
          key2: recipe.name,
          style: {
            fontFamily: "Gentium Book Basic",
            fontWeight: "bold",
            fontSize: '15px'
          },
          onClick: _this3.addEndorsement,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _this3.state.endorsedrecipes.indexOf(recipe.name) == -1 ? "Endorse" : "Added endorsement")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_CardActions___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          className: "jsx-429575055"
        }));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "429575055",
        css: "h2.jsx-429575055{font-family:\"Gentium Book Basic\",Times,serif;}p.jsx-429575055{font-family:\"Noto Sans\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxob3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUd3QixBQUswRCxBQUlULG9DQUN4QyxTQUpBIiwiZmlsZSI6InBhZ2VzXFxob3QuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXEZyaWRnZWh1bnRlcnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdXJsbmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3VybG5hbWUuanMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcclxuXHJcbmNsYXNzIFJlY2lwZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuYWRkRW5kb3JzZW1lbnQgPSB0aGlzLmFkZEVuZG9yc2VtZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICByZWNpcGVzOiBbXSxcclxuICAgICAgZW5kb3JzZWRyZWNpcGVzOiBbXSxcclxuICAgICAgbGlzdHJlYWR5OiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKHVybG5hbWUgKyBcIi9ob3RyZWNpcGVzXCIpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGFzID0+IHtcclxuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKFwiW1wiICsgZGF0YXMgICsgXCJdXCIpXHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHJlY2lwZXM6IGRhdGEsXHJcbiAgICAgICAgbGlzdHJlYWR5OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYWRkRW5kb3JzZW1lbnQoZXZlbnQpe1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5zdGF0ZS5lbmRvcnNlZHJlY2lwZXMuaW5kZXhPZihldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5MicpKTtcclxuICAgIHZhciB0ZW1wcmVjID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleTInKTtcclxuICAgIHZhciB0ZW1wZW5kb3JzZWxpc3QgPSB0aGlzLnN0YXRlLmVuZG9yc2VkcmVjaXBlcy5zbGljZSgpLmNvbmNhdChbdGVtcHJlY10pXHJcblxyXG4gICAgaWYoaW5kZXggPT0gLTEpe1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7ZW5kb3JzZWRyZWNpcGVzOiB0ZW1wZW5kb3JzZWxpc3R9fSlcclxuICAgICAgZmV0Y2godXJsbmFtZSArIFwiL2VuZG9yc2VtZW50L1wiICsgZW5jb2RlVVJJKHRlbXByZWMpLCB7bWV0aG9kOiAnUFVUJ30pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgIH0pLnRoZW4odXNlbGVzcyA9PiB7ZmV0Y2godXJsbmFtZSArIFwiL2hvdHJlY2lwZXNcIikudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpLnRoZW4oZGF0YXMgPT4ge1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShcIltcIiArIGRhdGFzICArIFwiXVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29taW5nIHNlY29uZFwiKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICByZWNpcGVzOiBkYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPjxici8+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5saXN0cmVhZHkgXHJcbiAgICAgICAgPyBudWxsXHJcbiAgICAgICAgOiA8aDI+TG9hZGluZyBob3QgcmVjaXBlcy4uLjwvaDI+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnJlY2lwZXMubWFwKHJlY2lwZSA9PiAoPGRpdj48Q2FyZCBzdHlsZT17e21heFdpZHRoOiA0NTAsICBiYWNrZ3JvdW5kQ29sb3I6ICcjYjNmZmIzJ319ID5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoZWFkbGluZVwiIGNvbXBvbmVudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgPGgyPntyZWNpcGUubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICB7cmVjaXBlLmluZ3JlZGllbnRzLm1hcChpbmdyZWQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENoaXAgbGFiZWw9e2luZ3JlZH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT48YnIvPlxyXG4gICAgICAgICAgICAgIDxwPntyZWNpcGUuZGVzY3JpcHRpb24uc3BsaXQoJ1xcbicpLm1hcCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtrZXl9PntpdGVtfTxici8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIH0pfTwvcD5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+PGJyLz48YnIvPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInNlY29uZGFyeVwiIGJhZGdlQ29udGVudD17cmVjaXBlLmVuZG9yc2V9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgIHZhcmlhbnQ9XCJjb250YWluZWRcIiAgY29sb3I9XCJwcmltYXJ5XCIga2V5Mj17cmVjaXBlLm5hbWV9ICBzdHlsZT17eyBmb250RmFtaWx5OiBcIkdlbnRpdW0gQm9vayBCYXNpY1wiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6ICcxNXB4JyB9fSBvbkNsaWNrPXt0aGlzLmFkZEVuZG9yc2VtZW50fT5cclxuICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5lbmRvcnNlZHJlY2lwZXMuaW5kZXhPZihyZWNpcGUubmFtZSkgPT0gLTEpID8gXCJFbmRvcnNlXCIgOiBcIkFkZGVkIGVuZG9yc2VtZW50XCJ9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPC9DYXJkPjxici8+PC9kaXY+KVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgPC9kaXY+PHN0eWxlIGpzeD57YFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEZpcnN0ID0gIChwcm9wcykgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8UmVjaXBlTGlzdCAvPlxyXG4gIDwvTGF5b3V0PlxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0Il19 */\n/*@ sourceURL=pages\\hot.js */"
      }));
    }
  }]);

  return RecipeList;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var First = function First(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(RecipeList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (First);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/hot.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Badge":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Chip":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=hot.js.map