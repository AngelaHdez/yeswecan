var nombre = jQuery('#form_name').val();
var convencido = '<span>Muy bien!</span> Acabas de ganr una chocolatina, pídesela a Minoru';
var noConvencido = '<span>ooooh!</span> Te lo tienesa que currar un poco más '+nombre;

jQuery('.send_form').click(function(e){
	e.preventDefault();
	jQuery('form').fadeOut('slow');	
	jQuery('.mensaje').text(nombre).fadeIn('slow');	
})