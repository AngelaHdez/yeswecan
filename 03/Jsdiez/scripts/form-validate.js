var convencido = '<span>Muy bien!</span> Acabas de ganr una chocolatina, pídesela a Minoru';
var noConvencido = '<span>ooooh!</span> Te lo tienesa que currar un poco más ';


jQuery(document).ready(function(){
	jQuery('#chocoForm').submit(function(e){
		var nombre = jQuery('#form_name').val();
		e.preventDefault();
		jQuery('form').fadeOut('slow');	
		jQuery('.mensaje').html( noConvencido + nombre ).fadeIn('slow');	
	})
})