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

      if (event.currentTarget.id == "addButton" || event.target.id == "myField") {
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
      }, "Pick ingredients"), this.props.listOpen ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "FIND RECIPES")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-404019787"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        style: {
          fontSize: "12px",
          color: "#009109"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }, "Created by Aseem Sane. To visit the GitHub repository for this project, go ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://github.com/aseem191/Fridgehunters",
        style: {
          fontSize: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-404019787"
      }, "here"), ".")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "404019787",
        css: "h2.jsx-404019787{font-family:\"Gentium Book Basic\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2THFCLEFBSzJELDZDQUNqRCIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxBc2VlbVxcUmVhY3QgUHJvamVjdHNcXEZyaWRnZWh1bnRlcnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBXcmFwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcExheW91dC5qcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgdXJsbmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3VybG5hbWUuanMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IHsgdG9nZ2xlTGlzdCB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlJztcclxuXHJcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0ICBzdXBlcihwcm9wcylcclxuXHQgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlTGlzdChmYWxzZSkpO1xyXG5cdCAgdGhpcy5zdGF0ZSA9IHtcclxuXHQgICAgLy9saXN0T3BlbjogZmFsc2UsXHJcblx0ICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxyXG5cdCAgICB0ZXh0VmFsdWU6IFwiXCIsXHJcblx0ICAgIGluZ3JlZHRleHRsaXN0OiBbXSxcclxuXHQgICAgaW5ncmVkZm91bmRsaXN0OiBbXVxyXG5cdCAgfVxyXG5cclxuXHQgIHRoaXMuc2hvd01lbnUgPSB0aGlzLnNob3dNZW51LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLlJlbW92ZUluZ3JlZCA9IHRoaXMuUmVtb3ZlSW5ncmVkLmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLmFkZEluZ3JlZGllbnQgPSB0aGlzLmFkZEluZ3JlZGllbnQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHNob3dNZW51KGV2ZW50KXtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGV4dFZhbHVlKTtcclxuXHRcdGlmKHRoaXMucHJvcHMubGlzdE9wZW4pe1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdGV4dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pOyAgXHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUxpc3QodHJ1ZSkpO1xyXG5cclxuXHQgIFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHQgIFx0XHRcdHRleHRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCksXHJcblx0ICAgIFx0XHQvL2xpc3RPcGVuOiB0cnVlXHJcblx0ICBcdFx0fSwgICgpID0+IHtcclxuICAgICAgXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xyXG4gICAgXHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHJcblx0XHQgICAgaW5ncmVkZm91bmRsaXN0OiBbXCJMb2FkaW5nLi4uXCJdXHJcblx0XHR9KTtcclxuXHRcdGZldGNoKHVybG5hbWUgKyBcIi9pbmdyZWRpZW50cz91bmFtZT1cIiArIGVuY29kZVVSSShldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogXCIgKyBkYXRhKTtcclxuXHRcdFx0dmFyIGRhdGFsaXN0ID0gZGF0YS5zcGxpdChcIixcIik7XHJcblx0XHRcdGlmKGRhdGEgPT0gXCJcIil7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ICAgIGluZ3JlZGZvdW5kbGlzdDogW11cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCAgICBpbmdyZWRmb3VuZGxpc3Q6IGRhdGFsaXN0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG5cdFJlbW92ZUluZ3JlZChldmVudCl7XHJcblx0XHR2YXIgaW5kZXggPSArKHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QuaW5kZXhPZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdrZXkyJykpKTtcclxuXHRcdGNvbnNvbGUubG9nKGluZGV4KVxyXG5cdFx0dmFyIGNoYW5nZWRBcnJheSA9IHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3Quc2xpY2UoKTtcclxuXHRcdGNoYW5nZWRBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge3JldHVybiB7aW5ncmVkdGV4dGxpc3Q6IGNoYW5nZWRBcnJheX19KVxyXG5cdH1cclxuXHJcblx0YWRkSW5ncmVkaWVudChldmVudCl7XHJcblx0XHRldmVudC5wZXJzaXN0KCk7XHJcblx0XHRpZihldmVudC5jdXJyZW50VGFyZ2V0LmlkID09IFwiYWRkQnV0dG9uXCIgfHwgZXZlbnQudGFyZ2V0LmlkID09IFwibXlGaWVsZFwiKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJZRUVUXCIpXHJcblx0XHRcdGlmKHRoaXMuc3RhdGUudGV4dFZhbHVlID09IFwiXCIpe1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLnN0YXRlLmluZ3JlZHRleHRsaXN0LmZpbmRJbmRleChpbmcgPT4gaW5nID09IHRoaXMuc3RhdGUudGV4dFZhbHVlKSA9PSAtMSl7XHJcblx0XHRcdFx0Ly90aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiB7cmV0dXJuIHtpbmdyZWRsaXN0OiBwcmV2U3RhdGUuaW5ncmVkbGlzdC5jb25jYXQoWyhcclxuXHRcdFx0XHRcdC8vPGgxIG9uQ2xpY2s9e3RoaXMuUmVtb3ZlSW5ncmVkfSBrZXk9e3RoaXMuc3RhdGUudGV4dFZhbHVlfT57dGhpcy5zdGF0ZS50ZXh0VmFsdWV9PC9oMT5cclxuXHRcdFx0XHQvLyldKX19KVxyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiB7cmV0dXJuIHtpbmdyZWR0ZXh0bGlzdDogcHJldlN0YXRlLmluZ3JlZHRleHRsaXN0LmNvbmNhdChbdGhpcy5zdGF0ZS50ZXh0VmFsdWVdKX19KVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHZhciBjdXN0b20gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnY3VzdG9tdGV4dCcpXHJcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlTGlzdChmYWxzZSkpO1xyXG5cdFx0XHQvKnRoaXMuc2V0U3RhdGUoeyBsaXN0T3BlbjogZmFsc2UgfSwgKCkgPT4ge1xyXG5cdFx0ICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51KTtcclxuXHRcdCAgICB9KTsgKi8gXHJcblx0XHQgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudSk7XHJcblx0XHQgICAgLy9pZih0aGlzLnN0YXRlLmluZ3JlZGxpc3QuZmluZEluZGV4KGluZyA9PiBpbmcua2V5ID09IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2N1c3RvbXRleHQnKSkgPT0gLTEpe1xyXG5cdFx0ICAgIGlmKHRoaXMuc3RhdGUuaW5ncmVkdGV4dGxpc3QuZmluZEluZGV4KGluZyA9PiBpbmcgPT0gY3VzdG9tKSA9PSAtMSl7XHJcblx0XHRcdFx0Ly90aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiB7cmV0dXJuIHtpbmdyZWRsaXN0OiBwcmV2U3RhdGUuaW5ncmVkbGlzdC5jb25jYXQoWyhcclxuXHRcdFx0XHQvLzxoMSBvbkNsaWNrPXt0aGlzLlJlbW92ZUluZ3JlZH0ga2V5PXtldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdjdXN0b210ZXh0Jyl9PntldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdjdXN0b210ZXh0Jyl9PC9oMT5cclxuXHRcdFx0XHQvLyldKX19KVxyXG5cclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiB7cmV0dXJuIHtpbmdyZWR0ZXh0bGlzdDogcHJldlN0YXRlLmluZ3JlZHRleHRsaXN0LmNvbmNhdChbY3VzdG9tXSl9fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQgY2xvc2VNZW51KGV2ZW50KSB7XHJcbiAgICBcclxuXHQgICAgaWYgKCF0aGlzLmRyb3Bkb3duTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcblx0ICAgIFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVMaXN0KGZhbHNlKSk7XHJcblx0ICAgICAgXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNZW51KTtcclxuXHQgICAgIC8qIHRoaXMuc2V0U3RhdGUoeyBsaXN0T3BlbjogZmFsc2UgfSwgKCkgPT4ge1xyXG5cdCAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudSk7XHJcblx0ICAgICAgfSk7ICAqL1xyXG5cdCAgICAgIFxyXG5cdCAgICB9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdCAgPExheW91dD5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBhbGlnbj1cImNlbnRlclwiID5cclxuXHRcdFx0PGJyLz48YnIvPjxici8+XHJcblx0XHRcdDxmb3JtIG5hbWU9XCJhZGRGb3JtXCIgb25TdWJtaXQ9eyhldmVudCkgPT4gdGhpcy5zaG93TWVudShldmVudCl9PlxyXG5cdFx0ICAgICAgICA8bGFiZWw+XHJcblx0XHQgICAgICAgICAgXHQ8aDI+V2hhdCdzIGluIHlvdXIgZnJpZGdlPyA8L2gyPlxyXG5cdFx0ICAgICAgICAgIFx0PFRleHRGaWVsZCAgb25LZXlQcmVzcz17ZSA9PiB7aWYgKGUua2V5ID09PSAnRW50ZXInKSB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLmFkZEluZ3JlZGllbnQoZSk7fX19IGlkPVwibXlGaWVsZFwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2hvd01lbnUoZXZlbnQpfSBtYXJnaW49XCJub3JtYWxcIiAvPlxyXG5cdFx0ICAgICAgICA8L2xhYmVsPlxyXG5cdFx0ICAgICAgICBcclxuXHRcdCAgICA8L2Zvcm0+XHJcblxyXG5cdFx0ICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5hZGRJbmdyZWRpZW50fSBpZD1cImFkZEJ1dHRvblwiICBzdHlsZT17eyBmb250RmFtaWx5OiBcIkdlbnRpdW0gQm9vayBCYXNpY1wiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgZm9udFNpemU6ICcxNnB4JyB9fT5QaWNrIGluZ3JlZGllbnRzPC9CdXR0b24+XHJcblx0XHRcdFxyXG5cdFx0XHR7IFxyXG5cdFx0XHRcdHRoaXMucHJvcHMubGlzdE9wZW4gXHJcblx0XHRcdFx0PyhcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIiByZWY9eyhlbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmRyb3Bkb3duTWVudSA9IGVsZW1lbnQ7XHJcblx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHQ8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiAgc3R5bGUgPSB7e3dpZHRoOiAyNTB9fT48RGl2aWRlciAvPlxyXG5cdFx0XHRcdCAgXHRcdHt0aGlzLnN0YXRlLmluZ3JlZGZvdW5kbGlzdC5tYXAoKGluZ3JlZCkgPT4gKDxkaXYga2V5PXtpbmdyZWR9PlxyXG5cdFx0XHRcdCAgXHRcdFx0PExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEluZ3JlZGllbnR9IGN1c3RvbXRleHQ9e2luZ3JlZH0+XHJcblx0XHRcdFx0XHQgICAgICAgICAgXHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2luZ3JlZH0gLz5cclxuXHRcdFx0XHRcdCAgICAgICAgPC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdCAgICAgICAgPERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdCAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICBcdFx0KSl9XHJcblx0XHRcdFx0ICBcdDwvTGlzdD5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQ6KFxyXG5cdFx0XHRcdDxkaXY+PGJyLz48YnIvPjxici8+PGJyLz48L2Rpdj5cclxuXHRcdFx0XHQpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImlubGluZVwiPlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5zdGF0ZS5pbmdyZWR0ZXh0bGlzdC5tYXAoaW5ncmVkID0+IChcclxuXHRcdFx0XHRcdDxCdXR0b24gIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e3RoaXMuUmVtb3ZlSW5ncmVkfSBrZXk9e2luZ3JlZH0ga2V5Mj17aW5ncmVkfT57aW5ncmVkfTwvQnV0dG9uPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQpXHJcblx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8YnIvPjxici8+PGJyLz48YnIvPlxyXG5cdFx0XHQ8TGluayAgaHJlZj17eyBwYXRobmFtZTogJy9yZWNpcGVsaXN0JywgcXVlcnk6IHsgaW5ncmVkbGlzdDogdGhpcy5zdGF0ZS5pbmdyZWR0ZXh0bGlzdC50b1N0cmluZygpIH0gfX0+XHJcblx0ICAgICAgICBcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7Zm9udEZhbWlseTogXCJNb250c2VycmF0XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBmb250U2l6ZTogJzIwcHgnIH19IGNvbG9yPVwicHJpbWFyeVwiPkZJTkQgUkVDSVBFUzwvQnV0dG9uPlxyXG5cdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHQ8YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPlxyXG5cclxuXHRcdFx0PGg2IHN0eWxlPXt7Zm9udFNpemU6IFwiMTJweFwiLCBjb2xvcjogXCIjMDA5MTA5XCJ9fT5DcmVhdGVkIGJ5IEFzZWVtIFNhbmUuIFRvIHZpc2l0IHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBmb3IgdGhpcyBwcm9qZWN0LCBnbyA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FzZWVtMTkxL0ZyaWRnZWh1bnRlcnNcIiBzdHlsZT17e2ZvbnRTaXplOiBcIjEycHhcIn19PmhlcmU8L2E+LjwvaDY+XHJcblx0XHRcdDwvZGl2PjxzdHlsZSBqc3g+e2BcclxuXHQgICAgICAgIFxyXG5cclxuXHQgICAgICAgIGgyIHtcclxuXHQgICAgICAgICAgZm9udC1mYW1pbHk6IFwiR2VudGl1bSBCb29rIEJhc2ljXCIsIFRpbWVzLCBzZXJpZjtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIFxyXG5cdCAgICAgIGB9PC9zdHlsZT5cclxuXHQgICAgICA8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdCA8L0xheW91dD5cclxuXHRcdFx0XHJcblxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2UoY29ubmVjdChzdGF0ZT0+c3RhdGUpKE1haW5QYWdlKSkiXX0= */\n/*@ sourceURL=pages\\index.js */"
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
//# sourceMappingURL=4.e53f6132efea4306c2f4.hot-update.js.map