function concatStr(a,b){
    return a + b;
}

module.exports = concatStr;

expect(concatStr("ab","cv")).toBe("abcv")
