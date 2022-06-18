var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', (req, res, next)=>{
    fs.readFile('./public/json/libroo.json', (error, datos)=>{
        if (error) {
            res.render('error', { error: 'Error!! no se han podidod cargar los datos...'});
        } else {
            res.render('informacion', { informacion : JSON.parse(datos) });
        }
    });
});

module.exports = router;