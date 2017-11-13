$(function () {
    
    $("#banana-moon-sharelist").jsSocials({
        showCount: true,
        showLabel: true,
        shares: ["twitter", "facebook", "messenger", "telegram"]
    });

    $('#banana-moon-gobacktop').on('click', function () {
        $('#banana-moon-container').scrollTo($('#banana-moon-intro'), 100);
    });

    $('#banana-moon-sharelink .sharelink').on('click', function () {
        var clipboard = new Clipboard('#banana-moon-sharelink .sharelink');

        clipboard.on('success', function(e) {
            alert("문재인 이행률 트래커 링크가 복사되었습니다! 페이스북, 트위터 혹은 다양한 온라인 공간에서 Ctrl+V (macOS의 경우 Cmd+V) 하여 링크를 붙여넣을 수 있습니다.");

            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            window.open("https://www.facebook.com/sharer.php?u=https://thisisallabout.com/moon/",'_blank');
        });
    });
});