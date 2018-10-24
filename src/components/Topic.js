import React from 'react';

import data from '../data.json';
import ButtonComp from './ButtonComp';
import Browser from '@hickory/browser';

export class Topic extends React.Component{

  formatTopic = string =>
    string.charAt(0).toUpperCase() + string.slice(1) + '?';

  topics = data.topics;
  int = Math.floor(Math.random() * Math.floor(this.topics.length));
  path = Browser().location.pathname;
  topic = this.formatTopic(this.topics[this.int].t);

  state = {
    topic: this.topic
  }

  handleClick = () => {
    this.int = Math.floor(Math.random() * Math.floor(this.topics.length));
    this.topic = this.formatTopic(this.topics[this.int].t);

    this.setState({topic: this.topic})
  }

  render() {
    let button;
    if (this.path === '/topics') {
      button = <ButtonComp onClick={this.handleClick} buttonText='Next'></ButtonComp>;
    }

    return (
      <div>
        <div>{this.state.topic}</div>
        {button}
      </div>
    );
  }
}

export default Topic;
