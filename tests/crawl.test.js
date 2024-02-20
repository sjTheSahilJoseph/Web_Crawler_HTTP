const {normalizeURL} = require("../src/crawl.js");
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


