const constants = require('./constants');

const routes = {
  '/': 'home',
  '/about': 'about',
  '/dashboard': 'dashboard',
};

function navigate(path) {
  const page = routes[path] || 'notFound';
  return { path, page, timestamp: Date.now() };
}

function getRoutes() {
  return Object.keys(routes);
}

module.exports = { navigate, getRoutes };
