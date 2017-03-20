import 'whatwg-fetch'

import Company from '../models/Company'

export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECVEIVE_COMPANIES'


function requestCompanies() {
  return {
    type: REQUEST_COMPANIES
  }
}

function receiveCompanies(json) {
  return {
    type: RECEIVE_COMPANIES,
    items: json.data.items.map(item => Company.from_json(item))
  }
}

function fetchCompanies(industry_id) {
  return dispatch => {
    dispatch(requestCompanies())
    return fetch('/api/industries/' + industry_id + '/companies')
      .then(response => response.json())
      .then(json => dispatch(receiveCompanies(json)))
  }
}

function shouldFetchCompanies(state) {
  return true
}

export function fetchCompaniesIfNeeded(industry_id) {
  return (dispatch, getState) => {
    if (shouldFetchCompanies(getState())) {
      return dispatch(fetchCompanies(industry_id))
    }
  }
}