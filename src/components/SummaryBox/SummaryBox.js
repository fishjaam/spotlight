import React, {useState} from 'react';
import styles from './SummaryBox.module.css'

const SummaryItem = props => {
    const [title, setTitle] = useState('Some title');
    const [description, setDescription] = useState('this is a post description');
    // const [age, setAge] = useState(32);
    // const [location, setLocation] = useState('NYC');
    // const [amount, setAmount] = useState(5000);
    // const [username, setUsername] = useState('test1234');
    // const [test, setTest] = useState('test.com');

    return (
        <div className={styles.SummaryBox}>
            <p className={styles.Title}>Post ID: {props.postId}</p>

            <p className={styles.Detail}>{description}</p>
            <p className={styles.Detail}>Testing description 3</p>
            <p className={styles.Detail}>Testing description 1</p>
        </div>
    )
}

export default SummaryItem;
