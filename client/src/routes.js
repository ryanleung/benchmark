import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import SignInPage from './components/SignInPage.js';
import NotFoundPage from './components/NotFoundPage.js';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={SignInPage} />
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default Routes;