/**para trabajr con la lectura de archivos utilizamos le modulo fs (sileSystem)
 * que ya viene en el core de node js
 */

var fs = require('fs');

const archivo = fs.readFileSync('./archivoPrueba.txt', "utf-8");
/*el metodo readFileSync nos permitira leer un archivo pero no es muy recomnable 
con archivos que sean pesados ya qeu esta es la maenra mas sencilla de realizar
y esto arruinaria el funcionamineto de la pp, puesto que se demoraria mucho en leerlo.
para leer con este metodo nos pedira dos cosas muy simples que serian; como primer 
parametro la ruta del archivo y como segundo parametro la codificacio que tieneste archivo
para poder leerlo de una manera correcta, ya sea codificacion utf-8 o demas..

esta forma de leerr archivos es de manera sincronica, por lo que nos ahra esperar a qeu ternime 
la lectura antes de seguir jecutando el resto de los demas bloques de codigo que sigen desoues
de la lectura del archivo, siendo un mala idea para rchivos demasiados pesados ya que esto 
ahria que la aplicacion se detuviera y ahsta que el archivo no se terminara de leer no se 
acabaria de ejecutar el demas codigo*/

console.log(archivo);
