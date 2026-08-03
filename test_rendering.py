import time
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 1280, 'height': 1024})
    page = context.new_page()
    page.goto("http://localhost:8080")

    page.wait_for_selector('.team-cards-container', state='attached')
    time.sleep(1)

    containers = page.query_selector_all('.team-cards-container')
    print(f"Found {len(containers)} team-cards-container elements.")

    for i, container in enumerate(containers):
        cards = container.query_selector_all('.glass-panel')
        print(f"Container {i+1} has {len(cards)} team member cards.")

    page.screenshot(path="full_page.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
