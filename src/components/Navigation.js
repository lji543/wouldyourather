import React from 'react';
import { Link } from "@curi/react-dom";

export class Navigation extends React.Component{

  render() {

    return (
      <nav>
        <ul>
          <li>
            <Link to="Questions">Questions</Link>
          </li>
          <li>
            <Link to="Topics">Topics</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
