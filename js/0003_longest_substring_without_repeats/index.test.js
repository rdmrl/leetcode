let longestSub = require( './longest_sub' );
let assert = require( 'assert' );

describe( 'FindLongestSubstringTests', function () {
  describe( 'FindLongestSubTest1', function () {
    it( 'should return 3 when passed "abcabcbb"', function () {
      assert.equal( longestSub.findSubstring( "abcabcbb" ), 3 );
    } );
  } );

  describe( 'FindLongestSubTest2', function () {
    it( 'should return 1 when passed "bbbbb"', function () {
      assert.equal( longestSub.findSubstring( "bbbbb" ), 1 );
    } );
  } );
  describe( 'FindLongestSubTest3', function () {
    it( 'should return 3 when passed "pwwkew"', function () {
      assert.equal( longestSub.findSubstring( "pwwkew" ), 3 );
    } );
  } );
} );
