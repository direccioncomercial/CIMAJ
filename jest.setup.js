const { TextEncoder, TextDecoder } = require('util');
Object.assign(global, { TextDecoder, TextEncoder });

// Polyfill innerText as requested in memory
Object.defineProperty(global.HTMLElement.prototype, 'innerText', {
    get() {
        return this.textContent;
    },
    set(value) {
        this.textContent = value;
    }
});
