import React from 'react';

import EsthersQs from './EsthersQs/EsthersQs';
import Question from './Question/Question';
import TheAnd from './TheAnd/TheAnd';
import Topic from './Topic';
import Scramble from './Scramble';

import Browser from '@hickory/browser';

const ActiveTheme = () => {
  // TODO add propTypes to components
  // TODO use const's instead of classes?
  // TODO find proper es6 for fn declarations and usage

  let game;
  let path = Browser().location.pathname;

  if (path === '/topics') {
    game = <Topic />;
  } else if (path === '/everything') {
    game = <Scramble />;
  } else if (path === '/theand') {
    game = <TheAnd />;
  } else if (path === '/esther') {
    game = <EsthersQs />;
  } else {
    game = <Question />
  }

  return (
    <div className="App-body">
      {game}
    </div>
  );
}

export default ActiveTheme;
