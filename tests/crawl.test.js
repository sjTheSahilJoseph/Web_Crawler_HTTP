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

test('getURLsFromHTML absolute urls', ()=>{
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

test('getURLsFromHTML relative urls', ()=>{
    const inputHTMLBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="/path/">Home</a> 
</body>
</html>
    `;
    const inputBaseURL = "https://josephprogrammingcompany.com";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://josephprogrammingcompany.com/path/"];
    expect(actual).toEqual(expected);
});

test('getURLsFromHTML array of both relative & absolute URLs', ()=>{
    const inputHTMLBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://josephprogrammingcompany.com/path1/">Home</a> 
    <a href="/path2/">Path</a> 
</body>
</html>
    `;
    const inputBaseURL = "https://josephprogrammingcompany.com";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://josephprogrammingcompany.com/path1/", "https://josephprogrammingcompany.com/path2/"];
    expect(actual).toEqual(expected);
});

test('getURLsFromHTML invalid URL', ()=>{
    const inputHTMLBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="invalid">Home</a> 
</body>
</html>
    `;
    const inputBaseURL = "https://josephprogrammingcompany.com";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = [];
    expect(actual).toEqual(expected);
});

