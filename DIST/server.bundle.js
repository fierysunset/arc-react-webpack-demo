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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var current = (process.versions && process.versions.node && process.versions.node.split('.')) || [];

function versionIncluded(version) {
    if (version === '*') return true;
    var versionParts = version.split('.');
    for (var i = 0; i < 3; ++i) {
        if ((current[i] || 0) >= (versionParts[i] || 0)) return true;
    }
    return false;
}

var data = __webpack_require__(42);

var core = {};
for (var version in data) { // eslint-disable-line no-restricted-syntax
    if (Object.prototype.hasOwnProperty.call(data, version) && versionIncluded(version)) {
        for (var i = 0; i < data[version].length; ++i) {
            core[data[version][i]] = true;
        }
    }
}
module.exports = core;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(29);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorChanging = function (_Component) {
    _inherits(ColorChanging, _Component);

    function ColorChanging() {
        _classCallCheck(this, ColorChanging);

        return _possibleConstructorReturn(this, (ColorChanging.__proto__ || Object.getPrototypeOf(ColorChanging)).apply(this, arguments));
    }

    _createClass(ColorChanging, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'color-changing' },
                'This text is ',
                _react2.default.createElement('span', { className: 'color-text' }),
                ' in ',
                _react2.default.createElement('span', { className: 'device-type' })
            );
        }
    }]);

    return ColorChanging;
}(_react.Component);

exports.default = ColorChanging;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_Component) {
    _inherits(Image, _Component);

    function Image() {
        _classCallCheck(this, Image);

        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
    }

    _createClass(Image, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'image-container' },
                _react2.default.createElement('div', { className: 'item-image', title: 'image of stuffed husky' })
            );
        }
    }]);

    return Image;
}(_react.Component);

exports.default = Image;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemActions = function (_Component) {
    _inherits(ItemActions, _Component);

    function ItemActions() {
        _classCallCheck(this, ItemActions);

        return _possibleConstructorReturn(this, (ItemActions.__proto__ || Object.getPrototypeOf(ItemActions)).apply(this, arguments));
    }

    _createClass(ItemActions, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'item-actions' },
                _react2.default.createElement(
                    'button',
                    null,
                    'Buy it now'
                ),
                _react2.default.createElement(
                    'button',
                    null,
                    'Add to cart'
                )
            );
        }
    }]);

    return ItemActions;
}(_react.Component);

exports.default = ItemActions;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemDetails = function (_Component) {
    _inherits(ItemDetails, _Component);

    function ItemDetails() {
        _classCallCheck(this, ItemDetails);

        return _possibleConstructorReturn(this, (ItemDetails.__proto__ || Object.getPrototypeOf(ItemDetails)).apply(this, arguments));
    }

    _createClass(ItemDetails, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'item-details' },
                'Price: ',
                _react2.default.createElement(
                    'b',
                    null,
                    '$12.99'
                )
            );
        }
    }]);

    return ItemDetails;
}(_react.Component);

exports.default = ItemDetails;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemTitle = function (_Component) {
    _inherits(ItemTitle, _Component);

    function ItemTitle() {
        _classCallCheck(this, ItemTitle);

        return _possibleConstructorReturn(this, (ItemTitle.__proto__ || Object.getPrototypeOf(ItemTitle)).apply(this, arguments));
    }

    _createClass(ItemTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h2',
                { className: 'item-title' },
                'The awesomest stuffed husky ever!!1!'
            );
        }
    }]);

    return ItemTitle;
}(_react.Component);

exports.default = ItemTitle;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SellerDetails = function (_Component) {
    _inherits(SellerDetails, _Component);

    function SellerDetails() {
        _classCallCheck(this, SellerDetails);

        return _possibleConstructorReturn(this, (SellerDetails.__proto__ || Object.getPrototypeOf(SellerDetails)).apply(this, arguments));
    }

    _createClass(SellerDetails, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'seller-details' },
                _react2.default.createElement(
                    'h4',
                    null,
                    'Seller Information'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'SomeAwesomeName'
                ),
                _react2.default.createElement('br', null),
                '101.1% Positive feedback'
            );
        }
    }]);

    return SellerDetails;
}(_react.Component);

