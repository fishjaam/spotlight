import React, {Component} from 'react';
import Header from '../Header/Header';
import styles from './layout.module.css';

class Layout extends Component {


    render () {
        return (
            <div>
                <Header />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </div>
        )    
    }
}

export default Layout;