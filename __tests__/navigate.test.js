const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('navigate function', () => {
    let dom;
    let window;
    let document;

    beforeEach(() => {
        // As specified in memory, external CDN scripts must be stripped to prevent JSDOM from hanging.
        const strippedHtml = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/g, '');

        dom = new JSDOM(strippedHtml, { runScripts: "dangerously" });
        window = dom.window;
        document = window.document;
        // mock window.scrollTo
        window.scrollTo = jest.fn();
    });

    test('should change active view and update nav buttons', () => {
        const section1 = document.getElementById('view-home');
        const section2 = document.getElementById('view-servicios');

        const btn1 = document.querySelector('.nav-btn[data-target="home"]');
        const btn2 = document.querySelector('.nav-btn[data-target="servicios"]');

        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('mobile-icon');

        // ensure initial state
        expect(section1.classList.contains('view-active')).toBe(true);
        expect(section2.classList.contains('view-active')).toBe(false);

        // Run the function
        window.navigate('servicios');

        // Check if sections were updated
        expect(section1.classList.contains('view-active')).toBe(false);
        expect(section2.classList.contains('view-active')).toBe(true);

        // Check if buttons were updated
        expect(btn1.classList.contains('text-slate-300')).toBe(true);
        expect(btn1.classList.contains('text-[#C5A059]')).toBe(false);

        expect(btn2.classList.contains('text-[#C5A059]')).toBe(true);
        expect(btn2.classList.contains('text-slate-300')).toBe(false);

        // Check if mobile menu was closed
        expect(menu.classList.contains('translate-x-full')).toBe(true);
        expect(icon.classList.contains('fa-bars')).toBe(true);
        expect(icon.classList.contains('fa-xmark')).toBe(false);

        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
});
