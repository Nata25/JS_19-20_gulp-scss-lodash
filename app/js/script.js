$(function() {

//*********** Carousel *********** //
    $('.slider').jcarousel({
        transitions: true,
        animation: {
            duration: 600,
            easing:   'cubic-bezier(.46,.16,.66,.92)'
        },
        wrap: 'circular'
    });

    $('.slider__controls')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination({
            'item': function(page, carouselItems) {
                return '<a class="slider__switch" href="#' + page + '"></a>';
            }
        });

        // Accordion

        $(".accordion__summary").click(function(e) {
            $("details[open]").not($(this).parent()).removeAttr("open");
        });

}); // end of ready
