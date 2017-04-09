import React, {Component, PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'

import Company from '../models/Company'
import {getCompanyPageLink} from '../utils'

class CompanyListRow extends Component {
  render() {
    const {company} = this.props
    const cardHeaderTitle = getCompanyPageLink(company)
    const cardHeaderSubtitle = `${company.city} / ${company.state}` 

    return (
      <div>
        <Card>
          <CardHeader title={cardHeaderTitle}
                      subtitle={cardHeaderSubtitle}
                      avatar={company.logo_img_url}/>
          <CardActions>
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