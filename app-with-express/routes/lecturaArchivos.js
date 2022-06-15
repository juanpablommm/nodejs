var fs = require('fs');



const archivo = fs.readFile('./archivoPrueba.txtm', "utf-8", (error, datos)=>{
    
    /**sabiendo que pueden ocurrir algunos error en la lectura de unarchivo,
     * por ende nuestra funcion recibe dos parametros, uno para identificar el error
     * y el otro para identificar los datos que fueron leidos.
     * 
     * podemos aplicar una logica simple de un if-else para saber como actuar en el caso
     * de que alla un erro en la lectura del archivo;
     * por ejemplo vamos a evaluar en al condional si el parametro error esta presente, significaria
     * que occurrio un error por lo tanto aplicamos nuestra logica para saber como actuar al respecto,
     * en este caso vamos a imprirmir un mensaje diciendo que hubo un error, pero adicional a eso
     * vamos a lanzar ese error para que lo puedan ver y saber que paso, al igual que en java
     * para el alnzamiento de una exception de este lado nosotros tambi utilizaremos la plabra
     * reservada throw para lanzar el error, con la difernecia que no tenemos excepcione en js
     */
    if (error) {
        console.log("error en la lectura del archivo...");
        throw error;/**tambien podemos mostrar el stack del error, o el menssage, etc*/
    } else {
        /**si no hubo ningun error enctonces procedmos a aplicar nusra logica */
        console.log(datos);
    }

});

console.log("esto es loq eu seguiria despues de leer el archivo " + archivo);