exports.default = SellerDetails;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_Component) {
    _inherits(Share, _Component);

    function Share() {
        _classCallCheck(this, Share);

        return _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).apply(this, arguments));
    }

    _createClass(Share, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'share-container' },
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    _react2.default.createElement('span', { className: 'share-icon', title: 'share icon' })
                ),
                'Share this item!'
            );
        }
    }]);

    return Share;
}(_react.Component);

exports.default = Share;

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(48);

function getDefault(obj) { return obj && obj.__esModule ? obj.default : obj; }

module.exports = function (requireAdapted, config) {
    function AdaptiveComponent(props, context) {
        var flags = context.flags;
        var Component = getDefault(requireAdapted(flags));
        return React.createElement(Component, props);
    }

    AdaptiveComponent.contextTypes = {
        flags: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ])
    };

    return AdaptiveComponent;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3);
var path = __webpack_require__(1);
var resolve = __webpack_require__(40);
var directoryListings = {};
var fileMatches = {};
var configs = {};

module.exports.adaptResource = adaptResource;
module.exports.joinFlags = joinFlags;
module.exports.loadAdaptiveConfig = loadAdaptiveConfig;
module.exports.resolveFrom = resolveFrom;
module.exports.getFileMatches = getFileMatches;
module.exports.getBestMatch = getBestMatch;

function getIndexedFlags(flags) {
    if (!Array.isArray(flags)) return flags; //assume indexed flagset
    if (flags.indexedFlags) return flags.indexedFlags;

    var indexedFlags = {};
    for (var i = 0; i < flags.length; i++) {
        indexedFlags[flags[i]] = true;
    }

    Object.defineProperty(flags, 'indexedFlags', { value: indexedFlags });
    return indexedFlags;
}

function getDirectoryListing(dirname) {
    if (directoryListings[dirname]) {
        return directoryListings[dirname];
    }

    return directoryListings[dirname] = fs.readdirSync(dirname);
}

function loadAdaptiveConfig(filepath) {
    if (configs[filepath]) {
        return configs[filepath];
    }

    var content = fs.readFileSync(filepath, 'utf8');
    var config = configs[filepath] = JSON.parse(content);

    return config;
}

function getFileMatches(filepath, extensions) {
    if (fileMatches[filepath]) {
        return fileMatches[filepath];
    }

    var dirname = path.dirname(filepath);
    var filename = path.basename(filepath);
    var extStart = filename.lastIndexOf('.');
    var basename = filename.slice(0, extStart);
    var extension = filename.slice(extStart + 1);
    var files = getDirectoryListing(dirname);
    var isIndexAdaptive = filename === 'index.arc';
    var matches = [];
    var hasDefault = false;
    var defaultName;
    var config;
    var pattern;

    if (isIndexAdaptive) {
        pattern = /([\w\d-]+(?:\.[\w\d-]+)*)/;
        config = loadAdaptiveConfig(filepath);
        defaultName = config && config.default || 'default';
    } else {
        pattern = new RegExp('^' + basename + '((?:\\.[\\w\\d-]+)*)' + '\\.' + extension + '$');
    }

    files.forEach(file => {
        var match = pattern.exec(file);
        if (match) {
            var fullpath = path.join(dirname, file);
            var stat = fs.statSync(fullpath);
            var flags = match[1].split('.');

            if (isIndexAdaptive) {
                if (!stat.isDirectory()) return;
                fullpath = resolve.sync(fullpath, {
                    basedir: path.dirname(fullpath),
                    extensions: extensions || ['.js']
                });
            } else {
                if (!stat.isFile()) return;
                flags = flags.slice(1);
            }

            if (file === defaultName) {
                flags = [];
            }

            hasDefault = hasDefault || !flags.length;

            matches.push({ file: fullpath, flags });
        }
    });

    if (!hasDefault) {
        throw new Error('No default found for ' + filepath);
    }

    return fileMatches[filepath] = matches;
}

