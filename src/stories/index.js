import {storiesOf} from '@storybook/react';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import AppBarAndMenu from "../components/AppBarAndMenu/AppBarAndMenu";

storiesOf('AppBarAndMenu', module)
    .add('basic', () => <HashRouter>
        <AppBarAndMenu/>
    </HashRouter>)
    .add('with title', () => <HashRouter>
        <AppBarAndMenu title='I am a title'/>
    </HashRouter>)
;