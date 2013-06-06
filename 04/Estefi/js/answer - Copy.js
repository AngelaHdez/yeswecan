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

function miReplace(string, x, y) {
	var kk = string.split(x);
	var uu = "";
	for (var i = 0; i<kk.length; i++){
		uu += kk[i] + y;
	}
	return uu;
}

$(document).ready(function() {
	/* Declaro las variables, recogiendo el valor de la url */
	var name = $.getUrlVars()["nombre"];
	lastname = $.getUrlVars()["apellidos"];
	var location = $.getUrlVars()["localidad"];
	
	var mifuncion = miReplace('jose6l6is6car6ajal', '6', '7');
	console.log(mifuncion);
		
	/* Elimino los símbolos + que se insertan en los espacios del apellido */
	

	
		
	/* Escribo los datos recogidos */	
	//$('.answer-page ul li').html(name + '<br />' + uu + ',<br />' +  'de ' + location);
		

});