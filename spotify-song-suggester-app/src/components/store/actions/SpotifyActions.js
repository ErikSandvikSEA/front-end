import axios from 'axios'; 


export const fetchUser = () => {
    return dispatch => {
        dispatch({ type: 'RENDERING_USER_START' })
        axios
        .get('')
    }
}