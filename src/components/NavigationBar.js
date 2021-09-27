import { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
    menuOption: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(10)
        }
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
        }
    },
    siteTitle: {
        fontWeight: 'bold',
        letterSpacing: 1.5
    }
}));

const NavigationBar = () => {

    const [windowSize, setWindowSize] = useState({
        toggleMenu: false,
        toggleMenuOpen: false
    })
    
    const { toggleMenu, toggleMenuOpen } = windowSize;

    useEffect(() => {
        const setResponsiveness =() => {
            return window.innerWidth < 960
                ? setWindowSize((prevState) => ({ ...prevState, toggleMenu: true }))
                : setWindowSize((prevState) => ({ ...prevState, toggleMenu: false }))
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, [])

    const classes = useStyles();

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