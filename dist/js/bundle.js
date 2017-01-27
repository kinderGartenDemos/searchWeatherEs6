/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Weather = __webpack_require__(1);

	// var person = new Person('lei');
	// person.sayHi();
	var city; //import {Person} from './Person.js'

	var weather = new _Weather.Weather('bot');
	$(document).ready(function () {
		$('#search').click(function () {
			var city = $('#cityInput').val();
			weather.get(city);
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Weather = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(2);

	var _Request = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Weather = exports.Weather = function () {
		function Weather() {
			_classCallCheck(this, Weather);
		}

		_createClass(Weather, [{
			key: 'get',
			value: function get(city) {
				var _this = this;

				var url = this.getApiCityUrl(city);
				var request = new _Request.Request();
				request.httpGet(url, function (data) {
					return _this.handleResponse(data);
				});
			}
		}, {
			key: 'getApiCityUrl',
			value: function getApiCityUrl(city) {
				// @todo: sanitize input city
				var apiUrl = _config.config.host + '/data/' + _config.config.version + '/weather?q=' + city + '&APPID=' + _config.config.appid;

				return apiUrl;
			}
		}, {
			key: 'handleResponse',
			value: function handleResponse(data) {
				var temp = data.main.temp - 273.15,
				    result = void 0;
				temp = parseFloat(Math.round(temp * 100) / 100).toFixed(2);
				result = '\n\t\t\tTemperature of city ' + data.name + ' is <strong>' + temp + '</strong> &#8451;\n\t\t';
				$('#current').html(result);
			}

			/* setter and getter funktioniert nicht*/
			// setResponse (response) {
			// 	this.response = response;
			// }

			// getResponse (response) {
			// 	return this.response;
			// }

		}]);

		return Weather;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var config = exports.config = {
		'host': 'http://api.openweathermap.org',
		'version': '2.5',
		'appid': '8bc6ca71b233be3a1e5a66d2d3d45018'
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Request = exports.Request = function () {
		function Request() {
			_classCallCheck(this, Request);
		}

		_createClass(Request, [{
			key: "httpGet",
			value: function httpGet(url, callback) {
				$.ajax({
					url: url,
					dataType: "jsonp",
					timeout: 5000,
					success: function success(data) {
						return callback(data);
					}
				});
			}
		}]);

		return Request;
	}();

/***/ }
/******/ ]);