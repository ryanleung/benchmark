import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App.js';
import AddBenchmarkPage from './components/AddBenchmarkPage'
import CompanyPage from './components/CompanyPage'
import configureStore from './components/configureStore'
import ExplorePage from './components/ExplorePage'
import NotFoundPage from './components/NotFoundPage'
import SignInPage from './components/SignInPage'

const store = configureStore()

/* TODO: Make explore page the IndexRoute */
const Routes = (props) => (
  <Provider store={store}>
    <Router {...props}>
      <Route path="/" component={App} >
        <IndexRoute component={ExplorePage} />
        <Route path="add_benchmark" component={AddBenchmarkPage} />
        <Route path="login" component={SignInPage} />
        <Route path='industry/:industry_id/company/:company_id' component={CompanyPage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;