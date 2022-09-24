const assert = require('assert');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

const {Calculate} = require('./index')
const {MiddleCalculations} = require('./index')










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


  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations(2)
  
      const expectedResult = "insufisiant input";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });


  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations(1,2,3)
  
      const expectedResult = "exesive input";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });


  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations(1,2,3,4,6,7,8)
  
      const expectedResult = "exesive input";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });


  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations({},{})
  
      const expectedResult = "input is not a numbner";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });


  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations([],[])
  
      const expectedResult = "input is not a numbner";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });


  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations("word","test")
  
      const expectedResult = "input is not a numbner";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });


  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations({},"test")
  
      const expectedResult = "input is not a numbner";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });


  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations([],"test")
  
      const expectedResult = "input is not a numbner";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });

  describe('', () => {
    it('should return error', () => {
      const actualResult = MiddleCalculations([],{})
  
      const expectedResult = "input is not a numbner";
  
      expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
    });
  });



// test calculations


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
  it('should return 3.5 и 3.16228', () => {
    const actualResult = MiddleCalculations(5,2)

    const expectedResult = {
      average:3.5,
      geometricMean:3.16228
  };

    expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
  });
});


describe('', () => {
  it('should return 1 и 0', () => {
    const actualResult = MiddleCalculations(0,2)

    const expectedResult = {
      average:1,
      geometricMean:0
  };

    expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
  });
});


describe('', () => {
  it('should return 0 и 0', () => {
    const actualResult = MiddleCalculations(0,0)

    const expectedResult = {
      average:0,
      geometricMean:0
  };

    expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
  });
});


describe('', () => {
  it('should return 0.02 и 0.01732', () => {
    const actualResult = MiddleCalculations(0.01,0.03)

    const expectedResult = {
      average:0.02,
      geometricMean:0.01732
  };

    expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
  });
});


describe('', () => {
  it('should return 0.02 и 0.00173', () => {
    const actualResult = MiddleCalculations(0.001,0.003)

    const expectedResult = {
      average:0.002,
      geometricMean:0.00173
  };

    expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
  });
});


describe('', () => {
  it('should return 5004999999.5 и 316227766.00103', () => {
    const actualResult = MiddleCalculations(10000000,9999999999)

    const expectedResult = {
      average:5004999999.5,
      geometricMean:316227766.00103
  };

    expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
  });
});


describe('', () => {
  it('should return 5004999999.5 и 0', () => {
    const actualResult = MiddleCalculations(0,9999999999)

    const expectedResult = {
      average:4999999999.5,
      geometricMean:0
  };

    expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
  });
});




