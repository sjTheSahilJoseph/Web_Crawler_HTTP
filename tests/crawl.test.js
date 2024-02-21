const {normalizeURL, getURLsFromHTML} = require("../src/crawl.js");
const {test, expect} = require("@jest/globals");

test('normalizeURL strip protocol', ()=>{
    const input = 'https://josephprogrammingcompany.com/about';
    const actual = normalizeURL(input);
    const expected = 'josephprogrammingcompany.com/about';
    expect(actual).toEqual(expected);
});

test('normalizeURL strip trailing slash', ()=>{
    const input = 'https://josephprogrammingcompany.com/about/';
    const actual = normalizeURL(input);
    const expected = 'josephprogrammingcompany.com/about';
    expect(actual).toEqual(expected);
});

test('normalizeURL capitals', ()=>{
    const input = 'https://josePhprOgramMingcompany.Com/about/';
    const actual = normalizeURL(input);
    const expected = 'josephprogrammingcompany.com/about';
    expect(actual).toEqual(expected);
});

test('getURLsFromHTML returing all the urls form HTML body', ()=>{
    const inputHTMLBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://josephprogrammingcompany.com/">Home</a> 
</body>
</html>
    `;
    const inputBaseURL = "https://josephprogrammingcompany.com";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://josephprogrammingcompany.com/"];
    expect(actual).toEqual(expected);
});

