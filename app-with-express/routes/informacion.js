var express = require('express');
var router = express.Router();

/* GET informacion listing. */
router.get('/:nombre/:edad', function(req, res, next) {
  res.render('informacion', {
    usuario:{
      nombre:req.params.nombre,
      edad:req.params.edad
    }
  });/*con el metoodo render, mencionamos que vamos
  a responder renderizando una vista, en este caso la informacion.pug que tenemos
  en representacion, no hace falta colocar la extension pues el sixtema automaticamente 
  sabe a cual vista nos referimos.
  ahora siii queremos psarle informacion, parametros a esa vista lo hcaemos
  pasandole como segundo parametro a el metodo render un object JSON, en el cual
  podemos pasar otros objectos dentro de el si se requiere.
  en este caso estamos asignado a los atributos de nustro objeto usuario
  los valores de los parametro que vienen por la url*/
});


router.get("/", function(req, res, next){
  res.render("informacion");
});
module.exports = router;
