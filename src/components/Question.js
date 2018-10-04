import React from 'react';

import data from '../data.json'

import ButtonComp from './ButtonComp';

export class Question extends React.Component{

  buttonText = 'Next';



  words = {
    nouns: data.nouns,
    verbs: data.verbs
  };

  question: '';

  constructor (props) {
    super(props)
    this.state = {question:this.question};
  }

  newQuestion = () => {
    console.log('newQuestion')
    this.setState({question:this.question});
  }

  randomWord = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
  }

  constructVerbPhrase = () => {
    let firstNoun = this.randomWord(this.words.nouns);
    let secondNoun = this.randomWord(this.words.nouns);

    // Make sure both nouns are not the same
    if (firstNoun === secondNoun) {
      secondNoun = this.randomWord(this.words.nouns);
    }

    let verb = this.randomWord(this.words.verbs);

    this.question =
      `${verb} ${firstNoun}, or ${verb} ${secondNoun}?`
  }

  render() {
    // {{this.question}}
    // <h2>Would you rather?</h2>
    this.constructVerbPhrase();

    return (
      <div>

        <div>

          <div>
            {this.question}
          </div>
          <ButtonComp onClick={this.newQuestion} buttonText={this.buttonText}></ButtonComp>
        </div>

      </div>
    );
  }
}

export default Question;
