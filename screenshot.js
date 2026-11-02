const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://www.gmi.edu.my/');

  await page.screenshot({
    path: 'gmi.png'
  });

  console.log('Screenshot captured');

  await browser.close();

})();
