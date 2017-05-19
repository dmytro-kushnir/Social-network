$(document).ready(function () {

    //Enable swiping...
    $(".carousel-inner").swipe({
        //Generic swipe handler for all directions
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('prev');
        },
        swipeLeft: function () {
            $(this).parent().carousel('next');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });
});