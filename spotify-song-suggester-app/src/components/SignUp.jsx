import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Headset from '@material-ui/icons/Headset';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom'

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
     paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
     },
     avatar: {
          margin: theme.spacing(1),
          backgroundColor: '#1DB954',
     },
     form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
     },
     submit: {
          margin: theme.spacing(3, 0, 2),
          backgroundColor: '#1DB954',
     },
     container: {
          border: '1px solid #eee',
          borderRadius: '7px',
          boxShadow: '0 5px 5px rgba(0,0,0,0.1)',

          transition: 'all 0.3s linear',
     },
}));

export default function SignUp(props) {
     const {
          values,
          onSubmit,
          disabled,
          errors,
          onInputChange,
     } = props


     const classes = useStyles();

     return (
          <Container className={classes.container} component="main" maxWidth="xs">
               <CssBaseline />
               <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                         <Headset />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                         Sign up
        </Typography>
                    <form className={classes.form} noValidate>
                         <Grid container spacing={2}>
                              <Grid item xs={12}>
                                   <TextField
                              
                                        name="username"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        autoFocus
                                        value={values.username}
                                        onChange={onInputChange}
                                   />
                              </Grid>

                              <Grid item xs={12}>
                                   <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        
                                        value={values.email}
                                        onChange={onInputChange}
                                   />
                              </Grid>
                              <Grid item xs={12}>
                                   <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={values.password}
                                        onChange={onInputChange}
                                   />
                              </Grid>

                         </Grid>
                         <div className='errors'>
                              <h3 value={errors.username}>{errors.username}</h3>

                              <h3 value={errors.email}>{errors.email}</h3>

                              <h3 value={errors.password} >{errors.password}</h3>
                         </div>
                         <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="inherit"
                              className={classes.submit}
                              onClick={onSubmit}
                              disabled={disabled}
                         >
                              Sign Up
          </Button>
                         <Grid container justify="flex-end">
                              <Grid item>
                                 
                                        <RouterLink to='/login'>
                                             Already have an account? Sign in
                </RouterLink>
                               
                              </Grid>
                         </Grid>
                    </form>
               </div>
               <Box mt={5}>
                    <Copyright />
               </Box>
          </Container>
     );
}