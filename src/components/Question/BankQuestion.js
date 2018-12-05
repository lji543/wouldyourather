import React from 'react';

import data from '../../data.json';
import DisplayTheme from '../Utility/DisplayTheme';

export class BankQuestion extends React.Component{

  // constructor (props) {
  //   super(props)
  // }

  questionBank = data.questionBank;

  question: '';

  getRandomQuestion = () => {
    this.question = this.questionBank[Math.floor(Math.random()*this.questionBank.length)].theme;
    this.question = this.capitalize(this.question) + '?';
  }

  capitalize = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    this.getRandomQuestion();

    return (

      <div>
        <DisplayTheme heading="Would you Rather..." theme={this.question} handleClick={this.props.handleClick}/>
      </div>

    );
  }
}

export default BankQuestion;
