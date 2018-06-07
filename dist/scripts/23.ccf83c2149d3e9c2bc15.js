(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/wid":function(t,e,a){"use strict";a.r(e),a.d(e,"init_render",function(){return i});var o=a("AaG5");a("1Ue7");function i(){const t=(t,e)=>{e||(e=window.location.href),t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null==a?null:a[1]};if(localStorage.getItem("tiaa_stuart_edt_ac_t")){var e;e="//thisisallabout.com:5020/members";var i={"x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(e,{method:"GET",headers:i}).then(t=>t.json()).then(function(e){if(e.username){const n=[{id:"nav-editorial-track",name:"Tracker",path:"editorialfloor/track"},{id:"nav-editorial-datasetextract",name:"Dataset Extractor",path:"editorialfloor/datasetextract"},{id:"nav-editorial-monthlycluster",name:"MonthlyCluster Editor",path:"editorialfloor/monthlycluster"}],r=()=>o["a"]`
                <div class="minion-stuart-head">
                    <div class="stuart-sections-reveal">
                        <p>Editorial</p>
                        <div class="icon"></div>
                    </div>
                </div>
                <div class="minion-stuartbox">
                    <div class="stuart-sections-reveal">
                        <p>Editorial</p>
                        <div class="icon"></div>
                    </div>
                    <ul class="stuart-sections-list">
                        ${n.map(t=>o["a"]`
                            <li data-sectionid="${t.id}"><a href="/${t.path}">${t.name}</a></li>
                        `)}
                    </ul>

                    <p class="stuart-session-user fetched" banana-id="${e.userId}">${e.username}</p>
                    <ul class="stuart-usersession-action">
                        <li class="stuart-action-logout">Logout</li>
                    </ul>
                </div>
                `;var i=document.createElement("div");i.setAttribute("class","minion-editorial-header"),document.querySelector(".minion-root").appendChild(i),Object(o.b)(r(),document.querySelector(".minion-editorial-header")),$(".stuart-sections-reveal").on("click",function(t){document.querySelector(".minion-stuartbox").classList.contains("opened")?document.querySelector(".minion-stuartbox").classList.remove("opened"):document.querySelector(".minion-stuartbox").classList.add("opened")}),$(".minion-editorial-header .stuart-action-logout").on("click",function(t){confirm("Are you sure you want to signout from editorial console?")&&(localStorage.removeItem("tiaa_stuart_edt_ac_t"),window.location.href=window.location.protocol+"//"+window.location.host+"/editorialfloor")}),""!==t("type")&&null!==t("type")?a("ARze")("./"+t("type")).then(t=>{t.init_render()}):Promise.all([a.e(0),a.e(1),a.e(5),a.e(7)]).then(a.bind(null,"fXJO")).then(t=>{t.init_render()})}else alert("Unable to verify editorial auth credentials"),localStorage.removeItem("tiaa_stuart_edt_ac_t"),a.e(27).then(a.bind(null,"+gsa")).then(t=>{t.init_render()})}).catch(t=>alert("Unable to verify editorial auth credentials. ERR_MSG_CODE: "+t))}else a.e(27).then(a.bind(null,"+gsa")).then(t=>{t.init_render()})}},"1Ue7":function(t,e,a){},ARze:function(t,e,a){var o={"./auth":["+gsa",27],"./auth.js":["+gsa",27],"./datasetextract":["GVee",11],"./datasetextract.js":["GVee",11],"./datasetextract_wts":["PIaM",1,8],"./datasetextract_wts.js":["PIaM",1,8],"./monthlycluster":["OsU7",0,10],"./monthlycluster.js":["OsU7",0,10],"./theyearframe":["0Lbv",0,9],"./theyearframe.js":["0Lbv",0,9],"./track":["fXJO",0,1,5,7],"./track.js":["fXJO",0,1,5,7]};function i(t){var e=o[t];return e?Promise.all(e.slice(1).map(a.e)).then(function(){var t=e[0];return a(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}i.keys=function(){return Object.keys(o)},i.id="ARze",t.exports=i}}]);