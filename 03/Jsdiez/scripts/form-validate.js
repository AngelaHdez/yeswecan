var convencido = '<span>Muy bien!</span> Acabas de ganr una chocolatina, pídesela a Minoru';
var noConvencido = '<span>ooooh!</span> Te lo tienesa que currar un poco más ';
var nombre,	edad, mail, comentario;

jQuery(document).ready(function(){
	jQuery('#chocoForm').submit(function(e){
		nombre = jQuery('#form_name').val();
		edad = jQuery('#form_age').val();
		mail = jQuery('#form_mail').val();
		comentario = jQuery('#form_text').val();
		
		e.preventDefault();
		
		jQuery('form').fadeOut('slow');
		
		if(comentario.length < 20){
			jQuery('.mensaje').html( noConvencido + nombre ).fadeIn('slow');	
		}else{
			jQuery('.mensaje').html( convencido ).fadeIn('slow');
		}
	})
})