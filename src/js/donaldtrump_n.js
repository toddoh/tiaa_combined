import {html, render} from 'lit-html';
import presidenttrump_style from '../styles/donaldtrump.css';
import moment from 'moment';
import _ from 'lodash';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='WhatTrumpSaid';
    document.querySelector('.navbox-static').classList.add('whattrumpsaid');
    document.body.classList.add('whattrumpsaid');
    //document.querySelector('.navbox-sections li[data-sectionid="nav-section-whattrumpsaid"]').remove();
    if (window.screen.width <= 980) {
        document.body.setAttribute('banana-type', 'mobile');
    }

    const hero_markup = () => html`
    <div class="presidenttrump-analysis-data-dynamicbg">
    
    </div>
    <div class="presidenttrump-analysis-data">

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
    document.querySelector('.minion-timestamp .ts-date').innerHTML = 'Last updated on Feb 5, 2018 ET';

    var month_index_data = [
        {
            "year": "2017",
            "months": ["2017-01", "2017-02", "2017-03", "2017-04", "2017-05", "2017-06", "2017-07", "2017-08", "2017-09", "2017-10", "2017-11", "2017-12"],
            "months_string": ["jan2017", "feb2017", "mar2017", "apr2017", "may2017", "jun2017", "jul2017", "aug2017", "sep2017", "oct2017", "nov2017", "dec2017"]
        }, 
        {
            "year": "2018",
            "months": ["2018-01"],
            "months_string": ["jan2018"]
        }
    ];

    const content_index_markup = () => html`
    ${month_index_data.map((ind) => html`
    <div class="year-group">
        <p>${ind.year}</p>
        <ul>
        ${ind.months.map((mo, i) => html`
            <li banana-month="${mo}" banana-monthstr="${ind.months_string[i]}">${mo}</li>
        `
        )}
        </ul>
    </div>
    `
    )}
    `;

    var indexdiv = document.querySelector('.minion-content-index .content-indexes');
    while (indexdiv.firstChild) {
        indexdiv.removeChild(indexdiv.firstChild);
    }
    render(content_index_markup(), document.querySelector('.minion-content-index .content-indexes'));
    Array.prototype.forEach.call(document.querySelectorAll('.minion-content-index .content-indexes li'), function(el, index, array) {
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
        el.innerHTML = converted;
    });

    const getpathparam = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    }
    
    if (getpathparam('type') !== '' && getpathparam('type') !== null) {
        var parammonth_raw = getpathparam('type');
        var param_converted = '2017-01';

        if (parammonth_raw == 'jan2017') param_converted = '2017-01';
        if (parammonth_raw == 'feb2017') param_converted = '2017-02';
        if (parammonth_raw == 'mar2017') param_converted = '2017-03';
        if (parammonth_raw == 'apr2017') param_converted = '2017-04';
        if (parammonth_raw == 'may2017') param_converted = '2017-05';
        if (parammonth_raw == 'jun2017') param_converted = '2017-06';
        if (parammonth_raw == 'jul2017') param_converted = '2017-07';
        if (parammonth_raw == 'aug2017') param_converted = '2017-08';
        if (parammonth_raw == 'sep2017') param_converted = '2017-09';
        if (parammonth_raw == 'oct2017') param_converted = '2017-10';
        if (parammonth_raw == 'nov2017') param_converted = '2017-11';
        if (parammonth_raw == 'dec2017') param_converted = '2017-12';
        if (parammonth_raw == 'jan2018') param_converted = '2018-01';
        
        render_data(param_converted);
    } else {
        render_data('2017-01');
    }
}

const check_mobile = () => {
    var status = false;
    document.body.getAttribute('banana-type', 'mobile') ? status = true : status = false;
    return status;
}

const render_data = (month) => {
    var trump_data = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        dataset_url = '//localhost:3000/dataset/trumptweeted/' + month + '.json';
    } else {
        dataset_url = '//thisisallabout.com/dataset/trumptweeted/' + month + '.json';
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        trump_data = module;

        Array.prototype.forEach.call(document.querySelectorAll('.minion-content-index .content-indexes li'), function(el, index, array) {
            var month_raw = el.getAttribute('banana-month');
            if (month_raw == month) {
                el.classList.add('current');
            } else {
                el.classList.remove('current');
            }
        });

        var bgdiv = document.querySelector('.presidenttrump-analysis-data-dynamicbg');
        var datadiv = document.querySelector('.presidenttrump-analysis-data');
        bgdiv.style.height = window.innerHeight + 'px';
        datadiv.style.height = window.innerHeight + 'px';
        while (bgdiv.firstChild) {
            bgdiv.removeChild(bgdiv.firstChild);
        }

        while (datadiv.firstChild) {
            datadiv.removeChild(datadiv.firstChild);
        }

        const base_markup = () => html`
        <div class="analysis-hero">
            <div class="analysis-herotext">
                <p class="hero1">Reading Trump's moves</p>
                <p class="hero1">through his tweets /${trump_data[0].month_string}</p>
                <div class="hero2">
                    <p>We all know that President Trump loves posting on Twitter.</p>
                    <p>And that means you can see through his fanciful game by tweets.</p>
                    <p>THISISALLABOUT did an analysis of his tweets since day one.</p>
                    <p class="analysis-herotpdetails">More</p>
                </div>
            </div>
        </div>
        <div class="analysis-group" banana-month="${trump_data[0].month}">
            <div class="analysis-list">
            ${trump_data[0].data.map((item) => html`
                <div class="analysis-item" banana-id="${item.id}">
                    <div class="item-title">
                        <p class="title-text">${item.header}</p>
                        ${item.msg ? html`
                        <p class="msg-text">${item.msg}</p>
                        ` : ''}
                    </div>

                    ${item.picked ? html`
                    <div class="item-pickedtweets">
                        ${item.picked.map((pkt) => html`
                            <p class="title-text">${pkt.title}</p>
                        `
                        )}
                    </div>
                    ` : ''}

                    <div class="item-revealtweets-action">
                        <p>Show all tweets in this move</p>
                    </div>
                    <div class="item-tweets">
                    ${item.articles.map((tweets) => html`
                        <div class="tweet-item">
                            <p class="text">${tweets.title}</p>
                            <p class="ts" banana-ts="${tweets.ts}"></p>
                        </div>
                    `
                    )}
                    </div>
                </div>
            `
            )}
            </div>
        </div>
        <div class="analysis-eom" banana-month="${trump_data[0].nextmonth}">
            <div class="analysis-eomtxt">
                <p class="title-text">Next:</p>
                <p class="title-text">${trump_data[0].nextmonth_string}</p>
            </div>
        </div>
        `;
        
        document.querySelector('.presidenttrump-analysis-data-dynamicbg').style.backgroundImage = '';
        render(base_markup(), document.querySelector('.presidenttrump-analysis-data'));

        const base_dynamicbg_markup = () => html`
        <div class="dynamicbg-group" banana-month="hero">
            <div class="dynamicbg-item" banana-id="hero">
                <div class="image" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('https://upload.wikimedia.org/wikipedia/commons/2/28/President_Donald_J._Trump’s_Visit_to_Springfield%2C_Missouri.jpg')"></div>
            </div>
        </div>
        <div class="dynamicbg-group" banana-month="${trump_data[0].month}">
        ${trump_data[0].data.map((item) => html`
            <div class="dynamicbg-item" banana-id="${item.id}">
            ${item.image ? html`
                <div class="image" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('${item.image}')"></div>
            ` : ''}
            </div>
        `
        )}
        </div>
        <div class="dynamicbg-group" banana-month="eom">
            <div class="dynamicbg-item" banana-id="eom">
                <div class="graphic">
                    <div class="graphic-box">
                    ${trump_data[0].nextmonth_preview.map((item) => html`
                        <p>${item},</p>
                    `
                    )}
                        <p>AND MORE</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        render(base_dynamicbg_markup(), document.querySelector('.presidenttrump-analysis-data-dynamicbg'));
        document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="hero"]').classList.add('current');
        attach_events();

        if (trump_data[0].dynamicbg_list.length > 0) {
            _.filter(trump_data[0].dynamicbg_list, function (dbg) {
                import('./donaldtrump_dynamic').then(module => {
                    module.dynamicbg_render_data(month, dbg);
                });
            });
        }

        document.querySelector('.presidenttrump-analysis-data').addEventListener('scroll', function (e) {
            if (this.scrollTop >= 150) {
                document.querySelector('.top-navbox').classList.add('scroll_hidden');
                document.querySelector('.minion-timestamp').classList.add('scroll_hidden');
                document.querySelector('.minion-content-index').classList.add('scroll_hidden');
            } else {
                document.querySelector('.top-navbox').classList.remove('scroll_hidden');
                document.querySelector('.minion-timestamp').classList.remove('scroll_hidden');
                document.querySelector('.minion-content-index').classList.remove('scroll_hidden');
            }

            _.filter(trump_data[0].dynamicscroll_list, function (dbg) {
                if (dbg == 'hero') {
                    if (checkVisible(document.querySelector('.presidenttrump-analysis-data .analysis-hero'), window.innerHeight * 0.35) == true) {
                        document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="hero"]').classList.add('current');
                    } else {
                        document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="hero"]').classList.remove('current');
                    }
                } else if (dbg == 'eom') {
                    if (checkVisible(document.querySelector('.presidenttrump-analysis-data .analysis-eom'), window.innerHeight * 0.35) == true) {
                        document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="eom"]').classList.add('current');
                    } else {
                        document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="eom"]').classList.remove('current');
                    }
                } else {
                    if (checkVisible(document.querySelector('.presidenttrump-analysis-data .analysis-item[banana-id="' + dbg + '"]'), window.innerHeight * 0.15) == true) {
                        document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + dbg + '"]').classList.add('current');
                        document.querySelector('.presidenttrump-analysis-data .analysis-item[banana-id="' + dbg + '"]').classList.add('current');
                    }
                    
                    if (checkVisible(document.querySelector('.presidenttrump-analysis-data .analysis-item[banana-id="' + dbg + '"]'), window.innerHeight * 0.25) == false) {
                        document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + dbg + '"]').classList.remove('current');
                        document.querySelector('.presidenttrump-analysis-data .analysis-item[banana-id="' + dbg + '"]').classList.remove('current');
                    }
                }
            });
        });

        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
}



