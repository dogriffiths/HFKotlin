import React, {Component} from 'react';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import ImageItem from "../../components/ImageItem/ImageItem";
import chaptersContent from "../../content/cms/chapters";
import {withRouter} from "react-router-dom";

import './TableOfContentsPage.css';

class TableOfContentsPage extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Table of contents'/>
            <section className='tableOfContents'>
                {Object.keys(chaptersContent).sort().map(chapterId => {
                    const chapter = chaptersContent[chapterId];
                        return <ImageItem
                            id={chapterId}
                            src={chapter.image}
                            name={
                                <div>
                                    <div className='chapter-number'
                                         style={{float: 'left', marginRight: '1ex'}}>{chapter.name} </div>
                                    <div className='chapter-title'>
                                        {chapter.title}
                                    </div>
                                </div>
                            }
                            description={chapter.subtitle}
                            onClick={(chapterId) => this.props.history.push(`/chapters/${chapterId}`)}
                        />;
                    }
                )}
            </section>
        </div>
            ;
    }
}

export default withRouter(TableOfContentsPage);
