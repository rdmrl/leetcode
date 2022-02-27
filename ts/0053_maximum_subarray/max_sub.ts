/**
 * =====
 Given an integer array nums, find the contiguous subarray 
 (containing at least one number) which has the largest sum 
 and return its sum.

 A subarray is a contiguous part of an array.
 * =====
 */

export default function maxSubArray(nums: number[]): number {
  // Special case of a single element array.
  if(nums.length === 1) {
    return nums[0];
  }

  // Use Neg Inf to allow all negative numbers as the input.
  let bestSum = Number.NEGATIVE_INFINITY;
  let bestStartIx = 0;
  let bestEndIx = 0;
  let curSum = 0;

  let curStartIx = 0;
  let curEndIx = 0;

  for(let ix = 0; ix < nums.length; ix++ ) {
    if(curSum <= 0) {
      // Start a new sequence at the current element.
      curStartIx = curEndIx;
      curSum = nums[ix];
    } else {
      curSum += nums[ix];
    }

    if(curSum > bestSum) {
      bestSum = curSum;
      bestStartIx = curStartIx;
      bestEndIx = curEndIx + 1;
    }
    curEndIx++;
  }

  return nums.slice(bestStartIx, bestEndIx).reduce((a, b) => a + b, 0);
}
