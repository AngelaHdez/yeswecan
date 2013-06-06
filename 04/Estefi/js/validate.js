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
		if($(this).val().length > 0) {  
			$(this).css('background', '#B4EFA0');
		} else {  
			$(this).css('background', '#ED9E9E');
		} 
	});
/*--------------------------------------------------------------*/
	
/* Ocultar el aviso cuando el foco está dentro del input superior */	
	$("#nombre").focusin(function(){
		$('.msg-name').css('opacity', '0');
	});
	$("#apellidos").focusin(function(){
		$('.msg-lastname').css('opacity', '0');
	});
	$("#localidad").focusin(function(){
		$('.msg-location').css('opacity', '0');
	});	
	
	
/*Validar formulario, avisos con mensaje sobre el input correspondiente*/
	$("#formulario").submit(function(e){
		$(".error-msg").css('opacity', '0');
		if($("#nombre").val().length == 0) {  
			e.preventDefault();
			$(".msg-name").css('opacity', '1');
			$('#nombre').css('background', '#ED9E9E');
		} if($("#apellidos").val().length == 0) {  
			e.preventDefault();
			$(".msg-lastname").css('opacity', '1');
			$('#apellidos').css('background', '#ED9E9E');
		} if($("#localidad").val().length == 0) {  
			e.preventDefault();
			$(".msg-location").css('opacity', '1');
			$('#localidad').css('background', '#ED9E9E');
		} 
	})

		
	
/*Validar formulario, avisos con alerts */
	/*$("#formulario").submit(function () {  
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
	});	*/
/*------------------*/	
	

	
	
	
	
	
});
