import axios from 'axios';

export const fetchPostsStart = () => {
    return {
        type: 'FETCH_POSTS_START'
    }
}

export const fetchPostsSuccess = (fetchedPosts) => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        posts: fetchedPosts
    }
}

export const fetchPostsFail = (err) => {
    return {
        type: 'FETCH_POSTS_FAIL',
        error: err
    }
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStart());
        
        axios.get('https://spotlight-56407.firebaseio.com/posts.json')
            .then(res => {
                console.log(res)
                const fetchedPosts = [];
                for(let post in res.data){
                    fetchedPosts.push({
                        ...res.data[post],
                        postID: post
                    })
                }
                dispatch(fetchPostsSuccess(fetchedPosts));
            })
            .catch(err => {
                dispatch(fetchPostsFail(err));
            })
    }
}