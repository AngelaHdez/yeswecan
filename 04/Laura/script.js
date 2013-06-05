//trasteando con jscript

//hacemos aparecer el formulario y la caja de respuesta
    $(document).ready(function(){
        $("#miformulario").fadeIn(2000);
		$("#bg-box").fadeIn(2000);
        
    });
	$("#enviar").click(function(event) {
  event.preventDefault();
	 });
	
//identificamos los campos del formulario
	 $(function(){
        $('#nombre').keyup(function(){
            var _this = $('#nombre');
            var _user = $('#nombre').val();
                        _this.attr('style', 'background:white');
            if(_user.indexOf(' ') >= 0){
                _this.attr('style', 'background:#FF4A4A');
            }
 
            if(_user.indexOf("'") >= 0){
                _this.attr('style', 'background:#FF4A4A');
            }
 
            if(_user.val() == ''){
                _this.attr('style', 'background:#FF4A4A');
            }
        });
    });

//detectamos los campos vacios


//si están rellenos enviamos formulario