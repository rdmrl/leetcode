import maxSub from './max_sub';

// [-2, 1], [1, -3], [-3, 4], [4, 4];
// [-2, 1, -3], [1, -3, 4], [-3, 4, 4];
// [-2, 1, -3, 4], [1, -3, 4, 4];
describe("FindMaxSub1", () => {
  it("should return 6", () => {
    // expect(maxSub([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    expect(maxSub([-2,1,-3,4,4])).toBe(6);
  });
});
