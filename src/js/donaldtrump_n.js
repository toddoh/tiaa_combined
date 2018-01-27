import {html, render} from 'lit-html';
import presidenttrump_style from '../styles/donaldtrump.css';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='WhatTrumpSaid';
    document.querySelector('.navbox-static').classList.add('donaldtrump');
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-donaldtrump"]').remove();
    if (window.screen.width <= 980) {
        document.body.setAttribute('banana-type', 'mobile');
    }

    const hero_markup = () => html`
    <div class="presidenttrump-hero">
        <div class="presidenttrump-herotext">
            <p class="hero1">Tweet, tweet,</p>
            <p class="hero1">it's from our president.</p>
            <div class="hero2">
                <p>Our President Trump loves tweeting his opinions and it has a big role.</p>
                <p>That's why you should know what did he tweet since day one.</p>
                <p class="presidenttrump-herotpdetails">More</p>
            </div>
        </div>
    </div>
    <div class="presidenttrump-analysis-data">
        <div class="analysis-target">
        </div>
        <div class="analysis-list">
        </div>
    </div>
    <div class="presidenttrump-tpdetails">
        <div class="tpdetails-reveal">
            <p>Technical Details</p>
        </div>
        <div class="tpdetails-text">
            <p>This content renders the clustering result of our processing system.</p>
            <p>We aggregated and processed Twitter tweets of @realDonaldTrump between January 20th, 2017 and January 15th, 2018 ET through Twitter. Based on the data, the system did run a full natural language processing and clustering to sort out key topics.</p>
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, our editorial team manually verifies the result, reformat theme keywords for bettery relevancy, and removes unnecessary cluster theme that contains PBS and/or NPR promotional keywords. Lastly, the "interpreter" unit creates a final result ready to be published.</p>
        </div>
        <div class="tpdetails-close-action">
            <div class="icon"></div>
        </div>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    document.querySelector('.minion-timestamp .ts-date').innerHTML = 'Last updated on Jan 16, 2018 ET';
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
        dataset_url = '//localhost:3000/dataset/trumptweeted_data.json';
    } else {
        dataset_url = '//thisisallabout.com/dataset/trumptweeted_data.json'
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        trump_data = module;

        const analysis_month_markup = () => html`
            ${trump_data.map((i) => html`
                <div class="analysis-month-target" banana-month="${i[0].month}">
                    <p>${i[0].month}</p>
                </div>
            `
            )}
        `;

        render(analysis_month_markup(), document.querySelector('.presidenttrump-analysis-data .analysis-target'));
        
        const analysis_markup = () => html`
            ${trump_data.map((month) => html`
                <div class="analysis-group" banana-month="${month[0].month}">
                    ${month.map((item) => html`
                    <div class="analysis-month-item" banana-month="${item.month}">
                        <div class="item-theme">
                            ${item.theme.map((t) => html`
                                <p class="theme-header">${t}</p>
                            `
                            )}
                        </div>

                        <div class="item-tweets-container">
                        ${item.articles.map((twt) => html`
                            <p class="tweet-content">${twt}</p>
                        `
                        )}
                        </div>

                        <div class="item-close-action">
                            <div class="icon"></div>
                        </div>
                    </div>
                    `
                    )}
                </div>
            `
            )}
        `;

        render(analysis_markup(), document.querySelector('.presidenttrump-analysis-data .analysis-list'));
        postrender_data();
        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
}

const postrender_data = () => {
    document.querySelectorAll('.presidenttrump-analysis-data .analysis-month-target')[0].classList.add('selected');
    document.querySelector('.presidenttrump-analysis-data .analysis-group[banana-month="2017-01"]').classList.add('selected');
    
    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .analysis-month-target'), function(el, index, array) {
        var month_raw = el.getAttribute('banana-month');
        var converted = '';

        if (month_raw == '2017-01') converted = 'Jan \'17';
        if (month_raw == '2017-02') converted = 'Feb \'17';
        if (month_raw == '2017-03') converted = 'Mar \'17';
        if (month_raw == '2017-04') converted = 'Apr \'17';
        if (month_raw == '2017-05') converted = 'May \'17';
        if (month_raw == '2017-06') converted = 'Jun \'17';
        if (month_raw == '2017-07') converted = 'Jul \'17';
        if (month_raw == '2017-08') converted = 'Aug \'17';
        if (month_raw == '2017-09') converted = 'Sep \'17';
        if (month_raw == '2017-10') converted = 'Oct \'17';
        if (month_raw == '2017-11') converted = 'Nov \'17';
        if (month_raw == '2017-12') converted = 'Dec \'17';
        if (month_raw == '2018-01') converted = 'Jan \'18';
        el.querySelector('p').innerHTML = converted;
    });
    
    if (check_mobile()) {
        var mobile_ithm = document.querySelectorAll('.presidenttrump-analysis-data .analysis-list .item-theme');
        for (var i=0; i < mobile_ithm.length; i++) {
            mobile_ithm[i].addEventListener('click', function (e) {
                var parent = getParents(this, '.analysis-item')[0];
                if (!parent.classList.contains('selected')) {
                    parent.classList.add('selected');

                    var list = document.querySelector('.presidenttrump-analysis-data .analysis-list');
                    if (!list.classList.contains('highlighted')) {
                        list.classList.add('highlighted');
                    }
                } else {
                    parent.classList.remove('selected');

                    var list = document.querySelector('.presidenttrump-analysis-data .analysis-list');
                    if (list.classList.contains('highlighted')) {
                        list.classList.remove('highlighted');
                    }
                }
            });
        }

        var mobile_ithm_close = document.querySelectorAll('.presidenttrump-analysis-data .analysis-list .item-close-action');
        for (var i=0; i < mobile_ithm_close.length; i++) {
            mobile_ithm_close[i].addEventListener('click', function (e) {
                var parent = getParents(this, '.analysis-item')[0];
                if (!parent.classList.contains('selected')) {
                    parent.classList.add('selected');

                    var list = document.querySelector('.presidenttrump-analysis-data .analysis-list');
                    if (!list.classList.contains('highlighted')) {
                        list.classList.add('highlighted');
                    }
                } else {
                    parent.classList.remove('selected');

                    var list = document.querySelector('.presidenttrump-analysis-data .analysis-list');
                    if (list.classList.contains('highlighted')) {
                        list.classList.remove('highlighted');
                    }
                }
            });
        }
    }

    document.querySelector('.presidenttrump-herotpdetails').addEventListener('click', function (e) {
        if (!document.querySelector('.presidenttrump-tpdetails').classList.contains('revealed'))
            document.querySelector('.presidenttrump-tpdetails').classList.add('revealed');

        if (!document.querySelector('.presidenttrump-analysis-data').classList.contains('hidden'))
            document.querySelector('.presidenttrump-analysis-data').classList.add('hidden');
    });

    document.querySelector('.presidenttrump-tpdetails .tpdetails-close-action').addEventListener('click', function (e) {
        if (document.querySelector('.presidenttrump-tpdetails').classList.contains('revealed'))
            document.querySelector('.presidenttrump-tpdetails').classList.remove('revealed');

        if (document.querySelector('.presidenttrump-analysis-data').classList.contains('hidden'))
            document.querySelector('.presidenttrump-analysis-data').classList.remove('hidden');
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