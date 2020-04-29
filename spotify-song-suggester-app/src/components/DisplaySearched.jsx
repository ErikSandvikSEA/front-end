  
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
     icon: {
          marginRight: theme.spacing(2),
     },
     heroContent: {
          backgroundColor: '#1DB954',
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
          padding: '2%',
 
     },
     cardMedia: {
          paddingTop: '56.25%', // 16:9
     },
     cardContent: {
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '2%',
     },
     footer: {
          backgroundColor: '#1DB954',
          padding: theme.spacing(6),
     },
     root: {
          display: 'flex',
          justifyContent: 'center',
          '& > * + *': {
               marginLeft: theme.spacing(0),
          },
     },
     textMargin: {
          marginTop: '2%',
     }
}));

const cards = [1, 2, 3, 4, 5, 6];
const getUrl = 'https://api.github.com/users/octocat'
const dummyDataUrl = 'https://spotify-song-suggester-4.herokuapp.com/dummy_data'
export default function DisplaySearched() {
     const classes = useStyles();

     const [songInfo, setSongInfo] = useState([])


     useEffect(() => {

          axios.get(dummyDataUrl)
               .then(response => {
                    // console.log('working')
                    console.log(response.data)
                    setSongInfo(response.data)
               })
               .catch(err => {
                    console.log('error',)
               })
     }, []
     )
     if (!songInfo.length) {
          return (
               <div className={classes.root}>
                    <CircularProgress />
               </div>
          )
     }
     return (
          <Container className={classes.cardGrid} maxWidth="md">
               <CssBaseline />
               <Grid container spacing={4}>
                    {songInfo.map((specificSongInfo, idx) => (
                         <Grid item key={idx} xs={12} sm={6} md={4}>
                              <Card className={classes.card}>
                                   <CardMedia
                                        className={classes.cardMedia}
                                        image={specificSongInfo.cover_art}
                                        title="Image title"
                                   />
                                   <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2" className={classes.textMargin}>
                                             {specificSongInfo.song}
                                        </Typography>
                                        <Typography className={classes.textMargin}>
                                             {specificSongInfo.artist}
                                        </Typography>
                                        <Button variant='outlined'>
                                             Add to Favorites
                                        </Button>
                                   </CardContent>
                                   <CardActions>                                        
                                        <iframe src={`https://embed.spotify.com/?uri=spotify:track:4musm1R7AMRIUrdsIr1jAp&view=coverart&theme=black`} height='80' width='100%'></iframe>
                                   </CardActions>
                              </Card>
                         </Grid>
                    ))}
               </Grid>
          </Container>

     )
}