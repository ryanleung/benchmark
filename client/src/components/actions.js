import 'whatwg-fetch'

import Company from '../models/Company'

export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECVEIVE_COMPANIES'
export const REQUEST_COMPANY = 'REQUEST_COMPANY'
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY'


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

function requestCompany() {
  return {
    type: REQUEST_COMPANY
  }
}

function receiveCompany(json) {
  return {
    type: RECEIVE_COMPANY,
    company: json.data.company
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

function fetchCompany(company_id) {
  return dispatch => {
    dispatch(requestCompany())
    return fetch('api/companies/' + company_id)
      .then(response => response.json())
      .then(json => dispatch(receiveCompany(json)))
  }
}

function shouldFetchCompanies(state) {
  return true
}

function shouldFetchCompany(state) {
  return true
}

export function fetchCompaniesIfNeeded(industry_id) {
  return (dispatch, getState) => {
    if (shouldFetchCompanies(getState())) {
      return dispatch(fetchCompanies(industry_id))
    }
  }
}

export function fetchCompanyIfNeeded(company_id) {
  return (dispatch, getState) => {
    if (shouldFetchCompany(getState())) {
      return dispatch(fetchCompany(company_id))
    }
  }
}
