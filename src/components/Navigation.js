import React from 'react';
// import { Link } from "@curi/react-dom";

import { Navbar, NavItem } from 'react-materialize'

export class Navigation extends React.Component{

  render() {

    return (

      <Navbar brand='WYR' right>
        <NavItem href='/questions'>Questions</NavItem>
        <NavItem href='/topics'>Topics</NavItem>
      </Navbar>

    );
  }
}

export default Navigation;
