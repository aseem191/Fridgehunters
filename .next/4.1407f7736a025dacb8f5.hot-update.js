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
      console.log(event.currentTarget.id);

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
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        name: "addForm",
        onSubmit: function onSubmit(event) {
          return _this4.showMenu(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
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
          lineNumber: 143
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
          lineNumber: 148
        }
      }, "Pick ingredients"), this.props.listOpen ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        ref: function ref(element) {
          _this4.dropdownMenu = element;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: "jsx-404019787" + " " + "menu"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_List___default.a, {
        component: "nav",
        style: {
          width: 250
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), this.state.ingredfoundlist.map(function (ingred) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          className: "jsx-404019787"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_ListItem___default.a, {
          button: true,
          onClick: _this4.addIngredient,
          customtext: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_ListItemText___default.a, {
          primary: ingred,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Divider___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }));
      }))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-404019787"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-404019787"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
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
            lineNumber: 178
          }
        }, ingred);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
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
          lineNumber: 185
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
          lineNumber: 186
        }
      }, "FIND RECIPES")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        style: {
          fontSize: "12px",
          color: "#009109"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        className: "jsx-404019787"
      }, "Created by Aseem Sane. To visit the GitHub repository for this project, go ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://github.com/aseem191/Fridgehunters",
        style: {
          fontSize: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        className: "jsx-404019787"
      }, "here"), ".")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "404019787",
        css: "h2.jsx-404019787{font-family:\"Gentium Book Basic\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4THFCLEFBSzJELDZDQUNqRCIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXEZyaWRnZWh1bnRlcnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBXcmFwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcExheW91dC5qcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgdXJsbmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3VybG5hbWUuanMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgdG9nZ2xlTGlzdCB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlJztcclxuXHJcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0ICBzdXBlcihwcm9wcylcclxuXHQgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlTGlzdChmYWxzZSkpO1xyXG5cdCAgdGhpcy5zdGF0ZSA9IHtcclxuXHQgICAgLy9saXN0T3BlbjogZmFsc2UsXHJcblx0ICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxyXG5cdCAgICB0ZXh0VmFsdWU6IFwiXCIsXHJcblx0ICAgIGluZ3JlZHRleHRsaXN0OiBbXSxcclxuXHQgICAgaW5ncmVkZm91bmRsaXN0OiBbXVxyXG5cdCAgfVxyXG5cclxuXHQgIHRoaXMuc2hvd01lbnUgPSB0aGlzLnNob3dNZW51LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLlJlbW92ZUluZ3JlZCA9IHRoaXMuUmVtb3ZlSW5ncmVkLmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLmFkZEluZ3JlZGllbnQgPSB0aGlzLmFkZEluZ3JlZGllbnQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHNob3dNZW51KGV2ZW50KXtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGV4dFZhbHVlKTtcclxuXHRcdGlmKHRoaXMucHJvcHMubGlzdE9wZW4pe1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdGV4dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pOyAgXHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUxpc3QodHJ1ZSkpO1xyXG5cclxuXHQgIFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHQgIFx0XHRcdHRleHRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCksXHJcblx0ICAgIFx0XHQvL2xpc3RPcGVuOiB0cnVlXHJcblx0ICBcdFx0fSwgICgpID0+IHtcclxuICAgICAgXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG4gICAgXHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHJcblx0XHQgICAgaW5ncmVkZm91bmRsaXN0OiBbXCJMb2FkaW5nLi4uXCJdXHJcblx0XHR9KTtcclxuXHRcdGZldGNoKHVybG5hbWUgKyBcIi9pbmdyZWRpZW50cz91bmFtZT1cIiArIGVuY29kZVVSSShldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogXCIgKyBkYXRhKTtcclxuXHRcdFx0dmFyIGRhdGFsaXN0ID0gZGF0YS5zcGxpdChcIixcIik7XHJcblx0XHRcdGlmKGRhdGEgPT0gXCJcIil7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ICAgIGluZ3JlZGZvdW5kbGlzdDogW11cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCAgICBpbmdyZWRmb3VuZGxpc3Q6IGRhdGFsaXN0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG5cdFJlbW92ZUluZ3JlZChldmVudCl7XHJcblx0XHR2YXIgaW5kZXggPSArKHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QuaW5kZXhPZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXkyJykpKTtcclxuXHRcdGNvbnNvbGUubG9nKGluZGV4KVxyXG5cdFx0dmFyIGNoYW5nZWRBcnJheSA9IHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3Quc2xpY2UoKTtcclxuXHRcdGNoYW5nZWRBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7aW5ncmVkdGV4dGxpc3Q6IGNoYW5nZWRBcnJheX19KVxyXG5cdH1cclxuXHJcblx0YWRkSW5ncmVkaWVudChldmVudCl7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmlkKVxyXG5cdFx0aWYoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PSBcImFkZEJ1dHRvblwiIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgPT0gXCJteUZpZWxkXCIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIllFRVRcIilcclxuXHRcdFx0aWYodGhpcy5zdGF0ZS50ZXh0VmFsdWUgPT0gXCJcIil7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QuZmluZEluZGV4KGluZyA9PiBpbmcgPT0gdGhpcy5zdGF0ZS50ZXh0VmFsdWUpID09IC0xKXtcclxuXHRcdFx0XHQvL3RoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4ge2luZ3JlZGxpc3Q6IHByZXZTdGF0ZS5pbmdyZWRsaXN0LmNvbmNhdChbKFxyXG5cdFx0XHRcdFx0Ly88aDEgb25DbGljaz17dGhpcy5SZW1vdmVJbmdyZWR9IGtleT17dGhpcy5zdGF0ZS50ZXh0VmFsdWV9Pnt0aGlzLnN0YXRlLnRleHRWYWx1ZX08L2gxPlxyXG5cdFx0XHRcdC8vKV0pfX0pXHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4ge2luZ3JlZHRleHRsaXN0OiBwcmV2U3RhdGUuaW5ncmVkdGV4dGxpc3QuY29uY2F0KFt0aGlzLnN0YXRlLnRleHRWYWx1ZV0pfX0pXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dmFyIGN1c3RvbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdjdXN0b210ZXh0JylcclxuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVMaXN0KGZhbHNlKSk7XHJcblx0XHRcdC8qdGhpcy5zZXRTdGF0ZSh7IGxpc3RPcGVuOiBmYWxzZSB9LCAoKSA9PiB7XHJcblx0XHQgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG5cdFx0ICAgIH0pOyAqLyBcclxuXHRcdCAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51KTtcclxuXHRcdCAgICAvL2lmKHRoaXMuc3RhdGUuaW5ncmVkbGlzdC5maW5kSW5kZXgoaW5nID0+IGluZy5rZXkgPT0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY3VzdG9tdGV4dCcpKSA9PSAtMSl7XHJcblx0XHQgICAgaWYodGhpcy5zdGF0ZS5pbmdyZWR0ZXh0bGlzdC5maW5kSW5kZXgoaW5nID0+IGluZyA9PSBjdXN0b20pID09IC0xKXtcclxuXHRcdFx0XHQvL3RoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4ge2luZ3JlZGxpc3Q6IHByZXZTdGF0ZS5pbmdyZWRsaXN0LmNvbmNhdChbKFxyXG5cdFx0XHRcdC8vPGgxIG9uQ2xpY2s9e3RoaXMuUmVtb3ZlSW5ncmVkfSBrZXk9e2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2N1c3RvbXRleHQnKX0+e2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2N1c3RvbXRleHQnKX08L2gxPlxyXG5cdFx0XHRcdC8vKV0pfX0pXHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4ge2luZ3JlZHRleHRsaXN0OiBwcmV2U3RhdGUuaW5ncmVkdGV4dGxpc3QuY29uY2F0KFtjdXN0b21dKX19KVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCBjbG9zZU1lbnUoZXZlbnQpIHtcclxuICAgIFxyXG5cdCAgICBpZiAoIXRoaXMuZHJvcGRvd25NZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuXHQgICAgXHR0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUxpc3QoZmFsc2UpKTtcclxuXHQgICAgICBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG5cdCAgICAgLyogdGhpcy5zZXRTdGF0ZSh7IGxpc3RPcGVuOiBmYWxzZSB9LCAoKSA9PiB7XHJcblx0ICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51KTtcclxuXHQgICAgICB9KTsgICovXHJcblx0ICAgICAgXHJcblx0ICAgIH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0ICA8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGFsaWduPVwiY2VudGVyXCIgPlxyXG5cdFx0XHQ8YnIvPjxici8+PGJyLz5cclxuXHRcdFx0PGZvcm0gbmFtZT1cImFkZEZvcm1cIiBvblN1Ym1pdD17KGV2ZW50KSA9PiB0aGlzLnNob3dNZW51KGV2ZW50KX0+XHJcblx0XHQgICAgICAgIDxsYWJlbD5cclxuXHRcdCAgICAgICAgICBcdDxoMj5XaGF0J3MgaW4geW91ciBmcmlkZ2U/IDwvaDI+XHJcblx0XHQgICAgICAgICAgXHQ8VGV4dEZpZWxkICBvbktleVByZXNzPXtlID0+IHtpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtlLnByZXZlbnREZWZhdWx0KCk7IHRoaXMuYWRkSW5ncmVkaWVudChlKTt9fX0gaWQ9XCJteUZpZWxkXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zaG93TWVudShldmVudCl9IG1hcmdpbj1cIm5vcm1hbFwiIC8+XHJcblx0XHQgICAgICAgIDwvbGFiZWw+XHJcblx0XHQgICAgICAgIFxyXG5cdFx0ICAgIDwvZm9ybT5cclxuXHJcblx0XHQgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmFkZEluZ3JlZGllbnR9IGlkPVwiYWRkQnV0dG9uXCIgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiR2VudGl1bSBCb29rIEJhc2ljXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBmb250U2l6ZTogJzE2cHgnIH19PlBpY2sgaW5ncmVkaWVudHM8L0J1dHRvbj5cclxuXHRcdFx0XHJcblx0XHRcdHsgXHJcblx0XHRcdFx0dGhpcy5wcm9wcy5saXN0T3BlbiBcclxuXHRcdFx0XHQ/KFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudVwiIHJlZj17KGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZHJvcGRvd25NZW51ID0gZWxlbWVudDtcclxuXHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiICBzdHlsZSA9IHt7d2lkdGg6IDI1MH19PjxEaXZpZGVyIC8+XHJcblx0XHRcdFx0ICBcdFx0e3RoaXMuc3RhdGUuaW5ncmVkZm91bmRsaXN0Lm1hcCgoaW5ncmVkKSA9PiAoPGRpdiBrZXk9e2luZ3JlZH0+XHJcblx0XHRcdFx0ICBcdFx0XHQ8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkSW5ncmVkaWVudH0gY3VzdG9tdGV4dD17aW5ncmVkfT5cclxuXHRcdFx0XHRcdCAgICAgICAgICBcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aW5ncmVkfSAvPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8RGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgIFx0XHQpKX1cclxuXHRcdFx0XHQgIFx0PC9MaXN0PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdDooXHJcblx0XHRcdFx0PGRpdj48YnIvPjxici8+PGJyLz48YnIvPjwvZGl2PlxyXG5cdFx0XHRcdClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaW5saW5lXCI+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnN0YXRlLmluZ3JlZHRleHRsaXN0Lm1hcChpbmdyZWQgPT4gKFxyXG5cdFx0XHRcdFx0PEJ1dHRvbiAgdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17dGhpcy5SZW1vdmVJbmdyZWR9IGtleT17aW5ncmVkfSBrZXkyPXtpbmdyZWR9PntpbmdyZWR9PC9CdXR0b24+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdClcclxuXHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxici8+PGJyLz48YnIvPjxici8+XHJcblx0XHRcdDxMaW5rICBocmVmPXt7IHBhdGhuYW1lOiAnL3JlY2lwZWxpc3QnLCBxdWVyeTogeyBpbmdyZWRsaXN0OiB0aGlzLnN0YXRlLmluZ3JlZHRleHRsaXN0LnRvU3RyaW5nKCkgfSB9fT5cclxuXHQgICAgICAgIFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3R5bGU9e3tmb250RmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZvbnRTaXplOiAnMjBweCcgfX0gY29sb3I9XCJwcmltYXJ5XCI+RklORCBSRUNJUEVTPC9CdXR0b24+XHJcblx0ICAgICAgICA8L0xpbms+XHJcblx0XHRcdDxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+XHJcblxyXG5cdFx0XHQ8aDYgc3R5bGU9e3tmb250U2l6ZTogXCIxMnB4XCIsIGNvbG9yOiBcIiMwMDkxMDlcIn19PkNyZWF0ZWQgYnkgQXNlZW0gU2FuZS4gVG8gdmlzaXQgdGhlIEdpdEh1YiByZXBvc2l0b3J5IGZvciB0aGlzIHByb2plY3QsIGdvIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXNlZW0xOTEvRnJpZGdlaHVudGVyc1wiIHN0eWxlPXt7Zm9udFNpemU6IFwiMTJweFwifX0+aGVyZTwvYT4uPC9oNj5cclxuXHRcdFx0PC9kaXY+PHN0eWxlIGpzeD57YFxyXG5cdCAgICAgICAgXHJcblxyXG5cdCAgICAgICAgaDIge1xyXG5cdCAgICAgICAgICBmb250LWZhbWlseTogXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgVGltZXMsIHNlcmlmO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgXHJcblx0ICAgICAgYH08L3N0eWxlPlxyXG5cdCAgICAgIDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0IDwvTGF5b3V0PlxyXG5cdFx0XHRcclxuXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZShjb25uZWN0KHN0YXRlPT5zdGF0ZSkoTWFpblBhZ2UpKSJdfQ== */\n/*@ sourceURL=pages\\index.js */"
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
//# sourceMappingURL=4.1407f7736a025dacb8f5.hot-update.js.map