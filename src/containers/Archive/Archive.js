import React, {Component} from 'react';
import {connect} from 'react-redux';

import SummaryItem from '../../components/SummaryItem/SummaryItem';

class Archive extends Component {
    
    render () {
        return (
            <div>
                <br></br>
                {this.props.posts.map(post => {
                    return <SummaryItem
                        home={false}
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

export default connect(mapStateToProps)(Archive);
