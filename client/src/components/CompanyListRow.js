import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'

import Company from '../models/Company'

class CompanyListRow extends Component {
  render() {
    const {company} = this.props

    return (
      <div>
        <Card>
          <CardHeader title={company.name}
                      subtitle={company.name}/>
          <CardActions>
            <Link to="/industry/1/company/1">LINK</Link>
          </CardActions>
        </Card>
      </div>
    )
  }
}

CompanyListRow.propTypes = {
  company: PropTypes.instanceOf(Company)
}

export default CompanyListRow