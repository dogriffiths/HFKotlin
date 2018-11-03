import React, {Component} from 'react';

import './TableOfContentsPage.css';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";

class TableOfContentsPage extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Table of contents'/>
            <h1>Table of contents</h1>
            <table className='tableOfContents'>
                <tr>
                    <th> Number</th>
                    <th> Title</th>
                    <th> Subtitle</th>
                </tr>
                <tr>
                    <td> 1</td>
                    <td> Getting started</td>
                    <td> A Quick Dip</td>
                </tr>
                <tr>
                    <td> 2</td>
                    <td> Basic types and variables</td>
                    <td> Being a Variable</td>
                </tr>
                <tr>
                    <td> 3</td>
                    <td> Functions</td>
                    <td> Getting Out of Main</td>
                </tr>
                <tr>
                    <td> 4</td>
                    <td> Classes and objects</td>
                    <td> A Bit of Class</td>
                </tr>
                <tr>
                    <td> 5</td>
                    <td> Subclasses and superclasses</td>
                    <td> Using Your Inheritance</td>
                </tr>
                <tr>
                    <td> 6</td>
                    <td> Abstract classes and interfaces</td>
                    <td> Serious Polymorphism</td>
                </tr>
                <tr>
                    <td> 7</td>
                    <td> Data classes</td>
                    <td> Dealing with Data</td>
                </tr>
            </table>
        </div>;
    }
}

export default TableOfContentsPage;
