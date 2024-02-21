const { JSDOM } = require('jsdom');

async function crawlPage(currentURL) {

    console.log(`Actively Crawling: ${currentURL}`);

    try {

        const res = await fetch(currentURL);

        if (res.status > 399) {
            console.log("Error with fetch status code : " + res.status);
            return;
        }

        const contentType = res.headers.get("content-type");
        if (contentType.includes("text/html")) {
            console.log("Error with content-type : " + contentType);
        }

        console.log(await res.text());
    } catch (err) {
        console.log(err.message);
    }

}

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];

    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');

    for (const linkElement of linkElements) {
        if (linkElement.href.slice(0, 1) === '/') {
            // Relative URL
            try {

                const urlObject = new URL(`${baseURL}${linkElement.href}`);
                urls.push(urlObject.href);
            } catch (err) {
                console.log(err.message);
            }
        } else {
            // Absolute URL
            try {

                const urlObject = new URL(linkElement.href);
                urls.push(urlObject.href);
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    return urls;
}

function normalizeURL(url) {
    const urlObject = new URL(url);

    let normalizedURL = `${urlObject.hostname}${urlObject.pathname}`;

    if (normalizedURL.length > 0 && normalizedURL.slice(-1) === '/') {
        normalizedURL = normalizedURL.slice(0, -1);
    }


    return normalizedURL;
}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
};
