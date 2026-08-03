const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Info Modal Logic', () => {
  let dom;
  let window;
  let document;

  beforeEach(() => {
    // Read the HTML file to extract the inline script that contains modal logic
    const htmlPath = path.resolve(__dirname, '../index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    // Extract the script content containing modalData and openInfoModal
    let scriptContent = '';
    const scriptMatch = html.match(/<script>([\s\S]*?modalData[\s\S]*?)<\/script>/);
    if (scriptMatch) {
      scriptContent = scriptMatch[1];
    } else {
      throw new Error("Could not find modalData script in index.html");
    }

    // Create a minimal HTML template with the necessary elements and the extracted script
    // This prevents JSDOM from hanging due to parsing huge files or external resources
    const minimalHtml = `
      <!DOCTYPE html>
      <html>
      <body>
          <div id="info-modal" class="hidden">
              <h2 id="info-modal-title">Título</h2>
              <h3 id="info-modal-subtitle"></h3>
              <div id="info-modal-desc"></div>
              <img id="info-modal-img" src="">
          </div>
          <script>${scriptContent}</script>
      </body>
      </html>
    `;

    // Setup JSDOM
    dom = new JSDOM(minimalHtml, {
      runScripts: 'dangerously'
    });

    window = dom.window;
    document = window.document;

    // Polyfill innerText for JSDOM
    if (!window.HTMLElement.prototype.hasOwnProperty('innerText')) {
      Object.defineProperty(window.HTMLElement.prototype, 'innerText', {
        get() { return this.textContent; },
        set(value) { this.textContent = value; }
      });
    }
  });

  it('should open modal and populate data correctly when valid id is provided', () => {
    // Call openInfoModal with a valid ID
    window.openInfoModal('civil');

    // Assert that the modal is visible
    const modal = document.getElementById('info-modal');
    expect(modal.classList.contains('hidden')).toBe(false);
    expect(modal.classList.contains('flex')).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');

    // Assert that the data was populated correctly
    expect(document.getElementById('info-modal-title').textContent).toBe('Civil y Notarial');
    expect(document.getElementById('info-modal-subtitle').textContent).toBe('Especialidad');
    expect(document.getElementById('info-modal-desc').innerHTML).toContain('Nuestra área Civil y Notarial se encarga de proteger su patrimonio');
    expect(document.getElementById('info-modal-img').src).toBe('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800');
  });

  it('should not open modal or error if invalid id is provided', () => {
    const modal = document.getElementById('info-modal');

    // Call openInfoModal with an invalid ID
    window.openInfoModal('invalid_id');

    // Assert that the modal is still hidden
    expect(modal.classList.contains('hidden')).toBe(true);
    expect(modal.classList.contains('flex')).toBe(false);
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('should close modal when closeInfoModal is called', () => {
    // First open it
    window.openInfoModal('penal');

    const modal = document.getElementById('info-modal');
    expect(modal.classList.contains('hidden')).toBe(false);

    // Then close it
    window.closeInfoModal();

    // Assert that the modal is hidden
    expect(modal.classList.contains('hidden')).toBe(true);
    expect(modal.classList.contains('flex')).toBe(false);
    expect(document.body.style.overflow).toBe('auto');
  });
});
