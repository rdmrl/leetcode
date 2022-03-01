/**
 Do not return anything, modify nums1 in-place instead.
 */
export default function merge(nums1: number[], m: number, nums2: number[], n: number): void {

  console.log(nums1);
  console.log(nums2);

  // Start at the last valid element in nums1.
  let ix = Math.max(0, m - 1);
  const offsetIx = m - 1;

  console.log('ix:', ix, 'offsetIx:', offsetIx);

  // Start at the last element in nums2.
  for(let jx = n - 1; jx >= 0; jx--) {

    // const ix1 = Math.min(ix, offsetIx + jx + 1);
    const ix1 = offsetIx + jx + 1;
    console.log('ix:', ix, nums1[ix], 'jx:', jx, nums2[jx], 'ix1:', ix1);
    if(nums1[ix] < nums2[jx]) {
      nums1[ix1] = nums2[jx];
    } else {
      nums1[ix1] = nums1[ix];
      nums1[ix] = nums2[jx];
      ix = Math.max(ix--, 0);
    }
  }
};
