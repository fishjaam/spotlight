import React, {Component} from 'react';
import SummaryItem from '../SummaryItem/SummaryItem';
import styles from './Posts.module.css'

class Posts extends Component {
    state = {
        postId: [1, 7, 12, 43, 78]
    }

    
    render () {

        return (
            <div className={styles.grid}>
                {this.state.postId.map(postId => {
                    return <SummaryItem postId={postId}></SummaryItem>
                })}
            </div>
        ) 
    }
}

export default Posts;
