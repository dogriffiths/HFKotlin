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
                        src={chapter.image}
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
