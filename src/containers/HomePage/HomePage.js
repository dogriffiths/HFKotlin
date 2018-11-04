import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import './HomePage.css';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";
import {main} from '../../content/home';
import ReactMarkdown from "react-markdown";

class HomePage extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Head First Kotlin'/>
            <section className='welcome'>
                <ReactMarkdown source={main.main.content} />
            </section>
        </div>;
    }
}

export default withRouter(HomePage);