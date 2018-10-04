import React from 'react';

export class Question extends React.Component{

  words = {
    nouns: [
      "your cousin",
      "your mom",
      "your sibling"
    ],
    verbs: [
      "float",
      "marry",
      "code"
    ]
  };

  question: '';

  constructor (props) {
    super(props)
    this.state = {question:this.question};
  }

  newQuestion = () => {
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
    this.constructVerbPhrase();

    return (
      <div>

        <div>
          <h2>Would you rather?</h2>
          <div>
            {this.question}
          </div>
          <button onClick={this.newQuestion}>Next</button>
        </div>

      </div>
    );
  }
}

export default Question;
