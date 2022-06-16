var fs = require('fs');
/**el metodo writeFiel nos permite escribir un archivo, pero si queremos aregar mas
 * informacion a este y conservar la queteniamos si lo aplicamos con este metodo
 * lo que nos encontraremos es que basicamente estaremos escribien un archivo nuevo o 
 * sobreescribiendo el anterior.
 * por ende si queremos agregar nueva informacion y conservar la anterior debemos 
 * utilizar el metodo appendFile que nos pertira hacer eso, recibiend como parametro
 * la ruta del archivo que tiene que exitir, el contenido que vamos agregar y la funcion
 * en la cual se ejecutara el collback, esta tendra su parametro para corroborrar si hubo
 * algun error o no y nosotros sepamos implemntar la logica que creamos correspondiente
 */
 fs.appendFile('./primerAchivoEscrito.txt', ' esta es la segunda linea, bey', (error)=>{
    /**aplicamos la logica donde simplmente validamos si ocurrio un error o no
     * y saber como actuar en consiguiente...
     */
    if (error) {
        console.log("ha ocurrido un error al escribir el archivo...");
        throw error.message;
    } else {
        console.log("la creacion ha sido exitosa...");
    }
});