import 'whatwg-fetch'

import Company from '../models/Company'
import Metric from '../models/Metric'

export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECVEIVE_COMPANIES'
export const REQUEST_COMPANY = 'REQUEST_COMPANY'
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY'
export const REQUEST_METRICS = 'REQUEST_METRICS'
export const RECEIVE_METRICS = 'RECEIVE_METRICS'


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
    company: Company.from_json(json.data.company)
  }
}

function requestMetrics() {
  return {
    type: REQUEST_METRICS
  }
}

function receiveMetrics(json) {
  return {
    type: RECEIVE_METRICS,
    items: json.data.items.map(item => Metric.from_json(item))
  }
}

function fetchCompanies(industry_id) {
  return dispatch => {
    dispatch(requestCompanies())
    return fetch(`/api/industries/'${industry_id}/companies`)
      .then(response => response.json())
      .then(json => dispatch(receiveCompanies(json)))
  }
}

function fetchCompany(company_id) {
  return dispatch => {
    dispatch(requestCompany())
    return fetch(`/api/companies/${company_id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveCompany(json)))
  }
}

function fetchMetrics(company_id) {
  return dispatch => {
    dispatch(requestMetrics())
    return fetch(`/api/companies/${company_id}/metrics`)
      .then(response => response.json())
      .then(json => dispatch(receiveMetrics(json)))
  }
}

function shouldFetchCompanies(state) {
  return true
}

function shouldFetchCompany(state) {
  return true
}

function shouldFetchMetrics(state) {
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

export function fetchMetricsIfNeeded(company_id) {
  return (dispatch, getState) => {
    if (shouldFetchMetrics(getState())) {
      return dispatch(fetchMetrics(company_id))
    }
  }
}
