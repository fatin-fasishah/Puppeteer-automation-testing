const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://www.google.com/');

  await page.pdf({
    path: 'google.pdf',
    format: 'A4'
  });

  console.log('PDF generated');

  await browser.close();

})();
