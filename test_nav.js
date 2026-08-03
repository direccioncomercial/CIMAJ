const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/index.html');

  // Verify that the home view is initially active
  let homeIsActive = await page.$eval('#view-home', el => el.classList.contains('view-active'));
  console.log('Home is active initially:', homeIsActive);

  // Navigate to servicios using the required evaluate click
  await page.$eval('button[data-target="servicios"]', el => el.click());

  // Verify that the servicios view is now active
  let serviciosIsActive = await page.$eval('#view-servicios', el => el.classList.contains('view-active'));
  console.log('Servicios is active after navigation:', serviciosIsActive);

  // Verify that the home view is no longer active
  homeIsActive = await page.$eval('#view-home', el => el.classList.contains('view-active'));
  console.log('Home is inactive after navigation:', !homeIsActive);

  if (serviciosIsActive && !homeIsActive) {
      console.log('Test PASSED');
  } else {
      console.log('Test FAILED');
      process.exit(1);
  }

  await browser.close();
})();
