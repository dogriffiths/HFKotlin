import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import HomePage from "./containers/HomePage/HomePage";

import './App.css';
import TableOfContentsPage from "./containers/TableOfContentsPage/TableOfContentsPage";
import SourceCodePage from "./containers/SourceCodePage/SourceCodePage";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/tableOfContents" component={TableOfContentsPage}/>
                        <Route exact path="/sourceCode" component={SourceCodePage}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
