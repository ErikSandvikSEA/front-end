import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter  as Router} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import appTheme from './themes'

import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk'; 

import rootReducer from './components/store/reducers'; 

const store = createStore(rootReducer, applyMiddleware(thunk)); 

render(

    <ThemeProvider theme={appTheme}>
      <Router >
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  

  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
