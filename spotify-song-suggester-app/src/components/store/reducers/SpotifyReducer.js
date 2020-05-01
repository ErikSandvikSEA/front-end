const initialState = {
    users: [], 
    favorites: [], 
    suggestions: [],
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

        case 'RENDERING_SUGGESTIONS_START': 
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

        case 'RENDERING_SUGGESTIONS_SUCCESS': 
            return {
                ...state, 
                suggestions: action.payload, 
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

        case 'RENDERING_SUGGESTIONS_FAILED':
            return {
                ...state, 
                error: action.payload
            }
        default : 
            return state; 
    }
}