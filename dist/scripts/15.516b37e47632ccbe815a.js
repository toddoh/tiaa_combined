(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8iIc":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"init_render",function(){return init_render});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("AaG5"),_styles_theweek_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("GUHz"),_styles_theweek_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_styles_theweek_css__WEBPACK_IMPORTED_MODULE_1__),social_likes_next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("/kDA"),social_likes_next__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(social_likes_next__WEBPACK_IMPORTED_MODULE_2__),social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("cdXw"),social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3__);function init_render(){document.querySelector('.minion-sections li[data-sectionid="nav-section-theweek"]').classList.add("current"),window.screen.width<=980&&document.body.setAttribute("banana-type","mobile");Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)((()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
    <div class="theweek-hero">
        <div class="theweek-herotext">
            <p class="hero1 dayinfo">#TheWeek #Jan15to20th</p>
            <p class="hero1 things"></p>
            <p class="theweek-herotpdetails">More</p>
        </div>
    </div>
    <div class="theweek-share" data-url="https://thisisallabout.com/theweek" data-title="TheWeek on THISISALLABOUT">
        <div data-service="facebook" title="TheWeek on THISISALLABOUT"></div>
        <div data-service="twitter" data-via="" data-related=""></div>
        <div data-service="plusone" title="TheWeek on THISISALLABOUT"></div>
        <div data-service="linkedin" title="TheWeek on THISISALLABOUT"></div>
        <div data-service="pinterest" title="TheWeek on THISISALLABOUT"></div>
        <div class="email" title="TheWeek on THISISALLABOUT">
            <div class="icon"></div>    
        </div>
    </div>
    <div class="theweek-analysis-data">
        <div class="analysis-list">
        </div>
    </div>
    <div class="theweek-copyrights">
        <p>Articles/Images copyrights CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, Financial Times. All images belong to the publishers and the rightful owner of images. We display images based on open metadata aggregation.</p>
    </div>
    <div class="theweek-tpdetails">
        <div class="tpdetails-reveal">
            <p>Technical Details</p>
        </div>
        <div class="tpdetails-text">
            <p>This content renders the clustering result of our processing system.</p>
            <p>We aggregated and processed stories from CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, and Financial Times from the past 48 hours. Based on the data, the system did run a full natural language processing and clustering to sort out key topics.</p>
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, our editorial team manually verifies the result, reformat theme keywords for bettery relevancy, and removes unnecessary cluster theme that contains publisher promotional keywords. Lastly, the "interpreter" unit creates a final result ready to be published.</p>
        </div>
        <div class="tpdetails-close-action">
            <div class="icon"></div>
        </div>
    </div>
    `)(),document.querySelector(".minion-contents")),social_likes_next__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelector(".theweek-share")),document.querySelector(".theweek-share .email").addEventListener("click",function(e){window.location.href="mailto:?body=Hey, check what happened this week: "+window.location.href}),render_data()}const check_mobile=()=>{return!!document.body.getAttribute("banana-type","mobile")},render_data=()=>{var trump_data=null,dataset_url;dataset_url="//thisisallabout.com/dataset/theweek/theweek_data.json",document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(dataset_url).then(e=>e.text()).then(function(text){var module=eval(text);trump_data=module;var content_length=" thing ";trump_data.length>1&&(content_length=" things "),document.querySelector(".theweek-hero .things").innerHTML=trump_data.length+content_length+"to know";const analysis_markup=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
            ${trump_data.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                <div class="analysis-item">
                    <div class="item-info">
                        <div class="item-bg" banana-imagesrc=""></div>
                        <div class="item-theme">
                            <p class="theme-header">${e.header}</p>
                            <p class="themes">${e.message}</p>
                        </div>
                    </div>

                    <div class="item-toparticle-container">
                        <div class="toparticle-content-container">
                            ${e.picked.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                    <div class="toparticle-object" banana-link="${e.url}" banana-articleid="${e._id}" banana-imagesrc="${e.image}" banana-month="${e.date_month}">
                                        <div class="article-info">
                                            <p class="article-title">${e.title}</p>
                                            <p class="article-origin">${e.origin}</p>
                                        </div>
                                    </div>
                            `)}
                        </div>
                    </div>

                    <div class="item-close-action">
                        <div class="icon"></div>
                    </div>
                </div>
            `)}
        `;Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(analysis_markup(),document.querySelector(".theweek-analysis-data .analysis-list")),postrender_data(),document.querySelector(".minion-dataload").setAttribute("status","")})},postrender_data=()=>{if(Array.prototype.forEach.call(document.querySelectorAll(".presidenttrump-analysis-data .analysis-list .toparticle-month-container"),function(e,t,a){var i=JSON.parse(e.getAttribute("banana-peaks"));Array.prototype.forEach.call(e.querySelectorAll(".toparticle-month"),function(e,t,a){var s=e.getAttribute("banana-month"),n="";"2017-01"==s&&(n="Jan"),"2017-02"==s&&(n="Feb"),"2017-03"==s&&(n="Mar"),"2017-04"==s&&(n="Apr"),"2017-05"==s&&(n="May"),"2017-06"==s&&(n="Jun"),"2017-07"==s&&(n="Jul"),"2017-08"==s&&(n="Aug"),"2017-09"==s&&(n="Sep"),"2017-10"==s&&(n="Oct"),"2017-11"==s&&(n="Nov"),"2017-12"==s&&(n="Dec"),"2018-01"==s&&(n="Jan '18"),e.querySelector("p").innerHTML=n,i.includes(s)&&e.classList.add("peak")})}),Array.prototype.forEach.call(document.querySelectorAll(".theweek-analysis-data .analysis-list .analysis-item"),function(e,t,a){var i=e.querySelectorAll(".toparticle-content-container .toparticle-object")[0];e.querySelector(".item-bg").style.backgroundImage="linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url("+i.getAttribute("banana-imagesrc")+")"}),Array.prototype.forEach.call(document.querySelectorAll(".theweek-analysis-data .analysis-list .toparticle-content-container .toparticle-object"),function(e,t,a){}),check_mobile()){for(var e=document.querySelectorAll(".theweek-analysis-data .analysis-list .item-theme"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t,a=getParents(this,".analysis-item")[0];a.classList.contains("selected")?(a.classList.remove("selected"),(t=document.querySelector(".theweek-analysis-data .analysis-list")).classList.contains("highlighted")&&t.classList.remove("highlighted")):(a.classList.add("selected"),(t=document.querySelector(".theweek-analysis-data .analysis-list")).classList.contains("highlighted")||t.classList.add("highlighted"))});var a=document.querySelectorAll(".theweek-analysis-data .analysis-list .item-close-action");for(t=0;t<a.length;t++)a[t].addEventListener("click",function(e){var t,a=getParents(this,".analysis-item")[0];a.classList.contains("selected")?(a.classList.remove("selected"),(t=document.querySelector(".theweek-analysis-data .analysis-list")).classList.contains("highlighted")&&t.classList.remove("highlighted")):(a.classList.add("selected"),(t=document.querySelector(".theweek-analysis-data .analysis-list")).classList.contains("highlighted")||t.classList.add("highlighted"))})}var i=document.querySelectorAll(".toparticle-month-container .toparticle-month");for(t=0;t<i.length;t++)i[t].addEventListener("click",function(e){var t=this.getAttribute("banana-month"),a=getParents(this,".analysis-item")[0];null!=a&&void 0!=a&&(a.querySelector(".toparticle-content-container .toparticle-month.selected").classList.remove("selected"),a.querySelector(".toparticle-month-container .toparticle-month.selected").classList.remove("selected"),a.querySelector('.toparticle-content-container .toparticle-month[banana-month="'+t+'"]').classList.add("selected"),a.querySelector('.toparticle-month-container .toparticle-month[banana-month="'+t+'"]').classList.add("selected"))});var s=document.querySelectorAll(".toparticle-content-container .toparticle-object");for(t=0;t<s.length;t++)s[t].addEventListener("click",function(e){var t=this.getAttribute("banana-link");null!=t&&void 0!=t&&""!=t&&window.open(t,"_blank")});document.querySelector(".theweek-herotpdetails").addEventListener("click",function(e){document.querySelector(".theweek-tpdetails").classList.contains("opened")||document.querySelector(".theweek-tpdetails").classList.add("opened"),document.querySelector(".theweek-analysis-data").classList.contains("hidden")||document.querySelector(".theweek-analysis-data").classList.add("hidden")}),document.querySelector(".theweek-tpdetails .tpdetails-close-action").addEventListener("click",function(e){document.querySelector(".theweek-tpdetails").classList.contains("opened")&&document.querySelector(".theweek-tpdetails").classList.remove("opened"),document.querySelector(".theweek-analysis-data").classList.contains("hidden")&&document.querySelector(".theweek-analysis-data").classList.remove("hidden")})};var getClosest=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},getParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});for(var a=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&a.push(e):a.push(e);return a};Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),i=a.length>>>0;if(0===i)return!1;var s,n,l=0|t,o=Math.max(l>=0?l:i-Math.abs(l),0);for(;o<i;){if((s=a[o])===(n=e)||"number"==typeof s&&"number"==typeof n&&isNaN(s)&&isNaN(n))return!0;o++}return!1}})},GUHz:function(e,t,a){}}]);