var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : "Home"});
});


router.get('/quartos', function(req, res, next) {
  res.render('quartos', {title : "Quartos"});
});


// ################### FIM DE FOTOS

router.get('/reservas', function(req, res, next) {
  res.render('reservas',{title : "Reservas"} );
});

module.exports = router;