// Utility function to get directory matches
function getDirMatches(filepath) {
    if (fileMatches[filepath]) {
        return fileMatches[filepath];
    }

    var parentDir = path.dirname(filepath);
    var basename = path.basename(filepath);
    var contents = getDirectoryListing(parentDir);
    var matches = [];

    contents.forEach(dir => {
        var fullpath = path.join(parentDir, dir);
        // We only want to operate on the directories
        var stat = fs.statSync(fullpath);
        if (!stat.isDirectory()) return;

        var flags = dir.split('.');

        if (dir === basename) {
            flags = [];
        }

        matches.push({ file: fullpath, flags });
    });

    return fileMatches[filepath] = matches;
}

function adaptResource(filepath, flags) {
    var stat = fs.statSync(filepath);
    var matches = [];

    if (stat.isFile()) {
        matches = getFileMatches(filepath);
    } else if (stat.isDirectory()) {
        matches = getDirMatches(filepath);
    }

    return getBestMatch(matches, flags).file;
}

function resolveFrom(requestingFile, targetFile, options) {
    var flags = options.flags;
    var extensions = (options.extensions || []).concat('.arc');

    var resolvedFile = resolve.sync(targetFile, {
        basedir: path.dirname(requestingFile),
        extensions: extensions || ['.js']
    });

    if (getFileMatches(resolvedFile).some(match => match.file === requestingFile)) {
        return resolvedFile;
    }

    return adaptResource(resolvedFile, flags);
}

// Alphabetize flags before joining them
function joinFlags(flags) {
    flags.sort();
    return flags.join('.');
}

