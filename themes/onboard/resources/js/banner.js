/**
 *  Banner module in homepage "single page"
 *
 *  - Full screen banner with space at the bottom
 *  - On scroll show heading
 *  - On scroll show angle line from bottom to up
 */
jQuery(document).ready(function($){
    // Defining a function to set size for #hero
    function fullscreen(){
        jQuery('#myCarousel').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()/1.3333
        });

        jQuery('.carousel-inner').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()/1.3333
        });
    }

    fullscreen();

    // Run the function in case of window resize
    jQuery(window).resize(function() {
        fullscreen();
    });

});

$(window).scroll(function(event) {
    var letA = $('#letA');
    var letR = $('#letR');
    var letE = $('#letE');

    var letY = $('#letY');
    var letO = $('#letO');
    var letU = $('#letU');

    var fadeStart=100; // 100px scroll or less will equiv to 1 opacity
    var fadeUntil=200; // 200px scroll or more will equiv to 0 opacity
    var fading = $('#fading');
    var scrollAmount = $(window).scrollTop();
    var documentHeight = $(document).height();
    var scrollPercent = (scrollAmount / documentHeight) * 100;
    $(".knob").val(scrollPercent);
    $(".knob1").val(scrollAmount);

    //var offset = $(document).scrollTop(),opacity=1;

    opacity=scrollAmount/200;
    var opacityA = scrollAmount/50;
    var opacityR = scrollAmount/150;
    var opacityE = scrollAmount/450;

    var opacityY = scrollAmount/50;
    var opacityO = scrollAmount/150;
    var opacityU = scrollAmount/450;

    fading.css('opacity',opacity).html(opacity);
    // Opacity
    // ARE
    //letA.css('opacity',opacityA).html(opacityA);
    //letR.css('opacity',opacityR).html(opacityR);
    //letE.css('opacity',opacityE).html(opacityE);
    // YOU
    //letY.css('opacity',opacityY).html(opacityY);
    //letO.css('opacity',opacityO).html(opacityO);
    //letU.css('opacity',opacityU).html(opacityU);

    // ARE
    letA.css('opacity',opacityA);
    letR.css('opacity',opacityR);
    letE.css('opacity',opacityE);
    // YOU
    letY.css('opacity',opacityY);
    letO.css('opacity',opacityO);
    letU.css('opacity',opacityU);

    // Better when opacity = 1 make z-index higher than background
    // Letter A
    if(opacityA >= 1) {
        letA.css('z-index',99999999);
    }
    if(opacityA < 1) {
        letA.css('z-index',0);
    }
    // Letter R
    if(opacityR >= 1) {
        letR.css('z-index',99999999);
    }
    if(opacityR < 1) {
        letR.css('z-index',0);
    }
    // Letter E
    if(opacityE >= 1) {
        letE.css('z-index',99999999);
    }
    if(opacityE < 1) {
        letE.css('z-index',0);
    }
    // Letter Y
    if(opacityY >= 1) {
        letY.css('z-index',99999999);
    }
    if(opacityY < 1) {
        letY.css('z-index',0);
    }
    // Letter O
    if(opacityO >= 1) {
        letO.css('z-index',99999999);
    }
    if(opacityO < 1) {
        letO.css('z-index',0);
    }
    // Letter U
    if(opacityU >= 1) {
        letU.css('z-index',99999999);
    }
    if(opacityU < 1) {
        letU.css('z-index',0);
    }



});
