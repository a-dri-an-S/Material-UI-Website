import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


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

    const classes = useStyles();

    return (  
        <Container>
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
        </Container>

    );
}

export default NavigationBar;