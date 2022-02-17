import convert from "./zigzag";

describe("hello", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });
});

describe("zigzag1", () => {
  it("should return 'PAHNAPLSIIGYIR' when the input is 'PAYPALISHIRING' with 3 rows", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });
});

describe("zigzag2", () => {
  it("should return 'PINALSIGYAHRPI' when the input is 'PAYPALISHIRING' with 4 rows", () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });
});

describe("zigzag3", () => {
  it("should return 'A' when the input is 'A' with 1 row", () => {
    expect(convert("A", 1)).toBe("A");
  });
});

describe("zigzag4", () => {
  it("should return 'AA' when the input is 'AA' with 1 row", () => {
    expect(convert("AA", 1)).toBe("AA");
  });
});

describe("zigzag5", () => {
  it("should return 'AB' when the input is 'AB' with 2 rows", () => {
    expect(convert("AB", 2)).toBe("AB");
  });
});
