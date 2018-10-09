import React from 'react';

export class Randomizer extends React.Component{

  render() {

    return (

      <Navbar brand='WYR' right>
        <NavItem href='/questions'>Questions</NavItem>
        <NavItem href='/topics'>Topics</NavItem>
      </Navbar>

    );
  }
}

export default Randomizer;
