import React, {Component} from 'react';

import './App.css';
import Layout from './components/Layout/layout';
import Posts from './containers/Posts/Posts';

class App extends Component {

  

  render () {
    return (
      <div className="App">
        <Layout>
          <Posts />
        </Layout>
      </div>
    )
  }
  
}

export default App;
