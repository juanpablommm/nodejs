/**para trabajr con la lectura de archivos utilizamos le modulo fs (sileSystem)
 * que ya viene en el core de node js
 */

var fs = require('fs');

/*const archivo = fs.readFileSync('./prueba.mp4', "utf-8");*/

const archivo = fs.readFile('./archivoPrueba.txt', "utf-8", function(erro, datos){
    /*esta funcion como tercer parametro es la que va ha relizar el proceso de collback, es 
    lo que se va a ejecutar despues de que leamos el archivo,
    basicamente lo que vamos hacer es que despues de que leamos el archivo vamos a obtner informacion
    sobre el.
    esta funcion recibe como parametros dos tados, el peimero seria el errror, en caso de que
    tengamos un erro al intentar leer el archivo, que puede ir de la ruta o en caso de que los datos
    esren corrompidos
    y el sgundo parametro son los datos*/


    console.log("esta es lo que contien el texto ", datos);

});
/*la forma correcta de leer un archivo dentro de node js, es mediante el concepto de
un collback, mdeiante un proceso que no va a tener el proceso que no va atener la ejecucion
del codigo node*/


/**al ser una lectura asincronica primero se ejecuta este bloque de codigo mientras la 
 * lectura del archivo se ejcuta
 */
console.log("esto es loq eu seguiria despues de leer el archivo " + archivo);
