import React, {Component} from 'react';

import './TableOfContentsPage.css';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";

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
            <table className='tableOfContents'>
                <tr>
                    <th> Number</th>
                    <th> Title</th>
                    <th> Subtitle</th>
                </tr>
                <tbody>
                {contents.map(chapter =>
                    <tr>
                        <td>{chapter.number}</td>
                        <td>{chapter.title}</td>
                        <td>{chapter.subtitle}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
            ;
    }
}

export default TableOfContentsPage;
