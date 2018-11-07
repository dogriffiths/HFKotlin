import React, {Component} from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

import './ArticleList.css'

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({articles: this.props.articles});
    }

    componentDidUpdate(lastProps) {
        if (lastProps.articles && lastProps.articles.length !== this.props.articles.length) {
            this.setState({articles: this.props.articles});
        }
    }

    render() {
        return <div className='articles'>
            {this.state.articles && this.state.articles.map(article => {
                return <ArticlePreview article={article}/>;
            })}
        </div>
    };
}

export default ArticleList;