import React from 'react';

import RandomQuestion from './RandomQuestion';
import BankQuestion from './BankQuestion';
import Topic from './Topic';
import ButtonComp from './ButtonComp';
import Browser from '@hickory/browser';

export class Scramble extends React.Component{

  int = Math.floor(Math.random() * Math.floor(3));
  path = Browser().location.pathname;

  randomArr = [
    <RandomQuestion />,
    <BankQuestion />,
    <Topic />
  ];

  state = {
    displayedTheme: this.randomArr[this.int]
  }

  handleClick = () => {
    this.int = Math.floor(Math.random() * Math.floor(3));

    this.setState({displayedTheme: this.randomArr[this.int]});
  }

  render() {

    return (
      <div>
        <div>{this.state.displayedTheme}</div>
        <ButtonComp onClick={this.handleClick} buttonText='Next'></ButtonComp>
      </div>
    );
  }
}

export default Scramble;
