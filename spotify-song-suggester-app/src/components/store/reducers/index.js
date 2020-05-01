import { combineReducers } from 'redux'; 
import { spotifyReducer as spotify } from './SpotifyReducer'; 

export default combineReducers({
    spotify
})