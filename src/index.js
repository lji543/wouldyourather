import React from 'react';
import ReactDOM from 'react-dom';

import { curi } from '@curi/router';
import Browser from '@hickory/browser';
import { curiProvider } from '@curi/react-dom';
import routes from './routes';

import './styles/css/index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

const history = Browser();
const router = curi(history, routes);
const Router = curiProvider(router);

ReactDOM.render(<Router>
    {({ response }) => {
      return (
        <div>
          <App />
          <response.body params={response.params} />
        </div>
      );
    }}
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
