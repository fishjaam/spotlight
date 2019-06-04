import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'; 

const header = props => (
    <header className={styles.Header}>
        <div>
            <NavLink className={styles.NavItem}>
                Home
            </NavLink>
        </div>
        <div>
            <NavLink className={styles.NavItem}>
                Submit
            </NavLink>
            {' | '}
            <NavLink className={styles.NavItem}>
                Archive
            </NavLink>
        </div> 
        
    </header>
)

export default header;
