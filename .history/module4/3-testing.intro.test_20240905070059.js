const {default: TestRunner } = require("jest-runner");

const concatStr = require('./2-testing-intro');

test('returns abcb', () => {
    expect(concatStr("ab","cv")).toBe("abcv");

})