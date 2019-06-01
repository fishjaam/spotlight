import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/layout';
import Posts from './containers/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

class App extends Component {

  

  render () {
    let routes = (
      <Switch>
        <Route path="/detail/:id" component={PostDetail}/>
        <Route path="/" component={Posts}/>
      </Switch>
    )

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    )
  }
  
}

export default App;
