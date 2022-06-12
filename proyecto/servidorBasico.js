/**creacion de un servidor basico con la utilizacion
 * del modulo de htpp que veine en el core de node
 */

/**hacemos la importacion de el modeulo htpp */
const http = require("http");

/*creamos una variable servidor la cual sera igual el llamdo de metodo
createServer de nuestro modulo http, este le pasamos por parametro una funcion
anonima que tendra el codigo que se ejcutara cuandoe le servidor reciba una peticion */
const servidor = http.createServer( function (){
    console.log("servidor ejecutanode node...");
});

/**a la variable srvidor que creamos a traves del metodo listen le decimos porque puerto
 * va a escuchar las peticiones
 */
servidor.listen(8080);

console.log("se ha ejecutado el servidor...");