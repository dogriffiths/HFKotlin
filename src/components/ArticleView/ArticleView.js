import {withRouter} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React, {Component} from "react";
import moment from "moment";

import './ArticleView.css'
import Cover from "../Cover/Cover";

class ArticleView extends Component {
    constructor(props) {
        super(props);
        const article = props.article;
        const wordCount = article.content.split(' ').length;
        const minuteRead = Math.round(wordCount / 250) + 1;
        this.state = {article, wordCount, minuteRead};
    }

    render() {
        const {article, minuteRead} = this.state;

        return <div className="Article-content">
            {this.props.children}
            {article.image &&
            <div className='Article-imageContainer'><Cover src={article.image} className='Article-image'/></div>
            }
            {article.subtitle &&
            <h1 className='subtitle'>{article.subtitle}</h1>
            }
            <ReactMarkdown source={article.content}/>
            {article.date &&
            <div className='Article-footer'>
                {article.author && <div>{'Posted by '}{article.author}{','}</div>}
                {moment(article.date).format('MMMM Do YYYY')}.
                <br/>
                {minuteRead} min read
            </div>
            }
            {article && article.tags &&
            <div className='Article-tags'>{article.tags.map(t => <div className='Article-tag'>{t}</div>)}</div>
            }
        </div>;
    }
}

export default withRouter(ArticleView);