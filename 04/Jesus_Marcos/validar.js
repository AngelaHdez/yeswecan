$(document).ready(function() {
	//Guardo el valor de cada input en una variable
	var form = $('#formOne');
	var inputNombre = $("input#nombre");
	var inputApellidos = $("input#apellidos");
	var inputPoblacion = $("input#poblacion");
	var enviar = $("input#button");
	
	 form.submit(function(e){
	 //Oculto el mensaje de error cada vez que pulsa el submit
		$("p.poblacionError").css({display:"none"});
		$("p.nombreError").css({display:"none"});
		$("p.apellidosError").css({display:"none"});
		
	//Si alguno de los campos es igual a cadena vacía, se detiene el envío y se muestra el mensaje correspondiente
		if (inputNombre.val() == "")
		{
			e.preventDefault();
			$("p.nombreError").fadeIn("slow");
			$("input#nombre").css({'background-color': '#FEB6B6'});
		}
		if (inputApellidos.val() == "")
		{
			e.preventDefault();
			$("p.apellidosError").fadeIn("slow");
			$("input#apellidos").css({'background-color': '#FEB6B6'});
		}
		if (inputPoblacion.val() == "")
		{
			e.preventDefault();
			$("p.poblacionError").fadeIn("slow")
			$("input#poblacion").css({'background-color': '#FEB6B6'});
		}
	});
	
	//Oculto el mensaje de error cuando el foco está en el input
	$("input#nombre").focusin(function(){
		$('.nombreError').fadeOut("slow");
		$("input#nombre").css({'background-color': '#FFF'});
	});
	$("input#apellidos").focusin(function(){
		$('.apellidosError').fadeOut("slow");
		$("input#apellidos").css({'background-color': '#FFF'});
	});
	$("input#poblacion").focusin(function(){
		$('.poblacionError').fadeOut("slow");
		$("input#poblacion").css({'background-color': '#FFF'});
	});	
});

