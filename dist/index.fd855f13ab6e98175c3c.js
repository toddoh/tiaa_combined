webpackJsonp([2],{rqLN:function(n,e){},vGYV:function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var a=o(['\n    <div class="minion-root">\n        <div class="top-navbox">\n            <div class="navbox-static">\n                <div class="navbox-logo"></div>\n                <p class="navbox-currentpath">Today</p>\n                <div class="navbox-reveal">\n                    <div class="icon"></div>\n                </div>\n            </div>\n            <div class="navbox-sections">\n                <p class="sections-desc">More on THISISALLABOUT:</p>\n                <ul>\n                    ','\n                </ul>\n            </div>\n        </div>\n        <div class="minion-timestamp">\n            <div class="content-ts">\n                <span class="ts-date">...</span>\n            </div>\n        </div>\n        <div class="minion-dataload"></div>\n        <div class="minion-contents">\n        </div>\n    </div>\n    '],['\n    <div class="minion-root">\n        <div class="top-navbox">\n            <div class="navbox-static">\n                <div class="navbox-logo"></div>\n                <p class="navbox-currentpath">Today</p>\n                <div class="navbox-reveal">\n                    <div class="icon"></div>\n                </div>\n            </div>\n            <div class="navbox-sections">\n                <p class="sections-desc">More on THISISALLABOUT:</p>\n                <ul>\n                    ','\n                </ul>\n            </div>\n        </div>\n        <div class="minion-timestamp">\n            <div class="content-ts">\n                <span class="ts-date">...</span>\n            </div>\n        </div>\n        <div class="minion-dataload"></div>\n        <div class="minion-contents">\n        </div>\n    </div>\n    ']),s=o(['\n                        <li data-sectionid="','"><a href="/','">',"</a></li>\n                    "],['\n                        <li data-sectionid="','"><a href="/','">',"</a></li>\n                    "]),i=(function(n){n&&n.__esModule}(t("rqLN")),t("v2F8"));!function(){var n=[{id:"nav-section-today",name:"Today",path:""},{id:"nav-section-thisweek",name:"ThisWeek",path:"thisweek"},{id:"nav-section-donaldtrump",name:"TrumpFirstYear",path:"donaldtrump"},{id:"nav-section-eastasia",name:"EastAsia",path:"eastasia"}];(0,i.render)((0,i.html)(a,n.map(function(n){return(0,i.html)(s,n.id,n.path,n.name)})),document.body),window.screen.width<=980&&document.body.setAttribute("banana-type","mobile")}();window.location.pathname;var c=window.location.pathname.split("/")[1];""!==c?(document.querySelector(".minion-dataload").setAttribute("status","dl_e_1"),new Promise(function(n){t.e(0).then(function(e){n(t("GXJa")("./"+c))}.bind(null,t)).catch(t.oe)}).then(function(n){n.init_render(),document.querySelector(".minion-dataload").setAttribute("status","")})):new Promise(function(n){t.e(1).then(function(e){n(t("gf2C"))}.bind(null,t)).catch(t.oe)}).then(function(n){n.init_render(),document.querySelector(".minion-dataload").setAttribute("status","")});document.body.getAttribute("banana-type","mobile")?document.querySelector(".top-navbox").addEventListener("click",function(n){document.querySelector(".top-navbox").classList.contains("visible")?(document.querySelector(".top-navbox").classList.contains("visible")&&document.querySelector(".top-navbox").classList.remove("visible"),document.querySelector(".navbox-currentpath").classList.contains("long")&&document.querySelector(".navbox-currentpath").classList.remove("long")):(document.querySelector(".top-navbox").classList.add("visible"),document.querySelector(".navbox-currentpath").offsetWidth>=165?document.querySelector(".navbox-currentpath").classList.add("long"):document.querySelector(".navbox-currentpath").classList.contains("long")||document.querySelector(".navbox-currentpath").classList.remove("long"))}):(document.querySelector(".top-navbox").addEventListener("mouseenter",function(n){document.querySelector(".top-navbox").classList.contains("visible")||document.querySelector(".top-navbox").classList.add("visible"),document.querySelector(".navbox-currentpath").offsetWidth>=165?document.querySelector(".navbox-currentpath").classList.add("long"):document.querySelector(".navbox-currentpath").classList.contains("long")||document.querySelector(".navbox-currentpath").classList.remove("long")}),document.querySelector(".top-navbox").addEventListener("mouseleave",function(n){document.querySelector(".top-navbox").classList.contains("visible")&&document.querySelector(".top-navbox").classList.remove("visible"),document.querySelector(".navbox-currentpath").classList.contains("long")&&document.querySelector(".navbox-currentpath").classList.remove("long")}))}},["vGYV"]);