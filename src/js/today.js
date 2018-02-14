import {html, render} from 'lit-html';
import today_style from '../styles/today.css';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='Today';
    document.querySelector('.navbox-static').classList.add('today');
    document.querySelector('.minion-sections li[data-sectionid="nav-section-today"]').classList.add('current');
    if (window.screen.width <= 980) {
        document.body.setAttribute('banana-type', 'mobile');
    }

    const today_hero_markup = () => html`
    <div class="today-hero">
        <div class="today-herotext">
            <p class="hero1 dayinfo">Today</p>
            <p class="hero1 things">Things to know</p>
            <div class="hero2">
                <p>Here's a quick recap of what's happening now, updated every hour.</p>
            </div>
            <p class="today-herotpdetails">More</p>
        </div>
    </div>
    <div class="today-analysis-data">
        <div class="analysis-list">
        </div>
    </div>
    <div class="today-copyrights">
        <p>Articles/Images copyrights CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, Financial Times. All images belong to the publishers and the rightful owner of images. We display images based on open metadata aggregation.</p>
    </div>
    <div class="today-tpdetails">
        <div class="tpdetails-reveal">
            <p>Technical Details</p>
        </div>
        <div class="tpdetails-text">
            <p>This content renders clustering result created automatically by our processing system. We verify that the result is completely untouched.</p>
            <p>We aggregated and processed stories from CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, and Financial Times from the past 24 hours. Based on the data, the system did run a full natural language processing and clustering to sort out key topics.</p>
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, the "interpreter" unit creates a final result ready to be published. </p>
        </div>
        <div class="tpdetails-close-action">
            <div class="icon"></div>
        </div>
    </div>
    `;

    render(today_hero_markup(), document.querySelector('.minion-contents'));
    render_data();
}


const check_mobile = () => {
    var status = false;
    document.body.getAttribute('banana-type', 'mobile') ? status = true : status = false;
    return status;
}

const render_data = () => {
    var trump_data = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        dataset_url = '//localhost:3000/dataset/today/today_data.json';
    } else {
        dataset_url = '//thisisallabout.com/dataset/today/today_data.json'
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        trump_data = module;
        
        var content_length = ' thing ';
        if (trump_data.length > 1) {
            content_length = ' things ';
        }
        document.querySelector('.today-hero .things').innerHTML = trump_data.length + content_length + 'happening now';

        var contentts = trump_data[0].timestamp;
        var dateTime = contentts.split(" ");
        var date = dateTime[0].split("-");
        var yyyy = date[0];
        var mm = date[1]-1;
        var dd = date[2];

        var time = dateTime[1].split(":");
        var h = time[0];
        var m = time[1];
        var s = parseInt(time[2]); //get rid of that 00.0;
        var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

        document.querySelector('.minion-timestamp .ts-date').innerHTML = 'Last updated on ' + m_names[mm] + ' ' + dd + ' ' + h + ':' + m + ', ' + yyyy + ' ET';
        document.querySelector('.today-hero .dayinfo').innerHTML = m_names[mm] + ' ' + dd + ', Today';
        const analysis_markup = () => html`
            ${trump_data.map((i) => html`
                <div class="analysis-item">
                    <div class="item-wrapper">
                        <div class="item-info">
                            <div class="item-theme">
                                <div class="themes">
                                ${i.theme.map((t) => html`
                                    <p class="theme-header">${t}</p>
                                `
                                )}
                                </div>
                            </div>
                        </div>

                        <div class="item-toparticle-container">
                            <div class="toparticle-content-container">
                                ${i.toparticles.map((arti) => html`
                                    ${arti.length > 0 ? html`
                                        ${arti.map((a) => html`
                                            <div class="toparticle-object" banana-link="${a.url}" banana-articleid="${a._id}" banana-imagesrc="${a.image}">
                                                <div class="article-info">
                                                    <p class="article-title">${a.title}</p>
                                                    <p class="article-origin">${a.origin}</p>
                                                </div>
                                            </div>
                                        `
                                        )}
                                    ` : ''}
                                `
                                )}
                            </div>
                        </div>
                        <div class="item-reveal-action">
                            <div class="icon"></div>
                            <p>More</p>
                        </div>
                    </div>
                    
                    <div class="item-close-action">
                        <div class="icon"></div>
                    </div>
                </div>
            `
            )}
        `;

        render(analysis_markup(), document.querySelector('.today-analysis-data .analysis-list'));
        postrender_data();
        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
}

