var fs = require('fs');

/**el metodo writeFile nos permitra esribir un archivo, donde le tendremos
 * que psar como parametro a este metodo la ruta del archivo en primer ligar,
 * es decir la ruta donde se guardara este, como segundo segundo parametor tendremos
 * que espefificar el contenido que escribiremos en el archivo y como 
 * tercer parametro lo que le pasamos
 * es un afuncion para el collback  lo quenosotro queremos que haga despues de crear, saber si
 * hubo un error al crearlo o si todo fue sitoso, mediante un parametro que lleva esta funcion
 * para saber si ahy un error presente en la creacion del archivo o si por el contrario
   todo salio bien.

   para que se cree el archivo la ruta tiene que exitir
 */
fs.writeFile('./primerAchivoEscrito.txt', 'esta es la primera linea, hello', (error)=>{
    /**aplicamos la logica donde simplmente validamos si ocurrio un error o no
     * y saber como actuar en consiguiente...
     */
    if (error) {
        console.log("ha ocurrido un error al escribir el archivo...");
        console.log(error.message);
    } else {
        console.log("la creacion ha sido exitosa...");
    }
});