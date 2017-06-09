/**
 * Created by Prohos on 6/9/2017.
 */
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Category' });
});

module.exports = router;
