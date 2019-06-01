import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './PostDetail.module.css'

const postDetail = props => {

    let posts = props.posts
    let displayPost = posts.filter(post => post.postID === props.match.params.id)[0];
    console.log(displayPost)

    return (
        <div>
            <br></br>
            <p className={styles.Title}>{displayPost.title}</p>

            <hr style={{borderColor: '#c49283', margin: '25px 6px'}}></hr>

            <p>{displayPost.description}</p>
            <p>{displayPost.age}</p>
            <p>{displayPost.amount}</p>
            <p>{displayPost.location}</p>
            <p>{displayPost.username}</p>
            <p>{displayPost.link}</p>
        </div>
    )    
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(postDetail);
