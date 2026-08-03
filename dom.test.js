const fs = require('fs');

describe('DOM Check', () => {
    test('file exists', () => {
        const html = fs.readFileSync('index.html', 'utf8');
        expect(html).toContain('<html');
        expect(html).toContain('cachedSections');
    });
});
