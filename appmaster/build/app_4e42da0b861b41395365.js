/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = window.ReactRouter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _redux = __webpack_require__(23);

function changer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '榜单 « 电影 « 豆瓣' };
  var action = arguments[1];

  switch (action.type) {
    case 'SETTITLE':
      return { title: action.title };
    default:
      return state;
  }
}

// 将 Redux state 转化成 组件的 props
function mapStateToProps(state) {
  return {
    value: state.title
  };
}

// 将 Redux actions 转化成 组件的 props
function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(action) {
      return dispatch(action);
    }
  };
}

var store = (0, _redux.createStore)(changer);

exports.mapStateToProps = mapStateToProps;
exports.mapDispatchToProps = mapDispatchToProps;
exports.store = store;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = window.ReactRedux;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDOM = __webpack_require__(4);

var Cart = function (_React$Component) {
	_inherits(Cart, _React$Component);

	function Cart(props) {
		_classCallCheck(this, Cart);

		var _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));

		_this.state = {
			title: "购物车"
		};
		return _this;
	}

	_createClass(Cart, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "hh" },
					"\u8D2D\u7269\u8F66"
				)
			);
		}
	}]);

	return Cart;
}(_react2.default.Component);

exports.default = Cart;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "cart.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDOM = __webpack_require__(4);

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = {
			title: "首页"
		};
		return _this;
	}

	_createClass(Home, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "home" },
				_react2.default.createElement("div", { className: "swiper" }),
				_react2.default.createElement(
					"ul",
					null,
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"div",
							{ className: "homelist" },
							"home 1"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"div",
							{ className: "homelist" },
							"home 2"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"div",
							{ className: "homelist" },
							"home 3"
						)
					)
				)
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDOM = __webpack_require__(4);

var Kind = function (_React$Component) {
	_inherits(Kind, _React$Component);

	function Kind(props) {
		_classCallCheck(this, Kind);

		var _this = _possibleConstructorReturn(this, (Kind.__proto__ || Object.getPrototypeOf(Kind)).call(this, props));

		_this.state = {
			title: "分类"
		};
		return _this;
	}

	_createClass(Kind, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "hh" },
					"\u5206\u7C7B"
				)
			);
		}
	}]);

	return Kind;
}(_react2.default.Component);

module.exports = Kind;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "search.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDOM = __webpack_require__(4);

var Service = function (_React$Component) {
	_inherits(Service, _React$Component);

	function Service(props) {
		_classCallCheck(this, Service);

		var _this = _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).call(this, props));

		_this.state = {
			title: "客服"
		};
		return _this;
	}

	_createClass(Service, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "hh" },
					"\u5BA2\u670D"
				)
			);
		}
	}]);

	return Service;
}(_react2.default.Component);

exports.default = Service;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "service.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _address = __webpack_require__(11);

var _address2 = _interopRequireDefault(_address);

var _help = __webpack_require__(13);

var _help2 = _interopRequireDefault(_help);

var _historyorder = __webpack_require__(14);

var _historyorder2 = _interopRequireDefault(_historyorder);

var _myaccount = __webpack_require__(16);

var _myaccount2 = _interopRequireDefault(_myaccount);

var _myorder = __webpack_require__(17);

var _myorder2 = _interopRequireDefault(_myorder);

var _collect = __webpack_require__(12);

var _collect2 = _interopRequireDefault(_collect);

var _login = __webpack_require__(15);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(19);

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDOM = __webpack_require__(4);

