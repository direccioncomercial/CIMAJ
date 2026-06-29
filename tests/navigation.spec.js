const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  test('should navigate between views correctly', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Assert that the 'view-home' section is visible and has 'view-active' class
    const homeSection = page.locator('section#view-home');
    await expect(homeSection).toHaveClass(/view-active/);

    // Get the desktop 'Servicios' button
    const serviciosBtn = page.locator('.hidden.lg\\:flex button.nav-btn[data-target="servicios"]');

    // Click the 'Servicios' navigation button
    await serviciosBtn.click();

    // The 'view-home' section should no longer be active
    await expect(homeSection).not.toHaveClass(/view-active/);

    // The 'view-servicios' section should be active
    const serviciosSection = page.locator('section#view-servicios');
    await expect(serviciosSection).toHaveClass(/view-active/);

    // The 'Servicios' button should have the active text color (#C5A059) and not slate-300
    await expect(serviciosBtn).toHaveClass(/text-\[\#C5A059\]/);
    await expect(serviciosBtn).not.toHaveClass(/text-slate-300/);

    // The 'Inicio' button should have the inactive text color (slate-300) and not #C5A059
    const homeBtn = page.locator('.hidden.lg\\:flex button.nav-btn[data-target="home"]');
    await expect(homeBtn).toHaveClass(/text-slate-300/);
    await expect(homeBtn).not.toHaveClass(/text-\[\#C5A059\]/);
  });
});
