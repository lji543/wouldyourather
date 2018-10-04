import React from 'react';

import AddQuestion from './AddQuestion';
import AddTopic from './AddTopic';

export class AddTheme extends React.Component{

  // constructor(props) {
  //   super(props);
  //   // console.log(props)
  // }

  render() {
    let game;
    let path = this.props.path

    if (path === '/topics') {
      game = <AddTopic />;
    } else {
      game = <AddQuestion />;
    }

    return (
      <div>
        {game}
      </div>
    );
  }
}

export default AddTheme;
