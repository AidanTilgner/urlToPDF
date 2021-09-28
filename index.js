const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//  Brings in screenshot function
const screenshot = require('./puppeteer/screenshot')

//  Brings in PDF function
const toPDF = require('./puppeteer/pdf')

rl.question("Enter a URL: \n", url => {
    //  Execute screenshot thing
    console.log('Url accepted', url)
    // screenshot(url)
    toPDF(url)
});

rl.on("close", () => {
    process.exit(0);
});