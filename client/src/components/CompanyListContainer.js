import { connect } from 'react-redux'

import CompanyList from './CompanyList'

function mapStateToProps(state) {
  const { companies } = state
  const { items, isFetching } = companies

  return { items, isFetching }
}

const CompanyListContainer = connect(mapStateToProps) (CompanyList)

export default CompanyListContainer