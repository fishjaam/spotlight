import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import styles from './SummaryItem.module.css'


const SummaryItem = props => {

    const seePostDetails = () => {
        console.log(props.postID);
        props.props.history.push('/detail') //add query param for ID to load specific post
        // <Route to='details'/>
    }

    return (
        <div className={styles.SummaryBox} onClick={() => seePostDetails()}>
            <p className={styles.Title}>title: {props.title}</p>

            <p className={styles.Detail}>{props.description}</p>
            <p className={styles.Detail}>{props.age}  |  {props.location}</p>
            <p className={styles.Detail}>{props.amount}</p>
            <p className={styles.Detail}>{props.username}</p>
            <p className={styles.Detail}>{props.link}</p>
        </div>
    )
}

export default SummaryItem;
