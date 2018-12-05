import React from 'react';

// import { Navbar, NavItem } from 'react-materialize'

export class Navigation extends React.Component{

  render() {

    return (

      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo hide-on-med-and-down">WYR</a>
            <ul className="right">
              <li><a className="" href="/questions">Questions</a></li>
              <li><a className="" href="/topics">Topics</a></li>
              <li><a className="" href="/everything">Everything</a></li>
              <li><a className="waves-effect waves-light btn" href="/add">Add<span className="hide-on-med-and-down">&nbsp;Your Own</span></a></li>
            </ul>
          </div>
        </nav>


      </div>


    );
  }
}

export default Navigation;
