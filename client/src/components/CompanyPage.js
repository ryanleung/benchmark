import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import {GridList, GridTile} from 'material-ui/GridList'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

import Company from '../models/Company'
import { fetchCompanyIfNeeded } from './actions'

import './CompanyPage.css'


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
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <Avatar
                  src={item.logo_img_url}
                  size={50}
                  className="CompanyPage__avatar"/>
                <ToolbarTitle text={item.name}/>
              </ToolbarGroup>
            </Toolbar>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Metrics Overview"/>
              </ToolbarGroup>
            </Toolbar>
            <GridList cols={2}>
              <GridTile>
              </GridTile>
            </GridList>
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