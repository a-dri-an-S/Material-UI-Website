import Grid from "@material-ui/core/Grid";
import GridItem from "./GirdItem";
import MainGridItem from "./MainGridItem";



const GridLayout = () => {

    return (
        <Grid container spacing={3}> 
            <Grid item lg={12} sm={12} xs={12}>
                <MainGridItem />
            </Grid>
            <Grid item  lg={6} md={12} sm={12} xs={12}>
                <GridItem 
                    title="Lorem Ipsum 1"
                    image="https://cdn.pixabay.com/photo/2020/11/25/03/04/russian-blue-cat-5774414_960_720.jpg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus."
                />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <GridItem 
                    title="Lorem Ipsum 2"
                    image="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                    description="Sit amet commodo nulla facilisi nullam. Donec ac odio tempor orci dapibus ultrices. Felis imperdiet proin fermentum leo vel orci. Elit ut aliquam purus sit amet luctus."
                />
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
                <GridItem 
                    title="Lorem Ipsum 3"
                    image="https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_960_720.jpg"
                    description="Curabitur gravida arcu ac tortor dignissim convallis aenean. Diam ut venenatis tellus in. Adipiscing elit duis tristique sollicitudin nibh sit."
                />
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
                <GridItem 
                    title="Lorem Ipsum 4"
                    image="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg 1x, https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg"
                    description="Adipiscing elit duis tristique sollicitudin nibh sit. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. "
                />
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
                <GridItem 
                    title="Lorem Ipsum 5"
                    image="https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400_960_720.jpg"
                    description="Elementum curabitur vitae nunc sed velit dignissim sodales ut. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus."
                />
            </Grid>
        </Grid>
    );
}

export default GridLayout;