import blog from './cms/blog';
import moment from "moment";

const blogArticles = Object.keys(blog)
    .map(blogKey => {return {id: blogKey, ...blog[blogKey]}})
    .filter(article => moment(article.date).utc() < moment().utc())
    .sort((a, b) => (a.date === b.date) ? 0 : ((a.date < b.date) ? 1 : -1))
;

export {blogArticles};