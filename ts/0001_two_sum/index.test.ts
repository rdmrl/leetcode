import twoSum from './two_sum';
let assert = require( 'assert' );

describe( 'TwoSumTests', function() {
  describe( 'TwoSumTest1', function() {
    it( "should return [0, 1] when passed [2, 7, 11, 15] and 9", function() {
      assert.deepEqual( twoSum( [ 2, 7, 11, 15 ], 9 ), [ 0, 1 ] );
    } );
  } );
  describe( 'TwoSumTest2', function() {
    it( "should return [1, 2] when passed [3, 2, 4] and 6", function() {
      assert.deepEqual( twoSum( [ 3, 2, 4 ], 6 ), [ 1, 2 ] );
    } );
  } );
  describe( 'TwoSumTest3', function() {
    it( "should return [0, 1] when passed [3, 3] and 6", function() {
      assert.deepEqual( twoSum( [ 3, 3 ], 6 ), [ 0, 1 ] );
    } );
  } );
} );
