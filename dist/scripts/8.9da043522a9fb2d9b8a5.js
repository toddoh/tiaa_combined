(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{PIaM:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"process",function(){return process});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("AaG5"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("LvDl"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);function process(dataset_url){fetch(dataset_url).then(e=>e.text()).then(function(text){var module=eval(text),dataset_d=module,d_content=[];lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(dataset_d,function(e){lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(e.data,function(e){var _={};_.header=e.header,e.msg&&(_.msg=e.msg),d_content.push(_),console.log(_)})}),document.querySelector(".editorial-editor-viewer textarea").value=JSON.stringify(d_content),document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),document.querySelector(".editorial-editor-viewer").classList.add("opened"),Array.prototype.forEach.call(document.querySelectorAll(".editorial-editor-datatype .datatype-action-list div"),function(e,_,t){e.classList.remove("selected")})})}},YuTi:function(e,_){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);