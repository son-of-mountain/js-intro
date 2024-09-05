function concatStr(a,b){
    return a + b;
}
expect(concatStr("ab","cv")).toBe("abcv")

expect(concatStrings("123", "456")).toBe("123456");