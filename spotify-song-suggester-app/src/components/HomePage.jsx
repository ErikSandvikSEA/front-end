import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Headset from '@material-ui/icons/Headset'; import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import DisplaySearched from './DisplaySearched'
import { Route, Switch } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#1DB954',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#1DB954',
    color: 'white',
    padding: theme.spacing(6),
  },
  searchButtons: {
    textDecoration: 'none',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>


      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Spotify Song Suggester
            </Typography>
            <Typography variant="h3" align="center" color="textSecondary" paragraph>
              Welcome 'user'
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Search for new music - the smart way
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                 
                    <Button className='searchButtons' variant="contained" color="primary">
                    <RouterLink className='searchButtons' to='/home/search'>
                      Search For New Songs
                      </RouterLink>
                  </Button>
                  

                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Search Artist" variant="outlined" />
                  <TextField id="outlined-basic" label="Search Song Title" variant="outlined" />
                </form>
              </Grid>
            </div>
          </Container>
        </div>
        {/* end hero unit */}
        <Route path='/home/search'>
          <DisplaySearched />
        </Route>
      </main>
      {/* Footer */}
      <footer className={classes.footer} >
        <Typography variant="h6" align="center" gutterBottom >
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center"  component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}


