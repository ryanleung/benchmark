import React, { Component, PropTypes } from 'react';

import Company from '../models/Company'


class CompanyList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(company =>
          <div>
            {company.name}
          </div>
        )}
      </div>
    )
  }
}

CompanyList.propTypes = {
  items: PropTypes.arrayOf(Company)
}

export default CompanyList;