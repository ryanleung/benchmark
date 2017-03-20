import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App.js';
import configureStore from './components/configureStore'
import ExplorePage from './components/ExplorePage'
import AddBenchmarkPage from './components/AddBenchmarkPage'
import SignInPage from './components/SignInPage'
import NotFoundPage from './components/NotFoundPage'

const store = configureStore()

/* TODO: Make explore page the IndexRoute */
const Routes = (props) => (
  <Provider store={store}>
    <Router {...props}>
      <Route path="/" component={App} >
        <IndexRoute component={ExplorePage} />
        <Route path="add_benchmark" component={AddBenchmarkPage} />
        <Route path="login" component={SignInPage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;