const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Mobile Menu Toggle', () => {
    let dom;
    let document;
    let window;

    beforeEach(() => {
        // Read the index.html file
        const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

        // Strip out external CDN scripts (like Tailwind) to prevent JSDOM from hanging
        const strippedHtml = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/g, '');

        // Load the stripped HTML into JSDOM
        dom = new JSDOM(strippedHtml, { runScripts: "dangerously" });
        window = dom.window;
        document = window.document;
    });

    test('toggleMobileMenu function adds and removes classes correctly', () => {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('mobile-icon');

        // Initial state check based on the HTML provided
        expect(menu.classList.contains('translate-x-full')).toBe(true);
        expect(icon.classList.contains('fa-bars')).toBe(true);
        expect(icon.classList.contains('fa-xmark')).toBe(false);

        // Call the function to open the menu
        window.toggleMobileMenu();

        // Check if menu is opened
        expect(menu.classList.contains('translate-x-full')).toBe(false);
        expect(icon.classList.contains('fa-bars')).toBe(false);
        expect(icon.classList.contains('fa-xmark')).toBe(true);

        // Call the function to close the menu
        window.toggleMobileMenu();

        // Check if menu is closed again
        expect(menu.classList.contains('translate-x-full')).toBe(true);
        expect(icon.classList.contains('fa-bars')).toBe(true);
        expect(icon.classList.contains('fa-xmark')).toBe(false);
    });
});
