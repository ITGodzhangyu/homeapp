<<<<<<< HEAD
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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
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

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _redux = __webpack_require__(78);

function changer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '榜单 « 电影 « 豆瓣', com: [] };
  var action = arguments[1];

  switch (action.type) {
    case 'SETTITLE':
      return { title: action.title };
    case 'SETCOM':
      return { com: action.com };
    default:
      return state;
  }
}

// 将 Redux state 转化成 组件的 props
function mapStateToProps(state) {
  return {
    value: state.title,
    key1: state.com
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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

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

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component Toast
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 面包屑提示组件，页面居中显示一条提示信息。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 是一个对象，包含show/hide函数，支持简单的链式调用。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 通过调用show函数打开组件，默认显示2s。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 通过调用hide函数立刻关闭组件。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./toast.md}{instruUrl: toast.html?hideIcon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author qingguo.xu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var that = null;
var container = document.createElement('div'),
    defaultProps = {
    show: false
},
    propTypes = {
    /**
     * @property show
     * @description 是否显示，默认false
     * @type Boolean
     * @default false
     * @skip
     */
    show: _react.PropTypes.bool
};

document.body.appendChild(container);

var ToastReact = function (_Component) {
    _inherits(ToastReact, _Component);

    function ToastReact(props) {
        _classCallCheck(this, ToastReact);

        var _this = _possibleConstructorReturn(this, (ToastReact.__proto__ || Object.getPrototypeOf(ToastReact)).call(this, props));

        _this.state = {
            show: _this.props.show,
            content: '',
            autoHideTime: 2000
        };
        _this._timer = null;
        that = _this;
        return _this;
    }

    _createClass(ToastReact, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            var _this2 = this;

            this.setState({ show: nextState.show });
            if (!!this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }

            this._timer = setTimeout(function () {
                return _this2.setState({ show: false });
            }, nextState.autoHideTime);
            return true;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this._timer);
            document.body.removeChild(container);
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                show = _state.show,
                content = _state.content;

            return _react2.default.createElement(
                'div',
                {
                    className: 'yo-toast',
                    style: {
                        display: show ? null : 'none'
                    }
                },
                content
            );
        }
    }]);

    return ToastReact;
}(_react.Component);

ToastReact.propTypes = propTypes;
ToastReact.defaultProps = defaultProps;

_reactDom2.default.render(_react2.default.createElement(ToastReact, null), container);

/**
 * Toast显隐函数
 * @returns {Object}
 */
exports.default = {
    /**
     * @method show
     * @type Function
     * @description 打开组件，显示传入的内容
     * @param {String} content 组件显示的内容
     * @param {Number} [autoHideTime] 内容显示的持续时间，默认2000ms
     */
    show: function show() {
        var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'no content';
        var autoHideTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

        that.setState({
            content: content,
            autoHideTime: autoHideTime,
            show: true
        });
        return this;
    },

    /**
     * @method hide
     * @type Function
     * @description 关闭正在显示的组件
     */
    hide: function hide() {
        that.setState({ show: false });
        return this;
    }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Userheader = function (_React$Component) {
	_inherits(Userheader, _React$Component);

	function Userheader(props) {
		_classCallCheck(this, Userheader);

		var _this = _possibleConstructorReturn(this, (Userheader.__proto__ || Object.getPrototypeOf(Userheader)).call(this, props));

		_this.state = {
			title: "我的订单"
		};
		return _this;
	}

	_createClass(Userheader, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "yo-header yo-header-c" },
				_react2.default.createElement(
					"p",
					{ className: "title" },
					"\u6211\u7684"
				),
				_react2.default.createElement(
					"span",
					{ className: "affirm" },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: "/setup", className: "yo-ico" },
						"\uE62A"
					)
				)
			);
		}
	}]);

	return Userheader;
}(_react2.default.Component);

exports.default = Userheader;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "user-head.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(29);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getArrayByLength = getArrayByLength;
exports.shallowEqual = shallowEqual;
exports.getElementOffsetY = getElementOffsetY;
exports.inheritProps = inheritProps;
function getArrayByLength(length) {
    var ret = [];
    for (var i = 0; i < length; i++) {
        ret[i] = null;
    }
    return ret;
}

function is(x, y) {
    var ret = void 0;
    if (x === y) {
        ret = x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        // return x !== x && y !== y;
        ret = isNaN(x) && isNaN(y);
    }

    return ret;
}

function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }

    return true;
}

function getElementOffsetY(ele, parent) {
    var y = 0;
    while (ele !== parent && ele !== null) {
        y += ele.offsetTop;
        ele = ele.offsetParent;
    }
    return y;
}

var DELAY_TIME_FOR_INFINITE_WITHOUT_HEIGHT = exports.DELAY_TIME_FOR_INFINITE_WITHOUT_HEIGHT = 250;

function inheritProps(props, attrs) {
    return attrs.reduce(function (ret, attr) {
        ret[attr] = props[attr];
        return ret;
    }, {});
}

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "util.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(57);

var _utils2 = _interopRequireDefault(_utils);

var _util = __webpack_require__(11);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

var _lazyimage = __webpack_require__(56);

var _lazyimage2 = _interopRequireDefault(_lazyimage);

var _sticky = __webpack_require__(58);

var _sticky2 = _interopRequireDefault(_sticky);

__webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 滚动组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component Scroller
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 滚动组件,用来提供滚动容器。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 提供了横向滚动和纵向滚动。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 提供了『下拉刷新』和『加载更多』功能。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 提供了 `transition` 和 `requestAnimationFrame` 两种实现滚动的方式。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 提供了 `transform` 和 `position:absolute` 两种实现位移的方式。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 确定高度：Scroller 必须有一个确定的高度才能正常工作，因为它实际上就是将一系列不确定高度的子组件装进一个确定高度的容器。实现确定高度的方式有很多种：flex、指定高度、position: absolute等等。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 内容容器：作为一个滚动组件，Scroller 会创建一个 div 作为滚动容器。如果 Scroller 的子元素只有一个，则会把这个子元素当做内容容器；否则，会创建一个 div 作为内容容器。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./scroller/basic.md}{instruUrl: scroller/base.html?hideIcon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./scroller/refresh.md}{instruUrl: scroller/refresh.html?hideIcon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./scroller/scrollevent.md}{instruUrl: scroller/scroll.html?hideIcon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// TODO: 干掉各种 magic number！！！


var REFRESHSTATUS = {
    PULL: 'pullrefresh_pull',
    RELEASE: 'pullrefresh_release',
    LOAD: 'pullrefresh_load',
    SUCCESS: 'pullrefresh_success',
    FAIL: 'pullrefresh_fail'
};
var LOADSTATUS = {
    PULL: 'loadmore_pull',
    RELEASE: 'loadmore_release',
    LOAD: 'loadmore_load',
    NOMORE: 'loadmore_nomore'
};

var _utils$getRAF = _utils2.default.getRAF(),
    rAF = _utils$getRAF.rAF,
    cancelrAF = _utils$getRAF.cancelrAF;

var defaultProps = {
    extraClass: '',
    containerExtraClass: '',
    containerExtraStyle: {},
    contentOffset: {
        x: 0,
        y: 0
    },
    disabled: false,
    scrollX: false,
    scrollY: true,
    freeScroll: false,
    directionLockThreshold: 5, // 锁定某一滚动方向的阀值
    momentum: true, // 惯性滚动
    bounce: true, // 弹性滚动
    bounceTime: 600, // 弹性滚动时间
    bounceEasing: _utils2.default.ease.circular, // 弹性滚动easing函数
    preventDefault: true, // 阻止默认事件
    preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, // 阻止默认事件的例外
    stopPropagation: false, // 阻止冒泡
    HWCompositing: true, // 是否开启硬件加速
    useTransition: true,
    useTransform: true,
    onScroll: null, // 滚动事件的回调
    usePullRefresh: false,
    pullRefreshHeight: 40,
    renderPullRefresh: null,
    onRefresh: null,
    useLoadMore: false,
    loadMoreHeight: 40,
    renderLoadMore: null,
    onLoad: null,
    autoRefresh: true,
    wrapper: null,
    enableLazyLoad: true,
    scrollWithouTouchStart: false,
    stickyOffset: 0
};

var propTypes = {
    /**
     * 组件额外class
     *
     * @property extraClass
     * @type String
     * @description 为组件根节点提供额外的class。
     * @default ''
     */
    extraClass: _react.PropTypes.string,
    /**
     * 内容容器额外class
     *
     * @property containerExtraClass
     * @type String
     * @description 为组件中的内容容器提供额外的class。
     * @default ''
     */
    containerExtraClass: _react.PropTypes.string,
    /**
     * 内容容器额外style
     *
     * @property containerExtraStyle
     * @type String
     * @description 为组件中的内容容器提供额外的style，主要用于横向滚动时，动态设置容器的宽度。
     * @default {}
     * @version 3.0.6
     */
    containerExtraStyle: _react.PropTypes.object,
    /**
     * 内容位移
     *
     * @property contentOffset
     * @type {x: Number, y: Mumber}
     * @description 组件中内容的初始位移，这个属性变化时，会重置内容的位移。
     * @default {x: 0, y: 0}
     */
    contentOffset: _react.PropTypes.shape({
        x: _react.PropTypes.number,
        y: _react.PropTypes.number
    }),
    /**
     * @property stickyOffset
     * @type Number
     * @description 吸顶容器偏移，如果你希望吸顶容器不位于top:0的位置，可以修改这个属性。
     * @default 0
     * @version 3.0.6
     */
    stickyOffset: _react.PropTypes.number,
    /**
     * 是否禁止滚动
     *
     * @property disabled
     * @type Bool
     * @description 是否禁止滚动，默认允许滚动。
     * @default false
     */
    disabled: _react.PropTypes.bool,
    /**
     * 横向滚动
     *
     * @property scrollX
     * @type Bool
     * @description 是否开启横向滚动，默认关闭。
     * @default false
     */
    scrollX: _react.PropTypes.bool,
    /**
     * 纵向滚动
     *
     * @property scrollY
     * @type Bool
     * @description 是否开启纵向滚动,默认开启。
     * @default true
     */
    scrollY: _react.PropTypes.bool,
    /**
     * 自由滚动
     *
     * @property freeScroll
     * @type Bool
     * @description 是否开启自由滚动。当设置为 `false` 时，只能响应某一个方向的滚动；当设置为 `true` 时，可以同时响应横向和纵向滚动（`scrollX` 和 `scrollY` 必须同时为 `true`）。
     * @default false
     * @skip
     */
    freeScroll: _react.PropTypes.bool,
    /**
     * 方向锁定阈值
     *
     * @property directionLockThreshold
     * @type Number
     * @description 只允许单向滚动的时候，会根据这个阀值来判定响应哪个方向上的位移：某一方向位移减去另一个方向位移超过阀值，就会判定为这个方向的滚动。
     * @default 5
     */
    directionLockThreshold: _react.PropTypes.number,
    /**
     * 惯性滚动
     *
     * @property momentum
     * @type Bool
     * @description 是否允许惯性滚动。当设置为 `true`，手指离开时，如果还有速度会继续滚动一段距离；当设置为 `false` ，手指离开时会立即停止滚动。
     * @default true
     */
    momentum: _react.PropTypes.bool,
    /**
     * 弹性滚动
     *
     * @property bounce
     * @type Bool
     * @description 当滚动超出内容范围时，是否可以继续滚动一截。
     * @default true
     */
    bounce: _react.PropTypes.bool,
    /**
     * 弹性滚动回弹时间
     *
     * @property bounceTime
     * @type Number
     * @description 当弹性滚动一截之后，回到滚动范围内位置的时间，单位为毫秒（ms）。
     * @default 600
     */
    bounceTime: _react.PropTypes.number,
    /**
     * 弹性滚动回弹动画
     *
     * @property bounceEasing
     * @type Object
     * @description 弹性回滚动画。
     *
     * Scroller 提供了五种默认的动画函数：`quadratic`, `circular`, `back`, `bounce`, `elastic`，可以通过 `Scroller.ease.xxx` 来使用。
     *
     * 用户也可以自定义动画对象，比如：
     *
     * ``
     * {
     *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
     *     fn: function (k) {
     *         return k * ( 2 - k );
     *     }
     * }
     * ``
     * @default Scroller.ease.circular
     */
    bounceEasing: _react.PropTypes.object,
    /**
     * transition开关
     *
     * @property useTransition
     * @type Bool
     * @description 如果设置为true,会使用transition来实现滚动效果;如果设置为false,会使用requestAnimationFrame来实现。
     * @default true
     */
    useTransition: _react.PropTypes.bool,
    /**
     * transform开关
     *
     * @property useTransform
     * @type Bool
     * @description 如果设置为true,会使用transform来实现位移;如果设置为false,会使用left和top来实现位移（position: absolute）。
     * @default true
     */
    useTransform: _react.PropTypes.bool,
    /**
     * 滚动事件回调
     *
     * @property onScroll
     * @type Function
     * @param {e} event 滚动事件的回调，结构为: {contentOffset: {x: x, y: y}}
     * @description (event) => void
     *
     * 滚动事件的回调。一旦设置了这个回调，为了能够监听滚动事件，会将useTransition属性强制设置为false，会由此带来一定的性能牺牲。
     */
    onScroll: _react.PropTypes.func,
    /**
     * 自动刷新高度
     *
     * @property autoRefresh
     * @type Bool
     * @description 默认为true,在componentDidUpdate的时候会自动刷新高度;如果设置为false,则在内容发生变化时，需要用户主动调用refresh方法来刷新高度。
     * @default true
     * @skip
     */
    autoRefresh: _react.PropTypes.bool,
    /**
     * 硬件加速
     *
     * @property HWCompositing
     * @type Bool
     * @description 是否开启硬件加速
     * @default true
     */
    HWCompositing: _react.PropTypes.bool,
    eventPassthrough: _react.PropTypes.bool,
    preventDefault: _react.PropTypes.bool,
    preventDefaultException: _react.PropTypes.object,
    stopPropagation: _react.PropTypes.bool,
    /**
     * 下拉刷新
     *
     * @property usePullRefresh
     * @type Bool
     * @description 是否开启下拉刷新功能
     * @default false
     * hasPullRefresh
     */
    usePullRefresh: _react.PropTypes.bool,
    /**
     * 下拉刷新事件回调
     *
     * @property onRefresh
     * @type Function
     * @param {e} event 结构为: ({contentOffset: {x: x, y: y}})
     * @description (event) => void
     *
     * 下拉刷新时开始刷新的回调。
     */
    onRefresh: _react.PropTypes.func,
    /**
     * 下拉刷新高度
     *
     * @property pullRefreshHeight
     * @type Number
     * @description 触发下拉刷新状态的高度（一般即为下拉刷新提示区域的高度）
     * @default 40
     * 可以考虑不要
     */
    pullRefreshHeight: _react.PropTypes.number,
    /**
     * 下拉刷新渲染函数
     *
     * @property renderPullRefresh
     * @type Function
     * @returns {JSX} 用来渲染 pullRefresh 的 JSX
     * @description () => JSX
     *
     * 自定义的下拉刷新渲染函数
     */
    renderPullRefresh: _react.PropTypes.func,
    /**
     * 加载更多
     *
     * @property useLoadMore
     * @type Bool
     * @description 是否开启加载更多功能.『加载更多』与『下拉刷新』略有不同，加载更多的提示区域是追加在内容区域的最后
     * @default false
     * hasLoadMore
     */
    useLoadMore: _react.PropTypes.bool,
    /**
     * 加载更多事件回调
     *
     * @property onLoad
     * @type Function
     * @param {e} event 结构为: ({contentOffset: {x: x, y: y}})
     * @description (event) => void
     *
     * 加载更多时开始加载的回调。
     */
    onLoad: _react.PropTypes.func,
    /**
     * 加载更多高度
     *
     * @property loadMoreHeight
     * @type Number
     * @description 触发加载更多状态的高度（一般即为加载更多提示区域的高度）
     * @default 40
     */
    loadMoreHeight: _react.PropTypes.number,
    /**
     * 加载更多渲染函数
     *
     * @property renderLoadMore
     * @type Function
     * @returns {JSX} 用来渲染 loadMore 的 JSX
     * @description () => JSX
     *
     * 自定义的加载更多渲染函数
     */
    renderLoadMore: _react.PropTypes.func,
    deceleration: _react.PropTypes.number,
    wrapper: _react.PropTypes.object,
    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),
    style: _react.PropTypes.object,
    /**
     * @skip
     * @property enableLazyLoad
     * @type Bool
     * @description 是否开启图片lazyload,默认为true
     */
    enableLazyLoad: _react.PropTypes.bool,
    /**
     * @property scrollWithoutTouchStart
     * @type Bool
     * @default false
     * @description ** 实验中的属性 **
     * 在默认情况下一次用户触发（非调用scrollTo方法）scroller的滚动需要由touchstart事件来启动，在某些情况下，例如scroller从disable状态切换到enable状态时，
     * 可能不能接收到这一瞬间的touchstart事件，这可能导致用户期待的滚动过程没有发生。
     * 开启这个属性为true以后将允许scroller用touchmove启动滚动过程，这可以解决上述场景的问题。
     * @version 3.0.2
     */
    scrollWithoutTouchStart: _react.PropTypes.bool
};

var Scroller = function (_Component) {
    _inherits(Scroller, _Component);

    function Scroller(props) {
        _classCallCheck(this, Scroller);

        var _this = _possibleConstructorReturn(this, (Scroller.__proto__ || Object.getPrototypeOf(Scroller)).call(this, props));

        _this.x = 0;
        _this.y = 0;
        _this.directionX = 0;
        _this.directionY = 0;
        _this._scrollerStyle = {};

        _this._resetProps(props, true);

        _this.childLazyImages = [];
        _this.stickyHeaders = [];
        _this.stickyIndex = null;
        _this.stickyOffset = null;
        _this.wrapperOffsetTop = null;
        return _this;
    }

    _createClass(Scroller, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return { scroller: this, isScroller: this.props.enableLazyLoad };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.wrapper = this.noWrapper ? this.wrapper : this.refs.wrapper;
            this.scroller = this.refs.scroller;

            // 重置 position 属性
            if (!this.useTransform) {
                if (!/relative|absolute/i.test(this._scrollerStyle)) {
                    this._scrollerStyle.position = 'relative';
                }
            }

            this.refresh();

            this._setRefreshStatus(REFRESHSTATUS.PULL);
            this._setLoadStatus(LOADSTATUS.PULL);
            this._refreshLoadMore();

            this._resetPosition();
            this.scrollTo(this.props.contentOffset.x, this.props.contentOffset.y);

            this._resize = function () {
                _this2.forceUpdate();
            };

            window.addEventListener('orientationchange', this._resize, false);
            window.addEventListener('resize', this._resize, false);

            this._tryLoadLazyImages();
            this._refreshSticky(true);

            if (this.stickyHeaders.length) {
                this.useTransition = false;
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this._resetProps(nextProps);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // 重置 contentOffset
            if (prevProps.contentOffset.x !== this.props.contentOffset.x || prevProps.contentOffset.y !== this.props.contentOffset.y) {
                this.scrollTo(this.props.contentOffset.x, this.props.contentOffset.y);
            }

            // 重置 position 属性
            if (!this.useTransform) {
                if (!/relative|absolute/i.test(this._scrollerStyle)) {
                    this._scrollerStyle.position = 'relative';
                    this._setStyle(this.scroller, this._scrollerStyle);
                }
            }

            // 重新获取容器和内容尺寸
            if (this.props.autoRefresh) {
                this.refresh();
            }

            // 重置 pullRefresh 和 loadMore
            if (prevState.usePullRefresh !== this.state.usePullRefresh) {
                this._setRefreshStatus(REFRESHSTATUS.PULL);
            }
            if (prevState.useLoadMore !== this.state.useLoadMore) {
                this._setLoadStatus(LOADSTATUS.PULL);
                this._refreshLoadMore();
            }

            if (this.stickyHeaders.length) {
                this.useTransition = false;
            }

            this._tryLoadLazyImages();
            this._refreshSticky(true);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('orientationchange', this._resize, false);
            window.removeEventListener('resize', this._resize, false);
        }
    }, {
        key: '_resetProps',
        value: function _resetProps(props, init) {
            this.state = this.state || {};

            // 重置 useTransition 和 useTransform
            this.translateZ = props.HWCompositing && _utils2.default.hasPerspective ? ' translateZ(0)' : '';
            this.useTransition = _utils2.default.hasTransition && props.useTransition;
            this.useTransform = _utils2.default.hasTransform && props.useTransform;

            if (props.onScroll) {
                this.useTransition = false;
            }

            // 重置 scrollX 和 scrollY
            this.eventPassthrough = props.eventPassthrough === true ? 'vertical' : props.eventPassthrough;
            this.preventDefault = !this.eventPassthrough && props.preventDefault;
            this.scrollY = this.eventPassthrough === 'vertical' ? false : props.scrollY;
            this.scrollX = this.eventPassthrough === 'horizontal' ? false : props.scrollX;
            this.verticalBounce = this.scrollY ? props.bounce : false;
            this.horizontalBounce = this.scrollX ? props.bounce : false;

            // 重置 下拉刷新 和 加载更多
            if (init) {
                this.state.usePullRefresh = this.scrollY && !this.scrollX && props.usePullRefresh;
                this.state.useLoadMore = this.scrollY && !this.scrollX && props.useLoadMore;
            } else {
                this.setState({
                    usePullRefresh: this.scrollY && !this.scrollX && props.usePullRefresh,
                    useLoadMore: this.scrollY && !this.scrollX && props.useLoadMore
                });
            }

            // 重置 wrapper（内容容器）
            this.noWrapper = !!props.wrapper && props.children && !props.children.length && !this.state.usePullRefresh && !this.state.useLoadMore;
            if (this.noWrapper) {
                this.wrapper = props.wrapper;
            }

            // 如果disable状态发生了变化，需要重置initiated
            if (this.disabled !== props.disabled) {
                this.initiated = 0;
            }
            // 重置 disabled
            this.disabled = props.disabled;
            this.freeScroll = props.freeScroll && !this.eventPassthrough;
            this.directionLockThreshold = this.eventPassthrough ? 0 : props.directionLockThreshold;
        }
    }, {
        key: '_handleTouchStart',
        value: function _handleTouchStart(e) {
            if (this.disabled || this.initiated && _utils2.default.eventType[e.type] !== this.initiated) {
                return;
            }

            if (this.preventDefault && !_utils2.default.isBadAndroid && !_utils2.default.preventDefaultException(e.target, this.props.preventDefaultException)) {
                e.preventDefault();
            }
            if (this.props.stopPropagation) {
                e.stopPropagation();
            }

            var point = e.touches ? e.touches[0] : e;

            this.initiated = _utils2.default.eventType[e.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;

            this.startTime = _utils2.default.getTime();

            this.stopAnimate();

            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = point.pageX;
            this.pointY = point.pageY;

            // this._execEvent('beforeScrollStart');
        }
    }, {
        key: '_handleTouchMove',
        value: function _handleTouchMove(e) {
            if (this.disabled) {
                return;
            }

            if (_utils2.default.eventType[e.type] !== this.initiated) {
                if (this.props.scrollWithoutTouchStart) {
                    this._handleTouchStart(e);
                } else {
                    return;
                }
            }

            if (this.preventDefault) {
                // increases performance on Android? TODO: check!
                e.preventDefault();
            }

            if (this.props.stopPropagation) {
                e.stopPropagation();
            }

            var point = e.touches ? e.touches[0] : e;
            var timestamp = _utils2.default.getTime();
            var deltaX = point.pageX - this.pointX;
            var deltaY = point.pageY - this.pointY;
            var newX = void 0;
            var newY = void 0;

            this.pointX = point.pageX;
            this.pointY = point.pageY;

            this.distX += deltaX;
            this.distY += deltaY;

            var absDistX = Math.abs(this.distX);
            var absDistY = Math.abs(this.distY);

            // We need to move at least 10 pixels for the scrolling to initiate
            if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
                return;
            }

            // If you are scrolling in one direction lock the other
            if (!this.directionLocked && !this.freeScroll) {
                if (absDistX > absDistY + this.directionLockThreshold) {
                    this.directionLocked = 'h'; // lock horizontally
                } else if (absDistY >= absDistX + this.directionLockThreshold) {
                    this.directionLocked = 'v'; // lock vertically
                } else {
                    this.directionLocked = 'n'; // no lock
                }
            }

            if (this.directionLocked === 'h') {
                if (this.eventPassthrough === 'vertical') {
                    e.preventDefault();
                } else if (this.eventPassthrough === 'horizontal') {
                    this.initiated = false;
                    return;
                }

                deltaY = 0;
            } else if (this.directionLocked === 'v') {
                if (this.eventPassthrough === 'horizontal') {
                    e.preventDefault();
                } else if (this.eventPassthrough === 'vertical') {
                    this.initiated = false;
                    return;
                }

                deltaX = 0;
            }

            newX = this.x + deltaX;
            newY = this.y + deltaY;

            // Slow down if outside of the boundaries
            if (newX > 0) {
                newX = this.horizontalBounce ? this.x + deltaX / 3 : 0;
            } else if (newX < this.maxScrollX) {
                newX = this.horizontalBounce ? this.x + deltaX / 3 : this.maxScrollX;
            }

            if (newY > 0) {
                newY = this.verticalBounce ? this.y + deltaY / 3 : 0;
            } else if (newY < this.maxScrollY) {
                newY = this.verticalBounce ? this.y + deltaY / 3 : this.maxScrollY;
            }

            if (deltaX > 0) {
                this.directionX = -1;
            } else if (deltaX < 0) {
                this.directionX = 1;
            } else {
                this.directionX = 0;
            }

            if (deltaY > 0) {
                this.directionY = -1;
            } else if (deltaY < 0) {
                this.directionY = 1;
            } else {
                this.directionY = 0;
            }

            if (!this.moved) {
                this._execEvent('onScrollStart');
            }

            this.moved = true;

            this._translate(newX, newY);

            if (timestamp - this.startTime > 300) {
                this.startTime = timestamp;
                this.startX = this.x;
                this.startY = this.y;
            }

            this._execEvent('onScroll');
        }
    }, {
        key: '_handleTouchEnd',
        value: function _handleTouchEnd(e) {
            if (this.disabled || _utils2.default.eventType[e.type] !== this.initiated) {
                return;
            }

            if (this.preventDefault && !_utils2.default.preventDefaultException(e.target, this.props.preventDefaultException)) {
                e.preventDefault();
            }

            if (this.props.stopPropagation) {
                e.stopPropagation();
            }

            var momentumX = void 0;
            var momentumY = void 0;
            var duration = _utils2.default.getTime() - this.startTime;
            var newX = Math.round(this.x);
            var newY = Math.round(this.y);
            var time = 0;

            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = _utils2.default.getTime();

            if (!this.moved) {
                this._execEvent('onScrollCancel');
                return;
            }

            // set pullrefresh
            if (this.state.usePullRefresh && this.y >= this.props.pullRefreshHeight) {
                if (this.refreshState === REFRESHSTATUS.LOAD) {
                    this.scrollTo(this.x, this.props.pullRefreshHeight, 200);
                } else {
                    this._setRefreshStatus(REFRESHSTATUS.LOAD);
                    this.scrollTo(this.x, this.props.pullRefreshHeight, 300);
                    this._execEvent('onRefresh');
                }
                return;
            }

            // set loadmore
            // jiao.shen:此处将y<=max改成了y<max
            // 因为如果scroller正好滚到下边缘停住的时候,这时候如果scroller render,就会立刻触发loadmore,和使用习惯不符
            if (this.state.useLoadMore && this.y < this.maxScrollY) {
                if (this.loadState !== LOADSTATUS.NOMORE && this.loadState !== LOADSTATUS.LOAD) {
                    this._setLoadStatus(LOADSTATUS.LOAD);
                    this._execEvent('onLoad');
                }
            }

            // reset if we are outside of the boundaries
            if (this._resetPosition(this.props.bounceTime)) {
                return;
            }

            this.scrollTo(newX, newY); // ensures that the last position is rounded

            // start momentum animation if needed
            if (this.props.momentum && duration < 300) {
                momentumX = this.hasHorizontalScroll ? _utils2.default.momentum(this.x, this.startX, duration, this.maxScrollX, this.horizontalBounce ? this.wrapperWidth : 0, this.props.deceleration) : {
                    destination: newX,
                    duration: 0
                };
                momentumY = this.hasVerticalScroll ? _utils2.default.momentum(this.y, this.startY, duration, this.maxScrollY, this.verticalBounce ? this.wrapperHeight : 0, this.props.deceleration) : {
                    destination: newY,
                    duration: 0
                };
                newX = momentumX.destination;
                newY = momentumY.destination;
                time = Math.max(momentumX.duration, momentumY.duration);
                this.isInTransition = 1;
            }

            if (newX !== this.x || newY !== this.y) {
                var easing = void 0;

                // change easing function when scroller goes out of the boundaries
                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                    easing = _utils2.default.ease.quadratic;
                }

                this.scrollTo(newX, newY, time, easing);
                this._execEvent('onMomentumScrollBegin', {
                    targetX: newX,
                    targetY: newY
                });
                return;
            }

            this._execEvent('onScrollEnd');
        }
    }, {
        key: '_handleTransitionEnd',
        value: function _handleTransitionEnd(e) {
            if (e.target !== this.scroller || !this.isInTransition) {
                return;
            }

            this._transitionTime();
            if (!this._resetPosition(this.props.bounceTime)) {
                this.isInTransition = false;
                this._execEvent('onScrollEnd');
            }
        }

        /**
         * 尝试加载处于可视区域内的lazyimage
         * @param y
         */

    }, {
        key: '_tryLoadLazyImages',
        value: function _tryLoadLazyImages() {
            var _this3 = this;

            if (this.childLazyImages.length) {
                var self = this;
                this.childLazyImages.forEach(function (child) {
                    var _top = child.offsetTop - _this3.wrapperOffsetTop + _this3.y;

                    // if (_top >= -child.img.height && _top < self.wrapperHeight) {  // 只有出现在当前可视区域才加载
                    if (_top < self.wrapperHeight) {
                        // 出现在当前可视区域和可视区域上方都加载
                        child.load(function () {
                            var _height = child.props.style && child.props.style.height ? child.props.style.height : child.props.height;
                            if (!_height) {
                                // 如果设置了高度，就不再重新刷新
                                self.refresh();
                            }
                        });
                    }
                });
            }
        }
    }, {
        key: '_getCurrentSticky',
        value: function _getCurrentSticky() {
            var stickyOffset = this.props.stickyOffset;

            var ret = null;
            if (this.y < 0) {
                var absY = Math.abs(this.y - stickyOffset);
                var wrapperTop = this.wrapperOffsetTop;
                var upperHeaders = this.stickyHeaders.filter(function (header) {
                    return header.offsetTop - wrapperTop <= absY;
                });

                if (upperHeaders.length) {
                    var currentHeader = upperHeaders[upperHeaders.length - 1];
                    var nextHeader = this.stickyHeaders[upperHeaders.length];
                    var index = upperHeaders.length - 1;
                    if (nextHeader) {
                        var distToNext = nextHeader.offsetTop - wrapperTop - absY;
                        var adjustOffset = distToNext > currentHeader.height ? 0 : -(currentHeader.height - distToNext);
                        ret = { currentHeader: currentHeader, adjustOffset: adjustOffset, index: index };
                    } else {
                        ret = { currentHeader: currentHeader, adjustOffset: 0, index: index };
                    }
                } else {
                    ret = null;
                }
            } else {
                ret = null;
            }
            return ret;
        }
    }, {
        key: '_refreshSticky',
        value: function _refreshSticky(forceRefresh) {
            if (this.stickyHeaders.length) {
                var currentSticky = this._getCurrentSticky();
                var stickyNode = this.refs.stickyNode;

                if (currentSticky) {
                    var currentHeader = currentSticky.currentHeader,
                        adjustOffset = currentSticky.adjustOffset;


                    if (currentSticky.index !== this.stickyIndex || currentSticky.adjustOffset !== this.stickyOffset || forceRefresh) {
                        var transform = 'translate(0px,' + adjustOffset + 'px) translateZ(0px)';
                        stickyNode.style.transform = transform;
                        stickyNode.style.webkitTransform = transform;
                        stickyNode.style.display = 'block';
                        stickyNode.className = currentHeader.stickyExtraClass;
                        _reactDom2.default.render(_react2.default.cloneElement(currentHeader.onlyChild), stickyNode);

                        this.stickyIndex = currentSticky.index;
                        this.stickyOffset = currentSticky.adjustOffset;
                    }
                } else {
                    this.stickyIndex = null;
                    this.stickyOffset = null;
                    stickyNode.style.display = 'none';
                }
            }
        }

        /**
         * @method stopAnimate
         * @description 停止当前的滚动动画，包括：惯性滚动、回弹、ScrollTo等。
         */

    }, {
        key: 'stopAnimate',
        value: function stopAnimate() {
            if (this.useTransition && this.isInTransition) {
                this._transitionTime();
                this.isInTransition = false;

                var pos = this._getComputedPosition();

                this._translate(Math.round(pos.x), Math.round(pos.y));
                this._execEvent('onScrollEnd');
            } else if (!this.useTransition && this.isAnimating) {
                this._execEvent('onScrollEnd');
                cancelrAF(this.rAF);

                this.isAnimating = false;
            }
        }

        /**
         * @method _getComputedPosition
         * @returns {Object} 当前内容区域位移，{x: x, y: y}
         * @description 获取当前内容区域的位移
         * @skip
         */

    }, {
        key: '_getComputedPosition',
        value: function _getComputedPosition() {
            var matrix = window.getComputedStyle(this.scroller, null);
            var x = void 0;
            var y = void 0;

            if (this.useTransform) {
                matrix = matrix[_utils2.default.style.transform].split(')')[0].split(', ');
                x = +(matrix[12] || matrix[4]);
                y = +(matrix[13] || matrix[5]);
            } else {
                x = +matrix.left.replace(/[^-\d.]/g, '');
                y = +matrix.top.replace(/[^-\d.]/g, '');
            }

            return { x: x, y: y };
        }

        /**
         * @method _execEvent
         * @param {string} eventType 事件类型
         * @param {Object} param 参数
         * @description 触发事件回调
         * @skip
         */

    }, {
        key: '_execEvent',
        value: function _execEvent(eventType, param) {
            // console.log(eventType)
            if (eventType === 'onScroll' || eventType === 'onScrollEnd') {
                this._tryLoadLazyImages();
                this._refreshSticky();
            }
            if (eventType === 'onScrollStart') {
                this.isScrolling = true;
            }
            if (eventType === 'onScrollEnd') {
                this.isScrolling = false;
            }
            if (this.props[eventType]) {
                this.props[eventType].apply(this, [{
                    contentOffset: {
                        x: this.x,
                        y: this.y
                    },
                    param: param
                }]);
            }
        }

        /**
         * @method refresh
         * @param {Object} [refreshOption] 刷新参数，{wrapperWidth, wrapperHeight, scrollerWidth, scrollerHeight}
         * @description 刷新 Scroller，一般场景**不推荐使用**，因为当内容改变的时候，Scroller 会自动 render。
         *
         * 使用场景1：需要强制设置 Scroller 本身的宽高和内容容器的宽高时，可以通过refreshOption来传入宽高代替dom的宽高。
         *
         * 使用场景2：在某些不是通过 setState 或 Redux 等方式来改变内容导致 Scroller 不会 render 时，可以强制重新获取Scroller宽高和内容容器宽高。
         */

    }, {
        key: 'refresh',
        value: function refresh() {
            var refreshOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callFromList = arguments[1];

            if (!callFromList) {
                this.wrapperWidth = typeof refreshOption.wrapperWidth !== 'undefined' ? refreshOption.wrapperWidth : this.wrapper.clientWidth;
                this.wrapperHeight = typeof refreshOption.wrapperHeight !== 'undefined' ? refreshOption.wrapperHeight : this.wrapper.clientHeight;
                this.scrollerWidth = typeof refreshOption.scrollerWidth !== 'undefined' ? refreshOption.scrollerWidth : this.scroller.offsetWidth;

                if (this.refs.wrapper) {
                    this.wrapperOffsetTop = (0, _util.getElementOffsetY)(this.refs.wrapper, null);
                }
            }

            this.scrollerHeight = typeof refreshOption.scrollerHeight !== 'undefined' ? refreshOption.scrollerHeight : this.scroller.offsetHeight;

            // 如果有下拉刷新，设置下拉刷新的位置，重置scrollerHeight
            if (this.state.useLoadMore && this.refs.LoadMore) {
                this.refs.LoadMore.style.visibility = this.scrollerHeight > 0 ? 'visible' : 'hidden';
                this.refs.LoadMore.style.top = this.scrollerHeight + 'px';
                this.scrollerHeight += this.props.loadMoreHeight;
            }

            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

            this.hasHorizontalScroll = this.props.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.props.scrollY && this.maxScrollY < 0;

            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth;
            }

            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight;
            }

            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
        }

        /**
         * @method _resetPosition
         * @param {Number} [time] 滚动到临界点的时间
         * @description 校正当前内容的位置，如果超出了可滚动的范围，则滚动到临界点。主要用于回弹。
         * @skip
         */

    }, {
        key: '_resetPosition',
        value: function _resetPosition(time) {
            var x = this.x;
            var y = this.y;
            var animateTime = time || 0;

            if (this.refreshState === REFRESHSTATUS.LOAD && this.y === this.props.pullRefreshHeight) {
                return false;
            }

            if (!this.hasHorizontalScroll || this.x > 0) {
                x = 0;
            } else if (this.x < this.maxScrollX) {
                x = this.maxScrollX;
            }

            if (!this.hasVerticalScroll || this.y > 0) {
                y = 0;
            } else if (this.y < this.maxScrollY) {
                y = this.maxScrollY;
            }

            if (x === this.x && y === this.y) {
                return false;
            }

            this.scrollTo(x, y, animateTime, this.props.bounceEasing);

            return true;
        }

        /**
         * @method scrollTo
         * @param {Number} x 水平位移，默认值为当前水平位移
         * @param {Number} y 垂直位移，默认值为当前垂直位移
         * @param {Number} time 滚动时间，默认值为0
         * @param {Object} [easing] 滚动动画对象。参照 `bounceEasing` 参数。
         *
         * @description 滚动到某个位置。
         */

    }, {
        key: 'scrollTo',
        value: function scrollTo() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;
            var time = arguments[2];
            var easing = arguments[3];
            // TODO: 给scrollTo加上回调，由于transitionend事件并不能针对某一次的transition，所以暂时不好处理
            var _easing = easing || _utils2.default.ease.circular;
            var transitionType = this.useTransition && _easing.style;

            this.isInTransition = this.useTransition && time > 0;

            if (!time || transitionType) {
                if (transitionType) {
                    this._transitionTimingFunction(_easing.style);
                    this._transitionTime(time);
                }
                this._translate(x, y);
            } else {
                this._animate(x, y, time, _easing.fn);
            }
        }
    }, {
        key: '_transitionTimingFunction',
        value: function _transitionTimingFunction(easing) {
            this._scrollerStyle[_utils2.default.style.transitionTimingFunction] = easing;
        }
    }, {
        key: '_transitionTime',
        value: function _transitionTime(time) {
            var _this4 = this;

            var _time = time || 0;
            var durationProp = _utils2.default.style.transitionDuration;
            if (!this.useTransition) {
                return;
            }

            if (!durationProp) {
                return;
            }
            this._scrollerStyle[durationProp] = _time + 'ms';

            if (!_time && _utils2.default.isBadAndroid) {
                this._scrollerStyle[durationProp] = '0.0001ms';

                // remove 0.0001ms
                rAF(function () {
                    if (_this4._scrollerStyle[durationProp] === '0.0001ms') {
                        _this4._scrollerStyle[durationProp] = '0s';
                    }
                });
            }

            this._setStyle(this.scroller, this._scrollerStyle);
        }
    }, {
        key: '_setStyle',
        value: function _setStyle(dom, style) {
            var _style = Object.assign({}, style);
            var _dom = dom;

            Object.keys(_style).forEach(function (key) {
                _dom.style[key] = _style[key];
            });
        }
    }, {
        key: '_translate',
        value: function _translate(x, y) {
            if (this.useTransform) {
                this._scrollerStyle[_utils2.default.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

                this.x = x;
                this.y = y;

                this._setStyle(this.scroller, this._scrollerStyle);
            } else {
                var _x = Math.round(x);
                var _y = Math.round(y);

                this._scrollerStyle.left = _x + 'px';
                this._scrollerStyle.top = _y + 'px';

                this.x = _x;
                this.y = _y;

                this._setStyle(this.scroller, this._scrollerStyle);
            }

            if (this.state.usePullRefresh) {
                if (y >= this.props.pullRefreshHeight && this.refreshState === REFRESHSTATUS.PULL) {
                    this._setRefreshStatus(REFRESHSTATUS.RELEASE);
                } else if (y < this.props.pullRefreshHeight && this.refreshState === REFRESHSTATUS.RELEASE) {
                    this._setRefreshStatus(REFRESHSTATUS.PULL);
                }
            }

            if (this.state.useLoadMore) {
                if (this.maxScrollY - y > 0 && this.loadState === LOADSTATUS.PULL) {
                    // this._setRefreshStatus(LOADSTATUS.RELEASE);
                    this._setLoadStatus(LOADSTATUS.RELEASE);
                } else if (this.maxScrollY - y <= 0 && this.loadState === LOADSTATUS.RELEASE) {
                    // this._setRefreshStatus(LOADSTATUS.PULL);
                    this._setLoadStatus(LOADSTATUS.PULL);
                }
            }
        }
    }, {
        key: '_animate',
        value: function _animate(destX, destY, duration, easingFn) {
            var _this5 = this;

            var self = this;
            var startX = this.x;
            var startY = this.y;
            var startTime = _utils2.default.getTime();
            var destTime = startTime + duration;

            var step = function step() {
                var now = _utils2.default.getTime();
                var easing = easingFn((now - startTime) / duration);
                var newX = (destX - startX) * easing + startX;
                var newY = (destY - startY) * easing + startY;

                if (now >= destTime) {
                    self.isAnimating = false;
                    self._translate(destX, destY);

                    if (!self._resetPosition(self.props.bounceTime)) {
                        self._execEvent('onScrollEnd');
                    }

                    return;
                }

                self._translate(newX, newY);

                _this5._execEvent('onScroll');

                if (self.isAnimating) {
                    cancelrAF(self.rAF);
                    self.rAF = rAF(step);
                }
            };

            this.isAnimating = true;
            step();
        }
    }, {
        key: '_setRefreshStatus',
        value: function _setRefreshStatus(status) {
            var _this6 = this;

            if (!this.state.usePullRefresh) {
                return;
            }

            var _prevRefreshState = this.refreshState;
            this.refreshState = status;

            Object.keys(REFRESHSTATUS).forEach(function (item) {
                var _ref = REFRESHSTATUS[item];
                if (_this6.refs[_ref]) {
                    _this6.refs[_ref].style.display = status === _ref ? '' : 'none';
                }
            });

            var releaseIcon = this.refs[REFRESHSTATUS.RELEASE].querySelector('i');
            var pullIcon = this.refs[REFRESHSTATUS.PULL].querySelector('i');

            // todo: 为啥用了react之后，这个地方需要setTimeout才能正常动画
            setTimeout(function () {
                if (_prevRefreshState === REFRESHSTATUS.PULL && status === REFRESHSTATUS.RELEASE) {
                    releaseIcon.style[_utils2.default.style.transform] = '';
                    pullIcon.style[_utils2.default.style.transform] = 'rotate(180deg)';
                } else {
                    releaseIcon.style[_utils2.default.style.transform] = 'rotate(-180deg)';
                    pullIcon.style[_utils2.default.style.transform] = '';
                }
            }, 0);
        }
    }, {
        key: '_setLoadStatus',
        value: function _setLoadStatus(status) {
            var _this7 = this;

            if (!this.state.useLoadMore) {
                return;
            }

            var _prevLoadState = this.loadState;
            this.loadState = status;

            Object.keys(LOADSTATUS).forEach(function (item) {
                var _ref = LOADSTATUS[item];
                if (_this7.refs[_ref]) {
                    _this7.refs[_ref].style.display = status === _ref ? '' : 'none';
                }
            });

            var releaseIcon = this.refs[LOADSTATUS.RELEASE].querySelector('i');
            var pullIcon = this.refs[LOADSTATUS.PULL].querySelector('i');

            // todo: 为啥用了react之后，这个地方需要setTimeout才能正常动画
            setTimeout(function () {
                if (_prevLoadState === LOADSTATUS.PULL && status === LOADSTATUS.RELEASE) {
                    releaseIcon.style[_utils2.default.style.transform] = '';
                    pullIcon.style[_utils2.default.style.transform] = 'rotate(180deg)';
                } else {
                    releaseIcon.style[_utils2.default.style.transform] = 'rotate(-180deg)';
                    pullIcon.style[_utils2.default.style.transform] = '';
                }
            }, 0);
        }

        /**
         * @method startRefreshing
         * @param {Number} [time] 滚动到顶部的时间，默认为 300ms
         * @description 强制开始刷新。这个方法一般是用在切换筛选项或者关键字等场景，来达到回到顶部并且开始刷新的效果。如果是用户下拉触发 `onRefresh` 时，就不需要再调用这个方法了。
         */

    }, {
        key: 'startRefreshing',
        value: function startRefreshing() {
            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;

            if (this.state.usePullRefresh && this.refreshState !== REFRESHSTATUS.LOAD) {
                this._setRefreshStatus(REFRESHSTATUS.LOAD);
                this.scrollTo(this.x, this.props.pullRefreshHeight, time);

                this._execEvent('onRefresh');
            }
        }

        /**
         * @method stopRefreshing
         * @param {Bool} status 刷新的状态。true表示加载成功，false表示加载失败。
         * @param {Object} [config] 停止刷新的动画配置
         * @param {number} [config.duration] 回到顶部的动画时间，默认是300ms
         * @description 停止刷新，停止之后会自动滚动到顶部。
         */

    }, {
        key: 'stopRefreshing',
        value: function stopRefreshing(status) {
            var _this8 = this;

            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { duration: 300 };

            if (this.state.usePullRefresh && this.refreshState === REFRESHSTATUS.LOAD) {
                this._setRefreshStatus(status ? REFRESHSTATUS.SUCCESS : REFRESHSTATUS.FAIL);

                // 方案一：放在scrollTo的回调中处理状态，但是scrollTo的回调有时候会有问题；可以通过this.disabled = true 来禁止滚动解决现有的问题
                // this.scrollTo(this.x, 0, 300, null, ()=>{
                //     this._setRefreshStatus(REFRESHSTATUS.PULL);
                // });

                // 方案二：setTimeout的方式，但是不准确，尤其是在比较卡的机器上
                this.scrollTo(this.x, 0, config.duration);
                this.disabled = true;
                setTimeout(function () {
                    _this8._setRefreshStatus(REFRESHSTATUS.PULL);
                    _this8._setLoadStatus(LOADSTATUS.PULL);
                    _this8.disabled = false;
                }, config.duration);
            }
        }

        /**
         * @method stopLoading
         * @param {Bool} status 刷新的状态。true表示加载了更多数据，false表示没有更多数据了。
         * @description 停止加载更多。
         */

    }, {
        key: 'stopLoading',
        value: function stopLoading(status) {
            if (this.state.useLoadMore && this.loadState === LOADSTATUS.LOAD) {
                this._setLoadStatus(status ? LOADSTATUS.PULL : LOADSTATUS.NOMORE);
            }
        }

        /**
         * @method _refreshLoadMore
         * @skip
         * @private
         * @description 更新useLoadMore属性时的逻辑（该逻辑必须放到refresh之后，因为refresh才会计算的到正确的scrollerHeight）
         *
         * 1. 如果是去掉useLoadMore，需要重新设置位置（因为scrollerHeight变少了）
         * 2. 如果是加上useLoadMore，需要设置LoadMore的位置（此时的scrollerHeight是包括loadMoreHeight的，所以需要减去loadMoreHHeight）
         */

    }, {
        key: '_refreshLoadMore',
        value: function _refreshLoadMore() {
            if (!this.state.useLoadMore) {
                this._resetPosition();
            } else {
                if (this.refs.LoadMore) {
                    this.refs.LoadMore.style.top = this.scrollerHeight - this.props.loadMoreHeight + 'px';
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            var _props = this.props,
                extraClass = _props.extraClass,
                containerExtraClass = _props.containerExtraClass,
                pullRefreshHeight = _props.pullRefreshHeight,
                loadMoreHeight = _props.loadMoreHeight,
                stickyOffset = _props.stickyOffset;

            var pullRefreshContent = void 0;
            var loadMoreContent = void 0;

            if (this.state.usePullRefresh) {
                var pullRefreshTpl = _react2.default.createElement(
                    'div',
                    {
                        ref: 'pullrefresh',
                        className: 'yo-load',
                        style: {
                            height: pullRefreshHeight + 'px',
                            lineHeight: pullRefreshHeight + 'px',
                            top: -pullRefreshHeight + 'px'
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'pullrefresh_pull' },
                        _react2.default.createElement(
                            'i',
                            { className: 'yo-ico' },
                            '\uF07B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'pullrefresh_release' },
                        _react2.default.createElement(
                            'i',
                            { className: 'yo-ico' },
                            '\uF079'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u91CA\u653E\u7ACB\u5373\u66F4\u65B0'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'pullrefresh_load' },
                        _react2.default.createElement(
                            'i',
                            { className: 'yo-ico yo-ico-loading' },
                            '\uF089'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u52AA\u529B\u52A0\u8F7D\u4E2D...'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'pullrefresh_success' },
                        _react2.default.createElement(
                            'i',
                            { className: 'yo-ico yo-ico-succ' },
                            '\uF078'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u52A0\u8F7D\u6210\u529F'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'pullrefresh_fail' },
                        _react2.default.createElement(
                            'i',
                            { className: 'yo-ico yo-ico-fail' },
                            '\uF077'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u52A0\u8F7D\u5931\u8D25'
                        )
                    )
                );

                pullRefreshContent = this.props.renderPullRefresh ? this.props.renderPullRefresh() : pullRefreshTpl;
            }

            if (this.state.useLoadMore) {
                var loadMoreTpl = _react2.default.createElement(
                    'div',
                    {
                        ref: 'LoadMore',
                        className: 'yo-load',
                        style: {
                            height: loadMoreHeight + 'px',
                            lineHeight: loadMoreHeight + 'px',
                            top: -loadMoreHeight + 'px'
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'loadmore_pull' },
                        _react2.default.createElement(
                            'i',
                            { className: 'yo-ico' },
                            '\uF079'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'loadmore_release' },
                        _react2.default.createElement(
                            'i',
                            { className: 'yo-ico' },
                            '\uF07B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u91CA\u653E\u7ACB\u5373\u52A0\u8F7D'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'loadmore_load' },
                        _react2.default.createElement(
                            'i',
                            { className: 'yo-ico yo-ico-loading' },
                            '\uF089'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u6B63\u5728\u52A0\u8F7D...'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'yo-loadtip', ref: 'loadmore_nomore' },
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u6CA1\u6709\u66F4\u591A\u4E86...'
                        )
                    )
                );

                loadMoreContent = this.props.renderLoadMore ? this.props.renderLoadMore() : loadMoreTpl;
            }

            var wrapperStyle = Object.assign({ overflow: 'hidden' }, this.props.style);
            var scrollerStyle = Object.assign({}, this.props.containerExtraStyle, this._scrollerStyle);
            var scrollerContent = void 0;
            var _wrapperClassName = (0, _classnames2.default)('yo-scroller', extraClass);
            var _scrollerClassName = (0, _classnames2.default)('scroller', containerExtraClass);

            if (this.noWrapper) {
                // 1. 不需要滚动容器（只适用于特殊的、内容的宽高已知的情况）
                scrollerContent = _react2.default.cloneElement(this.props.children, {
                    ref: 'scroller',
                    onTouchStart: function onTouchStart(evt) {
                        return _this9._handleTouchStart(evt);
                    },
                    onTouchMove: function onTouchMove(evt) {
                        return _this9._handleTouchMove(evt);
                    },
                    onTouchEnd: function onTouchEnd(evt) {
                        return _this9._handleTouchEnd(evt);
                    },
                    onTouchCancel: function onTouchCancel(evt) {
                        return _this9._handleTouchEnd(evt);
                    },
                    onTransitionEnd: function onTransitionEnd(evt) {
                        return _this9._handleTransitionEnd(evt);
                    }
                });
            } else if (this.props.children && !this.props.children.length && typeof this.props.children.type === 'string' && !this.state.usePullRefresh && !this.state.useLoadMore) {
                // 2. 将内容的最外层节点当做滚动容器
                if (this.props.children.props && this.props.children.props.className) {
                    _scrollerClassName = (0, _classnames2.default)('scroller', this.props.children.props.className);
                } else {
                    _scrollerClassName = 'scroller';
                }

                var content = _react2.default.cloneElement(this.props.children, {
                    ref: 'scroller',
                    className: _scrollerClassName,
                    style: scrollerStyle
                });

                scrollerContent = _react2.default.createElement(
                    'div',
                    {
                        ref: 'wrapper',
                        className: _wrapperClassName,
                        onTouchStart: function onTouchStart(evt) {
                            return _this9._handleTouchStart(evt);
                        },
                        onTouchMove: function onTouchMove(evt) {
                            return _this9._handleTouchMove(evt);
                        },
                        onTouchEnd: function onTouchEnd(evt) {
                            return _this9._handleTouchEnd(evt);
                        },
                        onTouchCancel: function onTouchCancel(evt) {
                            return _this9._handleTouchEnd(evt);
                        },
                        onTransitionEnd: function onTransitionEnd(evt) {
                            return _this9._handleTransitionEnd(evt);
                        },
                        style: wrapperStyle
                    },
                    _react2.default.createElement('div', {
                        ref: 'stickyNode',
                        style: { position: 'absolute', top: stickyOffset, left: 0, right: 0, zIndex: 9999 },
                        className: 'sticky'
                    }),
                    content
                );
            } else {
                // 3. 在内容的外面加一层滚动容器
                scrollerContent = _react2.default.createElement(
                    'div',
                    {
                        ref: 'wrapper',
                        className: _wrapperClassName,
                        onTouchStart: function onTouchStart(evt) {
                            return _this9._handleTouchStart(evt);
                        },
                        onTouchMove: function onTouchMove(evt) {
                            return _this9._handleTouchMove(evt);
                        },
                        onTouchEnd: function onTouchEnd(evt) {
                            return _this9._handleTouchEnd(evt);
                        },
                        onTouchCancel: function onTouchCancel(evt) {
                            return _this9._handleTouchEnd(evt);
                        },
                        onTransitionEnd: function onTransitionEnd(evt) {
                            return _this9._handleTransitionEnd(evt);
                        },
                        style: wrapperStyle
                    },
                    _react2.default.createElement('div', {
                        ref: 'stickyNode',
                        style: { position: 'absolute', top: stickyOffset, left: 0, right: 0, zIndex: 9999 },
                        className: 'sticky'
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: _scrollerClassName, ref: 'scroller', style: scrollerStyle },
                        this.props.children,
                        pullRefreshContent,
                        loadMoreContent
                    )
                );
            }

            return scrollerContent;
        }
    }]);

    return Scroller;
}(_react.Component);

Scroller.ease = _utils2.default.ease;
Scroller.childContextTypes = {
    scroller: _react.PropTypes.object,
    isScroller: _react.PropTypes.bool
};
exports.default = Scroller;


Scroller.defaultProps = defaultProps;
Scroller.propTypes = propTypes;
Scroller.Sticky = _sticky2.default;
Scroller.LazyImage = _lazyimage2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var fetchData = function fetchData(url, callback) {
	fetch(url).then(function (response) {
		return response.json();
	}).then(function (res) {
		console.log(res);
		callback(res);
	});
};
exports.default = fetchData;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "fetch.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8);

var ReactErrorUtils = __webpack_require__(31);

var invariant = __webpack_require__(6);
var warning = __webpack_require__(10);

/**
 * Injected dependencies:
 */

/**
 * - `ComponentTree`: [required] Module that can convert between React instances
 *   and actual node references.
 */
var ComponentTree;
var TreeTraversal;
var injection = {
  injectComponentTree: function (Injected) {
    ComponentTree = Injected;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
    }
  },
  injectTreeTraversal: function (Injected) {
    TreeTraversal = Injected;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 'module is missing isAncestor or getLowestCommonAncestor.') : void 0;
    }
  }
};

function isEndish(topLevelType) {
  return topLevelType === 'topMouseUp' || topLevelType === 'topTouchEnd' || topLevelType === 'topTouchCancel';
}

function isMoveish(topLevelType) {
  return topLevelType === 'topMouseMove' || topLevelType === 'topTouchMove';
}
function isStartish(topLevelType) {
  return topLevelType === 'topMouseDown' || topLevelType === 'topTouchStart';
}

var validateEventDispatches;
if (process.env.NODE_ENV !== 'production') {
  validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

    var instancesIsArr = Array.isArray(dispatchInstances);
    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

    process.env.NODE_ENV !== 'production' ? warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : void 0;
  };
}