var User = function (_React$Component) {
	_inherits(User, _React$Component);

	function User(props) {
		_classCallCheck(this, User);

		var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

		_this.state = {
			arr: []
		};
		return _this;
	}

	_createClass(User, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "user-content" },
				_react2.default.createElement(
					"div",
					{ className: "user-banner" },
					this.state.arr
				),
				_react2.default.createElement(
					"div",
					{ className: "user-list" },
					_react2.default.createElement(
						"ul",
						null,
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/myorder" },
								_react2.default.createElement("img", { src: "/img/myOrder.png" }),
								"\u6211\u7684\u8BA2\u5355",
								_react2.default.createElement(
									"span",
									{ className: "yo-ico" },
									"\uE608"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/history" },
								_react2.default.createElement("img", { src: "/img/myHistoryOrder.png" }),
								"\u5386\u53F2\u8BA2\u5355",
								_react2.default.createElement(
									"span",
									{ className: "yo-ico" },
									"\uE608"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/collect" },
								_react2.default.createElement("img", { src: "/img/myConcern.png" }),
								"\u6211\u7684\u6536\u85CF",
								_react2.default.createElement(
									"span",
									{ className: "yo-ico" },
									"\uE608"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/address" },
								_react2.default.createElement("img", { src: "/img/myAddress.png" }),
								"\u6211\u7684\u5730\u5740",
								_react2.default.createElement(
									"span",
									{ className: "yo-ico" },
									"\uE608"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/account" },
								_react2.default.createElement("img", { src: "/img/myAccount.png" }),
								"\u6211\u7684\u8D26\u6237",
								_react2.default.createElement(
									"span",
									{ className: "yo-ico" },
									"\uE608"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/help" },
								_react2.default.createElement("img", { src: "/img/helpCenter.png" }),
								"\u5E2E\u52A9\u4E2D\u5FC3",
								_react2.default.createElement(
									"span",
									{ className: "yo-ico" },
									"\uE608"
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _arr = [];
			if (localStorage.getItem("userID")) {
				var username = localStorage.getItem("userID");
				_arr.push(_react2.default.createElement(
					"div",
					{ className: "user-box" },
					_react2.default.createElement(
						"p",
						null,
						username
					)
				));
			} else {
				_arr.push(_react2.default.createElement(
					"div",
					{ className: "user-box" },
					_react2.default.createElement(
						"p",
						null,
						"\u6B22\u8FCE\u6765\u52306688"
					),
					_react2.default.createElement(
						"div",
						{ className: "box" },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/login" },
							"\u767B\u9646 / \u6CE8\u518C"
						)
					)
				));
			}
			this.setState({
				arr: _arr
			});
		}
	}]);

	return User;
}(_react2.default.Component);

exports.default = User;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "user.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _newaddress = __webpack_require__(18);

var _newaddress2 = _interopRequireDefault(_newaddress);

var _reactRedux = __webpack_require__(3);

var _reactRouter = __webpack_require__(1);

var _store = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Address = function (_React$Component) {
	_inherits(Address, _React$Component);

	function Address(props) {
		_classCallCheck(this, Address);

		var _this = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, props));

		_this.state = {
			title: "新建地址"
		};
		return _this;
	}

	_createClass(Address, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "main" },
				_react2.default.createElement(
					"header",
					{ className: "yo-header yo-header-c" },
					_react2.default.createElement(
						"p",
						{ className: "title" },
						this.props.value
					),
					_react2.default.createElement(
						"span",
						{ className: "regret yo-ico", onClick: this.back },
						"\uE639"
					),
					_react2.default.createElement(
						"span",
						{ className: "affirm" },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/newaddress" },
							"\u65B0\u5EFA"
						)
					)
				),
				_react2.default.createElement("section", null)
			);
		}
	}, {
		key: "back",
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var title = '我的地址';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Address;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Address);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "address.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collect = function (_React$Component) {
	_inherits(Collect, _React$Component);

	function Collect(props) {
		_classCallCheck(this, Collect);

		var _this = _possibleConstructorReturn(this, (Collect.__proto__ || Object.getPrototypeOf(Collect)).call(this, props));

		_this.state = {
			title: "购物车"
		};
		return _this;
	}

	_createClass(Collect, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'span',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					)
				),
				_react2.default.createElement('section', null)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '我的收藏';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Collect;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Collect);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "collect.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Help = function (_React$Component) {
	_inherits(Help, _React$Component);

	function Help(props) {
		_classCallCheck(this, Help);

		var _this = _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).call(this, props));

		_this.state = {
			title: "帮助中心"
		};
		return _this;
	}

	_createClass(Help, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'span',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					)
				),
				_react2.default.createElement(
					'section',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'user-help' },
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u6709\u8D27\u5417\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u6211\u4EEC\u5C3D\u529B\u4FDD\u8BC1\u4E0A\u67B6\u5546\u54C1\u7684\u4F9B\u5E94\u3002\u4F46\u56E0\u4E3A\u4E00\u4E9B\u519C\u4EA7\u54C1\u548C\u624B\u5DE5\u827A\u54C1\u5B63\u8282\u6027\u8F83\u5F3A\u3001\u4F9B\u5E94\u94FE\u8F83\u957F\u3001\u50A8\u5B58\u4E2D\u96BE\u514D\u635F\u8017\uFF0C\u5076\u5C14\u4F1A\u51FA\u73B0\u8D85\u8FC7\u9884\u8BA1\u7684\u7F3A\u8D27\u3001\u65AD\u8D27\u73B0\u8C61\u3002\u78B0\u5230\u8FD9\u79CD\u5076\u7136\u60C5\u51B5\uFF0C\u6211\u4EEC\u4F1A\u57287\u5929\u5185\u901A\u77E5\u60A8\u3002\u5BF9\u4E8E\u6682\u65F6\u7F3A\u8D27\u4EA7\u54C1\uFF0C\u6211\u4EEC\u4F1A\u5F81\u6C42\u60A8\u7684\u610F\u89C1\u662F\u5426\u7B49\u5F85\u5230\u8D27\u3002\u5BF9\u4E8E\u5B63\u8282\u6027\u65AD\u8D27\u4EA7\u54C1\uFF0C\u6211\u4EEC\u4F1A\u53D6\u6D88\u8BA2\u5355\u5E76\u5C06\u8D27\u6B3E\u9000\u56DE\u539F\u8D26\u53F7\uFF0C\u6B22\u8FCE\u60A8\u4E0B\u4E2A\u5B63\u8282\u518D\u6765\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u6709\u8D27\u5417\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u6211\u4EEC\u5C3D\u529B\u4FDD\u8BC1\u4E0A\u67B6\u5546\u54C1\u7684\u4F9B\u5E94\u3002\u4F46\u56E0\u4E3A\u4E00\u4E9B\u519C\u4EA7\u54C1\u548C\u624B\u5DE5\u827A\u54C1\u5B63\u8282\u6027\u8F83\u5F3A\u3001\u4F9B\u5E94\u94FE\u8F83\u957F\u3001\u50A8\u5B58\u4E2D\u96BE\u514D\u635F\u8017\uFF0C\u5076\u5C14\u4F1A\u51FA\u73B0\u8D85\u8FC7\u9884\u8BA1\u7684\u7F3A\u8D27\u3001\u65AD\u8D27\u73B0\u8C61\u3002\u78B0\u5230\u8FD9\u79CD\u5076\u7136\u60C5\u51B5\uFF0C\u6211\u4EEC\u4F1A\u57287\u5929\u5185\u901A\u77E5\u60A8\u3002\u5BF9\u4E8E\u6682\u65F6\u7F3A\u8D27\u4EA7\u54C1\uFF0C\u6211\u4EEC\u4F1A\u5F81\u6C42\u60A8\u7684\u610F\u89C1\u662F\u5426\u7B49\u5F85\u5230\u8D27\u3002\u5BF9\u4E8E\u5B63\u8282\u6027\u65AD\u8D27\u4EA7\u54C1\uFF0C\u6211\u4EEC\u4F1A\u53D6\u6D88\u8BA2\u5355\u5E76\u5C06\u8D27\u6B3E\u9000\u56DE\u539F\u8D26\u53F7\uFF0C\u6B22\u8FCE\u60A8\u4E0B\u4E2A\u5B63\u8282\u518D\u6765\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u6709\u8D27\u5417\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u6211\u4EEC\u5C3D\u529B\u4FDD\u8BC1\u4E0A\u67B6\u5546\u54C1\u7684\u4F9B\u5E94\u3002\u4F46\u56E0\u4E3A\u4E00\u4E9B\u519C\u4EA7\u54C1\u548C\u624B\u5DE5\u827A\u54C1\u5B63\u8282\u6027\u8F83\u5F3A\u3001\u4F9B\u5E94\u94FE\u8F83\u957F\u3001\u50A8\u5B58\u4E2D\u96BE\u514D\u635F\u8017\uFF0C\u5076\u5C14\u4F1A\u51FA\u73B0\u8D85\u8FC7\u9884\u8BA1\u7684\u7F3A\u8D27\u3001\u65AD\u8D27\u73B0\u8C61\u3002\u78B0\u5230\u8FD9\u79CD\u5076\u7136\u60C5\u51B5\uFF0C\u6211\u4EEC\u4F1A\u57287\u5929\u5185\u901A\u77E5\u60A8\u3002\u5BF9\u4E8E\u6682\u65F6\u7F3A\u8D27\u4EA7\u54C1\uFF0C\u6211\u4EEC\u4F1A\u5F81\u6C42\u60A8\u7684\u610F\u89C1\u662F\u5426\u7B49\u5F85\u5230\u8D27\u3002\u5BF9\u4E8E\u5B63\u8282\u6027\u65AD\u8D27\u4EA7\u54C1\uFF0C\u6211\u4EEC\u4F1A\u53D6\u6D88\u8BA2\u5355\u5E76\u5C06\u8D27\u6B3E\u9000\u56DE\u539F\u8D26\u53F7\uFF0C\u6B22\u8FCE\u60A8\u4E0B\u4E2A\u5B63\u8282\u518D\u6765\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u6709\u8D27\u5417\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u6211\u4EEC\u5C3D\u529B\u4FDD\u8BC1\u4E0A\u67B6\u5546\u54C1\u7684\u4F9B\u5E94\u3002\u4F46\u56E0\u4E3A\u4E00\u4E9B\u519C\u4EA7\u54C1\u548C\u624B\u5DE5\u827A\u54C1\u5B63\u8282\u6027\u8F83\u5F3A\u3001\u4F9B\u5E94\u94FE\u8F83\u957F\u3001\u50A8\u5B58\u4E2D\u96BE\u514D\u635F\u8017\uFF0C\u5076\u5C14\u4F1A\u51FA\u73B0\u8D85\u8FC7\u9884\u8BA1\u7684\u7F3A\u8D27\u3001\u65AD\u8D27\u73B0\u8C61\u3002\u78B0\u5230\u8FD9\u79CD\u5076\u7136\u60C5\u51B5\uFF0C\u6211\u4EEC\u4F1A\u57287\u5929\u5185\u901A\u77E5\u60A8\u3002\u5BF9\u4E8E\u6682\u65F6\u7F3A\u8D27\u4EA7\u54C1\uFF0C\u6211\u4EEC\u4F1A\u5F81\u6C42\u60A8\u7684\u610F\u89C1\u662F\u5426\u7B49\u5F85\u5230\u8D27\u3002\u5BF9\u4E8E\u5B63\u8282\u6027\u65AD\u8D27\u4EA7\u54C1\uFF0C\u6211\u4EEC\u4F1A\u53D6\u6D88\u8BA2\u5355\u5E76\u5C06\u8D27\u6B3E\u9000\u56DE\u539F\u8D26\u53F7\uFF0C\u6B22\u8FCE\u60A8\u4E0B\u4E2A\u5B63\u8282\u518D\u6765\u3002'
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '帮助中心';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Help;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Help);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "help.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Historyorder = function (_React$Component) {
	_inherits(Historyorder, _React$Component);

	function Historyorder(props) {
		_classCallCheck(this, Historyorder);

		var _this = _possibleConstructorReturn(this, (Historyorder.__proto__ || Object.getPrototypeOf(Historyorder)).call(this, props));

		_this.state = {
			title: "购物车"
		};
		return _this;
	}

	_createClass(Historyorder, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'span',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					)
				),
				_react2.default.createElement('section', null)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '历史订单';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Historyorder;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Historyorder);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "historyorder.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

		_this.login = _this.login.bind(_this);
		return _this;
	}

	_createClass(Login, [{
		key: 'login',
		value: function login() {
			var userID = this.refs.username.value;
			var password = this.refs.password.value;
			if (userID == '' || password == '') {
				alert("用户名或密码错误");
			}
			var url = 'http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID=' + userID + '&password=' + password;
			fetch(url).then(function (response) {
				return response.json();
			}).then(function (res) {
				if (res instanceof Object) {
					window.location.href = '#/user';
					localStorage.setItem("userID", userID);
				} else {
					alert("用户名或密码错误");
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'a',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					)
				),
				_react2.default.createElement(
					'section',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'user-login' },
						_react2.default.createElement(
							'div',
							{ className: 'login-username' },
							_react2.default.createElement(
								'span',
								{ className: 'user yo-ico' },
								'\uE61B'
							),
							_react2.default.createElement('input', { ref: 'username', type: 'text', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7/\u90AE\u7BB1' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'login-password' },
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE615'
							),
							_react2.default.createElement('input', { ref: 'password', type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'tab' },
							_react2.default.createElement(
								'span',
								{ className: 'toRegister' },
								_react2.default.createElement(
									'a',
									{ href: '#/register' },
									'\u7ACB\u5373\u6CE8\u518C'
								)
							),
							_react2.default.createElement(
								'button',
								{ onClick: this.login },
								'\u767B\u9646'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#/forget' },
								'\u5FD8\u8BB0\u5BC6\u7801'
							)
						),
						_react2.default.createElement(
							'h5',
							null,
							'\u7B2C\u4E09\u65B9\u767B\u9646\u8D26\u53F7\u5FEB\u901F\u767B\u9646'
						),
						_react2.default.createElement(
							'div',
							{ className: 'weibo' },
							_react2.default.createElement(
								'a',
								{ href: '#' },
								_react2.default.createElement('img', { src: 'sina_1.jpg' })
							)
						)
					)
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '登陆';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Login);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_React$Component) {
	_inherits(Account, _React$Component);

	function Account(props) {
		_classCallCheck(this, Account);

		var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

		_this.state = {
			title: "购物车"
		};
		return _this;
	}

	_createClass(Account, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'span',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					)
				),
				_react2.default.createElement('section', null)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '我的账户';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Account;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Account);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "myaccount.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Myorder = function (_React$Component) {
	_inherits(Myorder, _React$Component);

	function Myorder(props) {
		_classCallCheck(this, Myorder);

		var _this = _possibleConstructorReturn(this, (Myorder.__proto__ || Object.getPrototypeOf(Myorder)).call(this, props));

		_this.state = {
			title: "我的订单"
		};
		return _this;
	}

	_createClass(Myorder, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'a',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					)
				),
				_react2.default.createElement(
					'section',
					null,
					'123'
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '我的订单';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Myorder;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Myorder);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "myorder.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newaddress = function (_React$Component) {
	_inherits(Newaddress, _React$Component);

	function Newaddress(props) {
		_classCallCheck(this, Newaddress);

		var _this = _possibleConstructorReturn(this, (Newaddress.__proto__ || Object.getPrototypeOf(Newaddress)).call(this, props));

		_this.state = {
			title: "购物车"
		};
		return _this;
	}

	_createClass(Newaddress, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'a',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					),
					_react2.default.createElement(
						'span',
						{ className: 'affirm' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/address' },
							'\u4FDD\u5B58'
						)
					)
				),
				_react2.default.createElement(
					'section',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'newaddress' },
						_react2.default.createElement(
							'div',
							{ className: 'line' },
							_react2.default.createElement(
								'span',
								null,
								'\u6536\u8D27\u4EBA\u59D3\u540D:'
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement('input', { type: 'text', placeholder: '\u8F93\u5165\u6536\u8D27\u4EBA' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'line' },
							_react2.default.createElement(
								'span',
								null,
								'\u6240\u5728\u5730\u533A:'
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement('input', { type: 'text', placeholder: '\u6240\u5728\u5730\u533A' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'line' },
							_react2.default.createElement(
								'span',
								null,
								'\u624B\u673A\u53F7\u7801:'
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement('input', { type: 'text', placeholder: '\u8F93\u5165\u624B\u673A\u53F7' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'line' },
							_react2.default.createElement(
								'span',
								null,
								'\u90AE\u653F\u7F16\u7801:'
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u90AE\u653F\u7F16\u7801' })
							)
						)
					)
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '新建地址';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Newaddress;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Newaddress);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "newaddress.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
	_inherits(Register, _React$Component);

	function Register(props) {
		_classCallCheck(this, Register);

		var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

		_this.state = {
			title: "购物车"
		};
		return _this;
	}

	_createClass(Register, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'a',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					)
				),
				_react2.default.createElement(
					'section',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'user-register' },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE61B'
							),
							_react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' }),
							_react2.default.createElement(
								'button',
								null,
								'\u83B7\u53D6\u9A8C\u8BC1\u7801'
							)
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE621'
							),
							_react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u60A8\u6536\u5230\u7684\u9A8C\u8BC1\u7801' })
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE615'
							),
							_react2.default.createElement('input', { type: 'password', placeholder: '\u8BF7\u8BBE\u7F6E\u5BC6\u7801' })
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE615'
							),
							_react2.default.createElement('input', { type: 'password', placeholder: '\u91CD\u590D\u5BC6\u7801' })
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement('input', { type: 'text', placeholder: '\u5982\u6709\u793C\u5238\u8BF7\u5728\u6B64\u8F93\u5165' })
						),
						_react2.default.createElement(
							'p',
							null,
							'\u4EE5\u6D3B\u52A8\u5956\u52B1\u7B49\u65B9\u5F0F\u83B7\u5F97\u7684\u7535\u5B50\u793C\u5238\u7684\u4EE3\u7801'
						),
						_react2.default.createElement(
							'p',
							{ className: 'tip' },
							'\u5982\u679C\u5728120\u79D2\u5185\u672A\u80FD\u6536\u5230\u7CFB\u7EDF\u53D1\u9001\u7684\u77ED\u4FE1,\u8BF7\u7EE7\u7EED\u70B9\u51FB\u83B7\u53D6\u9A8C\u8BC1\u7801'
						),
						_react2.default.createElement(
							'button',
							null,
							'\u6CE8\u518C'
						),
						_react2.default.createElement(
							'h4',
							null,
							_react2.default.createElement(
								'span',
								null,
								'\u5DF2\u9605\u8BFB\u5E76\u540C\u610F'
							),
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'6688\u4EA4\u6613\u6761\u6B3E'
							)
						)
					)
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '注册';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Register;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Register);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "register.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _home = __webpack_require__(7);

