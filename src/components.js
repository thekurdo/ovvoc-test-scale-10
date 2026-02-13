const helpers = require('./helpers');
const constants = require('./constants');

function render() {
  return helpers.formatEntry(constants.APP_NAME, constants.APP_VERSION);
}

function createComponent(name, props) {
  return { name, props: props || {}, rendered: false };
}

module.exports = { render, createComponent };
