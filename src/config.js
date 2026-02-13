const constants = require('./constants');

function getBaseUrl() {
  return 'https://api.example.com/v1';
}

function getTimeout() {
  return constants.TIMEOUT_MS;
}

function getRetryConfig() {
  return { maxRetries: constants.MAX_RETRIES, backoff: 1000 };
}

module.exports = { getBaseUrl, getTimeout, getRetryConfig };
