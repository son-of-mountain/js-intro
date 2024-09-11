const {default : Test}
const concatStr = require('./2-testing-intro.js');

test('returns abcv when passed "ab" and "cv"', () => {
    expect(concatStr("ab", "cv")).toBe("abcv");
});
