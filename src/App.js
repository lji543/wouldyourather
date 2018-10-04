import React, { Component } from 'react';

import ActiveTheme from './components/ActiveTheme';
import AddQuestion from './components/AddQuestion';
// import AddTopic from './components/AddTopic';
import Navigation from './components/Navigation';
import Question from './components/Question';
// import Topic from './components/Topic';

import './styles/css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <AddQuestion />
      </div>
    );
  }
}

export default App;
