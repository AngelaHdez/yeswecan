var inputForm = document.getElementsByTagName('input');
var sendForm = document.getElementsByClassName('send_form');
var form = document.fake;



//capturo evento submit
function callFormValidate()
{
  formValidate();
  return false;
}

//reviso que los campos no esten vacios
formValidate = function(){
	for (i =0; i < inputForm.length;i++) {
		if(inputForm[i].value == "") {
			alert('hay un campo vacio')
			return false;
		}
	}
}