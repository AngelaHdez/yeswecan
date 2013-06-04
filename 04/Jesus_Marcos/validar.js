$(document).ready(function() {

	var form = $('#formOne');
	var inputNombre = $("input#nombre");
	var inputApellidos = $("input#apellidos");
	var inputPoblacion = $("input#poblacion");
	var enviar = $("input#button");
	
	 form.submit(function(e){
	 
		$("p.poblacionError").empty();
		$("p.apellidosError").empty();
		$("p.nombreError").empty();
		
		if (inputNombre.val() == "")
		{
			e.preventDefault();
			$("p.nombreError").append("El nombre es obligatorio");
		}
		if (inputApellidos.val() == "")
		{
			e.preventDefault();
			$("p.apellidosError").append("Los apellidos son obligatorios");
		}
		if (inputPoblacion.val() == "")
		{
			e.preventDefault();
			$("p.poblacionError").append("La población es obligatoria");
		}
	});
});

