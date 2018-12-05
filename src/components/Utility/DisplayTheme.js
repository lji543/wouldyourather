import React from 'react';

import ButtonComp from './ButtonComp';

export class DisplayTheme extends React.Component{

  // constructor (props) {
  //   super(props)
  // }

  render() {

    return (
      <div>
        <div className="display-theme__header"><h4>{this.props.heading}</h4></div>
        <div className="display-theme__theme">{this.props.theme}</div>
        <ButtonComp onClick={this.props.handleClick} buttonText='Next'></ButtonComp>
      </div>
    );
  }
}

export default DisplayTheme;
