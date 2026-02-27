const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;
function test(name, fn) { try { fn(); passed++; } catch (e) { console.error(`FAIL: ${name} - ${e.message}`); failed++; } }
function assert(condition, msg) { if (!condition) throw new Error(msg || 'Assertion failed'); }

const config = require(path.join(__dirname, '..', 'webpack.config.js'));
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

test('webpack is 4.x', () => {
  assert(pkg.devDependencies.webpack.startsWith('4'));
});

test('has multi-entry', () => {
  assert(config.entry.main && config.entry.vendor);
});

test('uses deprecated [hash]', () => {
  assert(config.output.filename.includes('[hash]'));
});

test('uses deprecated devtool', () => {
  assert(config.devtool === 'cheap-module-eval-source-map');
});

test('has file-loader rule', () => {
  const hasFileLoader = config.module.rules.some(r => JSON.stringify(r).includes('file-loader'));
  assert(hasFileLoader);
});

test('has url-loader rule', () => {
  const hasUrlLoader = config.module.rules.some(r => JSON.stringify(r).includes('url-loader'));
  assert(hasUrlLoader);
});

test('uses deprecated namedModules', () => {
  assert(config.optimization.namedModules === true);
});

test('uses deprecated node config', () => {
  assert(config.node.fs === 'empty');
});

test('has resolve alias', () => {
  assert(config.resolve.alias['@']);
});

test('10 source files exist', () => {
  const srcDir = path.join(__dirname, '..', 'src');
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));
  assert(files.length === 10, `Expected 10, got ${files.length}`);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
