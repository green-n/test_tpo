const assert = require('assert');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

const {Calculate} = require('./index')
const {MiddleCalculations} = require('./index')


describe('', () => {
    it('should return 2 и 2', () => {
      const actualResult = MiddleCalculations(2,2)
  
      const expectedResult = {
        average:2,
        geometricMean:2
    };
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });
describe('', () => {
    it('should return 5 и 2', () => {
      const actualResult = MiddleCalculations(2,2)
  
      const expectedResult = {
        average:3.5,
        geometricMean:2
    };
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });








//input errors
describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations(2,-2)
  
      const expectedResult = "incorrect input";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });
describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations(-2,2)
  
      const expectedResult = "incorrect input";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });
describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations(-2,-2)
  
      const expectedResult = "incorrect input";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });



