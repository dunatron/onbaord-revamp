/**
 * Created by heath on 12/03/16.
 */
function setDimensions(){
    var windowsHeight = $(window).height();
    $('.tronsSlider').css('height', windowsHeight -50);
    $('.carousel-inner').css('height', windowsHeight -50);
    $('.tron-item').css('height', windowsHeight - 50);
}

setDimensions();

//when resizing the site, we adjust the heights of the sections
$(window).resize(function() {
    setDimensions();
});

// Function to pre load images after everything else has been done
$(window).load(function() {
    // + any other carousel related stuff that has to wait for the images to complete loading
    $('.carousel').carousel()
})