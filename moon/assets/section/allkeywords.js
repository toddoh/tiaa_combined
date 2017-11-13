$(function () {

    $('#banana-moon-keywords').on('click', '.policyinfo', function () {
        var foldstatus = $(this).parent('.policygroup').attr('banana-status');
        if (foldstatus == 'folded') {
            $(this).parent('.policygroup').attr('banana-status', 'unfolded');
        } else if (foldstatus == 'unfolded') {
            $(this).parent('.policygroup').attr('banana-status', 'folded');
        }
    });

    $('#banana-moon-keywords #keywords').on('click', '.keyword', function () {
        $('#banana-moon-policylist').attr('banana-status', '');
        $('#banana-moon-keywordmodebar').attr('banana-status', '');
        $('#banana-moon-keywordmodebar .key').text('');
        $('#banana-moon-policylist').find('.task').attr('banana-status', '');
        
        var key = $(this).find('strong').text();
        $('#banana-moon-policylist').find('.task').each(function() {
            if ($(this).attr('banana-taskdata').indexOf(key) != -1) {
                $(this).attr('banana-status', 'highlighted');
            }
        });
        
        $('#banana-moon-policylist').attr('banana-status', 'highlighted');
        $('#banana-moon-keywordmodebar').attr('banana-status', 'highlighted');
        $('#banana-moon-keywordmodebar').attr('banana-type', 'keywords');
        $('#banana-moon-keywordmodebar .key').text(key);
        $('#banana-moon-container').scrollTo($('#banana-moon-policylist').find('.task[banana-status="highlighted"]')[0], 100);
    });

    $('#banana-moon-keywordmodebar').on('click', function (e) {
        if ($(e.target).hasClass('keywords-action-share') || $(e.target).parent().hasClass('keywords-action-share') || $(e.target).parent().hasClass('keywords-guide') || $(e.target).hasClass('keywords-guide') || $(e.target).parent().parent().hasClass('story-action-share')) {
            if ($('#banana-moon-keywordmodebar').attr('banana-type') == 'keywords') return;
            var keyword = $('#banana-moon-keywordmodebar .key').text();
            var clipboard = new Clipboard('#banana-moon-keywordmodebar');

            clipboard.on('success', function(e) {
                alert(keyword + "와 연관된 과제만 보는 링크가 복사되었습니다! 페이스북, 트위터 혹은 다양한 온라인 공간에서 Ctrl+V (macOS의 경우 Cmd+V) 하여 링크를 붙여넣을 수 있습니다.");

                e.clearSelection();
            });

            clipboard.on('error', function(e) {
                var url = window.location.href;
                window.open("https://www.facebook.com/sharer.php?u=" + url,'_blank');
            });
        } else {
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

            var newURL = setParameter(window.location.href, 'cat', '');
            window.history.replaceState('', '', newURL);
            $('#keywordsharelink').attr('value', '');
            $('#banana-moon-keywordmodebar').attr('banana-type', '');
            $('#banana-moon-policylist').attr('banana-status', '');
            $('#banana-moon-keywordmodebar').attr('banana-status', '');
            $('#banana-moon-keywordmodebar .key').text('');
            $('#banana-moon-policylist').find('.task').attr('banana-status', '');
            $('#banana-moon-container').scrollTo($('#banana-moon-policylist'), 100);
        }
    });
    
});