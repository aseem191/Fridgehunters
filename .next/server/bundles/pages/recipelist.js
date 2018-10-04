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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
    className: "jsx-3785324206"
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
    className: "jsx-3785324206"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3785324206"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3785324206",
    css: "@import url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');@fontface{font-family:'Gentium Book Basic',cursive;src:url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');}@import url('https://fonts.googleapis.com/css?family=Montserrat');@fontface{font-family:'Montserrat',cursive;src:url('https://fonts.googleapis.com/css?family=Montserrat');}@import url('https://fonts.googleapis.com/css?family=Noto+Sans');@fontface{font-family:'Noto Sans',cursive;src:url('https://fonts.googleapis.com/css?family=Noto+Sans');}@import url('https://fonts.googleapis.com/css?family=Lobster');@fontface{font-family:'Lobster',cursive;src:url('https://fonts.googleapis.com/css?family=Lobster');}body{background-image:url(\"/static/backgroundIm.png\");background-position:center top;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1ldGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXVCLEFBRzBELEFBSXNCLEFBR3pCLEFBS3FCLEFBRzdCLEFBR21DLEFBR3RDLEFBSTBCLEFBRzVCLDhCQUVsQyxFQVBBLENBTkUsUUFSQSxRQVI4QiwrQkFFakMsU0EyQkUsSUFQQSxFQU5FLGdCQVJBIiwiZmlsZSI6ImNvbXBvbmVudHNcXG1ldGEuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXEZyaWRnZWh1bnRlcnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvZG93bmxvYWQuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTsqL1xyXG4gIHJldHVybihcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBib2R5IHsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9iYWNrZ3JvdW5kSW0ucG5nXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7IFxyXG5cclxuICAgICAgfVxyXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdlbnRpdW0rQm9vaytCYXNpYycpO1xyXG5cclxuICAgICAgICAgIEBmb250ZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VudGl1bSBCb29rIEJhc2ljJywgY3Vyc2l2ZTtcclxuICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1HZW50aXVtK0Jvb2srQmFzaWMnKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0Jyk7XHJcblxyXG4gICAgICAgICAgQGZvbnRmYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgY3Vyc2l2ZTtcclxuICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2FucycpO1xyXG5cclxuICAgICAgICBAZm9udGZhY2Uge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBjdXJzaXZlO1xyXG4gICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NhbnMnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvYnN0ZXInKTtcclxuXHJcbiAgICAgICAgQGZvbnRmYWNlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvYnN0ZXInKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbil9XHJcbiJdfQ== */\n/*@ sourceURL=components\\meta.js */"
  }));
});

/***/ }),

/***/ "./components/urlname.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("https://herokufhapi.herokuapp.com");

/***/ }),

/***/ "./pages/recipelist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_urlname_js__ = __webpack_require__("./components/urlname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Chip__ = __webpack_require__("@material-ui/core/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardActions__ = __webpack_require__("@material-ui/core/CardActions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_Badge__ = __webpack_require__("@material-ui/core/Badge");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_Badge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Badge__);

