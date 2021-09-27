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

const GridItem = () => {

    const classes = useStyles();

    return ( 
        <Card>
            <CardHeader 
                title="Lorem Ipsum 1"
                subheader="Recommended for you"
            />
            <CardMedia
                className={classes.cardImage}
                image="https://cdn.pixabay.com/photo/2020/11/25/03/04/russian-blue-cat-5774414_960_720.jpg"
                title="Lorem Ipsum 1"
            />
            <CardContent>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus. Sit amet commodo nulla facilisi nullam. Donec ac odio tempor orci dapibus ultrices. Felis imperdiet proin fermentum leo vel orci. Curabitur gravida arcu ac tortor dignissim convallis aenean.
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Visit Page">
                    <ArrowForward />
                </IconButton>
            </CardActions>

        </Card>
    );
}
export default GridItem;