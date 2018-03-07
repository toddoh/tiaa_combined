import styles from '../styles/core.css';
import {html, render} from 'lit-html';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
require('../resources/favicons/android-chrome-192x192.png');
require('../resources/favicons/android-chrome-384x384.png');
require('../resources/favicons/apple-touch-icon.png');
require('../resources/favicons/favicon-16x16.png');
require('../resources/favicons/favicon-32x32.png');
require('../resources/favicons/favicon.ico');
require('../resources/favicons/mstile-150x150.png');
require('../resources/favicons/safari-pinned-tab.svg');

const render_core = () => {
    const contentSections = [
        { id: 'nav-section-today', name: 'Today', path: '' },
        { id: 'nav-section-theweek', name: 'TheWeek', path: 'theweek' },
        { id: 'nav-section-theyear', name: 'TheYear', path: 'theyear' }
    ];

    const projectSections = [
        { id: 'nav-section-whattrumpsaid', name: 'WhatTrumpSaid', path: 'whattrumpsaid' }
    ];

    const top_frame_markup = () => html`
    <div class="minion-root">
        <div class="minion-header">
            <div class="minion-sectionbox">
                <div class="minion-sections-reveal">
                    <p>Sections</p>
                    <div class="icon"></div>
                </div>
            </div>
            <div class="minion-navbox">
                <div class="navbox-static">
                    <div class="navbox-logo"></div>
                    <p class="navbox-currentpath">Today</p>
                </div>
            </div>
            <div class="minion-timestamp">
                <div class="content-ts">
                    <span class="ts-date">...</span>
                </div>
            </div>
        </div>
        <div class="minion-sections">
            <div class="minion-sections-reveal">
                <p>Sections</p>
                <div class="icon"></div>
            </div>
            <p class="section-guide">Regular</p>
            <ul class="sections-list">
                ${contentSections.map((i) => html`
                    <li data-sectionid="${i.id}"><a href="/${i.path}">${i.name}</a></li>
                `
                )}
            </ul>

            <p class="section-guide">Projects</p>
            <ul class="sections-list projects">
                ${projectSections.map((i) => html`
                    <li data-sectionid="${i.id}"><a href="/${i.path}">${i.name}</a></li>
                `
                )}
            </ul>
            <ul class="sections-tiaainfo">
                <li><a href="/about">About Us</a></li>
                <li><a href="http://facebook.com/thisisallabout">Facebook</a></li>
                <li><a href="mailto:hello@thisisallabout.com">Contact</a></li>
            </ul>
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
    import('./today').then(module => {
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
    if (this.scrollY >= 120) {
        document.querySelector('.minion-header').classList.add('scroll_bar');
    } else {
        document.querySelector('.minion-header').classList.remove('scroll_bar');
    }
});

var section_reveal = document.querySelectorAll('.minion-sections-reveal');
for (var i=0; i < section_reveal.length; i++) {
    section_reveal[i].addEventListener('click', function (e) {
        if (!document.querySelector('.minion-sections').classList.contains('opened')) {
            document.querySelector('.minion-sections').classList.add('opened');
        } else {
            document.querySelector('.minion-sections').classList.remove('opened');
        }
    });
}

document.querySelector('.minion-navbox').addEventListener('click', (e) => {
    if (!document.querySelector('.minion-navbox').classList.contains('visible')) {
        document.querySelector('.minion-navbox').classList.add('visible');
        if (document.querySelector('.navbox-currentpath').offsetWidth >= 165) {
            document.querySelector('.navbox-currentpath').classList.add('long');
        } else {
            if (!document.querySelector('.navbox-currentpath').classList.contains('long'))
                document.querySelector('.navbox-currentpath').classList.remove('long');
        }
    } else {
        if (document.querySelector('.minion-navbox').classList.contains('visible'))
            document.querySelector('.minion-navbox').classList.remove('visible');

        if (document.querySelector('.navbox-currentpath').classList.contains('long'))
                document.querySelector('.navbox-currentpath').classList.remove('long');
    }
});