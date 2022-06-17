var fs = require('fs');

/**para eliminar un archivo tenemos que apoyarnos del metodo unlink, 
 * que basicamente nos permitira eliminar los archivos, este emtodo funciona
 * igual que los demas en su llamdnada, recibe una ruta para el archivo y
 * recibe una funcion para aplicar un collback, esta funcion recibira como 
 * aparametro un mensaje de error para en dado caso de que esto ocurra sepamos
 * como reacionar
 */
fs.unlink('./archivoPrueba.txt', (error)=>{
    if (error){
        throw error.message;
    }else{
        console.log("se ha eliminado el archivo correctamente...");
    }
});