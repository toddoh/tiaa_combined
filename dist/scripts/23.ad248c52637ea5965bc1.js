(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{qVof:function(e,t,a){},wlNY:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"init_render",function(){return init_render});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("AaG5"),_styles_theyear_base_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("qVof"),_styles_theyear_base_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_styles_theyear_base_css__WEBPACK_IMPORTED_MODULE_1__);function init_render(){window.screen.width<=980&&document.body.setAttribute("banana-type","mobile");Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)((()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
    <div class="theyear-hero">
        <div class="theyear-herotext">
            <p class="hero1 strike">#Jan2017toJan2018</p>
            <p class="hero1">It's been a giant mess.</p>
            <div class="hero2">
                <p>This month, to celebrate Trump's first year mark in the White House.</p>
                <p>we rediscovered what has happened in our nation during then.</p>
                <p class="theyear-herotpdetails">More</p>
            </div>
        </div>
    </div>
    <div class="theyear-analysis-data">
        <div class="analysis-list">
        </div>
    </div>
    <div class="theyear-tpdetails">
        <div class="tpdetails-reveal">
            <p>Technical Details</p>
        </div>
        <div class="tpdetails-text">
            <p>This content renders the clustering result of our processing system.</p>
            <p>We aggregated and processed stories from NPR and PBS NewsHour between January 20th, 2017 and January 15th, 2018 ET through Twitter. Based on the data, the system did run a full natural language processing and clustering to sort out key topics.</p>
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, our editorial team manually verifies the result, reformat theme keywords for bettery relevancy, and removes unnecessary cluster theme that contains PBS and/or NPR promotional keywords. Lastly, the "interpreter" unit creates a final result ready to be published.</p>
        </div>
        <div class="tpdetails-close-action">
            <div class="icon"></div>
        </div>
    </div>
    `)(),document.querySelector(".minion-contents")),render_data()}const check_mobile=()=>{return!!document.body.getAttribute("banana-type","mobile")},render_data=()=>{var trump_data=null,dataset_url;dataset_url="//thisisallabout.com/dataset/theyear/theyear_jan2018_data.json",document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(dataset_url).then(e=>e.text()).then(function(text){var module=eval(text);trump_data=module;const analysis_markup=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
            ${trump_data.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                <div class="analysis-item">
                    <div class="item-info">
                        <div class="item-theme">
                            <div class="item-bg" banana-imagesrc=""></div>
                            <p class="theme-header">${e.header}</p>
                            <p class="themes">${e.message}</p>
                        </div>
                        <div class="toparticle-month-container" banana-peakdata="${JSON.stringify(e.list)}" banana-peaks="${JSON.stringify(e.peaks)}" banana-months="${JSON.stringify(e.months)}">
                            ${e.toparticles.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                ${e.length>0?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                <div class="toparticle-month" banana-month="${e[0].date_month}">
                                    <p>${e[0].date_month}</p>
                                </div>
                                `:""}
                            `)}
                        </div>
                    </div>

                    <div class="item-toparticle-container">
                        <div class="toparticle-content-container">
                            ${e.toparticles.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                ${e.length>0?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                <div class="toparticle-month" banana-month="${e[0].date_month}">
                                    ${e.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                        <div class="toparticle-object" banana-link="${e.url}" banana-articleid="${e._id}" banana-imagesrc="${e.image}">
                                            <div class="article-info">
                                                <p class="article-title">${e.title}</p>
                                                <p class="article-origin">${e.origin}</p>
                                            </div>
                                        </div>
                                    `)}
                                </div>
                                `:""}
                            `)}
                        </div>
                    </div>

                    <div class="item-close-action">
                        <div class="icon"></div>
                    </div>
                </div>
            `)}
        `;Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(analysis_markup(),document.querySelector(".theyear-analysis-data .analysis-list")),postrender_data(),document.querySelector(".minion-dataload").setAttribute("status","")})},postrender_data=()=>{if(Array.prototype.forEach.call(document.querySelectorAll(".theyear-analysis-data .analysis-list .toparticle-month-container"),function(e,t,a){var s=JSON.parse(e.getAttribute("banana-peaks"));Array.prototype.forEach.call(e.querySelectorAll(".toparticle-month"),function(e,t,a){var r=e.getAttribute("banana-month"),i="";"2017-01"==r&&(i="Jan"),"2017-02"==r&&(i="Feb"),"2017-03"==r&&(i="Mar"),"2017-04"==r&&(i="Apr"),"2017-05"==r&&(i="May"),"2017-06"==r&&(i="Jun"),"2017-07"==r&&(i="Jul"),"2017-08"==r&&(i="Aug"),"2017-09"==r&&(i="Sep"),"2017-10"==r&&(i="Oct"),"2017-11"==r&&(i="Nov"),"2017-12"==r&&(i="Dec"),"2018-01"==r&&(i="Jan '18"),e.querySelector("p").innerHTML=i,s.includes(r)&&e.classList.add("peak")})}),Array.prototype.forEach.call(document.querySelectorAll(".theyear-analysis-data .analysis-list .analysis-item"),function(e,t,a){e.querySelectorAll(".toparticle-month-container .toparticle-month")[0].classList.add("selected"),e.querySelectorAll(".toparticle-content-container .toparticle-month")[0].classList.add("selected");var s=e.querySelectorAll(".toparticle-content-container .toparticle-month")[1];e.querySelector(".item-bg").style.backgroundImage="linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url("+s.querySelectorAll(".toparticle-object")[0].getAttribute("banana-imagesrc")+")"}),Array.prototype.forEach.call(document.querySelectorAll(".theyear-analysis-data .analysis-list .toparticle-content-container .toparticle-object"),function(e,t,a){e.style.backgroundImage="linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url("+e.getAttribute("banana-imagesrc")+")"}),check_mobile()){for(var e=document.querySelectorAll(".theyear-analysis-data .analysis-list .item-theme"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t,a=getParents(this,".analysis-item")[0];a.classList.contains("selected")?(a.classList.remove("selected"),(t=document.querySelector(".theyear-analysis-data .analysis-list")).classList.contains("highlighted")&&t.classList.remove("highlighted")):(a.classList.add("selected"),(t=document.querySelector(".theyear-analysis-data .analysis-list")).classList.contains("highlighted")||t.classList.add("highlighted"))});var a=document.querySelectorAll(".theyear-analysis-data .analysis-list .item-close-action");for(t=0;t<a.length;t++)a[t].addEventListener("click",function(e){var t,a=getParents(this,".analysis-item")[0];a.classList.contains("selected")?(a.classList.remove("selected"),(t=document.querySelector(".theyear-analysis-data .analysis-list")).classList.contains("highlighted")&&t.classList.remove("highlighted")):(a.classList.add("selected"),(t=document.querySelector(".theyear-analysis-data .analysis-list")).classList.contains("highlighted")||t.classList.add("highlighted"))})}var s=document.querySelectorAll(".toparticle-month-container .toparticle-month");for(t=0;t<s.length;t++)s[t].addEventListener("click",function(e){var t=this.getAttribute("banana-month"),a=getParents(this,".analysis-item")[0];null!=a&&void 0!=a&&(a.querySelector(".toparticle-content-container .toparticle-month.selected").classList.remove("selected"),a.querySelector(".toparticle-month-container .toparticle-month.selected").classList.remove("selected"),a.querySelector('.toparticle-content-container .toparticle-month[banana-month="'+t+'"]').classList.add("selected"),a.querySelector('.toparticle-month-container .toparticle-month[banana-month="'+t+'"]').classList.add("selected"))});var r=document.querySelectorAll(".toparticle-content-container .toparticle-object");for(t=0;t<r.length;t++)r[t].addEventListener("click",function(e){var t=this.getAttribute("banana-link");null!=t&&void 0!=t&&""!=t&&window.open(t,"_blank")});document.querySelector(".theyear-herotpdetails").addEventListener("click",function(e){document.querySelector(".theyear-tpdetails").classList.contains("revealed")||document.querySelector(".theyear-tpdetails").classList.add("revealed"),document.querySelector(".theyear-analysis-data").classList.contains("hidden")||document.querySelector(".theyear-analysis-data").classList.add("hidden")}),document.querySelector(".theyear-tpdetails .tpdetails-close-action").addEventListener("click",function(e){document.querySelector(".theyear-tpdetails").classList.contains("revealed")&&document.querySelector(".theyear-tpdetails").classList.remove("revealed"),document.querySelector(".theyear-analysis-data").classList.contains("hidden")&&document.querySelector(".theyear-analysis-data").classList.remove("hidden")})};var getClosest=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},getParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});for(var a=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&a.push(e):a.push(e);return a};Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),s=a.length>>>0;if(0===s)return!1;var r,i,n=0|t,l=Math.max(n>=0?n:s-Math.abs(n),0);for(;l<s;){if((r=a[l])===(i=e)||"number"==typeof r&&"number"==typeof i&&isNaN(r)&&isNaN(i))return!0;l++}return!1}})}}]);