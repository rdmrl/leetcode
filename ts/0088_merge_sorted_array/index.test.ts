import merge from './merge';
let assert = require( 'assert' );

describe( 'MergeArrayTests', function() {
  describe( 'MergeArrayTest1', function() {
    it( "should update to [1, 2, 2, 3, 5, 6] when passed [1, 2, 3, 0, 0, 0] and [2, 5, 6]", function() {
      const nums1 = [ 1, 2, 3, 0, 0, 0 ];
      merge( nums1, 3, [2, 5, 6], 3 );
      assert.deepEqual( nums1, [1, 2, 2, 3, 5, 6 ] );
    } );
  } );
  describe( 'MergeArrayTest2', function() {
    it( "should update to [1] when passed [0] and [1]", function() {
      const nums1 = [0];
      merge( nums1, 0, [1], 1 );
      assert.deepEqual( nums1, [1] );
    } );
  } );
} );
