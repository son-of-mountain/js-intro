const concatStr = require('./2-testing-intro')
module.exports = concatStr;

expect(concatStr("ab","cv")).toBe("abcv")
