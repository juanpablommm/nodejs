const http = require("http");

/**pasamos como parametro a la funcion anonima dos parametros
 * el primero representara al request, el cual traera toda la metada de la peticion
 * como la url a la que trataron de acceder, el cliente que utilizaron, la hora
 * y demas...
 * el segundo parametro sera igual al response con el cual responderemos a la peticion
 */
const servidor = http.createServer( function(request, response){
    response.writeHead( 200, {"Content-type": "text/html"}); /**mediante el metodo de writeHead indicamos
    que vamos a escribir en la cabecera de respuesta, en estos momentos estamos
    diciendo que vamos a responder con un codigo de esttatus 200 indicando que todo 
    salio bien y como segundo parametro vamos a pasar es el tipo de objecto que vamos a mostrar
    es decir especificamos el tipo mimet a mostrar mediante un objecto*/

    response.write("<h1>Hello World url = " + request.url + "</h1>") ; /**con el metodo write como su mismo nombre lo
    incia podemos escribir la respuesta, en esta caso para ejmplos sencillos los hacemos con
    codigo html envevidom, tambien con fines demostrativos enseñamos la url de la peticion
    a traves de los metadatos que veinen de esta misma*/
});

servidor.listen(8080);/*fina.mente cerramos especificando el puerto por que se escuchara la petciion*/