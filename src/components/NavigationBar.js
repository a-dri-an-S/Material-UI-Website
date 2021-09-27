import { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";

import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    siteTitle: {
        fontWeight: 'bold',
        letterSpacing: 1.5
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    menuOption: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(10)
        },
        color: "white"
    },
    menuIcon: {
        color: "white"
    }
}));

const NavigationBar = () => {

    const classes = useStyles();
    
    const [windowSize, setWindowSize] = useState({
        toggleMenu: false,
        toggleMenuOpen: false
    })

    const { toggleMenu, toggleMenuOpen } = windowSize;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 960
                ? setWindowSize((prevState) => ({ ...prevState, toggleMenu: true }))
                : setWindowSize((prevState) => ({ ...prevState, toggleMenu: false }))
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, [])

    const displayToggleMenu = () => {

        const handleToggleMenuOpen = () => setWindowSize((prevState) => ({
            ...prevState, toggleMenuOpen: true 
        }));
        const handleToggleMenuClose = () => setWindowSize((prevState) => ({
            ...prevState, toggleMenuOpen: false 
        }));

        return (
            <Toolbar>
                <IconButton 
                    {...{
                        onClick: handleToggleMenuOpen
                    }}
                >   
                    <MenuIcon className={classes.menuIcon}/>
                </IconButton>

                <Drawer
                    {...{
                        anchor: 'left',
                        open: toggleMenuOpen,
                        onClose: handleToggleMenuClose
                    }}
                >
                    <div>
                        { getToggleMenuOptions() }
                    </div>
                </Drawer>

            </Toolbar>
        )
    }

    const getToggleMenuOptions = () => {
        return (
            <Box>
            {['Home', 'Courses', 'Sign Up'].map((menuOption) => (
                <MenuItem>
                    {menuOption}
                </MenuItem>
            ))}
            </Box>
        )
    }

    const displayLargeMenu = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <Typography 
                    className={classes.siteTitle}
                    component='h1'
                    variant='h4'
                >
                    INGSOC
                </Typography>
                <Box className={classes.menuBox}>
                    {['Home', 'Courses', 'Sign Up'].map((menuOption) => (
                        <Link
                            component='button'
                            variant='body1'
                            className={classes.menuOption}
                        >
                            {menuOption}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        )
    }

    return (  
        <Container>
            <AppBar>
                {toggleMenu ? displayToggleMenu() : displayLargeMenu()}
            </AppBar>    
        </Container>

    );
}

export default NavigationBar;