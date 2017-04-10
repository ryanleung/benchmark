import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

import Company from '../models/Company'
import Metric from '../models/Metric'
import { fetchCompanyIfNeeded, fetchMetricsIfNeeded } from './actions'

import './CompanyPage.css'


class CompanyPage extends Component {
  constructor(props) {
    super(props)
    this.handleAddBenchmark = this.handleAddBenchmark.bind(this)
  }

  componentDidMount() {
    const { params, dispatch } = this.props
    dispatch(fetchCompanyIfNeeded(params.company_id))
    dispatch(fetchMetricsIfNeeded(params.company_id))
  }

  handleAddBenchmark(e) {
    e.preventDefault()

    const { router } = this.props
    router.push('/add_benchmark')
  }

  render() {
    const { companyItem, companyIsFetching, metricItems, metricsAreFetching } = this.props

    return (
      <div>
        {companyItem && 
          <div className="CompanyPage">
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <Avatar
                  src={companyItem.logo_img_url}
                  size={50}
                  className="CompanyPage__avatar"/>
                <ToolbarTitle text={companyItem.name}/>
              </ToolbarGroup>
              <ToolbarGroup>
                <RaisedButton label="Add Benchmark" primary={true} onClick={this.handleAddBenchmark}/>
              </ToolbarGroup>
            </Toolbar>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Metrics Overview"/>
              </ToolbarGroup>
            </Toolbar>
            {metricItems && 
              <GridList cols={2} cellHeight={200}>
                {metricItems.map((metric) => 
                  <GridTile
                    key={metric.id}
                    title={metric.name}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    actionPosition="left"
                    subtitle={`${metric.value} ${metric.value_description}`}
                    titlePosition="top"
                    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                  </GridTile>
                )}
              </GridList>
            }
          </div>
        }
      </div>
    )
  }
}

CompanyPage.propTypes = {
  companyItem: PropTypes.instanceOf(Company),
  metricItems: PropTypes.arrayOf(Metric),
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { company, metrics } = state
  const companyItem = company.item
  const companyIsFetching = company.isFetching
  const metricItems = metrics.items
  const metricsAreFetching = metrics.isFetching

  return { companyItem, companyIsFetching, metricItems, metricsAreFetching }
}

export default connect(mapStateToProps)(CompanyPage);