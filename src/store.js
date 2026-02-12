const constants = require('./constants');
const utils = require('./utils');

let state = { user: null, theme: 'dark', route: '/' };

function getState() {
  return utils.deepClone(state);
}

function setState(newState) {
  state = { ...state, ...newState };
}

function getConfig() {
  return { defaultRoute: constants.DEFAULT_ROUTE, appName: constants.APP_NAME };
}

module.exports = { getState, setState, getConfig };
