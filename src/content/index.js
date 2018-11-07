import blog from './cms/blog';
import chapters from './cms/chapters';
import moment from "moment";

const blogArticles = Object.keys(blog)
    .map(blogKey => {return {id: blogKey, category: 'blogs', ...blog[blogKey]}})
    .filter(article => moment(article.date).utc() < moment().utc())
    .sort((a, b) => (a.date === b.date) ? 0 : ((a.date < b.date) ? 1 : -1))
;

const allChapters =  Object.keys(chapters)
    .map(key => {return {id: key, category: 'chapters', ...chapters[key]}});

export {blogArticles, allChapters};