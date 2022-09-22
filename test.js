const assert = require('assert');
const {Calculate} = require('./index')
// const {brokenCalculate} = require('./index')

// errors
describe('calculation',()=>{
    it('should return error',()=>{assert.equal(Calculate(-1,2,2),"incorrect input on action")})
})
describe('calculation',()=>{
    it('should return error',()=>{assert.equal(Calculate(10,2,2),"incorrect input on action")})
})
describe('calculation',()=>{
    it('should return error',()=>{assert.equal(Calculate(1,2,0),"incorrect input on second number")})
})


//sum:
describe('calculation',()=>{
    it('sum: should return 4',()=>{assert.equal(Calculate(1,2,2),4)})
})
describe('calculation',()=>{
    it('sum: should return 0.4',()=>{assert.equal(Calculate(1,0.2,0.2),0.4)})
})
describe('calculation',()=>{
    it('sum: should return -4',()=>{assert.equal(Calculate(1,-2,-2),-4)})
})
describe('calculation',()=>{
    it('sum: should return 2',()=>{assert.equal(Calculate(1,0,2),2)})
})
describe('calculation',()=>{
    it('sum: should return -2',()=>{assert.equal(Calculate(1,0,-2),-2)})
})

//substruction:
describe('calculation',()=>{
    it('substruction: should return 0',()=>{assert.equal(Calculate(2,2,2),0)})
})
describe('calculation',()=>{
    it('substruction: should return -0.1',()=>{assert.equal(Calculate(2,0.2,0.3),-0.1)})
})
describe('calculation',()=>{
    it('substruction: should return 0',()=>{assert.equal(Calculate(2,-2,-2),0)})
})
describe('calculation',()=>{
    it('substruction: should return -4',()=>{assert.equal(Calculate(2,-2,2),-4)})
})
describe('calculation',()=>{
    it('substruction: should return -2',()=>{assert.equal(Calculate(2,0,2),-2)})
})
describe('calculation',()=>{
    it('substruction: should return 2',()=>{assert.equal(Calculate(2,0,-2),2)})
})

//multiply:
describe('calculation',()=>{
    it('multiply: should return 4',()=>{assert.equal(Calculate(3,2,2),4)})
})
describe('calculation',()=>{
    it('multiply: should return 0.06',()=>{assert.equal(Calculate(3,0.2,0.3),0.06)})
})
describe('calculation',()=>{
    it('multiply: should return 4',()=>{assert.equal(Calculate(3,-2,-2),4)})
})
describe('calculation',()=>{
    it('multiply: should return -4',()=>{assert.equal(Calculate(3,-2,2),-4)})
})
describe('calculation',()=>{
    it('multiply: should return 0',()=>{assert.equal(Calculate(3,0,2),0)})
})
describe('calculation',()=>{
    it('multiply: should return 0',()=>{assert.equal(Calculate(3,0,-2),0)})
})

//divide:
describe('calculation',()=>{
    it('divide: should return 1',()=>{assert.equal(Calculate(4,2,2),1)})
})
describe('calculation',()=>{
    it('divide: should return 0.667',()=>{assert.equal(Calculate(4,0.2,0.3),0.667)})
})
describe('calculation',()=>{
    it('divide: should return 1',()=>{assert.equal(Calculate(4,-2,-2),1)})
})
describe('calculation',()=>{
    it('divide: should return -1',()=>{assert.equal(Calculate(4,-2,2),-1)})
})
describe('calculation',()=>{
    it('divide: should return 0',()=>{assert.equal(Calculate(4,0,2),0)})
})
describe('calculation',()=>{
    it('divide: should return 0',()=>{assert.equal(Calculate(4,0,-2),0)})
})
describe('calculation',()=>{
    it('divide: should return error',()=>{assert.equal(Calculate(4,0,0),"incorrect input on second number")})
})
describe('calculation',()=>{
    it('divide: should return error',()=>{assert.equal(Calculate(4,10,0),"incorrect input on second number")})
})

