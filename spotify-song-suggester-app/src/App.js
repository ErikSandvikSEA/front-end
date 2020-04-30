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
import Favorites from './components/menuComponents/Favorites'
import NavBar from './components/NavBar'


import { v4 as uuid } from 'uuid'
const noHttpsPostTestUrl = 'http://spotify-song-suggester-project.herokuapp.com/api/auth/register'

const postTestUrl = 'https://spotify-song-suggester-project.herokuapp.com/api/auth/register'
const postUrl = 'https://reqres.in/api/users'
const getUrl='https://api.github.com/users/octocat'
const dummyDataUrl = 'https://spotify-song-suggester-4.herokuapp.com/dummy_data'
const localServerUrl = 'http://localhost:4000/api/auth/register'

const initialSearchFormValue = {
  song: '',
  artist: '',
}
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
  const [searchFormValue, setSearchFormValue ] = useState(initialSearchFormValue)
  const [searches, setSearches] = useState([])


  // useEffect(() => {
    
  //   axios.get(postTestUrl)
  //     .then(response => {
  //       // console.log('working')
  //       console.log(response.data)
  //       setUsers([response.data])
  //     })
  //     .catch(err => {
  //       console.log('error in receiving information from app.js', err)
  //     })
  // }, []
  // )


  const postSearch = search => {
    axios.post(postUrl, search)
      .then(response => {
        console.log(response)
        setSearches([...searches, response.data])
      })
      .catch(err => {
        console.log(err)
      })
  }





  const postUser = () => {
    axios.post(postUrl)
      .then(res => {
        console.log('the response from posting')
        setUsers([...users, res.data])
      })
      .catch(err => {
        console.log('error', err)
      })
  }

    const onSearch = e => {
      e.preventDefault()
      const newSearch = {
        song: searchFormValue.song,
        artist: searchFormValue.artist
      }
      console.log(newSearch)
      postSearch(newSearch)
      setSearchFormValue(initialSearchFormValue)
    }


    const onSearchInputChange = e => {
      const searchName = e.target.name
      const searchValue = e.target.value
  
      setSearchFormValue({
        ...searchFormValue,
        [searchName]: searchValue,
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
      password: formValues.password,
    }

    // 🔥 STEP 6 - WE NEED TO POST NEW USER TO THE API!
    console.log(newUser)
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
      <NavBar />
    
        
    <Switch>

      <Route exact path='/signup'>
        <SignUp
          values={formValues}
          onSignUp={onSignUp}
          disabled={formDisabled}
          errors={formErrors}
          onInputChange={onInputChange}
        
        />
      </Route>
      <Route exact path='/favorites'>
           <Favorites
            values={formValues}
            onInputChange={onInputChange}
           />
      </Route>
      {/* <Route exact path='/home/search'>
          <DisplaySearched />
        </Route> */}
      <Route  path='/home'>
        <HomePage 
          searchFormValue={searchFormValue}
          onSearch={onSearch}
          onSearchInputChange={onSearchInputChange}
        />
      </Route>

      <Route exact path='/'>
           <Login
            values={formValues}
            onInputChange={onInputChange}
           />
      </Route>
     

    
    
 </Switch>

    </div>
  );
}

