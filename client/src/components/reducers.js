import { combineReducers } from 'redux'

import { 
  REQUEST_COMPANIES, 
  RECEIVE_COMPANIES, 
  REQUEST_COMPANY,
  RECEIVE_COMPANY,
  REQUEST_METRICS,
  RECEIVE_METRICS
} from './actions'


// TODO: break reducers up by page? e.g. function CompanyPage, ExplorePage, etc.
function companies(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_COMPANIES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_COMPANIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    default:
      return state
  }
}

function company(state = {
  isFetching: false,
  item: null
}, action) {
  switch (action.type) {
    case REQUEST_COMPANY:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_COMPANY:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.company
      })
    default:
      return state
  }
}

function metrics(state = {
  isFetching: false,
  items: null
}, action) {
  switch (action.type) {
    case REQUEST_METRICS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_METRICS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  companies,
  company,
  metrics
})

export default rootReducer