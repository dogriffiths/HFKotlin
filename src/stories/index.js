import {storiesOf} from '@storybook/react';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import AppBarAndMenu from "../components/AppBarAndMenu/AppBarAndMenu";
import Cover from "../components/Cover/Cover";
import ImageItem from "../components/ImageItem/ImageItem";
import ArticleFooter from "../components/ArticleFooter/ArticleFooter";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import ArticleView from "../components/ArticleView/ArticleView";

storiesOf('AppBarAndMenu', module)
    .add('basic', () => <HashRouter>
        <AppBarAndMenu/>
    </HashRouter>)
    .add('with title', () => <HashRouter>
        <AppBarAndMenu title='I am a title'/>
    </HashRouter>)
;

storiesOf('Cover', module)
    .add('basic', () => <Cover
        src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
        'latest/scale-to-width-down/220?cb=20180606150928'}
        width={100}
        height={200}
    />)
    .add('different sizes', () => <div>
            <Cover
                src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                'latest/scale-to-width-down/220?cb=20180606150928'}
                width={100}
                height={200}
            />
            <Cover
                src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                'latest/scale-to-width-down/220?cb=20180606150928'}
                width={200}
                height={100}
            />
            <Cover
                src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                'latest/scale-to-width-down/220?cb=20180606150928'}
                width={400}
                height={400}
            />
            <Cover
                src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                'latest/scale-to-width-down/220?cb=20180606150928'}
                width={300}
                height={150}
            />
        </div>
    )
;

storiesOf('ImageItem', module)
    .add('basic', () =>
        <ImageItem
            src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
            'latest/scale-to-width-down/220?cb=20180606150928'}
        />
    )
    .add('name and description', () =>
        <ImageItem
            src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
            'latest/scale-to-width-down/220?cb=20180606150928'}
            name={'11 lambdas and higher-order functions'} description={'The Top Ten Things we didn\'t cover'}
        />
    )
    .add('multiple', () =>
        <div>
            <ImageItem
                src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                'latest/scale-to-width-down/220?cb=20180606150928'}
            />
            < ImageItem
                src={
                    'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                    'latest/scale-to-width-down/220?cb=20180606150928'
                }
            />
            <ImageItem
                src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                'latest/scale-to-width-down/220?cb=20180606150928'}
            />
            < ImageItem
                src={
                    'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                    'latest/scale-to-width-down/220?cb=20180606150928'
                }
            />
            <ImageItem
                src={'https://vignette.wikia.nocookie.net/wombles/images/f/fa/Orinoco.jpeg/revision/' +
                'latest/scale-to-width-down/220?cb=20180606150928'}
            />
        </div>
    )
;

storiesOf('ArticleFooter', module)
    .add('basic', () => <ArticleFooter article={{
        content: 'Some sort of content',
        date: '2029-12-11 15:42',
        author: 'Wolfie Smith',
        tags: ['Example', 'Tag', 'Hello']
    }}/>)
;

storiesOf('ArticlePreview', module)
    .add('basic', () => <HashRouter>
        <ArticlePreview article={{
            title: 'A blog title',
            content: 'Some sort of content',
            date: '2029-12-11 15:42',
            author: 'Wolfie Smith',
            tags: ['Example', 'Tag', 'Hello']
        }}/>
    </HashRouter>)
;

storiesOf('ArticleView', module)
    .add('basic', () => <HashRouter>
        <ArticleView article={{
            title: 'A blog title',
            content: '# A heading\nSome sort of content',
            date: '2029-12-11 15:42',
            author: 'Wolfie Smith',
            tags: ['Example', 'Tag', 'Hello']
        }}/>
    </HashRouter>)
;

