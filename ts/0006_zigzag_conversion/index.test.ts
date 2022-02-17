import convert from "./zigzag";

describe("hello", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });
});

describe("zigzag", () => {
  it("should return 'PAHNAPLSIIGYIR' when the input is 'PAYPALISHIRING' with 3 rows", () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  });
});

describe("zigzag", () => {
  it("should return 'PINALSIGYAHRPI' when the input is 'PAYPALISHIRING' with 4 rows", () => {
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  });
});

