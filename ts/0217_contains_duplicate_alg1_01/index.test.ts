import containsDuplicate from './duplicate';

describe("duplicate1", () => {
  it("should return true", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });
});

describe("duplicate2", () => {
  it("should return false", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});

describe("duplicate3", () => {
  it("should return true", () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
  });
});
