import React, { Component } from 'react';
import Header from './../../common/components/header/Header';
import Wizard from './../../common/components/wizard/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header appName="Survey" />
         <Wizard />
      </div>
    );
  }
}

export default App;
