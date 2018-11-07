import React, {Component} from 'react';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import {blogArticles} from '../../content';
import ArticleList from "../../components/ArticleList/ArticleList";

import './BlogIndex.css';
import Content from "../../components/Content/Content";

class BlogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: blogArticles
        }
    }

    render() {
        return <div>
            <AppBarAndMenu title='Blog'>
                <Content>
                    <ArticleList articles={this.state.articles}/>
                </Content>
            </AppBarAndMenu>
        </div>;
    }
}

export default BlogIndex;