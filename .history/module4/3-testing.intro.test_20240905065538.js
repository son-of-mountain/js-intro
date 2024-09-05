const {default : TestRunner } = require('jest-runner')

const concatStr = require('./2-testing-intro')

test('returns the correct value of concatenation' ,() =>{
    expect(concatStr("ab","cv")).toBe("abcv")
    
})