/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function executeDispatch(event, simulated, listener, inst) {
  var type = event.type || 'unknown-event';
  event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
  if (simulated) {
    ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
  } else {
    ReactErrorUtils.invokeGuardedCallback(type, listener, event);
  }
  event.currentTarget = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function executeDispatchesInOrder(event, simulated) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and Instances are two parallel arrays that are always in sync.
      executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
    }
  } else if (dispatchListeners) {
    executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
  }
  event._dispatchListeners = null;
  event._dispatchInstances = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */
function executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and Instances are two parallel arrays that are always in sync.
      if (dispatchListeners[i](event, dispatchInstances[i])) {
        return dispatchInstances[i];
      }
    }
  } else if (dispatchListeners) {
    if (dispatchListeners(event, dispatchInstances)) {
      return dispatchInstances;
    }
  }
  return null;
}

/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
function executeDispatchesInOrderStopAtTrue(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchInstances = null;
  event._dispatchListeners = null;
  return ret;
}

/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
function executeDirectDispatch(event) {
  if (process.env.NODE_ENV !== 'production') {
    validateEventDispatches(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchInstance = event._dispatchInstances;
  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : _prodInvariant('103') : void 0;
  event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
  var res = dispatchListener ? dispatchListener(event) : null;
  event.currentTarget = null;
  event._dispatchListeners = null;
  event._dispatchInstances = null;
  return res;
}

/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
function hasDispatches(event) {
  return !!event._dispatchListeners;
}

/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var EventPluginUtils = {
  isEndish: isEndish,
  isMoveish: isMoveish,
  isStartish: isStartish,

  executeDirectDispatch: executeDirectDispatch,
  executeDispatchesInOrder: executeDispatchesInOrder,
  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
  hasDispatches: hasDispatches,

  getInstanceFromNode: function (node) {
    return ComponentTree.getInstanceFromNode(node);
  },
  getNodeFromInstance: function (node) {
    return ComponentTree.getNodeFromInstance(node);
  },
  isAncestor: function (a, b) {
    return TreeTraversal.isAncestor(a, b);
  },
  getLowestCommonAncestor: function (a, b) {
    return TreeTraversal.getLowestCommonAncestor(a, b);
  },
  getParentInstance: function (inst) {
    return TreeTraversal.getParentInstance(inst);
  },
  traverseTwoPhase: function (target, fn, arg) {
    return TreeTraversal.traverseTwoPhase(target, fn, arg);
  },
  traverseEnterLeave: function (from, to, fn, argFrom, argTo) {
    return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
  },

  injection: injection
};

module.exports = EventPluginUtils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "cart.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _src = __webpack_require__(53);

var _src2 = _interopRequireDefault(_src);

var _src3 = __webpack_require__(12);

var _src4 = _interopRequireDefault(_src3);

var _fetch = __webpack_require__(13);

var _fetch2 = _interopRequireDefault(_fetch);

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
			title: "首页",
			navlist1: '',
			navlist2: '',
			homelist: '',
			updown: "home_up"

		};
		return _this;
	}

	_createClass(Home, [{
		key: 'goup',
		value: function goup() {
			this.refs.scroller.scrollTo(0, 0, 300);
		}
	}, {
		key: 'upshow',
		value: function upshow(evt) {
			var _h = evt.contentOffset.y;
			if (_h >= -160) {
				document.getElementById("p").style.display = "none";
			} else {
				document.getElementById("p").style.display = "block";
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'home' },
				_react2.default.createElement(
					'div',
					{ className: this.state.updown, id: 'p', onClick: this.goup.bind(this) },
					_react2.default.createElement('img', { src: 'http://m.6688.com/img/newIndex/201607/scroll-to-top-icon.png' })
				),
				_react2.default.createElement(
					_src4.default,
					{
						extraClass: 'yo-scroller yo-scroller-fullscreen',
						onScroll: this.upshow,
						ref: 'scroller',
						usePullRefresh: true,
						onRefresh: function onRefresh() {
							_this2.setState({
								navlist1: '',
								navlist2: '',
								homelist: '',
								homelist2: ''
							});
							_this2.fetchRefresh('./json/nav.json');
							_this2.fetchLoad('./json/list.json');
							_this2.refs.scroller.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
						},
						useLoadMore: true,
						onLoad: function onLoad() {
							_this2.fetchLoad('./json/list.json');
							_this2.refs.scroller.stopLoading(true); // 这个调用也可以放在异步操作的回调里之后
						}

					},
					_react2.default.createElement(
						'div',
						{ className: 'home_scroll' },
						_react2.default.createElement(
							'div',
							{ className: 'home_swiper' },
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									_src2.default,
									{ autoplay: true },
									_react2.default.createElement(
										'a',
										{ className: 'item' },
										_react2.default.createElement('img', { className: 'img', src: 'http://m.6688.com/img/newIndex/banner/banner-mmzlxiao.jpg' })
									),
									_react2.default.createElement(
										'a',
										{ className: 'item' },
										_react2.default.createElement('img', { className: 'img', src: 'http://m.6688.com/img/newIndex/banner/banner-nyryss.jpg' })
									),
									_react2.default.createElement(
										'a',
										{ className: 'item' },
										_react2.default.createElement('img', { className: 'img', src: 'http://m.6688.com/img/newIndex/banner/banner-gypyqm.jpg' })
									),
									_react2.default.createElement(
										'a',
										{ className: 'item' },
										_react2.default.createElement('img', { className: 'img', src: 'http://m.6688.com/img/newIndex/banner/banner-slxgxiao.jpg' })
									)
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'home_promotion' },
							_react2.default.createElement(
								'a',
								{ href: '#' },
								_react2.default.createElement('img', { src: 'http://m.6688.com/img/newIndex/201607/promotion/promotion_01.png' })
							),
							_react2.default.createElement(
								'a',
								{ href: '#' },
								_react2.default.createElement('img', { src: 'http://m.6688.com/img/newIndex/201607/promotion/promotion_02.png' })
							),
							_react2.default.createElement(
								'a',
								{ href: '#' },
								_react2.default.createElement('img', { src: 'http://m.6688.com/img/newIndex/201607/promotion/promotion_03.png' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'home_nav' },
							_react2.default.createElement(
								'ul',
								null,
								this.state.navlist1
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'home_main' },
							_react2.default.createElement(
								'div',
								{ className: 'home_menu' },
								_react2.default.createElement('hr', null),
								_react2.default.createElement(
									'span',
									null,
									'\u8FDB\u5E97\u5FC5\u8D25'
								),
								_react2.default.createElement('hr', null)
							),
							_react2.default.createElement(
								'ul',
								null,
								this.state.homelist
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'home_nav' },
							_react2.default.createElement(
								'ul',
								null,
								this.state.navlist2
							)
						)
					)
				)
			);
		}
	}, {
		key: 'fetchRefresh',
		value: function fetchRefresh(url) {
			(0, _fetch2.default)(url, function (res) {
				var data = eval(res);
				console.log(data);
				var list1 = [],
				    list2 = [];
				for (var i = 0; i < 16; i++) {
					if (i < 8) {
						list1.push({ img: 'http://m.6688.com/img/newIndex/201607/catalogNavigation/' + data[i].catalogName + '.jpg', catalogName: data[i].catalogName });
					} else {
						list2.push({ img: 'http://m.6688.com/img/newIndex/201607/catalogNavigation/' + data[i].catalogName + '.jpg', catalogName: data[i].catalogName });
					}
				}
				var nlist1 = list1.map(function (val) {
					return _react2.default.createElement(
						'li',
						{ className: 'item' },
						_react2.default.createElement('img', { src: val.img })
					);
				});
				var nlist2 = list2.map(function (val) {
					return _react2.default.createElement(
						'li',
						{ className: 'item' },
						_react2.default.createElement('img', { src: val.img })
					);
				});
				this.setState({
					navlist1: nlist1,
					navlist2: nlist2
				});
			}.bind(this));
		}
	}, {
		key: 'fetchLoad',
		value: function fetchLoad(url) {
			(0, _fetch2.default)(url, function (res) {
				var data = eval(res);
				console.log(data);
				var hlist = data.map(function (val) {
					return _react2.default.createElement(
						'li',
						{ className: 'home_list' },
						_react2.default.createElement(_src4.default.LazyImage, { src: val.goodsImg })
					);
				});
				this.setState({
					homelist: hlist
				});
			}.bind(this));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.fetchLoad('./json/list.json');
			this.fetchRefresh('./json/nav.json');
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _src = __webpack_require__(12);

var _src2 = _interopRequireDefault(_src);

var _reactRouter = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _fetch = __webpack_require__(13);

var _fetch2 = _interopRequireDefault(_fetch);

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
			title: "分类",
			searchlist: '',
			str: ''
		};
		return _this;
	}

	_createClass(Kind, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'search' },
				_react2.default.createElement(
					_src2.default,
					{
						extraClass: 'yo-scroller yo-scroller-fullscreen'
					},
					_react2.default.createElement(
						'ul',
						{ className: 'k' },
						this.state.searchlist
					)
				)
			);
		}
	}, {
		key: 'data',
		value: function data(st) {
			console.log(st);
			this.setState({
				str: st
			});
			console.log(this.props);
			//		let title=str;
			//		this.props.onChange({
			//			type:'SETTITLE',
			//			title:title
			//		})
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _fetch2.default)('./json/nav.json', function (res) {
				var _this2 = this;

				var data = eval(res);
				console.log(data);
				var slist = data.map(function (val) {
					return _react2.default.createElement(
						'li',
						{ className: 'search_list', onClick: _this2.data.bind(_this2, val.catalogName) },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/list', title: val.catalogName },
							val.catalogName
						)
					);
				});
				this.setState({
					searchlist: slist
				});
			}.bind(this));
		}
	}]);

	return Kind;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Kind);
//module.exports=Kind;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "search.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "service.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _address = __webpack_require__(20);

var _address2 = _interopRequireDefault(_address);

var _help = __webpack_require__(22);

var _help2 = _interopRequireDefault(_help);

var _historyorder = __webpack_require__(23);

var _historyorder2 = _interopRequireDefault(_historyorder);

var _myaccount = __webpack_require__(25);

var _myaccount2 = _interopRequireDefault(_myaccount);

var _myorder = __webpack_require__(26);

var _myorder2 = _interopRequireDefault(_myorder);

var _collect = __webpack_require__(21);

var _collect2 = _interopRequireDefault(_collect);

var _login = __webpack_require__(24);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(28);

var _register2 = _interopRequireDefault(_register);

var _userHead = __webpack_require__(9);

var _userHead2 = _interopRequireDefault(_userHead);

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
						"span",
						{ className: "yo-ico touxiang" },
						"\uE665"
					),
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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "user.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _newaddress = __webpack_require__(27);

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
			arr: [],
			_arr: []
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
				_react2.default.createElement(
					"section",
					null,
					_react2.default.createElement(
						"ul",
						{ className: "user-address" },
						this.state._arr
					)
				)
			);
		}
	}, {
		key: "back",
		value: function back() {
			window.location.href = "#/user";
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			if (window.localStorage) {
				var address = localStorage.getItem("address");
				var list = [];
				if (address != null) {
					address.split("#").map(function (item) {
						if (item != "null" && item != "") {
							list.push(JSON.parse(item));
						}
					});
				}

				this.setState({
					arr: list
				});
			}
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var title = '我的地址';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
			var _list = [];
			this.state.arr.map(function (item, index) {
				_list.push(_react2.default.createElement(
					"li",
					{ className: "Saveaddress", data: index },
					_react2.default.createElement(
						"div",
						{ className: "addressinfo" },
						_react2.default.createElement(
							"div",
							{ className: "addressDetail" },
							_react2.default.createElement(
								"span",
								{ className: "address_name" },
								item.name
							),
							_react2.default.createElement(
								"span",
								{ className: "phonenumber" },
								item.phone
							),
							_react2.default.createElement(
								"div",
								{ className: "local" },
								item._area
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "choosen" },
							_react2.default.createElement(
								"span",
								{ className: "ischoosen" },
								_react2.default.createElement("img", { src: "/img/Chosen.png" })
							)
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "reviseAddress" },
						_react2.default.createElement(
							"a",
							{ href: '#/editaddress/' + index },
							_react2.default.createElement("img", { src: "/img/edit.png" })
						)
					)
				));
			});
			this.setState({
				_arr: _list
			});
		}
	}]);

	return Address;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Address);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "address.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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
				_react2.default.createElement(
					'section',
					null,
					_react2.default.createElement(
						'ul',
						{ className: 'my-concern' },
						_react2.default.createElement(
							'li',
							{ className: 'concern-list' },
							_react2.default.createElement(
								'div',
								{ className: 'goodsimg' },
								_react2.default.createElement('img', null)
							),
							_react2.default.createElement(
								'div',
								{ className: 'goodsdetail' },
								_react2.default.createElement(
									'span',
									{ className: 'goodsname' },
									'121313'
								),
								_react2.default.createElement(
									'span',
									{ className: 'goodsprice' },
									'13131'
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
			window.location.href = "#/user";
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = "我的收藏";
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Collect;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Collect);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "collect.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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
									'\u95EE\uFF1A\u5982\u4F55\u8D2D\u4E706688\u5546\u57CE\u4EA7\u54C1\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u767B\u5F55www.6688.com\u641C\u7D22\u5230\u60A8\u8981\u8BA2\u8D2D\u7684\u4EA7\u54C1\uFF0C\u70B9\u51FB\u201C\u7ACB\u5373\u8D2D\u4E70\u2192\u7EE7\u7EED\u8D2D\u7269 \u6216 \u4E0B\u4E00\u6B65\u2192 \u586B\u5199\u6536\u8D27\u4FE1\u606F \u2192 \u9009\u62E9 \u914D\u9001\u65B9\u5F0F\u548C\u652F\u4ED8\u65B9\u5F0F \u2192 \u786E\u8BA4\u8BA2\u5355 \u2192 \u53BB\u652F\u4ED8\uFF0C\u5373\u53EF\uFF0C\u4E0D\u7528\u4E8B\u5148\u6CE8\u518C\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A6688\u5546\u57CE\u6240\u552E\u5546\u54C1\u90FD\u662F\u6B63\u54C1\u884C\u8D27\u5417\uFF1F '
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A6688\u5546\u57CE\u6240\u552E\u5546\u54C1\u5168\u90E8\u662F\u6B63\u724C\u5546\u54C1\uFF0C\u4E0E\u4EB2\u4E34\u5546\u573A\u9009\u8D2D\u7684\u5546\u54C1\u4EAB\u53D7\u540C\u6837\u7684\u8D28\u91CF\u4FDD\u8BC1\u3002\u8BE6\u89C1\u552E\u540E\u670D\u52A1\u8BF4\u660E'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u4E0B\u5355\u540E\u4F55\u65F6\u53EF\u4EE5\u6536\u5230\u8D27\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u5C06\u6839\u636E\u60A8\u7684\u6536\u8D27\u5730\u5740\u53CA\u6240\u9009\u62E9\u7684\u914D\u9001\u65B9\u5F0F\u800C\u4E0D\u540C\uFF0C\u4E00\u822C\u5230\u8D27\u65F6\u95F4\u57283-7\u5929\uFF0C\u504F\u8FDC\u5730\u533A\u914D\u9001\u65F6\u95F4\u53EF\u80FD\u4F1A\u66F4\u957F\u4E00\u4E9B\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u5FEB\u9012\u8D39\u662F\u591A\u5C11\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A6688\u8FD0\u8D39\u6309\u4EA7\u54C1\u6765\u6536\u53D6\uFF0C\u4E0D\u540C\u4EA7\u54C1\u8FD0\u8D39\u6536\u53D6\u4E0D\u540C\uFF0C\u6BCF\u4E2A\u4EA7\u54C1\u8BE6\u7EC6\u9875\u90FD\u6709\u201C\u914D\u9001\u8BF4\u660E\u201D\u8BF7\u53C2\u8003\uFF0C\u8C22\u8C22\uFF01'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u4E0B\u5355\u65F6\u53EF\u4EE5\u6307\u5B9A\u9001\u8D27\u65F6\u95F4\u5417\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u53EF\u4EE5\uFF0C\u60A8\u53EF\u4EE5\u5728\u8BA2\u5355\u7559\u8A00\u91CC\u586B\u5199\u5177\u4F53\u7684\u9001\u8D27\u9700\u6C42\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u91CF\u6EE1\u8DB3\u60A8\u7684\u8981\u6C42\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u54EA\u4E9B\u5730\u533A\u652F\u6301\u8D27\u5230\u4ED8\u6B3E\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A6688\u5546\u57CE\u5DF2\u5728\u591A\u4E2A\u7701\u5E02\u5F00\u901A\u4E86\u8D27\u5230\u4ED8\u6B3E(\u5176\u5B83\u57CE\u5E02\u6B63\u9646\u7EED\u5F00\u901A)\uFF0C\u4E0D\u8FC7\uFF0C\u5404\u4E2A\u5546\u6237\u548C\u4EA7\u54C1\u7565\u6709\u5DEE\u5F02\uFF0C\u8BE6\u7EC6\u60A8\u53EF\u4EE5\u67E5\u770B\u8BE5\u4EA7\u54C1\u9875\u4E0B\u65B9\u7684\u201C\u914D\u9001\u8BF4\u660E\u201D\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u6536\u8D27\u65F6\u53D1\u73B0\u95EE\u9898\u53EF\u4EE5\u62D2\u6536\u5417\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u5728\u7B7E\u6536\u8D27\u7269\u65F6\u5982\u53D1\u73B0\u8D27\u7269\u6709\u635F\u574F\uFF0C\u8BF7\u76F4\u63A5\u62D2\u6536\u9000\u56DE\uFF0C\u76F8\u5173\u4EBA\u5458\u5C06\u4E3A\u60A8\u91CD\u65B0\u5B89\u6392\u53D1\u8D27\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u4E0B\u5355\u540E\uFF0C\u6211\u80FD\u505A\u4EC0\u4E48\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u5982\u679C\u662F\u5728\u7EBF\u652F\u4ED8\u65B9\u5F0F\uFF0C\u8BF7\u60A8\u5C3D\u5FEB\u5B8C\u6210\u4ED8\u6B3E\uFF0C\u5F85\u4ED8\u6B3E\u88AB\u786E\u8BA4\u540E\u6211\u4EEC\u4F1A\u7ACB\u5373\u4E3A\u60A8\u53D1\u8D27\u3002\u5982\u679C\u9009\u62E9\u8D27\u5230\u4ED8\u6B3E\uFF0C\u60A8\u53EF\u4EE5\u8FDB\u5165\u201C\u6211\u7684\u5E10\u6237\u201D\uFF0C\u5728\u201C\u6211\u7684\u8BA2\u5355\u201D\u4E2D\u627E\u5230\u60A8\u7684\u8BA2\u5355\uFF0C\u7136\u540E\u53EF\u968F\u65F6\u67E5\u770B\u8BA2\u5355\u5904\u7406\u72B6\u6001\uFF0C\u505A\u597D\u6536\u8D27\u51C6\u5907\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u5982\u4F55\u529E\u7406\u9000\u6B3E\uFF1F\u591A\u4E45\u9000\u56DE\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u8BF7\u5728\u7EBF\u6216\u4F7F\u7528\u7535\u8BDD\uFF084008676688\uFF09\u4E0E\u5BA2\u670D\u8054\u7CFB\uFF0C\u544A\u8BC9\u8981\u9000\u6B3E\u7684\u76F8\u5173\u4FE1\u606F\u3002\u4ECE\u53D7\u7406\u5230\u9000\u56DE\u5E10\u6237\u4E00\u822C\u9700\u89812-4\u4E2A\u5DE5\u4F5C\u65E5\u3002'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'span',
									null,
									'\u95EE\uFF1A\u5982\u4F55\u529E\u7406\u9000\u6362\u8D27\uFF1F'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u7B54\uFF1A\u5173\u4E8E\u9000\u8D27\uFF1A1\u3001\u81EA\u5BA2\u6237\u7B7E\u6536\u5546\u54C1\u4E4B\u65E5\u8D777\u65E5\u5185\uFF0C\u5546\u54C1\u5982\u6709\u8D28\u91CF\u95EE\u9898\uFF0C\u53EF\u4EE5\u9000\u8D27\uFF0C\u975E\u8D28\u91CF\u95EE\u9898\u53EA\u80FD\u8C03\u6362\u3002 2\u3001\u5957\u88C5\u5546\u54C1\u4E0D\u53EF\u90E8\u5206\u9000\u8D27\u3002\u5173\u4E8E\u6362\u8D27\uFF1A1\u3001\u81EA\u5BA2\u6237\u7B7E\u6536\u5546\u54C1\u4E4B\u65E5\u8D7715\u65E5\u5185\uFF0C\u5546\u54C1\u5982\u672A\u7ECF\u4F7F\u7528\u3001\u635F\u574F\u3001\u62C6\u88C5\uFF0C\u53EF\u4EE5\u6362\u8D27\u3002 2\u3001\u975E\u5957\u88C5\u5546\u54C1\u53EA\u80FD\u66F4\u6362\u540C\u4E00\u5546\u6237\u5546\u54C1\uFF0C\u4E0D\u63D0\u4F9B\u4E0D\u540C\u5546\u6237\u4E0D\u540C\u7C7B\u5546\u54C1\u7684\u6362\u8D27\u670D\u52A1\u3002\u5957\u88C5\u5546\u54C1\u53EF\u4EE5\u90E8\u5206\u6216\u5168\u90E8\u6362\u8D27\uFF0C\u4F46\u53EA\u80FD\u66F4\u6362\u4E0E\u539F\u5546\u54C1\u540C\u6837\u7684\u5546\u54C1\u3002 \u8BE6\u7EC6\u4FE1\u606F\u8BF7\u8054\u7CFB\u5728\u7EBF\u5BA2\u670D\u6216\u8005\uFF1A4008676688\u6216\u90AE\u7BB1\uFF1Aservice@6688.com '
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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "help.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "historyorder.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

var _src = __webpack_require__(7);

var _src2 = _interopRequireDefault(_src);

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

				_src2.default.show("用户名或密码错误");
			} else {
				var url = 'http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID=' + userID + '&password=' + password;
				fetch(url).then(function (response) {
					return response.json();
				}).then(function (res) {
					if (res instanceof Object) {
						_src2.default.show("登陆成功");
						window.location.href = '#/user';
						localStorage.setItem("userID", userID);
					} else {
						_src2.default.show("用户名或密码错误");
					}
				});
			}
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
					{ className: 'user' },
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
								_react2.default.createElement('img', { src: '/img/sina_1.jpg' })
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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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
				{ className: 'accountDetail' },
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: '/account/eyuan', activeClassName: 'clickcolor' },
					'e\u5143\u660E\u7EC6'
				),
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: '/account/yfu', activeClassName: 'clickcolor' },
					'\u9884\u4ED8\u6B3E\u660E\u7EC6'
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			window.location.href = "#/user";
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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "myaccount.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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
					_react2.default.createElement(
						'ul',
						{ className: 'my-concern' },
						_react2.default.createElement(
							'li',
							{ className: 'concern-list' },
							_react2.default.createElement(
								'div',
								{ className: 'goodsimg' },
								_react2.default.createElement('img', null)
							),
							_react2.default.createElement(
								'div',
								{ className: 'goodsdetail' },
								_react2.default.createElement(
									'span',
									{ className: 'goodsname' },
									'\u6D17\u8863\u7C89'
								),
								_react2.default.createElement(
									'span',
									{ className: 'goodsprice' },
									'13131'
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
			window.location.href = "#/user";
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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "myorder.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

var _src = __webpack_require__(7);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newaddress = function (_React$Component) {
	_inherits(Newaddress, _React$Component);

	function Newaddress(props) {
		_classCallCheck(this, Newaddress);

		var _this = _possibleConstructorReturn(this, (Newaddress.__proto__ || Object.getPrototypeOf(Newaddress)).call(this, props));

		_this.save = _this.save.bind(_this);
		_this.state = {
			data: null

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
							'a',
							{ onClick: this.save },
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
								_react2.default.createElement('input', { ref: 'name', type: 'text', placeholder: '\u8F93\u5165\u6536\u8D27\u4EBA' })
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
								_react2.default.createElement('input', { ref: 'area', type: 'text', placeholder: '\u6240\u5728\u5730\u533A' })
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
								_react2.default.createElement('input', { ref: 'phone', type: 'text', placeholder: '\u8F93\u5165\u624B\u673A\u53F7' })
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
								_react2.default.createElement('input', { ref: 'code', type: 'text', placeholder: '\u8BF7\u8F93\u5165\u90AE\u653F\u7F16\u7801' })
							)
						)
					)
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			window.location.href = "#/address";
		}
	}, {
		key: 'save',
		value: function save() {
			var name = this.refs.name.value;
			var _area = this.refs.area.value;
			var phone = this.refs.phone.value;
			var code = this.refs.code.value;
			if (name != "" && _area != "" && phone != "" && code != "") {
				var obj = { name: name, _area: _area, phone: phone, code: code };
				this.setState({
					data: obj
				});
				window.location.href = "#/address";
			} else {
				_src2.default.show("请填写完整");
			}
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
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (localStorage.getItem("address")) {
				var address = localStorage.getItem("address");
				if (this.state.data != null) {
					address += JSON.stringify(this.state.data) + "#";
					localStorage.setItem("address", address);
				}
			} else {
				var address = localStorage.getItem("address");
				if (this.state.data != null) {
					address = JSON.stringify(this.state.data) + "#";
					localStorage.setItem("address", address);
				}
			}
		}
	}]);

	return Newaddress;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Newaddress);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "newaddress.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

