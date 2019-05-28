import React, {Component} from 'react';
import SummaryItem from '../SummaryBox/SummaryBox';

class Posts extends Component {
    state = {
        postId: [1, 7, 12]
    }

    
    render () {

        return (
            <div>
                {this.state.postId.map(postId => {
                    return <SummaryItem postId={postId}></SummaryItem>
                })}
            </div>
        ) 
    }
}

export default Posts;
