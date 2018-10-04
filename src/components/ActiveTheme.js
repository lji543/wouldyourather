import React from 'react';

import Question from './Question';
import Topic from './Topic';

import Browser from '@hickory/browser'

export class ActiveTheme extends React.Component{

  // constructor(props) {
  //   super(props);
  //   // console.log(props)
  // }

  whichGame = () => {
    if (this.props) {
      return <div><Question /></div>
    } else {
      return <div><Topic /></div>
    }
  }

  render() {
    let game;
    let path = Browser().location.pathname

    if (path === '/topics') {
      game = <Topic />;
    } else {
      game = <Question />;
    }

    return (
      <div>
        {game}
      </div>
    );
  }
}

export default ActiveTheme;
