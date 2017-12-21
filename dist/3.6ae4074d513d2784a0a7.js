webpackJsonp([3,4],{

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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    <div class="minion-contents">\n        <div class="contents-hero-texts">\n            <p>Four stories</p>\n            <p>today</p>\n        </div>\n    </div>\n    '], ['\n    <div class="minion-contents">\n        <div class="contents-hero-texts">\n            <p>Four stories</p>\n            <p>today</p>\n        </div>\n    </div>\n    ']);

exports.render_today = render_today;

var _litHtml = __webpack_require__("v2F8");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function render_today() {
    document.querySelector('.navbox-currentpath').textContent = 'Today';
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-today"]').remove();

    var today_hero_markup = function today_hero_markup() {
        return (0, _litHtml.html)(_templateObject);
    };

    (0, _litHtml.render)(today_hero_markup(), document.querySelector('.minion-root'));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMgXlxcLi4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dyZWV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RydW1wdGltZW1hY2hpbmUuanMiXSwibmFtZXMiOlsicmVuZGVyX3RvZGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJ0b2RheV9oZXJvX21hcmt1cCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJfdHJ1bXB0aW1lbWFjaGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7UUN2QmdCQSxZLEdBQUFBLFk7O0FBSGhCOzs7O0FBR08sU0FBU0EsWUFBVCxHQUF3QjtBQUMzQkMsYUFBU0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENDLFdBQTlDLEdBQTJELE9BQTNEO0FBQ0FGLGFBQVNDLGFBQVQsQ0FBdUIseURBQXZCLEVBQWtGRSxNQUFsRjs7QUFFQSxRQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQjtBQUFBO0FBQUEsS0FBMUI7O0FBU0EseUJBQU9BLG1CQUFQLEVBQTRCSixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQTVCO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2pCREksUUFBUUMsR0FBUixDQUFZLHFFQUFaOztrQkFFZSxZQUFNO0FBQ25CRCxVQUFRQyxHQUFSLENBQVksc0NBQVo7QUFDRCxDOzs7Ozs7Ozs7Ozs7O1FDRGVDLHVCLEdBQUFBLHVCOztBQUhoQjs7QUFHTyxTQUFTQSx1QkFBVCxHQUFtQztBQUN0Q1AsYUFBU0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENDLFdBQTlDLEdBQTJELGtCQUEzRDtBQUNBRixhQUFTQyxhQUFULENBQXVCLG9FQUF2QixFQUE2RkUsTUFBN0Y7QUFDSCxDIiwiZmlsZSI6IjMuNmFlNDA3NGQ1MTNkMjc4NGEwYTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi5cIjogXCJ2R1lWXCIsXG5cdFwiLi9cIjogXCJ2R1lWXCIsXG5cdFwiLi9ncmVldGVyXCI6IFwiZ3FBUVwiLFxuXHRcIi4vZ3JlZXRlci5qc1wiOiBcImdxQVFcIixcblx0XCIuL2luZGV4XCI6IFwidkdZVlwiLFxuXHRcIi4vaW5kZXguanNcIjogXCJ2R1lWXCIsXG5cdFwiLi90b2RheVwiOiBcImdmMkNcIixcblx0XCIuL3RvZGF5LmpzXCI6IFwiZ2YyQ1wiLFxuXHRcIi4vdHJ1bXB0aW1lbWFjaGluZVwiOiBcImlPYVFcIixcblx0XCIuL3RydW1wdGltZW1hY2hpbmUuanNcIjogXCJpT2FRXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIjNuSzRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcyBeXFwuLiokXG4vLyBtb2R1bGUgaWQgPSAzbks0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7aHRtbCwgcmVuZGVyfSBmcm9tICdsaXQtaHRtbCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcl90b2RheSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Ym94LWN1cnJlbnRwYXRoJykudGV4dENvbnRlbnQgPSdUb2RheSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1zZWN0aW9ucyBsaVtkYXRhLXNlY3Rpb25pZD1cIm5hdi1zZWN0aW9uLXRvZGF5XCJdJykucmVtb3ZlKCk7XG5cbiAgICBjb25zdCB0b2RheV9oZXJvX21hcmt1cCA9ICgpID0+IGh0bWxgXG4gICAgPGRpdiBjbGFzcz1cIm1pbmlvbi1jb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudHMtaGVyby10ZXh0c1wiPlxuICAgICAgICAgICAgPHA+Rm91ciBzdG9yaWVzPC9wPlxuICAgICAgICAgICAgPHA+dG9kYXk8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZW5kZXIodG9kYXlfaGVyb19tYXJrdXAoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbmlvbi1yb290JykpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b2RheS5qcyIsImNvbnNvbGUubG9nKCdUaGUgcHJpbnQuanMgbW9kdWxlIGhhcyBsb2FkZWQhIFNlZSB0aGUgbmV0d29yayB0YWIgaW4gZGV2IHRvb2xzLi4uJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0J1dHRvbiBDbGlja2VkOiBIZXJlXFwncyBcInNvbWUgdGV4dFwiIScpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ncmVldGVyLmpzIiwiaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdC1odG1sJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyX3RydW1wdGltZW1hY2hpbmUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLnRleHRDb250ZW50ID0nVHJ1bXBUaW1lTWFjaGluZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1zZWN0aW9ucyBsaVtkYXRhLXNlY3Rpb25pZD1cIm5hdi1zZWN0aW9uLXRydW1wdGltZW1hY2hpbmVcIl0nKS5yZW1vdmUoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdHJ1bXB0aW1lbWFjaGluZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=