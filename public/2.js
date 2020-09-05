(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/StartProject.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/StartProject.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/user */ "./resources/js/store/actions/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var sri = __webpack_require__(/*! simple-random-id */ "./node_modules/simple-random-id/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user_name: '',
      project_title: '',
      show: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['getProjects', 'isExist', 'getProfile'])),
  created: function created() {
    this.getUser();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(['SaveProjectToState', 'CheckIfProjectExist', 'fetchProjects'])), {}, {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      this.show = true;
      this.updateUser();
      console.log('finished');
    },
    doToast: function doToast() {
      var variant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var to = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true,
        to: to
      });
    },
    updateUser: function updateUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _this.getProfile.user.id;
                _context.prev = 1;

                if (!(_this.user_name !== '' && _this.project_title !== '')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("http://localhost:8000/api/users/".concat(id), {
                  name: _this.user_name
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                });

              case 5:
                response = _context.sent;
                console.log(response, 'response');

                _this.$store.dispatch(_store_actions_user__WEBPACK_IMPORTED_MODULE_1__["USER_REQUEST"]);

                setTimeout(function () {
                  return _this.createProject();
                }, 3000);
                _context.next = 13;
                break;

              case 11:
                _this.doToast('warning', 'Name & Project Title is required.', 'Please fill up the form');

                _this.show = false;

              case 13:
                _context.next = 20;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0, 'updateUser');

                _this.doToast('danger', 'Please refresh and try again.', 'Update Error');

                _this.show = false;

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15]]);
      }))();
    },
    createProject: function createProject() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var id, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _this2.getProfile.user.id;
                console.log(id, 'profile id');
                _context2.prev = 2;

                if (!(_this2.project_title !== '')) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://localhost:8000/api/projects", {
                  project_id: sri(),
                  title: _this2.project_title,
                  owner_id: id
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                });

              case 6:
                response = _context2.sent;

                _this2.SaveProjectToState(response.data);

                console.log(response, 'response');
                setTimeout(_this2.$router.push('/todolist'), 3000);
                _context2.next = 14;
                break;

              case 12:
                _this2.doToast('warning', 'Project Title is required.', 'Please fill up the form');

                _this2.show = false;

              case 14:
                _context2.next = 21;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](2);
                console.log(_context2.t0, 'createProject');

                _this2.doToast('danger', 'Please refresh and try again.', 'Create Error');

                _this2.show = false;

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 16]]);
      }))();
    },
    getUser: function getUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$store.dispatch(_store_actions_user__WEBPACK_IMPORTED_MODULE_1__["USER_REQUEST"]);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.start-container[data-v-eaa29d14]{\n    width: 40%;\n}\n@media only screen and (max-width: 900px) {\n.start-container[data-v-eaa29d14]{\n        width: 75%;\n}\n}\n@media only screen and (max-width: 600px) {\n.start-container[data-v-eaa29d14]{\n        width: 100%;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/StartProject.vue?vue&type=template&id=eaa29d14&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/StartProject.vue?vue&type=template&id=eaa29d14&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-overlay",
    { attrs: { show: _vm.show, rounded: "sm" } },
    [
      _c(
        "b-container",
        {
          staticClass: "align-center p-5 start-container",
          attrs: { fluid: "md" }
        },
        [
          _c(
            "form",
            { staticClass: "align-center mt-4", on: { submit: _vm.onSubmit } },
            [
              _c("h1", { staticClass: "text-info" }, [_vm._v("Good day :)")]),
              _vm._v(" "),
              _c("h3", { staticClass: "mb-5" }, [
                _vm._v(
                  "Please tell me how we should call you and the name of your new project."
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Your Nickname")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user_name,
                      expression: "user_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.user_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.user_name = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mb-5" }, [
                _c("label", [_vm._v("New Project Title")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.project_title,
                      expression: "project_title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.project_title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.project_title = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-info mr-2", attrs: { type: "submit" } },
                [
                  _vm._v("Finish Setup\n                "),
                  _c("b-icon", { attrs: { icon: "arrow-right-circle" } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { variant: "light", to: "/joinproject" } },
                [_vm._v("I'll join another project")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/StartProject.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/StartProject.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartProject_vue_vue_type_template_id_eaa29d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartProject.vue?vue&type=template&id=eaa29d14&scoped=true& */ "./resources/js/views/StartProject.vue?vue&type=template&id=eaa29d14&scoped=true&");
/* harmony import */ var _StartProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StartProject.vue?vue&type=script&lang=js& */ "./resources/js/views/StartProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StartProject_vue_vue_type_style_index_0_id_eaa29d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css& */ "./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StartProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StartProject_vue_vue_type_template_id_eaa29d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StartProject_vue_vue_type_template_id_eaa29d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eaa29d14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/StartProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/StartProject.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/StartProject.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StartProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/StartProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_style_index_0_id_eaa29d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/StartProject.vue?vue&type=style&index=0&id=eaa29d14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_style_index_0_id_eaa29d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_style_index_0_id_eaa29d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_style_index_0_id_eaa29d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_style_index_0_id_eaa29d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_style_index_0_id_eaa29d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/StartProject.vue?vue&type=template&id=eaa29d14&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/StartProject.vue?vue&type=template&id=eaa29d14&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_template_id_eaa29d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StartProject.vue?vue&type=template&id=eaa29d14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/StartProject.vue?vue&type=template&id=eaa29d14&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_template_id_eaa29d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProject_vue_vue_type_template_id_eaa29d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);