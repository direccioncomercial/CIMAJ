const { test, expect } = require('@playwright/test');

test.describe('Navigation function', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the local server
    await page.goto('http://127.0.0.1:8080');

    // Wait for the page to load
    await expect(page.locator('#view-home')).toBeVisible();
  });

  test('should navigate between views and update button styles', async ({ page }) => {
    // Check initial state (home is active)
    await expect(page.locator('#view-home')).toHaveClass(/view-active/);

    // The home navigation button should have active styles
    const homeBtn = page.locator('button[data-target="home"]');
    await expect(homeBtn).toHaveClass(/text-\[\#C5A059\]/);

    // Click on "servicios" navigation button
    const serviciosBtn = page.locator('button[data-target="servicios"]');
    await serviciosBtn.click();

    // Verify that "servicios" view is now active and "home" is not
    await expect(page.locator('#view-servicios')).toHaveClass(/view-active/);
    await expect(page.locator('#view-home')).not.toHaveClass(/view-active/);

    // Verify that "servicios" button has active styles and "home" does not
    await expect(serviciosBtn).toHaveClass(/text-\[\#C5A059\]/);
    await expect(homeBtn).not.toHaveClass(/text-\[\#C5A059\]/);
    await expect(homeBtn).toHaveClass(/text-slate-300/);
  });

  test('should hide mobile menu when navigating', async ({ page }) => {
    // Force the mobile menu to be open by evaluating a script
    await page.evaluate(() => {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('mobile-icon');
        menu.classList.remove('translate-x-full');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    });

    // Verify the menu is open (translate-x-full is NOT present)
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).not.toHaveClass(/translate-x-full/);

    // Click a navigation button to trigger navigation
    const serviciosBtn = page.locator('button[data-target="servicios"]');
    await serviciosBtn.click();

    // Verify the menu is now closed (translate-x-full IS present)
    await expect(mobileMenu).toHaveClass(/translate-x-full/);

    // Verify the icon changed back to bars
    const mobileIcon = page.locator('#mobile-icon');
    await expect(mobileIcon).toHaveClass(/fa-bars/);
    await expect(mobileIcon).not.toHaveClass(/fa-xmark/);
  });
});
