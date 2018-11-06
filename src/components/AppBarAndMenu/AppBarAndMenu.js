import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {withRouter} from 'react-router-dom';
import CloudDownload from "@material-ui/icons/CloudDownload";
import Home from "@material-ui/icons/Home";
import Contacts from "@material-ui/icons/Contacts";
import Edit from "@material-ui/icons/Edit";

import './AppBarAndMenu.css';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class AppBarAndMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        return <div>
            <AppBar className='appBar' position="static" style={{backgroundColor: 'rgb(56, 40, 129)', color: 'white'}}>
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
                                    <Home />
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
                                    <Contacts />
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
                                    <Edit />
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
                                    <CloudDownload />
                                </ListItemIcon>
                                <ListItemText primary='Source code'/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Drawer>
        </div>;
    }
}

export default withRouter(withStyles(styles)(AppBarAndMenu));