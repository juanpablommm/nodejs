const { response } = require("express");
const express = require("express");

/**tenemos que ahcer la incializacion de la variable que 
 * importa el modulo de express, done basicamente estamos
 * creando otra varible y llamamos al cntructor de express
 */
const app = express();

/**en express tenemos el concepto de unrouter, que es pabisamente que por cada
 * peticion que se haga una peticion vamos a entrotar el trafico asia diferente secciones, 
 * pantallas contenido etc.
 * 
 * vamos a decirle que esta aplicacion va a escuchar en todos los verbos del protocolo http
 * para eso utilizamos el metodo all, y recibira dos parametros lo cuales seran, el primero
 * la ruta bajo la cual escuchara la peticion bajo que ruta se hace esta peticion y el segundo
 * parametro sera una funcion anonima que tmabien recibira dos paramtros estos son el request
 * y el response para maenjar la logica que se ejecutara tras la peticion
 */
app.all("/index", function(request, response){
  response.send("hello world");/*con el metodo sen podemos responder a la petcion */
});

/**podemos indicar que la peticion escuche en un verbo en especifico */
app.get("/informacion", function(request, response){
  console.log("hello, estoy escuchando por get")
});

app.post("/informacion", function(request, response){
  console.log("hello, estoy escuchando por pos")
});

/*posterior a eso lo que tenemos que hacer es crear otra varibale que
representara nuestro servidor y en donde llamamos al metood listen de
express y a este se le pasa como era ahbital de la manera tradicioal el puerto
por el cual se escuchara la peticion, pero mas una funcion anonima */
const server = app.listen(8080, function(){

});