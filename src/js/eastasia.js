import {html, render} from 'lit-html';
import eastasia_style from '../styles/eastasia/main.css';

export function init_render() {
    const getpathparam = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    }

    if (getpathparam('type') == 'korea') {
        document.querySelector('.navbox-currentpath').textContent ='East Asia/Korea';

        import('./eastasia/korea').then(module => {
            module.init_render();
        });
    } else {
        document.querySelector('.navbox-currentpath').textContent ='East Asia';
        document.querySelector('.navbox-sections li[data-sectionid="nav-section-eastasia"]').remove();

        const contentSections = [
            { id: 'ea-all-korea', name: 'South Korean Government Policy Progress Report', desc: 'Tracking down the progress of 100 key policies of the new regime.', path: 'eastasia/korea' },
            { id: 'ea-all-nkthreat', name: 'In-depth: North Korea Threats and Reality', desc: 'Highlights North Korea threats in a completely different perspective based on reality.', path: 'eastasia/nkthreat' },
        ];

        const hero_markup = () => html`
        <div class="ea-all-hero">
            <div class="ea-all-herotext">
                <p class="hero1">New Perspectives on East Asia's Role</p>
                <p class="hero1">in Global Issues</p>
                <div class="hero2">
                    <p>As East Asia plays a significant role in many global issues,</p>
                    <p>a deep understanding of East Asian countries are emphasized than ever before.</p>
                    <p>// Not for Public Distribtution, Under Preview Stage //</p>
                </div>
            </div>
        </div>

        <div class="ea-all-list">
            ${contentSections.map((i) => html`
            <a href="/${i.path}">
            <div class="ea-all-contentitem" banana-contentid="${i.id}">
                <p class="title">${i.name}</p>
                <p class="desc">${i.desc}</p>
            </div>
            </a>
            `
            )}
        </div>
        `;

        render(hero_markup(), document.querySelector('.minion-contents'));
        document.querySelector('.minion-timestamp .ts-date').innerHTML = '';
    }
}