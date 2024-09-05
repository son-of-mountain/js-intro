const concatStr = require('./2-testing-intro.js')
module.exports = concatStr;

expect(concatStr("ab","cv")).toBe("abcv")
