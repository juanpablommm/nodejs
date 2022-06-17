/*var libro = require('./libro.json');*/

/**para importar un json estatico, osea que esta en un archivo,
 * lo realizamos de la misma manera como si importaramos un modulo, solo
 * que agreagamos la estenxion
 * 
 * pero la forma correcta de leer un archivo json externo es hacerlo de manera asincronica,
 * tal y como hemos venido leyendo los arhivos con elmodulo fs y el metodo readFile, donde
 * nos permite una lectura asincronica
 */
var fs = require('fs');

fs.readFile('./libro.json', (error, datos)=>{
    if (error) {
        throw error;
    } else {
        /**si moestramos el dato asi como nos los entraga la lectura, nos mostrara que tenemos
         * qie hacerlo con un buffer ya que lo toma como informaciombinaria.
         console.log(datos);
         * 
         * lo que debemos hacer es un parseo a json, con JSON.parse, esto nos dara el json
         * tal y como lo tenemos al momento de crearlo en su archivo, ya de ahy podemos
         * mostrarlo completo o sus atributo dependiendo de lo que queramos
         */
        console.log(JSON.parse(datos), "el autor es: ", JSON.parse(datos).autor)
    }
});