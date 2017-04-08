import React, { Component, PropTypes } from 'react'


class CompanyPage extends Component {
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



export default CompanyPage;