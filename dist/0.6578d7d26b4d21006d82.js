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
    if (window.location.pathname == '/trumptimemachine') {
        document.querySelector('.navbox-currentpath').textContent = 'TrumpTimeMachine';
        document.querySelector('.navbox-sections li[data-sectionid="nav-section-trumptimemachine"]').remove();
    }

    return console.log('hi');
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMgXlxcLi4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ3JlZXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdHJ1bXB0aW1lbWFjaGluZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicmVuZGVyX3RydW1wdGltZW1hY2hpbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7Ozs7QUN4QkFBLFFBQVFDLEdBQVIsQ0FBWSxxRUFBWjs7a0JBRWUsWUFBTTtBQUNuQkQsVUFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7OztRQ0RlQyx1QixHQUFBQSx1Qjs7QUFIaEI7O0FBR08sU0FBU0EsdUJBQVQsR0FBbUM7QUFDdEMsUUFBSUMsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsSUFBNEIsbUJBQWhDLEVBQXFEO0FBQ2pEQyxpQkFBU0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENDLFdBQTlDLEdBQTJELGtCQUEzRDtBQUNBRixpQkFBU0MsYUFBVCxDQUF1QixvRUFBdkIsRUFBNkZFLE1BQTdGO0FBQ0g7O0FBRUQsV0FBT1QsUUFBUUMsR0FBUixDQUFZLElBQVosQ0FBUDtBQUNILEMiLCJmaWxlIjoiMC42NTc4ZDdkMjZiNGQyMTAwNmQ4Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLlwiOiBcInZHWVZcIixcblx0XCIuL1wiOiBcInZHWVZcIixcblx0XCIuL2dyZWV0ZXJcIjogXCJncUFRXCIsXG5cdFwiLi9ncmVldGVyLmpzXCI6IFwiZ3FBUVwiLFxuXHRcIi4vaW5kZXhcIjogXCJ2R1lWXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcInZHWVZcIixcblx0XCIuL3RydW1wdGltZW1hY2hpbmVcIjogXCJpT2FRXCIsXG5cdFwiLi90cnVtcHRpbWVtYWNoaW5lLmpzXCI6IFwiaU9hUVwiXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIzbks0XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMgXlxcLi4qJFxuLy8gbW9kdWxlIGlkID0gM25LNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zb2xlLmxvZygnVGhlIHByaW50LmpzIG1vZHVsZSBoYXMgbG9hZGVkISBTZWUgdGhlIG5ldHdvcmsgdGFiIGluIGRldiB0b29scy4uLicpO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdCdXR0b24gQ2xpY2tlZDogSGVyZVxcJ3MgXCJzb21lIHRleHRcIiEnKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvZ3JlZXRlci5qcyIsImltcG9ydCB7aHRtbCwgcmVuZGVyfSBmcm9tICdsaXQtaHRtbCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcl90cnVtcHRpbWVtYWNoaW5lKCkge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy90cnVtcHRpbWVtYWNoaW5lJykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Ym94LWN1cnJlbnRwYXRoJykudGV4dENvbnRlbnQgPSdUcnVtcFRpbWVNYWNoaW5lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1zZWN0aW9ucyBsaVtkYXRhLXNlY3Rpb25pZD1cIm5hdi1zZWN0aW9uLXRydW1wdGltZW1hY2hpbmVcIl0nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc29sZS5sb2coJ2hpJyk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RydW1wdGltZW1hY2hpbmUuanMiXSwic291cmNlUm9vdCI6IiJ9