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
	alert('Por favor, rellene los campos '+inputNoValid);
	inputNoValid = [];
}