// Return best matching filepath
function getBestMatch(matches, flags) {
    var indexedFlags = getIndexedFlags(flags);
    var bestMatchObj = {};
    var bestMatchFile = '';

    matches.sort((a, b) => (
        b.flags.length - a.flags.length
    ));

    bestMatchObj = matches.find(match => {
        return match.flags.every(flag => indexedFlags[flag]);
    });

    return bestMatchObj;
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function () {
    // see https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
    var origPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) { return stack; };
    var stack = (new Error()).stack;
    Error.prepareStackTrace = origPrepareStackTrace;
    return stack[2].getFileName();
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(1);
var parse = path.parse || __webpack_require__(39);

module.exports = function nodeModulesPaths(start, opts) {
    var modules = opts && opts.moduleDirectory
        ? [].concat(opts.moduleDirectory)
        : ['node_modules']
    ;

    // ensure that `start` is an absolute path at this point,
    // resolving against the process' current working directory
    var absoluteStart = path.resolve(start);

    var prefix = '/';
    if (/^([A-Za-z]:)/.test(absoluteStart)) {
        prefix = '';
    } else if (/^\\\\/.test(absoluteStart)) {
        prefix = '\\\\';
    }

    var paths = [absoluteStart];
    var parsed = parse(absoluteStart);
    while (parsed.dir !== paths[paths.length - 1]) {
        paths.push(parsed.dir);
        parsed = parse(parsed.dir);
    }

    var dirs = paths.reduce(function (dirs, aPath) {
        return dirs.concat(modules.map(function (moduleDir) {
            return path.join(prefix, aPath, moduleDir);
        }));
    }, []);

    return opts && opts.paths ? dirs.concat(opts.paths) : dirs;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


            let config = {
    "proxy": "arc-react/proxy",
    "default": "desktop"
};
            let proxy = __webpack_require__(13);
            let resourcePath = '/Users/conchang/Documents/ebay/git/ADAPTIVE/arc-react-webpack-demo/src/components/header/index.arc';
            let getBestMatch = __webpack_require__(14).getBestMatch;
            let matches = [{ exports:__webpack_require__(25), flags:["mobile"]},{ exports:__webpack_require__(24), flags:[]}];

            function requireAdapted(flags) {
                return getBestMatch(matches, flags).exports;
            }

            module.exports = proxy(requireAdapted, config);
        

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _arcResolver = __webpack_require__(46);

var _arcResolver2 = _interopRequireDefault(_arcResolver);

var _appLayout = __webpack_require__(44);

var _appLayout2 = _interopRequireDefault(_appLayout);

var _basePage = __webpack_require__(19);

var _basePage2 = _interopRequireDefault(_basePage);

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _arcReact = __webpack_require__(45);

var _mobileDetect = __webpack_require__(47);

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(49);

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

router.get('*', function (req, res) {
	var flags = getFlags(req);
	var outputPath = getOutputPath(flags);
	var initialState = {};

	var appHtml = _server2.default.renderToString(_react2.default.createElement(
		_arcReact.FlagProvider,
		{ flags: flags },
		_react2.default.createElement(_appLayout2.default, { initialState: initialState })
	));

	var pageHtml = (0, _basePage2.default)({
		title: 'ARC React/Webpack Demo',
		appHtml: appHtml,
		outputPath: outputPath
	});

	// Add Vary header for managing SEO and HTTP caching 
	res.header('vary', 'user-agent');
	res.status(200).send(pageHtml);
});

exports.default = router;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var basePage = function basePage(props) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <meta name=\"viewport\" content=\"width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no\">\n\n            <link rel=\"shortcut icon\" href=\"http://www.iconj.com/ico/w/x/wxcg9rbdj8.ico\" type=\"image/x-icon\" />\n            \n            <title>" + props.title + "</title>\n\n            <link rel=\"stylesheet\" href=\"" + props.outputPath + "/style.css\">\n        </head>\n        <body>\n            <div id=\"root\">" + props.appHtml + "</div>\n\n            <script>\n                window.__INITIAL_STATE__ = " + JSON.stringify(props.initialState) + "\n            </script>\n            <script src=\"" + props.outputPath + "/client.bundle.js\"></script>\n        </body>\n    </html>\n    ";
};

exports.default = basePage;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _router = __webpack_require__(18);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/DIST', _express2.default.static('./DIST'));

app.use('/', _router2.default);

app.listen(2222, function () {
	console.log('Listening on port 2222!');
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _breadcrumbs = __webpack_require__(23);

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

var _colorChanging = __webpack_require__(5);

var _colorChanging2 = _interopRequireDefault(_colorChanging);

var _header = __webpack_require__(17);

var _header2 = _interopRequireDefault(_header);

var _image = __webpack_require__(6);

var _image2 = _interopRequireDefault(_image);

var _itemActions = __webpack_require__(7);

var _itemActions2 = _interopRequireDefault(_itemActions);

var _itemDetails = __webpack_require__(8);

var _itemDetails2 = _interopRequireDefault(_itemDetails);

var _itemTitle = __webpack_require__(9);

var _itemTitle2 = _interopRequireDefault(_itemTitle);

var _sellerDetails = __webpack_require__(10);

var _sellerDetails2 = _interopRequireDefault(_sellerDetails);

var _share = __webpack_require__(11);

var _share2 = _interopRequireDefault(_share);

__webpack_require__(12);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppLayout = function (_Component) {
    _inherits(AppLayout, _Component);

    function AppLayout() {
        _classCallCheck(this, AppLayout);

        return _possibleConstructorReturn(this, (AppLayout.__proto__ || Object.getPrototypeOf(AppLayout)).apply(this, arguments));
    }

    _createClass(AppLayout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'app-layout' },
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_breadcrumbs2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'main-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'column image-col' },
                        _react2.default.createElement(_image2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'details flex1' },
                        _react2.default.createElement(_itemTitle2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'column mid-col flex1' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'item-details-container flex1' },
                                    _react2.default.createElement(_itemDetails2.default, null),
                                    _react2.default.createElement(_itemActions2.default, null)
                                ),
                                _react2.default.createElement(_share2.default, null),
                                _react2.default.createElement(_colorChanging2.default, null),
                                _react2.default.createElement('div', { className: 'wireframe' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'column' },
                                _react2.default.createElement(_sellerDetails2.default, null)
                            )
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'wireframe' })
            );
        }
    }]);

    return AppLayout;
}(_react.Component);

exports.default = AppLayout;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colorChanging = __webpack_require__(5);

var _colorChanging2 = _interopRequireDefault(_colorChanging);

var _header = __webpack_require__(17);

var _header2 = _interopRequireDefault(_header);

var _image = __webpack_require__(6);

var _image2 = _interopRequireDefault(_image);

var _itemActions = __webpack_require__(7);

var _itemActions2 = _interopRequireDefault(_itemActions);

var _itemDetails = __webpack_require__(8);

var _itemDetails2 = _interopRequireDefault(_itemDetails);

var _itemTitle = __webpack_require__(9);

var _itemTitle2 = _interopRequireDefault(_itemTitle);

