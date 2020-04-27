import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import {Link as RouterLink } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import HomePage from './components/HomePage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DisplaySearched from './components/DisplaySearched'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Headset from '@material-ui/icons/Headset';import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import { v4 as uuid } from 'uuid'


const url = 'https://reqres.in/api/users'


const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must have at least 3 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Valid email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
})


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
    backgroundColor:'#1DB954',
    padding: theme.spacing(6),
  },
}));


export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formDisabled, setFormDisabled] = useState(true)

  const postUser = user => {
    axios.post(url, user)
      .then(res => {
        console.log(res)
        setUsers([...users, res.data])
      })
      .catch(err => {
        console.log('error')
      })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [formValues])


  const onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    }

    // 🔥 STEP 6 - WE NEED TO POST NEW USER TO THE API!
    postUser(newUser)
    setFormValues(initialFormValues)
  }

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value


    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        //clear errors
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }
  const classes = useStyles();
  return (


    <div className="App">
      <CssBaseline />
      <AppBar position="relative" className='appBar'>
        <Toolbar  className='appBar'>
          <Headset className={classes.icon} />
          
          <Route path='/'>
        <RouterLink color="secondary"to='/'>
          <Typography variant="h6" color="secondary" noWrap>
            Home
            </Typography>
            </RouterLink>
        </Route>
          <Route>
        <RouterLink color="secondary"to='/'>
          <Typography variant="h6" color="secondary" noWrap>
            Login
            </Typography>
            </RouterLink>
        </Route>
        <Route>
        <RouterLink color="secondary"to='/'>
          <Typography variant="h6" color="secondary" noWrap>
            Sign Up
            </Typography>
            </RouterLink>
        </Route>
        </Toolbar>
      </AppBar>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    <header>
      <h1>Spotify Suggester</h1>
      <Route path='/'>
        <Link to='/'>Home</Link>
        </Route>
        </header>
        
    <Switch>
      <Route path='/signup'>
        <SignUp
          values={formValues}
          onSubmit={onSubmit}
          disabled={formDisabled}
          errors={formErrors}
          onInputChange={onInputChange}
        
        />
      </Route>


      <Route path='/login'>
           <Login
            values={formValues}
            onSubmit={onSubmit}
            onInputChange={onInputChange}
           />
      </Route>

      <Route>
        <HomePage path='/' />
      </Route>
    
 </Switch>

    </div>
  );
}

