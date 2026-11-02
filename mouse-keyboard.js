const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://www.google.com/');

  await page.click('textarea');

  await page.keyboard.type('Ain Sofea');

  console.log('Keyboard simulation complete');

})();