var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\Fridgehunters\\pages\\recipelist.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

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
    _this.removeIngred = _this.removeIngred.bind(_assertThisInitialized(_this));
    var listtext = _this.props.listtext;
    var ingredlist = [];

    if (listtext != "") {
      ingredlist = listtext.split(",");
    }

    _this.state = {
      listtext: listtext,
      ingredlist: ingredlist,
      recipes: [],
      endorsedrecipes: [],
      listready: false
    };
    __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_7__components_urlname_js__["a" /* default */] + "/recipes?ulist=" + encodeURI(_this.state.listtext)).then(function (response) {
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
      console.log(event.currentTarget.getAttribute('key2') + "yyyy" + index);
      var tempendorselist = this.state.endorsedrecipes.slice().concat([temprec]);

      if (index == -1) {
        this.setState(function (prevState, props) {
          return {
            endorsedrecipes: tempendorselist
          };
        });
        __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_7__components_urlname_js__["a" /* default */] + "/endorsement/" + encodeURI(temprec), {
          method: 'PUT'
        }).then(function (response) {
          return response.text();
        }).then(function (data) {
          console.log(data);
          return 1;
        }).then(function (useless) {
          __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_7__components_urlname_js__["a" /* default */] + "/recipes?ulist=" + encodeURI(_this2.state.listtext)).then(function (response) {
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
    key: "removeIngred",
    value: function removeIngred(event) {
      var _this3 = this;

      var index = this.state.ingredlist.indexOf(event.target.getAttribute('key2'));
      var tempingreds = this.state.ingredlist.slice();
      tempingreds.splice(index, 1);
      var templist = tempingreds.toString();
      this.setState({
        listtext: templist,
        ingredlist: tempingreds,
        listready: false
      });
      __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_7__components_urlname_js__["a" /* default */] + "/recipes?ulist=" + encodeURI(templist)).then(function (response) {
        return response.text();
      }).then(function (datas) {
        var data = JSON.parse("[" + datas + "]"); //console.log("Show data fetched. Count: " + JSON.stringify(data))

        _this3.setState({
          recipes: data,
          listready: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-2376583973"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-2376583973"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-2376583973"
      }), this.state.ingredlist.length == 0 ? null : this.state.ingredlist.map(function (ingred) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button___default.a, {
          variant: "outlined",
          onClick: _this4.removeIngred,
          key: ingred,
          key2: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, ingred);
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-2376583973"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-2376583973"
      }), this.state.listready ? null : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-2376583973"
      }, "Loading relevant recipes..."), this.state.recipes.map(function (recipe) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          className: "jsx-2376583973"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Card___default.a, {
          style: {
            maxWidth: 450,
            backgroundColor: '#b3ffb3'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardContent___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a, {
          gutterBottom: true,
          variant: "headline",
          component: "h1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          className: "jsx-2376583973"
        }, recipe.name)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a, {
          component: "p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, recipe.ingredients.map(function (ingred) {
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Chip___default.a, {
            label: ingred,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          });
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          className: "jsx-2376583973"
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          className: "jsx-2376583973"
        }, recipe.description.split('\n').map(function (item, key) {
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            className: "jsx-2376583973"
          }, item, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            className: "jsx-2376583973"
          }));
        }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a, {
          component: "p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          className: "jsx-2376583973"
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          className: "jsx-2376583973"
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Badge___default.a, {
          color: "secondary",
          badgeContent: recipe.endorse,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button___default.a, {
          size: "small",
          variant: "contained",
          color: "primary",
          key2: recipe.name,
          style: {
            fontFamily: "Gentium Book Basic",
            fontWeight: "bold",
            fontSize: '15px'
          },
          onClick: _this4.addEndorsement,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, _this4.state.endorsedrecipes.indexOf(recipe.name) == -1 ? "Endorse" : "Added endorsement")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_CardActions___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          className: "jsx-2376583973"
        }));
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
        href: {
          pathname: '/create',
          query: {}
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Button___default.a, {
        variant: "contained",
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-2376583973"
      }, "Make your own recipe!")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "2376583973",
        css: "h2.jsx-2376583973{font-family:\"Gentium Book Basic\",Times,serif;}p.jsx-2376583973{font-family:\"Noto Sans\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxyZWNpcGVsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJd0IsQUFJMEQsQUFJVCxvQ0FDeEMsU0FKQSIsImZpbGUiOiJwYWdlc1xccmVjaXBlbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEFzZWVtXFxSZWFjdCBQcm9qZWN0c1xcRnJpZGdlaHVudGVycyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB1cmxuYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdXJsbmFtZS5qcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2UnO1xyXG5cclxuY2xhc3MgUmVjaXBlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5hZGRFbmRvcnNlbWVudCA9IHRoaXMuYWRkRW5kb3JzZW1lbnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVtb3ZlSW5ncmVkID0gdGhpcy5yZW1vdmVJbmdyZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB2YXIgbGlzdHRleHQgPSB0aGlzLnByb3BzLmxpc3R0ZXh0O1xyXG4gICAgdmFyIGluZ3JlZGxpc3QgPSBbXTtcclxuICAgIGlmKGxpc3R0ZXh0ICE9IFwiXCIpe1xyXG4gICAgICBpbmdyZWRsaXN0ID0gbGlzdHRleHQuc3BsaXQoXCIsXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGlzdHRleHQ6IGxpc3R0ZXh0LFxyXG4gICAgICBpbmdyZWRsaXN0OiBpbmdyZWRsaXN0LFxyXG4gICAgICByZWNpcGVzOiBbXSxcclxuICAgICAgZW5kb3JzZWRyZWNpcGVzOiBbXSxcclxuICAgICAgbGlzdHJlYWR5OiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKHVybG5hbWUgKyBcIi9yZWNpcGVzP3VsaXN0PVwiICsgZW5jb2RlVVJJKHRoaXMuc3RhdGUubGlzdHRleHQpKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSkudGhlbihkYXRhcyA9PiB7XHJcbiAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShcIltcIiArIGRhdGFzICArIFwiXVwiKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICByZWNpcGVzOiBkYXRhLFxyXG4gICAgICAgIGxpc3RyZWFkeTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFkZEVuZG9yc2VtZW50KGV2ZW50KXtcclxuICAgIHZhciBpbmRleCA9IHRoaXMuc3RhdGUuZW5kb3JzZWRyZWNpcGVzLmluZGV4T2YoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2tleTInKSk7XHJcbiAgICB2YXIgdGVtcHJlYyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdrZXkyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5MicpICsgXCJ5eXl5XCIgKyBpbmRleClcclxuICAgIHZhciB0ZW1wZW5kb3JzZWxpc3QgPSB0aGlzLnN0YXRlLmVuZG9yc2VkcmVjaXBlcy5zbGljZSgpLmNvbmNhdChbdGVtcHJlY10pXHJcblxyXG4gICAgaWYoaW5kZXggPT0gLTEpe1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7ZW5kb3JzZWRyZWNpcGVzOiB0ZW1wZW5kb3JzZWxpc3R9fSlcclxuICAgICAgZmV0Y2godXJsbmFtZSArIFwiL2VuZG9yc2VtZW50L1wiICsgZW5jb2RlVVJJKHRlbXByZWMpLCB7bWV0aG9kOiAnUFVUJ30pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgIH0pLnRoZW4odXNlbGVzcyA9PiB7ZmV0Y2godXJsbmFtZSArIFwiL3JlY2lwZXM/dWxpc3Q9XCIgKyBlbmNvZGVVUkkodGhpcy5zdGF0ZS5saXN0dGV4dCkpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGFzID0+IHtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoXCJbXCIgKyBkYXRhcyAgKyBcIl1cIilcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbWluZyBzZWNvbmRcIilcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgcmVjaXBlczogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVJbmdyZWQoZXZlbnQpe1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5zdGF0ZS5pbmdyZWRsaXN0LmluZGV4T2YoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgna2V5MicpKVxyXG4gICAgdmFyIHRlbXBpbmdyZWRzID0gdGhpcy5zdGF0ZS5pbmdyZWRsaXN0LnNsaWNlKCk7XHJcbiAgICB0ZW1waW5ncmVkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdmFyIHRlbXBsaXN0ID0gdGVtcGluZ3JlZHMudG9TdHJpbmcoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGlzdHRleHQ6IHRlbXBsaXN0LFxyXG4gICAgICBpbmdyZWRsaXN0OiB0ZW1waW5ncmVkcyxcclxuICAgICAgbGlzdHJlYWR5OiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBmZXRjaCh1cmxuYW1lICsgXCIvcmVjaXBlcz91bGlzdD1cIiArIGVuY29kZVVSSSh0ZW1wbGlzdCkpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGFzID0+IHtcclxuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKFwiW1wiICsgZGF0YXMgICsgXCJdXCIpXHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHJlY2lwZXM6IGRhdGEsXHJcbiAgICAgICAgbGlzdHJlYWR5OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCI+PGJyLz5cclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaW5ncmVkbGlzdC5sZW5ndGggPT0gMFxyXG4gICAgICAgID8gKG51bGwpIDogXHJcbiAgICAgICAgKHRoaXMuc3RhdGUuaW5ncmVkbGlzdC5tYXAoaW5ncmVkID0+IChcclxuICAgICAgICAgIDxCdXR0b24gIHZhcmlhbnQ9XCJvdXRsaW5lZFwiICBvbkNsaWNrPXt0aGlzLnJlbW92ZUluZ3JlZH0ga2V5PXtpbmdyZWR9IGtleTI9e2luZ3JlZH0+e2luZ3JlZH08L0J1dHRvbj5cclxuICAgICAgICApKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgPGJyLz48YnIvPlxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5saXN0cmVhZHkgXHJcbiAgICAgICAgPyBudWxsXHJcbiAgICAgICAgOiA8aDI+TG9hZGluZyByZWxldmFudCByZWNpcGVzLi4uPC9oMj5cclxuICAgICAgfVxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuc3RhdGUucmVjaXBlcy5tYXAocmVjaXBlID0+ICg8ZGl2PjxDYXJkIHN0eWxlPXt7bWF4V2lkdGg6IDQ1MCwgIGJhY2tncm91bmRDb2xvcjogJyNiM2ZmYjMnfX0gPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImhlYWRsaW5lXCIgY29tcG9uZW50PVwiaDFcIj5cclxuICAgICAgICAgICAgICA8aDI+e3JlY2lwZS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgIHtyZWNpcGUuaW5ncmVkaWVudHMubWFwKGluZ3JlZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD17aW5ncmVkfSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pjxici8+XHJcbiAgICAgICAgICAgICAgPHA+e3JlY2lwZS5kZXNjcmlwdGlvbi5zcGxpdCgnXFxuJykubWFwKChpdGVtLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2tleX0+e2l0ZW19PGJyLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgfSl9PC9wPlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj48YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwic2Vjb25kYXJ5XCIgYmFkZ2VDb250ZW50PXtyZWNpcGUuZW5kb3JzZX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiAgdmFyaWFudD1cImNvbnRhaW5lZFwiICBjb2xvcj1cInByaW1hcnlcIiBrZXkyPXtyZWNpcGUubmFtZX0gc3R5bGU9e3sgZm9udEZhbWlseTogXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnMTVweCcgfX0gb25DbGljaz17dGhpcy5hZGRFbmRvcnNlbWVudH0+XHJcbiAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuZW5kb3JzZWRyZWNpcGVzLmluZGV4T2YocmVjaXBlLm5hbWUpID09IC0xKSA/IFwiRW5kb3JzZVwiIDogXCJBZGRlZCBlbmRvcnNlbWVudFwifVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgIDwvQ2FyZD48YnIvPjwvZGl2PilcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIDxMaW5rICBocmVmPXt7IHBhdGhuYW1lOiAnL2NyZWF0ZScsIHF1ZXJ5OiB7fSB9fT5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiAgY29sb3I9XCJzZWNvbmRhcnlcIiA+PGI+TWFrZSB5b3VyIG93biByZWNpcGUhPC9iPjwvQnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PjxzdHlsZSBqc3g+e2BcclxuICAgICAgICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEZpcnN0ID0gIChwcm9wcykgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8UmVjaXBlTGlzdCBsaXN0dGV4dD17cHJvcHMubGlzdHRleHR9IC8+XHJcbiAgPC9MYXlvdXQ+XHJcbilcclxuXHJcbkZpcnN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgY29uc3QgbGlzdHRleHQgPSBjb250ZXh0LnF1ZXJ5LmluZ3JlZGxpc3RcclxuICBjb25zb2xlLmxvZyhsaXN0dGV4dClcclxuICByZXR1cm4ge2xpc3R0ZXh0OiBsaXN0dGV4dH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3QiXX0= */\n/*@ sourceURL=pages\\recipelist.js */"
      }));
    }
  }]);

  return RecipeList;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var First = function First(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(RecipeList, {
    listtext: props.listtext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    }
  }));
};

First.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var listtext;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            listtext = context.query.ingredlist;
            console.log(listtext);
            return _context.abrupt("return", {
              listtext: listtext
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (First);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/recipelist.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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
//# sourceMappingURL=recipelist.js.map