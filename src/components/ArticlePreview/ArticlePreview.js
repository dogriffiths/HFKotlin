import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React, {Component} from "react";
import ArticleFooter from "../ArticleFooter/ArticleFooter";

import './ArticlePreview.css'

class ArticlePreview extends Component {
    constructor(props) {
        super(props);
        const article = props.article;
        const wordCount = article.content.split(' ').length;
        const minuteRead = Math.round(wordCount / 250) + 1;
        this.state = {article, wordCount, minuteRead};
    }

    componentDidUpdate(lastProps) {
        if (lastProps.article !== this.props.article) {
            const article = this.props.article;
            const wordCount = article.content.split(' ').length;
            const minuteRead = Math.round(wordCount / 250) + 1;
            this.setState({article, wordCount, minuteRead});
        }
    }

    render() {
        const {article} = this.state;

        return <div className='ArticlePreview'>
            {/*{article.image &&*/}
            {/*<div className='ArticlePreview-imageContainer'><Cover src={article.image} className='ArticlePreview-image'/>*/}
            {/*</div>*/}
            {/*}*/}
            <div className='ArticlePreview-title'><Link to={`/${article.category}/${article.id}`}>{article.title}</Link></div>
            <ReactMarkdown source={article.preview} className='ArticlePreview-text'/>
            <div className='ArticlePreview-footer'>
                <ArticleFooter article={article}/>
            </div>
        </div>;
    }
}

export default ArticlePreview;