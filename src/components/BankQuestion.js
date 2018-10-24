import React from 'react';

import data from '../data.json'

export class BankQuestion extends React.Component{

  questionBank = data.questionBank;

  question: '';

  constructor (props) {
    super(props)
    this.state = {question:this.question};
  }

  newQuestion = () =>
    this.setState({question:this.question});

  getRandomQuestion = () => {
    this.question = this.questionBank[Math.floor(Math.random()*this.questionBank.length)].q;
    this.question = this.capitalize(this.question) + '?';
  }


  capitalize = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    this.getRandomQuestion();

    return (

      <div>
        <div>Would you Rather...</div>
        <div>{this.question}</div>
      </div>

    );
  }
}

export default BankQuestion;
