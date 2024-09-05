const {default: TestRunner } = require("jest-runner");

const concatStr = require('./2-testing-intro');

test('returns abcv', () => {
    expect(concatStr("ab","cv")).toBe("abcv");

})