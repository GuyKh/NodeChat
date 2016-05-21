var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { partials: { content: 'main'}, title: 'Express', });
// });

router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Node Chat",
    // error: err,
    // newCatError: req.flash("newCatName"),
    user: req.user
  });
});

module.exports = router;
