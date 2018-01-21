import {html, render} from 'lit-html';
import about_style from '../styles/about.css';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='';

    const hero_markup = () => html`
    <div class="about-hero">
        <div class="about-herotext">
            <p class="hero1">It's not just data journalism.</p>
            <p class="hero1">This is all about all the things that matter.</p>
            <div class="hero2">
                <p>It's getting more important to be aware of what's happening to support democracy and society. However, in the era of digital journalism, it is particularly difficult to know what are the things which matter. With a clear and transparent data-driven effort, we strive to highlight every aspects of society and things that can impact our daily lives. We, THISISALLABOUT, believe that data-driven effort can restore damaged journalism these days.</p>
            </div>
            <div class="hero2">
                <div class="team">
                    <p>Editorial director: Todd Oh</p>
                    <a href="https://twitter.com/brklynfivefive" target="_blank"><div class="team-social twitter"></div></a>
                    <a href="mailto:brklynfivefive@gmail.com" target="_blank"><div class="team-social email"></div></a>
                    <a href="https://facebook.com/brklynfivefive" target="_blank"><div class="team-social fb"></div></a>
                    <a href="https://www.linkedin.com/in/toddoh/" target="_blank"><div class="team-social linkedin"></div></a>
                </div>
                <p class="detail">* We use a sophisticated clustering/natural language processing algorithm to provide our contents. Check the information attached to every section to find out details.</p>
            </div>
            <div class="hero2 contact">
                <p><a href="mailto:hello@thisisallabout.com">Contact Us</a></p>
            </div>
        </div>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    document.querySelector('.minion-timestamp .ts-date').innerHTML = '';
}