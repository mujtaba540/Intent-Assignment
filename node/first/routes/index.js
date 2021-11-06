var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'form' });
});

// router.get('/', function(req, res, next) {
//   res.render('form', { title: 'form' });
// });

router.get('/index',function(req,res,next){
  res.render('layout', { title: 'Express' });
});
module.exports = router;
