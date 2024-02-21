const {crawlPage} = require('./crawl.js');
const {printReport} = require('./report.js');


/** 
 * process.argv.lenght < 3
 *  Why?
 *      Because basically it already has 1 argument which is the node interpreter.
 *      then it has the name of the file.
 *      not 3rd one is which we're providing on command line.
 ***/
async function main() {
    if (process.argv.length < 3) {
        console.log("No website provided");
        process.exit(1);
    } else if (process.argv.length > 3) {
        console.log("Too many command line args");
        process.exit(1);
    }

    const baseURL = process.argv[2];
    console.log(`Starting Crawl of ${baseURL}`);
    const pages = await crawlPage(baseURL, baseURL, {});
    
    printReport(pages);
}

main();
