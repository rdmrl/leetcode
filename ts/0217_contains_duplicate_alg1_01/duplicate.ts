/**
 * =====
 Given an integer array nums, return true if any value appears at least twice 
 in the array, and return false if every element is distinct.
 * =====
 */
interface countMap {
  [key: number]: number;
}

export default function containsDuplicate(nums: number[]): boolean {
  const counts: countMap = {}

  for(let ix = 0; ix < nums.length; ix++) {
    const num = nums[ix];
    if(counts[num]) {
      // Second occurrence, stop and return.
      return true;
    } else {
      // First occurrence of num.
      counts[num] = 1;
    }
  }

  return false;
}
