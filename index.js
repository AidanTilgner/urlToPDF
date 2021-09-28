const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a URL: \n", url => {
    //  Execute screenshot thing
    rl.close();
});

rl.on("close", () => {
    process.exit(0);
});