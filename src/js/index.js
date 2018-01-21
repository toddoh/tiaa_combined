import styles from '../styles/core.css';
import {html, render} from 'lit-html';

const render_core = () => {
    const contentSections = [
        { id: 'nav-section-today', name: 'Today', path: '' },
        { id: 'nav-section-thisweek', name: 'ThisWeek', path: 'thisweek' },
        { id: 'nav-section-donaldtrump', name: 'TrumpFirstYear', path: 'donaldtrump' },
        //{ id: 'nav-section-eastasia', name: 'EastAsia', path: 'eastasia' },
    ];

    const top_frame_markup = () => html`
    <div class="minion-root">
        <div class="top-navbox">
            <div class="navbox-static">
                <div class="navbox-logo"></div>
                <p class="navbox-currentpath">Today</p>
                <div class="navbox-reveal">
                    <div class="icon"></div>
                </div>
            </div>
            <div class="navbox-sections">
                <p class="sections-desc">More on THISISALLABOUT:</p>
                <ul>
                    ${contentSections.map((i) => html`
                        <li data-sectionid="${i.id}"><a href="/${i.path}">${i.name}</a></li>
                    `
                    )}
                </ul>
            </div>
            <div class="navbox-info">
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="mailto:hello@thisisallabout.com">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class="minion-timestamp">
            <div class="content-ts">
                <span class="ts-date">...</span>
            </div>
        </div>
        <div class="minion-dataload"></div>
        <div class="minion-contents">
        </div>
    </div>
    `;

    render(top_frame_markup(), document.body);
    if (window.screen.width <= 980) {
        document.body.setAttribute('banana-type', 'mobile');
    }
}

render_core();
var currentpath_whole = window.location.pathname;
var currentpath_type = window.location.pathname.split('/')[1];

if (currentpath_type !== '') {
    document.querySelector('.minion-dataload').setAttribute('status', 'dl_e_1');
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

if (check_mobile()) {
    document.querySelector('.top-navbox').addEventListener('click', (e) => {
        if (!document.querySelector('.top-navbox').classList.contains('visible')) {
            document.querySelector('.top-navbox').classList.add('visible');
            if (document.querySelector('.navbox-currentpath').offsetWidth >= 165) {
                document.querySelector('.navbox-currentpath').classList.add('long');
            } else {
                if (!document.querySelector('.navbox-currentpath').classList.contains('long'))
                    document.querySelector('.navbox-currentpath').classList.remove('long');
            }
        } else {
            if (document.querySelector('.top-navbox').classList.contains('visible'))
                document.querySelector('.top-navbox').classList.remove('visible');

            if (document.querySelector('.navbox-currentpath').classList.contains('long'))
                    document.querySelector('.navbox-currentpath').classList.remove('long');
        }
    });
} else {
    document.querySelector('.top-navbox').addEventListener('mouseenter', (e) => {
        if (!document.querySelector('.top-navbox').classList.contains('visible'))
                document.querySelector('.top-navbox').classList.add('visible');

        if (document.querySelector('.navbox-currentpath').offsetWidth >= 165) {
            document.querySelector('.navbox-currentpath').classList.add('long');
        } else {
            if (!document.querySelector('.navbox-currentpath').classList.contains('long'))
                document.querySelector('.navbox-currentpath').classList.remove('long');
        }
    });

    document.querySelector('.top-navbox').addEventListener('mouseleave', (e) => {
        if (document.querySelector('.top-navbox').classList.contains('visible'))
                document.querySelector('.top-navbox').classList.remove('visible');

        if (document.querySelector('.navbox-currentpath').classList.contains('long'))
                document.querySelector('.navbox-currentpath').classList.remove('long');
    });
}