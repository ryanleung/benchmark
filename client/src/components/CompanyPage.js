import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


class CompanyPage extends Component {
  componentDidMount() {

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