import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React, {Component} from "react";

import './ArticlePreview.css'
import Cover from "../Cover/Cover";
import ArticleFooter from "../ArticleFooter/ArticleFooter";

class ArticlePreview extends Component {
    constructor(props) {
        super(props);
        const article = props.article;
        const wordCount = article.content.split(' ').length;
        const minuteRead = Math.round(wordCount / 250) + 1;
        this.state = {article, wordCount, minuteRead};
    }

    render() {
        const {article} = this.state;

        return <div className='ArticlePreview'>
            {article.image &&
            <div className='ArticlePreview-imageContainer'><Cover src={article.image} className='ArticlePreview-image'/>
            </div>
            }
            <div className='ArticlePreview-title'><Link to={`/blogs/${article.id}`}>{article.title}</Link></div>
            <ReactMarkdown source={article.preview} className='ArticlePreview-text'/>
            <div className='ArticlePreview-footer'>
                <ArticleFooter article={article}/>
            </div>
        </div>;
    }
}

export default ArticlePreview;