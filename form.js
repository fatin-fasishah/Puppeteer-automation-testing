const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://httpbin.org/forms/post');

  await page.type('input[name="custname"]', '');

  await page.type('input[name="custtel"]', '');

  await page.click('input[value="medium"]');

  console.log('Form filled successfully');

})();