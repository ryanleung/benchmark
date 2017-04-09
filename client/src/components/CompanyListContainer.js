import { connect } from 'react-redux'

import CompanyList from './CompanyList'

// TODO: consider moving this logic to ExplorePage and removing this
function mapStateToProps(state) {
  const { companies } = state
  const { items, isFetching } = companies

  return { items, isFetching }
}

const CompanyListContainer = connect(mapStateToProps)(CompanyList)

export default CompanyListContainer