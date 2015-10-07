var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Klingon World' });
});

// router.get('/details', function(req, res, next) {
//   res.render('details', { title: 'Klingon World' });
// });

module.exports = router;
