import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import {Link as RouterLink } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import HomePage from './components/HomePage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DisplaySearched from './components/DisplaySearched'
import UpdateUser from './components/menuComponents/UpdateUser'; 

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuTab from './components/menuComponents/MenuTab'
import NavBar from './components/NavBar'
import Favorites from './components/menuComponents/Favorites'


import { v4 as uuid } from 'uuid'


const postUrl = 'https://reqres.in/api/users'
const getUrl='https://api.github.com/users/octocat'
const dummyDataUrl = 'https://spotify-song-suggester-4.herokuapp.com/dummy_data'

const registerTestUrl = 'https://spotify-song-suggester-project.herokuapp.com/api/auth/register'


const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  emailAddress: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  emailAddress: '',
  password: '',
}

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must have at least 3 characters'),
  emailAddress: yup
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
     display: 'flex',
     justifyContent: 'space-between',
     width: '100%',
     alignItems: 'center',
     paddingLeft: '2%',
     paddingRight: '2%',
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
  linkButtons: {
    textDecoration: 'none',
  }
}));


export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formDisabled, setFormDisabled] = useState(true)


  // useEffect(() => {
    
  //   axios.get(dummyDataUrl)
  //     .then(response => {
  //       // console.log('working')
  //       // console.log(response.data)
  //       setUsers(response.data)
  //     })
  //     .catch(err => {
  //       console.log('error')
  //     })
  // }, []
  // )


  const postUser = (user) => {
    axios.post(registerTestUrl, JSON.stringify(user))
      .then(res => {
        console.log(res)
        console.log('working')
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


  const onSignUp = e => {
    e.preventDefault()

    const newUser = {
      username: formValues.username,
      emailAddress: formValues.emailAddress,
      password: formValues.password
    }
    console.log(JSON.stringify(newUser))
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
  
  return (


    <div className="App">
      <CssBaseline />
      <NavBar />
  
      
      
        
    <Switch>

    <Route exact path='/'>
           <Login
            values={formValues}
            onInputChange={onInputChange}
           />
      </Route>

      <Route path='/signup'>
        <SignUp
          values={formValues}
          onSignUp={onSignUp}
          disabled={formDisabled}
          errors={formErrors}
          onInputChange={onInputChange}
        
        />
      </Route>

      <Route exact path='/favorites' >
        <Favorites />
      </Route>

      <Route exact path='/home'>
        <HomePage  />
      </Route>

      


      
    
 </Switch>

    </div>
  );
}

