import React from 'react';

import Question from './Question';
import Topic from './Topic';

import Browser from '@hickory/browser'

export class ActiveTheme extends React.Component{
  // TODO add propTypes to components
  // TODO use const's instead of classes?
  // TODO find proper es6 for fn declarations and usage

  render() {

    let game;
    let path = Browser().location.pathname

    if (path === '/topics') {
      game = <Topic />;
    } else {
      game = <Question />
    }

    return (
      <div className="App-body">
        {game}
      </div>
    );
  }
}

export default ActiveTheme;
