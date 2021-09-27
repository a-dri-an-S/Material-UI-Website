import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core";

import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles(() => ({
    cardImage: {
        height: 300
    }
}))

const GridItem = ({ title, image, description }) => {

    const classes = useStyles();

    return ( 
        <Card >
            <CardHeader 
                title={title}
                subheader="Recommended for you"
            />
            <CardMedia
                className={classes.cardImage}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
            <CardActions >
                <IconButton aria-label="Visit Page">
                    <ArrowForward />
                </IconButton>
            </CardActions>

        </Card>
    );
}
export default GridItem;