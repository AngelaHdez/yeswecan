/*
Creado el 06/06/2013							
Proyecto: yeswecan		
Copyright: 2013 Pablo Barcia

*/


$(document).ready(function(){

	// Colocamos los ID de los campos obligatorio aqui.
	var required = ["name", "lastname", "city"];
	// Texto a mostrar para los campos incorrectos
	var emptyerror = "Por favor rellene este campo.";

	$("#myForm").submit(function(){	
		
		//Validar campos obligatorio
		for (i=0;i<required.length;i++) {
			var input = $('#'+required[i]);
			if ((input.val() == "") || (input.val() == emptyerror)) {
				input.addClass("empty");
				$(".error").html(emptyerror);

			} else {
				input.removeClass("empty");

			}
		}
		
		//Si algun campo tiene la clase "empty" la eliminamos
		if ($(":input").hasClass("empty")) {
			return false;
		} else {
			emptyerror.hide();
			return true;
			}
		});

	   // Borra todos los campos en el formulario cuando el usuario hace clic en ellos
		$(":input").focus(function(){		
			   if ($(this).hasClass("empty") ) {
					$(this).val("");
					$(this).removeClass("empty");
					
			   }
		});
				
	});	

});	
