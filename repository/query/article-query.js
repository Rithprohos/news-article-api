/**
 * Created by Prohos on 6/9/2017.
 */
import * as queryData from './sqlquery/sql-statement'
import {db} from '../connection/pg-connection'


//get all article
export let getAllArticle = (req, res, next) => {
    db.any(queryData.qAllArticle)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Successfully retrieved ALL article'
                });
        })
        .catch(function (err) {
            return next(err);
        });
};

//get single article
export let getSingleArticle = (req, res, next) => {
    let articleID = parseInt(req.params.id);
    db.one(queryData.qArticleById, articleID)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'successfully retrieved one article'
                });
        })
        .catch(function (err) {
            return next(err);
        });
};


