const puppeteer = require("puppeteer");
const path = require("path");
const downloadPath = path.resolve("./images/webpage.pdf");

const toPDF = async (url) => {
  console.log("Taking pdf");
  let browser = await puppeteer.launch({ dumpio: true, headless: true  });
  let page = await browser.newPage();
  await page.goto(url);
  await page.pdf({ path: downloadPath, format: 'A4' });
  await page.close();
  await browser.close();
};

module.exports = toPDF;
