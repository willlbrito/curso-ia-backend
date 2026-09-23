// Gera os PNGs 1080x1920 a partir de stories.html
const { chromium } = require(process.env.PW || 'playwright');
const path = require('path');
(async () => {
  const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', proxy, args: ['--ignore-certificate-errors'] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + path.join(__dirname, 'stories.html'));
  await page.evaluate(() => document.body.classList.add('clean'));
  await page.evaluate(() => document.fonts.ready);
  console.log('fonts:', await page.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family).join(',')));
  for (let i = 1; i <= 5; i++) {
    await page.locator('#s' + i).screenshot({ path: path.join(__dirname, `story-derby-${i}.png`) });
  }
  await browser.close();
})();
