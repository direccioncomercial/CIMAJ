from playwright.sync_api import sync_playwright

def test_xss():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://localhost:8080/index.html')

        # Inject malicious payload into modalData
        page.evaluate("""() => {
            modalData['xss_test'] = {
                title: 'Test',
                subtitle: 'XSS',
                img: '',
                desc: '<img src=x onerror=window.xss_triggered=true> <p onclick="alert(1)">Click me</p>'
            };
        }""")

        # Open the modal
        page.evaluate("() => openInfoModal('xss_test')")

        # Wait a moment for rendering
        page.wait_for_timeout(1000)

        # Check if XSS was triggered
        xss_triggered = page.evaluate("() => window.xss_triggered")
        assert xss_triggered is not True, "XSS vulnerability is still present!"

        # Verify safe HTML is preserved and onclick attribute is stripped
        html_content = page.evaluate("() => document.getElementById('info-modal-desc').innerHTML")

        assert '<img src="x">' in html_content, "The image tag should be present but sanitized"
        assert 'onerror' not in html_content, "The onerror attribute should be sanitized"
        assert 'onclick' not in html_content, "The onclick attribute should be stripped for security"
        print("XSS test passed!")
        browser.close()

if __name__ == '__main__':
    test_xss()
