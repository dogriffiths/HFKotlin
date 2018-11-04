import React, {Component} from 'react';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import {blogArticles} from '../../content';
import ArticleList from "../../components/ArticleList/ArticleList";

import './BlogIndex.css';

class BlogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: blogArticles
        }
    }

    render() {
        return <div>
            <AppBarAndMenu title='Blog'/>
            <div className='blogContent'>
                <div className='blogList'>
                    <ArticleList articles={this.state.articles}/>
                </div>
            </div>
        </div>;
    }
}

export default BlogIndex;