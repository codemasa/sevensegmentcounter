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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SevenSegmentCounter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SevenSegmentCounter, _React$Component);

  function SevenSegmentCounter(props) {
    var _this;

    _classCallCheck(this, SevenSegmentCounter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SevenSegmentCounter).call(this, props));
    _this.state = {
      index: -1,
      width: _this.props.width,
      offColor: _this.props.offColor,
      onColor: _this.props.onColor,
      backgroundColor: _this.props.backgroundColor
    };
    return _this;
  }

  _createClass(SevenSegmentCounter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateCanvas(this.state.index);

      if (this.props.currentIndex) {
        this.updateCanvas(this.props.currentIndex);
        this.setState(function (state) {
          return {
            index: _this2.props.currentIndex,
            width: _this2.props.width,
            offColor: _this2.props.offColor,
            onColor: _this2.props.onColor,
            backgroundColor: _this2.props.backgroundColor
          };
        });
      } else {
        this.updateCanvas(-1);
      }
    }
  }, {
    key: "increment",
    value: function increment() {
      var _this3 = this;

      this.setState(function (state) {
        return {
          index: _this3.state.index + 1,
          width: _this3.props.width,
          offColor: _this3.props.offColor,
          onColor: _this3.props.onColor,
          backgroundColor: _this3.props.backgroundColor
        };
      }, function () {
        _this3.updateCanvas(_this3.state.index);
      });
    }
  }, {
    key: "decrement",
    value: function decrement() {
      var _this4 = this;

      if (this.state.index > -2) {
        this.setState(function (state) {
          return {
            index: _this4.state.index - 1,
            width: _this4.props.width,
            offColor: _this4.props.offColor,
            onColor: _this4.props.onColor,
            backgroundColor: _this4.props.backgroundColor
          };
        }, function () {
          _this4.updateCanvas(_this4.state.index);
        });
      }
    }
  }, {
    key: "updateCanvas",
    value: function updateCanvas(i) {
      var canvas = this.refs.canvas;
      var context = this.refs.canvas.getContext('2d');
      var canvasWidth = this.state.width;
      var canvasHeight = this.state.width / 4;
      var width = canvasWidth / 16;
      var height = canvasHeight / 16;
      var space = width / 4;
      var centerW = canvasWidth / 13;
      var centerH = canvasHeight / 6;
      var onColor = this.state.onColor;
      var offColor = this.state.offColor;

      function colorBackground(leftX, topY, width, height, color) {
        context.fillStyle = color;
        context.fillRect(leftX, topY, width, height);
      }

      function colorRect(leftX, topY, width, height, color) {
        context.fillStyle = color;
        context.fillRect(leftX, topY, width, height);
      }

      function colorCircle(centerX, centerY, radius, color) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
        context.fill();
      }

      function colorTriangle(height, base, x, y, color) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + base / 2, y + height);
        context.lineTo(x - base / 2, y + height);
        context.closePath();
        context.fillStyle = color;
        context.fill();
      }

      function colorSegment(type, digit, on) {
        var color = offColor;

        if (on == true) {
          color = onColor;
        }

        switch (type) {
          case "A":
            colorRect(space + digit * width * 2 + centerW, 0 + centerH, width, height, color);
            break;

          case "B":
            colorRect(width + space + digit * width * 2 + centerW, space + centerH, height, width, color);
            break;

          case "C":
            colorRect(width + space + digit * width * 2 + centerW, width + space * 2 + centerH, height, width, color);
            break;

          case "D":
            colorRect(space + digit * width * 2 + centerW, (width + space) * 2 + centerH, width, height, color);
            break;

          case "E":
            colorRect(digit * width * 2 + centerW, width + space * 2 + centerH, height, width, color);
            break;

          case "F":
            colorRect(digit * width * 2 + centerW, space + centerH, height, width, color);
            break;

          case "G":
            colorRect(space + digit * width * 2 + centerW, width + space + centerH, width, height, color);
            break;

          case "DP":
            colorCircle(63 + width + digit * width * 2, (width + 25) * 2 + 13, height / 3, color);
        }
      }

      function colorDigit(digit, value) {
        var on = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var numbers = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
        var segments = ["A", "B", "C", "D", "E", "F", "G"];
        colorSegment(segments[0], 6 - digit, isOn(numbers[value], 6, true));
        colorSegment(segments[1], 6 - digit, isOn(numbers[value], 5, true));
        colorSegment(segments[2], 6 - digit, isOn(numbers[value], 4, true));
        colorSegment(segments[3], 6 - digit, isOn(numbers[value], 3, true));
        colorSegment(segments[4], 6 - digit, isOn(numbers[value], 2, true));
        colorSegment(segments[5], 6 - digit, isOn(numbers[value], 1, true));
        colorSegment(segments[6], 6 - digit, isOn(numbers[value], 0, true));
      }

      function isOn(val, shift, on) {
        if (val >> shift & 1 && on) {
          return true;
        }

        return false;
      }

      colorBackground(0, 0, canvas.width, canvas.height, this.props.backgroundColor);
      colorDigit(0, (i + 1) % 10);
      colorDigit(1, Math.floor((i + 1) / 10) % 10);
      colorDigit(2, Math.floor((i + 1) / 100) % 10);
      colorDigit(3, Math.floor((i + 1) / 1000) % 10);
      colorDigit(4, Math.floor((i + 1) / 10000) % 10);
      colorDigit(5, Math.floor((i + 1) / 100000) % 10);
      colorDigit(6, Math.floor((i + 1) / 1000000) % 10);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.props.className
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
        ref: "canvas",
        width: this.props.width,
        height: this.props.width / 4
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.props.buttonClass
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.increment.bind(this)
      }, this.props.buttonTag.increment ? this.props.buttonTag.increment : "Increment"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.decrement.bind(this)
      }, this.props.buttonTag.decrement ? this.props.buttonTag.decrement : "Decrement")));
    }
  }]);

  return SevenSegmentCounter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SevenSegmentCounter);

/***/ })
/******/ ]);