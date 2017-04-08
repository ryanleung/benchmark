import React, { Component, PropTypes } from 'react';

import Company from '../models/Company'
import CompanyListRow from './CompanyListRow'


class CompanyList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(company =>
          <CompanyListRow key={company.id}
                          company={company}/>
        )}
      </div>
    )
  }
}

CompanyList.propTypes = {
  items: PropTypes.arrayOf(Company)
}

export default CompanyList;