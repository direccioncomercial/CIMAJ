import { test, expect } from '@playwright/test';

test.describe('Mobile Menu Toggle', () => {
  // Set viewport to a mobile size to ensure the hamburger button is visible
  test.use({ viewport: { width: 375, height: 667 } });

  test('toggleMobileMenu toggles classes correctly', async ({ page }) => {
    // using base url defined in config
    await page.goto('/');
    const menu = page.locator('#mobile-menu');
    const icon = page.locator('#mobile-icon');

    // Check initial state
    await expect(menu).toHaveClass(/translate-x-full/);
    await expect(icon).toHaveClass(/fa-bars/);
    await expect(icon).not.toHaveClass(/fa-xmark/);

    // Click hamburger button to open
    await page.locator('button[onclick="toggleMobileMenu()"]').click();

    // Check state after open
    await expect(menu).not.toHaveClass(/translate-x-full/);
    await expect(icon).not.toHaveClass(/fa-bars/);
    await expect(icon).toHaveClass(/fa-xmark/);

    // Click again to close
    await page.locator('button[onclick="toggleMobileMenu()"]').click();

    // Check state after close
    await expect(menu).toHaveClass(/translate-x-full/);
    await expect(icon).toHaveClass(/fa-bars/);
    await expect(icon).not.toHaveClass(/fa-xmark/);
  });
});
