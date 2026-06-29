const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('toggleMobileMenu', () => {
    let window;
    let document;

    beforeEach(() => {
        const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
        const dom = new JSDOM(html, { runScripts: "dangerously" });
        window = dom.window;
        document = window.document;
    });

    test('should toggle mobile menu visibility and icon', () => {
        const toggleMobileMenu = window.toggleMobileMenu;
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('mobile-icon');

        // Validate initial assumptions
        expect(toggleMobileMenu).toBeDefined();
        expect(menu).not.toBeNull();
        expect(icon).not.toBeNull();

        // Ensure initial classes match the HTML
        expect(menu.classList.contains('translate-x-full')).toBe(true);
        expect(icon.classList.contains('fa-bars')).toBe(true);
        expect(icon.classList.contains('fa-xmark')).toBe(false);

        // Call the function - Open menu
        toggleMobileMenu();

        // Verify state changed to open
        expect(menu.classList.contains('translate-x-full')).toBe(false);
        expect(icon.classList.contains('fa-bars')).toBe(false);
        expect(icon.classList.contains('fa-xmark')).toBe(true);

        // Call the function again - Close menu
        toggleMobileMenu();

        // Verify state changed to closed
        expect(menu.classList.contains('translate-x-full')).toBe(true);
        expect(icon.classList.contains('fa-bars')).toBe(true);
        expect(icon.classList.contains('fa-xmark')).toBe(false);
    });
});