var _home2 = _interopRequireDefault(_home);

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

var _cart = __webpack_require__(6);

var _cart2 = _interopRequireDefault(_cart);

var _search = __webpack_require__(8);

var _search2 = _interopRequireDefault(_search);

var _service = __webpack_require__(9);

var _service2 = _interopRequireDefault(_service);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//class Index extends React.Component({})
var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

		_this.state = {
			title: '首页'
		};
		return _this;
	}

	_createClass(Footer, [{
		key: "addtitle",
		value: function addtitle(type) {
			this.setState({
				title: type
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "main" },
				_react2.default.createElement(
					"header",
					null,
					this.state.title
				),
				_react2.default.createElement(
					"section",
					null,
					this.props.children
				),
				_react2.default.createElement(
					"footer",
					null,
					_react2.default.createElement(
						"ul",
						null,
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/home", title: "\u9996\u9875", onClick: this.addtitle.bind(this, "首页"), activeClassName: "active" },
								_react2.default.createElement(
									"i",
									{ className: "yo-ico" },
									"\uE611"
								),
								_react2.default.createElement(
									"span",
									null,
									"\u9996\u9875"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/search", title: "", onClick: this.addtitle.bind(this, "搜索"), activeClassName: "active" },
								_react2.default.createElement(
									"i",
									{ className: "yo-ico" },
									"\uE502"
								),
								_react2.default.createElement(
									"span",
									null,
									"\u5BFC\u822A"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/user", title: "\u7528\u6237\u4E2D\u5FC3", onClick: this.addtitle.bind(this, "我的"), activeClassName: "active" },
								_react2.default.createElement(
									"i",
									{ className: "yo-ico" },
									"\uE653"
								),
								_react2.default.createElement(
									"span",
									null,
									"\u6211\u7684"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/cart", title: "\u8D2D\u7269\u8F66", onClick: this.addtitle.bind(this, "购物车"), activeClassName: "active" },
								_react2.default.createElement(
									"i",
									{ className: "yo-ico" },
									"\uE66A"
								),
								_react2.default.createElement(
									"span",
									null,
									"\u8D2D\u7269\u8F66"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/service", title: "\u5BA2\u670D", onClick: this.addtitle.bind(this, "客服"), activeClassName: "active" },
								_react2.default.createElement(
									"i",
									{ className: "yo-ico" },
									"\uE76A"
								),
								_react2.default.createElement(
									"span",
									null,
									"\u5BA2\u670D"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Footer;
}(_react2.default.Component);

exports.default = Footer;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Forget = function (_React$Component) {
	_inherits(Forget, _React$Component);

	function Forget(props) {
		_classCallCheck(this, Forget);

		var _this = _possibleConstructorReturn(this, (Forget.__proto__ || Object.getPrototypeOf(Forget)).call(this, props));

		_this.state = {
			title: "购物车"
		};
		return _this;
	}

	_createClass(Forget, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'header',
					{ className: 'yo-header yo-header-c' },
					_react2.default.createElement(
						'p',
						{ className: 'title' },
						this.props.value
					),
					_react2.default.createElement(
						'a',
						{ className: 'regret yo-ico', onClick: this.back },
						'\uE639'
					)
				),
				_react2.default.createElement(
					'section',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'user-register user-forget' },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE61B'
							),
							_react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' }),
							_react2.default.createElement(
								'button',
								null,
								'\u83B7\u53D6\u9A8C\u8BC1\u7801'
							)
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE621'
							),
							_react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u60A8\u6536\u5230\u7684\u9A8C\u8BC1\u7801' })
						),
						_react2.default.createElement('h2', { className: 'blank' }),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE615'
							),
							_react2.default.createElement('input', { type: 'password', placeholder: '\u8BF7\u8BBE\u7F6E\u5BC6\u7801' })
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE615'
							),
							_react2.default.createElement('input', { type: 'password', placeholder: '\u91CD\u590D\u5BC6\u7801' })
						),
						_react2.default.createElement(
							'p',
							{ className: 'tip' },
							'\u5982\u679C\u5728120\u79D2\u5185\u672A\u80FD\u6536\u5230\u7CFB\u7EDF\u53D1\u9001\u7684\u77ED\u4FE1,\u8BF7\u7EE7\u7EED\u70B9\u51FB\u83B7\u53D6\u9A8C\u8BC1\u7801'
						),
						_react2.default.createElement(
							'button',
							null,
							'\u6CE8\u518C'
						)
					)
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '找回密码';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Forget;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Forget);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "forget.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

var _home = __webpack_require__(7);

var _home2 = _interopRequireDefault(_home);

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

var _cart = __webpack_require__(6);

var _cart2 = _interopRequireDefault(_cart);

var _search = __webpack_require__(8);

var _search2 = _interopRequireDefault(_search);

var _service = __webpack_require__(9);

var _service2 = _interopRequireDefault(_service);

var _address = __webpack_require__(11);

var _address2 = _interopRequireDefault(_address);

var _help = __webpack_require__(13);

var _help2 = _interopRequireDefault(_help);

var _historyorder = __webpack_require__(14);

var _historyorder2 = _interopRequireDefault(_historyorder);

var _myaccount = __webpack_require__(16);

var _myaccount2 = _interopRequireDefault(_myaccount);

var _myorder = __webpack_require__(17);

var _myorder2 = _interopRequireDefault(_myorder);

var _collect = __webpack_require__(12);

var _collect2 = _interopRequireDefault(_collect);

var _login = __webpack_require__(15);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(19);

var _register2 = _interopRequireDefault(_register);

var _newaddress = __webpack_require__(18);

var _newaddress2 = _interopRequireDefault(_newaddress);

var _forget = __webpack_require__(21);

var _forget2 = _interopRequireDefault(_forget);

var _store = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _index = __webpack_require__(20);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(5);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store.store },
	_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.hashHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: "/", component: _index2.default },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "home", component: _home2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "cart", component: _cart2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "search", component: _search2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "user", component: _user2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "service", component: _service2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: "/myorder", component: _myorder2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/collect", component: _collect2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/account", component: _myaccount2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/history", component: _historyorder2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/help", component: _help2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/address", component: _address2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/login", component: _login2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/register", component: _register2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/newaddress", component: _newaddress2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/forget", component: _forget2.default })
	)
), document.getElementById("root"));

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace1\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = window.Redux;

/***/ })
/******/ ]);