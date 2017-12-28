import {html, render} from 'lit-html';
import styles from '../styles/trump.css';


export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='TrumpFirstYear';
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-trump"]').remove();

    const hero_markup = () => html`
    <div class="trump-hero">
        <div class="trump-herotext">

        </div>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
}