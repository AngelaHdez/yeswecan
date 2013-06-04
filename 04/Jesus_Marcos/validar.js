$(document).ready(function() {

	var form = $('#formOne');
	var inputNombre = $("input#nombre");
	var inputApellidos = $("input#apellidos");
	var inputPoblacion = $("input#poblacion");
	var enviar = $("input#button");
	
	 form.submit(function(e){
	 
		$("p.poblacionError").css({display:"none"});
		$("p.nombreError").css({display:"none"});
		$("p.apellidosError").css({display:"none"});
		
		if (inputNombre.val() == "")
		{
			e.preventDefault();
			$("p.nombreError").fadeIn("slow");
		}
		if (inputApellidos.val() == "")
		{
			e.preventDefault();
			$("p.apellidosError").fadeIn("slow");
		}
		if (inputPoblacion.val() == "")
		{
			e.preventDefault();
			$("p.poblacionError").fadeIn("slow")
		}
	});
});

