// Gera um PNG por <section id="..."> do HTML informado (padrão: stories.html).
// Uso: node render.js [arquivo.html]
const { chromium } = require(process.env.PW || 'playwright');
const path = require('path');
(async () => {
  const file = process.argv[2] || 'stories.html';
  const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', proxy, args: ['--ignore-certificate-errors'] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + path.join(__dirname, file));
  await page.evaluate(() => document.body.classList.add('clean'));
  await page.evaluate(() => document.fonts.ready);
  const ids = await page.$$eval('section[id]', els => els.map(e => e.id));
  for (const id of ids) {
    await page.locator('#' + id).screenshot({ path: path.join(__dirname, id + '.png') });
    console.log(id + '.png');
  }
  await browser.close();
})();
