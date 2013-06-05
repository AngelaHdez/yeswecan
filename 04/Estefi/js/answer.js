/* Función para sacar los datos de la url, con GET */
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }
});



$(document).ready(function() {
	/* Declaro las variables, recogiendo el valor de la url */
	var name = $.getUrlVars()["nombre"];
	var lastname = $.getUrlVars()["apellidos"];
	var location = $.getUrlVars()["localidad"];
		
	/* Elimino los símbolos + que se insertan en los espacios del apellido */	
	lastname = lastname.replace('+', ' ');
		
	/* Escribo los datos recogidos */	
	$('.answer-page ul li').html(name + '<br />' + lastname + ',<br />' +  'de ' + location);
		

});