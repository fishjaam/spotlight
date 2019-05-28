import React from 'react';

import './App.css';
import Layout from './components/Layout/layout';
import SummaryBox from './components/SummaryBox/SummaryBox';
import Posts from './components/Posts/Posts';

function App() {

  return (
    <div className="App">
      <Layout>
        <Posts />
      </Layout>
    </div>
  );
}

export default App;
