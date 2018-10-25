import React from 'react';

import RandomQuestion from './RandomQuestion';
import BankQuestion from './BankQuestion';

export class Question extends React.Component{

  constructor(props) {
    super(props);
    this.handleClickNextQuestion = this.handleClickNextQuestion.bind(this);

    this.state = {
      question: this.questionType[0]
    }
  }

  int = Math.floor(Math.random() * Math.floor(2));

  // Must be definied before we send as props to the question components
  handleClickNextQuestion = e => {
    let id = this.state.question.id;
    let question;

    // TODO: Cleanup
    if (id === 'bank') {
      question = this.questionType.filter(obj => {
        return obj.id === id;
      });
      question[0].component = <BankQuestion handleClick={this.handleClickNextQuestion} />;

    } else if (id === 'random') {
      question = this.questionType.filter(obj => {
        return obj.id === id;
      });
      question[0].component = <RandomQuestion handleClick={this.handleClickNextQuestion} />;

    } else {
      question = this.questionType.filter(obj => {
        return obj.id === id;
      });
      question[0].component = this.pickARandomQuestion();
    }

    this.setState({question:question[0]});
  }

  questionType = [
    {id:'bank',title:'Bank Q\'s',component:<BankQuestion handleClick={this.handleClickNextQuestion}/>},
    {id:'random',title:'Random Q\'s',component:<RandomQuestion handleClick={this.handleClickNextQuestion}/>},
    {id:'all',title:'All Q\'s',component:''}
  ];

  handleCategoryChange = e => {
    let id = e.target.getAttribute('href').slice(1);
    let question;

    question = this.questionType.filter(obj => {
      if (obj.id === 'all') {
        obj.component = this.pickARandomQuestion();
      }
      return obj.id === id;
    });

    this.setState({question:question[0]});
  }

  pickARandomQuestion = () => {
    this.int = Math.floor(Math.random() * Math.floor(2));

    if (this.int === 0) {
      return <BankQuestion handleClick={this.handleClickNextQuestion} />;
    }
    return <RandomQuestion handleClick={this.handleClickNextQuestion} />;
  }


  // TODO double const here? use correct react/es6 setup
  // TODO make all tab active on initial page load
  // TODO loop through these tabs/divs and replace hardcoded keywords
  // TODO this is basically the same as AddTheme (combine)
  render () {

    return (
      <div className="theme-container">
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              {this.questionType.map(obj => {
                let href = `#${obj.id}`;
                return <li onClick={this.handleCategoryChange} key={obj.id} className="tab col s3"><a href={href}>{obj.title}</a></li>
              })}
            </ul>
          </div>

          <div id="{this.state.question.id}" className="col s12 question-container">{this.state.question.component}</div>
        </div>
      </div>
    )
  }

}

export default Question;
