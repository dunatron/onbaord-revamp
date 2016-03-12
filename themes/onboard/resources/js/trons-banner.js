/**
 * Created by heath on 12/03/16.
 */
function setDimensions(){
    var windowsHeight = $(window).height();
    $('.tronsSlider').css('height', windowsHeight * 0.85);
    $('.carousel-inner').css('height', windowsHeight * 0.85);
    $('.tron-item').css('height', windowsHeight * 0.85);
}

setDimensions();

//when resizing the site, we adjust the heights of the sections
$(window).resize(function() {
    setDimensions();
});