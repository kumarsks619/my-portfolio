import React from 'react'
import {
    Drawer,
    AppBar,
    CssBaseline,
    Toolbar,
    List,
    Typography,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Badge,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import TvIcon from '@material-ui/icons/Tv'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'
import WidgetsIcon from '@material-ui/icons/Widgets'
import { useDispatch, useSelector } from 'react-redux'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import MessageIcon from '@material-ui/icons/Message'

import useStyles from './styles'
import Routes from '../../Routes'
import './Sidebar.css'
import { adminLogout } from '../../store/actions/auth'

const Sidebar = () => {
    const dispatch = useDispatch()
    const { admin } = useSelector((state) => state.adminLogin)
    const { messages } = useSelector((state) => state.messageGetAll)
    const { projects } = useSelector((state) => state.projectGetAll)
    const { experiences } = useSelector((state) => state.expGetAll)
    const { skills } = useSelector((state) => state.skillGetAll)

    const classes = useStyles()

    const handleLogout = () => {
        dispatch(adminLogout())
    }

    return (
        <div className={`sidebar ${classes.root}`}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className="toolbar">
                    <Typography variant="h6" noWrap>
                        VeNoM | Portfolio Admin
                    </Typography>
                    <div className="logoutBtnWrapper">
                        <Typography variant="subtitle1">
                            Hello! {admin?.username}
                        </Typography>
                        <IconButton onClick={handleLogout}>
                            <PowerSettingsNewIcon color="secondary" />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <Link to="/">
                            <ListItem button key={'Messages'}>
                                <ListItemIcon>
                                    <Badge
                                        badgeContent={messages && messages.length}
                                        color="primary"
                                    >
                                        <MessageIcon />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary={'Messages'} />
                            </ListItem>
                        </Link>

                        <Link to="/projects">
                            <ListItem button key={'Projects'}>
                                <ListItemIcon>
                                    <Badge
                                        badgeContent={projects && projects.length}
                                        color="primary"
                                    >
                                        <TvIcon />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary={'Projects'} />
                            </ListItem>
                        </Link>

                        <Link to="/experience">
                            <ListItem button key={'Experience'}>
                                <ListItemIcon>
                                    <Badge
                                        badgeContent={experiences && experiences.length}
                                        color="primary"
                                    >
                                        <AccessibilityNewIcon />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary={'Experience'} />
                            </ListItem>
                        </Link>

                        <Link to="/skills">
                            <ListItem button key={'Skills'}>
                                <ListItemIcon>
                                    <Badge
                                        badgeContent={skills && skills.length}
                                        color="primary"
                                    >
                                        <WidgetsIcon />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary={'Skills'} />
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Routes />
            </main>
        </div>
    )
}

export default Sidebar
