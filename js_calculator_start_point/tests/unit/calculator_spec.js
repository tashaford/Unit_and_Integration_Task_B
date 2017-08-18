var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  }),

  it('should have running total equal to 0 to being', function(){
    assert.strictEqual(calculator.runningTotal, 0);
  }),

  it('should be able to add two values together', function(){
    calculator.previousTotal = 4;
    calculator.add(3);
    assert.strictEqual(calculator.runningTotal, 7);
  }),

  it('should be able to subtract one value from another', function(){
    calculator.previousTotal = 12;
    calculator.subtract(3);
    assert.strictEqual(calculator.runningTotal, 9);
  }),

  it('should be able to multiply two values', function(){
    calculator.previousTotal = 4;
    calculator.multiply(8);
    assert.strictEqual(calculator.runningTotal, 32);
  }),

  it('should be able to divide one value by another', function(){
    calculator.previousTotal = 63;
    calculator.divide(9);
    assert.strictEqual(calculator.runningTotal, 7);
  }),

  it('should be able to change running total when button clicked', function(){
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 5);
  }),

  it('should be able to change running total when multiple buttons are clicked', function(){
    calculator.numberClick(5);
    calculator.numberClick(7);
    calculator.numberClick(1);
    assert.strictEqual(calculator.runningTotal, 571);
  }),

  it('should be able to update running total when an operator button is clicked', function(){
    calculator.previousTotal = 32;
    calculator.add(5);
    calculator.operatorClick('+');
    assert.strictEqual(calculator.previousTotal, 37);
  }),

  it('should be able to clear running total, even if number buttons have previously been presssed', function(){
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.numberClick(1);
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  })

});
