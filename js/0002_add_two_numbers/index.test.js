let listNode = require( './list_node' );
let addNum = require( './add_two_numbers' );
let assert = require( 'assert' );

describe( 'AddTwoNumbersTests', function() {
  describe( 'AddTwoNumbersTest1', function() {
    it( 'should return [7, 0, 8] when passed [2, 4, 3] and [5, 6, 4]', function() {
      const l1 = listNode.buildList( [ 2, 4, 3 ] );
      const l2 = listNode.buildList( [ 5, 6, 4 ] );
      const sum1 = listNode.toArray( addNum.addTwoNumbers( l1, l2 ) );
      assert.deepEqual( sum1, [ 7, 0, 8 ] );
    } );
  } );

  describe( 'AddTwoNumbersTest2', function() {
    it( 'should return [0] when passed [0] and [0]', function() {
      const l1 = listNode.buildList( [ 0 ] );
      const l2 = listNode.buildList( [ 0 ] );
      const sum2 = listNode.toArray( addNum.addTwoNumbers( l1, l2 ) );
      assert.deepEqual( sum2, [ 0 ] );
    } );
  } );

  describe( 'AddTwoNumbersTest3', function() {
    it( 'should return [8, 9, 9, 9, 0, 0, 0, 1] when passed [9, 9, 9, 9, 9, 9, 9] and [9, 9, 9, 9]', function() {
      const l1 = listNode.buildList( [ 9, 9, 9, 9, 9, 9, 9 ] );
      const l2 = listNode.buildList( [ 9, 9, 9, 9 ] );
      const sum1 = listNode.toArray( addNum.addTwoNumbers( l1, l2 ) );
      assert.deepEqual( sum1, [ 8, 9, 9, 9, 0, 0, 0, 1 ] );
    } );
  } );
} );