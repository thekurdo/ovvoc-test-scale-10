const constants = require('./constants');

function version() {
  return constants.APP_VERSION;
}

function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

module.exports = { version, formatDate, deepClone };
