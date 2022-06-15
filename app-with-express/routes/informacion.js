var express = require('express');
var router = express.Router();

/* GET informacion listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET informacion listing. */
router.post('/', function(req, res, next) {
  console.log("llegue por pos");
    res.send({ persona: {
      nombre:"juancho"
    } });
  });  

/**podemos hacer dinamica la url mediante el paso de paramentros enconces para capturar 
 * los parametros que vengan por la url tendriamos que hacer lo siegiente:
 * 
 * 1. al primer parametro de nuesto metodo get verbo, indicarle que viene un parametro de esa
 * url para que lo escuche
 * 2. mediante la cabecera del reques recuperamos el parameteo con ayuda del metodo
 * param y le pasamos el nombre del parameto como lo pusimos a eschucar en el verbo get en
 * este caso
 */
/* GET informacion listing. */
router.get('/:paramURL', function(req, res, next) {
  res.send('el parametro que ha llegado es: ' + req.params.paramURL);
});

module.exports = router;
