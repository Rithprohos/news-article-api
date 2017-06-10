/**
 * Created by Prohos on 6/10/2017.
 */

export let qAllArticle = 'SELECT * FROM getAllArticle()';

export let qArticleById = 'SELECT * FROM getArticleById($1)';

export let qCreateArticle = 'SELECT createArticle(${title},${detail},${imgurl},${authid},${cateid})';

export let qArticleByCategory = 'SELECT * FROM getArticleByCategory($1)';

export let qAllCategory = 'SELECT * FROM tbl_categories';

export let qCreateCategory = 'INSERT INTO tbl_categories(categoryname) VALUES(${name})';

