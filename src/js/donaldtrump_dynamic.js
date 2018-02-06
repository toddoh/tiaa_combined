import {html, render} from 'lit-html';

export function dynamicbg_render_data(month, dbg) {
    if (month == '2017-01') dynamicbg_201701(dbg);
    if (month == '2017-02') dynamicbg_201702(dbg);
    if (month == '2017-03') dynamicbg_201703(dbg);
    if (month == '2017-04') dynamicbg_201704(dbg);
}

const dynamicbg_201701 = (type) => {
    if (type == '1701c03') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box">
                <p>😈</p>
                <p>EVIL AND FAKE</p>
                <p>CNN?</p>
            </div>
            <div class="graphic-box">
                <p>😇</p>
                <p>GREAT AND NO.1</p>
                <p>Fox News?</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + type + '"]'));
    }

    if (type == '1701c04') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box">
                <p>🤬</p>
                <p>THE COVERAGE ABOUT ME IN</p>
                <p>NYT AND WP HAS BEEN SO FALSE! ...</p>
            </div>
            <div class="graphic-box">
                <p>😤</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + type + '"]'));
    }

    if (type == '1701c05') {
        const dynamicbg_markup = () => html`
        <div class="graphic" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Donald_Trump_%2825953705015%29.jpg/1920px-Donald_Trump_%2825953705015%29.jpg')">
            <div class="graphic-box">
                <p>EXTREME</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201702 = (type) => {
    if (type == '1702c02') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box nyt">
                <div class="nytlogo"></div>
                <p>FAKE</p>
            </div>
            <div class="graphic-box cnn">
                <div class="cnnlogo"></div>
                <p>FAKE</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201703 = (type) => {
    if (type == '1703c00') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box">
                <div class="trumpcare"></div>
                <p>😏</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + type + '"]'));
    }

    if (type == '1703c01') {
        const dynamicbg_markup = () => html`
        <div class="graphic" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Donald_Drumpf.jpg/1600px-Donald_Drumpf.jpg')">
            <div class="graphic-box">
                <p>MORE JOBS</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201704 = (type) => {
    if (type == '1704c01') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.presidenttrump-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + type + '"]'));
    }
}