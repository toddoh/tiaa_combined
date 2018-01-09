import {html, render} from 'lit-html';
import presidenttrump_style from '../styles/donaldtrump.css';
import Chart from 'chart.js';
import Scrollbar from 'smooth-scrollbar';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='TrumpFirstYear';
    document.querySelector('.navbox-static').classList.add('donaldtrump');
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-donaldtrump"]').remove();

    const hero_markup = () => html`
    <div class="presidenttrump-hero">
        <div class="presidenttrump-herotext">
            <p class="hero1 strike">Make America Great Again</p>
            <p class="hero1">So far, it's been chaos.</p>
            <div class="hero2">
                <p>To celebrate President Trump’s first year in the White House,</p>
                <p>we rediscovered what has happened in our nation last year.</p>
                <p>// Not for Public Distribtution, Under Preview Stage //</p>
            </div>
        </div>
    </div>
    <div class="presidenttrump-analysis-data">
        <div class="analysis-list">
        </div>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    document.querySelector('.minion-timestamp .ts-date').innerHTML = 'Last updated on Jan 9, 2018 ET';
    render_data();
}

const render_data = () => {
    var trump_data = null;
    import('./donaldtrump_data').then(module => {
        trump_data = module.data_init();

        const analysis_markup = () => html`
            ${trump_data.map((i) => html`
                <div class="analysis-item">
                    <div class="item-info">
                        <div class="item-theme">
                            <p class="theme-header">${i.header}</p>
                            <div class="themes">
                                ${i.theme.map((thm) => html`
                                    <p class="theme-keywords">${thm}</p>
                                `
                                )}
                            </div>
                        </div>
                        <div class="item-peakinfo" banana-peakdata="${JSON.stringify(i.list)}">
                            <canvas id="item-peakchart" width="200px" height="125px"></canvas>
                        </div>
                    </div>

                    <div class="item-toparticle-container">
                        <div class="toparticle-month-container">
                            ${i.toparticles.map((arti) => html`
                                ${arti.length > 0 ? html`
                                <div class="toparticle-month" banana-month="${arti[0].date_month}">
                                    <p>${arti[0].date_month}</p>
                                </div>
                                ` : ''}
                            `
                            )}
                        </div>

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
                </div>
            `
            )}
        `;

        render(analysis_markup(), document.querySelector('.presidenttrump-analysis-data .analysis-list'));
        postrender_data();
    });
}

const postrender_data = () => {
    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .analysis-list .item-info'), function(el, index, array) {
        el.querySelector('.item-peakinfo').style.height = (el.querySelector('.item-theme').offsetHeight-25) + 'px';

        var ctx = el.querySelector('.item-peakinfo');
        var ctx_data = JSON.parse(ctx.getAttribute('banana-peakdata'));
        var myChart = new Chart(el.querySelector('#item-peakchart'), {
            type: 'line',
            data: {
                labels: ["Feb 2017", "Mar 2017", "Apr 2017", "May 2017", "Jun 2017", "Jul 2017", "Aug 2017", "Sep 2017", "Oct 2017", "Nov 2017", "Dec 2017"],
                datasets: [{
                    data: ctx_data,
                    backgroundColor: 'transparent',
                    borderColor: '#cacaca',
                    pointBackgroundColor: '#808080',
                    pointBorderColor: '#808080',
                    borderWidth: 3
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 5,
                        bottom: 5
                    }
                },
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        display: false
                    }],
                    xAxes: [{
                        display: false
                    }],
                    gridLines: [{
                        drawBorder: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                        display: false
                    }]
                },
                tooltips: {
                    mode: 'point'
                }
            }
        });
    });

    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .toparticle-content-container'), function(el, index, array) {
        Scrollbar.init(el, {
            damping: 0.55
        });
    });

    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .analysis-list .analysis-item'), function(el, index, array) {
        el.querySelectorAll('.toparticle-month-container .toparticle-month')[0].classList.add('selected');
        el.querySelectorAll('.toparticle-content-container .toparticle-month')[0].classList.add('selected');
    });

    Array.prototype.forEach.call(document.querySelectorAll('.presidenttrump-analysis-data .analysis-list .toparticle-content-container .toparticle-object'), function(el, index, array) {
        el.style.backgroundImage = 'url(' + el.getAttribute('banana-imagesrc') + '), linear-gradient(#000, transparent)'
    });

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