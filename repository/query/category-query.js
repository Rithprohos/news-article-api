/**
 * Created by Prohos on 6/10/2017.
 */
import * as queryData from './sqlquery/sql-statement'
import {db} from '../connection/pg-connection'

//get all categories
export let getAllCategories = (req, res, next) => {
    db.any(queryData.qAllCategory)
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

// get article by category
export let getArticleByCategory = (req, res ,next) => {
    let categoryID = parseInt(req.params.id);
    db.any(queryData.qArticleByCategory, categoryID)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'successfully retrieved article by category'
                });
        })
        .catch(function (err) {
            return next(err);
        });
};

//post category
export let postCategory = (req, res ,next) => {
    db.none(queryData.qCreateCategory,req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
};

//TODO: PUT

//TODO: DELETE