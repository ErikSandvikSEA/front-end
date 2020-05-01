const initialState = {
    users: [], 
    favorites: [], 
    isRendering: false, 
    error: '', 
}

export const spotifyReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'RENDERING_USER_START': 
        return {
            ...state, 
            isRendering: true, 
        }

        case 'SENDING_USER_START': 
            return {
                ...state, 
                isRendering:true,
            }

        case 'RENDERING_FAVORITES_START': 
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

        case 'SENDING_USER_SUCCESS': 
            return {
                ...state, 
                users: action.payload, 
                isRendering: false, 
                error: ''
            }

        case 'RENDERING_FAVORITES_SUCCESS': 
            return {
                ...state, 
                favorites: action.payload, 
                isRendering: false, 
                error: '', 
            }

        case 'RENDERING_USER_FAILED': 
            return {
                ...state, 
                error: action.payload
            }

        case 'SENDING_USER_FAILED': 
            return {
                ...state, 
                error: action.payload,
            }

        case 'RENDERING_FAVORITES_FAILED':
            return {
                ...state, 
                error: action.payload
            }
        default : 
            return state; 
    }
}