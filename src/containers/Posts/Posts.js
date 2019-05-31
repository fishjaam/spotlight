import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import SummaryItem from '../../components/SummaryItem/SummaryItem';
import styles from './Posts.module.css'
import * as actions from '../../store/actions/postActions';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.props.onFetchPosts();
    }

    render () {

        return (
            <div className={styles.grid}>
                {this.props.posts.map(post => {
                    return <SummaryItem
                        title={post.title}
                        description={post.description}
                        age={post.age}
                        location={post.location}
                        amount={post.amount}
                        username={post.username}
                        link={post.link}
                        key={post.postID}
                        postID={post.postID}
                        props={this.props}></SummaryItem>
                })}
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
