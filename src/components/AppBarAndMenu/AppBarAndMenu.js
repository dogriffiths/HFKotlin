import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from "@material-ui/core/Drawer";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {withRouter} from 'react-router-dom';
import CloudDownload from "@material-ui/icons/CloudDownload";
import Home from "@material-ui/icons/Home";
import Contacts from "@material-ui/icons/Contacts";
import Edit from "@material-ui/icons/Edit";
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles/colorManipulator';

import './AppBarAndMenu.css';
import Search from "../../containers/Search/Search";
import Content from "../Content/Content";

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        height: '32px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

function scrollIntoView() {
    const element = document.getElementById('content');
    if (element) {
        element.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});
    }
}

class AppBarAndMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    componentDidMount() {
        document.title = this.props.title;
        this.setState({terms: null})
        scrollIntoView();
    }

    componentDidUpdate(lastProps) {
        if (lastProps.location.pathname !== this.props.location.pathname) {
            this.setState({terms: null});
            scrollIntoView();
        }
    }

    render() {
        const {classes} = this.props;

        let searchField = <div className={`${classes.search} SearchField`}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onChange={(evt) => {
                    const terms = evt.target.value;
                    this.setState({terms});
                }}
            />
        </div>;
        return <div>
            <AppBar className='appBar' position="fixed" style={{backgroundColor: 'rgb(56, 40, 129)', color: 'white'}}>
                <Toolbar>
                    <IconButton
                        className={`${this.props.classes.menuButton} appBar-menu`}
                        color="inherit"
                        aria-label="Menu"
                        onClick={() => this.setState({open: true})}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                        {this.props.title}
                    </Typography>
                    <div className={classes.grow}/>
                    {searchField}
                    {/*<div className='SearchButton'>*/}
                        {/*<IconButton*/}
                            {/*color="inherit"*/}
                            {/*aria-label="Menu"*/}
                            {/*onClick={(evt) => {*/}
                                {/*this.setState({menuElement: evt.target})*/}
                            {/*}*/}
                            {/*}*/}
                        {/*>*/}
                            {/*<SearchIcon/>*/}
                        {/*</IconButton>*/}
                        {/*<Popover*/}
                            {/*id="menu-appbar"*/}
                            {/*anchorEl={this.state.menuElement}*/}
                            {/*anchorOrigin={{*/}
                                {/*vertical: 'top',*/}
                                {/*horizontal: 'right',*/}
                            {/*}}*/}
                            {/*transformOrigin={{*/}
                                {/*vertical: 'top',*/}
                                {/*horizontal: 'right',*/}
                            {/*}}*/}
                            {/*open={Boolean(this.state.menuElement)}*/}
                            {/*onClose={() => this.setState({menuElement: null})}*/}
                        {/*>*/}
                            {/*<div style={{minWidth: '400px', minHeight: '100px'}}>*/}
                                {/*{searchField}*/}
                            {/*</div>*/}
                        {/*</Popover>*/}
                    {/*</div>*/}
                </Toolbar>
            </AppBar>
            <Drawer
                docked={false}
                width={250}
                open={this.state.open}
                onClose={() => this.setState({open: false})}
                className='AppBarAndMenu-drawer'
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => this.setState({open: false})}
                    onKeyDown={() => this.setState({open: false})}
                >
                    <div className={this.props.classes.fullList}>
                        <List>
                            <ListItem
                                button
                                onClick={() => this.setState({open: false}, () => {
                                    this.props.history.push('/')
                                })}
                            >
                                <ListItemIcon>
                                    <Home/>
                                </ListItemIcon>
                                <ListItemText primary='Head First Kotlin'/>
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => this.setState({open: false}, () => {
                                    this.props.history.push('/tableOfContents')
                                })}
                            >
                                <ListItemIcon>
                                    <Contacts/>
                                </ListItemIcon>
                                <ListItemText primary='Table of contents'/>
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => this.setState({open: false}, () => {
                                    this.props.history.push('/blogs')
                                })}
                            >
                                <ListItemIcon>
                                    <Edit/>
                                </ListItemIcon>
                                <ListItemText primary='Blog'/>
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => this.setState({open: false}, () => {
                                    this.props.history.push('/sourceCode')
                                })}
                            >
                                <ListItemIcon>
                                    <CloudDownload/>
                                </ListItemIcon>
                                <ListItemText primary='Source code'/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Drawer>
            <div  id='content' style={{width: 0, height: 0}}>&nbsp;</div>
            {(this.state.terms && this.state.terms.length > 0)
                ? <Content><Search terms={this.state.terms}/></Content>
                : this.props.children
            }
            {}
        </div>;
    }
}

export default withRouter(withStyles(styles)(AppBarAndMenu));