var _src = __webpack_require__(7);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
	_inherits(Register, _React$Component);

	function Register(props) {
		_classCallCheck(this, Register);

		var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

		_this.register = _this.register.bind(_this);
		_this.state = {};
		return _this;
	}

	_createClass(Register, [{
		key: 'register',
		value: function register() {
			if (this.refs.check.checked) {
				var userID = this.refs.username.value;
				var password = this.refs.password.value;
				var repassword = this.refs.repassword.value;
				if (userID == '' || password == '') {
					_src2.default.show("请填写完整");
				} else if (password !== repassword) {
					_src2.default.show("两次密码输入不一致");
				} else if (!/^1[34578]\d{9}$/.test(userID)) {
					_src2.default.show("手机号有误");
				} else {
					var url = 'http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID=' + userID + '&password=' + password;
					fetch(url).then(function (response) {
						return response.json();
					}).then(function (res) {
						if (res == 1) {
							_src2.default.show("注册成功");
							window.location.href = '#/user';
						} else if (res == 0) {
							_src2.default.show("用户名重名");
						} else {
							_src2.default.show("注册失败");
						}
					});
				}
			} else {
				_src2.default.show("请阅读交易条款");
			}
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
						{ className: 'user-register' },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE61B'
							),
							_react2.default.createElement('input', { ref: 'username', type: 'text', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' }),
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
							_react2.default.createElement('input', { ref: 'password', type: 'password', placeholder: '\u8BF7\u8BBE\u7F6E\u5BC6\u7801' })
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'yo-ico' },
								'\uE615'
							),
							_react2.default.createElement('input', { ref: 'repassword', type: 'password', placeholder: '\u91CD\u590D\u5BC6\u7801' })
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement('input', { className: 'gift', type: 'text', placeholder: '\u5982\u6709\u793C\u5238\u8BF7\u5728\u6B64\u8F93\u5165' })
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
							{ onClick: this.register },
							'\u6CE8\u518C'
						),
						_react2.default.createElement(
							'h4',
							null,
							_react2.default.createElement(
								'span',
								null,
								_react2.default.createElement('input', { ref: 'check', type: 'checkbox' }),
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
			window.location.href = "#/login";
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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "register.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8);

var EventPluginRegistry = __webpack_require__(63);
var EventPluginUtils = __webpack_require__(14);
var ReactErrorUtils = __webpack_require__(31);

var accumulateInto = __webpack_require__(32);
var forEachAccumulated = __webpack_require__(33);
var invariant = __webpack_require__(6);

/**
 * Internal store for event listeners
 */
var listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */
var executeDispatchesAndRelease = function (event, simulated) {
  if (event) {
    EventPluginUtils.executeDispatchesInOrder(event, simulated);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};
var executeDispatchesAndReleaseSimulated = function (e) {
  return executeDispatchesAndRelease(e, true);
};
var executeDispatchesAndReleaseTopLevel = function (e) {
  return executeDispatchesAndRelease(e, false);
};

var getDictionaryKey = function (inst) {
  // Prevents V8 performance issue:
  // https://github.com/facebook/react/pull/7232
  return '.' + inst._rootNodeID;
};

function isInteractive(tag) {
  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
}

function shouldPreventMouseEvent(name, type, props) {
  switch (name) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
      return !!(props.disabled && isInteractive(type));
    default:
      return false;
  }
}

/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
var EventPluginHub = {

  /**
   * Methods for injecting dependencies.
   */
  injection: {

    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

  },

  /**
   * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {function} listener The callback to store.
   */
  putListener: function (inst, registrationName, listener) {
    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : _prodInvariant('94', registrationName, typeof listener) : void 0;

    var key = getDictionaryKey(inst);
    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
    bankForRegistrationName[key] = listener;

    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.didPutListener) {
      PluginModule.didPutListener(inst, registrationName, listener);
    }
  },

  /**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
  getListener: function (inst, registrationName) {
    // TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
    // live here; needs to be moved to a better place soon
    var bankForRegistrationName = listenerBank[registrationName];
    if (shouldPreventMouseEvent(registrationName, inst._currentElement.type, inst._currentElement.props)) {
      return null;
    }
    var key = getDictionaryKey(inst);
    return bankForRegistrationName && bankForRegistrationName[key];
  },

  /**
   * Deletes a listener from the registration bank.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function (inst, registrationName) {
    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.willDeleteListener) {
      PluginModule.willDeleteListener(inst, registrationName);
    }

    var bankForRegistrationName = listenerBank[registrationName];
    // TODO: This should never be null -- when is it?
    if (bankForRegistrationName) {
      var key = getDictionaryKey(inst);
      delete bankForRegistrationName[key];
    }
  },

  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {object} inst The instance, which is the source of events.
   */
  deleteAllListeners: function (inst) {
    var key = getDictionaryKey(inst);
    for (var registrationName in listenerBank) {
      if (!listenerBank.hasOwnProperty(registrationName)) {
        continue;
      }

      if (!listenerBank[registrationName][key]) {
        continue;
      }

      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(inst, registrationName);
      }

      delete listenerBank[registrationName][key];
    }
  },

  /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var events;
    var plugins = EventPluginRegistry.plugins;
    for (var i = 0; i < plugins.length; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
        if (extractedEvents) {
          events = accumulateInto(events, extractedEvents);
        }
      }
    }
    return events;
  },

  /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
  enqueueEvents: function (events) {
    if (events) {
      eventQueue = accumulateInto(eventQueue, events);
    }
  },

  /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */
  processEventQueue: function (simulated) {
    // Set `eventQueue` to null before processing it so that we can tell if more
    // events get enqueued while processing.
    var processingEventQueue = eventQueue;
    eventQueue = null;
    if (simulated) {
      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
    } else {
      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
    }
    !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : _prodInvariant('95') : void 0;
    // This would be a good time to rethrow if any of the event handlers threw.
    ReactErrorUtils.rethrowCaughtError();
  },

  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function () {
    listenerBank = {};
  },

  __getListenerBank: function () {
    return listenerBank;
  }

};

module.exports = EventPluginHub;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var caughtError = null;

/**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */
function invokeGuardedCallback(name, func, a) {
  try {
    func(a);
  } catch (x) {
    if (caughtError === null) {
      caughtError = x;
    }
  }
}

var ReactErrorUtils = {
  invokeGuardedCallback: invokeGuardedCallback,

  /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */
  invokeGuardedCallbackWithCatch: invokeGuardedCallback,

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    if (caughtError) {
      var error = caughtError;
      caughtError = null;
      throw error;
    }
  }
};

if (process.env.NODE_ENV !== 'production') {
  /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');
    ReactErrorUtils.invokeGuardedCallback = function (name, func, a) {
      var boundFunc = func.bind(null, a);
      var evtType = 'react-' + name;
      fakeNode.addEventListener(evtType, boundFunc, false);
      var evt = document.createEvent('Event');
      // $FlowFixMe https://github.com/facebook/flow/issues/2336
      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);
      fakeNode.removeEventListener(evtType, boundFunc, false);
    };
  }
}

module.exports = ReactErrorUtils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(8);

var invariant = __webpack_require__(6);

/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : _prodInvariant('30') : void 0;

  if (current == null) {
    return next;
  }

  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  if (Array.isArray(current)) {
    if (Array.isArray(next)) {
      current.push.apply(current, next);
      return current;
    }
    current.push(next);
    return current;
  }

  if (Array.isArray(next)) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

module.exports = accumulateInto;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */

function forEachAccumulated(arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
}

module.exports = forEachAccumulated;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var shallowEqual = __webpack_require__(50);

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

module.exports = shallowCompare;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carheader = function (_React$Component) {
	_inherits(Carheader, _React$Component);

	function Carheader(props) {
		_classCallCheck(this, Carheader);

		var _this = _possibleConstructorReturn(this, (Carheader.__proto__ || Object.getPrototypeOf(Carheader)).call(this, props));

		_this.state = {
			title: "我的订单"
		};
		return _this;
	}

	_createClass(Carheader, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "yo-header yo-header-cart" },
				_react2.default.createElement(
					"p",
					{ className: "title" },
					"\u8D2D\u7269\u8F66"
				),
				_react2.default.createElement(
					"span",
					{ className: "affirm" },
					"\u5220\u9664"
				)
			);
		}
	}]);

	return Carheader;
}(_react2.default.Component);

exports.default = Carheader;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "cart-head.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homeheader = function (_React$Component) {
	_inherits(Homeheader, _React$Component);

	function Homeheader(props) {
		_classCallCheck(this, Homeheader);

		var _this = _possibleConstructorReturn(this, (Homeheader.__proto__ || Object.getPrototypeOf(Homeheader)).call(this, props));

		_this.state = {
			title: "我的订单"
		};
		return _this;
	}

	_createClass(Homeheader, [{
		key: "click",
		value: function click() {
			window.location.href = "#/search";
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "yo-header yo-header-h" },
				_react2.default.createElement(
					"h2",
					{ className: "title", onClick: this.click },
					_react2.default.createElement("img", { src: "/img/search.png" })
				),
				_react2.default.createElement(
					"span",
					{ className: "regret" },
					_react2.default.createElement("img", { className: "img-left", src: "/img/logo.png" })
				),
				_react2.default.createElement(
					"span",
					{ className: "affirm" },
					_react2.default.createElement(
						"a",
						{ href: "#/search" },
						_react2.default.createElement("img", { src: "/img/Catalog.png" })
					)
				)
			);
		}
	}]);

	return Homeheader;
}(_react2.default.Component);

exports.default = Homeheader;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "home-head.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _home = __webpack_require__(16);

var _home2 = _interopRequireDefault(_home);

var _user = __webpack_require__(19);

var _user2 = _interopRequireDefault(_user);

var _cart = __webpack_require__(15);

var _cart2 = _interopRequireDefault(_cart);

var _search = __webpack_require__(17);

var _search2 = _interopRequireDefault(_search);

var _service = __webpack_require__(18);

var _service2 = _interopRequireDefault(_service);

var _userHead = __webpack_require__(9);

var _userHead2 = _interopRequireDefault(_userHead);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//class Index extends React.Component({})


var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.state = {
			title: '首页'
		};
		return _this;
	}

	_createClass(Index, [{
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
					this.props.key1
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
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			var com = this.props.routes[1].com;
			this.props.onChange({
				type: 'SETCOM',
				com: com
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var com = this.props.routes[1].com;
			this.props.onChange({
				type: 'SETCOM',
				com: com
			});
		}
	}]);

	return Index;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Index);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _src = __webpack_require__(12);

var _src2 = _interopRequireDefault(_src);

var _fetch = __webpack_require__(13);

var _fetch2 = _interopRequireDefault(_fetch);

var _reactRedux = __webpack_require__(3);

var _reactRouter = __webpack_require__(1);

var _store = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var kindList = function (_React$Component) {
	_inherits(kindList, _React$Component);

	function kindList(props) {
		_classCallCheck(this, kindList);

		var _this = _possibleConstructorReturn(this, (kindList.__proto__ || Object.getPrototypeOf(kindList)).call(this, props));

		_this.state = {
			title: "列表",
			filterlist: '',
			str: ''
		};
		return _this;
	}

	_createClass(kindList, [{
		key: "filter",
		value: function filter(str) {
			var strArry = Array(Object(str))[0];
			console.log(strArry);
			var strlen = strArry.length;
			var numlist = [];
			(0, _fetch2.default)('./json/list.json', function (res) {
				var data = eval(res);
				console.log(data);
				if (str !== '') {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var item = _step.value;

							var itemArry = Array(Object(item.Caption))[0];
							var num = 0;
							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = strArry[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var strItem = _step2.value;
									var _iteratorNormalCompletion3 = true;
									var _didIteratorError3 = false;
									var _iteratorError3 = undefined;

									try {
										for (var _iterator3 = itemArry[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
											var dataitem = _step3.value;

											if (dataitem == strItem) {
												num++;
												break;
											}
										}
									} catch (err) {
										_didIteratorError3 = true;
										_iteratorError3 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion3 && _iterator3.return) {
												_iterator3.return();
											}
										} finally {
											if (_didIteratorError3) {
												throw _iteratorError3;
											}
										}
									}
								}
							} catch (err) {
								_didIteratorError2 = true;
								_iteratorError2 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion2 && _iterator2.return) {
										_iterator2.return();
									}
								} finally {
									if (_didIteratorError2) {
										throw _iteratorError2;
									}
								}
							}

							if (num == strlen) {
								numlist.push(item);
								console.log(numlist);
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					if (numlist.length > 0) {
						var flist = numlist.map(function (val) {
							return _react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(_src2.default.LazyImage, { className: "goodsImg", src: val.goodsImg }),
								_react2.default.createElement(
									"div",
									{ className: "goodsPrice" },
									_react2.default.createElement(
										"span",
										null,
										val.Price
									),
									_react2.default.createElement(_src2.default.LazyImage, { src: "http://m.6688.com/img/search/shopcar.jpg" })
								)
							);
						});
						this.setState({
							filterlist: flist
						});
					} else {
						alert("搜索结果为空");
					}
				} else {
					var _flist = data.map(function (val) {
						return _react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(_src2.default.LazyImage, { className: "goodsImg", src: val.goodsImg }),
							_react2.default.createElement(
								"p",
								null,
								val.catalogName
							),
							_react2.default.createElement(
								"div",
								{ className: "goodsPrice" },
								_react2.default.createElement(
									"span",
									null,
									val.Price
								),
								_react2.default.createElement(_src2.default.LazyImage, { src: "http://m.6688.com/img/search/shopcar.jpg" })
							)
						);
					});
					this.setState({
						filterlist: _flist
					});
				}
			}.bind(this));
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "list" },
				_react2.default.createElement(
					"div",
					{ className: "list_header" },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: "/home" },
						_react2.default.createElement("img", { className: "gohome", src: "http://m.6688.com/img/search/home.png" })
					),
					_react2.default.createElement(
						"div",
						{ className: "list_search" },
						_react2.default.createElement("input", { type: "text", onChange: this.valChange.bind(this) }),
						_react2.default.createElement(
							"i",
							{ className: "yo-ico", onClick: this.newFilter.bind(this) },
							"\uE502"
						)
					),
					_react2.default.createElement(
						"span",
						{ onClick: this.newFilter.bind(this) },
						"\u786E\u5B9A"
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "filter_list" },
					_react2.default.createElement(
						_src2.default,
						{ extraClass: "yo-scroller yo-scroller-fullscreen" },
						_react2.default.createElement(
							"ul",
							null,
							this.state.filterlist
						)
					)
				)
			);
		}
	}, {
		key: "valChange",
		value: function valChange(e) {
			this.setState({
				str: e.target.value
			});
		}
	}, {
		key: "newFilter",
		value: function newFilter() {
			this.filter(this.state.str);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.filter("太");
			//		this.setState({
			//			str:this.props
			//		})
			//		console.log(this.props.router)
		}
	}]);

	return kindList;
}(_react2.default.Component);

exports.default = kindList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "list.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchheader = function (_React$Component) {
	_inherits(Searchheader, _React$Component);

	function Searchheader(props) {
		_classCallCheck(this, Searchheader);

		var _this = _possibleConstructorReturn(this, (Searchheader.__proto__ || Object.getPrototypeOf(Searchheader)).call(this, props));

		_this.state = {
			title: "我的订单"
		};
		return _this;
	}

	_createClass(Searchheader, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "yo-header yo-header-s" },
				_react2.default.createElement(
					"p",
					{ className: "regret" },
					_react2.default.createElement("img", { src: "/img/search.png" }),
					_react2.default.createElement("input", { type: "text", placeholder: "\u641C\u7D22" })
				),
				_react2.default.createElement(
					"span",
					{ className: "affirm" },
					"\u53D6\u6D88"
				)
			);
		}
	}]);

	return Searchheader;
}(_react2.default.Component);

exports.default = Searchheader;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "search-head.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Serverheader = function (_React$Component) {
	_inherits(Serverheader, _React$Component);

	function Serverheader(props) {
		_classCallCheck(this, Serverheader);

		var _this = _possibleConstructorReturn(this, (Serverheader.__proto__ || Object.getPrototypeOf(Serverheader)).call(this, props));

		_this.state = {
			title: "我的订单"
		};
		return _this;
	}

	_createClass(Serverheader, [{
		key: "back",
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "yo-header yo-header-c" },
				_react2.default.createElement(
					"p",
					{ className: "title" },
					"\u5728\u7EBF\u5BA2\u670D"
				),
				_react2.default.createElement(
					"span",
					{ className: "regret yo-ico", onClick: this.back },
					"\uE639"
				)
			);
		}
	}]);

	return Serverheader;
}(_react2.default.Component);

exports.default = Serverheader;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "server-head.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

