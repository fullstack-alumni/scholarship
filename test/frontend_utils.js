import mochaJsdom from 'mocha-jsdom';

export function mockDOM() {
  if (typeof document !== 'undefined') return;

  const jsdom = require('jsdom').jsdom;

  global.document = jsdom('<html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = { userAgent: 'node.js' };
}

export function setupDOM() {
  mochaJsdom({ skipWindowCheck: true });
}
