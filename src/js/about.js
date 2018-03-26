import {html, render} from 'lit-html';
import about_style from '../styles/about.css';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='';

    const hero_markup = () => html`
    <div class="about-hero">
        <div class="about-herotext">
            <p class="hero1">It's all about</p>
            <p class="hero1">what really matters.</p>
            <div class="hero2">
                <p>We're living in a time of unprecedented economic, political, and social hardships. And that's why knowing key issues has become more critical than ever. However, in the era of digital journalism, it's difficult to get clear information about things that would affect our daily lives. In a flood of stories and fake news, our aim is to help people understand issues in an easy and clear way.</p>
                
                <p>On THISISALLABOUT, our aim is to unravel complex issues and agendas by group, timeframe, and key topic using intelligent data analysis and great visualization. And with a delicate touch on curation, we help you navigate through a wide range of issues by a single click. Furthermore, our algorithm analyzes without the possibility of political biases (see more about how it works below), which fundamentally changes the way you read news.</p>
                
                <p>Through a deliberate process of data analysis and story curation, we will never stop discovering every aspect of society. That's what and how we do.</p>
                <p>THISISALLABOUT is not just a news portal or an assistant. It's all about things that really matter.</p>
            </div>
            <div class="hero2 contact">
                <p><a href="mailto:hello@thisisallabout.com">Contact Us</a></p>
            </div>
        </div>
    </div>
    
    <div class="about-team">
        <p class="title-text">Team</p>
        <ul>
            <li class="team-member">
                <p class="member-title">Senior Editor: Todd Oh</p>
                <p class="member-desc">
                Todd Oh is the founder, engineer, and senior editor of THISISALLABOUT. He has worked on a number of projects over the years connected with news aggregation algorithms, geolocation, and mobile services. His goal is to help people get access to the right information to debate aspects of their society. Todd became involved with technology startups at an early age.  At 17 he gave a TED talk at TEDxYouth Seoul, and has since gone on to major in sociology at Yonsei University. Bilingual in English and Korean, outside of the tech world he’s still trying to master homemade pasta. 
                </p>
                <div class="social-channels">
                    <a href="https://twitter.com/brklynfivefive" target="_blank"><div class="team-social twitter"></div></a>
                    <a href="mailto:brklynfivefive@gmail.com" target="_blank"><div class="team-social email"></div></a>
                </div>
            </li>
            <li class="team-member">
                <p class="member-title">Senior Editor: Trevor Stonefield</p>
                <p class="member-desc">
                Trevor Stonefield is the co-founder, and senior editor of THISISALLABOUT.
                </p>
            </li>
        </ul>
    </div>

    <div class="about-technical">
        <p class="title-text">Technical details</p>
        <ul class="step-desc">
            <li>
            Automatically aggregates stories from major news publishers every hour. During this process, it filters out words that are not important or too common in general (such as "of").
            </li>
            <li>
            To analyze a large amount of news data, a clustering unit first vectorizes all word tokens to help the computer comprehend critical information. Then it moves to a clustering processor. 
            </li>
            <li>
            The clustering processor groups news stories by a set of clusters with stories similar to each other.
            </li>
            <li>
            Lastly, the unit reorganizes the clusters with some stories most relevant to the topic of each cluster. 
            </li>
            <li>
            Our editorial team creates an appropriate section for the results and adds visuals for the data.
            </li>
            <li>
            Now it's all ready to go! A new viewpoint on a particular issue. 
            </li>
        </ul>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    document.querySelector('.minion-timestamp .ts-date').innerHTML = '';
}