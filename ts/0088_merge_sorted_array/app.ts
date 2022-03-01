import merge from './merge';

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);

console.log(nums1);

console.log('---------------------');

let nums3: number[] = [1];
let nums4: number[] = [];
merge(nums3, 1, nums4, 0);

console.log(nums3);