const attach_events = () => {
    var contentindexi = document.querySelectorAll('.minion-content-index .content-indexes li');
    for (var i=0; i < contentindexi.length; i++) {
        contentindexi[i].addEventListener('click', function (e) {
            var month_raw = this.getAttribute('banana-monthstr');
            if (!this.classList.contains('current')) {
                window.location.href = window.location.protocol + "//" + window.location.host + "/donaldtrump_n?type=" + month_raw;
            }
        });
    }
    
    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .tweet-item .ts'), function(el, index, array) {
        var ts_raw = el.getAttribute('banana-ts');
        var ts_cv = moment.unix(ts_raw).format("MMMM Do YYYY, hh:mm");

        el.innerHTML = ts_cv;
    });

    var revealtweets = document.querySelectorAll('.presidenttrump-analysis-data .item-revealtweets-action');
    for (var i=0; i < revealtweets.length; i++) {
        revealtweets[i].addEventListener('click', function (e) {
            var parent = getParents(this, '.analysis-item')[0];
            var target = parent.querySelector('.item-tweets');
            
            var div = document.querySelector('.minion-datapopup .datapopup-contents');
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            var divClone = target.cloneNode(true);
            document.querySelector('.minion-datapopup .datapopup-contents').appendChild(divClone);
            document.querySelector('.minion-datapopup').classList.add('visible');
        });
    }

    document.querySelector('.presidenttrump-analysis-data .analysis-eom').addEventListener('click', function (e) {
        var month_current = this.getAttribute('banana-month');
        window.location.href = window.location.protocol + "//" + window.location.host + "/donaldtrump_n?type=" + month_current;
        //render_data(month_current);
    });

    document.querySelector('.presidenttrump-analysis-data .analysis-herotpdetails').addEventListener('click', function (e) {
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

function checkVisible(elm, threshold, mode) {
    if (!elm) return;
    threshold = threshold || 0;
    mode = mode || 'visible';
  
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var above = rect.bottom - threshold < 0;
    var below = rect.top - viewHeight + threshold >= 0;
  
    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}

function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    return (
        rect.top  >= -window.innerHeight * 0.3 ||
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

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