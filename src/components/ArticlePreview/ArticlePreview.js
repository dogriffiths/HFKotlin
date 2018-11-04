import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import React, {Component} from "react";

import './ArticlePreview.css'
import Cover from "../Cover/Cover";

class ArticlePreview extends Component {
    constructor(props) {
        super(props);
        const article = props.article;
        const wordCount = article.content.split(' ').length;
        const minuteRead = Math.round(wordCount / 250) + 1;
        this.state = {article, wordCount, minuteRead};
    }

    render() {
        const {article, minuteRead} = this.state;

        return <div className='ArticlePreview'>
            {article.image &&
            <div className='ArticlePreview-imageContainer'><Cover src={article.image} className='ArticlePreview-image'/></div>
            }
            <h1 className='ArticlePreview-title'><Link to={`/blogs/${article.id}`}>{article.title}</Link></h1>
            <ReactMarkdown source={article.preview} className='ArticlePreview-text'/>
            <div className='ArticlePreview-footer'>
                Posted by {article.author},
                {article.date
                    ? <div>{moment(article.date).format("MMM D")}</div>
                    : <div/>
                }
                {minuteRead} min read
            </div>
        </div>;
    }
}

export default ArticlePreview;