import React from 'react';

import data from '../data.json';
import DisplayTheme from './DisplayTheme';

export class RandomQuestion extends React.Component{

  questionBank = data.questionBank;

  // constructor (props) {
  //   super(props)
  //   this.state = {question:this.question};
  // }

  words = {
    nouns: data.nouns,
    verbs: data.verbs
  };

  question: '';

  randomWord = arr =>
    arr[Math.floor(Math.random()*arr.length)];

  capitalize = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  constructVerbPhrase = () => {
    let firstNoun = this.randomWord(this.words.nouns);
    let secondNoun = this.randomWord(this.words.nouns);

    // Make sure both nouns are not the same
    if (firstNoun === secondNoun) {
      // TODO needs secondary check, the words could still be the same
      secondNoun = this.randomWord(this.words.nouns);
    }

    let verb = this.randomWord(this.words.verbs);

    this.question =
      `${this.capitalize(verb)} ${firstNoun}, or ${verb} ${secondNoun}?`;
  }

  render() {
    this.constructVerbPhrase();

    return (

      <div>
        <DisplayTheme heading="Would you Rather..." theme={this.question} handleClick={this.props.handleClick}/>
      </div>

    );
  }
}

export default RandomQuestion;
