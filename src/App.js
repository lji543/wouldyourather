import React, { Component } from 'react';

import Navigation from './components/Navigation';

import './scss/App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
