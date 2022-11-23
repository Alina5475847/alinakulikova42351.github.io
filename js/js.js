jQuery(document).ready(function(){
	jQuery('.xc-header--hamburger').click(function(){
		if(jQuery('.xc-header--sub-nav-ul').hasClass('active')){
			jQuery('.xc-header--sub-nav-ul').removeClass('active');
			jQuery(this).attr('aria-expanded', 'false');
		} else {
			jQuery('.xc-header--sub-nav-ul').addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
		}
	});

	/* Скролл */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 150
        }, 1000);

        nav.removeClass('show');
        navToggle.removeClass('active');
    });
});