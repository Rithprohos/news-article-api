/**
 * Created by Prohos on 6/10/2017.
 */
import * as queryData from './sqlquery/sql-statement'
import {db} from '../connection/pg-connection'

//TODO: get all categories



// get article by category
export let getArticleByCategory = (req, res ,next) => {
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