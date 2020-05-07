import React, { Component } from 'react';

import Layout from './components/Layout/Layout';


import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (

      <div>
        <Layout>
          <BurgerBuilder/>
          {/* you can wrap other components within it */}
          <p>LOL</p>
        </Layout>

      </div>
    );
  }
}

export default App;
