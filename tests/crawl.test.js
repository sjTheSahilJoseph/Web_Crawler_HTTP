const {normalizeURL} = require("../src/crawl.js");
const {test, expect} = require("@jest/globals");

test('normalizeURL', ()=>{
    const input = '';
    const actual = normalizeURL(input);
    const expected = '';
    expect(actual).toEqual(expected);
});