import React from 'react';
import {Button, Icon} from 'react-materialize'

const ButtonComp = props =>
  <div className="wyr-button">
    <Button waves='light' onClick={props.onClick}>{props.buttonText}
      <Icon left>{props.buttonIcon}</Icon>
    </Button>
  </div>;

export default ButtonComp;
