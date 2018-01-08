import {html, render} from 'lit-html';
import today_style from '../styles/today.css';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='Today';

    const today_hero_markup = () => html`
    <div class="today-hero">
            <div class="today-herotext">
                <p class="hero1">THISISALLABOUT</p>
                <p class="hero1">What You Need to Know.</p>
                <div class="hero2">
                    <p>// TEST_PARK //</p>
                    <p>// Not for Public Distribtution, Under Preview Stage //</p>
                </div>
            </div>
        </div>
    `;

    render(today_hero_markup(), document.querySelector('.minion-contents'));
    document.querySelector('.minion-timestamp .ts-date').innerHTML = 'Last updated on Jan 8, 2018 ET';
}