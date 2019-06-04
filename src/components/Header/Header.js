import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'; 

const header = props => (
    <header className={styles.Header}>
        <div>
            <NavLink 
                className={styles.NavItem}
                to="/">
                Home
            </NavLink>
        </div>
        <div>
            <NavLink className={styles.NavItem}>
                Submit
            </NavLink>
            {' | '}
            <NavLink 
                className={styles.NavItem}
                to="/archive">
                Archive
            </NavLink>
        </div> 
        
    </header>
)

export default header;
