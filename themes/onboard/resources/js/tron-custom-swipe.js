/**
 * Created by heath on 14/03/16.
 */
/*
To be used with jquery.mobile.custom.min.js so must come after that script
TODO: create homepahe.js script and have it come after the main js script
 */
$(document).ready(function() {
    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });
});
