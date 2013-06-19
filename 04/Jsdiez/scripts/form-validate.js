var inputForm = document.getElementsByTagName('input');
var sendForm = document.getElementsByClassName('send_form');
var inputNoValid = [];
var form = document.fake;



//capturo evento submit
function callFormValidate() {
  formValidate();
  return false;
}

//reviso que los campos no esten vacios
formValidate = function(){
	for (i =0; i < inputForm.length -1;i++) {
		if(inputForm[i].value == "") {
			inputForm[i].className = 'error';
			inputNoValid.push(inputForm[i].getAttribute("name"));
		} else {
			inputForm[i].className = 'correcto';
		}		
	}
		formValidateMenssage();
		return false;
}

//Lanzar mensaje con los campos que faltan por rellenar
formValidateMenssage = function(){
	if(inputNoValid == ""){
		form.submit();
	}else{
		alert('Por favor, rellene los campos '+inputNoValid);
		inputNoValid = [];
	}
}



// Funcion para rescatar variables por url
rescatarInfo = function(){
	function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

	var nombre = getQueryVariable("nombre")
	var apellidos = getQueryVariable("apellidos");
	var poblacion = getQueryVariable("poblacion");
	
	document.getElementById("poblacion").innerHTML=poblacion;
	document.getElementById("nombre").innerHTML=nombre + " " + apellidos;	
}