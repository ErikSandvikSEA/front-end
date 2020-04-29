const initialState = {
    users: [], 
    isRendering: false, 
    error: '', 
}

export const spotifyReducer = (state = initialState, action )=> {
    switch (action.type) {
        case 'RENDERING_USER_START': 
        return {
            ...state, 
            isRendering: true, 
        }

        case 'RENDERING_USER_SUCCESS': 
        return {
            ...state, 
            users: action.payload, 
            isRendering: false, 
            error: '', 
        }

        case 'RENDERING_USER_FAILED': 
        return {
            ...state, 
            error: action.payload
        }
    }
}