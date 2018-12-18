const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function setUpDomEnvironment() {
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  const { window } = dom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
      userAgent: 'node.js',
  };
  copyProps(window, global);
}

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

setUpDomEnvironment();