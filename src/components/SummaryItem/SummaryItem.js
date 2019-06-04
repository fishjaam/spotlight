import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './SummaryItem.module.css'


const SummaryItem = props => {

    // const seePostDetails = () => {
    //     console.log(props.postID);
    //     const queryParams = props.postID;
    //     props.props.history.push('/detail') //add query param for ID to load specific post
    // }

    return (
        <Link to={'detail/' + props.postID}>
            <div className={props.home ? styles.SummaryBox : styles.Archive}>
                <p className={styles.Title}>{props.title}</p>

                <p className={styles.Description}>{props.description}</p>
                <p className={styles.Detail}>{props.age}  |  {props.location}</p>
                <p className={styles.Detail}>{props.amount}</p>
                <p className={styles.Detail}>{props.username}</p>
                <p className={styles.Detail}>{props.link}</p>
            </div>
        </Link>
        
    )
}

export default SummaryItem;