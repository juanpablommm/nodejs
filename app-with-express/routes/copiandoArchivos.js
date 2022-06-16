var fs = require('fs');

/*el emtodo copyFile nos permitira copiar un archivo, con todo y su contenido, este metodo
recive como primer parametro la ruta del archivo a copar, como segundo parametro la ruta del
archivo a crear, osea la copia, estas rutas de carpta deben exitir pero obviamente el nombre
del archivo si varia, el tercer parametro es una funcion para el coloback, que recibe como 
parametro la representaicion del error */

fs.copyFile('./primerAchivoEscrito.txt', './archivoPruebaCopia.txt', (error)=>{
    if (error) {
        throw error.message;
    }else{
        console.log("se ha copiado el archivo exitosamente...");
    }
});