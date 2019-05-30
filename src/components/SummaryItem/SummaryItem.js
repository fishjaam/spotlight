import React, {useState} from 'react';
import styles from './SummaryItem.module.css'

const SummaryItem = props => {
    const [title, setTitle] = useState('Some title');
    const [description, setDescription] = useState('this is a post description');
    const [age, setAge] = useState(32);
    const [location, setLocation] = useState('NYC');
    const [amount, setAmount] = useState(5000);
    const [username, setUsername] = useState('test1234');
    const [testLink, setTest] = useState('test.com');

    return (
        <div className={styles.SummaryBox}>
            <p className={styles.Title}>{title}: ID {props.postId}</p>

            <p className={styles.Detail}>{description}</p>
            <p className={styles.Detail}>{age}  |  {location}</p>
            <p className={styles.Detail}>{amount}</p>
            <p className={styles.Detail}>{username}</p>
            <p className={styles.Detail}>{testLink}</p>
        </div>
    )
}

export default SummaryItem;
