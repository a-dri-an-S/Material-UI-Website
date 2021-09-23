import { Grid, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme =>({
    mainGridItem: {
        backgroundColor: 'blue'
    },
    secondRowFirstItem: {
        backgroundColor: 'green'
    },
    secondRowSecondItem: {
        backgroundColor: 'orange'
    },
    thirdRow: {
        backgroundColor: 'pink'
    }
}));

const GridLayout = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={3}> 
            <Grid item lg={12} sm={12} xs={12}>
                <Typography className={classes.mainGridItem}>
                    Main Grid Item
                </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondRowFirstItem}>
                    Second Row, First Item
                </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondRowSecondItem}>
                    Second Row, Second Item
                </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography className={classes.thirdRow}>
                    Third Row
                </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography className={classes.thirdRow}>
                    Third Row
                </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography className={classes.thirdRow}>
                    Third Row
                </Typography>
            </Grid>
        </Grid>
    );
}

export default GridLayout;