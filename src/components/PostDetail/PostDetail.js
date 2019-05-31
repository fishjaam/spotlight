import React, {Component} from 'react';
import {connect} from 'react-redux';

const postDetail = props => {

    return (
        <div>
            This is the post detail
        </div>
    )    
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(postDetail);