import React from 'react';

import ButtonComp from './ButtonComp';

export class Display extends React.Component{

  // constructor (props) {
  //   super(props)
  // }

  render() {

    return (
      <div>
        <div>{this.props.heading}</div>
        <div>{this.props.theme}</div>
        <ButtonComp onClick={this.props.handleClick} buttonText='Next'></ButtonComp>
      </div>
    );
  }
}

export default Display;
