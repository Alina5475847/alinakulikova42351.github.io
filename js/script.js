$(document).ready(function() {
    $('.discount__inner').slick( {
        slidesToShow: 4,
        variableWidth: true,
        dots: true,
        slidesToScroll: 4,
        infinite: true,
    });

    $('.reviews__inner').slick( {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                slidesToShow: 1,
                }
            },
        ]
    });
});