import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const root = process.env.REACT_APP_ROOT

ReactDOM.render((
  <Router>
    <div>
      <Route exact path={root} component={App} />
      <Route path={ root + ':timerSpeed' } component={App} />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
