jQuery(document).ready(function(){
	jQuery('#header').delay(200).animate({
		opacity: 1,
		top: '50%'
	}, 1000);
	
	jQuery('.call_form').click(function(){
		jQuery('.call_form').fadeOut('slow');
		jQuery('#header').addClass('visible-form');
		jQuery('#header').animate({
		}, 1000, function() {
			jQuery('#content').fadeIn('slow');	
		})
	});

})