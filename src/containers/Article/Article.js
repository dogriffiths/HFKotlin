import React, {Component} from 'react';

import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import blog from '../../content/cms/blog';
import ReactMarkdown from "react-markdown";

import './Article.css';
import {Link} from "react-router-dom";

class Article extends Component {
    render() {
        const blogId = this.props.match.params.blogId;
        const article = blog[blogId];

        return <div>
            <AppBarAndMenu title={article.title}/>
            <div class="Article-content">
            <Link to={'/blogs'} className='returnToBlogs'>Back to blogs</Link>
                <ReactMarkdown source={article.content}/>
                <div>Posted by {article.author}, {article.date}</div>
            </div>
        </div>;
    }
}

export default Article;