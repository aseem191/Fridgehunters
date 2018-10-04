webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_WrapLayout_js__ = __webpack_require__("./components/WrapLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_urlname_js__ = __webpack_require__("./components/urlname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField__ = __webpack_require__("./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_List__ = __webpack_require__("./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem__ = __webpack_require__("./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText__ = __webpack_require__("./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider__ = __webpack_require__("./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions_index__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
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

      console.log(this.state.textValue);

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
      console.log(event.currentTarget);

      if (event.currentTarget.id == "addButton" || event.currentTarget.id == "myField") {
        console.log("YEET");

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
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        name: "addForm",
        onSubmit: function onSubmit(event) {
          return _this4.showMenu(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-404019787"
      }, "What's in your fridge? "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField___default.a, {
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            e.preventDefault();

            _this4.addIngredient(e);
          }
        },
        id: "myField",
        onChange: function onChange(event) {
          return _this4.showMenu(event);
        },
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
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
          lineNumber: 149
        }
      }, "Pick ingredients"), this.props.listOpen ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        ref: function ref(element) {
          _this4.dropdownMenu = element;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: "jsx-404019787" + " " + "menu"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_List___default.a, {
        component: "nav",
        style: {
          width: 250
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), this.state.ingredfoundlist.map(function (ingred) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          className: "jsx-404019787"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem___default.a, {
          button: true,
          onClick: _this4.addIngredient,
          customtext: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText___default.a, {
          primary: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }));
      }))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-404019787"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
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
            lineNumber: 179
          }
        }, ingred);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
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
          lineNumber: 186
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
          lineNumber: 187
        }
      }, "FIND RECIPES")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        style: {
          fontSize: "12px",
          color: "#009109"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        className: "jsx-404019787"
      }, "Created by Aseem Sane. To visit the GitHub repository for this project, go ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://github.com/aseem191/Fridgehunters",
        style: {
          fontSize: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        className: "jsx-404019787"
      }, "here"), ".")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "404019787",
        css: "h2.jsx-404019787{font-family:\"Gentium Book Basic\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErTHFCLEFBSzJELDZDQUNqRCIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXEZyaWRnZWh1bnRlcnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBXcmFwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcExheW91dC5qcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgdXJsbmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3VybG5hbWUuanMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgdG9nZ2xlTGlzdCB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlJztcclxuXHJcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0ICBzdXBlcihwcm9wcylcclxuXHQgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlTGlzdChmYWxzZSkpO1xyXG5cdCAgdGhpcy5zdGF0ZSA9IHtcclxuXHQgICAgLy9saXN0T3BlbjogZmFsc2UsXHJcblx0ICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxyXG5cdCAgICB0ZXh0VmFsdWU6IFwiXCIsXHJcblx0ICAgIGluZ3JlZHRleHRsaXN0OiBbXSxcclxuXHQgICAgaW5ncmVkZm91bmRsaXN0OiBbXVxyXG5cdCAgfVxyXG5cclxuXHQgIHRoaXMuc2hvd01lbnUgPSB0aGlzLnNob3dNZW51LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLlJlbW92ZUluZ3JlZCA9IHRoaXMuUmVtb3ZlSW5ncmVkLmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLmFkZEluZ3JlZGllbnQgPSB0aGlzLmFkZEluZ3JlZGllbnQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHNob3dNZW51KGV2ZW50KXtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGV4dFZhbHVlKTtcclxuXHRcdGlmKHRoaXMucHJvcHMubGlzdE9wZW4pe1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdGV4dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pOyAgXHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUxpc3QodHJ1ZSkpO1xyXG5cclxuXHQgIFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHQgIFx0XHRcdHRleHRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCksXHJcblx0ICAgIFx0XHQvL2xpc3RPcGVuOiB0cnVlXHJcblx0ICBcdFx0fSwgICgpID0+IHtcclxuICAgICAgXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG4gICAgXHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHJcblx0XHQgICAgaW5ncmVkZm91bmRsaXN0OiBbXCJMb2FkaW5nLi4uXCJdXHJcblx0XHR9KTtcclxuXHRcdGZldGNoKHVybG5hbWUgKyBcIi9pbmdyZWRpZW50cz91bmFtZT1cIiArIGVuY29kZVVSSShldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogXCIgKyBkYXRhKTtcclxuXHRcdFx0dmFyIGRhdGFsaXN0ID0gZGF0YS5zcGxpdChcIixcIik7XHJcblx0XHRcdGlmKGRhdGEgPT0gXCJcIil7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ICAgIGluZ3JlZGZvdW5kbGlzdDogW11cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCAgICBpbmdyZWRmb3VuZGxpc3Q6IGRhdGFsaXN0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG5cdFJlbW92ZUluZ3JlZChldmVudCl7XHJcblx0XHR2YXIgaW5kZXggPSArKHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QuaW5kZXhPZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXkyJykpKTtcclxuXHRcdGNvbnNvbGUubG9nKGluZGV4KVxyXG5cdFx0dmFyIGNoYW5nZWRBcnJheSA9IHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3Quc2xpY2UoKTtcclxuXHRcdGNoYW5nZWRBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7aW5ncmVkdGV4dGxpc3Q6IGNoYW5nZWRBcnJheX19KVxyXG5cdH1cclxuXHJcblx0YWRkSW5ncmVkaWVudChldmVudCl7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcblx0XHRpZihldmVudC5jdXJyZW50VGFyZ2V0LmlkID09IFwiYWRkQnV0dG9uXCIgfHwgZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PSBcIm15RmllbGRcIil7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiWUVFVFwiKVxyXG5cdFx0XHRpZih0aGlzLnN0YXRlLnRleHRWYWx1ZSA9PSBcIlwiKXtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYodGhpcy5zdGF0ZS5pbmdyZWR0ZXh0bGlzdC5maW5kSW5kZXgoaW5nID0+IGluZyA9PSB0aGlzLnN0YXRlLnRleHRWYWx1ZSkgPT0gLTEpe1xyXG5cdFx0XHRcdC8vdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7aW5ncmVkbGlzdDogcHJldlN0YXRlLmluZ3JlZGxpc3QuY29uY2F0KFsoXHJcblx0XHRcdFx0XHQvLzxoMSBvbkNsaWNrPXt0aGlzLlJlbW92ZUluZ3JlZH0ga2V5PXt0aGlzLnN0YXRlLnRleHRWYWx1ZX0+e3RoaXMuc3RhdGUudGV4dFZhbHVlfTwvaDE+XHJcblx0XHRcdFx0Ly8pXSl9fSlcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7aW5ncmVkdGV4dGxpc3Q6IHByZXZTdGF0ZS5pbmdyZWR0ZXh0bGlzdC5jb25jYXQoW3RoaXMuc3RhdGUudGV4dFZhbHVlXSl9fSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR2YXIgY3VzdG9tID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2N1c3RvbXRleHQnKVxyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUxpc3QoZmFsc2UpKTtcclxuXHRcdFx0Lyp0aGlzLnNldFN0YXRlKHsgbGlzdE9wZW46IGZhbHNlIH0sICgpID0+IHtcclxuXHRcdCAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudSk7XHJcblx0XHQgICAgfSk7ICovIFxyXG5cdFx0ICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG5cdFx0ICAgIC8vaWYodGhpcy5zdGF0ZS5pbmdyZWRsaXN0LmZpbmRJbmRleChpbmcgPT4gaW5nLmtleSA9PSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdjdXN0b210ZXh0JykpID09IC0xKXtcclxuXHRcdCAgICBpZih0aGlzLnN0YXRlLmluZ3JlZHRleHRsaXN0LmZpbmRJbmRleChpbmcgPT4gaW5nID09IGN1c3RvbSkgPT0gLTEpe1xyXG5cdFx0XHRcdC8vdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7aW5ncmVkbGlzdDogcHJldlN0YXRlLmluZ3JlZGxpc3QuY29uY2F0KFsoXHJcblx0XHRcdFx0Ly88aDEgb25DbGljaz17dGhpcy5SZW1vdmVJbmdyZWR9IGtleT17ZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY3VzdG9tdGV4dCcpfT57ZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY3VzdG9tdGV4dCcpfTwvaDE+XHJcblx0XHRcdFx0Ly8pXSl9fSlcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7aW5ncmVkdGV4dGxpc3Q6IHByZXZTdGF0ZS5pbmdyZWR0ZXh0bGlzdC5jb25jYXQoW2N1c3RvbV0pfX0pXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0IGNsb3NlTWVudShldmVudCkge1xyXG4gICAgXHJcblx0ICAgIGlmICghdGhpcy5kcm9wZG93bk1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG5cdCAgICBcdHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlTGlzdChmYWxzZSkpO1xyXG5cdCAgICAgIFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudSk7XHJcblx0ICAgICAvKiB0aGlzLnNldFN0YXRlKHsgbGlzdE9wZW46IGZhbHNlIH0sICgpID0+IHtcclxuXHQgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG5cdCAgICAgIH0pOyAgKi9cclxuXHQgICAgICBcclxuXHQgICAgfVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHQgIDxMYXlvdXQ+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgYWxpZ249XCJjZW50ZXJcIiA+XHJcblx0XHRcdDxici8+PGJyLz48YnIvPlxyXG5cdFx0XHQ8Zm9ybSBuYW1lPVwiYWRkRm9ybVwiIG9uU3VibWl0PXsoZXZlbnQpID0+IHRoaXMuc2hvd01lbnUoZXZlbnQpfT5cclxuXHRcdCAgICAgICAgPGxhYmVsPlxyXG5cdFx0ICAgICAgICAgIFx0PGgyPldoYXQncyBpbiB5b3VyIGZyaWRnZT8gPC9oMj5cclxuXHRcdCAgICAgICAgICBcdDxUZXh0RmllbGQgIG9uS2V5UHJlc3M9e2UgPT4ge2lmIChlLmtleSA9PT0gJ0VudGVyJykge2UucHJldmVudERlZmF1bHQoKTsgdGhpcy5hZGRJbmdyZWRpZW50KGUpO319fSBpZD1cIm15RmllbGRcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNob3dNZW51KGV2ZW50KX0gbWFyZ2luPVwibm9ybWFsXCIgLz5cclxuXHRcdCAgICAgICAgPC9sYWJlbD5cclxuXHRcdCAgICAgICAgXHJcblx0XHQgICAgPC9mb3JtPlxyXG5cclxuXHRcdCAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuYWRkSW5ncmVkaWVudH0gaWQ9XCJhZGRCdXR0b25cIiAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnMTZweCcgfX0+UGljayBpbmdyZWRpZW50czwvQnV0dG9uPlxyXG5cdFx0XHRcclxuXHRcdFx0eyBcclxuXHRcdFx0XHR0aGlzLnByb3BzLmxpc3RPcGVuIFxyXG5cdFx0XHRcdD8oXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51XCIgcmVmPXsoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5kcm9wZG93bk1lbnUgPSBlbGVtZW50O1xyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0PExpc3QgY29tcG9uZW50PVwibmF2XCIgIHN0eWxlID0ge3t3aWR0aDogMjUwfX0+PERpdmlkZXIgLz5cclxuXHRcdFx0XHQgIFx0XHR7dGhpcy5zdGF0ZS5pbmdyZWRmb3VuZGxpc3QubWFwKChpbmdyZWQpID0+ICg8ZGl2IGtleT17aW5ncmVkfT5cclxuXHRcdFx0XHQgIFx0XHRcdDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dGhpcy5hZGRJbmdyZWRpZW50fSBjdXN0b210ZXh0PXtpbmdyZWR9PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIFx0PExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpbmdyZWR9IC8+XHJcblx0XHRcdFx0XHQgICAgICAgIDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHQgICAgICAgIDxEaXZpZGVyIC8+XHJcblx0XHRcdFx0XHQgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgXHRcdCkpfVxyXG5cdFx0XHRcdCAgXHQ8L0xpc3Q+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0OihcclxuXHRcdFx0XHQ8ZGl2Pjxici8+PGJyLz48YnIvPjxici8+PC9kaXY+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJpbmxpbmVcIj5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QubWFwKGluZ3JlZCA9PiAoXHJcblx0XHRcdFx0XHQ8QnV0dG9uICB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXt0aGlzLlJlbW92ZUluZ3JlZH0ga2V5PXtpbmdyZWR9IGtleTI9e2luZ3JlZH0+e2luZ3JlZH08L0J1dHRvbj5cclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGJyLz48YnIvPjxici8+PGJyLz5cclxuXHRcdFx0PExpbmsgIGhyZWY9e3sgcGF0aG5hbWU6ICcvcmVjaXBlbGlzdCcsIHF1ZXJ5OiB7IGluZ3JlZGxpc3Q6IHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QudG9TdHJpbmcoKSB9IH19PlxyXG5cdCAgICAgICAgXHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6ICcyMHB4JyB9fSBjb2xvcj1cInByaW1hcnlcIj5GSU5EIFJFQ0lQRVM8L0J1dHRvbj5cclxuXHQgICAgICAgIDwvTGluaz5cclxuXHRcdFx0PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz5cclxuXHJcblx0XHRcdDxoNiBzdHlsZT17e2ZvbnRTaXplOiBcIjEycHhcIiwgY29sb3I6IFwiIzAwOTEwOVwifX0+Q3JlYXRlZCBieSBBc2VlbSBTYW5lLiBUbyB2aXNpdCB0aGUgR2l0SHViIHJlcG9zaXRvcnkgZm9yIHRoaXMgcHJvamVjdCwgZ28gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hc2VlbTE5MS9GcmlkZ2VodW50ZXJzXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxMnB4XCJ9fT5oZXJlPC9hPi48L2g2PlxyXG5cdFx0XHQ8L2Rpdj48c3R5bGUganN4PntgXHJcblx0ICAgICAgICBcclxuXHJcblx0ICAgICAgICBoMiB7XHJcblx0ICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlbnRpdW0gQm9vayBCYXNpY1wiLCBUaW1lcywgc2VyaWY7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBcclxuXHQgICAgICBgfTwvc3R5bGU+XHJcblx0ICAgICAgPC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQgPC9MYXlvdXQ+XHJcblx0XHRcdFxyXG5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlKGNvbm5lY3Qoc3RhdGU9PnN0YXRlKShNYWluUGFnZSkpIl19 */\n/*@ sourceURL=pages\\index.js */"
      })));
    }
  }]);

  return MainPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_15__page__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_14_react_redux__["b" /* connect */])(function (state) {
  return state;
})(MainPage)));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.b83552fad2dc147f44ea.hot-update.js.map