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


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render_today = render_today;

var _litHtml = __webpack_require__("v2F8");

function render_today() {
    document.querySelector('.navbox-currentpath').textContent = 'Today';
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-today"]').remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMgXlxcLi4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dyZWV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RydW1wdGltZW1hY2hpbmUuanMiXSwibmFtZXMiOlsicmVuZGVyX3RvZGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyX3RydW1wdGltZW1hY2hpbmUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7O1FDdkJnQkEsWSxHQUFBQSxZOztBQUhoQjs7QUFHTyxTQUFTQSxZQUFULEdBQXdCO0FBQzNCQyxhQUFTQyxhQUFULENBQXVCLHFCQUF2QixFQUE4Q0MsV0FBOUMsR0FBMkQsT0FBM0Q7QUFDQUYsYUFBU0MsYUFBVCxDQUF1Qix5REFBdkIsRUFBa0ZFLE1BQWxGO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ05EQyxRQUFRQyxHQUFSLENBQVkscUVBQVo7O2tCQUVlLFlBQU07QUFDbkJELFVBQVFDLEdBQVIsQ0FBWSxzQ0FBWjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7UUNEZUMsdUIsR0FBQUEsdUI7O0FBSGhCOztBQUdPLFNBQVNBLHVCQUFULEdBQW1DO0FBQ3RDTixhQUFTQyxhQUFULENBQXVCLHFCQUF2QixFQUE4Q0MsV0FBOUMsR0FBMkQsa0JBQTNEO0FBQ0FGLGFBQVNDLGFBQVQsQ0FBdUIsb0VBQXZCLEVBQTZGRSxNQUE3RjtBQUNILEMiLCJmaWxlIjoiMC4yY2VmNDNmN2RlN2Q5YjgxZDI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLlwiOiBcInZHWVZcIixcblx0XCIuL1wiOiBcInZHWVZcIixcblx0XCIuL2dyZWV0ZXJcIjogXCJncUFRXCIsXG5cdFwiLi9ncmVldGVyLmpzXCI6IFwiZ3FBUVwiLFxuXHRcIi4vaW5kZXhcIjogXCJ2R1lWXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcInZHWVZcIixcblx0XCIuL3RvZGF5XCI6IFwiZ2YyQ1wiLFxuXHRcIi4vdG9kYXkuanNcIjogXCJnZjJDXCIsXG5cdFwiLi90cnVtcHRpbWVtYWNoaW5lXCI6IFwiaU9hUVwiLFxuXHRcIi4vdHJ1bXB0aW1lbWFjaGluZS5qc1wiOiBcImlPYVFcIlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiM25LNFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzIF5cXC4uKiRcbi8vIG1vZHVsZSBpZCA9IDNuSzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdC1odG1sJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyX3RvZGF5KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtY3VycmVudHBhdGgnKS50ZXh0Q29udGVudCA9J1RvZGF5JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Ym94LXNlY3Rpb25zIGxpW2RhdGEtc2VjdGlvbmlkPVwibmF2LXNlY3Rpb24tdG9kYXlcIl0nKS5yZW1vdmUoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9kYXkuanMiLCJjb25zb2xlLmxvZygnVGhlIHByaW50LmpzIG1vZHVsZSBoYXMgbG9hZGVkISBTZWUgdGhlIG5ldHdvcmsgdGFiIGluIGRldiB0b29scy4uLicpO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdCdXR0b24gQ2xpY2tlZDogSGVyZVxcJ3MgXCJzb21lIHRleHRcIiEnKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvZ3JlZXRlci5qcyIsImltcG9ydCB7aHRtbCwgcmVuZGVyfSBmcm9tICdsaXQtaHRtbCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcl90cnVtcHRpbWVtYWNoaW5lKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtY3VycmVudHBhdGgnKS50ZXh0Q29udGVudCA9J1RydW1wVGltZU1hY2hpbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtc2VjdGlvbnMgbGlbZGF0YS1zZWN0aW9uaWQ9XCJuYXYtc2VjdGlvbi10cnVtcHRpbWVtYWNoaW5lXCJdJykucmVtb3ZlKCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RydW1wdGltZW1hY2hpbmUuanMiXSwic291cmNlUm9vdCI6IiJ9