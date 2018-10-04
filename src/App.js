import React, { Component } from 'react';

// import ActiveTheme from './components/ActiveTheme';
import AddTheme from './components/AddTheme';
// import AddQuestion from './components/AddQuestion';
// import AddTopic from './components/AddTopic';
import Navigation from './components/Navigation';
// import Question from './components/Question';
// import Topic from './components/Topic';

import './scss/App.scss';

class App extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <Navigation />
        <AddTheme path={this.props.path}/>
      </div>
    );
  }
}

export default App;
