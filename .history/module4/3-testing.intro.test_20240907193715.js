const concatStr = require('./2-testing-intro');

test('returns abcv when passed "ab" and "cv"', () => {
    expect(concatStr("ab", "cv")).toBe("abcv");
});
