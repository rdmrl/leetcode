/**
 Do not return anything, modify nums1 in-place instead.
 */
export default function merge(nums1: number[], m: number, nums2: number[], n: number): void {

  // Start at the last valid element in nums1.
  let ix = Math.max(0, m - 1);

  // Start at the last element in nums2.
  for(let jx = n - 1; jx >= 0; jx--) {

    const ix1 = Math.min(ix, ix + jx + 1);
    console.log(ix, nums1[ix], jx, nums2[jx]);
    if(nums1[ix] < nums2[jx]) {
      nums1[ix1] = nums2[jx];
    } else {
      nums1[ix1] = nums1[ix];
      nums1[ix] = nums2[jx];
      ix = Math.max(ix--, 0);
    }
  }
};
