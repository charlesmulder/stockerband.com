
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#000', '#000', '#000'],
        css3: true,
        scrollingSpeed: 1000,
        menu: '#menu',
        lockAnchors: true,
        loopHorizontal: true,
        controlArrows: true,
        anchors:['logo', 'merch', 'orders'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['logo', 'merch', 'orders']
    });
    /*
     * only play sound and fade in once per browser session
     */
    if ( ! sessionStorage.getItem('played')) {
        $('div#fullpage > div').first('div').css('animation', 'fadein 7.345s ease-in');
        var v = document.getElementsByTagName("audio")[0];
        v.play();
        $("#stutter").bind('ended', function(){
            $.fn.fullpage.moveSectionDown();
            sessionStorage.setItem('played', true);
        });
    }
});


