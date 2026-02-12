const utils = require('./utils');
const api = require('./api');
const store = require('./store');
const router = require('./router');
const components = require('./components');

function init() {
  const config = store.getConfig();
  router.navigate(config.defaultRoute);
  components.render();
  console.log('App initialized:', utils.version());
}

module.exports = { init };
