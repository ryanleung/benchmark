import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


import { fetchCompaniesIfNeeded } from './actions'
import CompanyListContainer from './CompanyListContainer'
import SearchBar from './SearchBar'

import './ExplorePage.css';


class ExplorePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCompaniesIfNeeded(1))
  }

  render() {
    return (
      <div className="ExplorePage">
        <h1>Explore Benchmarks</h1>
        <div>Understand sales and marketing performance drivers for top companies</div>
        <div className="ExplorePage__search">
          <SearchBar />
        </div>
        <div className="ExplorePage__company-list">
          <h2>Company List</h2>
          <CompanyListContainer />
        </div>
      </div>
    )
  }
}

ExplorePage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

ExplorePage = connect()(ExplorePage)

export default ExplorePage;