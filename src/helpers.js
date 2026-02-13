function formatEntry(name, version) {
  return `${name}@${version}`;
}

function defaultHeaders() {
  return { 'Content-Type': 'application/json', 'Accept': 'application/json' };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { formatEntry, defaultHeaders, capitalize };
