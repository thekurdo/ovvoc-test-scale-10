const helpers = require('./helpers');
const constants = require('./constants');

const vendorLibs = {
  lodash: { version: '4.17.21' },
  axios: { version: '0.21.1' },
  moment: { version: '2.29.1' },
};

function getVendorList() {
  return Object.keys(vendorLibs).map(name => helpers.formatEntry(name, vendorLibs[name].version));
}

module.exports = { vendorLibs, getVendorList };
