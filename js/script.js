$(document).ready(function() {
    // Slider
    $('.discount__inner').slick( {
        slidesToShow: 4,
        variableWidth: true,
        dots: true,
        slidesToScroll: 4,
        infinite: true,
    });

    $('.cost__right-slider').slick( {
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

    // Modal

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on("click", function(event) {
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).toggleClass('show');
        $(this).toggleClass('active');
        
        console.log(modalId);
    });

    modalClose.on("click", function(event) {
        let $this = $(this);
        let modalParent = $this.parents('.modal, .popup');

        modalParent.removeClass('show');
    });

    $('.modal').on("click", function(event) {
        $(this).removeClass('show');
    });

    $('.modal__dialog').on("click", function(event) {
        event.stopPropagation();
        $(this).removeClass('show');
    });


    /* Checkbox */

    $.each($('.modal__checkbox'), function(index, val) {
        if($(this).find('input').prop("checked")==true){
            $(this).addClass('active');
        }
    });

    $(document).on("click", '.modal__checkbox', function(event) {
        if($(this).hasClass('active')){
            $(this).find('input').prop("checked", false);
        }else{
            $(this).find('input').prop("checked", true);
        }
        $(this).toggleClass('active');

        return false;
    });
});