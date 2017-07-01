/**
 * Created by Prohos on 6/9/2017.
 */
import * as qArticle from '../repository/query/article-query'


let express = require('express');
let router = express.Router();

//all article
router.get('/', function(req, res, next) {
    qArticle.getAllArticle(req, res, next);
});

//post article
router.post('/',function (req, res, next) {
   qArticle.postArticle(req, res, next);
});

//count article
router.get('/count',function (req, res, next) {
    qArticle.countArticle(req,res,next);
});

//article by id
router.get('/:id', function(req, res, next) {
    qArticle.getSingleArticle(req, res, next);
});

router.get('/limit=:limit/offset=:offset',function (req, res, next) {
   qArticle.getLimitArticle(req, res, next);
});

//TODO : delete article

//TODO : update article

module.exports = router;
