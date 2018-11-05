import moment from "moment";
import React, {Component} from "react";

import './ArticleFooter.css';

class ArticleFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const article = this.props.article;
        const wordCount = article.content.split(' ').length;
        const minuteRead = Math.round(wordCount / 250) + 1;
        this.setState({article, wordCount, minuteRead});
    }

    render() {
        const {article, minuteRead} = this.state;

        if (!article) {
            return <div/>;
        }

        return <div className='ArticleFooter'>
            {article && article.tags &&
            <div className='ArticleFooter-tags'>{article.tags.map(t => <div className='ArticleFooter-tag'>{t}</div>)}</div>
            }
            {article.date &&
            <div className='ArticleFooter-text'>
                {article.author && <div>{'Posted by '}{article.author}{','}</div>}
                {moment(article.date).format('MMMM Do YYYY')}.
                <br/>
                {minuteRead} min read
            </div>
            }
        </div>;
    }
}

export default ArticleFooter;