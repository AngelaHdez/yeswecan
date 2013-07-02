$(document).ready(function() {

    // Creamos una variable global, asignándole el form. Muy útil para luego
    // hacer todas las operaciones sobre ella.
    var form = $('#yeswecan-signup');
    
    // Evitamos que el submit tenga su comportamiento por defecto, para llamar
    // a nuestra validación.
    form.submit(function(e) {
        e.preventDefault();
        
        // Sobre uno de los elementos del form, hacemos su validación.
        // TODO: recorrer todos los elementos del form.
        elem = $('#name');
        if ( validate(elem[0]) ) {
            success();
        }
    });

    // Construimos nuestro propio conjunto de validaciones.
    function validate( elem ) {
       if ( elem.validity ) {
            if ( elem.validity.valid === true ) {
               console.log('is valid'); 
                return true;
            } else {
               console.log('is NOT valid'); 
            }
        }

        return false;
    }

    // Cuando todo ha ido OK, limpiamos el DOM y mostramos un mensaje.
    function success() {
        form.remove();
        $('#success').show();
    }
});

