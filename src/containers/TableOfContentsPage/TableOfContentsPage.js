import React, {Component} from 'react';

import './TableOfContentsPage.css';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import ImageItem from "../../components/ImageItem/ImageItem";
import {chapters} from "../../content";

class TableOfContentsPage extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Table of contents'/>
            <section className='tableOfContents'>
                {chapters.map((chapter, index) =>
                    <ImageItem
                        src='https://dg.imgix.net/do-you-think-you-re-happy-jgdbfiey-en/landscape/do-you-think-you-re-happy-jgdbfiey-9bb0198eeccd0a3c3c13aed064e2e2b3.jpg?ts=1520525855&ixlib=rails-3.0.0&w=700&h=394&dpr=2&ch=Width%2CDPR&auto=format%2Ccompress&fit=min'
                        name={
                            <div>
                                <div className='chapter-number'
                                     style={{float: 'left', marginRight: '1ex'}}>{index + 1} </div>
                                <div className='chapter-title'>{chapter.title}</div>
                            </div>
                        }
                        description={chapter.subtitle}
                    />
                )}
            </section>
        </div>
            ;
    }
}

export default TableOfContentsPage;
