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
});