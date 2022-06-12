const moment = require("moment");/*para la importacion de un modulo instalado en
la aplicacion node tenemos que crear una varible y se importa mediante la palabra
clase requiere() y se le pasa por parametro el nombre del comudlo tal y como aparece
en la carpeta node_modules.
* en este caso el modulo moment que fue importado es para obtener la fecha exacta
le pasamos como parametro a nuestra varible en la cual se importo el modulo
un "string con el año el mes y e dia y aplicamos un formato a mostrar en este caso
practico"
*/
console.log(moment("1999-9-10").format("DD/MM/YY"));

/* para importar un modulo local que hallamos creado nosotros mismo se realiza la importacion
de igual manera. con requiare, pero con la diferencia de que tenemos que especificar una
ruta, de lo contrario si no lo hacemos require ira a buscar ese modulo en la carpeta
node_modules*/
const modulo = require("./moduloPropio");
modulo.mutipliacion(12, 2);