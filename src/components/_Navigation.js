import React from 'react';

import { Navbar, NavItem } from 'react-materialize'

export class Navigation extends React.Component{

  render() {

    return (

      <Navbar brand='WYR' right className="right hide-on-med-and-down">
        <NavItem href='/questions'>Questions</NavItem>
        <NavItem href='/topics'>Topics</NavItem>
        <NavItem href='/everything'>Everything</NavItem>
        <NavItem href='/add' className="waves-effect waves-light btn">Add Your Own</NavItem>
      </Navbar>

    );
  }
}

export default Navigation;
