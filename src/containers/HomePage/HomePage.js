import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import './HomePage.css';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";

class HomePage extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Head First Kotlin'/>
            <h1>Head First Kotlin</h1>
            <section className='welcome'>
                Welcome
            </section>
        </div>;
    }
}

export default withRouter(HomePage);