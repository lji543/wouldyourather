import React from 'react';

import data from '../data.json';
import DisplayTheme from './Utility/DisplayTheme';

export class Topic extends React.Component{

  formatTopic = string =>
    string.charAt(0).toUpperCase() + string.slice(1) + '?';

  topics = data.topics;
  int = Math.floor(Math.random() * Math.floor(this.topics.length));
  topic = this.formatTopic(this.topics[this.int].theme);

  state = {
    topic: this.topic
  }

  handleClick = () => {
    if (this.props.scramble) {
      return this.props.handleClick();
    }
    return this.handleNextTopic();
  }

  handleNextTopic = () => {
    this.int = Math.floor(Math.random() * Math.floor(this.topics.length));
    this.topic = this.formatTopic(this.topics[this.int].theme);

    this.setState({topic: this.topic})
  }

  render() {

    return (
      <div>
        <DisplayTheme heading="Topic..." theme={this.state.topic} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default Topic;
