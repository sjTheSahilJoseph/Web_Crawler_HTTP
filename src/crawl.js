const {JSDOM} = require('jsdom');

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];

    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');

    for (const linkElement of linkElements) {
        urls.push(linkElement.href);
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
    getURLsFromHTML
};
