import React from 'react';
import { Router, Route } from 'react-router';

import ExplorePage from './components/ExplorePage.js';
import AddBenchmarkPage from './components/AddBenchmarkPage.js';
import SignInPage from './components/SignInPage.js';
import NotFoundPage from './components/NotFoundPage.js';

/* TODO: Make explore page the IndexRoute */
const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ExplorePage} />
    <Route path="/add_benchmark" component={AddBenchmarkPage} />
    <Route path="/login" component={SignInPage} />
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default Routes;