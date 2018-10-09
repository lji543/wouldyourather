import React from 'react';

import QuestionGenerator from './QuestionGenerator'

const Question = props => {
  const tabs = <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s3"><a href="#random">Random Q&apos;s</a></li>
          <li class="tab col s3"><a class="active" href="#bank">Bank Q&apos;s</a></li>
          <li class="tab col s3"><a href="#all">All Q&apos;s</a></li>
        </ul>
      </div>
      <div id="random" class="col s12">
        <QuestionGenerator
          type="random"
        />
      </div>
      <div id="bank" class="col s12">
        <QuestionGenerator
          type="bank"
        />
      </div>
      <div id="all" class="col s12">
        <QuestionGenerator
          type="all"
        />
      </div>
    </div>

  return (
    <div>
      {tabs}
    </div>
  )
}

export default Question;
