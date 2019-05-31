const initialState = {
    posts: [],
    loading: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {

        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        
        case 'FETCH_POSTS_FAIL':
            return {
                ...state,
                loading: false
            }

        case 'FETCH_POSTS_START':
            return {
                ...state,
                loading: true
            }
        
        default: {
            return state
        }
    }
}

export default reducer;