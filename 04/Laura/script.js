//identificamos los campos del formulario
    $(document).ready(function(){
	 
		
		$("#miformulario").submit(function(event){
			
			var nombre = $("#nombre").val();
			var apellido = $("#apellido").val();
			var poblacion = $("#poblacion").val();
			
			
			//si el campo esta vacio sacamos mensaje de error
			if(nombre == ""){
			  $(".required").css("background","red");	
			  $("#mensaje").fadeIn(100);
			  event.preventDefault();
			  
			  
			 //si está relleno ocultamos mensaje
			}else{
				  $(".required").css("background","none");
				  $("#mensaje").fadeOut(100);
				  
			}
			
			if(apellido == ""){
			  $(".required").css("background","red");	
			  $("#mensaje").fadeIn(100);
			  event.preventDefault();
			  
			  
			 //si está relleno ocultamos mensaje
			}else{
				  $("#apellido").css("background","#728eaa");
				  $("#mensaje").fadeOut(100);
				  
			}
			
			if(poblacion == ""){
			  $(".required").css("background","red");	
			  $("#mensaje").fadeIn(100);
			  event.preventDefault();
			  
			  
			 //si está relleno ocultamos mensaje
			}else{
				  $("#poblacion").css("background","#728eaa");
				  $("#mensaje").fadeOut(100);
				  
			}
			
			
		 
		 });
		 
		  
		
	 });
	
	





	 