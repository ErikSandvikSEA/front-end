import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import HomePage from './components/HomePage'
import Login from './components/Login'
import SignUp from './components/SignUp'

import { v4 as uuid } from 'uuid'
import Button from '@material-ui/core/Button';

export default function App() {
  return (
    <div className="App">
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
        <SignUp/>
      </Route>


      <Route path='/login'>
           <Login />
      </Route>

      {/* <Route>
        <HomePage path='/' />
      </Route> */}
    
 </Switch>

    </div>
  );
}

