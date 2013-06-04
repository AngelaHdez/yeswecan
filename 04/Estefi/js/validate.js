$(document).ready(function(){  
/*Añadir clase si el input está vacío*/
	/*if($("input").val().length == 0) {
		$("#submit").addClass("disabled");
	} else {
		$("#submit").removeClass("disabled");
	}*/
/*-----------------------------------*/	

/*Cambiar el color de la sombra dependiendo del estado del input*/
	$("input[type=text]").focusin(function(){
		$(this).css('box-shadow', '0 0 3px red');
		$(this).keypress(function() {
			$(this).css('box-shadow', '0 0 3px green');
		});
		if($(this).val().length > 0) {  
			$(this).css('box-shadow', '0 0 3px green');
		} 
	});
	$("input[type=text]").focusout(function(){
		$(this).css('box-shadow', '0 0 0 0');
	});
/*--------------------------------------------------------------*/	

/*Validar formulario*/
	$("#formulario").submit(function () {  
		if($("#nombre").val().length == 0) {  
			alert("El nombre es obligatorio");  
			return false;  
		}  
		if($("#apellidos").val().length == 0) {  
			alert("Los apellidos son obligatorios");  
			return false;  
		}  
		if($("#localidad").val().length == 0) {  
			alert("La localidad es obligatoria");  
			return false;  
		}  
	});	
/*------------------*/	
	
});