var EditAddress = function (_React$Component) {
	_inherits(EditAddress, _React$Component);

	function EditAddress(props) {
		_classCallCheck(this, EditAddress);

		var _this = _possibleConstructorReturn(this, (EditAddress.__proto__ || Object.getPrototypeOf(EditAddress)).call(this, props));

		_this.save = _this.save.bind(_this);
		_this.state = {
			arr: [],
			_arr: []
		};
		return _this;
	}

	_createClass(EditAddress, [{
		key: 'render',
		value: function render() {
			var rr = [];
			this.state.arr.map(function (item) {
				rr.push(_react2.default.createElement(
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
							_react2.default.createElement('input', { ref: 'name', type: 'text', defaultValue: item.name, placeholder: '\u8F93\u5165\u6536\u8D27\u4EBA' })
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
							_react2.default.createElement('input', { type: 'text', ref: '_area', defaultValue: item._area, placeholder: '\u6240\u5728\u5730\u533A' })
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
							_react2.default.createElement('input', { type: 'text', ref: 'phone', defaultValue: item.phone, placeholder: '\u8F93\u5165\u624B\u673A\u53F7' })
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
							_react2.default.createElement('input', { type: 'text', ref: 'code', defaultValue: item.code, placeholder: '\u8BF7\u8F93\u5165\u90AE\u653F\u7F16\u7801' })
						)
					)
				));
			});
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
							{ onClick: this.save },
							'\u4FDD\u5B58'
						)
					)
				),
				_react2.default.createElement(
					'section',
					null,
					rr
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			_reactRouter.browserHistory.goBack();
		}
	}, {
		key: 'save',
		value: function save() {
			var name = this.refs.name.value;
			var _area = this.refs._area.value;
			var phone = this.refs.phone.value;
			var code = this.refs.code.value;
			if (name != "" && _area != "" && phone != "" && code != "") {
				var obj = { name: name, _area: _area, phone: phone, code: code };
				this.state._arr[this.props.params.type];
				var address = localStorage.getItem("address").split("#");
				var ar = [];
				address.map(function (item) {
					if (item != "") {
						ar.push(item);
					}
				});
				ar[this.props.params.type] = JSON.stringify(obj);
				var str = "";
				ar.map(function (item) {
					str += item + "#";
				});
				localStorage.setItem("address", str);
				window.location.href = "#/address";
			} else {
				Toast.show("请输入完整信息");
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var address = localStorage.getItem("address");
			var list = [];
			if (address != null) {
				address.split("#").map(function (item) {
					if (item != "null" && item != "") {
						list.push(JSON.parse(item));
					}
				});
			}
			this.setState({
				arr: [list[this.props.params.type]],
				_arr: list
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = '编辑地址';
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return EditAddress;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(EditAddress);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "editAddress.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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
							'\u786E\u5B9A'
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

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "forget.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

var _src = __webpack_require__(7);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Setup = function (_React$Component) {
	_inherits(Setup, _React$Component);

	function Setup(props) {
		_classCallCheck(this, Setup);

		var _this = _possibleConstructorReturn(this, (Setup.__proto__ || Object.getPrototypeOf(Setup)).call(this, props));

		_this.state = {
			title: "购物车"
		};
		return _this;
	}

	_createClass(Setup, [{
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
					{ className: 'setup' },
					_react2.default.createElement(
						'ul',
						{ className: 'user-setup' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/suggestion' },
								_react2.default.createElement('img', { src: '/img/yijian.png' }),
								'\u610F\u89C1\u53CD\u9988',
								_react2.default.createElement(
									'span',
									{ className: 'yo-ico' },
									'\uE608'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ onClick: this.genxin },
								_react2.default.createElement('img', { src: '/img/genxin.png' }),
								'\u68C0\u6D4B\u66F4\u65B0',
								_react2.default.createElement(
									'span',
									{ className: 'yo-ico' },
									'\uE608'
								),
								_react2.default.createElement(
									'span',
									{ className: 'genxin' },
									'\u5F53\u524D\u5DF2\u662F\u6700\u65B0\u7248\u672C'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								null,
								_react2.default.createElement('img', { src: '/img/pingfen.png' }),
								'\u7ED9\u6211\u8BC4\u5206',
								_react2.default.createElement(
									'span',
									{ className: 'yo-ico' },
									'\uE608'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								null,
								_react2.default.createElement('img', { src: '/img/huancun.png' }),
								'\u6E05\u9664\u7F13\u5B58',
								_react2.default.createElement(
									'span',
									{ className: 'yo-ico' },
									'\uE608'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								null,
								_react2.default.createElement('img', { src: '/img/kefu.png' }),
								'\u5BA2\u670D\u70ED\u7EBF',
								_react2.default.createElement(
									'span',
									{ className: 'yo-ico' },
									'\uE608'
								),
								_react2.default.createElement(
									'span',
									{ className: 'genxin' },
									'400-867-6688'
								)
							)
						)
					),
					_react2.default.createElement(
						'button',
						{ id: 'quit', onClick: this.quit },
						'\u9000\u51FA\u767B\u5F55'
					)
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			window.location.href = "#/user";
		}
	}, {
		key: 'quit',
		value: function quit() {
			localStorage.removeItem("userID");
			window.location.href = "#/user";
		}
	}, {
		key: 'genxin',
		value: function genxin() {
			setTimeout(function () {
				_src2.default.show("已是最新版本");
			}, 2000);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var title = "设置";
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return Setup;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Setup);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "setup.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

var _src = __webpack_require__(7);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestion = function (_React$Component) {
	_inherits(Suggestion, _React$Component);

	function Suggestion(props) {
		_classCallCheck(this, Suggestion);

		var _this = _possibleConstructorReturn(this, (Suggestion.__proto__ || Object.getPrototypeOf(Suggestion)).call(this, props));

		_this.state = {
			title: "我的订单"
		};
		return _this;
	}

	_createClass(Suggestion, [{
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
							'a',
							{ className: 'tijiao', onClick: this.sub },
							'\u63D0\u4EA4'
						)
					)
				),
				_react2.default.createElement(
					'section',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'suggestion' },
						_react2.default.createElement(
							'div',
							{ className: 'left' },
							_react2.default.createElement(
								'span',
								null,
								'\u53CD\u9988\u610F\u89C1:'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'right' },
							_react2.default.createElement('textarea', { placeholder: '\u60A8\u7684\u5B9D\u8D35\u610F\u89C1\u548C\u5EFA\u8BAE\u662F\u6211\u4EEC\u4E0D\u65AD\u8FDB\u6B65\u7684\u52A8\u529B', className: 'text' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'lianxi' },
						_react2.default.createElement(
							'b',
							null,
							'\u8054\u7CFB\u65B9\u5F0F:'
						),
						_react2.default.createElement('input', { className: 'xinxi', placeholder: '\u60A8\u7684\u59D3\u540D\u3001\u624B\u673A\u53F7\u3001\u90AE\u7BB1\u7B49' })
					),
					_react2.default.createElement(
						'p',
						{ className: 'wenxin' },
						'\u6E29\u99A8\u63D0\u793A:\u5982\u679C\u51FA\u73B0\u8BA2\u7968\u3001\u5546\u54C1\u3001\u552E\u8D27\u7B49\u65B9\u9762\u7684\u95EE\u9898\u8BF7\u62E8\u6253\u5BA2\u670D\u7535\u8BDD400456987\u3002\u6211\u4EEC\u7684\u5BA2\u670D\u4F1A\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u670D\u52A1,\u611F\u8C22\u60A8\u5BF96688\u7F51\u7684\u652F\u6301'
					)
				)
			);
		}
	}, {
		key: 'back',
		value: function back() {
			window.location.href = "#/setup";
		}
	}, {
		key: 'sub',
		value: function sub() {
			setTimeout(function () {
				_src2.default.show("反馈成功", 2000);
			}, 2000);
			setTimeout(function () {
				window.location.href = "#/setup";
			}, 4000);
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

	return Suggestion;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(Suggestion);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "suggestion.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
var keyOf = function keyOf(oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};

module.exports = keyOf;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function () {
    var ALLOWANCEAngle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.57;
    var ALLOWANCEDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    return {
        handleData: function handleData(_ref, children) {
            var loop = _ref.loop,
                pageNow = _ref.pageNow;

            var newChildren = _react2.default.Children.toArray(children);
            if (loop) {
                var len = children.length;
                var lastfakeDomStyle = {
                    key: 0
                };
                var firstFakeDomStyle = {
                    key: -1
                };
                if (children[0].type === 'li') {
                    lastfakeDomStyle.className = children[len - 1].props.className ? children[len - 1].props.className + ' extra-item' : 'extra-item';
                } else {
                    lastfakeDomStyle.index = len;
                    lastfakeDomStyle.extraClass = children[len - 1].props.extraClass ? children[len - 1].props.extraClass + ' extra-item' : 'extra-item';
                    firstFakeDomStyle.index = 1;
                }
                var header = _react2.default.cloneElement(children[len - 1], lastfakeDomStyle);
                var footer = _react2.default.cloneElement(children[0], firstFakeDomStyle);
                newChildren.unshift(header);
                newChildren.push(footer);
            }
            return newChildren;
        },
        touchstart: function touchstart() {},
        touchmove: function touchmove(_ref2) {
            var touchstartLocation = _ref2.touchstartLocation,
                touchmoveLocation = _ref2.touchmoveLocation,
                pageNow = _ref2.pageNow,
                containerDOM = _ref2.containerDOM,
                width = _ref2.width;

            var translateX = (pageNow - 1) * width + touchstartLocation[0] - touchmoveLocation[0];
            this._addCss({
                dom: containerDOM,
                speed: 0,
                translateX: -translateX,
                reset: true,
                width: width
            });
        },
        touchend: function touchend(aniObj) {
            var touchstartLocation = aniObj.touchstartLocation,
                touchendLocation = aniObj.touchendLocation,
                pageNow = aniObj.pageNow;

            var distanceX = touchendLocation[0] - touchstartLocation[0];
            var distanceY = touchendLocation[1] - touchstartLocation[1];
            var tan = Math.abs(distanceX) / Math.abs(distanceY);
            var newpageNow = pageNow;
            if (Math.abs(distanceX) > ALLOWANCEDistance && tan > ALLOWANCEAngle) {
                newpageNow = distanceX > 0 ? pageNow - 1 : pageNow + 1;
            } else {
                newpageNow = pageNow;
            }
            return this.checkAni(aniObj, newpageNow);
        },
        checkAni: function checkAni(aniObj, pageNow) {
            var _this = this;

            var pagesNum = aniObj.pagesNum,
                speed = aniObj.speed,
                containerDOM = aniObj.containerDOM,
                loop = aniObj.loop,
                aniSpeed = aniObj.aniSpeed,
                width = aniObj.width;

            if (this.moving) window.clearInterval(this.moving);
            var translateX = width * (1 - pageNow);
            var newpageNow = pageNow;
            if (pageNow < 1 || pageNow > pagesNum) {
                if (loop) {
                    // console.log(`checkAni 延迟处理${pageNow}`);
                    this.moving = window.setTimeout(function () {
                        var translate = 0;
                        if (pageNow === 0) {
                            translate = width * (1 - pagesNum);
                        }
                        _this._addCss({
                            dom: containerDOM,
                            reset: true,
                            translateX: translate,
                            width: width
                        });
                        _this.moving = null;
                    }, (speed + aniSpeed) * 1000);
                    newpageNow = pageNow === 0 ? pagesNum : 1;
                } else {
                    newpageNow = pageNow < 1 ? 1 : pagesNum;
                    translateX = width * (1 - newpageNow);
                }
            }
            this._addCss({
                dom: containerDOM,
                reset: false,
                speed: speed,
                translateX: translateX,
                width: width
            });
            return newpageNow;
        },
        next: function next(aniObj) {
            var pageNow = aniObj.pageNow;

            var pageNext = pageNow + 1;
            return this.checkAni(aniObj, pageNext);
        },
        prev: function prev(aniObj) {
            var pageNow = aniObj.pageNow,
                containerDOM = aniObj.containerDOM,
                speed = aniObj.speed,
                width = aniObj.width;

            var pageNext = pageNow - 1;
            var translateX = width * (1 - pageNext);
            this._addCss({
                dom: containerDOM,
                speed: speed,
                translateX: translateX
            });
            return this.checkAni(aniObj, pageNext);
        },
        arrive: function arrive(aniObj, num, isAni) {
            if (num >= 1 && num <= aniObj.pagesNum) {
                var translateX = (1 - num) * aniObj.width;
                this._addCss({
                    dom: aniObj.containerDOM,
                    speed: 0.1,
                    translateX: translateX,
                    reset: !isAni,
                    width: aniObj.width
                });
            } else {
                console.log('\u4F20\u5165carousel\u7EC4\u5EFA\u7684arrive\u65B9\u6CD5\u7684\u9875\u9762\u4E3A' + num + ',\u8BE5\u503C\u4E0D\u5408\u6CD5');
            }
            return num;
        },
        _addCss: function _addCss(_ref3) {
            var dom = _ref3.dom,
                _ref3$translateX = _ref3.translateX,
                translateX = _ref3$translateX === undefined ? 0 : _ref3$translateX,
                reset = _ref3.reset,
                ani = _objectWithoutProperties(_ref3, ['dom', 'translateX', 'reset']);

            // 此处为Dom操作
            if (reset) {
                dom.style.webkitTransition = 'none';
                dom.style.transition = 'none';
            } else {
                dom.style.webkitTransition = '';
                dom.style.transition = '';
            }
            dom.style.webkitTransform = 'translate(' + translateX + 'px, 0) translateZ(0)';
            dom.style.transform = 'translate(' + translateX + 'px, 0) translateZ(0)';
        }
    };
};

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "aniScrollx.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(35);

__webpack_require__(55);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsShallowCompare = __webpack_require__(61);

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component Carousel.CarouselItem
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description Carousel组件内部的Item组件，和普通的dom节点相比增加了懒加载图片功能。也可以使用`onTap`给Item绑定tap事件回调。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 你可以通过Carousel.CarouselItem来使用这个组件，或者引用`yo3/component/carousel/src/carouselItem`的js模块来使用。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ** 注意：`CarouselItem`不能和`Touchable`一起使用，请使用它的`onTap`属性来绑定事件回调。 **
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ALLOWANCE = 1;
var LOADED = 1;
var UNLOAD = 0;
var FAIL = 2;

var CarouselItem = function (_Component) {
    _inherits(CarouselItem, _Component);

    function CarouselItem(props) {
        _classCallCheck(this, CarouselItem);

        var _this = _possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));

        if (props.img) {
            _this.state = {
                img: 0
            };
        }
        _this.handleTap = _this.handleTap.bind(_this);
        _this.hasUnmount = false;
        return _this;
    }

    _createClass(CarouselItem, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.lazyload(this.props);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            var propsChange = (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
            var contextChange = this.context.currentPage !== nextContext.currentPage || this.context.pagesNum !== nextContext.pagesNum;
            return propsChange || contextChange;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState, nextContext) {
            this.lazyload(nextContext.currentPage);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.hasUnmount = true;
        }
    }, {
        key: 'handleTap',
        value: function handleTap(e) {
            this.props.onTap(e);
        }
    }, {
        key: 'loadImg',
        value: function loadImg() {
            var _this2 = this;

            if (!this.props.img) {
                return;
            }
            this.imgNode = new Image();
            this.imgNode.onload = function () {
                var imgState = void 0;
                imgState = 1;
                if (_this2.props.checkImgFun && !_this2.props.checkImgFun(_this2.imgNode)) {
                    imgState = 2;
                }
                if (!_this2.hasUnmount) {
                    _this2.setState({
                        img: imgState
                    });
                }
            };
            this.imgNode.onerror = function () {
                if (!_this2.hasUnmount) {
                    _this2.setState({
                        img: 2
                    });
                }
            };
            this.imgNode.src = this.props.img;
        }
    }, {
        key: 'lazyload',
        value: function lazyload(currentPage) {
            if (this.state.img) {
                return;
            }
            if (!this.props.lazyload) {
                this.loadImg();
            } else {
                if (Math.abs(currentPage - this.props.index) <= ALLOWANCE || this.props.index === 1 || this.props.index === this.context.pagesNum) {
                    this.loadImg();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var img = null;
            var classList = void 0;
            var activeClass = {};
            if (this.props.img) {
                switch (this.state.img) {
                    case LOADED:
                        img = _react2.default.createElement('img', { alt: '', src: this.props.img, className: 'img', draggable: 'false' });
                        break;
                    case FAIL:
                        img = _react2.default.createElement('img', { alt: '', src: this.props.errorImg, className: 'img', draggable: 'false' });
                        break;
                    case UNLOAD:
                    default:
                        img = this.props.loadingEle;
                        break;
                }
            }
            activeClass[this.props.activeClass] = this.context.currentPage === this.props.index;
            if (this.props.extraClass) {
                activeClass[this.props.extraClass] = true;
            }
            classList = (0, _classnames2.default)('item', activeClass);
            return _react2.default.createElement(
                'li',
                { className: classList, style: this.props.style, onTouchTap: this.handleTap },
                img
            );
        }
    }]);

    return CarouselItem;
}(_react.Component);

CarouselItem.propTypes = {
    /**
     * @type String
     * @property img
     * @description 图片地址。
     */
    img: _react.PropTypes.string,
    /**
     * @type String
     * @property errorImg
     * @description 图片加载失败时的替换图片。
     */
    errorImg: _react.PropTypes.string,
    /**
     * @type Function
     * @property checkImgFun
     * @description 目标图片onload时触发进行判断的函数。
     * @param 图片实例
     */
    checkImgFun: _react.PropTypes.func,
    /**
     * @type Function
     * @property onTap
     * @param {e} 事件对象，传入组件数据
     * @description item点击事件处理函数。
     */
    onTap: _react.PropTypes.func,
    /**
     * @property extraClass
     * @type String
     * @description 为组件根节点提供额外的class。
     */
    extraClass: _react.PropTypes.string,
    /**
     * @type Element
     * @property loadingEle
     * @description 图片加载时的loading Element。
     */
    loadingEle: _react.PropTypes.element,
    /**
     * @type Bool
     * @property lazyload
     * @description 是否需要图片懒加载。默认值为true,当前图片的前后两个节点图片被加载。
     */
    lazyload: _react.PropTypes.bool,
    /**
     * item是当前展示item的样式名
     * @type String
     * @property activeClass
     * @description item是当前展示item的样式名，默认值为'on'。
     */
    activeClass: _react.PropTypes.string,
    index: _react.PropTypes.number,
    style: _react.PropTypes.object
};
CarouselItem.defaultProps = {
    errorImg: '//s.qunarzz.com/mobile_search_touch/intention-search-h5/loading.gif',
    loadingEle: null,
    lazyload: true,
    activeClass: 'on',
    onTap: function onTap() {}
};
CarouselItem.contextTypes = {
    currentPage: _react2.default.PropTypes.number.isRequired,
    pagesNum: _react2.default.PropTypes.number.isRequired
};
exports.default = CarouselItem;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "carouselItem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(35);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _aniScrollx = __webpack_require__(51);

var _aniScrollx2 = _interopRequireDefault(_aniScrollx);

var _reactAddonsPureRenderMixin = __webpack_require__(60);

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _carouselItem = __webpack_require__(52);

var _carouselItem2 = _interopRequireDefault(_carouselItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component Carousel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 走马灯组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 支持用户自定义动画对象，支持用户自定义css动画
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 支持用户自定义子节点
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 默认动画：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * + 横向滚动动画
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * + 为当前页加上on的类名，因此可以附加css动画效果。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 默认走马灯子节点：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * + 支持图片懒加载
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * + 图片加载失败的替换图模板
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 查看Demo获得实例：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 使用自定义动画实现图片查看器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 内置动画配合css动画效果
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 使用注意：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - `Carousel`组件的父节点需要有宽度，`Carousel`组件默认宽度为‘100%’，如果父节点没有宽度会导致默认滚动动画失效。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - `Carousel`组件不能直接嵌套在`Touchable`组件中，请使用`CarouselItem`的`onTap`来给它的Item绑定tap事件回调，
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 或者用`Touchable`组件包裹Item。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author eva.li
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./carousel.md}{instruUrl: carousel/index.html?hideIcon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Dots = function Dots(props) {
    var liNodes = [];
    for (var i = 0; i < props.num; i++) {
        liNodes.push(_react2.default.createElement('li', { key: i, className: props.page === i + 1 ? 'on' : '' }));
    }
    return _react2.default.createElement(
        'ul',
        { className: 'index' },
        liNodes
    );
};
Dots.propTypes = {
    num: _react.PropTypes.number,
    page: _react.PropTypes.number
};

var DEFAULTANI = (0, _aniScrollx2.default)();

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.state = {
            page: 1
        };
        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        _this.dragDom = null;
        _this.dragEvt = null;
        return _this;
    }

    _createClass(Carousel, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                currentPage: this.state.page,
                pagesNum: this.props.children.length
            };
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.ani = Object.assign({}, this.props.aniObj || DEFAULTANI);
            this.aniObj = {
                delay: this.props.delay,
                speed: this.props.speed,
                pageNow: 1,
                pagesNum: this.props.children.length,
                aniSpeed: this.props.aniSpeed,
                loop: this.props.loop,
                operationTimer: 0,
                touchstartLocation: {},
                touchendLocation: {}
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.aniObj.stageDOM = this.widgetDOM.parentNode;
            this.aniObj.width = this.widgetDOM.clientWidth;
            this.aniObj.containerDOM = this.widgetDOM.querySelector('.cont');
            this.arrive(this.props.defaultPage, false);
            this.launchAuto();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.aniObj.delay = props.delay;
            this.aniObj.speed = props.speed;
            this.aniObj.pagesNum = props.children.length;
            this.aniObj.aniSpeed = props.aniSpeed;
            this.aniObj.loop = props.loop;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextState.page !== this.state.page) {
                this.props.beforeChange(nextState.page);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // this.aniObj.stageWidth = this.widgetDOM.clientWidth;
            if (prevState.page !== this.state.page) {
                this.props.afterChange(this.state.page);
            }
            if (prevProps.autoplay !== this.props.autoplay || prevProps.loop !== this.props.loop) {
                this.pause();
                this.play();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.pause();
        }

        /**
         * @description 到达方法
         * @method arrive
         * @param  {number} num 到达的页数
         * @param {isAni} boolean 是否需要动画
         */

    }, {
        key: 'arrive',
        value: function arrive(num) {
            var isAni = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.aniObj.operationTimer = num - 1;
            this.pause();
            if (num > 0 && num <= _react2.default.Children.count(this.props.children)) {
                var page = this.ani.arrive(this.aniObj, num, isAni);
                this.setState({
                    page: page
                });
                this.aniObj.pageNow = page;
            }
            this.play();
        }
    }, {
        key: 'launchAuto',
        value: function launchAuto() {
            var _this2 = this;

            if (this.autoplay) {
                window.clearInterval(this.autoplay);
            }
            if (this.props.autoplay && (this.props.loop || this.aniObj.pageNow < this.aniObj.pagesNum)) {
                this.autoplay = window.setInterval(function () {
                    _this2.next();
                }, this.props.delay * 1000);
            }
        }
    }, {
        key: 'format',
        value: function format(children) {
            var childrenList = _react2.default.Children.map(children, function (childElement, index) {
                return _react2.default.cloneElement(childElement, {
                    index: index + 1
                });
            });
            return this.ani.handleData(this.aniObj, childrenList);
        }

        // getEndX(distanceX) {
        //     let pageNow = this.aniObj.pageNow;
        //     if (Math.abs(distanceX) < 40) {
        //         return -(pageNow - 1);
        //     }
        //     if (distanceX > 0) {
        //         pageNow = pageNow - 2;
        //         this.aniObj.operationTimer --;
        //     } else {
        //         this.aniObj.operationTimer ++;
        //     }
        //     return -pageNow;
        // }
        /**
         * @method play
         * @description 播放动画
         */

    }, {
        key: 'play',
        value: function play() {
            this.launchAuto();
        }

        /**
         * @method pause
         * @description 暂停动画
         */

    }, {
        key: 'pause',
        value: function pause() {
            if (this.autoplay) {
                window.clearInterval(this.autoplay);
            }
        }

        /**
         * @method prev
         * @description 播放上一页
         */

    }, {
        key: 'prev',
        value: function prev() {
            this.aniObj.operationTimer--;
            var page = this.ani.prev(this.aniObj);
            this.setState({ page: page });
            this.aniObj.pageNow = page;
        }

        /**
         * @method next
         * @description 播放下一页
         */

    }, {
        key: 'next',
        value: function next() {
            this.aniObj.operationTimer++;
            var page = this.ani.next(this.aniObj);
            this.setState({ page: page });
            this.aniObj.pageNow = page;
            if (page >= this.aniObj.pagesNum && !this.props.loop) {
                this.pause();
            }
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            e.preventDefault();
            // e.stopPropagation();
            this.pause();
            this.aniObj.touchstartList = e.touches[0];
            this.aniObj.touchstartLocation = [e.touches[0].clientX, e.touches[0].clientY];
            this.ani.touchstart(this.aniObj);
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            e.preventDefault();
            // e.stopPropagation();
            this.aniObj.touchmoveList = e.touches[0];
            this.aniObj.touchmoveLocation = [e.touches[0].clientX, e.touches[0].clientY];

            this.ani.touchmove(this.aniObj);
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            e.preventDefault();
            // e.stopPropagation();
            this.aniObj.touchendList = e.touches.length > 0 ? e.touches[0] : this.aniObj.touchmoveList;
            if (!this.aniObj.touchendList) {
                return;
            }
            this.aniObj.touchendLocation = [this.aniObj.touchendList.clientX, this.aniObj.touchendList.clientY];
            this.aniObj.pageNow = this.ani.touchend(this.aniObj);
            this.setState({
                page: this.aniObj.pageNow
            });
            this.play();
            this.clearTouchList();
        }
    }, {
        key: 'handleTouchCancle',
        value: function handleTouchCancle(e) {
            e.preventDefault();
            // e.stopPropagation();
            if (this.ani.touchcancel) {
                this.ani.touchcancel(this.aniObj);
                return;
            }
            this.aniObj.touchendList = this.aniObj.touchmoveList;
            this.aniObj.touchendLocation = [this.aniObj.touchendList.clientX, this.aniObj.touchendList.clientY];
            this.aniObj.pageNow = this.ani.touchend(this.aniObj);
            this.setState({
                page: this.aniObj.pageNow
            });
            this.clearTouchList();
        }
    }, {
        key: 'clearTouchList',
        value: function clearTouchList() {
            Object.assign(this.aniObj, {
                touchstartList: [],
                touchmoveList: [],
                touchstartLocation: [],
                touchmoveLocation: [],
                touchendLocation: []
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var classList = ['yo-carousel'];
            if (this.props.extraClass != null) {
                classList.push(this.props.extraClass);
            }
            var children = this.format(this.props.children);
            return _react2.default.createElement(
                'div',
                {
                    className: classList.join(' '),
                    ref: function ref(node) {
                        if (node) {
                            _this3.widgetDOM = node;
                        }
                    },
                    onTouchStart: function onTouchStart(evt) {
                        _this3.handleTouchStart(evt);
                    },
                    onTouchMove: function onTouchMove(evt) {
                        _this3.handleTouchMove(evt);
                    },
                    onTouchEnd: function onTouchEnd(evt) {
                        _this3.handleTouchEnd(evt);
                    },
                    onTouchCancel: function onTouchCancel(evt) {
                        // this.dragEvt.dragCancel(evt)
                        _this3.handleTouchCancle(evt);
                    }
                },
                _react2.default.createElement(
                    'ul',
                    { className: 'cont' },
                    children
                ),
                this.props.dots ? _react2.default.createElement(Dots, { num: this.aniObj.pagesNum, page: this.state.page }) : ''
            );
        }
    }]);

    return Carousel;
}(_react.Component);

Carousel.propTypes = {
    /**
     * @property dots
     * @type Bool
     * @default true
     * @description 是否使用默认坐标展示，详细可以查看demo基础用法展示。
     */
    dots: _react.PropTypes.bool,
    /**
     * @property autoplay
     * @type Bool
     * @default true
     * @description 是否自动换页。
     */
    autoplay: _react.PropTypes.bool,
    /**
     * @property loop
     * @type Bool
     * @default true
     * @description 是否循环 循环防范受动画影响，因此循环的具体方案由动画对象提供。
     */
    loop: _react.PropTypes.bool,
    /**
     * @property beforeChange
     * @type Function
     * @param {num} 变化后页面索引
     * @description 页面切换前提供的回调函数，索引值在carousel.children中设置从1开始。
     */
    beforeChange: _react.PropTypes.func,
    /**
     * @property afterChange
     * @type Function
     * @param {num} 变化后页面索引
     * @description 页面切换后提供的回调函数，索引值在carousel.children中设置从1开始。
     */
    afterChange: _react.PropTypes.func,
    /**
     * @property extraClass
     * @type String
     * @description 为组件根节点提供额外的class。
     */
    extraClass: _react.PropTypes.string,
    /**
     * @property delay
     * @type Number
     * @description 自动播放时动画间隔，单位为s，因动画的实现方式而不同。
     */
    delay: _react.PropTypes.number,
    /**
     * @property speed
     * @type Number
     * @description 动画播放速度，单位为s,因动画的实现方式而不同。
     */
    speed: _react.PropTypes.number,
    /**
     * @property defaultPage
     * @type Number
     * @description 组件渲染时起始页面。
     */
    defaultPage: _react.PropTypes.number,
    /**
     * @property aniSpeed
     * @type Number
     * @description 如果使用css动画，该值为动画播放时间，用于在滚动循环时计算动画时机。
     */
    aniSpeed: _react.PropTypes.number,
    /**
     * @property aniObj
     * @type Object
     * @description 自定义动画对象，自定义动画需要提供以下方法。
     *
     * - handleData（aniObj, children）用于组件渲染前对于子节点的处理；
     * - touchstart(aniObj) 动画处理的touchstart事件；
     * - touchmove(aniObj) 动画处理的touchmove事件；
     * - touchend(aniObj) 动画处理的touchend事件；
     * - touchcancel(aniObj)动画处理的touchcancel事件；
     * - next(aniObj) 下一帧 需返回动画结束后的当前索引；
     * - arrive（aniObj,num) 跳转；
     * - prev(aniObj) 上一帧 动画结束后的当前索引；
     *
     * carousel组件提供了两种自定义动画，使用者可以按需引用：
     * + aniCss动画使用改变Index层级的方式来展示当前页面。
     * + aniInfinate动画用有限的节点数（3个）渲染无限数量节点，其实现类似于list组件infinte模式，相较于默认动画实现减少了dom节点的数量，增加了dom操作的次数，适用于实现图片查看器等dom节点多的场景。
     *
     * **aniObj格式**
     *
     * ```
     * {
     *    aniSpeed:0,
     *    containerDOM: ul.cont, //节点
     *    delay: 1,
     *    loop: true,
     *    operationTimer: 5, //操作数动画运动的绝对值，交由动画控制
     *    pageNow: 5,
     *    speed: .5,
     *    stageDOM: div,
     *    width: 375 //这里需注意宽度在组件mount后才有
     *    touchstartLocation:e
     *    touchendLocation:e
     *    touchmoveLocation:e
     * }
     * ```
     */
    aniObj: _react.PropTypes.object,
    /**
     * @property children
     * @type Element
     * @description carousel的展示内容。
     */
    children: _react.PropTypes.array.isRequired
};
Carousel.defaultProps = {
    dots: true,
    autoplay: true,
    loop: true,
    effect: 'scrollX',
    delay: 1.5,
    speed: 0.5,
    defaultPage: 1,
    aniSpeed: 0,
    beforeChange: function beforeChange() {},
    afterChange: function afterChange() {}
};
Carousel.childContextTypes = {
    /**
     * @property currentPage
     * @type PropTypes.number
     * @description 子组件通过context获取到currentPage，currentPage表示当前展示的page索引。
     */
    currentPage: _react.PropTypes.number,
    /**
     * @property pagesNum
     * @type PropTypes.number
     * @description 子组件通过context获取到pagesNum，pagesNum表示carousel组件children的数量。
     */
    pagesNum: _react.PropTypes.number
};

Carousel.CarouselItem = _carouselItem2.default;
Carousel.Item = _carouselItem2.default;

exports.default = Carousel;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
    'use strict';

    /**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */

    /*jslint browser:true, node:true*/
    /*global define, Event, Node*/

    /**
     * Instantiate fast-clicking listeners on the specified layer.
     *
     * @constructor
     * @param {Element} layer The layer to listen on
     * @param {Object} [options={}] The options to override the defaults
     */

    function FastClick(layer, options) {
        var oldOnClick;

        options = options || {};

        /**
         * Whether a click is currently being tracked.
         *
         * @type boolean
         */
        this.trackingClick = false;

        /**
         * Timestamp for when click tracking started.
         *
         * @type number
         */
        this.trackingClickStart = 0;

        /**
         * The element being tracked for a click.
         *
         * @type EventTarget
         */
        this.targetElement = null;

        /**
         * X-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartX = 0;

        /**
         * Y-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartY = 0;

        /**
         * ID of the last touch, retrieved from Touch.identifier.
         *
         * @type number
         */
        this.lastTouchIdentifier = 0;

        /**
         * Touchmove boundary, beyond which a click will be cancelled.
         *
         * @type number
         */
        this.touchBoundary = options.touchBoundary || 10;

        /**
         * The FastClick layer.
         *
         * @type Element
         */
        this.layer = layer;

        /**
         * The minimum time between tap(touchstart and touchend) events
         *
         * @type number
         */
        this.tapDelay = options.tapDelay || 200;

        /**
         * The maximum time for a tap
         *
         * @type number
         */
        this.tapTimeout = options.tapTimeout || 700;

        if (FastClick.notNeeded(layer)) {
            return;
        }

        // Some old versions of Android don't have Function.prototype.bind
        function bind(method, context) {
            return function () {
                return method.apply(context, arguments);
            };
        }

        var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
        var context = this;
        for (var i = 0, l = methods.length; i < l; i++) {
            context[methods[i]] = bind(context[methods[i]], context);
        }

        // Set up event handlers as required
        if (deviceIsAndroid) {
            layer.addEventListener('mouseover', this.onMouse, true);
            layer.addEventListener('mousedown', this.onMouse, true);
            layer.addEventListener('mouseup', this.onMouse, true);
        }

        layer.addEventListener('click', this.onClick, true);
        layer.addEventListener('touchstart', this.onTouchStart, false);
        layer.addEventListener('touchmove', this.onTouchMove, false);
        layer.addEventListener('touchend', this.onTouchEnd, false);
        layer.addEventListener('touchcancel', this.onTouchCancel, false);

        // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
        // layer when they are cancelled.
        if (!Event.prototype.stopImmediatePropagation) {
            layer.removeEventListener = function (type, callback, capture) {
                var rmv = Node.prototype.removeEventListener;
                if (type === 'click') {
                    rmv.call(layer, type, callback.hijacked || callback, capture);
                } else {
                    rmv.call(layer, type, callback, capture);
                }
            };

            layer.addEventListener = function (type, callback, capture) {
                var adv = Node.prototype.addEventListener;
                if (type === 'click') {
                    adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
                        if (!event.propagationStopped) {
                            callback(event);
                        }
                    }), capture);
                } else {
                    adv.call(layer, type, callback, capture);
                }
            };
        }

        // If a handler is already declared in the element's onclick attribute, it will be fired before
        // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
        // adding it as listener.
        if (typeof layer.onclick === 'function') {

            // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
            // - the old one won't work if passed to addEventListener directly.
            oldOnClick = layer.onclick;
            layer.addEventListener('click', function (event) {
                oldOnClick(event);
            }, false);
            layer.onclick = null;
        }
    }

    /**
     * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
     *
     * @type boolean
     */
    var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

    /**
     * Android requires exceptions.
     *
     * @type boolean
     */
    var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

    /**
     * iOS requires exceptions.
     *
     * @type boolean
     */
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

    /**
     * iOS 4 requires an exception for select elements.
     *
     * @type boolean
     */
    var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

    /**
     * iOS 6.0-7.* requires the target element to be manually derived
     *
     * @type boolean
     */
    var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

    /**
     * BlackBerry requires exceptions.
     *
     * @type boolean
     */
    var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

    /**
     * Determine whether a given element requires a native click.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element needs a native click
     */
    FastClick.prototype.needsClick = function (target) {
        switch (target.nodeName.toLowerCase()) {

            // Don't send a synthetic click to disabled inputs (issue #62)
            case 'button':
            case 'select':
            case 'textarea':
                if (target.disabled) {
                    return true;
                }

                break;
            case 'input':

                // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
                if (deviceIsIOS && target.type === 'file' || target.disabled) {
                    return true;
                }

                break;
            case 'label':
            case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
            case 'video':
                return true;
        }

        return (/\bneedsclick\b/.test(target.className)
        );
    };

    /**
     * Determine whether a given element requires a call to focus to simulate click into element.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
     */
    FastClick.prototype.needsFocus = function (target) {
        switch (target.nodeName.toLowerCase()) {
            case 'textarea':
                return true;
            case 'select':
                return !deviceIsAndroid;
            case 'input':
                switch (target.type) {
                    case 'button':
                    case 'checkbox':
                    case 'file':
                    case 'image':
                    case 'radio':
                    case 'submit':
                        return false;
                }

                // No point in attempting to focus disabled inputs
                return !target.disabled && !target.readOnly;
            default:
                return (/\bneedsfocus\b/.test(target.className)
                );
        }
    };

    /**
     * Send a click event to the specified element.
     *
     * @param {EventTarget|Element} targetElement
     * @param {Event} event
     */
    FastClick.prototype.sendClick = function (targetElement, event) {
        var clickEvent, touch;

        // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
        if (document.activeElement && document.activeElement !== targetElement) {
            document.activeElement.blur();
        }

        touch = event.changedTouches[0];

        // Synthesise a click event, with an extra attribute so it can be tracked
        clickEvent = document.createEvent('MouseEvents');
        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        clickEvent.forwardedTouchEvent = true;
        targetElement.dispatchEvent(clickEvent);
    };

    FastClick.prototype.determineEventType = function (targetElement) {

        //Issue #159: Android Chrome Select Box does not open with a synthetic click event
        if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
            return 'mousedown';
        }

        return 'click';
    };

    /**
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.focus = function (targetElement) {
        var length;

        // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
        } else {
            targetElement.focus();
        }
    };

    /**
     * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
     *
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.updateScrollParent = function (targetElement) {
        var scrollParent, parentElement;

        scrollParent = targetElement.fastClickScrollParent;

        // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
        // target element was moved to another parent.
        if (!scrollParent || !scrollParent.contains(targetElement)) {
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement;
                    targetElement.fastClickScrollParent = parentElement;
                    break;
                }

                parentElement = parentElement.parentElement;
            } while (parentElement);
        }

        // Always update the scroll top tracker if possible.
        if (scrollParent) {
            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
        }
    };

    /**
     * @param {EventTarget} targetElement
     * @returns {Element|EventTarget}
     */
    FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

        // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
        if (eventTarget.nodeType === Node.TEXT_NODE) {
            return eventTarget.parentNode;
        }

        return eventTarget;
    };

    /**
     * On touch start, record the position and scroll offset.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchStart = function (event) {
        var targetElement, touch, selection;

        // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
        if (event.targetTouches.length > 1) {
            return true;
        }

        targetElement = this.getTargetElementFromEventTarget(event.target);
        touch = event.targetTouches[0];

        if (deviceIsIOS) {

            // Only trusted events will deselect text on iOS (issue #49)
            selection = window.getSelection();
            if (selection.rangeCount && !selection.isCollapsed) {
                return true;
            }

            if (!deviceIsIOS4) {

                // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
                // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
                // with the same identifier as the touch event that previously triggered the click that triggered the alert.
                // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
                // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
                // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
                // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
                // random integers, it's safe to to continue if the identifier is 0 here.
                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
                    event.preventDefault();
                    return false;
                }

                this.lastTouchIdentifier = touch.identifier;

                // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
                // 1) the user does a fling scroll on the scrollable layer
                // 2) the user stops the fling scroll with another tap
                // then the event.target of the last 'touchend' event will be the element that was under the user's finger
                // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
                // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
                this.updateScrollParent(targetElement);
            }
        }

        this.trackingClick = true;
        this.trackingClickStart = event.timeStamp;
        this.targetElement = targetElement;

        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;

        // Prevent phantom clicks on fast double-tap (issue #36)
        if (event.timeStamp - this.lastClickTime < this.tapDelay) {
            event.preventDefault();
        }

        return true;
    };

    /**
     * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.touchHasMoved = function (event) {
        var touch = event.changedTouches[0],
            boundary = this.touchBoundary;

        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
            return true;
        }

        return false;
    };

    /**
     * Update the last position.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchMove = function (event) {
        if (!this.trackingClick) {
            return true;
        }

        // If the touch has moved, cancel the click tracking
        if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
            this.trackingClick = false;
            this.targetElement = null;
        }

        return true;
    };

    /**
     * Attempt to find the labelled control for the given label element.
     *
     * @param {EventTarget|HTMLLabelElement} labelElement
     * @returns {Element|null}
     */
    FastClick.prototype.findControl = function (labelElement) {

        // Fast path for newer browsers supporting the HTML5 control attribute
        if (labelElement.control !== undefined) {
            return labelElement.control;
        }

        // All browsers under test that support touch events also support the HTML5 htmlFor attribute
        if (labelElement.htmlFor) {
            return document.getElementById(labelElement.htmlFor);
        }

        // If no for attribute exists, attempt to retrieve the first labellable descendant element
        // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
        return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
    };

    /**
     * On touch end, determine whether to send a click event at once.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchEnd = function (event) {
        var forElement,
            trackingClickStart,
            targetTagName,
            scrollParent,
            touch,
            targetElement = this.targetElement;

        if (!this.trackingClick) {
            return true;
        }

        // Prevent phantom clicks on fast double-tap (issue #36)
        if (this.lastClickTime) {
            if (event.timeStamp - this.lastClickTime < this.tapDelay) {
                this.cancelNextClick = true;
                return true;
            }
        }

        if (this.trackingClickStart) {
            if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
                return true;
            }
        }

        // Reset to prevent wrong click cancel on input (issue #156).
        this.cancelNextClick = false;

        this.lastClickTime = event.timeStamp;

        trackingClickStart = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;

        // On some iOS devices, the targetElement supplied with the event is invalid if the layer
        // is performing a transition or scroll, and has to be re-detected manually. Note that
        // for this to function correctly, it must be called *after* the event target is checked!
        // See issue #57; also filed as rdar://13048589 .
        if (deviceIsIOSWithBadTarget) {
            touch = event.changedTouches[0];

            // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
            targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
            targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
        }

        targetTagName = targetElement.tagName.toLowerCase();
        if (targetTagName === 'label') {
            forElement = this.findControl(targetElement);
            if (forElement) {
                this.focus(targetElement);
                if (deviceIsAndroid) {
                    return false;
                }

                targetElement = forElement;
            }
        } else if (this.needsFocus(targetElement)) {

            // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
            // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
            if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
                this.targetElement = null;
                return false;
            }

            this.focus(targetElement);
            this.sendClick(targetElement, event);

            // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
            // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
            //if (!deviceIsIOS || targetTagName !== 'select') {
            //    this.targetElement = null;
            //    event.preventDefault();
            //}

            return false;
        }

        if (deviceIsIOS && !deviceIsIOS4) {

            // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
            // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
            scrollParent = targetElement.fastClickScrollParent;
            if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                return true;
            }
        }

        // Prevent the actual click from going though - unless the target node is marked as requiring
        // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
        if (!this.needsClick(targetElement)) {
            event.preventDefault();
            this.sendClick(targetElement, event);
        }

        return false;
    };

    /**
     * On touch cancel, stop tracking the click.
     *
     * @returns {void}
     */
    FastClick.prototype.onTouchCancel = function () {
        this.trackingClick = false;
        this.targetElement = null;
    };

    /**
     * Determine mouse events which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onMouse = function (event) {

        // If a target element was never set (because a touch event was never fired) allow the event
        if (!this.targetElement) {
            return true;
        }

        if (event.forwardedTouchEvent) {
            return true;
        }

        // Programmatically generated events targeting a specific element should be permitted
        if (!event.cancelable) {
            return true;
        }

        // Derive and check the target element to see whether the mouse event needs to be permitted;
        // unless explicitly enabled, prevent non-touch click events from triggering actions,
        // to prevent ghost/doubleclicks.
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

            // Prevent any user-added listeners declared on FastClick element from being fired.
            if (event.stopImmediatePropagation) {
                event.stopImmediatePropagation();
            } else {

                // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
                event.propagationStopped = true;
            }

            // Cancel the event
            event.stopPropagation();
            event.preventDefault();

            return false;
        }

        // If the mouse event is permitted, return true for the action to go through.
        return true;
    };

    /**
     * On actual clicks, determine whether this is a touch-generated click, a click action occurring
     * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
     * an actual click which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onClick = function (event) {
        var permitted;

        // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true;
        }

        // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
        if (event.target.type === 'submit' && event.detail === 0) {
            return true;
        }

        permitted = this.onMouse(event);

        // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
        if (!permitted) {
            this.targetElement = null;
        }

        // If clicks are permitted, return true for the action to go through.
        return permitted;
    };

    /**
     * Remove all FastClick's event listeners.
     *
     * @returns {void}
     */
    FastClick.prototype.destroy = function () {
        var layer = this.layer;

        if (deviceIsAndroid) {
            layer.removeEventListener('mouseover', this.onMouse, true);
            layer.removeEventListener('mousedown', this.onMouse, true);
            layer.removeEventListener('mouseup', this.onMouse, true);
        }

        layer.removeEventListener('click', this.onClick, true);
        layer.removeEventListener('touchstart', this.onTouchStart, false);
        layer.removeEventListener('touchmove', this.onTouchMove, false);
        layer.removeEventListener('touchend', this.onTouchEnd, false);
        layer.removeEventListener('touchcancel', this.onTouchCancel, false);
    };

    /**
     * Check whether FastClick is needed.
     *
     * @param {Element} layer The layer to listen on
     */
    FastClick.notNeeded = function (layer) {
        var metaViewport;
        var chromeVersion;
        var blackberryVersion;
        var firefoxVersion;

        // Devices that don't support touch don't need FastClick
        if (typeof window.ontouchstart === 'undefined') {
            return true;
        }

        // Chrome version - zero for other browsers
        chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

        if (chromeVersion) {

            if (deviceIsAndroid) {
                metaViewport = document.querySelector('meta[name=viewport]');

                if (metaViewport) {
                    // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        //HACK by zongze.li add 757--759: hack for chrome version 30、37 in vivo x5 pro and HuaWei mate7, which still has 300ms delay with user-scalable=no
                        if (chromeVersion <= 38) {
                            return false;
                        }

                        return true;
                    }
                    // Chrome 32 and above with width=device-width or less don't need FastClick

                    //HACK by zongze.li change 31 into 38: hack for chrome version 30、37 in vivo x5 pro and HuaWei mate7, which still has 300ms delay with width=device-width

                    //origin: if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {

                    if (chromeVersion > 38 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }

                // Chrome desktop doesn't need FastClick (issue #15)
            } else {
                return true;
            }
        }

        if (deviceIsBlackBerry10) {
            blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

            // BlackBerry 10.3+ does not require Fastclick library.
            // https://github.com/ftlabs/fastclick/issues/251
            if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
                metaViewport = document.querySelector('meta[name=viewport]');

                if (metaViewport) {
                    // user-scalable=no eliminates click delay.
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    // width=device-width (or less than device-width) eliminates click delay.
                    if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            }
        }

        // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
        if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
            return true;
        }

        // Firefox version - zero for other browsers
        firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

        if (firefoxVersion >= 27) {
            // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

            metaViewport = document.querySelector('meta[name=viewport]');
            if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
                return true;
            }
        }

        // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
        // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
        if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
            return true;
        }

        return false;
    };

    /**
     * Factory method for creating a FastClick object
     *
     * @param {Element} layer The layer to listen on
     * @param {Object} [options={}] The options to override the defaults
     */
    FastClick.attach = function (layer, options) {
        return new FastClick(layer, options);
    };

    if ("function" === 'function' && _typeof(__webpack_require__(37)) === 'object' && __webpack_require__(37)) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return FastClick;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = FastClick.attach;
        module.exports.FastClick = FastClick;
    } else {
        window.FastClick = FastClick;
    }
})();

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "fastclick.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _fastclick = __webpack_require__(54);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _reactTapEventPlugin = __webpack_require__(74);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Ellery1 on 16/7/8.
 */
if (!window.___yoTapEventInjected) {
    // 不要觉得这里没用
    // 因为yo-router也用了tap-event-plugin，如果不加try catch会报引用两次tap-event-plugin的警告
    try {
        (0, _reactTapEventPlugin2.default)();
    } catch (e) {}

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        _fastclick2.default.attach(document.body);
    }

    document.addEventListener('DOMContentLoaded', function () {
        _fastclick2.default.attach(document.body);
    });
    document.body.addEventListener('touchmove', function (evt) {
        evt.preventDefault();
    });
    window.___yoTapEventInjected = true;
}

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "tapEventPluginInit.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component LazyImage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author jiao.shen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 懒加载图片组件，只能在 `Scroller` 和 `List` 中使用。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 使用这个组件代替img标签后，会延迟加载这个图片，直到List组件的滚动使得该图片位于可视区域之内。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./lazyimage.md}{instruUrl: scroller/lazyimage.html?hideIcon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  3.0.2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TO_BE_LOADED = 0;
var LOADING = 1;
var LOADED = 2;

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
        _classCallCheck(this, _class);

        // 0->等待load,1->loading,2->loaded
        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.loading = TO_BE_LOADED;
        _this.state = {
            src: _this.props.defaultImage
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refresh(this.context);
            var scroller = this.context.list || this.context.scroller;
            if (scroller) {
                scroller.childLazyImages.push(this);
            }
        }

        // 父组件render时,需要重置这个组件的loaded状态和context

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
            this.refresh(nextContext);

            if (this.state.src !== nextProps.src) {
                this.loading = TO_BE_LOADED;
                this.setState({ src: this.props.defaultImage });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var scroller = this.context.list || this.context.scroller;
            if (scroller) {
                scroller.childLazyImages.splice(scroller.childLazyImages.indexOf(this), 1);
            }
            this.canLoadImage = false;
        }
    }, {
        key: 'refresh',
        value: function refresh(context) {
            this.canLoadImage = true;
            this.offsetY = context.offsetY;
            this.itemRef = context.itemRef;
            this.infinite = context.infinite;
            // 如果不是infinite的列表，那么应该获取offsetTop(这个开销还挺大的，不过没得优化了)，反之，则使用translateY
            if (!this.infinite) {
                this.offsetTop = (0, _util.getElementOffsetY)(this.img);
                this.height = this.img.offsetHeight;
            }
        }
    }, {
        key: 'load',
        value: function load(callback) {
            var _this2 = this;

            if (this.loading === TO_BE_LOADED) {
                var src = this.props.src,
                    tmpImg = new Image();

                this.loading = LOADING;
                tmpImg.onload = function () {
                    // 在lazyimage正在加载时组件unmount(主要是在SPA模式下有可能发生关闭view的情况)会报错
                    // 因此这里需要简单判断一下组件的实例是否还存在
                    if (_this2 && _this2.canLoadImage) {
                        _this2.loading = LOADED;
                        _this2.setState({ src: src, loaded: true });
                        if (callback) {
                            callback();
                        }
                    }
                };
                tmpImg.src = src;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                height = _props.height,
                style = _props.style,
                customAttr = _props.customAttr;
            // 解决和touchable组件结合使用的问题，必须能够接收这四个属性

            if (this.context.list) {
                if (height == null && style.height == null) {
                    throw Error('yo-lazyimage: 在List组件中使用LazyImage必须指定图片的高度。');
                }
            }

            return _react2.default.createElement('img', _extends({}, (0, _util.inheritProps)(this.props, ['onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel', 'width', 'height', 'className', 'title', 'style']), {
                alt: this.props.alt,
                ref: function ref(img) {
                    if (img) _this3.img = img;
                },
                src: this.state.src
            }, customAttr));
        }
    }]);

    return _class;
}(_react.Component);

_class.contextTypes = {
    // 从父组件context接收的属性
    // list/scroller组件实例的引用
    list: _react.PropTypes.object,
    scroller: _react.PropTypes.object,
    // listitem的offsetY(infinite模式下)
    offsetY: _react.PropTypes.number,
    // listitem实例的引用
    itemRef: _react.PropTypes.object,
    // 是否是Scroller下面的Lazyload,而不是List下面的
    isScroller: _react.PropTypes.bool,
    // 是否是infinite列表
    infinite: _react.PropTypes.bool
};
_class.propTypes = {
    /**
     * @property defaultImage
     * @type String
     * @default null
     * @description 默认图片，在原图片还没有完成加载时展示。
     */
    defaultImage: _react.PropTypes.string,
    /**
     * @property src
     * @type String
     * @default null
     * @description 图片src，必需。
     */
    src: _react.PropTypes.string.isRequired,
    /**
     * @property className
     * @type String
     * @default null
     * @description 给img标签加的类名。
     */
    className: _react.PropTypes.string,
    /**
     * @property width
     * @type Number
     * @default null
     * @description 图片宽度。
     */
    width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    /**
     * @property height
     * @type Number
     * @default null
     * @description 图片高度。
     */
    height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    /**
     * @property customAttr
     * @type Object
     * @default null
     * @description 附加给img dom节点的自定义属性，属性名需要以data-开头。
     */
    customAttr: _react.PropTypes.object,
    /**
     * @property style
     * @type Object
     * @default null
     * @description 附加给img dom节点的style。
     */
    style: _react.PropTypes.object,
    /**
     * @property alt
     * @type String
     * @default null
     * @description 和img标签的alt属性相同。
     */
    alt: _react.PropTypes.string,
    /**
     * @property title
     * @type String
     * @default null
     * @description 和img标签的title属性相同。
     */
    title: _react.PropTypes.string,
    onTouchStart: _react.PropTypes.func,
    onTouchMove: _react.PropTypes.func,
    onTouchEnd: _react.PropTypes.func,
    onTouchCancel: _react.PropTypes.func
};
_class.defaultProps = {
    defaultImage: null,
    src: null,
    className: null,
    width: null,
    height: null,
    customAttr: {},
    style: null
};
exports.default = _class;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = function () {
    var me = {};
    var _elementStyle = document.createElement('div').style;

    var _vendor = function () {
        var vendors = ['t', 'WebkitT', 'MozT', 'msT', 'OT'];
        var transform = void 0;

        for (var i = 0, l = vendors.length; i < l; i++) {
            transform = vendors[i] + 'ransform';
            if (transform in _elementStyle) {
                return vendors[i].substr(0, vendors[i].length - 1);
            }
        }

        return false;
    }();

    var _prefixStyle = function _prefixStyle(style) {
        if (_vendor === false) {
            return false;
        }
        if (_vendor === '') {
            return style;
        }
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    };

    me.getTime = Date.now || function getTime() {
        return new Date().getTime();
    };

    me.getRAF = function () {
        function basicRAF(callback) {
            return window.setTimeout(callback, 1000 / 60);
        }

        var rAF = window.cancelAnimationFrame && window.requestAnimationFrame || window.webkitCancelAnimationFrame && window.webkitRequestAnimationFrame || window.mozCancelAnimationFrame && window.mozRequestAnimationFrame || window.oCancelAnimationFrame && window.oRequestAnimationFrame || window.msCancelAnimationFrame && window.msRequestAnimationFrame || basicRAF;

        var cancelrAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;

        if (me.isBadAndroid) {
            rAF = basicRAF;
            cancelrAF = window.clearTimeout;
        }

        return { rAF: rAF, cancelrAF: cancelrAF };
    };

    me.extend = function (target, obj) {
        Object.keys(obj).forEach(function (i) {
            target[i] = obj[i];
        });
    };

    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
        var distance = current - start,
            destination = void 0,
            duration = void 0;
        var speed = Math.abs(distance) / time;

        deceleration = deceleration === undefined ? 0.0006 : deceleration;

        destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
        duration = speed / deceleration;

        if (destination < lowerMargin) {
            destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
            distance = Math.abs(destination - current);
            duration = distance / speed;
        } else if (destination > 0) {
            destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
            distance = Math.abs(current) + destination;
            duration = distance / speed;
        }

        return {
            destination: Math.round(destination),
            duration: duration
        };
    };

    var _transform = _prefixStyle('transform');

    me.extend(me, {
        hasTransform: _transform !== false,
        hasPerspective: _prefixStyle('perspective') in _elementStyle,
        hasTouch: 'ontouchstart' in window,
        hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
        hasTransition: _prefixStyle('transition') in _elementStyle
    });

    /*
     This should find all Android browsers lower than build 535.19 (both stock browser and webview)
     - galaxy S2 is ok
     - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
     - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
     - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
     */
    me.isBadAndroid = function () {
        var appVersion = window.navigator.appVersion;
        var _isBadAndroid = false;
        // Android browser is not a chrome browser.
        if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
            var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
            if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : _typeof(safariVersion)) === 'object' && safariVersion.length >= 2) {
                _isBadAndroid = parseFloat(safariVersion[1]) < 535.19;
            } else {
                _isBadAndroid = true;
            }
        } else {
            _isBadAndroid = false;
        }

        return _isBadAndroid;
    }();

    me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transformOrigin')
    });

    me.offset = function (el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;

        // jshint -W084
        while (el = el.offsetParent) {
            left -= el.offsetLeft;
            top -= el.offsetTop;
        }
        // jshint +W084

        return { left: left, top: top };
    };

    me.preventDefaultException = function (el, exceptions) {
        for (var i in exceptions) {
            if (exceptions[i].test(el[i])) {
                return true;
            }
        }

        return false;
    };

    me.extend(me.eventType = {}, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1

        // mousedown: 2,
        // mousemove: 2,
        // mouseup: 2,
        //
        // pointerdown: 3,
        // pointermove: 3,
        // pointerup: 3,
        //
        // MSPointerDown: 3,
        // MSPointerMove: 3,
        // MSPointerUp: 3
    });

    me.extend(me.ease = {}, {
        quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function fn(k) {
                return k * (2 - k);
            }
        },
        circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
            fn: function fn(k) {
                var _k = k - 1;
                return Math.sqrt(1 - _k * _k);
            }
        },
        back: {
            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fn: function fn(k) {
                var b = 4;
                var _k = k - 1;
                return _k * _k * ((b + 1) * _k + b) + 1;
            }
        },
        bounce: {
            style: '',
            fn: function fn(k) {
                var y = void 0,
                    _k = k;

                if (_k / 1 < 1 / 2.75) {
                    _k = _k / 1;
                    y = 7.5625 * _k * _k;
                } else if (k < 2 / 2.75) {
                    _k -= 1.5 / 2.75;
                    y = 7.5625 * _k * _k + 0.75;
                } else if (k < 2.5 / 2.75) {
                    _k -= 2.25 / 2.75;
                    y = 7.5625 * _k * _k + 0.9375;
                } else {
                    _k -= 2.625 / 2.75;
                    y = 7.5625 * _k * _k + 0.984375;
                }

                return y;
            }
        },
        elastic: {
            style: '',
            fn: function fn(k) {
                var f = 0.22,
                    e = 0.4;

                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }

                return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
            }
        }
    });

    return me;
}();

