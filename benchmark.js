const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/index.html');

  const iterations = 10000;

  // Measure current performance
  const time = await page.evaluate((iterations) => {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
      // Toggle between 'home' and 'servicios' to simulate real usage
      const viewId = i % 2 === 0 ? 'servicios' : 'home';
      navigate(viewId);
    }
    const end = performance.now();
    return end - start;
  }, iterations);

  console.log(`Baseline: ${time.toFixed(2)} ms for ${iterations} iterations`);
  await browser.close();
})();
