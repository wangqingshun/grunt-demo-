var add = require('../calc');

var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('0 + 0 = 0', function() {
    expect(add(0, 0)).to.be.equal(0);
  });

  it('1 + 0 = 1', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('2+3=5',function(){
     expect(add(2,3)).to.be.equal(5);
  });
});
