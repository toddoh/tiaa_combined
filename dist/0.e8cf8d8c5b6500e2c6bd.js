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
    if (window.location.pathname == '/trumptimemachine') {
        document.querySelector('.navbox-currentpath').textContent = 'TrumpTimeMachine';
        document.querySelector('.navbox-sections li[data-sectionid="nav-section-trumptimemachine"]').remove();
    }

    return console.log('hi');
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMgXlxcLi4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ3JlZXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdHJ1bXB0aW1lbWFjaGluZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicmVuZGVyX3RydW1wdGltZW1hY2hpbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkFBLFFBQVFDLEdBQVIsQ0FBWSxxRUFBWjs7a0JBRWUsWUFBTTtBQUNuQkQsVUFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7OztRQ0RlQyx1QixHQUFBQSx1Qjs7QUFIaEI7O0FBR08sU0FBU0EsdUJBQVQsR0FBbUM7QUFDdEMsUUFBSUMsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsSUFBNEIsbUJBQWhDLEVBQXFEO0FBQ2pEQyxpQkFBU0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENDLFdBQTlDLEdBQTJELGtCQUEzRDtBQUNBRixpQkFBU0MsYUFBVCxDQUF1QixvRUFBdkIsRUFBNkZFLE1BQTdGO0FBQ0g7O0FBRUQsV0FBT1QsUUFBUUMsR0FBUixDQUFZLElBQVosQ0FBUDtBQUNILEMiLCJmaWxlIjoiMC5lOGNmOGQ4YzViNjUwMGUyYzZiZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLlwiOiBcInZHWVZcIixcblx0XCIuL1wiOiBcInZHWVZcIixcblx0XCIuL2dyZWV0ZXJcIjogXCJncUFRXCIsXG5cdFwiLi9ncmVldGVyLmpzXCI6IFwiZ3FBUVwiLFxuXHRcIi4vaW5kZXhcIjogXCJ2R1lWXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcInZHWVZcIixcblx0XCIuL3RvZGF5XCI6IFwiZ2YyQ1wiLFxuXHRcIi4vdG9kYXkuanNcIjogXCJnZjJDXCIsXG5cdFwiLi90cnVtcHRpbWVtYWNoaW5lXCI6IFwiaU9hUVwiLFxuXHRcIi4vdHJ1bXB0aW1lbWFjaGluZS5qc1wiOiBcImlPYVFcIlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiM25LNFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzIF5cXC4uKiRcbi8vIG1vZHVsZSBpZCA9IDNuSzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc29sZS5sb2coJ1RoZSBwcmludC5qcyBtb2R1bGUgaGFzIGxvYWRlZCEgU2VlIHRoZSBuZXR3b3JrIHRhYiBpbiBkZXYgdG9vbHMuLi4nKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnQnV0dG9uIENsaWNrZWQ6IEhlcmVcXCdzIFwic29tZSB0ZXh0XCIhJyk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2dyZWV0ZXIuanMiLCJpbXBvcnQge2h0bWwsIHJlbmRlcn0gZnJvbSAnbGl0LWh0bWwnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJfdHJ1bXB0aW1lbWFjaGluZSgpIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09ICcvdHJ1bXB0aW1lbWFjaGluZScpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJveC1jdXJyZW50cGF0aCcpLnRleHRDb250ZW50ID0nVHJ1bXBUaW1lTWFjaGluZSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZib3gtc2VjdGlvbnMgbGlbZGF0YS1zZWN0aW9uaWQ9XCJuYXYtc2VjdGlvbi10cnVtcHRpbWVtYWNoaW5lXCJdJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKCdoaScpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90cnVtcHRpbWVtYWNoaW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==