import React from 'react';
import styles from './SummaryBox.module.css'
const summaryItem = props => {


    return (
        <div className={styles.SummaryBox}>
            <p>Testing title</p>
            <p>Testing description 1</p>
            <p>Testing description 2</p>
            <p>Testing description 3</p>
        </div>
    )
}

export default summaryItem;
