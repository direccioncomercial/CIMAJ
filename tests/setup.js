const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

if (typeof window !== 'undefined' && window.HTMLElement) {
  Object.defineProperty(window.HTMLElement.prototype, 'innerText', {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    }
  });
}
