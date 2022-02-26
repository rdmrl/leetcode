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

  const arraySum = nums.reduce((a, b) => a + b, 0);
  console.log('arraySum:', arraySum, 'len:', nums.length);

  let startIx = -1;
  let endIx = -1;
  let prevSubArraySum = arraySum;
  let curSubArraySum = arraySum;
  // Loop through the array and build the map of subarrays and their sums.

  const MIN_SUB_ARRAY_SIZE = 2;

  for(let ix = 0, jx = MIN_SUB_ARRAY_SIZE + 1; ix < nums.length - MIN_SUB_ARRAY_SIZE; ix++, jx++) {
    console.log(ix, jx);
    // const subArray = nums.slice( ix, ix + subWidth + 1);
    // console.log(subArray);

    /*
    prevSubArraySum = curSubArraySum;
    curSubArraySum -= nums[ix];

    if( curSubArraySum < prevSubArraySum ) {
      startIx = ix;
      endIx = nums.length - 1;
    }
    console.log(curSubArraySum, prevSubArraySum, startIx, endIx);
    */

  }

  /*
  for(let ix = 0; ix < nums.length; ix++) {
    const subArray = nums.slice( 0, ix + 1 );
    console.log(subArray);
  }
  */


  return 0;
}
