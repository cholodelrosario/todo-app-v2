(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddTodo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddTodo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddTodo',
  data: function data() {
    return {
      title: '',
      inputState: false,
      error: false,
      selected: 1,
      usersForChecking: [],
      disabled: false
    };
  },
  created: function created() {
    this.getAllUsers();
    this.checkIfMember();
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getProject', 'getProfile'])), {}, {
    returnUserOptions: function returnUserOptions() {
      var _this = this;

      try {
        var project = this.getProject;
        var members = project.member_id !== null ? project.member_id.split(',') : [];

        if (this.disabled) {
          var index = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.findIndex(members, function (a) {
            return a == _this.getProfile.user.id.toString();
          });
          console.log(index, 'index');
          this.selected = index + 2;
          return [{
            value: index + 2,
            text: this.getProfile.user.name
          }];
        } else {
          var users = this.getNames([].concat(_toConsumableArray(project.owner_id), _toConsumableArray(members)));
          return users.map(function (a) {
            return {
              value: a.userId,
              text: a.name
            };
          });
        }
      } catch (error) {
        console.log(error, 'get users');
        return [];
      }
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['addTodo'])), {}, {
    onEnter: function onEnter() {
      var _this2 = this;

      if (this.title !== '') {
        var payload = {
          title: this.title,
          userId: this.selected
        };
        this.addTodo(payload);
        this.inputState = true;
        this.title = '';
        setTimeout(function () {
          _this2.inputState = false;
        }, 3000);
      } else {
        this.error = true;
        setTimeout(function () {
          _this2.error = false;
        }, 3000);
      }
    },
    getAllUsers: function getAllUsers() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:8000/api/users');

              case 3:
                res = _context.sent;
                _this3.usersForChecking = res.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0, 'error');

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    getNames: function getNames(array) {
      var _this4 = this;

      var users = [];
      var userids = 1;
      array.forEach(function (a) {
        _this4.usersForChecking.forEach(function (b) {
          if (a == b.id) {
            b.userId = userids;
            users.push(b);
            userids = userids + 1;
          }
        });
      });
      return users;
    },
    checkIfMember: function checkIfMember() {
      if (this.getProfile.user.isMember == 1) {
        this.disabled = true;
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Todos.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Todos.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  name: 'Todos',
  data: function data() {
    return {
      filter: 'Recent',
      show: false,
      selectedEditTodo: null,
      selectedEditTodoIndex: null,
      isEdit: null,
      newTodoTitle: '',
      todoEditId: '',
      pagination: {},
      isHovered: null,
      busy: false,
      timeout: null,
      isDelete: null,
      usersForChecking: []
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.clearTimeout();
  },
  created: function created() {
    this.show = true;

    if (this.allTodos.length == 0) {
      this.fetchTodos();
    }

    this.fetchProjects();
    this.setProject();
    this.getAllUsers();
    this.show = false;
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['allTodos', 'getProfile', 'getProjects', 'getProject'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['projects', 'todos'])), {}, {
    returnMapped: function returnMapped() {
      var _this = this;

      try {
        var todos = this.allTodos;
        var values; // console.log(todos.map(a=> {return {...a,userprofile: this.returnUserDataToTodo(a.userId)}}),'yes mapped')

        if (this.filter == 'Recent') {
          values = todos.map(function (a) {
            return _objectSpread(_objectSpread({}, a), {}, {
              userprofile: _this.returnUserDataToTodo(a.userId)
            });
          });
        } else if (this.filter == 'Completed') {
          values = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.orderBy(todos.map(function (a) {
            return _objectSpread(_objectSpread({}, a), {}, {
              userprofile: _this.returnUserDataToTodo(a.userId)
            });
          }), 'completed', 'desc');
        } else {
          values = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.orderBy(todos.map(function (a) {
            return _objectSpread(_objectSpread({}, a), {}, {
              userprofile: _this.returnUserDataToTodo(a.userId)
            });
          }), 'completed', 'asc');
        }

        return values;
      } catch (error) {
        console.log('returnMapped', error);
        return [];
      }
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['fetchTodos', 'deleteTodo', 'updateTodo', 'SaveProjectToState', 'fetchProjects'])), {}, {
    deleteLoading: function deleteLoading(id, sri) {
      var _this2 = this;

      this.busy = true;
      this.isDelete = sri;
      this.deleteTodo(sri); // Simulate an async request

      this.setTimeout(function () {
        _this2.busy = false;
        _this2.isDelete = null;
      });
    },
    setTimeout: function (_setTimeout) {
      function setTimeout(_x) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (callback) {
      var _this3 = this;

      this.clearTimeout();
      this.timeout = setTimeout(function () {
        _this3.clearTimeout();

        callback();
      }, 2000);
    }),
    clearTimeout: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }),
    onEnterList: function onEnterList(e) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var todo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // console.log(e.target.value,'e')
                todo = _objectSpread({}, _this4.selectedEditTodo);
                todo.title = e.target.value;
                _context.next = 5;
                return _this4.updateTodo(_this4.selectedEditTodoIndex, todo);

              case 5:
                _this4.isEdit = false; // console.log('saved')               

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0, 'onEnter');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    EditTodo: function EditTodo(id, index, todo) {
      this.isEdit = id;
      this.selectedEditTodo = todo;
      this.selectedEditTodoIndex = index;
    },
    statusChange: function statusChange(e, todo, indx) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                todo.completed = e;
                _context2.next = 3;
                return _this5.updateTodo(indx, todo);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    goToTask: function goToTask(todo) {
      localStorage.setItem('viewTodo', JSON.stringify(todo));
      this.$router.push("/todopage/".concat(todo.sri));
    },
    setProject: function setProject() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var id, projects_list, projects, _projects;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _this6.getProfile.user.id;
                projects_list = _this6.getProjects;
                _context3.prev = 2;

                if (!(_this6.getProfile.user.isMember == 1)) {
                  _context3.next = 10;
                  break;
                }

                projects = projects_list.filter(function (a) {
                  var members = a.member_id.split(',');

                  if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.includes(members, id.toString())) {
                    return a;
                  }
                })[0];
                console.log(projects, 's');
                _context3.next = 8;
                return _this6.SaveProjectToState(projects);

              case 8:
                _context3.next = 14;
                break;

              case 10:
                if (!id) {
                  _context3.next = 14;
                  break;
                }

                _projects = projects_list.filter(function (a) {
                  return a.owner_id == id;
                })[0];
                _context3.next = 14;
                return _this6.SaveProjectToState(_projects);

              case 14:
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](2);
                console.log(_context3.t0, 'error');

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 16]]);
      }))();
    },
    getAllUsers: function getAllUsers() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:8000/api/users');

              case 3:
                res = _context4.sent;
                _this7.usersForChecking = res.data;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0, 'error');

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    getNames: function getNames(array) {
      var _this8 = this;

      var users = [];
      var userids = 1;
      array.forEach(function (a) {
        _this8.usersForChecking.forEach(function (b) {
          if (a == b.id) {
            b.userId = userids;
            users.push(b);
            userids = userids + 1;
          }
        });
      });
      return users;
    },
    returnUserDataToTodo: function returnUserDataToTodo(userId) {
      var project = this.getProject;
      var members = project.member_id !== null ? project.member_id.split(',') : [];
      var users = this.getNames([].concat(_toConsumableArray(project.owner_id), _toConsumableArray(members)));
      return users.filter(function (a) {
        return a.userId == userId;
      })[0];
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TodoList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TodoList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Todos */ "./resources/js/components/Todos.vue");
/* harmony import */ var _components_AddTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTodo */ "./resources/js/components/AddTodo.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);


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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Todos: _components_Todos__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddTodo: _components_AddTodo__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isEdit: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getProjects', 'getProfile', 'getProject'])), {}, {
    returnCurrentProject: function returnCurrentProject() {
      try {
        if (this.getProfile.user.isMember == 1) {
          var id = this.getProfile.user.id;
          var projects_list = this.getProjects;

          try {
            if (id) {
              var projects = projects_list.filter(function (a) {
                var members = a.member_id.split(',');

                if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.includes(members, id.toString())) {
                  return a;
                }
              })[0];
              console.log(projects, 's');
              return projects;
            } else {
              this.doToast('warning', 'Please refresh the page', 'Project Loading Error');
              return false;
            }
          } catch (error) {
            this.doToast('warning', 'Please refresh the page', 'Project Loading Error');
            return false;
          }
        } else {
          var _id = this.getProfile.user.id;
          var _projects_list = this.getProjects;

          try {
            if (_id) {
              var _projects = _projects_list.filter(function (a) {
                return a.owner_id == _id;
              })[0]; // console.log(projects,'s')


              return _projects;
            } else {
              return false;
            }
          } catch (error) {
            this.doToast('warning', 'Please refresh the page', 'Project Loading Error');
            return false;
          }
        }
      } catch (error) {
        console.log(error, 'error');
        return false;
      }
    }
  }),
  created: function created() {
    this.fetchList();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['fetchProjects', 'SaveProjectToState'])), {}, {
    getUser: function getUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch(USER_REQUEST);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchList: function fetchList() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _this2.getProfile.user.id; // console.log(id,'id')

                if (!id) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return _this2.fetchProjects();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
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
    onEnterList: function onEnterList(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var project, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                project = _this3.getProject; // console.log(project)
                // console.log(e.target.value,'new title')

                if (!(project == undefined)) {
                  _context3.next = 5;
                  break;
                }

                console.log('problem state');
                _context3.next = 18;
                break;

              case 5:
                _context3.prev = 5;
                project.title = e.target.value;
                _context3.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("http://localhost:8000/api/projects/".concat(project.id), project, {
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                });

              case 9:
                res = _context3.sent;
                // console.log(res,'res')
                _this3.isEdit = false;
                _context3.next = 13;
                return _this3.SaveProjectToState(res.data);

              case 13:
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](5);
                console.log(_context3.t0, 'error in put');

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 15]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.delete-action[data-v-79d0db12]{\n    top:0;\n    right:0;\n}\n.edit-text[data-v-79d0db12]{\n    cursor: pointer;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.edit-text[data-v-612c5c23]{\n    cursor: pointer;\n}\n.todo-container[data-v-612c5c23]{\n    width: 40%;\n}\n@media only screen and (max-width: 960px) {\n.todo-container[data-v-612c5c23]{\n        width: 75%;\n}\n}\n@media only screen and (max-width: 600px) {\n.todo-container[data-v-612c5c23]{\n        width: 100%;\n}\n}   \n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddTodo.vue?vue&type=template&id=502faa6c&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddTodo.vue?vue&type=template&id=502faa6c& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "form-group my-5" },
    [
      _c(
        "b-alert",
        {
          attrs: {
            show: _vm.error,
            dismissible: "",
            fade: "",
            variant: "warning"
          }
        },
        [_vm._v("\n        Input is empty. Please type something below.\n    ")]
      ),
      _vm._v(" "),
      _c(
        "b-input-group",
        {
          attrs: { size: "md" },
          scopedSlots: _vm._u([
            {
              key: "append",
              fn: function() {
                return [
                  _c("b-form-select", {
                    attrs: {
                      size: "md",
                      options: _vm.returnUserOptions,
                      disabled: _vm.disabled
                    },
                    on: {
                      change: function($event) {
                        return _vm.$refs.todo.focus()
                      }
                    },
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
                    }
                  })
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c("b-form-input", {
            ref: "todo",
            staticClass: "mb-2",
            attrs: { type: "text", placeholder: "Enter New Todo" },
            on: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.onEnter($event)
              }
            },
            model: {
              value: _vm.title,
              callback: function($$v) {
                _vm.title = $$v
              },
              expression: "title"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.inputState
        ? _c("small", { staticClass: "text-success float-right" }, [
            _vm._v("Added !")
          ])
        : _c("small", { staticClass: "text-muted float-right" }, [
            _vm._v("Hit "),
            _c("b", [_vm._v("Enter")]),
            _vm._v(" in the "),
            _c("b", [_vm._v("textbox")]),
            _vm._v(" to add new Todo")
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Todos.vue?vue&type=template&id=79d0db12&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Todos.vue?vue&type=template&id=79d0db12&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c("b-form-select", {
        staticClass: "mb-3",
        attrs: { size: "md", options: ["Recent", "Completed", "Pending"] },
        model: {
          value: _vm.filter,
          callback: function($$v) {
            _vm.filter = $$v
          },
          expression: "filter"
        }
      }),
      _vm._v(" "),
      _c(
        "b-list-group",
        _vm._l(_vm.returnMapped, function(todo, indx) {
          return _c(
            "b-list-group-item",
            {
              key: todo.sri,
              staticClass: "flex-column align-items-start edit-text",
              attrs: { actions: true },
              on: {
                dblclick: function($event) {
                  return _vm.goToTask(todo)
                }
              }
            },
            [
              _vm.isEdit == todo.sri
                ? _c(
                    "div",
                    [
                      _c("b-form-textarea", {
                        staticClass: "form-control mb-2",
                        attrs: { size: "md", autofocus: "" },
                        on: {
                          keyup: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.onEnterList($event)
                          }
                        },
                        model: {
                          value: todo.title,
                          callback: function($$v) {
                            _vm.$set(todo, "title", $$v)
                          },
                          expression: "todo.title"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted float-right" }, [
                        _vm._v("Hit Enter to Saved Changes")
                      ])
                    ],
                    1
                  )
                : _c(
                    "div",
                    [
                      _c(
                        "b-overlay",
                        {
                          attrs: {
                            show: _vm.busy && _vm.isDelete == todo.sri,
                            opacity: "0.6",
                            "spinner-small": "",
                            "spinner-variant": "primary"
                          }
                        },
                        [
                          _c("div", { ref: "todo", refInFor: true }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex w-100 justify-content-between"
                              },
                              [
                                _c("b-form-checkbox", {
                                  staticClass: "mr-4 float-left text-info",
                                  attrs: { size: "lg" },
                                  on: {
                                    change: function(event) {
                                      return _vm.statusChange(event, todo, indx)
                                    }
                                  },
                                  model: {
                                    value: todo.completed,
                                    callback: function($$v) {
                                      _vm.$set(todo, "completed", $$v)
                                    },
                                    expression: "todo.completed"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "h5",
                                  {
                                    staticClass: "mb-1",
                                    on: {
                                      click: function($event) {
                                        return _vm.EditTodo(
                                          todo.sri,
                                          indx,
                                          todo
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(todo.title) +
                                        "  \r\n                        "
                                    ),
                                    _c(
                                      "b-button",
                                      {
                                        staticClass: "ml-2 float-right",
                                        attrs: { size: "sm", variant: "link" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteLoading(
                                              todo.id,
                                              todo.sri
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("b-icon", {
                                          attrs: {
                                            icon: "trash",
                                            variant: "warning"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            todo.userId
                              ? _c(
                                  "small",
                                  { staticClass: "float-right text-muted " },
                                  [
                                    _vm._v(
                                      "Assigned to " +
                                        _vm._s(todo.userprofile.name)
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]
                      )
                    ],
                    1
                  )
            ]
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TodoList.vue?vue&type=template&id=612c5c23&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TodoList.vue?vue&type=template&id=612c5c23&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "b-container",
    { staticClass: "align-center p-4 todo-container", attrs: { fluid: "md" } },
    [
      _vm.isEdit == false
        ? _c("div", [
            _c(
              "h1",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.returnCurrentProject,
                    expression: "returnCurrentProject"
                  }
                ],
                staticClass: "text-info mt-4 edit-text",
                on: {
                  dblclick: function($event) {
                    _vm.isEdit = true
                  }
                }
              },
              [_vm._v(_vm._s(_vm.returnCurrentProject.title))]
            )
          ])
        : _c("b-form-textarea", {
            staticClass: "form-control mb-2",
            attrs: { size: "md", autofocus: "" },
            on: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.onEnterList($event)
              }
            },
            model: {
              value: _vm.returnCurrentProject.title,
              callback: function($$v) {
                _vm.$set(_vm.returnCurrentProject, "title", $$v)
              },
              expression: "returnCurrentProject.title"
            }
          }),
      _vm._v(" "),
      _c(
        "b-button",
        {
          directives: [
            {
              name: "clipboard",
              rawName: "v-clipboard",
              value: _vm.returnCurrentProject.project_id.toString(),
              expression: "returnCurrentProject.project_id.toString()"
            }
          ],
          attrs: { variant: "light", size: "sm" },
          on: {
            click: function($event) {
              return _vm.doToast(
                "success",
                "You can now let you teammates join the projects.",
                "Copied Project ID"
              )
            }
          }
        },
        [_vm._v("\n    Copy Project ID\n    ")]
      ),
      _vm._v(" "),
      _c("AddTodo"),
      _vm._v(" "),
      _c("Todos")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AddTodo.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/AddTodo.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddTodo_vue_vue_type_template_id_502faa6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTodo.vue?vue&type=template&id=502faa6c& */ "./resources/js/components/AddTodo.vue?vue&type=template&id=502faa6c&");
/* harmony import */ var _AddTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTodo.vue?vue&type=script&lang=js& */ "./resources/js/components/AddTodo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddTodo_vue_vue_type_template_id_502faa6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddTodo_vue_vue_type_template_id_502faa6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddTodo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddTodo.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/AddTodo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddTodo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddTodo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddTodo.vue?vue&type=template&id=502faa6c&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AddTodo.vue?vue&type=template&id=502faa6c& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodo_vue_vue_type_template_id_502faa6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddTodo.vue?vue&type=template&id=502faa6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddTodo.vue?vue&type=template&id=502faa6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodo_vue_vue_type_template_id_502faa6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodo_vue_vue_type_template_id_502faa6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Todos.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Todos.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todos_vue_vue_type_template_id_79d0db12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos.vue?vue&type=template&id=79d0db12&scoped=true& */ "./resources/js/components/Todos.vue?vue&type=template&id=79d0db12&scoped=true&");
/* harmony import */ var _Todos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos.vue?vue&type=script&lang=js& */ "./resources/js/components/Todos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Todos_vue_vue_type_style_index_0_id_79d0db12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css& */ "./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Todos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Todos_vue_vue_type_template_id_79d0db12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Todos_vue_vue_type_template_id_79d0db12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79d0db12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Todos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Todos.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Todos.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Todos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Todos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_style_index_0_id_79d0db12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Todos.vue?vue&type=style&index=0&id=79d0db12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_style_index_0_id_79d0db12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_style_index_0_id_79d0db12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_style_index_0_id_79d0db12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_style_index_0_id_79d0db12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_style_index_0_id_79d0db12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Todos.vue?vue&type=template&id=79d0db12&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Todos.vue?vue&type=template&id=79d0db12&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_template_id_79d0db12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Todos.vue?vue&type=template&id=79d0db12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Todos.vue?vue&type=template&id=79d0db12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_template_id_79d0db12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todos_vue_vue_type_template_id_79d0db12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/TodoList.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/TodoList.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoList_vue_vue_type_template_id_612c5c23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList.vue?vue&type=template&id=612c5c23&scoped=true& */ "./resources/js/views/TodoList.vue?vue&type=template&id=612c5c23&scoped=true&");
/* harmony import */ var _TodoList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.vue?vue&type=script&lang=js& */ "./resources/js/views/TodoList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TodoList_vue_vue_type_style_index_0_id_612c5c23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css& */ "./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TodoList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoList_vue_vue_type_template_id_612c5c23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoList_vue_vue_type_template_id_612c5c23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "612c5c23",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TodoList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/TodoList.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/TodoList.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TodoList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TodoList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_612c5c23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TodoList.vue?vue&type=style&index=0&id=612c5c23&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_612c5c23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_612c5c23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_612c5c23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_612c5c23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_612c5c23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/TodoList.vue?vue&type=template&id=612c5c23&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/TodoList.vue?vue&type=template&id=612c5c23&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_template_id_612c5c23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TodoList.vue?vue&type=template&id=612c5c23&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TodoList.vue?vue&type=template&id=612c5c23&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_template_id_612c5c23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_template_id_612c5c23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);