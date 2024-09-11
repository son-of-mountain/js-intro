// const {default : TestRunner} = require("jest-runner")
const concatStr = require('./concatString.js');

test('returns abcv when passed "ab" and "cv"', () => {
    expect(concatStr("ab", "cv")).toBe("abcv");
});
