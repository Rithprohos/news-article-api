/**
 * Created by Prohos on 6/9/2017.
 */
import * as qCategory from '../repository/query/category-query'

let express = require('express');
let router = express.Router();

//get article by category
router.get('/:id', function(req, res, next) {
    qCategory.getArticleByCategory(req, res, next);
});

module.exports = router;
