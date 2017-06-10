/**
 * Created by Prohos on 6/9/2017.
 */
import * as qCategory from '../repository/query/category-query'

let express = require('express');
let router = express.Router();

//get all categories
router.get('/', function(req, res, next) {
    qCategory.getAllCategories(req, res, next);
});

//post category
router.post('/',function (req, res, next) {
    qCategory.postCategory(req, res, next);
});

//get article by category
router.get('/:id/articles', function(req, res, next) {
    qCategory.getArticleByCategory(req, res, next);
});

module.exports = router;
