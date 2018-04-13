import {html, render} from 'lit-html';
import today_style from '../styles/today.css';
import socialLikes from 'social-likes-next';
import social_style from 'social-likes-next/lib/social-likes_light.css';
import moment from 'moment';
import tz from 'moment-timezone';

export function init_render() {
    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    document.body.classList.add('today');
    document.querySelector('.minion-header li[data-sectionid="nav-section-today"]').classList.add('current');

    const today_hero_markup = () => html`
    <div class="today-head-data">
        <div class="head-item-container">
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
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, the "interpreter" unit creates a final result, ready to be published.</p>
            <p>This content renders clustering results created automatically by our processing system. We verify that the result is completely untouched.</p>
            <p>We aggregate and process stories from CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, and Financial Times from the past 24 hours.</p>
            <p>Based on the data, the system runs a full natural language processing and clustering sequence to sort out key topics. </p>
        </div>
        <div class="tpdetails-close-action">
            <div class="icon"></div>
        </div>
    </div>
    `;

    render(today_hero_markup(), document.querySelector('.minion-contents'));
    render_data();
    /*
    socialLikes(document.querySelector('.today-share'));
    document.querySelector('.today-share .email').addEventListener('click', function (e) {
        window.location.href = "mailto:?body=Hey, check trending issues of today: " + window.location.href;
    });*/
}


const check_mobile = () => {
    var status = false;
    document.body.getAttribute('banana-type', 'mobile') ? status = true : status = false;
    return status;
}

const render_data = () => {
    var trump_data = null;
    var dataset_url;
    dataset_url = 'https://thisisallabout.com/dataset/today/today_data.json';

    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        trump_data = module;

        var contentts = trump_data[0].timestamp;
        var est_ts = moment.tz(contentts, "America/New_York").format("MMM D ddd");
        document.querySelector('.minion-header li[data-sectionid="nav-section-today"] a').innerHTML = est_ts;
        const analysis_markup = () => html`
            ${trump_data.map((i) => html`
                <div class="analysis-item" banana-keywords="${JSON.stringify(i.theme)}">
                    <div class="all-article-container">
                            ${i.toparticles.map((arti) => html`
                                ${arti.length > 0 ? html`
                                    ${arti.map((a) => html`
                                    <div class="all-article-item analysis-article-obj" banana-link="${a.url}" banana-articleid="${a._id}" banana-imagesrc="${a.image}">
                                        <div class="article-image" banana-imagesrc="${a.image}" style="background-image: url('${a.image}')"></div>
                                        <a href="${a.url}" target="_blank">
                                            <p class="title">${a.title}</p>
                                        </a>
                                        <div class="article-info">
                                            <p class="origin">${a.origin}</p>
                                        </div>
                                    </div>
                                    `)}
                                ` : ''}
                            `
                            )}
                    </div>
                    <div class="item-close-action">
                        <div class="icon"></div>
                    </div>
                </div>
            `
            )}
        `;

        render(analysis_markup(), document.querySelector('.today-analysis-data .analysis-list'));

        const head_markup = () => html`
            ${trump_data.map((i) => html`
                ${i.toparticles.map((arti) => html`
                    <div class="head-article-item analysis-article-obj" banana-keywords="${JSON.stringify(i.theme)}" banana-link="${arti[0].url}" banana-articleid="${arti[0]._id}">
                        <div class="article-image" banana-imagesrc="${arti[0].image}" style="background-image:  linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('${arti[0].image}')"></div>
                        <a href="${arti[0].url}" target="_blank">
                            <p class="title">${arti[0].title}</p>
                        </a>
                        <div class="article-info">
                            <p class="origin">${arti[0].origin},&nbsp;</p>
                            <p class="ts" banana-ts="${arti[0].ts}"></p>
                        </div>
                    </div>
                `)}
            `
            )}
        `;

        render(head_markup(), document.querySelector('.today-head-data .head-item-container'));
        postrender_data();
        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
}

const postrender_data = () => {
    /*window.addEventListener('scroll', function (e) {
        if (this.scrollY >= window.innerHeight * 0.85) {
            document.querySelector('.minion-header').classList.add('bright');
        } else {
            document.querySelector('.minion-header').classList.remove('bright');
        }
    });*/
    $('.today-head-data .head-item-container .head-article-item:nth-child(1)').addClass('first');
    $('.today-head-data .head-item-container .head-article-item:nth-child(2)').addClass('second');
    $('.today-head-data .head-item-container .head-article-item:nth-child(3)').addClass('third');
    $('.today-head-data .head-item-container .head-article-item:nth-child(4)').addClass('fourth');

    $('.today-analysis-data .analysis-list .analysis-item').each(function (i, el) {
        $(el).find('.all-article-item:nth-child(1)').remove();
    });

    $('.today-head-data .analysis-article-obj').each(function (i, el) {
        var ts_converted = moment.tz(moment.unix($(el).find('.article-info .ts').attr('banana-ts')), "America/New_York").format();
        var ts_ago = moment(ts_converted).fromNow();
        $(el).find('.article-info .ts').text(ts_ago);

        var items = ['www.washingtonpost.com/pb/resources/img/twp-social-share.png', 'twt-assets.washtimes.com', 'https://static01.nyt.com/images/icons/t_logo_291_black.png', 'favicon', 'Twitterlogo.png', 'facebook-default-wide.jpg'];
        var matches = items.filter(s => $(el).find('.article-image').attr('banana-imagesrc').toLowerCase().includes(s.toLowerCase()));
        if (matches.length > 0) {
            $(el).addClass('noimage');
        }
    });

    $('.today-analysis-data .analysis-list .analysis-article-obj').each(function (i, el) {
        var items = ['www.washingtonpost.com/pb/resources/img/twp-social-share.png', 'twt-assets.washtimes.com', 'https://static01.nyt.com/images/icons/t_logo_291_black.png', 'favicon', 'Twitterlogo.png', 'facebook-default-wide.jpg'];
        var matches = items.filter(s => $(el).find('.article-image').attr('banana-imagesrc').toLowerCase().includes(s));
        if (matches.length > 0) {
            $(el).addClass('noimage');
        }
    });

    if (check_mobile()) {
        var mobile_ithm_close = document.querySelectorAll('.today-analysis-data .analysis-list .item-close-action');
        for (var i=0; i < mobile_ithm_close.length; i++) {
            mobile_ithm_close[i].addEventListener('click', function (e) {
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
    }

    /*
    document.querySelector('.today-herotpdetails').addEventListener('click', function (e) {
        if (!document.querySelector('.today-tpdetails').classList.contains('opened'))
            document.querySelector('.today-tpdetails').classList.add('opened');

        if (!document.querySelector('.today-analysis-data').classList.contains('hidden'))
            document.querySelector('.today-analysis-data').classList.add('hidden');
    });

    document.querySelector('.today-tpdetails .tpdetails-close-action').addEventListener('click', function (e) {
        if (document.querySelector('.today-tpdetails').classList.contains('opened'))
            document.querySelector('.today-tpdetails').classList.remove('opened');

        if (document.querySelector('.today-analysis-data').classList.contains('hidden'))
            document.querySelector('.today-analysis-data').classList.remove('hidden');
    });
    */
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