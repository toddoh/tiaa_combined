import {html, render} from 'lit-html';
import presidenttrump_style from '../styles/donaldtrump.css';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='TrumpFirstYear';
    document.querySelector('.navbox-static').classList.add('donaldtrump');
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-donaldtrump"]').remove();
    if (window.screen.width <= 980) {
        document.body.setAttribute('banana-type', 'mobile');
    }

    const hero_markup = () => html`
    <div class="presidenttrump-hero">
        <div class="presidenttrump-herotext">
            <p class="hero1 strike">Make America Great Again</p>
            <p class="hero1">So far, it's been chaos.</p>
            <div class="hero2">
                <p>To celebrate President Trump’s first year in the White House,</p>
                <p>we rediscovered what has happened in our nation last year.</p>
                <p class="presidenttrump-herotpdetails">More</p>
            </div>
        </div>
    </div>
    <div class="presidenttrump-analysis-data">
        <div class="analysis-list">
        </div>
    </div>
    <div class="presidenttrump-tpdetails">
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
        dataset_url = '//localhost:3000/dataset/donaldtrump_data.json';
    } else {
        dataset_url = '//thisisallabout.com/dataset/donaldtrump_data.json'
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        trump_data = module;
        
        const analysis_markup = () => html`
            ${trump_data.map((i) => html`
                <div class="analysis-item">
                    <div class="item-info">
                        <div class="item-theme">
                            <div class="item-bg" banana-imagesrc=""></div>
                            <p class="theme-header">${i.header}</p>
                            <p class="themes">${i.message}</p>
                        </div>
                        <div class="toparticle-month-container" banana-peakdata="${JSON.stringify(i.list)}" banana-peaks="${JSON.stringify(i.peaks)}" banana-months="${JSON.stringify(i.months)}">
                            ${i.toparticles.map((arti) => html`
                                ${arti.length > 0 ? html`
                                <div class="toparticle-month" banana-month="${arti[0].date_month}">
                                    <p>${arti[0].date_month}</p>
                                </div>
                                ` : ''}
                            `
                            )}
                        </div>
                    </div>

                    <div class="item-toparticle-container">
                        <div class="toparticle-content-container">
                            ${i.toparticles.map((arti) => html`
                                ${arti.length > 0 ? html`
                                <div class="toparticle-month" banana-month="${arti[0].date_month}">
                                    ${arti.map((a) => html`
                                        <div class="toparticle-object" banana-link="${a.url}" banana-articleid="${a._id}" banana-imagesrc="${a.image}">
                                            <div class="article-info">
                                                <p class="article-title">${a.title}</p>
                                                <p class="article-origin">${a.origin}</p>
                                            </div>
                                        </div>
                                    `
                                    )}
                                </div>
                                ` : ''}
                            `
                            )}
                        </div>
                    </div>

                    <div class="item-close-action">
                        <div class="icon"></div>
                    </div>
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

    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .analysis-list .analysis-item'), function(el, index, array) {
        el.querySelectorAll('.toparticle-month-container .toparticle-month')[0].classList.add('selected');
        el.querySelectorAll('.toparticle-content-container .toparticle-month')[0].classList.add('selected');
        
        var firstmonth = el.querySelectorAll('.toparticle-content-container .toparticle-month')[0];
        el.querySelector('.item-bg').style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url(' + firstmonth.querySelectorAll('.toparticle-object')[0].getAttribute('banana-imagesrc') + ')';
    });

    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .analysis-list .toparticle-content-container .toparticle-object'), function(el, index, array) {
        el.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url(' + el.getAttribute('banana-imagesrc') + ')';
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

    var ta_months = document.querySelectorAll('.toparticle-month-container .toparticle-month');
    for (var i=0; i < ta_months.length; i++) {
        ta_months[i].addEventListener('click', function (e) {
            var month = this.getAttribute('banana-month');
            var parent = getParents(this, '.analysis-item')[0];

            if (parent == null || parent == undefined) return;
            parent.querySelector('.toparticle-content-container .toparticle-month.selected').classList.remove('selected');
            parent.querySelector('.toparticle-month-container .toparticle-month.selected').classList.remove('selected');

            parent.querySelector('.toparticle-content-container .toparticle-month[banana-month="' + month + '"]').classList.add('selected');
            parent.querySelector('.toparticle-month-container .toparticle-month[banana-month="' + month + '"]').classList.add('selected');
        });
    }

    var ta_objs = document.querySelectorAll('.toparticle-content-container .toparticle-object');
    for (var i=0; i < ta_objs.length; i++) {
        ta_objs[i].addEventListener('click', function (e) {
            var url = this.getAttribute('banana-link');
            if (url == null || url == undefined || url == '') return;
            window.open(url, "_blank");
        });
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