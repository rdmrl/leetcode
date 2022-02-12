let twoSum = require('./two_sum');
let assert = require('assert');

describe('TwoSumTests', function () {
  describe('TwoSumTest1', function () {
    it("should return [0, 1] when passed [2, 7, 11, 15] and 9", function () {
      assert.equal( twoSum.twoSum( [2, 7, 11, 15], 9 ), [0, 1] );
    } );
  } );
} );
