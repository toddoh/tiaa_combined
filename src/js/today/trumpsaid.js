import { html, render } from 'lit-html';
import today_trumpsaid_style from '../../styles/today_trumpsaid.css';
import moment from 'moment';
import tz from 'moment-timezone';

export function init_render() {
    var trump_data = null;
    var dataset_url;
    var today_trumpsaid_data = [
        {
            "timestamp": "2018-06-07 04:11:01.413990-04:00",
            "header": "Trump Prepares The Meeting of the Century with Kim",
            "msg": "President Trump is going to have the summit with North Korean leader Kim Jong Un this coming 12th in Singapore. Will they be able to secure a denuclearization deal after all those conflicts? Look back some of his tweets.",
            "data": [
                { "date_month": "2017-04", "origin": "realdonaldtrump", "title": "I explained to the President of China that a trade deal with the U.S. will be far better for them if they solve the North Korean problem!", "ts": 1491911940, "twitterid": "851766546825347076" }, { "date_month": "2017-04", "origin": "realdonaldtrump", "title": "North Korea is looking for trouble. If China decides to help, that would be great. If not, we will solve the problem without them! U.S.A.", "ts": 1491912180, "twitterid": "851767718248361986" }, { "date_month": "2017-04", "origin": "realdonaldtrump", "title": "I have great confidence that China will properly deal with North Korea. If they are unable to do so, the U.S., with its allies, will! U.S.A.", "ts": 1492088880, "twitterid": "852508752142114816" }, { "date_month": "2017-08", "origin": "realdonaldtrump", "title": "After many years of failure,countries are coming together to finally address the dangers posed by North Korea. We must be tough & decisive!", "ts": 1502191020, "twitterid": "894880193839497216" }, { "date_month": "2017-08", "origin": "realdonaldtrump", "title": "The U.S. has been talking to North Korea, and paying them extortion money, for 25 years. Talking is not the answer!", "ts": 1504097220, "twitterid": "902875515534626817" }, { "date_month": "2017-08", "origin": "realdonaldtrump", "title": "Military solutions are now fully in place,locked and loaded,should North Korea act unwisely. Hopefully Kim Jong Un will find another path!", "ts": 1502450940, "twitterid": "895970429734711298" }, { "date_month": "2017-08", "origin": "realdonaldtrump", "title": "Kim Jong Un of North Korea made a very wise and well reasoned decision. The alternative would have been both catastrophic and unacceptable!", "ts": 1502883540, "twitterid": "897784898865553409" }
            ]
        }
    ];

    const tt_markup = () =>
        html`
            ${today_trumpsaid_data.map((i) => html`
                <div class="trumpsaid-tt-item">
                    <p class="header-title">${i.header}</p>
                    <p class="header-msg">${i.msg}</p>
                    <div class="tt-tweets-container">
                    ${i.data.map((tweet) => html`
                        <div class="tt-tweet-item">
                            <p class="origin">${tweet.title},&nbsp;</p>
                            <p class="ts" banana-ts="${tweet.ts}"></p>
                        </div>
                    `)}
                    </div>
                </div>
            `
            )}
        `;

    render(tt_markup(), document.querySelector('.today-trumpsaid-timetravel .trumpsaidtt-item-container'));
    //postrender_head_data();
    document.querySelector('.minion-dataload').setAttribute('status', '');
}