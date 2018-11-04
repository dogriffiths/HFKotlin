import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import sourceCode from '../../content/cms/sourceCode';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import ArticleView from "../../components/ArticleView/ArticleView";

import './SourceCodePage.css';

class SourceCodePage extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Source code'/>
            <ArticleView article={sourceCode.main}/>
        </div>;
    }
}

export default withRouter(SourceCodePage);