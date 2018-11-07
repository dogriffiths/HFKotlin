import React, {Component} from 'react';

import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import blog from '../../content/cms/blog';
import ArticleView from "../../components/ArticleView/ArticleView";
import {Link} from "react-router-dom";

import './Article.css';
import Content from "../../components/Content/Content";

class Article extends Component {
    render() {
        const blogId = this.props.match.params.blogId;
        const article = blog[blogId];

        return <div>
            <AppBarAndMenu title={article.title}>
                <Content>
                    <ArticleView article={article}>
                        <Link to={'/blogs'} className='returnToBlogs'>Back to blogs</Link>
                    </ArticleView>
                </Content>
            </AppBarAndMenu>
        </div>;
    }
}

export default Article;