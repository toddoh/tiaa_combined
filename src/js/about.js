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
                <p class="member-title">Editorial director: Todd Oh</p>
                <p class="member-desc">
                    For the past 10 years, Todd worked on various startups and technical projects. In 2010, at the age of 17, he built a geolocation algorithm and mobile service and later in 2015, he founded a startup, Toast Labs, LLC., in Palo Alto at the age of 21. With these backgrounds, he started seeking a solution for better journalism since 2016 presidential election. Soon after in late 2016, he launched a news aggregation algorithm and his latest project at Toast Labs, LLC., "#Newsrooms" which featured on The Daily Pennsylvanian Newspaper. In addition to his startup background, he studies sociology at Yonsei University, South Korea and trying to fight against social issues.
                </p>
                <div class="social-channels">
                    <a href="https://twitter.com/brklynfivefive" target="_blank"><div class="team-social twitter"></div></a>
                    <a href="mailto:brklynfivefive@gmail.com" target="_blank"><div class="team-social email"></div></a>
                </div>
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
                To analyze a large amount of news data, clustering unit first vectorizes all word tokens to help computer understand. Then we put it in a giant sort machine.
            </li>
            <li>
                A giant sort machine groups news stories by a set of clusters with stories similar to each other than else.
            </li>
            <li>
                Lastly, the unit reorganizes clusters with some stories most relevant to the topic of each cluster.
            </li>
            <li>
                We create an appropriate section for the result came out and put some touches visualizing the data.
            </li>
            <li>
                Now it's all ready to go! A story piece unravelling issues of our society. 
            </li>
        </ul>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    document.querySelector('.minion-timestamp .ts-date').innerHTML = '';
}