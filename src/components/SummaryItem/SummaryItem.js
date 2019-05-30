import React, {useState} from 'react';
import styles from './SummaryItem.module.css'

const SummaryItem = props => {

    return (
        <div className={styles.SummaryBox}>
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