exports.default = utils;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "utils.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component Sticky
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description `Sticky` 组件，只能在 `Scroller` 内部或者列表系列组件的 `staticSection` 中使用，
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 它内部的子元素在 `Scroller` 滚动时将会获得吸顶效果。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * `Sticky` 是一个虚拟组件，它只会给它的唯一子元素添加额外的逻辑，而不会改变原有的 `dom` 结构。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./sticky.md}{instruUrl: scroller/sticky.html?hideIcon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author jiao.shen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  3.0.2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Sticky = function (_Component) {
    _inherits(Sticky, _Component);

    function Sticky() {
        _classCallCheck(this, Sticky);

        var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this));

        _this.domNode = null;
        _this.height = null;
        _this.offsetTop = null;
        _this.className = null;
        return _this;
    }

    _createClass(Sticky, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.scroller = this.context.scroller;

            if (this.scroller) {
                this.initialize();
                this.scroller.stickyHeaders.push(this);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.initialize();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _this2 = this;

            if (this.scroller) {
                this.scroller.stickyHeaders = this.scroller.stickyHeaders.filter(function (header) {
                    return header !== _this2;
                });
            }
        }
    }, {
        key: 'initialize',
        value: function initialize() {
            var height = this.props.height;

            this.domNode = _reactDom2.default.findDOMNode(this);
            if (height == null) {
                this.height = this.domNode.offsetHeight;
            } else {
                this.height = this.props.height;
            }
            this.offsetTop = (0, _util.getElementOffsetY)(this.domNode, null);
            this.className = this.domNode.className;
            this.onlyChild = _react2.default.Children.only(this.props.children);
            this.stickyExtraClass = this.props.stickyExtraClass;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.Children.only(this.props.children);
        }
    }]);

    return Sticky;
}(_react.Component);

Sticky.propTypes = {
    /**
     * @property stickyExtraClass
     * @type String
     * @default null
     * @description 在Sticky的子元素处在吸顶状态时，为Scroller的sticky容器添加的额外样式类。
     */
    stickyExtraClass: _react.PropTypes.string,
    /**
     * @property height
     * @type number
     * @default null
     * @version 3.0.6
     * @description 吸顶元素的高度，在infinite的列表组件的staticSection中使用时，设置这个属性可以提高列表的滚动性能。
     */
    height: _react.PropTypes.number,
    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string])
};
Sticky.defaultProps = {
    stickyExtraClass: ''
};
Sticky.contextTypes = {
    scroller: _react.PropTypes.object
};
exports.default = Sticky;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

var _home = __webpack_require__(16);

var _home2 = _interopRequireDefault(_home);

var _user = __webpack_require__(19);

var _user2 = _interopRequireDefault(_user);

var _cart = __webpack_require__(15);

var _cart2 = _interopRequireDefault(_cart);

var _search = __webpack_require__(17);

var _search2 = _interopRequireDefault(_search);

var _service = __webpack_require__(18);

var _service2 = _interopRequireDefault(_service);

var _address = __webpack_require__(20);

var _address2 = _interopRequireDefault(_address);

var _help = __webpack_require__(22);

var _help2 = _interopRequireDefault(_help);

var _historyorder = __webpack_require__(23);

var _historyorder2 = _interopRequireDefault(_historyorder);

var _myaccount = __webpack_require__(25);

var _myaccount2 = _interopRequireDefault(_myaccount);

var _myorder = __webpack_require__(26);

var _myorder2 = _interopRequireDefault(_myorder);

var _collect = __webpack_require__(21);

var _collect2 = _interopRequireDefault(_collect);

var _login = __webpack_require__(24);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(28);

var _register2 = _interopRequireDefault(_register);

var _newaddress = __webpack_require__(27);

var _newaddress2 = _interopRequireDefault(_newaddress);

var _forget = __webpack_require__(45);

var _forget2 = _interopRequireDefault(_forget);

var _editAddress = __webpack_require__(44);

var _editAddress2 = _interopRequireDefault(_editAddress);

var _userHead = __webpack_require__(9);

var _userHead2 = _interopRequireDefault(_userHead);

var _setup = __webpack_require__(46);

var _setup2 = _interopRequireDefault(_setup);

var _suggestion = __webpack_require__(47);

var _suggestion2 = _interopRequireDefault(_suggestion);

var _homeHead = __webpack_require__(39);

var _homeHead2 = _interopRequireDefault(_homeHead);

var _searchHead = __webpack_require__(42);

var _searchHead2 = _interopRequireDefault(_searchHead);

var _cartHead = __webpack_require__(38);

var _cartHead2 = _interopRequireDefault(_cartHead);

var _serverHead = __webpack_require__(43);

var _serverHead2 = _interopRequireDefault(_serverHead);

var _eyuan = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../usercomponent/eyuan\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _eyuan2 = _interopRequireDefault(_eyuan);

var _yfu = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../usercomponent/yfu\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _yfu2 = _interopRequireDefault(_yfu);

var _store = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = __webpack_require__(40);

var _index2 = _interopRequireDefault(_index);

var _list = __webpack_require__(41);

var _list2 = _interopRequireDefault(_list);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(48);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store.store },
	_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.hashHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: "/", component: _index2.default },
			_react2.default.createElement(_reactRouter.IndexRedirect, { to: "/home" }),
			_react2.default.createElement(_reactRouter.Route, { path: "home", com: _react2.default.createElement(_homeHead2.default, null), component: _home2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "cart", com: _react2.default.createElement(_cartHead2.default, null), component: _cart2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "search", com: _react2.default.createElement(_searchHead2.default, null), component: _search2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "user", com: _react2.default.createElement(_userHead2.default, null), component: _user2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "service", com: _react2.default.createElement(_serverHead2.default, null), component: _service2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: "list", component: _list2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/myorder", component: _myorder2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/collect", component: _collect2.default }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: "/account", component: _myaccount2.default },
			_react2.default.createElement(_reactRouter.Route, { path: "eyuan", component: _eyuan2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "yfu", component: _yfu2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: "/history", component: _historyorder2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/help", component: _help2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/address", component: _address2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/login", component: _login2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/register", component: _register2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/newaddress", component: _newaddress2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/forget", component: _forget2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/editaddress/:type", component: _editAddress2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/list", component: _list2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/setup", component: _setup2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "/suggestion", component: _suggestion2.default })
	)
), document.getElementById("root"));

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\workSpace2\\homeapp\\appmaster\\node_modules\\.1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Types of raw signals from the browser caught at the top level.
 */
var topLevelTypes = {
  topAbort: null,
  topAnimationEnd: null,
  topAnimationIteration: null,
  topAnimationStart: null,
  topBlur: null,
  topCanPlay: null,
  topCanPlayThrough: null,
  topChange: null,
  topClick: null,
  topCompositionEnd: null,
  topCompositionStart: null,
  topCompositionUpdate: null,
  topContextMenu: null,
  topCopy: null,
  topCut: null,
  topDoubleClick: null,
  topDrag: null,
  topDragEnd: null,
  topDragEnter: null,
  topDragExit: null,
  topDragLeave: null,
  topDragOver: null,
  topDragStart: null,
  topDrop: null,
  topDurationChange: null,
  topEmptied: null,
  topEncrypted: null,
  topEnded: null,
  topError: null,
  topFocus: null,
  topInput: null,
  topInvalid: null,
  topKeyDown: null,
  topKeyPress: null,
  topKeyUp: null,
  topLoad: null,
  topLoadedData: null,
  topLoadedMetadata: null,
  topLoadStart: null,
  topMouseDown: null,
  topMouseMove: null,
  topMouseOut: null,
  topMouseOver: null,
  topMouseUp: null,
  topPaste: null,
  topPause: null,
  topPlay: null,
  topPlaying: null,
  topProgress: null,
  topRateChange: null,
  topReset: null,
  topScroll: null,
  topSeeked: null,
  topSeeking: null,
  topSelectionChange: null,
  topStalled: null,
  topSubmit: null,
  topSuspend: null,
  topTextInput: null,
  topTimeUpdate: null,
  topTouchCancel: null,
  topTouchEnd: null,
  topTouchMove: null,
  topTouchStart: null,
  topTransitionEnd: null,
  topVolumeChange: null,
  topWaiting: null,
  topWheel: null
};

var EventConstants = {
  topLevelTypes: topLevelTypes
};

module.exports = EventConstants;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(8);

var invariant = __webpack_require__(6);

/**
 * Injectable ordering of event plugins.
 */
var eventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!eventPluginOrder) {
    // Wait until an `eventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var pluginModule = namesToPlugins[pluginName];
    var pluginIndex = eventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : _prodInvariant('96', pluginName) : void 0;
    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    !pluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : _prodInvariant('97', pluginName) : void 0;
    EventPluginRegistry.plugins[pluginIndex] = pluginModule;
    var publishedEvents = pluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : _prodInvariant('98', eventName, pluginName) : void 0;
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : _prodInvariant('99', eventName) : void 0;
  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, pluginModule, eventName) {
  !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : _prodInvariant('100', registrationName) : void 0;
  EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

  if (process.env.NODE_ENV !== 'production') {
    var lowerCasedName = registrationName.toLowerCase();
    EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = {

  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in __DEV__.
   * @type {Object}
   */
  possibleRegistrationNames: process.env.NODE_ENV !== 'production' ? {} : null,
  // Trust the developer to only use possibleRegistrationNames in __DEV__

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (injectedEventPluginOrder) {
    !!eventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : _prodInvariant('101') : void 0;
    // Clone the ordering so it cannot be dynamically mutated.
    eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
    recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function (injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var pluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
        !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : _prodInvariant('102', pluginName) : void 0;
        namesToPlugins[pluginName] = pluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      recomputePluginOrdering();
    }
  },

  /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
  getPluginModuleForEvent: function (event) {
    var dispatchConfig = event.dispatchConfig;
    if (dispatchConfig.registrationName) {
      return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
    }
    if (dispatchConfig.phasedRegistrationNames !== undefined) {
      // pulling phasedRegistrationNames out of dispatchConfig helps Flow see
      // that it is not undefined.
      var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;

      for (var phase in phasedRegistrationNames) {
        if (!phasedRegistrationNames.hasOwnProperty(phase)) {
          continue;
        }
        var pluginModule = EventPluginRegistry.registrationNameModules[phasedRegistrationNames[phase]];
        if (pluginModule) {
          return pluginModule;
        }
      }
    }
    return null;
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function () {
    eventPluginOrder = null;
    for (var pluginName in namesToPlugins) {
      if (namesToPlugins.hasOwnProperty(pluginName)) {
        delete namesToPlugins[pluginName];
      }
    }
    EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];
      }
    }

    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      var possibleRegistrationNames = EventPluginRegistry.possibleRegistrationNames;
      for (var lowerCasedName in possibleRegistrationNames) {
        if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
          delete possibleRegistrationNames[lowerCasedName];
        }
      }
    }
  }

};

module.exports = EventPluginRegistry;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var EventPluginHub = __webpack_require__(30);
var EventPluginUtils = __webpack_require__(14);

var accumulateInto = __webpack_require__(32);
var forEachAccumulated = __webpack_require__(33);
var warning = __webpack_require__(10);

var getListener = EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(inst, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(inst, registrationName);
}

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(inst, phase, event) {
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(inst, 'Dispatching inst must not be null') : void 0;
  }
  var listener = listenerAtPhase(inst, event, phase);
  if (listener) {
    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
  }
}

/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    var targetInst = event._targetInst;
    var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
    EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
  }
}

/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function accumulateDispatches(inst, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(inst, registrationName);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event._targetInst, null, event);
  }
}

function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
}

function accumulateTwoPhaseDispatchesSkipTarget(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
}

function accumulateEnterLeaveDispatches(leave, enter, from, to) {
  EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
}

function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);
}

/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */
var EventPropagators = {
  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
  accumulateDirectDispatches: accumulateDirectDispatches,
  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
};

module.exports = EventPropagators;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(8);

var invariant = __webpack_require__(6);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(77);

var PooledClass = __webpack_require__(65);

var emptyFunction = __webpack_require__(29);
var warning = __webpack_require__(10);

var didWarnForAddedNewProperty = false;
var isProxySupported = typeof Proxy === 'function';

var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var EventInterface = {
  type: null,
  target: null,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: emptyFunction.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */
function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
  if (process.env.NODE_ENV !== 'production') {
    // these have a getter/setter for warnings
    delete this.nativeEvent;
    delete this.preventDefault;
    delete this.stopPropagation;
  }

  this.dispatchConfig = dispatchConfig;
  this._targetInst = targetInst;
  this.nativeEvent = nativeEvent;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    if (process.env.NODE_ENV !== 'production') {
      delete this[propName]; // this has a getter/setter for warnings
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      if (propName === 'target') {
        this.target = nativeEventTarget;
      } else {
        this[propName] = nativeEvent[propName];
      }
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
  return this;
}

_assign(SyntheticEvent.prototype, {

  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    } else if (typeof event.returnValue !== 'unknown') {
      // eslint-disable-line valid-typeof
      event.returnValue = false;
    }
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function () {
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.stopPropagation) {
      event.stopPropagation();
    } else if (typeof event.cancelBubble !== 'unknown') {
      // eslint-disable-line valid-typeof
      // The ChangeEventPlugin registers a "propertychange" event for
      // IE. This event does not support bubbling or cancelling, and
      // any references to cancelBubble throw "Member not found".  A
      // typeof check of "unknown" circumvents this issue (and is also
      // IE specific).
      event.cancelBubble = true;
    }

    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (process.env.NODE_ENV !== 'production') {
        Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
      } else {
        this[propName] = null;
      }
    }
    for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
      this[shouldBeReleasedProperties[i]] = null;
    }
    if (process.env.NODE_ENV !== 'production') {
      Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
      Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', emptyFunction));
      Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', emptyFunction));
    }
  }

});

SyntheticEvent.Interface = EventInterface;

if (process.env.NODE_ENV !== 'production') {
  if (isProxySupported) {
    /*eslint-disable no-func-assign */
    SyntheticEvent = new Proxy(SyntheticEvent, {
      construct: function (target, args) {
        return this.apply(target, Object.create(target.prototype), args);
      },
      apply: function (constructor, that, args) {
        return new Proxy(constructor.apply(that, args), {
          set: function (target, prop, value) {
            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
              process.env.NODE_ENV !== 'production' ? warning(didWarnForAddedNewProperty || target.isPersistent(), 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re adding a new property in the synthetic event object. ' + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
              didWarnForAddedNewProperty = true;
            }
            target[prop] = value;
            return true;
          }
        });
      }
    });
    /*eslint-enable no-func-assign */
  }
}
/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
SyntheticEvent.augmentClass = function (Class, Interface) {
  var Super = this;

  var E = function () {};
  E.prototype = Super.prototype;
  var prototype = new E();

  _assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = _assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
};

PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

module.exports = SyntheticEvent;

/**
  * Helper to nullify syntheticEvent instance properties when destructing
  *
  * @param {object} SyntheticEvent
  * @param {String} propName
  * @return {object} defineProperty object
  */
function getPooledWarningPropertyDefinition(propName, getVal) {
  var isFunction = typeof getVal === 'function';
  return {
    configurable: true,
    set: set,
    get: get
  };

  function set(val) {
    var action = isFunction ? 'setting the method' : 'setting the property';
    warn(action, 'This is effectively a no-op');
    return val;
  }

  function get() {
    var action = isFunction ? 'accessing the method' : 'accessing the property';
    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
    warn(action, result);
    return getVal;
  }

  function warn(action, result) {
    var warningCondition = false;
    process.env.NODE_ENV !== 'production' ? warning(warningCondition, 'This synthetic event is reused for performance reasons. If you\'re seeing this, ' + 'you\'re %s `%s` on a released/nullified synthetic event. %s. ' + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticEvent = __webpack_require__(66);

var getEventTarget = __webpack_require__(69);

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var UIEventInterface = {
  view: function (event) {
    if (event.view) {
      return event.view;
    }

    var target = getEventTarget(event);
    if (target.window === target) {
      // target is a window object
      return target;
    }

    var doc = target.ownerDocument;
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    if (doc) {
      return doc.defaultView || doc.parentWindow;
    } else {
      return window;
    }
  },
  detail: function (event) {
    return event.detail || 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

module.exports = SyntheticUIEvent;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ViewportMetrics = {

  currentScrollLeft: 0,

  currentScrollTop: 0,

  refreshScrollValues: function (scrollPosition) {
    ViewportMetrics.currentScrollLeft = scrollPosition.x;
    ViewportMetrics.currentScrollTop = scrollPosition.y;
  }

};

module.exports = ViewportMetrics;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */

function getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;

  // Normalize SVG <use> element events #4963
  if (target.correspondingUseElement) {
    target = target.correspondingUseElement;
  }

  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;
}

module.exports = getEventTarget;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var shallowCompare = __webpack_require__(34);

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule TapEventPlugin
 * @typechecks static-only
 */



var EventConstants = __webpack_require__(62);
var EventPluginUtils = __webpack_require__(14);
var EventPropagators = __webpack_require__(64);
var SyntheticUIEvent = __webpack_require__(67);
var TouchEventUtils = __webpack_require__(72);
var ViewportMetrics = __webpack_require__(68);

var keyOf = __webpack_require__(49);
var topLevelTypes = EventConstants.topLevelTypes;

var isStartish = EventPluginUtils.isStartish;
var isEndish = EventPluginUtils.isEndish;

var isTouch = function(topLevelType) {
  var touchTypes = [
    'topTouchCancel',
    'topTouchEnd',
    'topTouchStart',
    'topTouchMove'
  ];
  return touchTypes.indexOf(topLevelType) >= 0;
}

/**
 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
 * in order to still be considered a 'tap' event.
 */
var tapMoveThreshold = 10;
var ignoreMouseThreshold = 750;
var startCoords = {x: null, y: null};
var lastTouchEvent = null;

var Axis = {
  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
};

function getAxisCoordOfEvent(axis, nativeEvent) {
  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
  if (singleTouch) {
    return singleTouch[axis.page];
  }
  return axis.page in nativeEvent ?
    nativeEvent[axis.page] :
    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
}

function getDistance(coords, nativeEvent) {
  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
  return Math.pow(
    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
    0.5
  );
}

var touchEvents = [
  'topTouchStart',
  'topTouchCancel',
  'topTouchEnd',
  'topTouchMove',
];

var dependencies = [
  'topMouseDown',
  'topMouseMove',
  'topMouseUp',
].concat(touchEvents);

var eventTypes = {
  touchTap: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchTap: null}),
      captured: keyOf({onTouchTapCapture: null})
    },
    dependencies: dependencies
  }
};

var now = (function() {
  if (Date.now) {
    return Date.now;
  } else {
    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
    return function () {
      return +new Date;
    }
  }
})();

function createTapEventPlugin(shouldRejectClick) {
  return {

    tapMoveThreshold: tapMoveThreshold,

    ignoreMouseThreshold: ignoreMouseThreshold,

    eventTypes: eventTypes,

    /**
     * @param {string} topLevelType Record from `EventConstants`.
     * @param {DOMEventTarget} targetInst The listening component root node.
     * @param {object} nativeEvent Native browser event.
     * @return {*} An accumulation of synthetic events.
     * @see {EventPluginHub.extractEvents}
     */
    extractEvents: function(
      topLevelType,
      targetInst,
      nativeEvent,
      nativeEventTarget
    ) {

      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
        return null;
      }

      if (isTouch(topLevelType)) {
        lastTouchEvent = now();
      } else {
        if (shouldRejectClick(lastTouchEvent, now())) {
          return null;
        }
      }

      var event = null;
      var distance = getDistance(startCoords, nativeEvent);
      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
        event = SyntheticUIEvent.getPooled(
          eventTypes.touchTap,
          targetInst,
          nativeEvent,
          nativeEventTarget
        );
      }
      if (isStartish(topLevelType)) {
        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
      } else if (isEndish(topLevelType)) {
        startCoords.x = 0;
        startCoords.y = 0;
      }
      EventPropagators.accumulateTwoPhaseDispatches(event);
      return event;
    }

  };
}

module.exports = createTapEventPlugin;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule TouchEventUtils
 */

var TouchEventUtils = {
  /**
   * Utility function for common case of extracting out the primary touch from a
   * touch event.
   * - `touchEnd` events usually do not have the `touches` property.
   *   http://stackoverflow.com/questions/3666929/
   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
   *
   * @param {Event} nativeEvent Native event that may or may not be a touch.
   * @return {TouchesObject?} an object with pageX and pageY or null.
   */
  extractSingleTouch: function(nativeEvent) {
    var touches = nativeEvent.touches;
    var changedTouches = nativeEvent.changedTouches;
    var hasTouches = touches && touches.length > 0;
    var hasChangedTouches = changedTouches && changedTouches.length > 0;

    return !hasTouches && hasChangedTouches ? changedTouches[0] :
           hasTouches ? touches[0] :
           nativeEvent;
  }
};

