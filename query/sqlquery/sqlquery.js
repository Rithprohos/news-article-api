/**
 * Created by Prohos on 6/10/2017.
 */

export let qAllArticle = `select articleid, articletitle , articledetail, articleimageurl,
    (
      SELECT array_to_json(array_agg(row_to_json(d)))
      from (
        select authorid, authorname
        from tbl_author
        where tbl_author.authorid= tbl_article.articleauthorid
      ) d
    ) as author,
		(
			SELECT array_to_json(array_agg(row_to_json(e)))
			FROM (
				SELECT categoryid , categoryname
				FROM tbl_categories
				WHERE tbl_categories.categoryid = tbl_article.articlecategory
			) e
		) as category
  from tbl_article`;