import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchCompanyIfNeeded } from './actions'


class CompanyPage extends Component {
  componentDidMount() {
    const { params, dispatch } = this.props
    dispatch(fetchCompanyIfNeeded(params.company_id))
  }

  render() {
    return (
      <div className="CompanyPage">
        <h1>Hi</h1>
      </div>
    )
  }
}

CompanyPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

CompanyPage = connect()(CompanyPage)

export default CompanyPage;