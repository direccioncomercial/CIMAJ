const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('openInfoModal', () => {
    let dom;
    let window;
    let document;

    beforeEach(() => {
        // Load the HTML file
        let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

        // Strip external CDN scripts (e.g., Tailwind) to prevent JSDOM from hanging
        html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (match) => {
            if (match.includes('src=')) return '';
            return match;
        });

        // Setup JSDOM
        dom = new JSDOM(html, { runScripts: "dangerously" });
        window = dom.window;
        document = window.document;

        // Polyfill innerText in this JSDOM instance's window
        if (typeof window !== 'undefined') {
          Object.defineProperty(window.HTMLElement.prototype, 'innerText', {
            get() {
              return this.textContent;
            },
            set(value) {
              this.textContent = value;
            }
          });
        }
    });

    test('should not throw error and not modify DOM when called with invalid ID', () => {
        // Get the modal title element
        const titleElement = document.getElementById('info-modal-title');

        // Save initial state
        const initialTitleText = titleElement.innerText;
        const initialDisplay = document.getElementById('info-modal').classList.contains('hidden');

        // Call the function with an invalid ID
        window.openInfoModal('invalid-id');

        // Verify state is unchanged
        const finalTitleText = titleElement.innerText;
        const finalDisplay = document.getElementById('info-modal').classList.contains('hidden');

        expect(finalTitleText).toBe(initialTitleText);
        expect(finalDisplay).toBe(initialDisplay);
        expect(finalDisplay).toBe(true); // Should still be hidden
    });
});
