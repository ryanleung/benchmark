import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Company from '../models/Company'
import { fetchCompanyIfNeeded } from './actions'


class CompanyPage extends Component {
  componentDidMount() {
    const { params, dispatch } = this.props
    dispatch(fetchCompanyIfNeeded(params.company_id))
  }

  render() {
    const { item, isFetching } = this.props

    return (
      <div>
        {item && 
          <div className="CompanyPage">
            {item.name}
          </div>
        }
      </div>
    )
  }
}

CompanyPage.propTypes = {
  item: PropTypes.instanceOf(Company),
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { company } = state
  const { item, isFetching } = company

  return { item, isFetching }
}

export default connect(mapStateToProps)(CompanyPage);