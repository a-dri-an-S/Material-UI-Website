import { Box, Container, Link, Toolbar, Typography } from "@material-ui/core";

const NavigationBar = () => {
    return (  
        <Container>
            <Toolbar>
                <Typography>
                    INGSOC
                </Typography>
                <Box>
                    {['Home', 'Courses', 'Sign Up'].map((menuOption) => (
                        <Link
                            component='button'
                            variant='body1'
                            
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