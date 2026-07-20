const { test, expect } = require('@playwright/test');

test.describe('CIMAJ Website Tests', () => {
  test('should open and close the info modal correctly', async ({ page }) => {
    // 1. Load the homepage via the web server
    await page.goto('/');

    // 2. Assert the modal (#info-modal) has the hidden class initially
    const modal = page.locator('#info-modal');
    await expect(modal).toHaveClass(/hidden/);

    // 3. Open the modal by clicking on a card (e.g., .glass-panel that calls openInfoModal('civil'))
    // Find the civil panel and click it via JS evaluation to bypass visibility/pointer-events checks
    const civilPanel = page.locator('div[onclick="openInfoModal(\'civil\')"]');
    await civilPanel.evaluate(el => el.click());

    // The modal should now be visible (have flex class, lack hidden class)
    await expect(modal).not.toHaveClass(/hidden/);
    await expect(modal).toHaveClass(/flex/);

    // Verify body overflow is hidden
    const bodyOverflowHidden = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflowHidden).toBe('hidden');

    // 4. Trigger the closeInfoModal function by clicking the close button
    const closeBtn = page.locator('button[onclick="closeInfoModal()"]');
    await closeBtn.click();

    // 5. Assert the modal is hidden (hidden class is present, flex class is absent) and body.style.overflow is 'auto'
    await expect(modal).toHaveClass(/hidden/);
    await expect(modal).not.toHaveClass(/flex/);

    const bodyOverflowAuto = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflowAuto).toBe('auto');
  });
});
