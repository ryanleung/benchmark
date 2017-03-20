import { combineReducers } from 'redux'

import { REQUEST_COMPANIES, RECEIVE_COMPANIES } from './actions'


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

const rootReducer = combineReducers({
  companies
})

export default rootReducer