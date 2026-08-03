from playwright.sync_api import sync_playwright
import time

def test_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Open local server
        page.goto("http://localhost:8080")

        # Initially, home should be active
        assert page.locator("#view-home").evaluate("el => el.classList.contains('view-active')") == True
        assert page.locator("#view-equipo").evaluate("el => el.classList.contains('view-active')") == False

        # Navigate to equipo via function call (like the SPA logic)
        page.evaluate("navigate('equipo')")

        # Now equipo should be active
        assert page.locator("#view-home").evaluate("el => el.classList.contains('view-active')") == False
        assert page.locator("#view-equipo").evaluate("el => el.classList.contains('view-active')") == True

        # Navigate back to home
        page.evaluate("navigate('home')")
        assert page.locator("#view-home").evaluate("el => el.classList.contains('view-active')") == True

        # Test toggleMobileMenu
        menu_has_class = page.locator("#mobile-menu").evaluate("el => el.classList.contains('translate-x-full')")

        page.evaluate("toggleMobileMenu()")

        new_menu_has_class = page.locator("#mobile-menu").evaluate("el => el.classList.contains('translate-x-full')")

        assert menu_has_class != new_menu_has_class

        print("Playwright frontend verification successful! All checks passed.")

        browser.close()

if __name__ == "__main__":
    test_navigation()
