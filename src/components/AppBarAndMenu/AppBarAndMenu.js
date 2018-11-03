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
import {withRouter} from 'react-router-dom'

import './AppBarAndMenu.css';

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
        return <div><AppBar className='appBar' position="static">
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
                                <ListItemText primary='Head First Kotlin'/>
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => this.setState({open: false}, () => {
                                    this.props.history.push('/tableOfContents')
                                })}
                            >
                                <ListItemText primary='Table of contents'/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Drawer>
        </div>;
    }
}

export default withRouter(withStyles(styles)(AppBarAndMenu));