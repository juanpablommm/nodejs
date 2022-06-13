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

module.exports = router;
