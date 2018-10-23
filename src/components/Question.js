import React from 'react';

import RandomQuestion from './RandomQuestion';
import BankQuestion from './BankQuestion';
import ButtonComp from './ButtonComp';


export class Question extends React.Component{

  int = Math.floor(Math.random() * Math.floor(2));

  questionType = [
    {id:'bank',title:'Bank Q\'s',component:<BankQuestion />},
    {id:'random',title:'Random Q\'s',component:<RandomQuestion />},
    {id:'all',title:'All Q\'s',component:''}
  ];

  state = {
    question: this.questionType[0]
  }


  handleClickNextQuestion = e => {
    console.log(this.state.question.id)
    let id = this.state.question.id;
    let component;

    if (id === 'bank') {
      component = <BankQuestion />;
    } else if (id === 'random') {
      component = <RandomQuestion />;
    } else {
      component = this.pickARandomQuestion();
    }

    this.setState({question:{component: component}});
  }

  handleCategoryChange = e => {
    let id = e.target.getAttribute('href').slice(1);
    let question;

    question = this.questionType.filter(obj => {
      if (obj.id === 'all') {
        obj.component = this.pickARandomQuestion();
      }
      return obj.id === id;
    })

    this.setState({question:question[0]})
  }

  pickARandomQuestion = () => {
    if (this.int === 0) {
      return <BankQuestion />;
    }
    return <RandomQuestion />;
  }


  // TODO double const here? use correct react/es6 setup
  // TODO make all tab active on initial page load
  // TODO loop through these tabs/divs and replace hardcoded keywords
  render () {

    return (
      <div>
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

        <ButtonComp onClick={this.handleClickNextQuestion} buttonText='Next'></ButtonComp>
      </div>
    )
  }

}

export default Question;
