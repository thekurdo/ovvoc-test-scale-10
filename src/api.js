const config = require('./config');
const helpers = require('./helpers');

function fetchData(endpoint) {
  const url = config.getBaseUrl() + endpoint;
  return { url, method: 'GET', headers: helpers.defaultHeaders() };
}

function postData(endpoint, body) {
  const url = config.getBaseUrl() + endpoint;
  return { url, method: 'POST', body, headers: helpers.defaultHeaders() };
}

module.exports = { fetchData, postData };
