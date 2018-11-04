import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import home from '../../content/cms/home';
import ArticleList from "../../components/ArticleList/ArticleList";
import {blogArticles} from "../../content";
import ArticleView from "../../components/ArticleView/ArticleView";

import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: blogArticles.slice(0, 3)
        }
    }

    render() {
        return <div>
            <AppBarAndMenu title='Head First Kotlin'/>
            <div className='Home-content'>
                <ArticleView article={home.main}/>
                <section className='Home-recent'>
                    <h2>Recent posts</h2>
                    <ArticleList articles={this.state.articles}/>
                </section>
            </div>
        </div>;
    }
}

export default withRouter(HomePage);