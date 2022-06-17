var fs = require('fs');

/** moviendo un archivo de carpeta, 
 * vamos a relizar un practica para mover un archivo de carpta
 * en donde utilizaremos lo metos copyFile y unlink
 */
function moverArchivo(rutaActual, nombreArchivo, rutaNueva){
    fs.copyFile(rutaActual + "/" + nombreArchivo, rutaNueva + "/" +  nombreArchivo, (error)=>{
        if (error) {
            console.log("ha ocurrido un error");
        } else {
            eliminar(rutaActual, nombreArchivo);
        }
    });
}

function eliminar(ruta, nombre){
    fs.unlink(ruta + "/" + nombre, (error)=>{
        if (error) {
            console.log("ha ocurrido un error, el archivo ha sido copiado pero no eliminado de la ruta actual");
        } else {
            console.log("se ha movido el archivo correctamente...");
        }
    });
}

moverArchivo('./carpeta-prueba', 'primerAchivoEscrito.txt', './carpeta-prueba/primeraCarpta');