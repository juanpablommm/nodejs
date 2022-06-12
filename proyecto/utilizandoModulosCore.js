/*http, uri, path, fs 
son algunos de lo modulos que vienen en el core de node,
http, y uri no sirven para trabajar con archivos externos, mientras
que path y fs con archivos locales, por ejemplo fs nos sirve en pescifico 
para trabajar con las rutas de archivos locales de la maquina*/

var util = require("util");/*util es un paquete utilitario del core de node,
donde podemos encontrar muchs metodos utiles como para la comprobacion de tipos
y demas.... como por ejemplo: */

let numero = "12";
console.log(util.isNumber(numero));

var http = require("htpp");
