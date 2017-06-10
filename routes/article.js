/**
 * Created by Prohos on 6/9/2017.
 */
import * as qArticle from '../query/articlequery'


let express = require('express');
let router = express.Router();

//all article
router.get('/', function(req, res, next) {
    qArticle.getAllArticle(req, res, next);
});

//article by id
router.get('/:id', function(req, res, next) {
    qArticle.getSingleArticle(req, res, next);
});

//TODO : add article

//TODO : delete article

//TODO : update article

module.exports = router;
