function normalizeURL(url) {
    const urlObject = new URL(url);    
    
    let normalizedURL = `${urlObject.hostname}${urlObject.pathname}`;
    
    if (normalizedURL.length > 0 && normalizedURL.slice(-1) === '/') {
        normalizedURL = normalizedURL.slice(0, -1);
    }


    return normalizedURL;
}

module.exports = {
    normalizeURL
};
