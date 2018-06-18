import styles from '../styles/core.css';
import {html, render} from 'lit-html';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
require('../resources/favicons/android-chrome-192x192.png');
require('../resources/favicons/android-chrome-384x384.png');
require('../resources/favicons/apple-touch-icon.png');
require('../resources/favicons/apple-touch-icon.png');
require('../resources/favicons/apple-touch-icon-120x120-precomposed.png');
require('../resources/favicons/apple-touch-icon-120x120.png');
require('../resources/favicons/favicon-16x16.png');
require('../resources/favicons/favicon-32x32.png');
require('../resources/favicons/favicon.ico');
require('../resources/favicons/mstile-150x150.png');
require('../resources/favicons/safari-pinned-tab.svg');

const render_core = () => {
    const contentSections = [
        { id: 'nav-section-today', name: 'Today', path: '' },
        { id: 'nav-section-theyear', name: 'TheYear', path: 'theyear' }
    ];

    const projectSections = [
        { id: 'nav-section-whattrumpsaid', name: 'WhatTrumpSaid', path: 'whattrumpsaid' }
    ];

    const labSections = [
        { id: 'nav-section-datatodaycluster', name: 'HourlyClusters', path: 'lab?type=hourlycluster' }
    ];

    const top_frame_markup = () => html`
    <div class="minion-root">
        <div class="minion-header">
            <div class="minion-sections">
                <div class="sections-group">
                    <p class="section-guide">REGULAR</p>
                    <ul class="sections-list">
                        ${contentSections.map((i) => html`
                            <li data-sectionid="${i.id}"><a href="/${i.path}">${i.name}</a></li>
                        `
                        )}
                    </ul>
                </div>

                <div class="sections-group">
                    <p class="section-guide">PROJECTS</p>
                    <ul class="sections-list projects">
                        ${projectSections.map((i) => html`
                            <li data-sectionid="${i.id}"><a href="/${i.path}">${i.name}</a></li>
                        `
                        )}
                    </ul>
                </div>

                <div class="sections-group">
                    <p class="section-guide">LABORATORY</p>
                    <ul class="sections-list lab">
                        ${labSections.map((i) => html`
                            <li data-sectionid="${i.id}"><a href="/${i.path}">${i.name}</a></li>
                        `
                        )}
                    </ul>
                </div>

                <div class="sections-group">
                    <ul class="sections-tiaainfo">
                        <li><a href="/about">About</a></li>
                        <li><a href="http://facebook.com/thisisallabout">Facebook</a></li>
                        <li><a href="mailto:hello@thisisallabout.com">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div class="header-box">
                <div class="minion-tiaa-logo">THISISALLABOUT</div>
                <div class="minion-featured-sections">
                    <ul class="sections-list">
                        <li data-sectionid="reveal-sections">browse</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="minion-contents">
        </div>
        <div class="minion-dataload"></div>
        <div class="minion-bidobido"</div>
    </div>
    `;

    render(top_frame_markup(), document.body);
    document.querySelector('.minion-dataload').setAttribute('status', 'dl_e_1');
    if (window.screen.width <= 980) {
        document.body.setAttribute('banana-type', 'mobile');
    }
}

render_core();
var currentpath_whole = window.location.pathname;
var currentpath_type = window.location.pathname.split('/')[1];

if (currentpath_type !== '') {
    import('./' + currentpath_type).then(module => {
        module.init_render();
        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
} else {
    import(/* webpackChunkName: "today" */ './today').then(module => {
        module.init_render();
        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
}

const check_mobile  = () => {
    var status = false;
    document.body.getAttribute('banana-type', 'mobile') ? status = true : status = false;
    return status;
}

window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 140) {
        document.querySelector('.minion-header').classList.add('floating');
    } else {
        document.querySelector('.minion-header').classList.remove('floating');
    }
});

document.querySelector('.minion-header .header-box').addEventListener('click', function (e) {
    (!document.querySelector('.minion-header').classList.contains('opened')) ? document.querySelector('.minion-header').classList.add('opened') : document.querySelector('.minion-header').classList.remove('opened');
});