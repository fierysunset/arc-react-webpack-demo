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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _arcResolver = __webpack_require__(7);

var _arcResolver2 = _interopRequireDefault(_arcResolver);

var _basePage = __webpack_require__(3);

var _basePage2 = _interopRequireDefault(_basePage);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__(8);

var _fs2 = _interopRequireDefault(_fs);

var _helloWorld = __webpack_require__(5);

var _helloWorld2 = _interopRequireDefault(_helloWorld);

var _mobileDetect = __webpack_require__(9);

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Store any necessary device details into an object for later use
var getDeviceInfo = function getDeviceInfo(req) {
	var md = new _mobileDetect2.default(req.headers['user-agent']);

	return {
		desktop: md.phone() === null,
		mobile: md.phone() !== null,
		android: md.os() === 'AndroidOS',
		ios: md.os() === 'iOS',
		iphone: md.is('iPhone')
	};
};

// Create array of flags to pass to arc resolver module to get output path
var getFlags = function getFlags(req) {
	var flags = [];
	var deviceInfo = getDeviceInfo(req);

	for (var key in deviceInfo) {
		if (deviceInfo[key]) {
			flags.push(key);
		}
	}

	return flags;
};

// Get output path based on flags from the user's device info
var getOutputPath = function getOutputPath(flags) {
	// Use arc-resolver to find the directory in the same location that matches the most flags
	return _arcResolver2.default.adaptResource('DIST/default', flags);
};

router.get('/', function (req, res) {
	var flags = getFlags(req);
	var outputPath = getOutputPath(flags);
	var initialState = {};

	var appHtml = _server2.default.renderToString(_react2.default.createElement(_helloWorld2.default, null));

	var pageHtml = (0, _basePage2.default)({
		title: 'ARC React/Webpack Demo',
		appHtml: appHtml,
		outputPath: outputPath
	});

	res.status(200).send(pageHtml);
});

exports.default = router;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var basePage = function basePage(props) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <meta name=\"viewport\" content=\"width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no\">\n\n            <title>" + props.title + "</title>\n            \n            <link rel=\"stylesheet\" href=\"" + props.outputPath + "/style.css\">\n        </head>\n        <body>\n            <div id=\"root\">" + props.appHtml + "</div>\n\n            <script>\n                window.__INITIAL_STATE__ = " + JSON.stringify(props.initialState) + "\n            </script>\n            <script src=\"" + props.outputPath + "/client.bundle.js\"></script>\n        </body>\n    </html>\n    ";
};

exports.default = basePage;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _router = __webpack_require__(2);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/DIST', _express2.default.static('./DIST'));

app.use('/', _router2.default);

app.listen(2222, function () {
	console.log('Listening on port 2222!');
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloWorld = function (_Component) {
    _inherits(HelloWorld, _Component);

    function HelloWorld() {
        _classCallCheck(this, HelloWorld);

        return _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).apply(this, arguments));
    }

    _createClass(HelloWorld, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'hello-world' },
                'Hello world :)'
            );
        }
    }]);

    return HelloWorld;
}(_react.Component);

exports.default = HelloWorld;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"hello-world": "_3hmyzGJbrtodpwYULOs-S-"
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("arc-resolver");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);