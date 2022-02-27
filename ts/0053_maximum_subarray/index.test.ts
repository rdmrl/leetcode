import maxSub from './max_sub';

describe("FindMaxSub0", () => {
  it("should return 1", () => {
    expect(maxSub([1])).toBe(1);
  });
});

describe("FindMaxSub1", () => {
  it("should return -1", () => {
    expect(maxSub([-2,-1])).toBe(-1);
  });
});

// [-2, 1], [1, -3], [-3, 4], [4, 4];
// [-2, 1, -3], [1, -3, 4], [-3, 4, 4];
// [-2, 1, -3, 4], [1, -3, 4, 4];

describe("FindMaxSub2", () => {
  it("should return 6", () => {
    expect(maxSub([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
  });
});

describe("FindMaxSub3", () => {
  it("should return 23", () => {
    expect(maxSub([5,4,-1,7,8])).toBe(23);
  });
});
