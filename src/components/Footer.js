import { 
    Container, 
    Link, 
    makeStyles, 
    Typography 
} from "@material-ui/core";

function Copyright() {
    return (
        <Typography>
            {"Copyright "}
            <Link href="https://www.adriansalinas.tech">
                {"Goldstein "}
            </Link>
            { new Date().getFullYear() }
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(6)
    }
}));

const Footer = () => {

    const classes = useStyles();

    return ( 
        <footer className={classes.footer}>
            <Container>
                <Typography variant="h6">
                    INGSOC
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Big Brother is watching you!
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
}

export default Footer;