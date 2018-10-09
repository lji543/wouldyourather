import React from 'react';
import {Button, Icon} from 'react-materialize'

export class ButtonComp extends React.Component{

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {

    return (
      <div className="wyr-button">
        <Button waves='light' onClick={this.props.onClick}>{this.props.buttonText}
          <Icon left>{this.props.buttonIcon}</Icon>
        </Button>
      </div>
    );
  }
}

export default ButtonComp;