var _sellerDetails = __webpack_require__(10);

var _sellerDetails2 = _interopRequireDefault(_sellerDetails);

var _share = __webpack_require__(11);

var _share2 = _interopRequireDefault(_share);

__webpack_require__(12);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppLayout = function (_Component) {
    _inherits(AppLayout, _Component);

    function AppLayout() {
        _classCallCheck(this, AppLayout);

        return _possibleConstructorReturn(this, (AppLayout.__proto__ || Object.getPrototypeOf(AppLayout)).apply(this, arguments));
    }

    _createClass(AppLayout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'app-layout' },
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_image2.default, null),
                _react2.default.createElement(_itemTitle2.default, null),
                _react2.default.createElement(_itemDetails2.default, null),
                _react2.default.createElement(_itemActions2.default, null),
                _react2.default.createElement(_sellerDetails2.default, null),
                _react2.default.createElement(_share2.default, null),
                _react2.default.createElement(_colorChanging2.default, null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null)
            );
        }
    }]);

    return AppLayout;
}(_react.Component);

exports.default = AppLayout;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumbs = function (_Component) {
    _inherits(Breadcrumbs, _Component);

    function Breadcrumbs() {
        _classCallCheck(this, Breadcrumbs);

        return _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).apply(this, arguments));
    }

    _createClass(Breadcrumbs, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'breadcrumbs' },
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Back to search resuts'
                ),
                ' | Listed in category:\xA0\xA0',
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Toys & Hobbies'
                ),
                ' > ',
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Stuffed Animals'
                ),
                ' > ',
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Other Stuffed Animals'
                )
            );
        }
    }]);

    return Breadcrumbs;
}(_react.Component);

