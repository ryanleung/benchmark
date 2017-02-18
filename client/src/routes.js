import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App.js';
import ExplorePage from './components/ExplorePage.js';
import AddBenchmarkPage from './components/AddBenchmarkPage.js';
import SignInPage from './components/SignInPage.js';
import NotFoundPage from './components/NotFoundPage.js';

/* TODO: Make explore page the IndexRoute */
const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <IndexRoute component={ExplorePage} />
      <Route path="add_benchmark" component={AddBenchmarkPage} />
      <Route path="login" component={SignInPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);

export default Routes;