import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Headset from '@material-ui/icons/Headset';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Route, Switch } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import Suggestions from './Suggestions'

const dummyDataUrl = 'https://spotify-song-suggester-4.herokuapp.com/dummy_data'




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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  favoritesRoot: {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(0),
    },
  },
}));

const initialSuggestedSearch = {
  album: '',
  artist: '',
  cover_art: '',
  song: '',
  song_id: '',
}
export default function Favorites() {
  const classes = useStyles();
  const [favoritesInfo, setFavoritesInfo] = useState([])



  useEffect(() => {

    axios.get(dummyDataUrl)
      .then(response => {
        // console.log('working')
        console.log(response.data)
        setFavoritesInfo(response.data)
      })
      .catch(err => {
        console.log('error', err)
      })
  }, []
  )




  if (!favoritesInfo.length) {
    return (
      <div className={classes.favoritesRoot}>
        <CircularProgress />
      </div>
    )
  }

  return (
    <div>
      <h2>Favorites</h2>
    </div>
  )
}

