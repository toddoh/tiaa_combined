import styles from '../styles/core.css';
import {html, render} from 'lit-html';

const render_core = () => {
    const contentSections = [
        { id: 'nav-section-today', name: 'Today', path: '' },
        { id: 'nav-section-situations', name: 'Situations', path: 'situations' },
        { id: 'nav-section-trumptimemachine', name: 'TrumpTimeMachine', path: 'trumptimemachine' }
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
        <div class="minion-contents">
        </div>
    </div>
    `;

    render(top_frame_markup(), document.body);
}

render_core();
const currentpath_type = window.location.pathname;

if (currentpath_type !== '/') {
    import('.' + currentpath_type).then(module => {
        module.render_trumptimemachine();
    });
} else {
    import('./today').then(module => {
        module.render_today();
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