const puppeteer = require('puppeteer');

(async () => {

  // Launch browser
  const browser = await puppeteer.launch({
    headless: false
  });

  // Open new page
  const page = await browser.newPage();

  // Open website
  await page.goto('https://example.com');

  // Take screenshot
  await page.screenshot({
    path: 'example.png'
  });

  console.log("Screenshot captured successfully");

  // Close browser
  await browser.close();

})();