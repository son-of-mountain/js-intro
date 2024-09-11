
const concatStr = require('./concatString.js');

test('YESSS , THE TEST PASSED AND I GOT THE WAITED RESULT', () => {
    expect(concatStr("ab", "cv")).toBe("abcv");
});
