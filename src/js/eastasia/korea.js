import {html, render} from 'lit-html';
import _ from 'lodash';
import eastasia_korea_style from '../../styles/eastasia/korea.css';

export function init_render() {
    const hero_markup = () => html`
    <div class="ea-korea-hero">
        <div class="ea-korea-herotext">
            <p class="hero1">"국민의 나라, 정의로운 대한민국"</p>
            <p class="hero1">문재인정부 국정과제 탐사</p>
            <div class="hero2">
                <p>이것은 촛불로 이뤄낸 민주주의, 그리고 대한민국의 미래에 대한 모든 것입니다.</p>
                <p>문재인정부의 100대 국정과제 이행 과정을 영역 별로 추적해보며 다함께 고민해봅시다.</p>
                <p>///// 데이터 전면 개편 작업 중입니다 (1/20 완료 예정) /////</p>
            </div>
        </div>
    </div>
    <div class="ea-korea-policydata">
        <div class="ea-korea-policykeywords">
            <div class="keywords-guide">
                <span>국정 과제 속 &nbsp;</span>
                <span>키워드</span>
                <span class="help">키워드를 누르면 연관 과제만 볼 수 있습니다</span>
            </div>

            <div class="keywords-container">
            </div>
        </div>
        <div class="ea-korea-policylist">
        </div>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    document.querySelector('.minion-timestamp .ts-date').innerHTML = '1월 8일 마지막 업데이트됨';
    render_data();
    //attach_events();
}

const render_data = () => {
    var policy_data = null;
    import('./korea_data').then(module => {
        policy_data = module.data_init();
        
        const policy_markup = () => html`
        <div id="policygroup">
            ${policy_data.map((i) => html`
                <div class="policy-container">
                    <p class="policyname"><strong class="bolder">${i.theme}</strong></p>
                    <div class="policy-strategycontainer" banana-status="unfolded">
                        <div class="strategy">
                        ${i.keys.map((tk) => html`
                            <div class="task" banana-taskdata="${JSON.stringify(tk.keywords)}" banana-taskcategory="${JSON.stringify(tk.category)}">
                                <div class="taskinfo">
                                    <p class="taskname"><strong class="bolder">${tk.name}</strong></p>
                                    <div class="departmentinfo">
                                    ${tk.department.map((dpt) => html`
                                        <p class="departmentname">${dpt}</p>
                                    `
                                    )}
                                    </div>
                                </div>

                                <div class="taskstatus" banana-taskstatus="${tk.status}">
                                    <div class="taskstatusbar"></div>
                                    <p>${tk.status}%</p>
                                </div>

                                <ul class="descriptions">
                                ${tk.description.map((desc) => html`    
                                    <li class="description">
                                        ${desc.statuslink ? html`
                                        <div class="description-action-link" banana-link="${desc.statuslink}">
                                            <p>&#xf0a9;</p>
                                        </div>
                                        ` : ``}
                                        <p class="descriptiontext" banana-taskdesc="${desc.statusdesc}">${desc.name}</p>
                                        <p class="descriptionstatus bolder" banana-taskcode="${desc.statuscode}">${desc.status}</p>
                                    </li>
                                `
                                )}
                                </ul>
                            </div>
                        `
                        )}
                        </div>
                    </div>
                </div>
            `
            )}
        </div>
        `;

        render(policy_markup(), document.querySelector('.ea-korea-policylist'));

        Array.prototype.forEach.call(document.querySelectorAll('.ea-korea-policylist .task'), function(el, index, array){
            var thisobj = el;
            var substatuses = [];
            var totalsubtasks_counts = el.querySelectorAll('.descriptionstatus').length;
            var totalsubtasks_progress = 100 * totalsubtasks_counts;
    
            Array.prototype.forEach.call(el.querySelectorAll('.descriptionstatus'), function(dsel, index, array){
                var code = dsel.getAttribute('banana-taskcode');
                var convertedcode = 0;
                switch (code) {
                case 'none':
                    convertedcode = 0;
                    break;
                case 'await':
                    convertedcode = 10;
                    break;
                case 'discussing':
                    convertedcode = 15;
                    break;
                case 'congress':
                    convertedcode = 65;
                    break;
                case 'wip':
                    convertedcode = 55;
                    break;
                case 'partiallywip':
                    convertedcode = 45;
                    break;
                case 'question':
                    convertedcode = 30;
                    break;
                case 'done':
                    convertedcode = 100;
                    break;
                }
    
                substatuses.push(convertedcode);
            });
    
            var totalsubtasks_sum = substatuses.reduce(function(a, b) {
                return parseInt(a, 10) + parseInt(b, 10);
            });
    
            var subtasksum_list = [];
            subtasksum_list.push(totalsubtasks_sum);
            subtasksum_list.push(totalsubtasks_progress);
    
            var subtasksum_list_max = Math.max(subtasksum_list);
            Array.prototype.toPercentage = function () {
                var arr = this
                return arr.map(function (d, i) {
                    return (100 * d / arr.reduce((a, b) => a + b, 0)) | 0;
                })
            }
            var subtasksum_list_scale = subtasksum_list.toPercentage();
    
            el.querySelector('.taskstatus').getAttribute('banana-taskstatus', subtasksum_list_scale[0]);
            el.querySelector('.taskstatus').querySelector('p').textContent = Math.round(subtasksum_list_scale[0] * 1000) / 1000 + '%';
            el.querySelector('.taskstatusbar').style.width = subtasksum_list_scale[0] + '%';
        });
    });
};

const attach_events = () => {
    var pl_cats = document.querySelectorAll('.policylist-categories .category');
    for (var i=0; i < pl_cats.length; i++) {
        pl_cats[i].addEventListener('click', function (e) {
            document.querySelector('.ea-korea-policylist').setAttribute('banana-status', '');
            Array.prototype.forEach.call(document.querySelectorAll('.ea-korea-policylist .task'), function(el, index, array){
                el.setAttribute('banana-status', '');
            });

            if (e.target.parentNode.getAttribute('banana-status') == 'highlighted') {
                Array.prototype.forEach.call(document.querySelectorAll('.ea-korea-policykeywords .keyword'), function(el, index, array){
                    el.setAttribute('banana-status', '');
                });
            } else {
                
                Array.prototype.forEach.call(document.querySelectorAll('.ea-korea-policykeywords .keyword'), function(el, index, array){
                    el.setAttribute('banana-status', '');
                });
                
                var el = e.target.parentNode;
                var key = el.querySelector('strong').innerHTML;
                var keymatch = '정치/정부';
                switch (key) {
                    case '정치/정부':
                    keymatch = 'polgov';
                    break;
                    case '과거사':
                    keymatch = 'pasthis';
                    break;
                    case '언론':
                    keymatch = 'press';
                    break;
                    case '인권':
                    keymatch = 'humanrights';
                    break;
                    case '개헌':
                    keymatch = 'constitution';
                    break;
                    case '외교':
                    keymatch = 'diplo';
                    break;
                    case '복지':
                    keymatch = 'welfare';
                    break;
                    case '일자리':
                    keymatch = 'jobs';
                    break;
                    case '생활':
                    keymatch = 'life';
                    break;
                    case '경제':
                    keymatch = 'economics';
                    break;
                    case '청년':
                    keymatch = 'younggen';
                    break;
                    case '노인':
                    keymatch = 'elder';
                    break;
                    case '주택/부동산':
                    keymatch = 'housing';
                    break;
                    case '통신':
                    keymatch = 'telecom';
                    break;
                    case '교통':
                    keymatch = 'transport';
                    break;
                    case '4차산업혁명':
                    keymatch = 'fourthindustrev';
                    break;
                    case '과학':
                    keymatch = 'science';
                    break;
                    case '북한':
                    keymatch = 'nk';
                    break;
                    case '여성':
                    keymatch = 'women';
                    break;
                    case '환경/안전':
                    keymatch = 'environ';
                    break;
                    case '아동':
                    keymatch = 'child';
                    break;
                    case '보육':
                    keymatch = 'childcare';
                    break;
                    case '교육':
                    keymatch = 'education';
                    break;
                    case '농산어촌':
                    keymatch = 'agriculture';
                    break;
                    case '노동':
                    keymatch = 'labor';
                    break;
                    case '문화':
                    keymatch = 'culture';
                    break;
                    case '관광':
                    keymatch = 'travel';
                    break;
                    case '해양':
                    keymatch = 'maritime';
                    break;
                    case '안보/국방':
                    keymatch = 'defense';
                    break;
                    case 'FTA':
                    keymatch = 'fta';
                    break;
                }

                Array.prototype.forEach.call(document.querySelectorAll('.ea-korea-policylist .task'), function(el, index, array){
                    if (el.getAttribute('banana-taskcategory').indexOf(key) != -1) {
                        el.setAttribute('banana-status', 'highlighted');
                    }
                });

                var selected = [];
                _.filter(policylist, function (p) {
                    var subkeywords = [];
                    _.filter(p.strategies, function (s) {
                        _.filter(s.task, function (t) {
                            if (_.includes(t.category, key)) {
                                selected.push(t);
                            }
                        });
                    });

                    
                });
                console.log(JSON.stringify(selected));
                e.target.parentNode.setAttribute('banana-status', 'highlighted');
                document.querySelector('.ea-korea-policylist').setAttribute('banana-status', 'highlighted');
            }
        });
    }
}


var getClosest = function ( elem, selector ) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }

    return null;
};