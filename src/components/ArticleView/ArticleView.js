import {withRouter} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React, {Component} from "react";
import Cover from "../Cover/Cover";

import './ArticleView.css'
import ArticleFooter from "../ArticleFooter/ArticleFooter";

class ArticleView extends Component {
    constructor(props) {
        super(props);
        const article = props.article;
        const wordCount = article.content.split(' ').length;
        const minuteRead = Math.round(wordCount / 250) + 1;
        this.state = {article, wordCount, minuteRead};
    }

    render() {
        const {article} = this.state;

        return <div className="Article-content">
            {this.props.children}
            {article.image &&
            <div className='Article-imageContainer'><Cover src={article.image} className='Article-image'/></div>
            }
            {article.book &&
            <div className='Article-imageContainer'><Cover src={article.book} className='Article-book'/></div>
            }
            {article.subtitle &&
            <h1 className='subtitle'>{article.subtitle}</h1>
            }
            <ReactMarkdown source={article.content}/>
            <ArticleFooter article={article}/>
        </div>;
    }
}

export default withRouter(ArticleView);