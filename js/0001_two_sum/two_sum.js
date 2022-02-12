/**
 * =====
 Given an array of integers nums and an integer target, return indices 
 of the two numbers such that they add up to target.

 You may assume that each input would have exactly one solution, and 
 you may not use the same element twice.

 You can return the answer in any order.

 Constraints:
 -  2 <= nums.length <= 104
 - -109 <= nums[i] <= 109
 - -109 <= target <= 109
 - Only one valid answer exists.

 * =====
 */

module.exports = {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum: function( nums, target ) {

    for ( let index = 0; index < nums.length; index++ ) {
      for ( let index2 = 0; index2 < nums.length; index2++ ) {
        if ( index !== index2 && ( nums[ index ] + nums[ index2 ] === target ) ) {
          return [ index, index2 ];
        }
      }
    }

  },

  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSumOpt: function( nums, target ) {

    for ( let index = 0; index < nums.length; index++ ) {
      for ( let index2 = 0; index2 < nums.length; index2++ ) {
        if ( index !== index2 && ( nums[ index ] + nums[ index2 ] === target ) ) {
          return [ index, index2 ];
        }
      }
    }

  }
};