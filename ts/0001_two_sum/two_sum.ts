interface NumberMap {
  [key: string]: number;
}

export default function twoSum(nums: number[], target: number): number[] {
  const diffs: NumberMap = {};

  for(let ix = 0; ix < nums.length; ix++) {
    const num = nums[ix];
    const mapIndex = num + "_" + ix;
    diffs[mapIndex] = target - num;
  }

  let firstIndex = -1;
  let lastIndex = -1;

  for(const key in diffs) {
    const keyPart = key.split('_')[0];
    const keyInt = parseInt(keyPart, 10);
    if(keyInt + diffs[key] === target) {

      // Check if the complement value exists in the input array
      // after this key position.
      const keyPos = parseInt(key.split('_')[1], 0);

      lastIndex = nums.indexOf(diffs[key], keyPos + 1);
      if(lastIndex !== -1) {
        // Found the complement value.
        // Use the index of the first key as the index of the first number.
        firstIndex = keyPos;
        break;
      }
    }
  }

  return [firstIndex, lastIndex];
};
