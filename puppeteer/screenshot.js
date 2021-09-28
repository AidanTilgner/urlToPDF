const puppeteer = require("puppeteer");
const path = require("path");
const downloadPath = path.resolve("../images/image.jpg");

const screenshot = async (url) => {
  console.log("Taking screenshot");
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  await page.goto(url);
  await page._client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: downloadPath,
  });
  await page.screenshot({ path: downloadPath, type: "jpeg" });
  await page.close();
  await browser.close();
};

module.exports = screenshot;
