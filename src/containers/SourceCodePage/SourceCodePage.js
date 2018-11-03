import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import './SourceCodePage.css';
import AppBarAndMenu from "../../components/AppBarAndMenu/AppBarAndMenu";

class SourceCodePage extends Component {
    render() {
        return <div>
            <AppBarAndMenu title='Source code'/>
            You can download the <a className='repoLink'
                                    href='https://github.com/dogriffiths/HFKotlin'
                                    target='_blank'
                                    rel="noopener noreferrer"
        >source code on Github</a>
        </div>;
    }
}

export default withRouter(SourceCodePage);