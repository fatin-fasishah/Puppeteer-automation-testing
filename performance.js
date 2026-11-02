const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  const start = Date.now();

  await page.goto('https://example.com');

  const end = Date.now();

  console.log('Load Time:', end - start, 'ms');

  await browser.close();

})();