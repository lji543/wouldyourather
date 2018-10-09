import React from 'react';

import data from '../data.json'

export class RandomQuestion extends React.Component{

  buttonText = 'Next';

  questionBank = data.questionBank;

  words = {
    nouns: data.nouns,
    verbs: data.verbs
  };

  question: '';

  constructor (props) {
    super(props)
    this.state = {question:this.question};
  }
  
  newQuestion = () =>
    this.setState({question:this.question});

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
    // {{this.question}}
    // <h2>Would you rather?</h2>
    this.constructVerbPhrase();

    return (

      <div>
        {this.question}
      </div>

    );
  }
}

export default RandomQuestion;
