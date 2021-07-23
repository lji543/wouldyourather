import React from 'react';

import data from '../../data.json';
import DisplayTheme from '../Utility/DisplayTheme';

export class TheAnd extends React.Component{

  // constructor (props) {
  //   super(props)
  // }

  questionBank = data.theAnd;

  capitalize = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  getRandomQuestion = () => {
    let question = this.questionBank[Math.floor(Math.random()*this.questionBank.length)];
    question = this.capitalize(question) + '?';
    return question;
  }

  firstQuestion = this.getRandomQuestion();

  state = {
    question: this.firstQuestion
  }

  handleClick = () => {
    let question = this.getRandomQuestion();
    this.setState({question: question});
  }

  render() {
    // this.getRandomQuestion();

    return (

      <div>
        <DisplayTheme theme={this.state.question} handleClick={this.handleClick}/>
      </div>

    );
  }
}

export default TheAnd;
