import {html, render} from 'lit-html';


export function render_today() {
    document.querySelector('.navbox-currentpath').textContent ='Today';
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-today"]').remove();

    const today_hero_markup = () => html`
    <div class="today-clusters">
        <div class="hero-texts">
            <p class="topic-counts">Three topics</p>
            <p>today</p>
        </div>
        <div class="clusters-list">
        </div>
    </div>
    `;

    render(today_hero_markup(), document.querySelector('.minion-contents'));
}