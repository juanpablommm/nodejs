var fs = require('fs');


/**el metodo readdir nos permitira leeer carptas, saber que hay dentro
 * de la ruta de una carpta espeficica, el metodo recibe como primer parametro
 * la ruta de la carpta y como segundo parametro una funcion con dos parametros
 * dentro de ella; el primero seria el errror en caso de que se produsca al leer
 * la carpeta y el segundo equivale al los items que tiene esa carpta adentro es decir
 * los elementos, ya sean otras carpetas o archivos, los items no sera mas que un arreglo
 * con el nombre de cada uno de los items que esten dentro de la carpeta, los archivos
 * apareceran con el nombre y la extension, mientras que las carpetas solamente tendra el 
 * nombre
 */
const archivo = fs.readdir('./carpeta-prueba', (error, items)=>{
    console.log(items);
});

/**ahora cuando estemos realizando una lectura de este tio con fs, podemos
 * pasar un tercer parametro, que en realida seria el segun, donde simplmente es
 * un objecto con una propiedad que seria withFileTypes y como valor le damos true,
 * esto lo que noes permitira es definir que la lectura que hagamos lleve el tipo de archivo:
 * donde basicamente los archivos se clasificarina por tener como type el valor de 1 y las carpetas
 * el valor de 2
 */
const archivo2 = fs.readdir('./carpeta-prueba', {withFileTypes:true}, (error, items)=>{
    console.log(items);
});
