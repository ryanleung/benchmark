import { combineReducers } from 'redux'

import { 
  REQUEST_COMPANIES, 
  RECEIVE_COMPANIES, 
  REQUEST_COMPANY, 
  RECEIVE_COMPANY 
} from './actions'


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
  company: null
}, action) {
  switch (action.type) {
    case REQUEST_COMPANY:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_COMPANY:
      return Object.assign({}, state, {
        isFetching: false,
        company: action.company
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  companies,
  company
})

export default rootReducer