import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: 400,
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/08/11/48/neo-urban-1808082_960_720.jpg)',
        color: theme.palette.common.white,
        backgroundSize: 'cover'
    },
    mainItem: {
        padding: theme.spacing(6),
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));

const MainGridItem = () => {

    const classes = useStyles();

    return ( 
        <Grid container className={classes.mainContainer}>

            <Grid item className={classes.mainItem} md={6}>
                <Typography component='h2' variant='h5'>
                    Hello Coding
                </Typography>
                
                <Typography variant='body1' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum volutpat metus nec accumsan. Phasellus leo purus, vestibulum et rutrum a, porttitor eget ex. Sed a elit elit. Fusce ac velit gravida, pharetra nulla et, interdum mauris. Donec viverra mi quis commodo posuere. Mauris lobortis vel mi non tincidunt.
                </Typography>
            </Grid>
        </Grid>
    );
}

export default MainGridItem;