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

var _templateObject = _taggedTemplateLiteral(['\n    <div class="today-clusters">\n        <div class="hero-texts">\n            <p class="topic-counts">Three topics</p>\n            <p>today</p>\n        </div>\n        <div class="clusters-list">\n        </div>\n    </div>\n    '], ['\n    <div class="today-clusters">\n        <div class="hero-texts">\n            <p class="topic-counts">Three topics</p>\n            <p>today</p>\n        </div>\n        <div class="clusters-list">\n        </div>\n    </div>\n    ']);

exports.render_today = render_today;

var _litHtml = __webpack_require__("v2F8");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function render_today() {
    document.querySelector('.navbox-currentpath').textContent = 'Today';
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-today"]').remove();

    var today_hero_markup = function today_hero_markup() {
        return (0, _litHtml.html)(_templateObject);
    };

    (0, _litHtml.render)(today_hero_markup(), document.querySelector('.minion-contents'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMgXlxcLi4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dyZWV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RydW1wdGltZW1hY2hpbmUuanMiXSwibmFtZXMiOlsicmVuZGVyX3RvZGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJ0b2RheV9oZXJvX21hcmt1cCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJfdHJ1bXB0aW1lbWFjaGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7UUN2QmdCQSxZLEdBQUFBLFk7O0FBSGhCOzs7O0FBR08sU0FBU0EsWUFBVCxHQUF3QjtBQUMzQkMsYUFBU0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENDLFdBQTlDLEdBQTJELE9BQTNEO0FBQ0FGLGFBQVNDLGFBQVQsQ0FBdUIseURBQXZCLEVBQWtGRSxNQUFsRjs7QUFFQSxRQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQjtBQUFBO0FBQUEsS0FBMUI7O0FBV0EseUJBQU9BLG1CQUFQLEVBQTRCSixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUE1QjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNuQkRJLFFBQVFDLEdBQVIsQ0FBWSxxRUFBWjs7a0JBRWUsWUFBTTtBQUNuQkQsVUFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7OztRQ0RlQyx1QixHQUFBQSx1Qjs7QUFIaEI7O0FBR08sU0FBU0EsdUJBQVQsR0FBbUM7QUFDdENQLGFBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDQyxXQUE5QyxHQUEyRCxrQkFBM0Q7QUFDQUYsYUFBU0MsYUFBVCxDQUF1QixvRUFBdkIsRUFBNkZFLE1BQTdGO0FBQ0gsQyIsImZpbGUiOiIzLjljZDdlZjE0OTczMzgyY2M2NTBjLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuXCI6IFwidkdZVlwiLFxuXHRcIi4vXCI6IFwidkdZVlwiLFxuXHRcIi4vZ3JlZXRlclwiOiBcImdxQVFcIixcblx0XCIuL2dyZWV0ZXIuanNcIjogXCJncUFRXCIsXG5cdFwiLi9pbmRleFwiOiBcInZHWVZcIixcblx0XCIuL2luZGV4LmpzXCI6IFwidkdZVlwiLFxuXHRcIi4vdG9kYXlcIjogXCJnZjJDXCIsXG5cdFwiLi90b2RheS5qc1wiOiBcImdmMkNcIixcblx0XCIuL3RydW1wdGltZW1hY2hpbmVcIjogXCJpT2FRXCIsXG5cdFwiLi90cnVtcHRpbWVtYWNoaW5lLmpzXCI6IFwiaU9hUVwiXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIzbks0XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMgXlxcLi4qJFxuLy8gbW9kdWxlIGlkID0gM25LNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQge2h0bWwsIHJlbmRlcn0gZnJvbSAnbGl0LWh0bWwnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJfdG9kYXkoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLnRleHRDb250ZW50ID0nVG9kYXknO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtc2VjdGlvbnMgbGlbZGF0YS1zZWN0aW9uaWQ9XCJuYXYtc2VjdGlvbi10b2RheVwiXScpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgdG9kYXlfaGVyb19tYXJrdXAgPSAoKSA9PiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RheS1jbHVzdGVyc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby10ZXh0c1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b3BpYy1jb3VudHNcIj5UaHJlZSB0b3BpY3M8L3A+XG4gICAgICAgICAgICA8cD50b2RheTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbHVzdGVycy1saXN0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZW5kZXIodG9kYXlfaGVyb19tYXJrdXAoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbmlvbi1jb250ZW50cycpKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9kYXkuanMiLCJjb25zb2xlLmxvZygnVGhlIHByaW50LmpzIG1vZHVsZSBoYXMgbG9hZGVkISBTZWUgdGhlIG5ldHdvcmsgdGFiIGluIGRldiB0b29scy4uLicpO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdCdXR0b24gQ2xpY2tlZDogSGVyZVxcJ3MgXCJzb21lIHRleHRcIiEnKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvZ3JlZXRlci5qcyIsImltcG9ydCB7aHRtbCwgcmVuZGVyfSBmcm9tICdsaXQtaHRtbCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcl90cnVtcHRpbWVtYWNoaW5lKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtY3VycmVudHBhdGgnKS50ZXh0Q29udGVudCA9J1RydW1wVGltZU1hY2hpbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtc2VjdGlvbnMgbGlbZGF0YS1zZWN0aW9uaWQ9XCJuYXYtc2VjdGlvbi10cnVtcHRpbWVtYWNoaW5lXCJdJykucmVtb3ZlKCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RydW1wdGltZW1hY2hpbmUuanMiXSwic291cmNlUm9vdCI6IiJ9