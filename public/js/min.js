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
/******/ 	__webpack_require__.p = "./public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("window.addEventListener('DOMContentLoaded', function () {\n    var data = [];\n    var $trs = Array.prototype.slice.call(document.querySelectorAll('tr'), 0);\n    $trs.forEach(function ($tr, ir) {\n        row = [];\n        Array.prototype.slice.call($tr.querySelectorAll('td'), 0).forEach(function ($td, ic) {\n            row.push(Number($td.getAttribute('data-value').trim()));\n            $td.addEventListener('click', function () {\n                console.log(ir, ic);\n            });\n        });\n        data.push(row);\n    });\n    var compare = function compare(x, y, row, col, data, value) {\n        var points = [value];\n        if (0 <= x * 3 + row < data.length && 0 <= y * 3 + row < data[0].length) {\n            for (var i = 1; i <= 3; i++) {\n                var ix = x * i + row,\n                    iy = y * i + col;\n                if (data[ix] !== undefined && data[ix][iy] !== undefined && value > 0 && value === data[ix][iy]) {\n                    points.push(value);\n                    if (points.length === 4 && points.reduce(function (a, b) {\n                        return a + b;\n                    }, 0) === value * 4) {\n                        return true;\n                    }\n                }\n            }\n        }\n    };\n    var puissance4 = function puissance4(data) {\n        var win = false,\n            rowLen = data.length,\n            colLen = data[0].length,\n            coordinateModifier = [[1, 0], // right\n        [-1, 0], // left\n        [0, 1], //top\n        [0, -1], //bottom\n        [1, 1], //top right\n        [-1, 1], //top left\n        [1, -1], //bottom left\n        [-1, -1] //bottom right\n        ];\n\n        var _loop = function _loop(_row) {\n            var _loop2 = function _loop2(col) {\n                var value = Number(document.querySelectorAll('tr')[_row].querySelectorAll('td')[col].getAttribute('data-value').trim());\n                coordinateModifier.forEach(function (coordinate, ic) {\n                    var x = coordinate[1],\n                        y = coordinate[0];\n                    if (compare(x, y, _row, col, data, value) === true) {\n                        win = true;\n                    }\n                });\n            };\n\n            for (var col = 0; col < colLen; col++) {\n                _loop2(col);\n            }\n        };\n\n        for (var _row = 0; _row < rowLen; _row++) {\n            _loop(_row);\n        }\n        return win;\n    };\n    console.log(puissance4(data));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250L2pzL2FwcC5qcz9hODRmIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhID0gW107XG4gICAgdmFyICR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cicpLCAwKTtcbiAgICAkdHJzLmZvckVhY2goZnVuY3Rpb24gKCR0ciwgaXIpIHtcbiAgICAgICAgcm93ID0gW107XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCR0ci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpLCAwKS5mb3JFYWNoKGZ1bmN0aW9uICgkdGQsIGljKSB7XG4gICAgICAgICAgICByb3cucHVzaChOdW1iZXIoJHRkLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpLnRyaW0oKSkpO1xuICAgICAgICAgICAgJHRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlyLCBpYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGEucHVzaChyb3cpO1xuICAgIH0pO1xuICAgIHZhciBjb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSh4LCB5LCByb3csIGNvbCwgZGF0YSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHBvaW50cyA9IFt2YWx1ZV07XG4gICAgICAgIGlmICgwIDw9IHggKiAzICsgcm93IDwgZGF0YS5sZW5ndGggJiYgMCA8PSB5ICogMyArIHJvdyA8IGRhdGFbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXggPSB4ICogaSArIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgaXkgPSB5ICogaSArIGNvbDtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtpeF0gIT09IHVuZGVmaW5lZCAmJiBkYXRhW2l4XVtpeV0gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+IDAgJiYgdmFsdWUgPT09IGRhdGFbaXhdW2l5XSkge1xuICAgICAgICAgICAgICAgICAgICBwb2ludHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludHMubGVuZ3RoID09PSA0ICYmIHBvaW50cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCkgPT09IHZhbHVlICogNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBwdWlzc2FuY2U0ID0gZnVuY3Rpb24gcHVpc3NhbmNlNChkYXRhKSB7XG4gICAgICAgIHZhciB3aW4gPSBmYWxzZSxcbiAgICAgICAgICAgIHJvd0xlbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICAgICAgY29sTGVuID0gZGF0YVswXS5sZW5ndGgsXG4gICAgICAgICAgICBjb29yZGluYXRlTW9kaWZpZXIgPSBbWzEsIDBdLCAvLyByaWdodFxuICAgICAgICBbLTEsIDBdLCAvLyBsZWZ0XG4gICAgICAgIFswLCAxXSwgLy90b3BcbiAgICAgICAgWzAsIC0xXSwgLy9ib3R0b21cbiAgICAgICAgWzEsIDFdLCAvL3RvcCByaWdodFxuICAgICAgICBbLTEsIDFdLCAvL3RvcCBsZWZ0XG4gICAgICAgIFsxLCAtMV0sIC8vYm90dG9tIGxlZnRcbiAgICAgICAgWy0xLCAtMV0gLy9ib3R0b20gcmlnaHRcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfcm93KSB7XG4gICAgICAgICAgICB2YXIgX2xvb3AyID0gZnVuY3Rpb24gX2xvb3AyKGNvbCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cicpW19yb3ddLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylbY29sXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVNb2RpZmllci5mb3JFYWNoKGZ1bmN0aW9uIChjb29yZGluYXRlLCBpYykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGNvb3JkaW5hdGVbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoeCwgeSwgX3JvdywgY29sLCBkYXRhLCB2YWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IGNvbExlbjsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBfbG9vcDIoY29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBfcm93ID0gMDsgX3JvdyA8IHJvd0xlbjsgX3JvdysrKSB7XG4gICAgICAgICAgICBfbG9vcChfcm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2luO1xuICAgIH07XG4gICAgY29uc29sZS5sb2cocHVpc3NhbmNlNChkYXRhKSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250L2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250L3Njc3MvaW5kZXguc2Nzcz8zNDYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udC9zY3NzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);