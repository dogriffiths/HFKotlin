import React, {Component} from 'react';

import './TableOfContentsPage.css';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import ImageItem from "../../components/ImageItem/ImageItem";

const contents = [
    {number: 1, title: "Getting started", subtitle: "A Quick Dip"},
    {number: 2, title: "Basic types and variables", subtitle: "Being a Variable"},
    {number: 3, title: "Functions", subtitle: "Getting Out of Main"},
    {number: 4, title: "Classes and objects", subtitle: "A Bit of Class"},
    {number: 5, title: "Subclasses and superclasses", subtitle: "Using Your Inheritance"},
    {number: 6, title: "Abstract classes and interfaces", subtitle: "Serious Polymorphism"},
    {number: 7, title: "Data classes", subtitle: "Dealing with Data"},
];

class TableOfContentsPage extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Table of contents'/>
            <section className='tableOfContents'>
                {contents.map((chapter, index) =>
                    <ImageItem
                        src='https://dg.imgix.net/do-you-think-you-re-happy-jgdbfiey-en/landscape/do-you-think-you-re-happy-jgdbfiey-9bb0198eeccd0a3c3c13aed064e2e2b3.jpg?ts=1520525855&ixlib=rails-3.0.0&w=700&h=394&dpr=2&ch=Width%2CDPR&auto=format%2Ccompress&fit=min'
                        name={<div><div className='chapter-number' style={{float: 'left', marginRight: '1ex'}}>{index + 1} </div><div className='chapter-title'>{chapter.title}</div></div>}
                        description={chapter.subtitle}
                    />
                )}
            </section>
        </div>
            ;
    }
}

export default TableOfContentsPage;
