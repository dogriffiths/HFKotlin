import React, {Component} from 'react';

import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import chaptersContent from "../../content/cms/chapters";

import './Chapter.css';
import {Link} from "react-router-dom";
import ArticleView from "../../components/ArticleView/ArticleView";
import Content from "../../components/Content/Content";

class Chapter extends Component {
    render() {
        const chapterId = this.props.match.params.chapterId;
        const chapter = chaptersContent[chapterId];

        return <div>
            <AppBarAndMenu title={chapter.title}>
                <Content>
                    <ArticleView article={chapter}>
                        <Link to={'/tableOfContents'}>Back to table of contents</Link>
                    </ArticleView>
                </Content>
            </AppBarAndMenu>
        </div>;
    }
}

export default Chapter;