/**
 * Created by Prohos on 6/9/2017.
 */
import * as qArticle from '../query/articlequery'


let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    qArticle.getAllArticle(req, res, next);
});

//TODO : article by id

//TODO : add article

//TODO : delete article

//TODO : update article

module.exports = router;
