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

//post article
export let postArticle = (req, res ,next) => {
    req.body.authid = parseInt(req.body.authid);
    req.body.cateid = parseInt(req.body.cateid);
    db.one(queryData.qCreateArticle,req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: `${req.body.title} is inserted `
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

//get article by limit and offset for pagination
export let getLimitArticle = (req, res, next) => {
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);
  db.any(queryData.qAllArticleLimitOffset,[limit,offset])
      .then(function (data) {
          res.status(200)
              .json({
                  status: 'success',
                  data: data,
                  message: 'successfully retrieved article'
              });
      })
};