exports.default = Breadcrumbs;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement(
                    'div',
                    { className: 'ebay-logo' },
                    _react2.default.createElement('img', { width: '250', height: '200', src: 'http://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png' })
                ),
                _react2.default.createElement('input', { placeholder: 'Search...' }),
                _react2.default.createElement(
                    'button',
                    null,
                    'Search'
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            overlayOpen: false
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'closeSearchOverlay',
        value: function closeSearchOverlay(e) {
            this.setState({
                overlayOpen: false
            });
        }
    }, {
        key: 'openSearchOverlay',
        value: function openSearchOverlay(e) {
            this.setState({
                overlayOpen: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ebay-logo' },
                        _react2.default.createElement('img', { src: 'http://ir.ebaystatic.com/pictures/aw/pics/mobile/images/logo_new_d_v2.png' })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'icon-container' },
                        _react2.default.createElement('span', { className: 'icon-button icon-search', onClick: this.openSearchOverlay.bind(this) }),
                        _react2.default.createElement('span', { className: 'icon-button icon-profile' }),
                        _react2.default.createElement('span', { className: 'icon-button icon-shopcart' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'search-overlay' + (!this.state.overlayOpen ? ' hide' : '') },
                    _react2.default.createElement(
                        'div',
                        { className: 'search-row' },
                        _react2.default.createElement('input', { placeholder: 'Search...' }),
                        _react2.default.createElement(
                            'button',
                            null,
                            _react2.default.createElement('span', { className: 'icon-button icon-search-white' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'cancel', onClick: this.closeSearchOverlay.bind(this), href: 'javascript:;' },
                            'Cancel'
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
	"app-layout": "_3Z6UbecM9JEW8aCPs7do64",
	"main-content": "_1KE7pCoqpvWPqbuEsGyvMg",
	"column": "Tq-dOt82MYeEzSh8L5eKl",
	"item-details-container": "_2-epcyg7rcOHSkq3l_XcPr",
	"image-col": "_2XhssX5NfgvBcNf7E9w0ZZ",
	"details": "_2qznOIs2gmo8iK9jWTiFXA",
	"flex1": "_2KvQ0lxGaYCuhucbkEJS1E",
	"mid-col": "gFqX3j-r7t8h-pebQu9yq",
	"wireframe": "_45fhseX8Ldzx1wmdPUhX0"
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"app-layout": "_1WsKGINMeFwECOtNXTQ6GU"
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
	"breadcrumbs": "_2T7s5Rn5puYsLSMqjOOCZj"
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
	"color-changing": "_155lQ0VVHmFeYD6XpBqvlJ",
	"color-text": "_1y5Dxd4MO3ar5opSxmxawB",
	"device-type": "cDxw4bXgGkYg_KyFTGkFj"
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
	"color-changing": "_2g4TQlkQx09F0RPMj7rz5w",
	"color-text": "_2Pd66xodTk9CVLOqRy0y_8",
	"device-type": "_3X4lk-2mE28rF7VoMDGpwP"
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
	"header": "_3wKL1NCRCJuL4xvOk3MFuo",
	"ebay-logo": "_2ZkSqxwM_y76OYsF83sbRe"
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
	"header": "_1s-yDoM53SqQPyWloSH_nc",
	"ebay-logo": "_1sEE3QGZCfdox7rO6tElpH",
	"icon-container": "Y07S0LDhHVwPf98ewIslk",
	"icon-search": "_3KX50W1HqG0uEOqH__mgSB",
	"icon-profile": "_2RgVpJCLH5ReWGfOoiv8Jh",
	"icon-shopcart": "_10KDUYNN4yTPwdlV8abbY-",
	"icon-button": "_3qolwoyA-Ki0vGgMG5bFJI",
	"hide": "cUqEogtHAHyQdtMufcXdC",
	"search-overlay": "_1wqUsf6Bz2pl62ukpbGc5E",
	"cancel": "_2HyVxlIXoXNhRInVkRUnET",
	"search-row": "_2AXodc2HB0FfaQUV31pLJ5",
	"icon-search-white": "_3f-ThPYjOjpE-DmQ8iqTme"
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
	"image-container": "_22K5JnyWw6a5ve2F3fNtaU",
	"item-image": "_3VlGOQ_m39i4Ixcviat7F7"
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
	"item-actions": "MLsO7khUx0AbGMGaeCTUD"
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {
	"item-details": "_1dp_FM6fmXfqwD9A9ybssl"
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
	"item-title": "O-gANBm6q_zuzxtNB_hy7"
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
	"seller-details": "_49LzCG5K3u_KrmSxsilHU"
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
	"share-container": "_3cNDDS7nKf6t_OYaOtJFyH",
	"share-icon": "z1lvNInueH8wYJoqXsP77"
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isWindows = process.platform === 'win32';

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

win32.parse = function(pathString) {
  if (typeof pathString !== 'string') {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};



// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


posix.parse = function(pathString) {
  if (typeof pathString !== 'string') {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


if (isWindows)
  module.exports = win32.parse;
else /* posix */
  module.exports = posix.parse;

module.exports.posix = posix.parse;
module.exports.win32 = win32.parse;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var async = __webpack_require__(41);
async.core = core;
async.isCore = function isCore(x) { return core[x]; };
async.sync = __webpack_require__(43);

exports = async;
module.exports = async;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var fs = __webpack_require__(3);
var path = __webpack_require__(1);
var caller = __webpack_require__(15);
var nodeModulesPaths = __webpack_require__(16);

module.exports = function resolve(x, options, callback) {
    var cb = callback;
    var opts = options || {};
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    if (typeof x !== 'string') {
        var err = new TypeError('Path must be a string.');
        return process.nextTick(function () {
            cb(err);
        });
    }

    var isFile = opts.isFile || function (file, cb) {
        fs.stat(file, function (err, stat) {
            if (!err) {
                return cb(null, stat.isFile() || stat.isFIFO());
            }
            if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
            return cb(err);
        });
    };
    var readFile = opts.readFile || fs.readFile;

    var extensions = opts.extensions || ['.js'];
    var y = opts.basedir || path.dirname(caller());

    opts.paths = opts.paths || [];

    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..' || x.slice(-1) === '/') res += '/';
        if (/\/$/.test(x) && res === y) {
            loadAsDirectory(res, opts.package, onfile);
        } else loadAsFile(res, opts.package, onfile);
    } else loadNodeModules(x, y, function (err, n, pkg) {
        if (err) cb(err);
        else if (n) cb(null, n, pkg);
        else if (core[x]) return cb(null, x);
        else {
            var moduleError = new Error("Cannot find module '" + x + "' from '" + y + "'");
            moduleError.code = 'MODULE_NOT_FOUND';
            cb(moduleError);
        }
    });

    function onfile(err, m, pkg) {
        if (err) cb(err);
        else if (m) cb(null, m, pkg);
        else loadAsDirectory(res, function (err, d, pkg) {
            if (err) cb(err);
            else if (d) cb(null, d, pkg);
            else {
                var moduleError = new Error("Cannot find module '" + x + "' from '" + y + "'");
                moduleError.code = 'MODULE_NOT_FOUND';
                cb(moduleError);
            }
        });
    }

    function loadAsFile(x, thePackage, callback) {
        var loadAsFilePackage = thePackage;
        var cb = callback;
        if (typeof loadAsFilePackage === 'function') {
            cb = loadAsFilePackage;
            loadAsFilePackage = undefined;
        }

        var exts = [''].concat(extensions);
        load(exts, x, loadAsFilePackage);

        function load(exts, x, loadPackage) {
            if (exts.length === 0) return cb(null, undefined, loadPackage);
            var file = x + exts[0];

            var pkg = loadPackage;
            if (pkg) onpkg(null, pkg);
            else loadpkg(path.dirname(file), onpkg);

            function onpkg(err, pkg_, dir) {
                pkg = pkg_;
                if (err) return cb(err);
                if (dir && pkg && opts.pathFilter) {
                    var rfile = path.relative(dir, file);
                    var rel = rfile.slice(0, rfile.length - exts[0].length);
                    var r = opts.pathFilter(pkg, x, rel);
                    if (r) return load(
                        [''].concat(extensions.slice()),
                        path.resolve(dir, r),
                        pkg
                    );
                }
                isFile(file, onex);
            }
            function onex(err, ex) {
                if (err) return cb(err);
                if (ex) return cb(null, file, pkg);
                load(exts.slice(1), x, pkg);
            }
        }
    }

    function loadpkg(dir, cb) {
        if (dir === '' || dir === '/') return cb(null);
        if (process.platform === 'win32' && (/^\w:[/\\]*$/).test(dir)) {
            return cb(null);
        }
        if (/[/\\]node_modules[/\\]*$/.test(dir)) return cb(null);

        var pkgfile = path.join(dir, 'package.json');
        isFile(pkgfile, function (err, ex) {
            // on err, ex is false
            if (!ex) return loadpkg(path.dirname(dir), cb);

            readFile(pkgfile, function (err, body) {
                if (err) cb(err);
                try { var pkg = JSON.parse(body); } catch (jsonErr) {}

                if (pkg && opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }
                cb(null, pkg, dir);
            });
        });
    }

    function loadAsDirectory(x, loadAsDirectoryPackage, callback) {
        var cb = callback;
        var fpkg = loadAsDirectoryPackage;
        if (typeof fpkg === 'function') {
            cb = fpkg;
            fpkg = opts.package;
        }

        var pkgfile = path.join(x, 'package.json');
        isFile(pkgfile, function (err, ex) {
            if (err) return cb(err);
            if (!ex) return loadAsFile(path.join(x, 'index'), fpkg, cb);

            readFile(pkgfile, function (err, body) {
                if (err) return cb(err);
                try {
                    var pkg = JSON.parse(body);
                } catch (jsonErr) {}

                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }

                if (pkg.main) {
                    if (pkg.main === '.' || pkg.main === './') {
                        pkg.main = 'index';
                    }
                    loadAsFile(path.resolve(x, pkg.main), pkg, function (err, m, pkg) {
                        if (err) return cb(err);
                        if (m) return cb(null, m, pkg);
                        if (!pkg) return loadAsFile(path.join(x, 'index'), pkg, cb);

                        var dir = path.resolve(x, pkg.main);
                        loadAsDirectory(dir, pkg, function (err, n, pkg) {
                            if (err) return cb(err);
                            if (n) return cb(null, n, pkg);
                            loadAsFile(path.join(x, 'index'), pkg, cb);
                        });
                    });
                    return;
                }

                loadAsFile(path.join(x, '/index'), pkg, cb);
            });
        });
    }

    function processDirs(cb, dirs) {
        if (dirs.length === 0) return cb(null, undefined);
        var dir = dirs[0];

        var file = path.join(dir, x);
        loadAsFile(file, undefined, onfile);

        function onfile(err, m, pkg) {
            if (err) return cb(err);
            if (m) return cb(null, m, pkg);
            loadAsDirectory(path.join(dir, x), undefined, ondir);
        }

        function ondir(err, n, pkg) {
            if (err) return cb(err);
            if (n) return cb(null, n, pkg);
            processDirs(cb, dirs.slice(1));
        }
    }
    function loadNodeModules(x, start, cb) {
        processDirs(cb, nodeModulesPaths(start, opts));
    }
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {
	"*": [
		"assert",
		"buffer_ieee754",
		"buffer",
		"child_process",
		"cluster",
		"console",
		"constants",
		"crypto",
		"_debugger",
		"dgram",
		"dns",
		"domain",
		"events",
		"freelist",
		"fs",
		"http",
		"https",
		"_linklist",
		"module",
		"net",
		"os",
		"path",
		"punycode",
		"querystring",
		"readline",
		"repl",
		"stream",
		"string_decoder",
		"sys",
		"timers",
		"tls",
		"tty",
		"url",
		"util",
		"vm",
		"zlib"
	],
	"0.11": [
		"_http_server"
	],
	"1.0": [
		"process",
		"v8"
	]
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var fs = __webpack_require__(3);
var path = __webpack_require__(1);
var caller = __webpack_require__(15);
var nodeModulesPaths = __webpack_require__(16);

module.exports = function (x, options) {
    if (typeof x !== 'string') {
        throw new TypeError('Path must be a string.');
    }
    var opts = options || {};
    var isFile = opts.isFile || function (file) {
        try {
            var stat = fs.statSync(file);
        } catch (e) {
            if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return false;
            throw e;
        }
        return stat.isFile() || stat.isFIFO();
    };
    var readFileSync = opts.readFileSync || fs.readFileSync;

    var extensions = opts.extensions || ['.js'];
    var y = opts.basedir || path.dirname(caller());

    opts.paths = opts.paths || [];

    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..' || x.slice(-1) === '/') res += '/';
        var m = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m) return m;
    } else {
        var n = loadNodeModulesSync(x, y);
        if (n) return n;
    }

    if (core[x]) return x;

    var err = new Error("Cannot find module '" + x + "' from '" + y + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;

    function loadAsFileSync(x) {
        if (isFile(x)) {
            return x;
        }

        for (var i = 0; i < extensions.length; i++) {
            var file = x + extensions[i];
            if (isFile(file)) {
                return file;
            }
        }
    }

    function loadAsDirectorySync(x) {
        var pkgfile = path.join(x, '/package.json');
        if (isFile(pkgfile)) {
            var body = readFileSync(pkgfile, 'utf8');
            try {
                var pkg = JSON.parse(body);
                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, x);
                }

                if (pkg.main) {
                    var m = loadAsFileSync(path.resolve(x, pkg.main));
                    if (m) return m;
                    var n = loadAsDirectorySync(path.resolve(x, pkg.main));
                    if (n) return n;
                }
            } catch (e) {}
        }

        return loadAsFileSync(path.join(x, '/index'));
    }

    function loadNodeModulesSync(x, start) {
        var dirs = nodeModulesPaths(start, opts);
        for (var i = 0; i < dirs.length; i++) {
            var dir = dirs[i];
            var m = loadAsFileSync(path.join(dir, '/', x));
            if (m) return m;
            var n = loadAsDirectorySync(path.join(dir, '/', x));
            if (n) return n;
        }
    }
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


            let config = {
    "proxy": "arc-react/proxy",
    "default": "desktop"
};
            let proxy = __webpack_require__(13);
            let resourcePath = '/Users/conchang/Documents/ebay/git/ADAPTIVE/arc-react-webpack-demo/src/components/app-layout/index.arc';
            let getBestMatch = __webpack_require__(14).getBestMatch;
            let matches = [{ exports:__webpack_require__(22), flags:["mobile"]},{ exports:__webpack_require__(21), flags:[]}];

            function requireAdapted(flags) {
                return getBestMatch(matches, flags).exports;
            }

            module.exports = proxy(requireAdapted, config);
        

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("arc-react");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("arc-resolver");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);