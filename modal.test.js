const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Modal functions', () => {
  let dom;
  let window;
  let document;

  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    const strippedHtml = html.replace('<script src="https://cdn.tailwindcss.com"></script>', '');
    const strippedHtml2 = strippedHtml.replace(/<script src="https:\/\/cdnjs\.cloudflare\.com\/[^"]+"><\/script>/g, '');

    dom = new JSDOM(strippedHtml2, { runScripts: 'dangerously' });
    window = dom.window;
    document = window.document;

    // Polyfill innerText for JSDOM
    // JSDOM does not support innerText. It uses textContent.
    if (!Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerText')) {
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

  test('openInfoModal should populate modal and show it', () => {
    window.openInfoModal('laboral');

    expect(document.getElementById('info-modal-title').textContent).toBe('Laboral y Tributario');
    expect(document.getElementById('info-modal-subtitle').textContent).toBe('Especialidad');
    expect(document.getElementById('info-modal-desc').innerHTML).toContain('Asesoramos tanto a empleadores como a trabajadores');
    expect(document.getElementById('info-modal-img').src).toBe('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800');

    const modal = document.getElementById('info-modal');
    expect(modal.classList.contains('hidden')).toBe(false);
    expect(modal.classList.contains('flex')).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('openInfoModal should do nothing if id is invalid', () => {
    window.openInfoModal('laboral'); // Open first
    const titleBefore = document.getElementById('info-modal-title').textContent;

    window.openInfoModal('invalid-id'); // Try invalid ID
    const titleAfter = document.getElementById('info-modal-title').textContent;

    // Modal state shouldn't change
    expect(titleAfter).toBe(titleBefore);
  });

  test('closeInfoModal should hide modal', () => {
    window.openInfoModal('laboral');
    window.closeInfoModal();

    const modal = document.getElementById('info-modal');
    expect(modal.classList.contains('hidden')).toBe(true);
    expect(modal.classList.contains('flex')).toBe(false);
    expect(document.body.style.overflow).toBe('auto');
  });
});
