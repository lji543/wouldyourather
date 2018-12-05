import React from 'react';

import RandomQuestion from './Question/RandomQuestion';
import BankQuestion from './Question/BankQuestion';
import Topic from './Topic';

export class Scramble extends React.Component{

  int = Math.floor(Math.random() * Math.floor(3));

  handleClick = () => {
    this.int = Math.floor(Math.random() * Math.floor(3));
    this.setState({displayedTheme: this.randomArr[this.int]})
  }

  randomArr = [
    <RandomQuestion handleClick={this.handleClick} />,
    <BankQuestion handleClick={this.handleClick} />,
    <Topic scramble="true" handleClick={this.handleClick} />
  ];

  state = {
    displayedTheme: this.randomArr[this.int]
  }

  render() {

    return (
      <div>
        <div>{this.state.displayedTheme}</div>
      </div>
    );
  }
}

export default Scramble;
