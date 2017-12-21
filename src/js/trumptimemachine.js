import {html, render} from 'lit-html';


export function render_trumptimemachine() {
    document.querySelector('.navbox-currentpath').textContent ='TrumpTimeMachine';
    document.querySelector('.navbox-sections li[data-sectionid="nav-section-trumptimemachine"]').remove();
}