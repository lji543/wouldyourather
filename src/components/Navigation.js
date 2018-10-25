import React from 'react';

import { Navbar, NavItem } from 'react-materialize'

export class Navigation extends React.Component{

  render() {

    return (

      <Navbar brand='WYR' right>
        <NavItem href='/questions'>Questions</NavItem>
        <NavItem href='/topics'>Topics</NavItem>
        <NavItem href='/everything'>Everything</NavItem>
        <NavItem href='/add'>Add Your Own</NavItem>
      </Navbar>

    );
  }
}

export default Navigation;