const postrender_data = () => {
    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .analysis-list .toparticle-month-container'), function(pel, index, array) {
        var peak_data = JSON.parse(pel.getAttribute('banana-peaks'));
        
        Array.prototype.forEach.call(pel.querySelectorAll('.toparticle-month'), function(el, index, array) {
            var month_raw = el.getAttribute('banana-month');
            var converted = '';
    
            if (month_raw == '2017-01') converted = 'Jan';
            if (month_raw == '2017-02') converted = 'Feb';
            if (month_raw == '2017-03') converted = 'Mar';
            if (month_raw == '2017-04') converted = 'Apr';
            if (month_raw == '2017-05') converted = 'May';
            if (month_raw == '2017-06') converted = 'Jun';
            if (month_raw == '2017-07') converted = 'Jul';
            if (month_raw == '2017-08') converted = 'Aug';
            if (month_raw == '2017-09') converted = 'Sep';
            if (month_raw == '2017-10') converted = 'Oct';
            if (month_raw == '2017-11') converted = 'Nov';
            if (month_raw == '2017-12') converted = 'Dec';
            if (month_raw == '2018-01') converted = 'Jan \'18';
            el.querySelector('p').innerHTML = converted;

            var peak_match = peak_data.includes(month_raw);
            if (peak_match) el.classList.add('peak');
        });
    });

    Array.prototype.forEach.call(document.querySelectorAll('.today-analysis-data .analysis-list .toparticle-content-container .toparticle-object'), function(el, index, array) {
        //el.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url(' + //el.getAttribute('banana-imagesrc') + ')';
    });

    var item_toggle = document.querySelectorAll('.today-analysis-data .analysis-item .item-reveal-action');
    for (var i=0; i < item_toggle.length; i++) {
        item_toggle[i].addEventListener('click', function (e) {
            var parent = getParents(this, '.analysis-item')[0];
            if (!parent.classList.contains('selected')) {
                parent.classList.add('selected');

                var list = document.querySelector('.today-analysis-data .analysis-list');
                if (!list.classList.contains('selected')) {
                    list.classList.add('selected');
                }
            }
        });
    }

    var item_close = document.querySelectorAll('.today-analysis-data .analysis-item .item-close-action');
    for (var i=0; i < item_close.length; i++) {
        item_close[i].addEventListener('click', function (e) {
            var parent = getParents(this, '.analysis-item')[0];
            if (parent.classList.contains('selected')) {
                parent.classList.remove('selected');

                var list = document.querySelector('.today-analysis-data .analysis-list');
                if (list.classList.contains('selected')) {
                    list.classList.remove('selected');
                }
            }
        });
    }
    
    if (check_mobile()) {
        var mobile_ithm = document.querySelectorAll('.today-analysis-data .analysis-list .item-info');
        for (var i=0; i < mobile_ithm.length; i++) {
            mobile_ithm[i].addEventListener('click', function (e) {
                var parent = getParents(this, '.analysis-item')[0];
                if (!parent.classList.contains('selected')) {
                    parent.classList.add('selected');

                    var list = document.querySelector('.today-analysis-data .analysis-list');
                    if (!list.classList.contains('selected')) {
                        list.classList.add('selected');
                    }
                }
            });
        }
    }

    var ta_objs = document.querySelectorAll('.toparticle-content-container .toparticle-object');
    for (var i=0; i < ta_objs.length; i++) {
        ta_objs[i].addEventListener('click', function (e) {
            var url = this.getAttribute('banana-link');
            if (url == null || url == undefined || url == '') return;
            window.open(url, "_blank");
        });
    }

    document.querySelector('.today-herotpdetails').addEventListener('click', function (e) {
        if (!document.querySelector('.today-tpdetails').classList.contains('revealed'))
            document.querySelector('.today-tpdetails').classList.add('revealed');

        if (!document.querySelector('.today-analysis-data').classList.contains('hidden'))
            document.querySelector('.today-analysis-data').classList.add('hidden');
    });

    document.querySelector('.today-tpdetails .tpdetails-close-action').addEventListener('click', function (e) {
        if (document.querySelector('.today-tpdetails').classList.contains('revealed'))
            document.querySelector('.today-tpdetails').classList.remove('revealed');

        if (document.querySelector('.today-analysis-data').classList.contains('hidden'))
            document.querySelector('.today-analysis-data').classList.remove('hidden');
    });
}

var getClosest = function ( elem, selector ) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }

    return null;
};

var getParents = function ( elem, selector ) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Setup parents array
    var parents = [];

    // Get matching parent elements
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

        // Add matching parents to array
        if ( selector ) {
            if ( elem.matches( selector ) ) {
                parents.push( elem );
            }
        } else {
            parents.push( elem );
        }

    }

    return parents;

};

if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(searchElement, fromIndex) {
  
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
  
        // 1. Let O be ? ToObject(this value).
        var o = Object(this);
  
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;
  
        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }
  
        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;
  
        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  
        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }
  
        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(searchElement, elementK) is true, return true.
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          // c. Increase k by 1. 
          k++;
        }
  
        // 8. Return false
        return false;
      }
    });
}