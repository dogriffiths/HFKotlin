import React, {Component} from 'react';

import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import chaptersContent from "../../content/cms/chapters";
import ReactMarkdown from "react-markdown";

import './Chapter.css';
import {Link} from "react-router-dom";

class Chapter extends Component {
    render() {
        const chapterId = this.props.match.params.chapterId;
        const chapter = chaptersContent[chapterId];

        return <div>
            <AppBarAndMenu title={chapter.title}/>
            <div class="Chapter-content">
                <Link to={'/tableOfContents'}>Back to table of contents</Link>
                <h2 className='subtitle'>{chapter.subtitle}</h2>
                <ReactMarkdown source={chapter.content}/>
            </div>
        </div>;
    }
}

export default Chapter;