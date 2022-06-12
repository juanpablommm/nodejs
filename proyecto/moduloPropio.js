const moduloPropio = {
    mutipliacion: function(numero1, numero2) {
        console.log(numero1 * numero2);
    }
}

/*indico que mi modulo sera exportado para que otros modulos lo 
puedan usar.

baciamente estamos creando un objeto con metodos y lo estaemos utilizando desde
otro modulo*/
module.exports = moduloPropio;