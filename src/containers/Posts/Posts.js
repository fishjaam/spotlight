import React, {Component} from 'react';
import axios from 'axios';

import SummaryItem from '../../components/SummaryItem/SummaryItem';
import styles from './Posts.module.css'

class Posts extends Component {
    state = {
        posts: []
        // posts: [
        //     {
        //         postID: 1,
        //         title: 'Title',
        //         description: 'this is a post description.. text text text text text ',
        //         age: 43,
        //         location: 'NYC',
        //         amount: 1000,
        //         username: 'hi1234',
        //         link: 'test.com'
        //     }, 
        //     {
        //         postID: 2,
        //         title: 'Title 2',
        //         description: 'Antoher description',
        //         age: 23,
        //         location: 'CA',
        //         amount: 3221,
        //         username: 'asdfgew',
        //         link: 'test.com'
        //     }]
    }

    componentDidMount() {
        axios.get('https://spotlight-56407.firebaseio.com/posts.json')
            .then(res => {
                console.log('component did mount: ', res.data)
                const fetchedPosts = [];
                for(let post in res.data){
                    fetchedPosts.push({
                        ...res.data[post],
                        postID: post
                    })
                }
                this.setState({posts: fetchedPosts})
                console.log('state posts: ', this.state.posts)

            })
            .catch(err => {
                console.log(err)
            })
    }

    saveData = () => {
        for(let post of this.state.posts){
            console.log(post)
            axios.post('https://spotlight-56407.firebaseio.com/posts.json', post)
                .then(res => {
                console.log(res)
                })
                .catch(err => {
                console.log(err)
                });
        }    
    }
    
    render () {

        return (
            <div className={styles.grid}>
                {this.state.posts.map(post => {
                    return <SummaryItem
                        title={post.title}
                        description={post.description}
                        age={post.age}
                        location={post.location}
                        amount={post.amount}
                        username={post.username}
                        link={post.link}></SummaryItem>
                })}
            </div>
        ) 
    }
}

export default Posts;