module.exports = TouchEventUtils;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function(lastTouchEvent, clickTimestamp) {
  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
    return true;
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(6);
var defaultClickRejectionStrategy = __webpack_require__(73);

var alreadyInjected = false;

module.exports = function injectTapEventPlugin (strategyOverrides) {
  strategyOverrides = strategyOverrides || {}
  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

  if (process.env.NODE_ENV !== 'production') {
    invariant(
      !alreadyInjected,
      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
It is recommended to call injectTapEventPlugin() just before you call \
ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
itself, please contact the maintainer as it shouldn\'t be called in library code and \
should be injected by the application.'
    )
  }

  alreadyInjected = true;

  __webpack_require__(30).injection.injectEventPluginsByName({
    'TapEventPlugin':       __webpack_require__(71)(shouldRejectClick)
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = window.Redux;

/***/ })
/******/ ]);
=======
!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=68)}([function(e,t){e.exports=window.React},function(e,t){e.exports=window.ReactRouter},function(e,t,n){try{(function(){"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",com:[]},t=arguments[1];switch(t.type){case"SETTITLE":return{title:t.title};case"SETCOM":return{com:t.com};default:return e}}function r(e){return{value:e.title,key1:e.com}}function a(e){return{onChange:function(t){return e(t)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.mapDispatchToProps=t.mapStateToProps=void 0;var o=n(90),i=(0,o.createStore)(e);t.mapStateToProps=r,t.mapDispatchToProps=a,t.store=i}).call(this)}finally{}},function(e,t){e.exports=window.ReactRedux},function(e,t){e.exports=window.ReactDOM},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?h=d.concat(h):y=-1,h.length&&l())}function l(){if(!m){var e=a(i);m=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,m=!1,o(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var u,f,p=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],m=!1,y=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||a(l)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";(function(t){function n(e,t,n,a,o,i,l,s){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,o,i,l,s],f=0;c=new Error(t.replace(/%s/g,function(){return u[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(5))},function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e,t){fetch(e).then(function(e){return e.json()}).then(function(e){t(e)})};t.default=e}).call(this)}finally{}},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var a=new Error(n);throw a.name="Invariant Violation",a.framesToPop=1,a}e.exports=r},function(e,t,n){var r,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var i in r)o.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(a=function(){return n}.apply(t,r))&&(e.exports=a))}()},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=n(58),r=e(t),a=n(83),o=e(a);if(!window.___yoTapEventInjected){try{(0,o.default)()}catch(e){}"complete"!==document.readyState&&"interactive"!==document.readyState||r.default.attach(document.body),document.addEventListener("DOMContentLoaded",function(){r.default.attach(document.body)}),document.body.addEventListener("touchmove",function(e){e.preventDefault()}),window.___yoTapEventInjected=!0}}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(4),u=e(c),f=n(64),p=e(f),d=n(14),h=n(9),m=e(h),y=n(60),v=e(y),_=n(65),b=e(_);n(87);var g={PULL:"pullrefresh_pull",RELEASE:"pullrefresh_release",LOAD:"pullrefresh_load",SUCCESS:"pullrefresh_success",FAIL:"pullrefresh_fail"},E={PULL:"loadmore_pull",RELEASE:"loadmore_release",LOAD:"loadmore_load",NOMORE:"loadmore_nomore"},w=p.default.getRAF(),T=w.rAF,P=w.cancelrAF,k={extraClass:"",containerExtraClass:"",containerExtraStyle:{},contentOffset:{x:0,y:0},disabled:!1,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:p.default.ease.circular,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},stopPropagation:!1,HWCompositing:!0,useTransition:!0,useTransform:!0,onScroll:null,usePullRefresh:!1,pullRefreshHeight:40,renderPullRefresh:null,onRefresh:null,useLoadMore:!1,loadMoreHeight:40,renderLoadMore:null,onLoad:null,autoRefresh:!0,wrapper:null,enableLazyLoad:!0,scrollWithouTouchStart:!1,stickyOffset:0},O={extraClass:l.PropTypes.string,containerExtraClass:l.PropTypes.string,containerExtraStyle:l.PropTypes.object,contentOffset:l.PropTypes.shape({x:l.PropTypes.number,y:l.PropTypes.number}),stickyOffset:l.PropTypes.number,disabled:l.PropTypes.bool,scrollX:l.PropTypes.bool,scrollY:l.PropTypes.bool,freeScroll:l.PropTypes.bool,directionLockThreshold:l.PropTypes.number,momentum:l.PropTypes.bool,bounce:l.PropTypes.bool,bounceTime:l.PropTypes.number,bounceEasing:l.PropTypes.object,useTransition:l.PropTypes.bool,useTransform:l.PropTypes.bool,onScroll:l.PropTypes.func,autoRefresh:l.PropTypes.bool,HWCompositing:l.PropTypes.bool,eventPassthrough:l.PropTypes.bool,preventDefault:l.PropTypes.bool,preventDefaultException:l.PropTypes.object,stopPropagation:l.PropTypes.bool,usePullRefresh:l.PropTypes.bool,onRefresh:l.PropTypes.func,pullRefreshHeight:l.PropTypes.number,renderPullRefresh:l.PropTypes.func,useLoadMore:l.PropTypes.bool,onLoad:l.PropTypes.func,loadMoreHeight:l.PropTypes.number,renderLoadMore:l.PropTypes.func,deceleration:l.PropTypes.number,wrapper:l.PropTypes.object,children:l.PropTypes.oneOfType([l.PropTypes.array,l.PropTypes.object,l.PropTypes.string]),style:l.PropTypes.object,enableLazyLoad:l.PropTypes.bool,scrollWithoutTouchStart:l.PropTypes.bool},N=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.x=0,n.y=0,n.directionX=0,n.directionY=0,n._scrollerStyle={},n._resetProps(e,!0),n.childLazyImages=[],n.stickyHeaders=[],n.stickyIndex=null,n.stickyOffset=null,n.wrapperOffsetTop=null,n}return o(t,e),i(t,[{key:"getChildContext",value:function(){return{scroller:this,isScroller:this.props.enableLazyLoad}}},{key:"componentDidMount",value:function(){var e=this;this.wrapper=this.noWrapper?this.wrapper:this.refs.wrapper,this.scroller=this.refs.scroller,this.useTransform||/relative|absolute/i.test(this._scrollerStyle)||(this._scrollerStyle.position="relative"),this.refresh(),this._setRefreshStatus(g.PULL),this._setLoadStatus(E.PULL),this._refreshLoadMore(),this._resetPosition(),this.scrollTo(this.props.contentOffset.x,this.props.contentOffset.y),this._resize=function(){e.forceUpdate()},window.addEventListener("orientationchange",this._resize,!1),window.addEventListener("resize",this._resize,!1),this._tryLoadLazyImages(),this._refreshSticky(!0),this.stickyHeaders.length&&(this.useTransition=!1)}},{key:"componentWillReceiveProps",value:function(e){this._resetProps(e)}},{key:"componentDidUpdate",value:function(e,t){e.contentOffset.x===this.props.contentOffset.x&&e.contentOffset.y===this.props.contentOffset.y||this.scrollTo(this.props.contentOffset.x,this.props.contentOffset.y),this.useTransform||/relative|absolute/i.test(this._scrollerStyle)||(this._scrollerStyle.position="relative",this._setStyle(this.scroller,this._scrollerStyle)),this.props.autoRefresh&&this.refresh(),t.usePullRefresh!==this.state.usePullRefresh&&this._setRefreshStatus(g.PULL),t.useLoadMore!==this.state.useLoadMore&&(this._setLoadStatus(E.PULL),this._refreshLoadMore()),this.stickyHeaders.length&&(this.useTransition=!1),this._tryLoadLazyImages(),this._refreshSticky(!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("orientationchange",this._resize,!1),window.removeEventListener("resize",this._resize,!1)}},{key:"_resetProps",value:function(e,t){this.state=this.state||{},this.translateZ=e.HWCompositing&&p.default.hasPerspective?" translateZ(0)":"",this.useTransition=p.default.hasTransition&&e.useTransition,this.useTransform=p.default.hasTransform&&e.useTransform,e.onScroll&&(this.useTransition=!1),this.eventPassthrough=e.eventPassthrough===!0?"vertical":e.eventPassthrough,this.preventDefault=!this.eventPassthrough&&e.preventDefault,this.scrollY="vertical"!==this.eventPassthrough&&e.scrollY,this.scrollX="horizontal"!==this.eventPassthrough&&e.scrollX,this.verticalBounce=!!this.scrollY&&e.bounce,this.horizontalBounce=!!this.scrollX&&e.bounce,t?(this.state.usePullRefresh=this.scrollY&&!this.scrollX&&e.usePullRefresh,this.state.useLoadMore=this.scrollY&&!this.scrollX&&e.useLoadMore):this.setState({usePullRefresh:this.scrollY&&!this.scrollX&&e.usePullRefresh,useLoadMore:this.scrollY&&!this.scrollX&&e.useLoadMore}),this.noWrapper=!!e.wrapper&&e.children&&!e.children.length&&!this.state.usePullRefresh&&!this.state.useLoadMore,this.noWrapper&&(this.wrapper=e.wrapper),this.disabled!==e.disabled&&(this.initiated=0),this.disabled=e.disabled,this.freeScroll=e.freeScroll&&!this.eventPassthrough,this.directionLockThreshold=this.eventPassthrough?0:e.directionLockThreshold}},{key:"_handleTouchStart",value:function(e){if(!(this.disabled||this.initiated&&p.default.eventType[e.type]!==this.initiated)){!this.preventDefault||p.default.isBadAndroid||p.default.preventDefaultException(e.target,this.props.preventDefaultException)||e.preventDefault(),this.props.stopPropagation&&e.stopPropagation();var t=e.touches?e.touches[0]:e;this.initiated=p.default.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=p.default.getTime(),this.stopAnimate(),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=t.pageX,this.pointY=t.pageY}}},{key:"_handleTouchMove",value:function(e){if(!this.disabled){if(p.default.eventType[e.type]!==this.initiated){if(!this.props.scrollWithoutTouchStart)return;this._handleTouchStart(e)}this.preventDefault&&e.preventDefault(),this.props.stopPropagation&&e.stopPropagation();var t=e.touches?e.touches[0]:e,n=p.default.getTime(),r=t.pageX-this.pointX,a=t.pageY-this.pointY,o=void 0,i=void 0;this.pointX=t.pageX,this.pointY=t.pageY,this.distX+=r,this.distY+=a;var l=Math.abs(this.distX),s=Math.abs(this.distY);if(!(n-this.endTime>300&&l<10&&s<10)){if(this.directionLocked||this.freeScroll||(l>s+this.directionLockThreshold?this.directionLocked="h":s>=l+this.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.eventPassthrough)e.preventDefault();else if("horizontal"===this.eventPassthrough)return void(this.initiated=!1);a=0}else if("v"===this.directionLocked){if("horizontal"===this.eventPassthrough)e.preventDefault();else if("vertical"===this.eventPassthrough)return void(this.initiated=!1);r=0}o=this.x+r,i=this.y+a,o>0?o=this.horizontalBounce?this.x+r/3:0:o<this.maxScrollX&&(o=this.horizontalBounce?this.x+r/3:this.maxScrollX),i>0?i=this.verticalBounce?this.y+a/3:0:i<this.maxScrollY&&(i=this.verticalBounce?this.y+a/3:this.maxScrollY),this.directionX=r>0?-1:r<0?1:0,this.directionY=a>0?-1:a<0?1:0,this.moved||this._execEvent("onScrollStart"),this.moved=!0,this._translate(o,i),n-this.startTime>300&&(this.startTime=n,this.startX=this.x,this.startY=this.y),this._execEvent("onScroll")}}}},{key:"_handleTouchEnd",value:function(e){if(!this.disabled&&p.default.eventType[e.type]===this.initiated){this.preventDefault&&!p.default.preventDefaultException(e.target,this.props.preventDefaultException)&&e.preventDefault(),this.props.stopPropagation&&e.stopPropagation();var t=void 0,n=void 0,r=p.default.getTime()-this.startTime,a=Math.round(this.x),o=Math.round(this.y),i=0;if(this.isInTransition=0,this.initiated=0,this.endTime=p.default.getTime(),!this.moved)return void this._execEvent("onScrollCancel");if(this.state.usePullRefresh&&this.y>=this.props.pullRefreshHeight)return void(this.refreshState===g.LOAD?this.scrollTo(this.x,this.props.pullRefreshHeight,200):(this._setRefreshStatus(g.LOAD),this.scrollTo(this.x,this.props.pullRefreshHeight,300),this._execEvent("onRefresh")));if(this.state.useLoadMore&&this.y<this.maxScrollY&&this.loadState!==E.NOMORE&&this.loadState!==E.LOAD&&(this._setLoadStatus(E.LOAD),this._execEvent("onLoad")),!this._resetPosition(this.props.bounceTime)){if(this.scrollTo(a,o),this.props.momentum&&r<300&&(t=this.hasHorizontalScroll?p.default.momentum(this.x,this.startX,r,this.maxScrollX,this.horizontalBounce?this.wrapperWidth:0,this.props.deceleration):{destination:a,duration:0},n=this.hasVerticalScroll?p.default.momentum(this.y,this.startY,r,this.maxScrollY,this.verticalBounce?this.wrapperHeight:0,this.props.deceleration):{destination:o,duration:0},a=t.destination,o=n.destination,i=Math.max(t.duration,n.duration),this.isInTransition=1),a!==this.x||o!==this.y){var l=void 0;return(a>0||a<this.maxScrollX||o>0||o<this.maxScrollY)&&(l=p.default.ease.quadratic),this.scrollTo(a,o,i,l),void this._execEvent("onMomentumScrollBegin",{targetX:a,targetY:o})}this._execEvent("onScrollEnd")}}}},{key:"_handleTransitionEnd",value:function(e){e.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this._resetPosition(this.props.bounceTime)||(this.isInTransition=!1,this._execEvent("onScrollEnd")))}},{key:"_tryLoadLazyImages",value:function(){var e=this;if(this.childLazyImages.length){var t=this;this.childLazyImages.forEach(function(n){n.offsetTop-e.wrapperOffsetTop+e.y<t.wrapperHeight&&n.load(function(){(n.props.style&&n.props.style.height?n.props.style.height:n.props.height)||t.refresh()})})}}},{key:"_getCurrentSticky",value:function(){var e=this.props.stickyOffset,t=null;if(this.y<0){var n=Math.abs(this.y-e),r=this.wrapperOffsetTop,a=this.stickyHeaders.filter(function(e){return e.offsetTop-r<=n});if(a.length){var o=a[a.length-1],i=this.stickyHeaders[a.length],l=a.length-1;if(i){var s=i.offsetTop-r-n;t={currentHeader:o,adjustOffset:s>o.height?0:-(o.height-s),index:l}}else t={currentHeader:o,adjustOffset:0,index:l}}else t=null}else t=null;return t}},{key:"_refreshSticky",value:function(e){if(this.stickyHeaders.length){var t=this._getCurrentSticky(),n=this.refs.stickyNode;if(t){var r=t.currentHeader,a=t.adjustOffset;if(t.index!==this.stickyIndex||t.adjustOffset!==this.stickyOffset||e){var o="translate(0px,"+a+"px) translateZ(0px)";n.style.transform=o,n.style.webkitTransform=o,n.style.display="block",n.className=r.stickyExtraClass,u.default.render(s.default.cloneElement(r.onlyChild),n),this.stickyIndex=t.index,this.stickyOffset=t.adjustOffset}}else this.stickyIndex=null,this.stickyOffset=null,n.style.display="none"}}},{key:"stopAnimate",value:function(){if(this.useTransition&&this.isInTransition){this._transitionTime(),this.isInTransition=!1;var e=this._getComputedPosition();this._translate(Math.round(e.x),Math.round(e.y)),this._execEvent("onScrollEnd")}else!this.useTransition&&this.isAnimating&&(this._execEvent("onScrollEnd"),P(this.rAF),this.isAnimating=!1)}},{key:"_getComputedPosition",value:function(){var e=window.getComputedStyle(this.scroller,null),t=void 0,n=void 0;return this.useTransform?(e=e[p.default.style.transform].split(")")[0].split(", "),t=+(e[12]||e[4]),n=+(e[13]||e[5])):(t=+e.left.replace(/[^-\d.]/g,""),n=+e.top.replace(/[^-\d.]/g,"")),{x:t,y:n}}},{key:"_execEvent",value:function(e,t){"onScroll"!==e&&"onScrollEnd"!==e||(this._tryLoadLazyImages(),this._refreshSticky()),"onScrollStart"===e&&(this.isScrolling=!0),"onScrollEnd"===e&&(this.isScrolling=!1),this.props[e]&&this.props[e].apply(this,[{contentOffset:{x:this.x,y:this.y},param:t}])}},{key:"refresh",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments[1]||(this.wrapperWidth=void 0!==e.wrapperWidth?e.wrapperWidth:this.wrapper.clientWidth,this.wrapperHeight=void 0!==e.wrapperHeight?e.wrapperHeight:this.wrapper.clientHeight,this.scrollerWidth=void 0!==e.scrollerWidth?e.scrollerWidth:this.scroller.offsetWidth,this.refs.wrapper&&(this.wrapperOffsetTop=(0,d.getElementOffsetY)(this.refs.wrapper,null))),this.scrollerHeight=void 0!==e.scrollerHeight?e.scrollerHeight:this.scroller.offsetHeight,this.state.useLoadMore&&this.refs.LoadMore&&(this.refs.LoadMore.style.visibility=this.scrollerHeight>0?"visible":"hidden",this.refs.LoadMore.style.top=this.scrollerHeight+"px",this.scrollerHeight+=this.props.loadMoreHeight),this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.props.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.props.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0}},{key:"_resetPosition",value:function(e){var t=this.x,n=this.y,r=e||0;return(this.refreshState!==g.LOAD||this.y!==this.props.pullRefreshHeight)&&(!this.hasHorizontalScroll||this.x>0?t=0:this.x<this.maxScrollX&&(t=this.maxScrollX),!this.hasVerticalScroll||this.y>0?n=0:this.y<this.maxScrollY&&(n=this.maxScrollY),(t!==this.x||n!==this.y)&&(this.scrollTo(t,n,r,this.props.bounceEasing),!0))}},{key:"scrollTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.y,n=arguments[2],r=arguments[3],a=r||p.default.ease.circular,o=this.useTransition&&a.style;this.isInTransition=this.useTransition&&n>0,!n||o?(o&&(this._transitionTimingFunction(a.style),this._transitionTime(n)),this._translate(e,t)):this._animate(e,t,n,a.fn)}},{key:"_transitionTimingFunction",value:function(e){this._scrollerStyle[p.default.style.transitionTimingFunction]=e}},{key:"_transitionTime",value:function(e){var t=this,n=e||0,r=p.default.style.transitionDuration;this.useTransition&&r&&(this._scrollerStyle[r]=n+"ms",!n&&p.default.isBadAndroid&&(this._scrollerStyle[r]="0.0001ms",T(function(){"0.0001ms"===t._scrollerStyle[r]&&(t._scrollerStyle[r]="0s")})),this._setStyle(this.scroller,this._scrollerStyle))}},{key:"_setStyle",value:function(e,t){var n=Object.assign({},t),r=e;Object.keys(n).forEach(function(e){r.style[e]=n[e]})}},{key:"_translate",value:function(e,t){if(this.useTransform)this._scrollerStyle[p.default.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ,this.x=e,this.y=t,this._setStyle(this.scroller,this._scrollerStyle);else{var n=Math.round(e),r=Math.round(t);this._scrollerStyle.left=n+"px",this._scrollerStyle.top=r+"px",this.x=n,this.y=r,this._setStyle(this.scroller,this._scrollerStyle)}this.state.usePullRefresh&&(t>=this.props.pullRefreshHeight&&this.refreshState===g.PULL?this._setRefreshStatus(g.RELEASE):t<this.props.pullRefreshHeight&&this.refreshState===g.RELEASE&&this._setRefreshStatus(g.PULL)),this.state.useLoadMore&&(this.maxScrollY-t>0&&this.loadState===E.PULL?this._setLoadStatus(E.RELEASE):this.maxScrollY-t<=0&&this.loadState===E.RELEASE&&this._setLoadStatus(E.PULL))}},{key:"_animate",value:function(e,t,n,r){var a=this,o=this,i=this.x,l=this.y,s=p.default.getTime(),c=s+n;this.isAnimating=!0,function u(){var f=p.default.getTime(),d=r((f-s)/n),h=(e-i)*d+i,m=(t-l)*d+l;if(f>=c)return o.isAnimating=!1,o._translate(e,t),void(o._resetPosition(o.props.bounceTime)||o._execEvent("onScrollEnd"));o._translate(h,m),a._execEvent("onScroll"),o.isAnimating&&(P(o.rAF),o.rAF=T(u))}()}},{key:"_setRefreshStatus",value:function(e){var t=this;if(this.state.usePullRefresh){var n=this.refreshState;this.refreshState=e,Object.keys(g).forEach(function(n){var r=g[n];t.refs[r]&&(t.refs[r].style.display=e===r?"":"none")});var r=this.refs[g.RELEASE].querySelector("i"),a=this.refs[g.PULL].querySelector("i");setTimeout(function(){n===g.PULL&&e===g.RELEASE?(r.style[p.default.style.transform]="",a.style[p.default.style.transform]="rotate(180deg)"):(r.style[p.default.style.transform]="rotate(-180deg)",a.style[p.default.style.transform]="")},0)}}},{key:"_setLoadStatus",value:function(e){var t=this;if(this.state.useLoadMore){var n=this.loadState;this.loadState=e,Object.keys(E).forEach(function(n){var r=E[n];t.refs[r]&&(t.refs[r].style.display=e===r?"":"none")});var r=this.refs[E.RELEASE].querySelector("i"),a=this.refs[E.PULL].querySelector("i");setTimeout(function(){n===E.PULL&&e===E.RELEASE?(r.style[p.default.style.transform]="",a.style[p.default.style.transform]="rotate(180deg)"):(r.style[p.default.style.transform]="rotate(-180deg)",a.style[p.default.style.transform]="")},0)}}},{key:"startRefreshing",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;this.state.usePullRefresh&&this.refreshState!==g.LOAD&&(this._setRefreshStatus(g.LOAD),this.scrollTo(this.x,this.props.pullRefreshHeight,e),this._execEvent("onRefresh"))}},{key:"stopRefreshing",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{duration:300};this.state.usePullRefresh&&this.refreshState===g.LOAD&&(this._setRefreshStatus(e?g.SUCCESS:g.FAIL),this.scrollTo(this.x,0,n.duration),this.disabled=!0,setTimeout(function(){t._setRefreshStatus(g.PULL),t._setLoadStatus(E.PULL),t.disabled=!1},n.duration))}},{key:"stopLoading",value:function(e){this.state.useLoadMore&&this.loadState===E.LOAD&&this._setLoadStatus(e?E.PULL:E.NOMORE)}},{key:"_refreshLoadMore",value:function(){this.state.useLoadMore?this.refs.LoadMore&&(this.refs.LoadMore.style.top=this.scrollerHeight-this.props.loadMoreHeight+"px"):this._resetPosition()}},{key:"render",value:function(){var e=this,t=this.props,n=t.extraClass,r=t.containerExtraClass,a=t.pullRefreshHeight,o=t.loadMoreHeight,i=t.stickyOffset,l=void 0,c=void 0;if(this.state.usePullRefresh){var u=s.default.createElement("div",{ref:"pullrefresh",className:"yo-load",style:{height:a+"px",lineHeight:a+"px",top:-a+"px"}},s.default.createElement("div",{className:"yo-loadtip",ref:"pullrefresh_pull"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("div",{className:"text"},"下拉可以刷新")),s.default.createElement("div",{className:"yo-loadtip",ref:"pullrefresh_release"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("div",{className:"text"},"释放立即更新")),s.default.createElement("div",{className:"yo-loadtip",ref:"pullrefresh_load"},s.default.createElement("i",{className:"yo-ico yo-ico-loading"},""),s.default.createElement("div",{className:"text"},"努力加载中...")),s.default.createElement("div",{className:"yo-loadtip",ref:"pullrefresh_success"},s.default.createElement("i",{className:"yo-ico yo-ico-succ"},""),s.default.createElement("div",{className:"text"},"加载成功")),s.default.createElement("div",{className:"yo-loadtip",ref:"pullrefresh_fail"},s.default.createElement("i",{className:"yo-ico yo-ico-fail"},""),s.default.createElement("div",{className:"text"},"加载失败")));l=this.props.renderPullRefresh?this.props.renderPullRefresh():u}if(this.state.useLoadMore){var f=s.default.createElement("div",{ref:"LoadMore",className:"yo-load",style:{height:o+"px",lineHeight:o+"px",top:-o+"px"}},s.default.createElement("div",{className:"yo-loadtip",ref:"loadmore_pull"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("div",{className:"text"},"上拉加载更多")),s.default.createElement("div",{className:"yo-loadtip",ref:"loadmore_release"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("div",{className:"text"},"释放立即加载")),s.default.createElement("div",{className:"yo-loadtip",ref:"loadmore_load"},s.default.createElement("i",{className:"yo-ico yo-ico-loading"},""),s.default.createElement("div",{className:"text"},"正在加载...")),s.default.createElement("div",{className:"yo-loadtip",ref:"loadmore_nomore"},s.default.createElement("div",{className:"text"},"没有更多了...")));c=this.props.renderLoadMore?this.props.renderLoadMore():f}var p=Object.assign({overflow:"hidden"},this.props.style),d=Object.assign({},this.props.containerExtraStyle,this._scrollerStyle),h=void 0,y=(0,m.default)("yo-scroller",n),v=(0,m.default)("scroller",r);if(this.noWrapper)h=s.default.cloneElement(this.props.children,{ref:"scroller",onTouchStart:function(t){return e._handleTouchStart(t)},onTouchMove:function(t){return e._handleTouchMove(t)},onTouchEnd:function(t){return e._handleTouchEnd(t)},onTouchCancel:function(t){return e._handleTouchEnd(t)},onTransitionEnd:function(t){return e._handleTransitionEnd(t)}});else if(!this.props.children||this.props.children.length||"string"!=typeof this.props.children.type||this.state.usePullRefresh||this.state.useLoadMore)h=s.default.createElement("div",{ref:"wrapper",className:y,onTouchStart:function(t){return e._handleTouchStart(t)},onTouchMove:function(t){return e._handleTouchMove(t)},onTouchEnd:function(t){return e._handleTouchEnd(t)},onTouchCancel:function(t){return e._handleTouchEnd(t)},onTransitionEnd:function(t){return e._handleTransitionEnd(t)},style:p},s.default.createElement("div",{ref:"stickyNode",style:{position:"absolute",top:i,left:0,right:0,zIndex:9999},className:"sticky"}),s.default.createElement("div",{className:v,ref:"scroller",style:d},this.props.children,l,c));else{v=this.props.children.props&&this.props.children.props.className?(0,m.default)("scroller",this.props.children.props.className):"scroller";var _=s.default.cloneElement(this.props.children,{ref:"scroller",className:v,style:d});h=s.default.createElement("div",{ref:"wrapper",className:y,onTouchStart:function(t){return e._handleTouchStart(t)},onTouchMove:function(t){return e._handleTouchMove(t)},onTouchEnd:function(t){return e._handleTouchEnd(t)},onTouchCancel:function(t){return e._handleTouchEnd(t)},onTransitionEnd:function(t){return e._handleTransitionEnd(t)},style:p},s.default.createElement("div",{ref:"stickyNode",style:{position:"absolute",top:i,left:0,right:0,zIndex:9999},className:"sticky"}),_)}return h}}]),t}(l.Component);N.ease=p.default.ease,N.childContextTypes={scroller:l.PropTypes.object,isScroller:l.PropTypes.bool},t.default=N,N.defaultProps=k,N.propTypes=O,N.Sticky=b.default,N.LazyImage=v.default}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(1),c=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"我的订单"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},"我的"),l.default.createElement("span",{className:"affirm"},l.default.createElement(s.Link,{to:"/address",className:"yo-ico"},"")))}}]),n}(l.default.Component);t.default=c}).call(this)}finally{}},function(e,t,n){"use strict";(function(t){var r=n(30),a=r;"production"!==t.env.NODE_ENV&&function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=0,o="Warning: "+e.replace(/%s/g,function(){return n[a++]});"undefined"!=typeof console&&console.error(o);try{throw new Error(o)}catch(e){}};a=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];e.apply(void 0,[n].concat(a))}}}(),e.exports=a}).call(t,n(5))},function(e,t,n){try{(function(){"use strict";function e(e){for(var t=[],n=0;n<e;n++)t[n]=null;return t}function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:isNaN(e)&&isNaN(t)}function r(e,t){if(n(e,t))return!0;if("object"!==(void 0===e?"undefined":i(e))||null===e||"object"!==(void 0===t?"undefined":i(t))||null===t)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(var o=Object.prototype.hasOwnProperty,l=0;l<r.length;l++)if(!o.call(t,r[l])||!n(e[r[l]],t[r[l]]))return!1;return!0}function a(e,t){for(var n=0;e!==t&&null!==e;)n+=e.offsetTop,e=e.offsetParent;return n}function o(e,t){return t.reduce(function(t,n){return t[n]=e[n],t},{})}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getArrayByLength=e,t.shallowEqual=r,t.getElementOffsetY=a,t.inheritProps=o;t.DELAY_TIME_FOR_INFINITE_WITHOUT_HEIGHT=250}).call(this)}finally{}},function(e,t,n){"use strict";(function(t){function r(e){return"topMouseUp"===e||"topTouchEnd"===e||"topTouchCancel"===e}function a(e){return"topMouseMove"===e||"topTouchMove"===e}function o(e){return"topMouseDown"===e||"topTouchStart"===e}function i(e,t,n,r){var a=e.type||"unknown-event";e.currentTarget=g.getNodeFromInstance(r),t?y.invokeGuardedCallbackWithCatch(a,n,e):y.invokeGuardedCallback(a,n,e),e.currentTarget=null}function l(e,n){var r=e._dispatchListeners,a=e._dispatchInstances;if("production"!==t.env.NODE_ENV&&h(e),Array.isArray(r))for(var o=0;o<r.length&&!e.isPropagationStopped();o++)i(e,n,r[o],a[o]);else r&&i(e,n,r,a);e._dispatchListeners=null,e._dispatchInstances=null}function s(e){var n=e._dispatchListeners,r=e._dispatchInstances;if("production"!==t.env.NODE_ENV&&h(e),Array.isArray(n)){for(var a=0;a<n.length&&!e.isPropagationStopped();a++)if(n[a](e,r[a]))return r[a]}else if(n&&n(e,r))return r;return null}function c(e){var t=s(e);return e._dispatchInstances=null,e._dispatchListeners=null,t}function u(e){"production"!==t.env.NODE_ENV&&h(e);var n=e._dispatchListeners,r=e._dispatchInstances;Array.isArray(n)&&("production"!==t.env.NODE_ENV?v(!1,"executeDirectDispatch(...): Invalid `event`."):m("103")),e.currentTarget=n?g.getNodeFromInstance(r):null;var a=n?n(e):null;return e.currentTarget=null,e._dispatchListeners=null,e._dispatchInstances=null,a}function f(e){return!!e._dispatchListeners}var p,d,h,m=n(8),y=n(34),v=n(6),_=n(13),b={injectComponentTree:function(e){p=e,"production"!==t.env.NODE_ENV&&"production"!==t.env.NODE_ENV&&_(e&&e.getNodeFromInstance&&e.getInstanceFromNode,"EventPluginUtils.injection.injectComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.")},injectTreeTraversal:function(e){d=e,"production"!==t.env.NODE_ENV&&"production"!==t.env.NODE_ENV&&_(e&&e.isAncestor&&e.getLowestCommonAncestor,"EventPluginUtils.injection.injectTreeTraversal(...): Injected module is missing isAncestor or getLowestCommonAncestor.")}};"production"!==t.env.NODE_ENV&&(h=function(e){var n=e._dispatchListeners,r=e._dispatchInstances,a=Array.isArray(n),o=a?n.length:n?1:0,i=Array.isArray(r),l=i?r.length:r?1:0;"production"!==t.env.NODE_ENV&&_(i===a&&l===o,"EventPluginUtils: Invalid `event`.")});var g={isEndish:r,isMoveish:a,isStartish:o,executeDirectDispatch:u,executeDispatchesInOrder:l,executeDispatchesInOrderStopAtTrue:c,hasDispatches:f,getInstanceFromNode:function(e){return p.getInstanceFromNode(e)},getNodeFromInstance:function(e){return p.getNodeFromInstance(e)},isAncestor:function(e,t){return d.isAncestor(e,t)},getLowestCommonAncestor:function(e,t){return d.getLowestCommonAncestor(e,t)},getParentInstance:function(e){return d.getParentInstance(e)},traverseTwoPhase:function(e,t,n){return d.traverseTwoPhase(e,t,n)},traverseEnterLeave:function(e,t,n,r,a){return d.traverseEnterLeave(e,t,n,r,a)},injection:b};e.exports=g}).call(t,n(5))},function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactRouter=__webpack_require__(1),_fetch=__webpack_require__(7),_fetch2=_interopRequireDefault(_fetch),ReactDOM=__webpack_require__(4),Cart=function(_React$Component){function Cart(e){_classCallCheck(this,Cart);var t=_possibleConstructorReturn(this,(Cart.__proto__||Object.getPrototypeOf(Cart)).call(this,e));return t.state={title:"购物车",have:!0,num:0,shalist:[],datalist:[],data:"",value:1,ani:"ani nni"},t}return _inherits(Cart,_React$Component),_createClass(Cart,[{key:"render",value:function(){return _react2.default.createElement("div",{className:"cart"},_react2.default.createElement("div",{className:"cart_header"},_react2.default.createElement("button",{onClick:this.delate.bind(this)},"删除"),_react2.default.createElement("p",null,"每单满300就95折,您还差230.1元就可以享受啦")),_react2.default.createElement("ul",{className:"cart_main"},this.state.datalist),_react2.default.createElement("div",{className:"cart_add"},_react2.default.createElement("div",{className:"cart_gou"},_react2.default.createElement("div",null)),_react2.default.createElement("span",null,"总计 :",_react2.default.createElement("i",null,"￥100.00")," "),_react2.default.createElement("button",null,"结算(1)")),_react2.default.createElement("div",{className:"cart_ani"},_react2.default.createElement("div",{className:this.state.ani},_react2.default.createElement("div",{className:"aniup"},_react2.default.createElement("span",null,"修改数量 : "),_react2.default.createElement("img",{onClick:this.guabi.bind(this,!1),src:"http://st16.live800.com/live800/chatClient/v5mobile/skin/common/closebtn.png"})),_react2.default.createElement("div",{className:"anicenter"},_react2.default.createElement("span",{onClick:this.addvalue.bind(this,!1)},"-"),_react2.default.createElement("input",{type:"text",value:this.state.value}),_react2.default.createElement("span",{onClick:this.addvalue.bind(this,!0)},"+")),_react2.default.createElement("div",{className:"anidown"},_react2.default.createElement("span",null,"取消"),_react2.default.createElement("span",null,"完成")))))}},{key:"comeon",value:function(){var e=this,t=[];if(localStorage.getItem("Sn")&&""!==localStorage.getItem("Sn")){var n=localStorage.getItem("Sn"),r=n.split(",");t=this.state.data.map(function(t){for(var n=0,a=r.length;n<a-1;n++)if(t.Sn==r[n])return _react2.default.createElement("li",{key:n},_react2.default.createElement("div",{className:"list_header"}),_react2.default.createElement("div",{className:"cart_list"},_react2.default.createElement("div",{className:"cart_gou"},_react2.default.createElement("div",{onClick:e.change.bind(e,t.Sn)})),_react2.default.createElement("img",{src:t.goodsImg}),_react2.default.createElement("div",{className:"cart_menu"},_react2.default.createElement("p",null,t.Caption),_react2.default.createElement("g",null,"价格 : ￥",t.Price),_react2.default.createElement("div",{className:"cart_num"},_react2.default.createElement("span",null,"数量 : "),_react2.default.createElement("input",{type:"number",min:"1",onClick:e.guabi.bind(e,!0),onChange:e.numadd.bind(e,t.Price)})),_react2.default.createElement("i",null,"小计:",_react2.default.createElement("span",null,"￥",e.state.num)))))})}else t.push(_react2.default.createElement("li",{className:"pacecart"},_react2.default.createElement("img",{src:"http://m.6688.com/shop/MobileUI/img/mine/order/cart.png"}),_react2.default.createElement("p",null,"购物车还是空的,去购物吧!"),_react2.default.createElement("div",{className:"pacebtn"},_react2.default.createElement(_reactRouter.Link,{to:"/home"},_react2.default.createElement("button",null,"随便逛逛")),_react2.default.createElement(_reactRouter.Link,{to:""},_react2.default.createElement("button",{className:"last"},"我的收藏")))));this.setState({datalist:t})}},{key:"componentDidMount",value:function componentDidMount(){(0,_fetch2.default)("./json/list.json",function(res){var data=eval(res);this.setState({data:data}),this.comeon()}.bind(this))}},{key:"guabi",value:function(e){var t="";t=e?"ani elastic-in-up":"ani elastic-out-down",this.setState({ani:t})}},{key:"addvalue",value:function(e){var t=this.state.value;e?t++:t>1&&t--,this.setState({value:t})}},{key:"delate",value:function(){var e=this.state.shalist,t=localStorage.getItem("Sn");if(t){for(var n=t.split(","),r=0,a=n.length;r<a-1;r++)for(var o=0,i=e.length;o<i;o++)n[r]===e[o]&&n.splice(r,1);t=n.toString(),localStorage.removeItem("Sn"),localStorage.setItem("Sn",t),this.comeon()}}},{key:"numadd",value:function(e,t){var n=t.target.value,e=parseInt(e)*n;this.setState({num:e}),this.comeon()}},{key:"change",value:function(e,t){var n=this.state.have,r=this.state.shalist;n?(t.target.style.backgroundImage="url('http://m.6688.com/shop/MobileUI/img/Chosen.png')",t.target.style.backgroundSize="100% 100%",r.push(e)):(t.target.style.backgroundImage="none",r.map(function(t,n){t===e&&r.splice(n,1)})),this.setState({have:!n,shalist:r})}}]),Cart}(_react2.default.Component);exports.default=Cart}).call(this)}finally{}},function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_src=__webpack_require__(57),_src2=_interopRequireDefault(_src),_src3=__webpack_require__(11),_src4=_interopRequireDefault(_src3),_reactRouter=__webpack_require__(1),_fetch=__webpack_require__(7),_fetch2=_interopRequireDefault(_fetch),ReactDOM=__webpack_require__(4),Home=function(_React$Component){function Home(e){_classCallCheck(this,Home);var t=_possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).call(this,e));return t.state={title:"首页",navlist1:"",navlist2:"",homelist:[],updown:"home_up",zlen:50},t}return _inherits(Home,_React$Component),_createClass(Home,[{key:"goup",value:function(){this.refs.scroller.scrollTo(0,0,300)}},{key:"upshow",value:function(e){var t=e.contentOffset.y;document.getElementById("p").style.display=t>=-160?"none":"block"}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{className:"home"},_react2.default.createElement("div",{className:this.state.updown,id:"p",onClick:this.goup.bind(this)},_react2.default.createElement("img",{src:"http://m.6688.com/img/newIndex/201607/scroll-to-top-icon.png"})),_react2.default.createElement(_src4.default,{extraClass:"yo-scroller yo-scroller-fullscreen",onScroll:this.upshow,ref:"scroller",usePullRefresh:!0,onRefresh:function(){e.setState({navlist1:"",navlist2:"",zlen:30,homelist:[]}),e.fetchRefresh("./json/nav.json"),e.fetchLoad("./json/list.json",e.state.zlen),e.refs.scroller.stopRefreshing(!0)},useLoadMore:!0,onLoad:function(){e.fetchLoad("./json/list.json",e.state.zlen),e.refs.scroller.stopLoading(!0)}},_react2.default.createElement("div",{className:"home_scroll"},_react2.default.createElement("div",{className:"home_swiper"},_react2.default.createElement("div",null,_react2.default.createElement(_src2.default,{autoplay:!0},_react2.default.createElement("a",{className:"item"},_react2.default.createElement("img",{className:"img",src:"http://m.6688.com/img/newIndex/banner/banner-mmzlxiao.jpg"})),_react2.default.createElement("a",{className:"item"},_react2.default.createElement("img",{className:"img",src:"http://m.6688.com/img/newIndex/banner/banner-nyryss.jpg"})),_react2.default.createElement("a",{className:"item"},_react2.default.createElement("img",{className:"img",src:"http://m.6688.com/img/newIndex/banner/banner-gypyqm.jpg"})),_react2.default.createElement("a",{className:"item"},_react2.default.createElement("img",{className:"img",src:"http://m.6688.com/img/newIndex/banner/banner-slxgxiao.jpg"}))))),_react2.default.createElement("div",{className:"home_promotion"},_react2.default.createElement("a",{href:"#"},_react2.default.createElement("img",{src:"http://m.6688.com/img/newIndex/201607/promotion/promotion_01.png"})),_react2.default.createElement("a",{href:"#"},_react2.default.createElement("img",{src:"http://m.6688.com/img/newIndex/201607/promotion/promotion_02.png"})),_react2.default.createElement("a",{href:"#"},_react2.default.createElement("img",{src:"http://m.6688.com/img/newIndex/201607/promotion/promotion_03.png"}))),_react2.default.createElement("div",{className:"home_nav"},_react2.default.createElement("ul",null,this.state.navlist1)),_react2.default.createElement("div",{className:"home_main"},_react2.default.createElement("div",{className:"home_menu"},_react2.default.createElement("hr",null),_react2.default.createElement("span",null,"进店必败"),_react2.default.createElement("hr",null)),_react2.default.createElement("ul",null,this.state.homelistf),_react2.default.createElement("ul",null,this.state.homelist)),_react2.default.createElement("div",{className:"home_nav"},_react2.default.createElement("ul",null,this.state.navlist2)))))}},{key:"fetchRefresh",value:function fetchRefresh(url){(0,_fetch2.default)(url,function(res){for(var data=eval(res),list1=[],list2=[],i=0;i<16;i++)i<8?list1.push({img:"http://m.6688.com/img/newIndex/201607/catalogNavigation/"+data[i].catalogName+".jpg",catalogName:data[i].catalogName}):list2.push({img:"http://m.6688.com/img/newIndex/201607/catalogNavigation/"+data[i].catalogName+".jpg",catalogName:data[i].catalogName});var nlist1=list1.map(function(e){return _react2.default.createElement("li",{className:"item"},_react2.default.createElement("img",{src:e.img}))}),nlist2=list2.map(function(e){return _react2.default.createElement("li",{className:"item"},_react2.default.createElement("img",{src:e.img}))});this.setState({navlist1:nlist1,navlist2:nlist2})}.bind(this))}},{key:"fetchLoad",value:function fetchLoad(url,zle){(0,_fetch2.default)(url,function(res){var data=eval(res),klen=this.state.homelist.length,len=data.length,hlist=[];if(zle<=len)for(var i=klen;i<zle;i++)hlist.push(_react2.default.createElement(_reactRouter.Link,{to:"/detail/"+data[i].Sn},_react2.default.createElement("li",{className:"home_list"},_react2.default.createElement(_src4.default.LazyImage,{src:data[i].goodsImg}))));else if(zle>=len&&zle-50<=len)for(var i=klen;i<len;i++)hlist.push(_react2.default.createElement(_reactRouter.Link,{to:"/detail/"+data[i].Sn},_react2.default.createElement("li",{className:"home_list"},_react2.default.createElement(_src4.default.LazyImage,{src:data[i].goodsImg}))));zle+=30;var ulist=[];this.state.homelist.map(function(e){ulist.push(e)}),hlist.map(function(e){ulist.push(e)}),this.setState({homelist:ulist,zlen:zle})}.bind(this))}},{key:"componentDidMount",value:function(){this.fetchLoad("./json/list.json",this.state.zlen),this.fetchRefresh("./json/nav.json")}}]),Home}(_react2.default.Component);exports.default=Home}).call(this)}finally{}},function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_src=__webpack_require__(11),_src2=_interopRequireDefault(_src),_reactRouter=__webpack_require__(1),_reactRedux=__webpack_require__(3),_store=__webpack_require__(2),_fetch=__webpack_require__(7),_fetch2=_interopRequireDefault(_fetch),ReactDOM=__webpack_require__(4),Kind=function(_React$Component){function Kind(e){_classCallCheck(this,Kind);var t=_possibleConstructorReturn(this,(Kind.__proto__||Object.getPrototypeOf(Kind)).call(this,e));return t.state={title:"分类",searchlist:"",str:""},t}return _inherits(Kind,_React$Component),_createClass(Kind,[{key:"render",value:function(){return _react2.default.createElement("div",{className:"search"},_react2.default.createElement(_src2.default,{extraClass:"yo-scroller yo-scroller-fullscreen"},_react2.default.createElement("ul",{className:"k"},this.state.searchlist)))}},{key:"data",value:function(e){this.setState({str:e})}},{key:"componentDidMount",value:function componentDidMount(){(0,_fetch2.default)("./json/nav.json",function(res){var _this2=this,data=eval(res),slist=data.map(function(e){return _react2.default.createElement("li",{className:"search_list",onClick:_this2.data.bind(_this2,e.catalogName)},_react2.default.createElement(_reactRouter.Link,{to:"/list/"+e.catalogName,title:e.catalogName},e.catalogName))});this.setState({searchlist:slist})}.bind(this))}}]),Kind}(_react2.default.Component);exports.default=(0,_reactRedux.connect)(_store.mapStateToProps,_store.mapDispatchToProps)(Kind)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=(n(1),n(31)),u=e(c),f=(n(4),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={title:"客服",show1:!1,show2:!1,name:"",phone:"",main:""},n}return o(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"service"},s.default.createElement("div",{className:"service_header"},"请留言,我们会尽快给您回复!"),s.default.createElement("div",{className:"service_main"},s.default.createElement("form",null,s.default.createElement("label",null,"姓名"),s.default.createElement("input",{type:"text",onChange:this.valChange.bind(this,"name"),placeholder:"(必填)"}),s.default.createElement("label",null,"手机号码"),s.default.createElement("input",{type:"tel",onChange:this.valChange.bind(this,"phone"),placeholder:"(必填)"}),s.default.createElement("label",null,"电子邮件"),s.default.createElement("input",{type:"email",autocomplete:"off"}),s.default.createElement("label",null,"订单号"),s.default.createElement("input",{type:"text"}),s.default.createElement("label",null,"留言主题:"),s.default.createElement("input",{type:"text"}),s.default.createElement("label",{className:"textarea"},"留言内容:"),s.default.createElement("textarea",{rows:"3",onChange:this.valChange.bind(this,"main"),placeholder:"(必填)"}),s.default.createElement("div",{className:"submit"},s.default.createElement("button",{className:"inputSure",onClick:this.isshow.bind(this,!0)},"确定"),s.default.createElement("button",{className:"inputFalse"},"取消")))),s.default.createElement(u.default,{show:this.state.show1},s.default.createElement("div",null,s.default.createElement("img",{onClick:this.isshow.bind(this,!1),src:"http://st16.live800.com/live800/chatClient/v5mobile/skin/common/closebtn.png"}),s.default.createElement("p",null,"您的留言我们已收到,正在处理中..."))),s.default.createElement(u.default,{show:this.state.show2},s.default.createElement("div",null,s.default.createElement("img",{onClick:this.isshowk.bind(this),src:"http://st16.live800.com/live800/chatClient/v5mobile/skin/common/closebtn.png"}),s.default.createElement("p",null,"必填项不能为空"))))}},{key:"valChange",value:function(e,t){var n=t.target.value;"name"===e?this.setState({name:n}):"phone"===e?this.setState({name:n}):"main"===e&&this.setState({main:n})}},{key:"isshow",value:function(e){var t=this.state.name,n=this.state.main,r=this.state.phone;""!==t||""!==n||""!==r?this.setState({show1:e}):1==e&&this.setState({show2:!0}),e===!1&&this.setState({name:"",main:"",phone:""})}},{key:"isshowk",value:function(){this.setState({show2:!1})}}]),t}(s.default.Component));t.default=f}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(1),u=n(21),f=(e(u),n(23)),p=(e(f),n(24)),d=(e(p),n(26)),h=(e(d),n(27)),m=(e(h),n(22)),y=(e(m),n(25)),v=(e(y),n(29)),_=(e(v),n(12)),b=(e(_),n(4),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={arr:[]},n}return o(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"user-content"},s.default.createElement("div",{className:"user-banner"},this.state.arr),s.default.createElement("div",{className:"user-list"},s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement(c.Link,{to:"/myorder"},s.default.createElement("img",{src:"/img/myOrder.png"}),"我的订单",s.default.createElement("span",{className:"yo-ico"},""))),s.default.createElement("li",null,s.default.createElement(c.Link,{to:"/history"},s.default.createElement("img",{src:"/img/myHistoryOrder.png"}),"历史订单",s.default.createElement("span",{className:"yo-ico"},""))),s.default.createElement("li",null,s.default.createElement(c.Link,{to:"/collect"},s.default.createElement("img",{src:"/img/myConcern.png"}),"我的收藏",s.default.createElement("span",{className:"yo-ico"},""))),s.default.createElement("li",null,s.default.createElement(c.Link,{to:"/address"},s.default.createElement("img",{src:"/img/myAddress.png"}),"我的地址",s.default.createElement("span",{className:"yo-ico"},""))),s.default.createElement("li",null,s.default.createElement(c.Link,{to:"/account"},s.default.createElement("img",{src:"/img/myAccount.png"}),"我的账户",s.default.createElement("span",{className:"yo-ico"},""))),s.default.createElement("li",null,s.default.createElement(c.Link,{to:"/help"},s.default.createElement("img",{src:"/img/helpCenter.png"}),"帮助中心",s.default.createElement("span",{className:"yo-ico"},""))))))}},{key:"componentDidMount",value:function(){var e=[];if(localStorage.getItem("userID")){var t=localStorage.getItem("userID");e.push(s.default.createElement("div",{className:"user-box"},s.default.createElement("img",{src:"/img/wo.png"}),s.default.createElement("p",null,t)))}else e.push(s.default.createElement("div",{className:"user-box"},s.default.createElement("p",null,"欢迎来到6688"),s.default.createElement("div",{className:"box"},s.default.createElement(c.Link,{to:"/login"},"登陆 / 注册"))));this.setState({arr:e})}}]),t}(s.default.Component));t.default=b}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(28),u=(e(c),n(3)),f=n(1),p=n(2),d=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={title:"新建地址"},n}return o(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"main"},s.default.createElement("header",{className:"yo-header yo-header-c"},s.default.createElement("p",{className:"title"},this.props.value),s.default.createElement("span",{className:"regret yo-ico",onClick:this.back},""),s.default.createElement("span",{className:"affirm"},s.default.createElement(f.Link,{to:"/newaddress"},"新建"))),s.default.createElement("section",null,s.default.createElement("ul",{className:"user-address"},s.default.createElement("li",{className:"Saveaddress"},s.default.createElement("div",{className:"addressinfo"},s.default.createElement("div",{className:"addressDetail"},s.default.createElement("span",{className:"address_name"},"大健康"),s.default.createElement("span",{className:"phonenumber"},"15733665467")),s.default.createElement("div",{className:"choosen"},s.default.createElement("span",{className:"ischoosen"},s.default.createElement("img",{src:"/img/Chosen.png"})))),s.default.createElement("div",{className:"reviseAddress"},s.default.createElement("a",{href:"#/editaddress"},s.default.createElement("img",{src:"/img/edit.png"})))))))}},{key:"back",value:function(){f.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"我的地址"})}}]),t}(s.default.Component);t.default=(0,u.connect)(p.mapStateToProps,p.mapDispatchToProps)(d)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"购物车"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("span",{className:"regret yo-ico",onClick:this.back},"")),l.default.createElement("section",null,l.default.createElement("ul",{className:"my-concern"},l.default.createElement("li",{className:"concern-list"},l.default.createElement("div",{className:"goodsimg"},l.default.createElement("img",null)),l.default.createElement("div",{className:"goodsdetail"},l.default.createElement("span",{className:"goodsname"},"121313"),l.default.createElement("span",{className:"goodsprice"},"13131"))))))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"我的收藏"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"帮助中心"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("span",{className:"regret yo-ico",onClick:this.back},"")),l.default.createElement("section",null,l.default.createElement("div",{className:"user-help"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",null,"问：有货吗？"),l.default.createElement("p",null,"答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。")),l.default.createElement("li",null,l.default.createElement("span",null,"问：有货吗？"),l.default.createElement("p",null,"答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。")),l.default.createElement("li",null,l.default.createElement("span",null,"问：有货吗？"),l.default.createElement("p",null,"答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。")),l.default.createElement("li",null,l.default.createElement("span",null,"问：有货吗？"),l.default.createElement("p",null,"答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。"))))))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"帮助中心"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"购物车"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("span",{className:"regret yo-ico",onClick:this.back},"")),l.default.createElement("section",null))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"历史订单"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.login=a.login.bind(a),a}return a(n,t),o(n,[{key:"login",value:function(){var e=this.refs.username.value,t=this.refs.password.value;""!=e&&""!=t||alert("用户名或密码错误");var n="http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+e+"&password="+t;fetch(n).then(function(e){return e.json()}).then(function(t){t instanceof Object?(window.location.href="#/user",localStorage.setItem("userID",e)):alert("用户名或密码错误")})}},{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("a",{className:"regret yo-ico",onClick:this.back},"")),l.default.createElement("div",{className:"login_section"},l.default.createElement("div",{className:"user-login"},l.default.createElement("div",{className:"login-username"},l.default.createElement("span",{className:"user yo-ico"},""),l.default.createElement("input",{ref:"username",type:"text",placeholder:"请输入手机号/邮箱"})),l.default.createElement("div",{className:"login-password"},l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{ref:"password",type:"password",placeholder:"请输入密码"})),l.default.createElement("div",{className:"tab"},l.default.createElement("span",{className:"toRegister"},l.default.createElement("a",{href:"#/register"},"立即注册")),l.default.createElement("button",{onClick:this.login},"登陆")),l.default.createElement("p",null,l.default.createElement("a",{href:"#/forget"},"忘记密码")),l.default.createElement("h5",null,"第三方登陆账号快速登陆"),l.default.createElement("div",{className:"weibo"},l.default.createElement("a",{href:"#"},l.default.createElement("img",{src:"/img/sina_1.jpg"}))))))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"登陆"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"购物车"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("span",{className:"regret yo-ico",onClick:this.back},"")),l.default.createElement("section",null))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"我的账户"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"我的订单"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("a",{className:"regret yo-ico",onClick:this.back},"")),l.default.createElement("section",null,l.default.createElement("ul",{className:"my-concern"},l.default.createElement("li",{className:"concern-list"},l.default.createElement("div",{className:"goodsimg"},l.default.createElement("img",null)),l.default.createElement("div",{className:"goodsdetail"},l.default.createElement("span",{className:"goodsname"},"洗衣粉"),l.default.createElement("span",{className:"goodsprice"},"13131"))))))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"我的订单"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"购物车"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("a",{className:"regret yo-ico",onClick:this.back},""),l.default.createElement("span",{className:"affirm"},l.default.createElement(u.Link,{to:"/address"},"保存"))),l.default.createElement("section",null,l.default.createElement("div",{className:"newaddress"},l.default.createElement("div",{className:"line"},l.default.createElement("span",null,"收货人姓名:"),l.default.createElement("div",null,l.default.createElement("input",{type:"text",placeholder:"输入收货人"}))),l.default.createElement("div",{className:"line"},l.default.createElement("span",null,"所在地区:"),l.default.createElement("div",null,l.default.createElement("input",{type:"text",placeholder:"所在地区"}))),l.default.createElement("div",{className:"line"},l.default.createElement("span",null,"手机号码:"),l.default.createElement("div",null,l.default.createElement("input",{type:"text",placeholder:"输入手机号"}))),l.default.createElement("div",{className:"line"},l.default.createElement("span",null,"邮政编码:"),l.default.createElement("div",null,l.default.createElement("input",{type:"text",placeholder:"请输入邮政编码"}))))))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"新建地址"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("a",{className:"regret yo-ico",onClick:this.back},"")),l.default.createElement("section",null,l.default.createElement("div",{className:"user-register"},l.default.createElement("div",null,l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{type:"text",placeholder:"请输入手机号"}),l.default.createElement("button",null,"获取验证码")),l.default.createElement("div",null,l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{type:"text",placeholder:"请输入您收到的验证码"})),l.default.createElement("div",null,l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{type:"password",placeholder:"请设置密码"})),l.default.createElement("div",null,l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{type:"password",placeholder:"重复密码"})),l.default.createElement("div",null,l.default.createElement("input",{className:"gift",type:"text",placeholder:"如有礼券请在此输入"})),l.default.createElement("p",null,"以活动奖励等方式获得的电子礼券的代码"),l.default.createElement("p",{className:"tip"},"如果在120秒内未能收到系统发送的短信,请继续点击获取验证码"),l.default.createElement("button",null,"注册"),l.default.createElement("h4",null,l.default.createElement("span",null,"已阅读并同意"),l.default.createElement("a",{href:"#"},"6688交易条款")))))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"注册"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(4),u=e(c),f=n(62),p=e(f);n(39),n(10);var d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"componentDidMount",value:function(){this.wrapper=document.createElement("div"),document.body.appendChild(this.wrapper),this.appendWrapperToDocBody()}},{key:"componentDidUpdate",value:function(){this.appendWrapperToDocBody()}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.wrapper)}},{key:"appendWrapperToDocBody",value:function(){u.default.unstable_renderSubtreeIntoContainer(this,s.default.createElement(p.default,this.props,this.props.children),this.wrapper)}},{key:"render",value:function(){return null}}]),t}(l.Component);d.propTypes={children:l.PropTypes.oneOfType([l.PropTypes.array,l.PropTypes.object])},t.default=d}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(4),u=e(c);n(88);var f=null,p=document.createElement("div"),d={show:!1},h={show:l.PropTypes.bool};document.body.appendChild(p);var m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show:n.props.show,content:"",autoHideTime:2e3},n._timer=null,f=n,n}return o(t,e),i(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this;return this.setState({show:t.show}),this._timer&&(clearTimeout(this._timer),this._timer=null),this._timer=setTimeout(function(){return n.setState({show:!1})},t.autoHideTime),!0}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer),document.body.removeChild(p)}},{key:"render",value:function(){var e=this.state,t=e.show,n=e.content;return s.default.createElement("div",{className:"yo-toast",style:{display:t?null:"none"}},n)}}]),t}(l.Component);m.propTypes=h,m.defaultProps=d,u.default.render(s.default.createElement(m,null),p),t.default={show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"no content",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return f.setState({content:e,autoHideTime:t,show:!0}),this},hide:function(){return f.setState({show:!1}),this}}}).call(this)}finally{}},function(e,t,n){"use strict";(function(t){function r(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}function a(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":return!(!n.disabled||!r(t));default:return!1}}var o=n(8),i=n(72),l=n(15),s=n(34),c=n(35),u=n(36),f=n(6),p={},d=null,h=function(e,t){e&&(l.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e))},m=function(e){return h(e,!0)},y=function(e){return h(e,!1)},v=function(e){return"."+e._rootNodeID},_={injection:{injectEventPluginOrder:i.injectEventPluginOrder,injectEventPluginsByName:i.injectEventPluginsByName},putListener:function(e,n,r){"function"!=typeof r&&("production"!==t.env.NODE_ENV?f(!1,"Expected %s listener to be a function, instead got type %s",n,typeof r):o("94",n,typeof r));var a=v(e);(p[n]||(p[n]={}))[a]=r;var l=i.registrationNameModules[n];l&&l.didPutListener&&l.didPutListener(e,n,r)},getListener:function(e,t){var n=p[t];if(a(t,e._currentElement.type,e._currentElement.props))return null;var r=v(e);return n&&n[r]},deleteListener:function(e,t){var n=i.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t);var r=p[t];if(r){delete r[v(e)]}},deleteAllListeners:function(e){var t=v(e);for(var n in p)if(p.hasOwnProperty(n)&&p[n][t]){var r=i.registrationNameModules[n];r&&r.willDeleteListener&&r.willDeleteListener(e,n),delete p[n][t]}},extractEvents:function(e,t,n,r){for(var a,o=i.plugins,l=0;l<o.length;l++){var s=o[l];if(s){var u=s.extractEvents(e,t,n,r);u&&(a=c(a,u))}}return a},enqueueEvents:function(e){e&&(d=c(d,e))},processEventQueue:function(e){var n=d;d=null,e?u(n,m):u(n,y),d&&("production"!==t.env.NODE_ENV?f(!1,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."):o("95")),s.rethrowCaughtError()},__purge:function(){p={}},__getListenerBank:function(){return p}};e.exports=_}).call(t,n(5))},function(e,t,n){"use strict";(function(t){function n(e,t,n){try{t(n)}catch(e){null===r&&(r=e)}}var r=null,a={invokeGuardedCallback:n,invokeGuardedCallbackWithCatch:n,rethrowCaughtError:function(){if(r){var e=r;throw r=null,e}}};if("production"!==t.env.NODE_ENV&&"undefined"!=typeof window&&"function"==typeof window.dispatchEvent&&"undefined"!=typeof document&&"function"==typeof document.createEvent){var o=document.createElement("react");a.invokeGuardedCallback=function(e,t,n){var r=t.bind(null,n),a="react-"+e;o.addEventListener(a,r,!1);var i=document.createEvent("Event");i.initEvent(a,!1,!1),o.dispatchEvent(i),o.removeEventListener(a,r,!1)}}e.exports=a}).call(t,n(5))},function(e,t,n){"use strict";(function(t){function r(e,n){return null==n&&("production"!==t.env.NODE_ENV?o(!1,"accumulateInto(...): Accumulated items must not be null or undefined."):a("30")),null==e?n:Array.isArray(e)?Array.isArray(n)?(e.push.apply(e,n),e):(e.push(n),e):Array.isArray(n)?[e].concat(n):[e,n]}var a=n(8),o=n(6);e.exports=r}).call(t,n(5))},function(e,t,n){"use strict";function r(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}e.exports=r},function(e,t,n){"use strict";function r(e,t,n){return!a(e.props,t)||!a(e.state,n)}var a=n(54);e.exports=r},function(e,t){},function(e,t){},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(1),c=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"我的订单"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("header",{className:"yo-header yo-header-cart"},l.default.createElement(s.Link,{to:"/home"},l.default.createElement("div",{className:"cart_gohome"},l.default.createElement("i",{className:"yo-ico"},""))),l.default.createElement("p",{className:"title"},"购物车"))}}]),n}(l.default.Component);t.default=c}).call(this)}finally{}},function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactRouter=__webpack_require__(1),_src=__webpack_require__(11),_src2=_interopRequireDefault(_src),_src3=__webpack_require__(63),_src4=_interopRequireDefault(_src3),_src5=__webpack_require__(59),_src6=_interopRequireDefault(_src5),_fetch=__webpack_require__(7),_fetch2=_interopRequireDefault(_fetch),ReactDOM=__webpack_require__(4),ReactDOM=__webpack_require__(4),Cart=function(_React$Component){function Cart(e){_classCallCheck(this,Cart);var t=_possibleConstructorReturn(this,(Cart.__proto__||Object.getPrototypeOf(Cart)).call(this,e));return t.reduceclk=t.reduceclk.bind(t),t.addclick=t.addclick.bind(t),t.clickPopup=t.clickPopup.bind(t),t.clickHide=t.clickHide.bind(t),t.likeSave=t.likeSave.bind(t),t.filter=t.filter.bind(t),t.state={data:"",datalist:[],sharePopup:!1,like:"",inputnum:1,dataImg:"",filterlist:""},t}return _inherits(Cart,_React$Component),_createClass(Cart,[{key:"render",value:function(){return _react2.default.createElement("div",{className:"detail"},_react2.default.createElement(_src2.default,{extraClass:"yo-scroller yo-scroller-fullscreen"},_react2.default.createElement("div",{className:"detail_scroll"},_react2.default.createElement("header",null,_react2.default.createElement("h2",null,"消费账户(E元)充值1000送60")),_react2.default.createElement("div",{className:"detail_pro"},_react2.default.createElement("div",{className:"detail_proTop"},_react2.default.createElement("span",{className:"detail_back"},_react2.default.createElement(_reactRouter.Link,{to:" "},"")),_react2.default.createElement("img",{className:"detail_proImg",src:this.state.data.goodsImg}),_react2.default.createElement("span",{className:"detail_share",onClick:this.clickPopup},"",_react2.default.createElement(_src4.default,{show:this.state.sharePopup,duration:1e3,height:200},_react2.default.createElement("div",{className:"hidecent"},_react2.default.createElement("div",{className:"detailImg"},_react2.default.createElement("a",{href:""},_react2.default.createElement("img",{src:"/img/timg.jpg"}))),_react2.default.createElement("div",{className:"detailImg"},_react2.default.createElement("a",{href:""},_react2.default.createElement("img",{src:"/img/timg1.jpg"}))),_react2.default.createElement("div",{className:"detailImg"},_react2.default.createElement("a",{href:""},_react2.default.createElement("img",{src:"/img/timg2.jpg"})))),_react2.default.createElement("input",{className:"qiut",onClick:this.clickHide,type:"submit",value:"取消"})))),_react2.default.createElement("div",{className:"detail_proInfo"},_react2.default.createElement("p",null,this.state.data.Caption,"  -小包装"),_react2.default.createElement("p",null,_react2.default.createElement("span",null,"商城价:",_react2.default.createElement("i",null,"￥",this.state.data.Price)),_react2.default.createElement("span",null,"货号:164632")),_react2.default.createElement("p",null,"每单满70包邮.满300下单后自动九折"),_react2.default.createElement("ul",{className:"detail_kind"},_react2.default.createElement("h4",null,"包装"),this.state.filterlist)),_react2.default.createElement("div",{className:"detail_pronum"},_react2.default.createElement("i",null,"数量:"),_react2.default.createElement("div",{className:"inputNum"},_react2.default.createElement("span",{className:"minus",onClick:this.reduceclk},"-"),_react2.default.createElement("input",{className:"input",type:"text",value:this.state.inputnum}),_react2.default.createElement("span",{className:"plus",onClick:this.addclick},"+"))),_react2.default.createElement("div",{className:"detail_discount"},_react2.default.createElement("h4",null,"第二件特价"),_react2.default.createElement(_src2.default,{extraClass:"yo-scroller yo-pro",scrollX:!0,scrollY:!1},_react2.default.createElement("div",{className:"tepro"}))),_react2.default.createElement("div",{className:"detail_show"})),_react2.default.createElement("div",null,this.state.dataImg))),_react2.default.createElement("footer",null,_react2.default.createElement("ul",null,_react2.default.createElement("li",{ref:"save"},_react2.default.createElement(_reactRouter.Link,{to:this.state.like,onClick:this.likeSave},"")),_react2.default.createElement("li",null,_react2.default.createElement(_reactRouter.Link,{to:"",onClick:this.add.bind(this,this.state.data.Sn)},"加入购物车")),_react2.default.createElement("li",null,_react2.default.createElement(_reactRouter.Link,{to:"/cart"},"",_react2.default.createElement("input",{className:"sumNum",ref:"sumnum",type:"text",value:this.state.inputnum}))))))}},{key:"add",value:function(e){if(console.log(e),localStorage.getItem("Sn")){var t=localStorage.getItem("Sn");t+=e+",",localStorage.setItem("Sn",t)}else localStorage.setItem("Sn",e+",")}},{key:"reduceclk",value:function(){var e=this.state.inputnum;0==e?e=0:e--,this.setState({inputnum:e})}},{key:"addclick",value:function(){var e=this.state.inputnum;e++,this.setState({inputnum:e})}},{key:"clickPopup",value:function(){this.setState({sharePopup:!0})}},{key:"clickHide",value:function(){this.setState({sharePopup:!1})}},{key:"shuaxin",value:function shuaxin(Sn){(0,_fetch2.default)("./json/list.json",function(res){var _this2=this,data=eval(res);data.map(function(e){e.Sn===Sn&&(_this2.setState({data:e}),_this2.filter(e.Caption))})}.bind(this))}},{key:"componentDidMount",value:function componentDidMount(){this.shuaxin(this.props.params.Sn),(0,_fetch2.default)("./json/detail.json",function(res){var data=eval(res),dataImg=data.map(function(e){return _react2.default.createElement("img",{src:e.img})});this.setState({dataImg:dataImg})}.bind(this))}},{key:"likeSave",value:function(){null==localStorage.getItem("userID")?(this.setState({like:"/login"}),alert("您还未登陆，请先登陆")):alert("收藏成功")}},{key:"filter",value:function filter(str){var strArry=Array(Object(str))[0],numlist=[];(0,_fetch2.default)("./json/list.json",function(res){var data=eval(res),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=data[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){for(var item=_step.value,itemArry=Array(Object(item.Caption))[0],num=0,m=4;m<8;m++){var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _iterator2=itemArry[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){var dataitem=_step2.value;if(dataitem==strArry[m]){num++;break}}}catch(e){_didIteratorError2=!0,_iteratorError2=e}finally{try{!_iteratorNormalCompletion2&&_iterator2.return&&_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}}4==num&&numlist.push(item)}}catch(e){_didIteratorError=!0,_iteratorError=e}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}if(numlist.length>0){var flist=numlist.map(function(e){return _react2.default.createElement("li",null,_react2.default.createElement("span",null,e.Caption))});this.setState({filterlist:flist})}}.bind(this))}},{key:"componentDidUpdate",value:function(){}}]),Cart}(_react2.default.Component);exports.default=Cart}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=(n(1),function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"我的订单"},a}return a(n,t),o(n,[{key:"click",value:function(){window.location.href="#/search"}},{key:"render",value:function(){return l.default.createElement("div",{className:"header"},l.default.createElement("img",{className:"index-logo",src:"http://m.6688.com/img/newIndex/201607/logo.png"}),l.default.createElement("div",{className:"index-search"},l.default.createElement("i",{className:"yo-ico"},"")),l.default.createElement("i",{className:"yo-ico"},""))}}]),n}(l.default.Component));t.default=s}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(4),u=(e(c),n(17)),f=(e(u),n(20)),p=(e(f),n(16)),d=(e(p),n(18)),h=(e(d),n(19)),m=(e(h),n(12)),y=(e(m),n(3)),v=n(2),_=n(1),b=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={title:"首页"},n}return o(t,e),i(t,[{key:"addtitle",value:function(e){this.setState({title:e})}},{key:"render",value:function(){return s.default.createElement("div",{className:"main"},s.default.createElement("header",null,this.props.key1),s.default.createElement("section",null,this.props.children),s.default.createElement("footer",null,s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement(_.Link,{to:"/home",title:"首页",activeClassName:"active"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("span",null,"首页"))),s.default.createElement("li",null,s.default.createElement(_.Link,{to:"/search",title:"",activeClassName:"active"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("span",null,"导航"))),s.default.createElement("li",null,s.default.createElement(_.Link,{to:"/user",title:"用户中心",activeClassName:"active"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("span",null,"我的"))),s.default.createElement("li",null,s.default.createElement(_.Link,{to:"/cart",title:"购物车",activeClassName:"active"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("span",null,"购物车"))),s.default.createElement("li",null,s.default.createElement(_.Link,{to:"/service",title:"客服",activeClassName:"active"},s.default.createElement("i",{className:"yo-ico"},""),s.default.createElement("span",null,"客服"))))))}},{key:"componentDidUpdate",value:function(){var e=this.props.routes[1].com;this.props.onChange({type:"SETCOM",com:e})}},{key:"componentDidMount",value:function(){var e=this.props.routes[1].com;this.props.onChange({type:"SETCOM",com:e})}}]),t}(s.default.Component);t.default=(0,y.connect)(v.mapStateToProps,v.mapDispatchToProps)(b)}).call(this)}finally{}},function(module,exports,__webpack_require__){try{(function(){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(4),_reactDom2=_interopRequireDefault(_reactDom),_src=__webpack_require__(11),_src2=_interopRequireDefault(_src),_fetch=__webpack_require__(7),_fetch2=_interopRequireDefault(_fetch),_reactRedux=__webpack_require__(3),_reactRouter=__webpack_require__(1),_store=__webpack_require__(2),kindList=function(_React$Component){function kindList(e){_classCallCheck(this,kindList);var t=_possibleConstructorReturn(this,(kindList.__proto__||Object.getPrototypeOf(kindList)).call(this,e));return t.state={title:"列表",filterlist:"",str:""},t}return _inherits(kindList,_React$Component),_createClass(kindList,[{key:"filter",value:function filter(str){var strArry=Array(Object(str))[0],strlen=strArry.length,numlist=[];(0,_fetch2.default)("./json/list.json",function(res){var _this2=this,data=eval(res);if(console.log(data),""!==str){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=data[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var item=_step.value,itemArry=Array(Object(item.Caption))[0],num=0,_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _iterator2=strArry[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){var strItem=_step2.value,_iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _iterator3=itemArry[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){var dataitem=_step3.value;if(dataitem==strItem){num++;break}}}catch(e){_didIteratorError3=!0,_iteratorError3=e}finally{try{!_iteratorNormalCompletion3&&_iterator3.return&&_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}}}catch(e){_didIteratorError2=!0,_iteratorError2=e}finally{try{!_iteratorNormalCompletion2&&_iterator2.return&&_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}num==strlen&&numlist.push(item)}}catch(e){_didIteratorError=!0,_iteratorError=e}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}if(numlist.length>0){var flist=numlist.map(function(e){return _react2.default.createElement("li",null,_react2.default.createElement(_reactRouter.Link,{to:"/detail/"+e.Sn},_react2.default.createElement(_src2.default.LazyImage,{className:"goodsImg",src:e.goodsImg})),_react2.default.createElement("p",null,e.Caption),_react2.default.createElement("div",{className:"goodsPrice"},_react2.default.createElement("span",null,"￥",e.Price),_react2.default.createElement(_reactRouter.Link,{to:"cart",title:"购物车",activeClassName:"active"},_react2.default.createElement(_src2.default.LazyImage,{onClick:_this2.add.bind(_this2,e.Sn),src:"http://m.6688.com/img/search/shopcar.jpg"}))))});this.setState({filterlist:flist})}else alert("搜索结果为空")}else{var _flist=data.map(function(e){return _react2.default.createElement("li",null,_react2.default.createElement(_reactRouter.Link,{to:"/detail/"+e.Sn},_react2.default.createElement(_src2.default.LazyImage,{className:"goodsImg",src:e.goodsImg})),_react2.default.createElement("p",null,e.Caption),_react2.default.createElement("div",{className:"goodsPrice"},_react2.default.createElement("span",null,e.Price),_react2.default.createElement(_reactRouter.Link,{to:"cart",title:"购物车",activeClassName:"active"},_react2.default.createElement(_src2.default.LazyImage,{onClick:_this2.add.bind(_this2,e.Sn),src:"http://m.6688.com/img/search/shopcar.jpg"}))))});this.setState({filterlist:_flist})}}.bind(this))}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"list"},_react2.default.createElement("div",{className:"list_header"},_react2.default.createElement(_reactRouter.Link,{to:"/home"},_react2.default.createElement("img",{className:"gohome",src:"http://m.6688.com/img/search/home.png"})),_react2.default.createElement("div",{className:"list_search"},_react2.default.createElement("input",{type:"text",onChange:this.valChange.bind(this)}),_react2.default.createElement("i",{className:"yo-ico",onClick:this.newFilter.bind(this)},"")),_react2.default.createElement("span",{onClick:this.newFilter.bind(this)},"确定")),_react2.default.createElement("div",{className:"filter_list"},_react2.default.createElement(_src2.default,{extraClass:"yo-scroller yo-scroller-fullscreen"},_react2.default.createElement("ul",null,this.state.filterlist))))}},{key:"valChange",value:function(e){this.setState({str:e.target.value})}},{key:"add",value:function(e){if(alert(e),localStorage.getItem("Sn")){var t=localStorage.getItem("Sn");t+=e+",",localStorage.setItem("Sn",t)}else localStorage.setItem("Sn",e+",")}},{key:"newFilter",value:function(){this.filter(this.state.str)}},{key:"componentDidMount",value:function(){this.filter(this.props.params.id)}}]),kindList}(_react2.default.Component);exports.default=kindList}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=(n(1),function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"我的订单"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("header",{className:"yo-header yo-header-s"},l.default.createElement("p",{className:"regret"},l.default.createElement("i",{className:"yo-ico"},""),l.default.createElement("input",{type:"text",placeholder:"搜索"})),l.default.createElement("span",{className:"affirm"},"取消"))}}]),n}(l.default.Component));t.default=s}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(1),c=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"我的订单"},a}return a(n,t),o(n,[{key:"back",value:function(){s.browserHistory.goBack()}},{key:"render",value:function(){return l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},"在线客服"),l.default.createElement("span",{className:"regret yo-ico",onClick:this.back},""))}}]),n}(l.default.Component);t.default=c}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"购物车"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("a",{className:"regret yo-ico",onClick:this.back},""),l.default.createElement("span",{className:"affirm"},l.default.createElement(u.Link,{to:"/address"},"保存"))),l.default.createElement("section",null,l.default.createElement("div",{className:"newaddress"},l.default.createElement("div",{className:"line"},l.default.createElement("span",null,"收货人姓名:"),l.default.createElement("div",null,l.default.createElement("input",{type:"text",placeholder:"输入收货人"}))),l.default.createElement("div",{className:"line"},l.default.createElement("span",null,"所在地区:"),l.default.createElement("div",null,l.default.createElement("input",{type:"text",placeholder:"所在地区"}))),l.default.createElement("div",{className:"line"},l.default.createElement("span",null,"手机号码:"),l.default.createElement("div",null,l.default.createElement("input",{type:"text",placeholder:"输入手机号"}))),l.default.createElement("div",{className:"line"},l.default.createElement("span",null,"邮政编码:"),l.default.createElement("div",null,l.default.createElement("input",{type:"text",placeholder:"请输入邮政编码"}))))))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"编辑地址"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(3),c=n(2),u=n(1),f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={title:"购物车"},a}return a(n,t),o(n,[{key:"render",value:function(){return l.default.createElement("div",{className:"main"},l.default.createElement("header",{className:"yo-header yo-header-c"},l.default.createElement("p",{className:"title"},this.props.value),l.default.createElement("a",{className:"regret yo-ico",onClick:this.back},"")),l.default.createElement("section",null,l.default.createElement("div",{className:"user-register user-forget"},l.default.createElement("div",null,l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{type:"text",placeholder:"请输入手机号"}),l.default.createElement("button",null,"获取验证码")),l.default.createElement("div",null,l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{type:"text",placeholder:"请输入您收到的验证码"})),l.default.createElement("h2",{className:"blank"}),l.default.createElement("div",null,l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{type:"password",placeholder:"请设置密码"})),l.default.createElement("div",null,l.default.createElement("span",{className:"yo-ico"},""),l.default.createElement("input",{type:"password",placeholder:"重复密码"})),l.default.createElement("p",{className:"tip"},"如果在120秒内未能收到系统发送的短信,请继续点击获取验证码"),l.default.createElement("button",null,"确定"))))}},{key:"back",value:function(){u.browserHistory.goBack()}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"找回密码"})}}]),n}(l.default.Component);t.default=(0,s.connect)(c.mapStateToProps,c.mapDispatchToProps)(f)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(3),u=n(2),f=n(1),p=n(32),d=e(p),h=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={title:"购物车"},n}return o(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"main"},s.default.createElement("header",{className:"yo-header yo-header-c"},s.default.createElement("p",{className:"title"},this.props.value),s.default.createElement("span",{className:"regret yo-ico",onClick:this.back},"")),s.default.createElement("section",{className:"setup"},s.default.createElement("ul",{className:"user-setup"},s.default.createElement("li",null,s.default.createElement(f.Link,{to:"/suggestion"},s.default.createElement("img",{src:"/img/yijian.png"}),"意见反馈",s.default.createElement("span",{className:"yo-ico"},""))),s.default.createElement("li",null,s.default.createElement(f.Link,{onClick:this.genxin},s.default.createElement("img",{src:"/img/genxin.png"}),"检测更新",s.default.createElement("span",{className:"yo-ico"},""),s.default.createElement("span",{className:"genxin"},"当前已是最新版本"))),s.default.createElement("li",null,s.default.createElement(f.Link,null,s.default.createElement("img",{src:"/img/pingfen.png"}),"给我评分",s.default.createElement("span",{className:"yo-ico"},""))),s.default.createElement("li",null,s.default.createElement(f.Link,null,s.default.createElement("img",{src:"/img/huancun.png"}),"清除缓存",s.default.createElement("span",{className:"yo-ico"},""))),s.default.createElement("li",null,s.default.createElement(f.Link,null,s.default.createElement("img",{src:"/img/kefu.png"}),"客服热线",s.default.createElement("span",{className:"yo-ico"},""),s.default.createElement("span",{className:"genxin"},"400-867-6688")))),s.default.createElement("button",{id:"quit",onClick:this.quit},"退出登录")))}},{key:"back",value:function(){f.browserHistory.goBack()}},{key:"quit",value:function(){localStorage.removeItem("userID"),window.location.href="#/user"}},{key:"genxin",value:function(){d.default.show("已是最新版本")}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"设置"})}}]),t}(s.default.Component);t.default=(0,c.connect)(u.mapStateToProps,u.mapDispatchToProps)(h)}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(3),u=n(2),f=n(1),p=n(32),d=e(p),h=(n(61),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={title:"我的订单"},n}return o(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"main"},s.default.createElement("header",{className:"yo-header yo-header-c"},s.default.createElement("p",{className:"title"},this.props.value),s.default.createElement("a",{className:"regret yo-ico",onClick:this.back},""),s.default.createElement("span",{className:"affirm"},s.default.createElement("a",{className:"tijiao",onClick:this.sub},"提交"))),s.default.createElement("section",null,s.default.createElement("div",{className:"suggestion"},s.default.createElement("div",{className:"left"},s.default.createElement("span",null,"反馈意见:")),s.default.createElement("div",{className:"right"},s.default.createElement("textarea",{placeholder:"您的宝贵意见和建议是我们不断进步的动力",className:"text"}))),s.default.createElement("div",{className:"lianxi"},s.default.createElement("b",null,"联系方式:"),s.default.createElement("input",{className:"xinxi",placeholder:"您的姓名、手机号、邮箱等"})),s.default.createElement("p",{className:"wenxin"},"温馨提示:如果出现订票、商品、售货等方面的问题请拨打客服电话400456987。我们的客服会在第一时间为您服务,感谢您对6688网的支持")))}},{key:"back",value:function(){f.browserHistory.goBack()}},{key:"sub",value:function(){d.default.show("反馈成功",3e3),window.location.href="#/setup"}},{key:"componentDidMount",value:function(){this.props.onChange({type:"SETTITLE",title:"我的订单"})}}]),t}(s.default.Component));t.default=(0,c.connect)(u.mapStateToProps,u.mapDispatchToProps)(h)}).call(this)}finally{}},function(e,t){},function(e,t,n){"use strict";var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};e.exports=r},function(e,t,n){"use strict";function r(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}function a(e,t){if(r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(var i=0;i<n.length;i++)if(!o.call(t,n[i])||!r(e[n[i]],t[n[i]]))return!1;return!0}var o=Object.prototype.hasOwnProperty;e.exports=a},function(e,t,n){try{(function(){"use strict";function e(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.57,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return{handleData:function(e,t){var n=e.loop,r=(e.pageNow,a.default.Children.toArray(t));if(n){var o=t.length,i={key:0},l={key:-1};"li"===t[0].type?i.className=t[o-1].props.className?t[o-1].props.className+" extra-item":"extra-item":(i.index=o,i.extraClass=t[o-1].props.extraClass?t[o-1].props.extraClass+" extra-item":"extra-item",l.index=1);var s=a.default.cloneElement(t[o-1],i),c=a.default.cloneElement(t[0],l);r.unshift(s),r.push(c)}return r},touchstart:function(){},touchmove:function(e){var t=e.touchstartLocation,n=e.touchmoveLocation,r=e.pageNow,a=e.containerDOM,o=e.width,i=(r-1)*o+t[0]-n[0];this._addCss({dom:a,speed:0,translateX:-i,reset:!0,width:o})},touchend:function(e){var r=e.touchstartLocation,a=e.touchendLocation,o=e.pageNow,i=a[0]-r[0],l=a[1]-r[1],s=Math.abs(i)/Math.abs(l),c=o;return c=Math.abs(i)>n&&s>t?i>0?o-1:o+1:o,this.checkAni(e,c)},checkAni:function(e,t){var n=this,r=e.pagesNum,a=e.speed,o=e.containerDOM,i=e.loop,l=e.aniSpeed,s=e.width;this.moving&&window.clearInterval(this.moving);var c=s*(1-t),u=t;return(t<1||t>r)&&(i?(this.moving=window.setTimeout(function(){var e=0;0===t&&(e=s*(1-r)),n._addCss({dom:o,reset:!0,translateX:e,width:s}),n.moving=null},1e3*(a+l)),u=0===t?r:1):(u=t<1?1:r,c=s*(1-u))),this._addCss({dom:o,reset:!1,speed:a,translateX:c,width:s}),u},next:function(e){var t=e.pageNow,n=t+1;return this.checkAni(e,n)},prev:function(e){var t=e.pageNow,n=e.containerDOM,r=e.speed,a=e.width,o=t-1,i=a*(1-o);return this._addCss({dom:n,speed:r,translateX:i}),this.checkAni(e,o)},arrive:function(e,t,n){if(t>=1&&t<=e.pagesNum){var r=(1-t)*e.width;this._addCss({dom:e.containerDOM,speed:.1,translateX:r,reset:!n,width:e.width})}else console.log("传入carousel组建的arrive方法的页面为"+t+",该值不合法");return t},_addCss:function(t){var n=t.dom,r=t.translateX,a=void 0===r?0:r,o=t.reset;e(t,["dom","translateX","reset"]);o?(n.style.webkitTransition="none",n.style.transition="none"):(n.style.webkitTransition="",n.style.transition=""),n.style.webkitTransform="translate("+a+"px, 0) translateZ(0)",n.style.transform="translate("+a+"px, 0) translateZ(0)"}}}}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(38),n(10);var l=n(0),s=e(l),c=n(9),u=e(c),f=n(70),p=e(f),d=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e.img&&(n.state={img:0}),n.handleTap=n.handleTap.bind(n),n.hasUnmount=!1,n}return o(t,e),i(t,[{key:"componentWillMount",value:function(){this.lazyload(this.props)}},{key:"shouldComponentUpdate",value:function(e,t,n){var r=(0,p.default)(this,e,t),a=this.context.currentPage!==n.currentPage||this.context.pagesNum!==n.pagesNum;return r||a}},{key:"componentWillUpdate",value:function(e,t,n){this.lazyload(n.currentPage)}},{key:"componentWillUnmount",value:function(){this.hasUnmount=!0}},{key:"handleTap",value:function(e){this.props.onTap(e)}},{key:"loadImg",value:function(){var e=this;this.props.img&&(this.imgNode=new Image,this.imgNode.onload=function(){var t=void 0;t=1,e.props.checkImgFun&&!e.props.checkImgFun(e.imgNode)&&(t=2),e.hasUnmount||e.setState({img:t})},this.imgNode.onerror=function(){e.hasUnmount||e.setState({img:2})},this.imgNode.src=this.props.img)}},{key:"lazyload",value:function(e){this.state.img||(this.props.lazyload?(Math.abs(e-this.props.index)<=1||1===this.props.index||this.props.index===this.context.pagesNum)&&this.loadImg():this.loadImg())}},{key:"render",value:function(){var e=null,t=void 0,n={};if(this.props.img)switch(this.state.img){case 1:e=s.default.createElement("img",{alt:"",src:this.props.img,className:"img",draggable:"false"});break;case 2:e=s.default.createElement("img",{alt:"",src:this.props.errorImg,className:"img",draggable:"false"});break;case 0:default:e=this.props.loadingEle}return n[this.props.activeClass]=this.context.currentPage===this.props.index,this.props.extraClass&&(n[this.props.extraClass]=!0),t=(0,u.default)("item",n),s.default.createElement("li",{className:t,style:this.props.style,onTouchTap:this.handleTap},e)}}]),t}(l.Component);d.propTypes={img:l.PropTypes.string,errorImg:l.PropTypes.string,checkImgFun:l.PropTypes.func,onTap:l.PropTypes.func,extraClass:l.PropTypes.string,loadingEle:l.PropTypes.element,lazyload:l.PropTypes.bool,activeClass:l.PropTypes.string,index:l.PropTypes.number,style:l.PropTypes.object},d.defaultProps={errorImg:"//s.qunarzz.com/mobile_search_touch/intention-search-h5/loading.gif",loadingEle:null,lazyload:!0,activeClass:"on",onTap:function(){}},d.contextTypes={currentPage:s.default.PropTypes.number.isRequired,pagesNum:s.default.PropTypes.number.isRequired},t.default=d}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(38);var l=n(0),s=e(l),c=n(55),u=e(c),f=n(69),p=e(f),d=n(56),h=e(d),m=function(e){for(var t=[],n=0;n<e.num;n++)t.push(s.default.createElement("li",{key:n,className:e.page===n+1?"on":""}));return s.default.createElement("ul",{className:"index"},t)};m.propTypes={num:l.PropTypes.number,page:l.PropTypes.number};var y=(0,u.default)(),v=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:1},n.shouldComponentUpdate=p.default.shouldComponentUpdate.bind(n),n.dragDom=null,n.dragEvt=null,n}return o(t,e),i(t,[{key:"getChildContext",value:function(){return{currentPage:this.state.page,pagesNum:this.props.children.length}}},{key:"componentWillMount",value:function(){this.ani=Object.assign({},this.props.aniObj||y),this.aniObj={delay:this.props.delay,speed:this.props.speed,pageNow:1,pagesNum:this.props.children.length,aniSpeed:this.props.aniSpeed,loop:this.props.loop,operationTimer:0,touchstartLocation:{},touchendLocation:{}}}},{key:"componentDidMount",value:function(){this.aniObj.stageDOM=this.widgetDOM.parentNode,this.aniObj.width=this.widgetDOM.clientWidth,this.aniObj.containerDOM=this.widgetDOM.querySelector(".cont"),this.arrive(this.props.defaultPage,!1),this.launchAuto()}},{key:"componentWillReceiveProps",value:function(e){this.aniObj.delay=e.delay,this.aniObj.speed=e.speed,this.aniObj.pagesNum=e.children.length,this.aniObj.aniSpeed=e.aniSpeed,this.aniObj.loop=e.loop}},{key:"componentWillUpdate",value:function(e,t){t.page!==this.state.page&&this.props.beforeChange(t.page)}},{key:"componentDidUpdate",value:function(e,t){t.page!==this.state.page&&this.props.afterChange(this.state.page),e.autoplay===this.props.autoplay&&e.loop===this.props.loop||(this.pause(),this.play())}},{key:"componentWillUnmount",value:function(){this.pause()}},{key:"arrive",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.aniObj.operationTimer=e-1,this.pause(),e>0&&e<=s.default.Children.count(this.props.children)){var n=this.ani.arrive(this.aniObj,e,t);this.setState({page:n}),this.aniObj.pageNow=n}this.play()}},{key:"launchAuto",value:function(){var e=this;this.autoplay&&window.clearInterval(this.autoplay),this.props.autoplay&&(this.props.loop||this.aniObj.pageNow<this.aniObj.pagesNum)&&(this.autoplay=window.setInterval(function(){e.next()},1e3*this.props.delay))}},{key:"format",value:function(e){var t=s.default.Children.map(e,function(e,t){return s.default.cloneElement(e,{index:t+1})});return this.ani.handleData(this.aniObj,t)}},{key:"play",value:function(){this.launchAuto()}},{key:"pause",value:function(){this.autoplay&&window.clearInterval(this.autoplay)}},{key:"prev",value:function(){this.aniObj.operationTimer--;var e=this.ani.prev(this.aniObj);this.setState({page:e}),this.aniObj.pageNow=e}},{key:"next",value:function(){this.aniObj.operationTimer++;var e=this.ani.next(this.aniObj);this.setState({page:e}),this.aniObj.pageNow=e,e>=this.aniObj.pagesNum&&!this.props.loop&&this.pause()}},{key:"handleTouchStart",value:function(e){e.preventDefault(),this.pause(),this.aniObj.touchstartList=e.touches[0],this.aniObj.touchstartLocation=[e.touches[0].clientX,e.touches[0].clientY],this.ani.touchstart(this.aniObj)}},{key:"handleTouchMove",value:function(e){e.preventDefault(),this.aniObj.touchmoveList=e.touches[0],this.aniObj.touchmoveLocation=[e.touches[0].clientX,e.touches[0].clientY],this.ani.touchmove(this.aniObj)}},{key:"handleTouchEnd",value:function(e){e.preventDefault(),this.aniObj.touchendList=e.touches.length>0?e.touches[0]:this.aniObj.touchmoveList,this.aniObj.touchendList&&(this.aniObj.touchendLocation=[this.aniObj.touchendList.clientX,this.aniObj.touchendList.clientY],this.aniObj.pageNow=this.ani.touchend(this.aniObj),this.setState({page:this.aniObj.pageNow}),this.play(),this.clearTouchList())}},{key:"handleTouchCancle",value:function(e){if(e.preventDefault(),this.ani.touchcancel)return void this.ani.touchcancel(this.aniObj);this.aniObj.touchendList=this.aniObj.touchmoveList,this.aniObj.touchendLocation=[this.aniObj.touchendList.clientX,this.aniObj.touchendList.clientY],this.aniObj.pageNow=this.ani.touchend(this.aniObj),this.setState({page:this.aniObj.pageNow}),this.clearTouchList()}},{key:"clearTouchList",value:function(){Object.assign(this.aniObj,{touchstartList:[],touchmoveList:[],touchstartLocation:[],touchmoveLocation:[],touchendLocation:[]})}},{key:"render",value:function(){var e=this,t=["yo-carousel"];null!=this.props.extraClass&&t.push(this.props.extraClass);var n=this.format(this.props.children);return s.default.createElement("div",{className:t.join(" "),ref:function(t){t&&(e.widgetDOM=t)},onTouchStart:function(t){e.handleTouchStart(t)},onTouchMove:function(t){e.handleTouchMove(t)},onTouchEnd:function(t){e.handleTouchEnd(t)},onTouchCancel:function(t){e.handleTouchCancle(t)}},s.default.createElement("ul",{className:"cont"},n),this.props.dots?s.default.createElement(m,{num:this.aniObj.pagesNum,page:this.state.page}):"")}}]),t}(l.Component);v.propTypes={dots:l.PropTypes.bool,autoplay:l.PropTypes.bool,loop:l.PropTypes.bool,beforeChange:l.PropTypes.func,afterChange:l.PropTypes.func,extraClass:l.PropTypes.string,delay:l.PropTypes.number,speed:l.PropTypes.number,defaultPage:l.PropTypes.number,aniSpeed:l.PropTypes.number,aniObj:l.PropTypes.object,children:l.PropTypes.array.isRequired},v.defaultProps={dots:!0,autoplay:!0,loop:!0,effect:"scrollX",delay:1.5,speed:.5,defaultPage:1,aniSpeed:0,beforeChange:function(){},afterChange:function(){}},v.childContextTypes={currentPage:l.PropTypes.number,pagesNum:l.PropTypes.number},v.CarouselItem=h.default,v.Item=h.default,t.default=v}).call(this)}finally{}},function(e,t,n){var r;try{(function(){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){function o(e,t){var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!o.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,i=0,s=r.length;i<s;i++)a[r[i]]=function(e,t){return function(){return e.apply(t,arguments)}}(a[r[i]],a);l&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,r){var a=Node.prototype.removeEventListener;"click"===t?a.call(e,t,n.hijacked||n,r):a.call(e,t,n,r)},e.addEventListener=function(t,n,r){var a=Node.prototype.addEventListener;"click"===t?a.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),r):a.call(e,t,n,r)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",function(e){n(e)},!1),e.onclick=null)}}var i=navigator.userAgent.indexOf("Windows Phone")>=0,l=navigator.userAgent.indexOf("Android")>0&&!i,s=/iP(ad|hone|od)/.test(navigator.userAgent)&&!i,c=s&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=s&&/OS [6-7]_\d/.test(navigator.userAgent),f=navigator.userAgent.indexOf("BB10")>0;o.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(s&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},o.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!l;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},o.prototype.sendClick=function(e,t){var n,r;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},o.prototype.determineEventType=function(e){return l&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},o.prototype.focus=function(e){var t;s&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},o.prototype.updateScrollParent=function(e){var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},o.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},o.prototype.onTouchStart=function(e){var t,n,r;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],s){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!c){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},o.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},o.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},o.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},o.prototype.onTouchEnd=function(e){var t,n,r,a,o,i=this.targetElement;if(!this.trackingClick)return!0;if(this.lastClickTime&&e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.trackingClickStart&&e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(o=e.changedTouches[0],i=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||i,i.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(r=i.tagName.toLowerCase())){if(t=this.findControl(i)){if(this.focus(i),l)return!1;i=t}}else if(this.needsFocus(i))return e.timeStamp-n>100||s&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(i),this.sendClick(i,e),!1);return!(!s||c||!(a=i.fastClickScrollParent)||a.fastClickLastScrollTop===a.scrollTop)||(this.needsClick(i)||(e.preventDefault(),this.sendClick(i,e)),!1)},o.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},o.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},o.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},o.prototype.destroy=function(){var e=this.layer;l&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},o.notNeeded=function(e){var t,n,r;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!l)return!0;if(t=document.querySelector("meta[name=viewport]")){if(t.content.indexOf("user-scalable=no")!==-1)return!(n<=38);if(n>38&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(f&&(r=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),r[1]>=10&&r[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(t=document.querySelector("meta[name=viewport]"))&&(t.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},o.attach=function(e,t){return new o(e,t)},"object"===a(n(40))&&n(40)?void 0!==(r=function(){return o}.call(t,n,t,e))&&(e.exports=r):void 0!==e&&e.exports?(e.exports=o.attach,e.exports.FastClick=o):window.FastClick=o}()}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(10);var l=n(0),s=e(l),c=n(67),u=e(c),f=n(9),p=e(f);n(84);var d={value:0,step:1,min:-1e4,max:1e4,decimalNum:0,extraClass:"",disable:!1,inputDisable:!1,onChange:function(){}},h={value:l.PropTypes.number.isRequired,step:l.PropTypes.number,min:l.PropTypes.number,max:l.PropTypes.number,decimalNum:l.PropTypes.number,extraClass:l.PropTypes.string,disable:l.PropTypes.bool,inputDisable:l.PropTypes.bool,onChange:l.PropTypes.func.isRequired},m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=e.value,i=e.step,l=e.min,s=e.max,c=e.decimalNum,u=e.disable,f=e.inputDisable;if(n.state={min:l,max:s,step:i,value:o,decimalNum:c,disable:u,inputDisable:f,plusDisable:!1,minusDisable:!1},n._node=null,isNaN(o))throw new Error("不合法的value");return n.cachedInput=o,n}return o(t,e),i(t,[{key:"componentWillMount",value:function(){this.resetState(this.state)}},{key:"componentWillReceiveProps",value:function(e){var t=Object.assign({},this.state,e,{plusDisable:!1,minusDisable:!1});this.resetState(t)}},{key:"getValidValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.min,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.max,r=parseFloat(e);return isNaN(r)?parseFloat(this.cachedInput):r<t?t:r>n?n:r}},{key:"resetState",value:function(e){var t=e;t.step=parseFloat(t.step)||0,t.max=parseFloat(t.max)||0,t.min=parseFloat(t.min)||0;var n=t.disable,r=t.min,a=t.max,o=t.decimalNum,i=t.value;if(i=this.getValidValue(i,r,a).toFixed(o),n)return void this.setState({value:i,disable:n,inputDisable:!0,plusDisable:!0,minusDisable:!0});parseFloat(i)===a&&(t.plusDisable=!0),parseFloat(i)===r&&(t.minusDisable=!0),t.value=i,this.setState(t)}},{key:"minusValue",value:function(e){if(!this.state.minusDisable){var t=parseFloat(e)||0;t-=this.state.step,this.wrapChange(t)}}},{key:"plusValue",value:function(e){if(!this.state.plusDisable){var t=parseFloat(e)||0;t+=this.state.step,this.wrapChange(t)}}},{key:"wrapChange",value:function(e){var t=parseFloat(this.getValidValue(e).toFixed(this.state.decimalNum));this.props.onChange(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.inputDisable,r=t.plusDisable,a=t.minusDisable,o=a?"disabled":"",i=r?"disabled":"";return s.default.createElement("div",{className:(0,p.default)("yo-number",this.props.extraClass)},s.default.createElement(u.default,{touchClass:a?"":"action-touch",onTap:function(){return e.minusValue(e._node.value)}},s.default.createElement("span",{className:(0,p.default)("minus",o)},"-")),s.default.createElement("input",{className:"input",type:"text",value:this.state.value,disabled:n?"disabled":"",ref:function(t){e._node=t},onChange:function(t){e.setState({value:t.target.value})},onBlur:function(t){e.wrapChange(t.target.value)},onFocus:function(t){e.cachedInput=t.target.value,e.setState({plusDisable:!0,minusDisable:!0})}}),s.default.createElement(u.default,{touchClass:r?"":"action-touch",onTap:function(){return e.plusValue(e._node.value)}},s.default.createElement("span",{className:(0,p.default)("plus",i)},"+")))}}]),t}(l.Component);t.default=m,m.defaultProps=d,m.propTypes=h}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(14),u=0,f=function(t){function n(t){e(this,n);var a=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.loading=u,a.state={src:a.props.defaultImage},a}return a(n,t),i(n,[{key:"componentDidMount",value:function(){this.refresh(this.context);var e=this.context.list||this.context.scroller;e&&e.childLazyImages.push(this)}},{key:"componentWillReceiveProps",value:function(e,t){this.refresh(t),this.state.src!==e.src&&(this.loading=u,this.setState({src:this.props.defaultImage}))}},{key:"componentWillUnmount",value:function(){var e=this.context.list||this.context.scroller;e&&e.childLazyImages.splice(e.childLazyImages.indexOf(this),1),this.canLoadImage=!1}},{key:"refresh",value:function(e){this.canLoadImage=!0,this.offsetY=e.offsetY,this.itemRef=e.itemRef,this.infinite=e.infinite,this.infinite||(this.offsetTop=(0,c.getElementOffsetY)(this.img),this.height=this.img.offsetHeight)}},{key:"load",value:function(e){var t=this;if(this.loading===u){var n=this.props.src,r=new Image;this.loading=1,r.onload=function(){t&&t.canLoadImage&&(t.loading=2,t.setState({src:n,loaded:!0}),e&&e())},r.src=n}}},{key:"render",value:function(){var e=this,t=this.props,n=t.height,r=t.style,a=t.customAttr;if(this.context.list&&null==n&&null==r.height)throw Error("yo-lazyimage: 在List组件中使用LazyImage必须指定图片的高度。");return s.default.createElement("img",o({},(0,c.inheritProps)(this.props,["onTouchStart","onTouchMove","onTouchEnd","onTouchCancel","width","height","className","title","style"]),{alt:this.props.alt,ref:function(t){t&&(e.img=t)},src:this.state.src},a))}}]),n}(l.Component);f.contextTypes={list:l.PropTypes.object,scroller:l.PropTypes.object,offsetY:l.PropTypes.number,itemRef:l.PropTypes.object,isScroller:l.PropTypes.bool,infinite:l.PropTypes.bool},f.propTypes={defaultImage:l.PropTypes.string,src:l.PropTypes.string.isRequired,className:l.PropTypes.string,width:l.PropTypes.oneOfType([l.PropTypes.number,l.PropTypes.string]),height:l.PropTypes.oneOfType([l.PropTypes.number,l.PropTypes.string]),customAttr:l.PropTypes.object,style:l.PropTypes.object,alt:l.PropTypes.string,title:l.PropTypes.string,onTouchStart:l.PropTypes.func,onTouchMove:l.PropTypes.func,onTouchEnd:l.PropTypes.func,onTouchCancel:l.PropTypes.func},f.defaultProps={defaultImage:null,src:null,className:null,width:null,height:null,customAttr:{},style:null},t.default=f}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(9),u=e(c);n(85);var f={text:l.PropTypes.string,extraClass:l.PropTypes.string},p={text:"",extraClass:""},d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props;return s.default.createElement("div",{className:(0,u.default)("yo-loading",e.extraClass)},s.default.createElement("i",{className:"yo-ico"}),!!e.text.toString().length&&s.default.createElement("span",{className:"text"},e.text))}}]),t}(l.Component);t.default=d,d.propTypes=f,d.defaultProps=p}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=e(s),u=n(9),f=e(u);n(39),n(10);var p={show:!1,extraClass:"",contentExtraClass:"",align:"center",onMaskTap:function(){},contentOffset:[0,0],maskOffset:[0,0],maskExtraClass:"",animation:"",onShow:function(){},onHide:function(){},width:null,height:null,delayBeforeAnimationStart:100},d={show:s.PropTypes.bool.isRequired,extraClass:s.PropTypes.string,contentExtraClass:s.PropTypes.string,align:s.PropTypes.oneOf(["center","top","bottom","left","right"]),onMaskTap:s.PropTypes.func,contentOffset:s.PropTypes.arrayOf(s.PropTypes.number),maskOffset:s.PropTypes.arrayOf(s.PropTypes.number),onShow:s.PropTypes.func,onHide:s.PropTypes.func,width:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string]),height:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string]),animation:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.shape({animation:s.PropTypes.arrayOf(s.PropTypes.string).isRequired,duration:s.PropTypes.number})]),delayBeforeAnimationStart:s.PropTypes.number,children:s.PropTypes.oneOfType([s.PropTypes.array,s.PropTypes.object,s.PropTypes.string,s.PropTypes.number])},h={fade:{animation:["fade-in","fade-out"],duration:200},zoom:{animation:["zoom-in","zoom-out"],duration:300},"fade-in-up":{animation:["fade-in-up","fade-out-down"],duration:200},"fade-in-down":{animation:["fade-in-down","fade-out-up"],duration:200}},m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show:e.show,animation:n.getAnimationClass(e.animation,e.show)},n}return o(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.show&&this.props.onShow()}},{key:"componentWillReceiveProps",value:function(e){this.toggleShowStatus(e)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.hideTimeout),clearTimeout(this.showTimeout)}},{key:"getAnimationClass",value:function(e,t){var n="",r=0;if(e){var a="object"===i(this.props.animation)?this.props.animation:h[e];a&&(n=[a.animation[t?0:1],"ani"].join(" "),r=a.duration)}return{name:n,duration:r}}},{key:"toggleShowStatus",value:function(e){var t=this,n=this.state.show,r=e.show,a=this.props,o=a.onShow,i=a.onHide;if(!r&&n){var l=this.getAnimationClass(e.animation,r);clearTimeout(this.showTimeout),i(),this.setState({animation:l}),this.hideTimeout=setTimeout(function(){t.setState({show:!1})},l.duration)}else r&&!n&&(clearTimeout(this.hideTimeout),this.setState({show:r}),this.contentDom.style.visibility="hidden",this.showTimeout=setTimeout(function(){o(),t.setState({animation:t.getAnimationClass(e.animation,r)}),t.contentDom.style.visibility="visible"},this.props.delayBeforeAnimationStart))}},{key:"render",value:function(){var e=this,t=this.state,n=t.show,r=t.animation,a=r.duration,o=r.name,i=this.props,l=i.extraClass,s=i.onMaskTap,u=i.maskOffset,p=i.contentOffset,d=i.align,h=i.contentExtraClass,m=i.width,y=i.height,v=(0,f.default)("yo-modal",l,"yo-modal-"+d),_=(0,f.default)("cont",h,o);return c.default.createElement("div",{ref:"container",className:v,onTouchTap:function(t){t.target===e.refs.container&&s(t)},style:Object.assign({top:parseInt(u[0],10),bottom:parseInt(u[1],10),transform:"translate3d(0,0,0)",WebkitTransform:"translate3d(0,0,0)"},n?null:{display:"none"})},c.default.createElement("div",{className:_,ref:function(t){e.contentDom=t},style:{position:"relative",top:parseInt(p[1],10)||0,left:parseInt(p[0],10)||0,WebkitAnimationDuration:a+"ms",animationDuration:a+"ms",width:m,height:y}},this.props.children))}}]),t}(s.Component);t.default=m,m.defaultProps=p,m.propTypes=d}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(31),s=e(l),c=n(0),u=e(c);n(86);var f=function(){},p={show:c.PropTypes.bool,duration:c.PropTypes.number,height:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.number]),direction:c.PropTypes.oneOf(["up","down"]),onMaskTap:c.PropTypes.func,onShow:c.PropTypes.func,onHide:c.PropTypes.func,maskOffset:c.PropTypes.arrayOf(c.PropTypes.number),extraClass:c.PropTypes.string,delayBeforeAnimationStart:c.PropTypes.number,children:c.PropTypes.oneOfType([c.PropTypes.object,c.PropTypes.array])},d={duration:200,height:"auto",direction:"up",onMaskTap:f,onShow:f,onHide:f},h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.show,n=e.duration,r=e.height,a=e.direction,o=e.onMaskTap,i=e.onShow,l=e.onHide,c=e.maskOffset,f=e.extraClass,p=e.children,d=e.delayBeforeAnimationStart,h="up"===a?["fade-in-up","fade-out-down"]:["fade-in-down","fade-out-up"],m="up"===a?"bottom":"top";return u.default.createElement(s.default,{show:t,height:r,width:"100%",direction:a,onMaskTap:o,onShow:i,onHide:l,align:m,animation:{animation:h,duration:n},maskOffset:c,contentExtraClass:f,delayBeforeAnimationStart:d},p)}}]),t}(c.Component);t.default=h,h.propTypes=p,h.defaultProps=d}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){var t={},n=document.createElement("div").style,r=function(){for(var e=["t","WebkitT","MozT","msT","OT"],t=0,r=e.length;t<r;t++)if(e[t]+"ransform"in n)return e[t].substr(0,e[t].length-1);return!1}(),a=function(e){return r!==!1&&(""===r?e:r+e.charAt(0).toUpperCase()+e.substr(1))};t.getTime=Date.now||function(){return(new Date).getTime()},t.getRAF=function(){function e(e){return window.setTimeout(e,1e3/60)}var n=window.cancelAnimationFrame&&window.requestAnimationFrame||window.webkitCancelAnimationFrame&&window.webkitRequestAnimationFrame||window.mozCancelAnimationFrame&&window.mozRequestAnimationFrame||window.oCancelAnimationFrame&&window.oRequestAnimationFrame||window.msCancelAnimationFrame&&window.msRequestAnimationFrame||e,r=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||window.clearTimeout;return t.isBadAndroid&&(n=e,r=window.clearTimeout),{rAF:n,cancelrAF:r}},t.extend=function(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]})},t.momentum=function(e,t,n,r,a,o){var i=e-t,l=void 0,s=void 0,c=Math.abs(i)/n;return o=void 0===o?6e-4:o,l=e+c*c/(2*o)*(i<0?-1:1),s=c/o,l<r?(l=a?r-a/2.5*(c/8):r,i=Math.abs(l-e),s=i/c):l>0&&(l=a?a/2.5*(c/8):0,i=Math.abs(e)+l,s=i/c),{destination:Math.round(l),duration:s}};var o=a("transform");return t.extend(t,{hasTransform:o!==!1,hasPerspective:a("perspective")in n,hasTouch:"ontouchstart"in window,hasPointer:!(!window.PointerEvent&&!window.MSPointerEvent),hasTransition:a("transition")in n}),t.isBadAndroid=function(){var t=window.navigator.appVersion,n=!1;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var r=t.match(/Safari\/(\d+.\d)/);n=!(r&&"object"===(void 0===r?"undefined":e(r))&&r.length>=2)||parseFloat(r[1])<535.19}else n=!1;return n}(),t.extend(t.style={},{transform:o,transitionTimingFunction:a("transitionTimingFunction"),transitionDuration:a("transitionDuration"),transitionDelay:a("transitionDelay"),transformOrigin:a("transformOrigin")}),t.offset=function(e){for(var t=-e.offsetLeft,n=-e.offsetTop;e=e.offsetParent;)t-=e.offsetLeft,n-=e.offsetTop;return{left:t,top:n}},t.preventDefaultException=function(e,t){for(var n in t)if(t[n].test(e[n]))return!0;return!1},t.extend(t.eventType={},{touchstart:1,touchmove:1,touchend:1}),t.extend(t.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){var t=e-1;return Math.sqrt(1-t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=e-1;return t*t*(5*t+4)+1}},bounce:{style:"",fn:function(e){var t=void 0,n=e;return n/1<1/2.75?(n/=1,t=7.5625*n*n):e<2/2.75?(n-=1.5/2.75,t=7.5625*n*n+.75):e<2.5/2.75?(n-=2.25/2.75,t=7.5625*n*n+.9375):(n-=2.625/2.75,t=7.5625*n*n+.984375),t}},elastic:{style:"",fn:function(e){return 0===e?0:1===e?1:.4*Math.pow(2,-10*e)*Math.sin((e-.055)*(2*Math.PI)/.22)+1}}}),t}();t.default=n}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),s=e(l),c=n(4),u=e(c),f=n(14),p=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.domNode=null,e.height=null,e.offsetTop=null,e.className=null,e}return o(t,e),i(t,[{key:"componentDidMount",value:function(){this.scroller=this.context.scroller,this.scroller&&(this.initialize(),this.scroller.stickyHeaders.push(this))}},{key:"componentDidUpdate",value:function(){this.initialize()}},{key:"componentWillUnmount",value:function(){var e=this;this.scroller&&(this.scroller.stickyHeaders=this.scroller.stickyHeaders.filter(function(t){return t!==e}))}},{key:"initialize",value:function(){var e=this.props.height;this.domNode=u.default.findDOMNode(this),this.height=null==e?this.domNode.offsetHeight:this.props.height,this.offsetTop=(0,f.getElementOffsetY)(this.domNode,null),this.className=this.domNode.className,this.onlyChild=s.default.Children.only(this.props.children),this.stickyExtraClass=this.props.stickyExtraClass}},{key:"render",value:function(){return s.default.Children.only(this.props.children)}}]),t}(l.Component);p.propTypes={stickyExtraClass:l.PropTypes.string,height:l.PropTypes.number,children:l.PropTypes.oneOfType([l.PropTypes.array,l.PropTypes.object,l.PropTypes.string])},p.defaultProps={stickyExtraClass:""},p.contextTypes={scroller:l.PropTypes.object},t.default=p}).call(this)}finally{}},function(e,t,n){try{(function(){"use strict";function e(e,t){return Math.sqrt(Math.pow(e.pageX-t.pageX,2)+Math.pow(e.pageY-t.pageY,2))}function r(t,n){return e(t,n)>f}function a(e){return e.touches.length?{pageX:e.touches[0].pageX,pageY:e.touches[0].pageY}:null}function o(e,t){e&&t&&(e.className=e.className.replace(" "+t,""))}function i(e){return!!e&&e.isScrolling}function l(e){return!!e&&e.openIndex!==-1}function s(e,t,n,s,c,f){return{onTouchStart:function(r){var c=u.default.findDOMNode(e);o(c,s),h=i(t)||l(n),d=a(r),f(r),m||(m=c),setTimeout(function(){var e=s;!h&&e&&m===c&&(c.className+=" "+e)},p)},onTouchMove:function(t){var n=u.default.findDOMNode(e);r(a(t),d)&&(h=!0,m=null,o(n,s))},onTouchEnd:function(t){var n=t.target,r=u.default.findDOMNode(e);h||m!==r?h&&(m=null):setTimeout(function(){c(n),o(r,s),m=null},p+10)},onTouchCancel:function(){o(u.default.findDOMNode(e),s)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TAP_DELAY=void 0;var c=n(4),u=function(e){return e&&e.__esModule?e:{default:e}}(c),f=5,p=t.TAP_DELAY=50,d=void 0,h=void 0,m=null;t.default=s}).call(this)}finally{}},function(e,t,n){(function(e){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),u=n(66),f=r(u),p=function(t){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),l(n,[{key:"render",value:function(){"production"!==e.env.NODE_ENV&&(null!=this.props.touchClass||this.props.internalUse||console.error("yo-touchable: Touchable组件没有设置touchClass, 出于用户体验考虑, 应该尽量给触摸区域添加触摸反馈。"));var t=c.default.Children.only(this.props.children),n=(0,f.default)(this,this.context.scroller,this.context.swipeMenuList,this.props.touchClass,this.props.onTap,this.props.onTouchStart),r=n.onTouchStart,a=n.onTouchMove,o=n.onTouchEnd,i=n.onTouchCancel;return c.default.cloneElement(t,{onTouchStart:r,onTouchMove:a,onTouchEnd:o,onTouchCancel:i})}}]),n}(s.Component);p.propTypes={touchClass:s.PropTypes.string,onTap:s.PropTypes.func,onTouchStart:s.PropTypes.func,internalUse:s.PropTypes.bool,children:s.PropTypes.object},p.defaultProps={onTouchStart:function(){},touchClass:null,onTap:function(){},internalUse:!1},p.contextTypes={scroller:s.PropTypes.object,swipeMenuList:s.PropTypes.object},t.default=p}).call(this)}finally{}}).call(t,n(5))},function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}n(52);var t=n(3),r=n(2),a=n(17),o=e(a),i=n(20),l=e(i),s=n(16),c=e(s),u=n(18),f=e(u),p=n(45),d=e(p),h=n(19),m=e(h),y=n(21),v=e(y),_=n(23),b=e(_),g=n(24),E=e(g),w=n(26),T=e(w),P=n(27),k=e(P),O=n(22),N=e(O),C=n(25),S=e(C),j=n(29),x=e(j),L=n(28),M=e(L),D=n(49),R=e(D),I=n(48),A=e(I),H=n(12),q=e(H),F=n(50),z=e(F),Y=n(51),U=e(Y),X=n(43),V=e(X),W=n(46),B=e(W),K=n(41),$=e(K),G=n(47),Z=e(G),Q=n(42),J=e(Q),ee=n(0),te=e(ee),ne=n(4),re=e(ne),ae=n(1),oe=n(44),ie=e(oe);re.default.render(te.default.createElement(t.Provider,{store:r.store},te.default.createElement(ae.Router,{history:ae.hashHistory},te.default.createElement(ae.Route,{path:"/",component:ie.default},te.default.createElement(ae.IndexRedirect,{to:"/home"}),te.default.createElement(ae.Route,{path:"home",com:te.default.createElement(V.default,null),component:o.default}),te.default.createElement(ae.Route,{path:"cart",com:te.default.createElement($.default,null),component:c.default}),te.default.createElement(ae.Route,{path:"search",com:te.default.createElement(B.default,null),component:f.default}),te.default.createElement(ae.Route,{path:"user",com:te.default.createElement(q.default,null),component:l.default}),te.default.createElement(ae.Route,{path:"service",com:te.default.createElement(Z.default,null),component:m.default})),te.default.createElement(ae.Route,{path:"/myorder",component:k.default}),te.default.createElement(ae.Route,{path:"/detail/:Sn",component:J.default}),te.default.createElement(ae.Route,{path:"/collect",component:N.default}),te.default.createElement(ae.Route,{path:"/account",component:T.default}),te.default.createElement(ae.Route,{path:"/history",component:E.default}),te.default.createElement(ae.Route,{path:"/help",component:b.default}),te.default.createElement(ae.Route,{path:"/address",component:v.default}),te.default.createElement(ae.Route,{path:"/login",component:S.default}),te.default.createElement(ae.Route,{path:"/register",component:x.default}),te.default.createElement(ae.Route,{path:"/newaddress",component:M.default}),te.default.createElement(ae.Route,{path:"/forget",component:R.default}),te.default.createElement(ae.Route,{path:"/editaddress/:type",component:A.default}),te.default.createElement(ae.Route,{path:"/list/:id",component:d.default}),te.default.createElement(ae.Route,{path:"/setup",component:z.default}),te.default.createElement(ae.Route,{path:"/suggestion",component:U.default}))),document.getElementById("root"))}).call(this)}finally{}},function(e,t,n){e.exports=n(79)},function(e,t,n){e.exports=n(37)},function(e,t,n){"use strict";var r={topAbort:null,topAnimationEnd:null,topAnimationIteration:null,topAnimationStart:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topInvalid:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topTransitionEnd:null,topVolumeChange:null,topWaiting:null,topWheel:null},a={topLevelTypes:r};e.exports=a},function(e,t,n){"use strict";(function(t){function r(){if(s)for(var e in c){var n=c[e],r=s.indexOf(e);if(r>-1||("production"!==t.env.NODE_ENV?l(!1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",e):i("96",e)),!u.plugins[r]){n.extractEvents||("production"!==t.env.NODE_ENV?l(!1,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",e):i("97",e)),u.plugins[r]=n;var o=n.eventTypes;for(var f in o)a(o[f],n,f)||("production"!==t.env.NODE_ENV?l(!1,"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",f,e):i("98",f,e))}}}function a(e,n,r){u.eventNameDispatchConfigs.hasOwnProperty(r)&&("production"!==t.env.NODE_ENV?l(!1,"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",r):i("99",r)),u.eventNameDispatchConfigs[r]=e;var a=e.phasedRegistrationNames;if(a){for(var s in a)if(a.hasOwnProperty(s)){var c=a[s];o(c,n,r)}return!0}return!!e.registrationName&&(o(e.registrationName,n,r),!0)}function o(e,n,r){if(u.registrationNameModules[e]&&("production"!==t.env.NODE_ENV?l(!1,"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",e):i("100",e)),u.registrationNameModules[e]=n,u.registrationNameDependencies[e]=n.eventTypes[r].dependencies,"production"!==t.env.NODE_ENV){var a=e.toLowerCase();u.possibleRegistrationNames[a]=e,"onDoubleClick"===e&&(u.possibleRegistrationNames.ondblclick=e)}}var i=n(8),l=n(6),s=null,c={},u={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},possibleRegistrationNames:"production"!==t.env.NODE_ENV?{}:null,injectEventPluginOrder:function(e){s&&("production"!==t.env.NODE_ENV?l(!1,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."):i("101")),s=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var n=!1;for(var a in e)if(e.hasOwnProperty(a)){var o=e[a];c.hasOwnProperty(a)&&c[a]===o||(c[a]&&("production"!==t.env.NODE_ENV?l(!1,"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",a):i("102",a)),c[a]=o,n=!0)}n&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return u.registrationNameModules[t.registrationName]||null;if(void 0!==t.phasedRegistrationNames){var n=t.phasedRegistrationNames;for(var r in n)if(n.hasOwnProperty(r)){var a=u.registrationNameModules[n[r]];if(a)return a}}return null},_resetEventPlugins:function(){s=null;for(var e in c)c.hasOwnProperty(e)&&delete c[e];u.plugins.length=0;var n=u.eventNameDispatchConfigs;for(var r in n)n.hasOwnProperty(r)&&delete n[r];var a=u.registrationNameModules;for(var o in a)a.hasOwnProperty(o)&&delete a[o];if("production"!==t.env.NODE_ENV){var i=u.possibleRegistrationNames;for(var l in i)i.hasOwnProperty(l)&&delete i[l]}}};e.exports=u}).call(t,n(5))},function(e,t,n){"use strict";(function(t){function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return _(e,r)}function a(e,n,a){"production"!==t.env.NODE_ENV&&"production"!==t.env.NODE_ENV&&v(e,"Dispatching inst must not be null");var o=r(e,a,n);o&&(a._dispatchListeners=m(a._dispatchListeners,o),a._dispatchInstances=m(a._dispatchInstances,e))}function o(e){e&&e.dispatchConfig.phasedRegistrationNames&&h.traverseTwoPhase(e._targetInst,a,e)}function i(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst,n=t?h.getParentInstance(t):null;h.traverseTwoPhase(n,a,e)}}function l(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,a=_(e,r);a&&(n._dispatchListeners=m(n._dispatchListeners,a),n._dispatchInstances=m(n._dispatchInstances,e))}}function s(e){e&&e.dispatchConfig.registrationName&&l(e._targetInst,null,e)}function c(e){y(e,o)}function u(e){y(e,i)}function f(e,t,n,r){h.traverseEnterLeave(n,r,l,e,t)}function p(e){y(e,s)}var d=n(33),h=n(15),m=n(35),y=n(36),v=n(13),_=d.getListener,b={accumulateTwoPhaseDispatches:c,accumulateTwoPhaseDispatchesSkipTarget:u,accumulateDirectDispatches:p,accumulateEnterLeaveDispatches:f};e.exports=b}).call(t,n(5))},function(e,t,n){"use strict";(function(t){var r=n(8),a=n(6),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},l=function(e,t,n){var r=this;if(r.instancePool.length){var a=r.instancePool.pop();return r.call(a,e,t,n),a}return new r(e,t,n)},s=function(e,t,n,r){var a=this;if(a.instancePool.length){var o=a.instancePool.pop();return a.call(o,e,t,n,r),o}return new a(e,t,n,r)},c=function(e){var n=this;e instanceof n||("production"!==t.env.NODE_ENV?a(!1,"Trying to release an instance into a pool of a different type."):r("25")),e.destructor(),n.instancePool.length<n.poolSize&&n.instancePool.push(e)},u=o,f=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||u,n.poolSize||(n.poolSize=10),n.release=c,n},p={addPoolingTo:f,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:l,fourArgumentPooler:s};e.exports=p}).call(t,n(5))},function(e,t,n){"use strict";(function(t){function r(e,n,r,a){"production"!==t.env.NODE_ENV&&(delete this.nativeEvent,delete this.preventDefault,delete this.stopPropagation),this.dispatchConfig=e,this._targetInst=n,this.nativeEvent=r;var o=this.constructor.Interface;for(var i in o)if(o.hasOwnProperty(i)){"production"!==t.env.NODE_ENV&&delete this[i];var s=o[i];s?this[i]=s(r):"target"===i?this.target=a:this[i]=r[i]}var c=null!=r.defaultPrevented?r.defaultPrevented:r.returnValue===!1;return this.isDefaultPrevented=c?l.thatReturnsTrue:l.thatReturnsFalse,this.isPropagationStopped=l.thatReturnsFalse,this}function a(e,n){function r(e){return o(i?"setting the method":"setting the property","This is effectively a no-op"),e}function a(){return o(i?"accessing the method":"accessing the property",i?"This is a no-op function":"This is set to null"),n}function o(n,r){"production"!==t.env.NODE_ENV&&s(!1,"This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",n,e,r)}var i="function"==typeof n;return{configurable:!0,set:r,get:a}}var o=n(89),i=n(74),l=n(30),s=n(13),c=!1,u="function"==typeof Proxy,f=["dispatchConfig","_targetInst","nativeEvent","isDefaultPrevented","isPropagationStopped","_dispatchListeners","_dispatchInstances"],p={type:null,target:null,currentTarget:l.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};o(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=l.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=l.thatReturnsTrue)},persist:function(){this.isPersistent=l.thatReturnsTrue},isPersistent:l.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var n in e)"production"!==t.env.NODE_ENV?Object.defineProperty(this,n,a(n,e[n])):this[n]=null;for(var r=0;r<f.length;r++)this[f[r]]=null;"production"!==t.env.NODE_ENV&&(Object.defineProperty(this,"nativeEvent",a("nativeEvent",null)),Object.defineProperty(this,"preventDefault",a("preventDefault",l)),Object.defineProperty(this,"stopPropagation",a("stopPropagation",l)))}}),r.Interface=p,"production"!==t.env.NODE_ENV&&u&&(r=new Proxy(r,{construct:function(e,t){return this.apply(e,Object.create(e.prototype),t)},apply:function(e,n,r){return new Proxy(e.apply(n,r),{set:function(e,n,r){return"isPersistent"===n||e.constructor.Interface.hasOwnProperty(n)||f.indexOf(n)!==-1||("production"!==t.env.NODE_ENV&&s(c||e.isPersistent(),"This synthetic event is reused for performance reasons. If you're seeing this, you're adding a new property in the synthetic event object. The property is never released. See https://fb.me/react-event-pooling for more information."),c=!0),e[n]=r,!0}})}})),r.augmentClass=function(e,t){var n=this,r=function(){};r.prototype=n.prototype;var a=new r;o(a,e.prototype),e.prototype=a,e.prototype.constructor=e,e.Interface=o({},n.Interface,t),e.augmentClass=n.augmentClass,i.addPoolingTo(e,i.fourArgumentPooler)},i.addPoolingTo(r,i.fourArgumentPooler),e.exports=r}).call(t,n(5))},function(e,t,n){"use strict";function r(e,t,n,r){return a.call(this,e,t,n,r)}var a=n(75),o=n(78),i={view:function(e){if(e.view)return e.view;var t=o(e);if(t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};a.augmentClass(r,i),e.exports=r},function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};e.exports=r},function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}e.exports=r},function(e,t,n){"use strict";var r=n(37),a={shouldComponentUpdate:function(e,t){return r(this,e,t)}};e.exports=a},function(e,t,n){"use strict";function r(e,t){var n=u.extractSingleTouch(t);return n?n[e.page]:e.page in t?t[e.page]:t[e.client]+f[e.envScroll]}function a(e,t){var n=r(g.x,t),a=r(g.y,t);return Math.pow(Math.pow(n-e.x,2)+Math.pow(a-e.y,2),.5)}function o(e){return{tapMoveThreshold:y,ignoreMouseThreshold:v,eventTypes:T,extractEvents:function(t,n,o,i){if(!d(t)&&!h(t))return null;if(m(t))b=P();else if(e(b,P()))return null;var l=null,u=a(_,o);return h(t)&&u<y&&(l=c.getPooled(T.touchTap,n,o,i)),d(t)?(_.x=r(g.x,o),_.y=r(g.y,o)):h(t)&&(_.x=0,_.y=0),s.accumulateTwoPhaseDispatches(l),l}}}var i=n(71),l=n(15),s=n(73),c=n(76),u=n(81),f=n(77),p=n(53),d=(i.topLevelTypes,l.isStartish),h=l.isEndish,m=function(e){return["topTouchCancel","topTouchEnd","topTouchStart","topTouchMove"].indexOf(e)>=0},y=10,v=750,_={x:null,y:null},b=null,g={x:{page:"pageX",client:"clientX",envScroll:"currentPageScrollLeft"},y:{page:"pageY",client:"clientY",envScroll:"currentPageScrollTop"}},E=["topTouchStart","topTouchCancel","topTouchEnd","topTouchMove"],w=["topMouseDown","topMouseMove","topMouseUp"].concat(E),T={touchTap:{phasedRegistrationNames:{bubbled:p({onTouchTap:null}),captured:p({onTouchTapCapture:null})},dependencies:w}},P=function(){return Date.now?Date.now:function(){return+new Date}}();e.exports=o},function(e,t){var n={extractSingleTouch:function(e){var t=e.touches,n=e.changedTouches,r=t&&t.length>0,a=n&&n.length>0;return!r&&a?n[0]:r?t[0]:e}};e.exports=n},function(e,t){e.exports=function(e,t){if(e&&t-e<750)return!0}},function(e,t,n){(function(t){var r=n(6),a=n(82),o=!1;e.exports=function(e){e=e||{};var i=e.shouldRejectClick||a;"production"!==t.env.NODE_ENV&&r(!o,"injectTapEventPlugin(): Can only be called once per application lifecycle.\n\nIt is recommended to call injectTapEventPlugin() just before you call ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() itself, please contact the maintainer as it shouldn't be called in library code and should be injected by the application."),o=!0,n(33).injection.injectEventPluginsByName({TapEventPlugin:n(80)(i)})}}).call(t,n(5))},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var u in n)o.call(n,u)&&(s[u]=n[u]);if(a){l=a(n);for(var f=0;f<l.length;f++)i.call(n,l[f])&&(s[l[f]]=n[l[f]])}}return s}},function(e,t){e.exports=window.Redux}]);
>>>>>>> master
