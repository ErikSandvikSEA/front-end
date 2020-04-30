import axios from 'axios'; 


export const fetchUser = () => {
    return dispatch => {

        const signUpUrl = ''; 

        dispatch({ type: 'RENDERING_USER_START' })
        axios
        .get(signUpUrl)
        .then( res => {
            console.log('whatever res.data is', res.data); 
            // set the state when receiving property of users
            dispatch({ type: 'FETCH_USER_SUCCESS' , payload:res.data })
        })
        .catch(err => {
            console.log(err); 
            dispatch({ type: 'RENDERING_USER_FAILED', payload: res.data })
        })
    }
}