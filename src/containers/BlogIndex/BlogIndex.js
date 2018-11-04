import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import blog from '../../content/cms/blog';
import ReactMarkdown from "react-markdown";

import './BlogIndex.css';
import home from "../../content/cms/home";

class BlogIndex extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Blog'/>
            {Object.keys(blog).map(blogKey => {
                const article = blog[blogKey];
                return <div>
                    <h2><Link to={`/blogs/${blogKey}`}>{article.title}</Link></h2>
                    <ReactMarkdown source={blog[blogKey].preview}/>
                    <div>Posted by {article.author}, {article.date}</div>
                </div>;
            })}
        </div>;
    }
}

export default BlogIndex;