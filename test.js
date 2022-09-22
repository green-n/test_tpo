const assert = require('assert');
const {Calculate} = require('./index')
const {brokenCalculate} = require('./index')

console.log(Calculate(-2,-2))
describe('calculation',()=>{
    it('should return 4',()=>{assert.equal(Calculate(2,2),4)})
})
describe('calculation',()=>{
    it('should return 0.4',()=>{assert.equal(Calculate(0.2,0.2),0.4)})
})
describe('calculation',()=>{
    it('should return -4',()=>{assert.equal(Calculate(-2,-2),-4)})
})
describe('calculation',()=>{
    it('should return 2',()=>{assert.equal(Calculate(0,2),2)})
})
describe('calculation',()=>{
    it('should return -2',()=>{assert.equal(Calculate(0,-2),-2)})
})

describe('calculation',()=>{
    it('should return 4',()=>{assert.equal(brokenCalculate(2,2),4)})
})
