const puppeteer = require("puppeteer");

const screenshot = async (url) => {
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: "../../images/image.jpg", type: "jpeg" });
  await page.close();
  await browser.close();
};

module.exports = screenshot;
