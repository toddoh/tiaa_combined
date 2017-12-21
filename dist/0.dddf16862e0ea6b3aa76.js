webpackJsonp([0],{

/***/ "3nK4":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": "vGYV",
	"./": "vGYV",
	"./greeter": "gqAQ",
	"./greeter.js": "gqAQ",
	"./index": "vGYV",
	"./index.js": "vGYV",
	"./today": "gf2C",
	"./today.js": "gf2C",
	"./trumptimemachine": "iOaQ",
	"./trumptimemachine.js": "iOaQ"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "3nK4";

/***/ }),

/***/ "gf2C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "gqAQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
console.log('The print.js module has loaded! See the network tab in dev tools...');

exports.default = function () {
  console.log('Button Clicked: Here\'s "some text"!');
};

/***/ }),

/***/ "iOaQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render_trumptimemachine = render_trumptimemachine;

var _litHtml = __webpack_require__("v2F8");

function render_trumptimemachine() {
    document.querySelector('.navbox-currentpath').textContent = 'TrumpTimeMachine';
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-trumptimemachine"]').remove();
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMgXlxcLi4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ3JlZXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdHJ1bXB0aW1lbWFjaGluZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicmVuZGVyX3RydW1wdGltZW1hY2hpbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQUEsUUFBUUMsR0FBUixDQUFZLHFFQUFaOztrQkFFZSxZQUFNO0FBQ25CRCxVQUFRQyxHQUFSLENBQVksc0NBQVo7QUFDRCxDOzs7Ozs7Ozs7Ozs7O1FDRGVDLHVCLEdBQUFBLHVCOztBQUhoQjs7QUFHTyxTQUFTQSx1QkFBVCxHQUFtQztBQUN0Q0MsYUFBU0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENDLFdBQTlDLEdBQTJELGtCQUEzRDtBQUNBRixhQUFTQyxhQUFULENBQXVCLG9FQUF2QixFQUE2RkUsTUFBN0Y7QUFDSCxDIiwiZmlsZSI6IjAuZGRkZjE2ODYyZTBlYTZiM2FhNzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi5cIjogXCJ2R1lWXCIsXG5cdFwiLi9cIjogXCJ2R1lWXCIsXG5cdFwiLi9ncmVldGVyXCI6IFwiZ3FBUVwiLFxuXHRcIi4vZ3JlZXRlci5qc1wiOiBcImdxQVFcIixcblx0XCIuL2luZGV4XCI6IFwidkdZVlwiLFxuXHRcIi4vaW5kZXguanNcIjogXCJ2R1lWXCIsXG5cdFwiLi90b2RheVwiOiBcImdmMkNcIixcblx0XCIuL3RvZGF5LmpzXCI6IFwiZ2YyQ1wiLFxuXHRcIi4vdHJ1bXB0aW1lbWFjaGluZVwiOiBcImlPYVFcIixcblx0XCIuL3RydW1wdGltZW1hY2hpbmUuanNcIjogXCJpT2FRXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIjNuSzRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcyBeXFwuLiokXG4vLyBtb2R1bGUgaWQgPSAzbks0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnNvbGUubG9nKCdUaGUgcHJpbnQuanMgbW9kdWxlIGhhcyBsb2FkZWQhIFNlZSB0aGUgbmV0d29yayB0YWIgaW4gZGV2IHRvb2xzLi4uJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0J1dHRvbiBDbGlja2VkOiBIZXJlXFwncyBcInNvbWUgdGV4dFwiIScpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ncmVldGVyLmpzIiwiaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdC1odG1sJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyX3RydW1wdGltZW1hY2hpbmUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLnRleHRDb250ZW50ID0nVHJ1bXBUaW1lTWFjaGluZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1zZWN0aW9ucyBsaVtkYXRhLXNlY3Rpb25pZD1cIm5hdi1zZWN0aW9uLXRydW1wdGltZW1hY2hpbmVcIl0nKS5yZW1vdmUoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdHJ1bXB0aW1lbWFjaGluZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=