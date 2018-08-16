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

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toggleList; });
var toggleList = function toggleList(isOpen) {
  return {
    type: "TOGGLELIST",
    payload: isOpen
  };
};

/***/ }),

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

/***/ "./components/WrapLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\Fridgehunters\\components\\WrapLayout.js";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

/* unused harmony default export */ var _unused_webpack_default_export = (Layout);

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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_WrapLayout_js__ = __webpack_require__("./components/WrapLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_urlname_js__ = __webpack_require__("./components/urlname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions_index__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page__ = __webpack_require__("./pages/page.js");
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\Fridgehunters\\pages\\index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
















var MainPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainPage, _React$Component);

  function MainPage(props) {
    var _this;

    _classCallCheck(this, MainPage);

    _this = _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this, props));

    _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions_index__["a" /* toggleList */])(false));

    _this.state = {
      //listOpen: false,
      title: _this.props.title,
      textValue: "",
      ingredtextlist: [],
      ingredfoundlist: []
    };
    _this.showMenu = _this.showMenu.bind(_assertThisInitialized(_this));
    _this.closeMenu = _this.closeMenu.bind(_assertThisInitialized(_this));
    _this.RemoveIngred = _this.RemoveIngred.bind(_assertThisInitialized(_this));
    _this.addIngredient = _this.addIngredient.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MainPage, [{
    key: "showMenu",
    value: function showMenu(event) {
      var _this2 = this;

      if (this.props.listOpen) {
        this.setState({
          textValue: event.target.value.toLowerCase()
        });
      } else {
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions_index__["a" /* toggleList */])(true));
        this.setState({
          textValue: event.target.value.toLowerCase() //listOpen: true

        }, function () {
          document.addEventListener('click', _this2.closeMenu);
        });
      }

      this.setState({
        ingredfoundlist: ["Loading..."]
      });
      __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_6__components_urlname_js__["a" /* default */] + "/ingredients?uname=" + encodeURI(event.target.value.toLowerCase())).then(function (response) {
        return response.text();
      }).then(function (data) {
        console.log("Show data fetched. Count: " + data);
        var datalist = data.split(",");

        if (data == "") {
          _this2.setState({
            ingredfoundlist: []
          });
        } else {
          _this2.setState({
            ingredfoundlist: datalist
          });
        }
      });
    }
  }, {
    key: "RemoveIngred",
    value: function RemoveIngred(event) {
      var index = +this.state.ingredtextlist.indexOf(event.target.getAttribute('key2'));
      console.log(index);
      var changedArray = this.state.ingredtextlist.slice();
      changedArray.splice(index, 1);
      this.setState(function (prevState, props) {
        return {
          ingredtextlist: changedArray
        };
      });
    }
  }, {
    key: "addIngredient",
    value: function addIngredient(event) {
      var _this3 = this;

      event.persist();

      if (event.currentTarget.id == "addButton") {
        if (this.state.textValue == "") {
          return;
        }

        if (this.state.ingredtextlist.findIndex(function (ing) {
          return ing == _this3.state.textValue;
        }) == -1) {
          //this.setState((prevState, props) => {return {ingredlist: prevState.ingredlist.concat([(
          //<h1 onClick={this.RemoveIngred} key={this.state.textValue}>{this.state.textValue}</h1>
          //)])}})
          this.setState(function (prevState, props) {
            return {
              ingredtextlist: prevState.ingredtextlist.concat([_this3.state.textValue])
            };
          });
        }
      } else {
        var custom = event.currentTarget.getAttribute('customtext');
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions_index__["a" /* toggleList */])(false));
        /*this.setState({ listOpen: false }, () => {
               document.removeEventListener('click', this.closeMenu);
           }); */

        document.removeEventListener('click', this.closeMenu); //if(this.state.ingredlist.findIndex(ing => ing.key == event.target.getAttribute('customtext')) == -1){

        if (this.state.ingredtextlist.findIndex(function (ing) {
          return ing == custom;
        }) == -1) {
          //this.setState((prevState, props) => {return {ingredlist: prevState.ingredlist.concat([(
          //<h1 onClick={this.RemoveIngred} key={event.target.getAttribute('customtext')}>{event.target.getAttribute('customtext')}</h1>
          //)])}})
          this.setState(function (prevState, props) {
            return {
              ingredtextlist: prevState.ingredtextlist.concat([custom])
            };
          });
        }
      }
    }
  }, {
    key: "closeMenu",
    value: function closeMenu(event) {
      if (!this.dropdownMenu.contains(event.target)) {
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions_index__["a" /* toggleList */])(false));
        document.removeEventListener('click', this.closeMenu);
        /* this.setState({ listOpen: false }, () => {
           document.removeEventListener('click', this.closeMenu);
         });  */
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        name: "addForm",
        onSubmit: function onSubmit(event) {
          return _this4.showMenu(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-404019787"
      }, "What's in your fridge? "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField___default.a, {
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') e.preventDefault();
        },
        onChange: function onChange(event) {
          return _this4.showMenu(event);
        },
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default.a, {
        variant: "contained",
        color: "secondary",
        onClick: this.addIngredient,
        id: "addButton",
        style: {
          fontFamily: "Gentium Book Basic",
          fontWeight: "bold",
          fontSize: '16px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "Pick ingredient"), this.props.listOpen ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        ref: function ref(element) {
          _this4.dropdownMenu = element;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        className: "jsx-404019787" + " " + "menu"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_List___default.a, {
        component: "nav",
        style: {
          width: 250
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), this.state.ingredfoundlist.map(function (ingred) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          className: "jsx-404019787"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem___default.a, {
          button: true,
          onClick: _this4.addIngredient,
          customtext: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText___default.a, {
          primary: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }));
      }))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: "jsx-404019787"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        className: "jsx-404019787"
      }, this.state.ingredtextlist.map(function (ingred) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default.a, {
          variant: "outlined",
          onClick: _this4.RemoveIngred,
          key: ingred,
          key2: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }, ingred);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: {
          pathname: '/recipelist',
          query: {
            ingredlist: this.state.ingredtextlist.toString()
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default.a, {
        variant: "contained",
        style: {
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: '20px'
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "FIND RECIPES"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "404019787",
        css: "h2.jsx-404019787{font-family:\"Gentium Book Basic\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyTHFCLEFBSzJELDZDQUNqRCIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXEZyaWRnZWh1bnRlcnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBXcmFwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcExheW91dC5qcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgdXJsbmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3VybG5hbWUuanMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgdG9nZ2xlTGlzdCB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlJztcclxuXHJcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0ICBzdXBlcihwcm9wcylcclxuXHQgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlTGlzdChmYWxzZSkpO1xyXG5cdCAgdGhpcy5zdGF0ZSA9IHtcclxuXHQgICAgLy9saXN0T3BlbjogZmFsc2UsXHJcblx0ICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxyXG5cdCAgICB0ZXh0VmFsdWU6IFwiXCIsXHJcblx0ICAgIGluZ3JlZHRleHRsaXN0OiBbXSxcclxuXHQgICAgaW5ncmVkZm91bmRsaXN0OiBbXVxyXG5cdCAgfVxyXG5cclxuXHQgIHRoaXMuc2hvd01lbnUgPSB0aGlzLnNob3dNZW51LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLlJlbW92ZUluZ3JlZCA9IHRoaXMuUmVtb3ZlSW5ncmVkLmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLmFkZEluZ3JlZGllbnQgPSB0aGlzLmFkZEluZ3JlZGllbnQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHNob3dNZW51KGV2ZW50KXtcclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmxpc3RPcGVuKXtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRleHRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCl9KTsgIFxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVMaXN0KHRydWUpKTtcclxuXHJcblx0ICBcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0ICBcdFx0XHR0ZXh0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpLFxyXG5cdCAgICBcdFx0Ly9saXN0T3BlbjogdHJ1ZVxyXG5cdCAgXHRcdH0sICAoKSA9PiB7XHJcbiAgICAgIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51KTtcclxuICAgIFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFxyXG5cdFx0ICAgIGluZ3JlZGZvdW5kbGlzdDogW1wiTG9hZGluZy4uLlwiXVxyXG5cdFx0fSk7XHJcblx0XHRmZXRjaCh1cmxuYW1lICsgXCIvaW5ncmVkaWVudHM/dW5hbWU9XCIgKyBlbmNvZGVVUkkoZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSkudGhlbihkYXRhID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6IFwiICsgZGF0YSlcclxuXHRcdFx0dmFyIGRhdGFsaXN0ID0gZGF0YS5zcGxpdChcIixcIik7XHJcblx0XHRcdGlmKGRhdGEgPT0gXCJcIil7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ICAgIGluZ3JlZGZvdW5kbGlzdDogW11cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCAgICBpbmdyZWRmb3VuZGxpc3Q6IGRhdGFsaXN0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG5cdFJlbW92ZUluZ3JlZChldmVudCl7XHJcblx0XHR2YXIgaW5kZXggPSArKHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QuaW5kZXhPZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXkyJykpKTtcclxuXHRcdGNvbnNvbGUubG9nKGluZGV4KVxyXG5cdFx0dmFyIGNoYW5nZWRBcnJheSA9IHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3Quc2xpY2UoKTtcclxuXHRcdGNoYW5nZWRBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7aW5ncmVkdGV4dGxpc3Q6IGNoYW5nZWRBcnJheX19KVxyXG5cdH1cclxuXHJcblx0YWRkSW5ncmVkaWVudChldmVudCl7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblxyXG5cdFx0aWYoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PSBcImFkZEJ1dHRvblwiKXtcclxuXHRcdFx0aWYodGhpcy5zdGF0ZS50ZXh0VmFsdWUgPT0gXCJcIil7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QuZmluZEluZGV4KGluZyA9PiBpbmcgPT0gdGhpcy5zdGF0ZS50ZXh0VmFsdWUpID09IC0xKXtcclxuXHRcdFx0XHQvL3RoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4ge2luZ3JlZGxpc3Q6IHByZXZTdGF0ZS5pbmdyZWRsaXN0LmNvbmNhdChbKFxyXG5cdFx0XHRcdFx0Ly88aDEgb25DbGljaz17dGhpcy5SZW1vdmVJbmdyZWR9IGtleT17dGhpcy5zdGF0ZS50ZXh0VmFsdWV9Pnt0aGlzLnN0YXRlLnRleHRWYWx1ZX08L2gxPlxyXG5cdFx0XHRcdC8vKV0pfX0pXHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4ge2luZ3JlZHRleHRsaXN0OiBwcmV2U3RhdGUuaW5ncmVkdGV4dGxpc3QuY29uY2F0KFt0aGlzLnN0YXRlLnRleHRWYWx1ZV0pfX0pXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dmFyIGN1c3RvbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdjdXN0b210ZXh0JylcclxuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVMaXN0KGZhbHNlKSk7XHJcblx0XHRcdC8qdGhpcy5zZXRTdGF0ZSh7IGxpc3RPcGVuOiBmYWxzZSB9LCAoKSA9PiB7XHJcblx0XHQgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG5cdFx0ICAgIH0pOyAqLyBcclxuXHRcdCAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51KTtcclxuXHRcdCAgICAvL2lmKHRoaXMuc3RhdGUuaW5ncmVkbGlzdC5maW5kSW5kZXgoaW5nID0+IGluZy5rZXkgPT0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY3VzdG9tdGV4dCcpKSA9PSAtMSl7XHJcblx0XHQgICAgaWYodGhpcy5zdGF0ZS5pbmdyZWR0ZXh0bGlzdC5maW5kSW5kZXgoaW5nID0+IGluZyA9PSBjdXN0b20pID09IC0xKXtcclxuXHRcdFx0XHQvL3RoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4ge2luZ3JlZGxpc3Q6IHByZXZTdGF0ZS5pbmdyZWRsaXN0LmNvbmNhdChbKFxyXG5cdFx0XHRcdC8vPGgxIG9uQ2xpY2s9e3RoaXMuUmVtb3ZlSW5ncmVkfSBrZXk9e2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2N1c3RvbXRleHQnKX0+e2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2N1c3RvbXRleHQnKX08L2gxPlxyXG5cdFx0XHRcdC8vKV0pfX0pXHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4ge2luZ3JlZHRleHRsaXN0OiBwcmV2U3RhdGUuaW5ncmVkdGV4dGxpc3QuY29uY2F0KFtjdXN0b21dKX19KVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCBjbG9zZU1lbnUoZXZlbnQpIHtcclxuICAgIFxyXG5cdCAgICBpZiAoIXRoaXMuZHJvcGRvd25NZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuXHQgICAgXHR0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUxpc3QoZmFsc2UpKTtcclxuXHQgICAgICBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG5cdCAgICAgLyogdGhpcy5zZXRTdGF0ZSh7IGxpc3RPcGVuOiBmYWxzZSB9LCAoKSA9PiB7XHJcblx0ICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51KTtcclxuXHQgICAgICB9KTsgICovXHJcblx0ICAgICAgXHJcblx0ICAgIH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0ICA8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGFsaWduPVwiY2VudGVyXCIgPlxyXG5cdFx0XHQ8YnIvPjxici8+PGJyLz5cclxuXHRcdFx0PGZvcm0gbmFtZT1cImFkZEZvcm1cIiBvblN1Ym1pdD17KGV2ZW50KSA9PiB0aGlzLnNob3dNZW51KGV2ZW50KX0+XHJcblx0XHQgICAgICAgIDxsYWJlbD5cclxuXHRcdCAgICAgICAgICBcdDxoMj5XaGF0J3MgaW4geW91ciBmcmlkZ2U/IDwvaDI+XHJcblx0XHQgICAgICAgICAgXHQ8VGV4dEZpZWxkICBvbktleVByZXNzPXtlID0+IHtpZiAoZS5rZXkgPT09ICdFbnRlcicpIGUucHJldmVudERlZmF1bHQoKTt9fSBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNob3dNZW51KGV2ZW50KX0gbWFyZ2luPVwibm9ybWFsXCIgLz5cclxuXHRcdCAgICAgICAgPC9sYWJlbD5cclxuXHRcdCAgICAgICAgXHJcblx0XHQgICAgPC9mb3JtPlxyXG5cclxuXHRcdCAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuYWRkSW5ncmVkaWVudH0gaWQ9XCJhZGRCdXR0b25cIiAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnMTZweCcgfX0+UGljayBpbmdyZWRpZW50PC9CdXR0b24+XHJcblx0XHRcdFxyXG5cdFx0XHR7IFxyXG5cdFx0XHRcdHRoaXMucHJvcHMubGlzdE9wZW4gXHJcblx0XHRcdFx0PyhcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIiByZWY9eyhlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmRyb3Bkb3duTWVudSA9IGVsZW1lbnQ7XHJcblx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHQ8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiAgc3R5bGUgPSB7e3dpZHRoOiAyNTB9fT48RGl2aWRlciAvPlxyXG5cdFx0XHRcdCAgXHRcdHt0aGlzLnN0YXRlLmluZ3JlZGZvdW5kbGlzdC5tYXAoKGluZ3JlZCkgPT4gKDxkaXYga2V5PXtpbmdyZWR9PlxyXG5cdFx0XHRcdCAgXHRcdFx0PExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEluZ3JlZGllbnR9IGN1c3RvbXRleHQ9e2luZ3JlZH0+XHJcblx0XHRcdFx0XHQgICAgICAgICAgXHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2luZ3JlZH0gLz5cclxuXHRcdFx0XHRcdCAgICAgICAgPC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdCAgICAgICAgPERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdCAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICBcdFx0KSl9XHJcblx0XHRcdFx0ICBcdDwvTGlzdD5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQ6KFxyXG5cdFx0XHRcdDxkaXY+PGJyLz48YnIvPjxici8+PGJyLz48L2Rpdj5cclxuXHRcdFx0XHQpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImlubGluZVwiPlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5zdGF0ZS5pbmdyZWR0ZXh0bGlzdC5tYXAoaW5ncmVkID0+IChcclxuXHRcdFx0XHRcdDxCdXR0b24gIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e3RoaXMuUmVtb3ZlSW5ncmVkfSBrZXk9e2luZ3JlZH0ga2V5Mj17aW5ncmVkfT57aW5ncmVkfTwvQnV0dG9uPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQpXHJcblx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8YnIvPjxici8+PGJyLz48YnIvPlxyXG5cdFx0XHQ8TGluayAgaHJlZj17eyBwYXRobmFtZTogJy9yZWNpcGVsaXN0JywgcXVlcnk6IHsgaW5ncmVkbGlzdDogdGhpcy5zdGF0ZS5pbmdyZWR0ZXh0bGlzdC50b1N0cmluZygpIH0gfX0+XHJcblx0ICAgICAgICBcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7Zm9udEZhbWlseTogXCJNb250c2VycmF0XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBmb250U2l6ZTogJzIwcHgnIH19IGNvbG9yPVwicHJpbWFyeVwiPkZJTkQgUkVDSVBFUzwvQnV0dG9uPlxyXG5cdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHRcclxuXHRcdFx0PC9kaXY+PHN0eWxlIGpzeD57YFxyXG5cdCAgICAgICAgXHJcblxyXG5cdCAgICAgICAgaDIge1xyXG5cdCAgICAgICAgICBmb250LWZhbWlseTogXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgVGltZXMsIHNlcmlmO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgXHJcblx0ICAgICAgYH08L3N0eWxlPlxyXG5cdCAgICAgIDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0IDwvTGF5b3V0PlxyXG5cdFx0XHRcclxuXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZShjb25uZWN0KHN0YXRlPT5zdGF0ZSkoTWFpblBhZ2UpKSJdfQ== */\n/*@ sourceURL=pages\\index.js */"
      })));
    }
  }]);

  return MainPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_15__page__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_14_react_redux__["connect"])(function (state) {
  return state;
})(MainPage)));

/***/ }),

/***/ "./pages/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index_js__ = __webpack_require__("./store/index.js");
var _jsxFileName = "C:\\Users\\Aseem\\React Projects\\Fridgehunters\\pages\\page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var page = function page(Page) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(PageWrapper, _React$Component);

      function PageWrapper() {
        _classCallCheck(this, PageWrapper);

        return _possibleConstructorReturn(this, (PageWrapper.__proto__ || Object.getPrototypeOf(PageWrapper)).apply(this, arguments));
      }

      _createClass(PageWrapper, [{
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], {
            store: __WEBPACK_IMPORTED_MODULE_2__store_index_js__["a" /* default */],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Page, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }));
        }
      }]);

      return PageWrapper;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (page);

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  listOpen: false
};

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "TOGGLELIST":
      //return { ...state, articles: [...state.articles, action.payload] };
      return _objectSpread({}, state, {
        listOpen: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_index__ = __webpack_require__("./reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);




var store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_0__reducers_index__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Divider":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/TextField":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

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

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map