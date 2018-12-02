import React, {Component} from 'react';
import ArticleList from "../../components/ArticleList/ArticleList";
import {allChapters, blogArticles} from "../../content";
import {withRouter} from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({terms: this.props.terms});
    }

    componentDidUpdate(lastProps) {
        if (lastProps.terms !== this.props.terms) {
            this.setState({terms: this.props.terms});
        }
    }

    render() {
        const terms = this.state.terms;
        const uTerms = terms ? terms.toUpperCase() : null;
        const blogResults = terms ? blogArticles.filter(a => {
            return a.title.toUpperCase().indexOf(uTerms) !== -1 || a.content.toUpperCase().indexOf(uTerms) !== -1;
        }) : [];
        const chapterResults = terms ? allChapters.filter(a => {
            return a.title.toUpperCase().indexOf(uTerms) !== -1 || a.content.toUpperCase().indexOf(uTerms) !== -1;
        }) : [];

        const results = blogResults.concat(chapterResults);

        return <ArticleList articles={results}/>;
    }
}

export default withRouter(Search);