import styles from '../styles/core.css';
import {html, render} from 'lit-html';

const render_core = () => {
    const contentSections = [
        { id: 'nav-section-today', name: 'Today', path: '' },
        //{ id: 'nav-section-situations', name: 'Situations', path: 'situations' },
        { id: 'nav-section-presidenttrump', name: 'TrumpFirstYear', path: 'presidenttrump' },
        { id: 'nav-section-eastasia', name: 'EastAsia', path: 'eastasia' },
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
        </div>
        <div class="minion-timestamp">
            <div class="content-ts">
                <span class="ts-date">...</span>
            </div>
        </div>
        <div class="minion-contents">
        </div>
    </div>
    `;

    render(top_frame_markup(), document.body);
}

render_core();
var currentpath_whole = window.location.pathname;
var currentpath_type = window.location.pathname.split('/')[1];

if (currentpath_type !== '') {
    import('./' + currentpath_type).then(module => {
        module.init_render();
    });
} else {
    import('./today').then(module => {
        module.init_render();
    });
}

document.querySelector('.top-navbox').addEventListener('mouseenter', (e) => {
    if (document.querySelector('.navbox-currentpath').offsetWidth >= 165) {
        document.querySelector('.navbox-currentpath').classList.add('long');
    } else {
        if (!document.querySelector('.navbox-currentpath').classList.contains('long'))
            document.querySelector('.navbox-currentpath').classList.remove('long');
    }
});

document.querySelector('.top-navbox').addEventListener('mouseleave', (e) => {
    if (document.querySelector('.navbox-currentpath').classList.contains('long'))
            document.querySelector('.navbox-currentpath').classList.remove('long');
});