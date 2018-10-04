import React from 'react';

import Question from './Question';
import Topic from './Topic';

export class ActiveTheme extends React.Component{

  constructor(props) {
    super(props);
    console.log(props)
  }

  whichGame = () => {
    if (this.props) {
      return <div><Question /></div>
    } else {
      return <div><Topic /></div>
    }
  }

  render() {

    return (
      <div>
        <Question />
      </div>
    );
  }
}

export default ActiveTheme;
