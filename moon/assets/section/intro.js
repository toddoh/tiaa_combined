$(function () {
    var finale = moment().set('year', 2022).set('month', 5).set('date', 9);
    var tomorrow = moment().add(1, 'day').startOf('day'),
    difference = moment.duration(finale.diff(tomorrow));

    $('#banana-moon-intro .remainingtime strong').text('임기 만료까지 ' + difference.asDays().toFixed(0) + '일, 약 ' + difference.asYears().toFixed(0) + '년  남음');

    $('#banana-moon-container').scroll(function() {
        var introt = $('#banana-moon-intro').offset().top - 50,
            introh = $('#banana-moon-intro').outerHeight();
        var wH = $('#banana-moon-container').height(),
            wS = $(this).scrollTop();
        if (wS > (introt+introh-wH)){
            var indexDelay = 70;
            $('#banana-moon-intro #keypolicies').addClass('animate');
            $('#banana-moon-intro .progress').addClass('animate');
            $('#banana-moon-intro #keypolicies').children('li').each(function (index, item) {
                if (index === 0) {
                    $(this).css('animation-delay', '10ms');
                } else {
                    $(this).css('animation-delay', indexDelay + 'ms');
                }
                indexDelay = indexDelay+30;
            });
            
        }
    });
    
});

/* forwards 
var indexDelay = 70;
$($('#banana-moon-intro #keytasks').children('li').get().reverse()).each(function (index, item) {
    if (index === 0) {
        $(this).css('animation-delay', '10ms');
    } else {
        $(this).css('animation-delay', indexDelay + 'ms');
    }
    indexDelay = indexDelay+30;
});
*/