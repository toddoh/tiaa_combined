$(function () {
    $('#banana-moon-policylist .policylist-categories').on('click', '.category', function () {
        $('#banana-moon-policylist').attr('banana-status', '');
        $('#banana-moon-keywordmodebar').attr('banana-status', '');
        $('#banana-moon-keywordmodebar .key').text('');
        $('#banana-moon-policylist').find('.task').attr('banana-status', '');
        
        var key = $(this).find('strong').text();
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
        var setParameter = function (url, param, paramVal){
            // http://stackoverflow.com/a/10997390/2391566
            var parts = url.split('?');
            var baseUrl = parts[0];
            var oldQueryString = parts[1];
            var newParameters = [];
            if (oldQueryString) {
                var oldParameters = oldQueryString.split('&');
                for (var i = 0; i < oldParameters.length; i++) {
                if(oldParameters[i].split('=')[0] != param) {
                    newParameters.push(oldParameters[i]);
                }
                }
            }
            if (paramVal !== '' && paramVal !== null && typeof paramVal !== 'undefined') {
                newParameters.push(param + '=' + encodeURI(paramVal));
            }
            if (newParameters.length > 0) {
                return baseUrl + '?' + newParameters.join('&');
            } else {
                return baseUrl;
            }
        }

        var newURL = setParameter(window.location.href, 'cat', keymatch);
        window.history.replaceState('', '', newURL);
        $('#keywordsharelink').attr('value', newURL);

        $('#banana-moon-policylist').find('.task').each(function() {
            if ($(this).attr('banana-taskcategory').indexOf(key) != -1) {
                $(this).attr('banana-status', 'highlighted');
            }
        });
        
        $('#banana-moon-policylist').attr('banana-status', 'highlighted');
        $('#banana-moon-keywordmodebar').attr('banana-status', 'highlighted');
        $('#banana-moon-keywordmodebar .key').text(key);
        $('#banana-moon-container').scrollTo($('#banana-moon-policylist').find('.task[banana-status="highlighted"]')[0], 100);
    });
});