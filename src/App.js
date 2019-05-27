import React from 'react';

import './App.css';
import Layout from './components/Layout/layout';
import SummaryBox from './components/SummaryBox/SummaryBox';

function App() {

  return (
    <div className="App">
      <Layout>
        <SummaryBox />
      </Layout>
    </div>
  );
}

export default App;
