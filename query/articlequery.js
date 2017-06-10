/**
 * Created by Prohos on 6/9/2017.
 */
import * as queryData from './sqlquery/sqlquery'

// let user = 'uagxoqkrhoefvy';
// let password = '2b73eb05ec84228acc33f190110358f8f913528cf335f66988ff7e02c9065408';
// let hostName = 'ec2-23-21-220-48.compute-1.amazonaws.com';
// let dbName = 'dskhg8rg9ua2l';


let pgp = require('pg-promise')(/*options*/);
let db = pgp('postgres://postgres:prohos@localhost:5432/news');
// let db = pgp(`postgres://${user}:${password}@${hostName}:5432/${dbName}`);

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

//get all article
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

export let getArticleById = (req, res ,next) => {
    let articleID = parseInt(req.params.id);
    db.one(queryData.qArticleByCategory, articleID)
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