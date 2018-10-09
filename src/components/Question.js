import React from 'react';

import RandomQuestion from './RandomQuestion';
import BankQuestion from './BankQuestion';
import ButtonComp from './ButtonComp';


let int = Math.floor(Math.random() * Math.floor(2));
let questionType;
// TODO use randomizer here
if (int === 0) {
  questionType = <BankQuestion />;
} else {
  questionType = <RandomQuestion />;
};

// state = {
//   question
// }
// add some sort of event handler as props to the question components

const Question = props =>
  // TODO double const here? use correct react/es6 setup
  // TODO make all tab active on initial page load
  // TODO loop through these tabs/divs and replace hardcoded keywords
  <div>
    <div className="row">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3"><a href="#random">Random Q&apos;s</a></li>
          <li className="tab col s3"><a href="#bank">Bank Q&apos;s</a></li>
          <li className="tab col s3"><a href="#all">All Q&apos;s</a></li>
        </ul>
      </div>
      <div id="random" className="col s12 question-container">
        <RandomQuestion />
      </div>
      <div id="bank" className="col s12 question-container">
        <BankQuestion />
      </div>
      <div id="all" className="col s12 question-container">
        {questionType}
      </div>
    </div>
    <ButtonComp onClick={props.newQuestion} buttonText='Next'></ButtonComp>
  </div>;

export default Question;
