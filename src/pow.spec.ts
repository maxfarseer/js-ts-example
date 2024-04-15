import { pow } from "../src/pow";

describe("pow", () => {
  it("should return the correct result when the exponent is positive", () => {
    expect(pow(2, 3)).toBe(8);
    expect(pow(5, 2)).toBe(25);
    expect(pow(10, 4)).toBe(10000);
  });

  it("should return 1 when the exponent is 0", () => {
    expect(pow(2, 0)).toBe(1);
    expect(pow(5, 0)).toBe(1);
    expect(pow(10, 0)).toBe(1);
  });

  it("should return 0 when the base is 0 and the exponent is positive", () => {
    expect(pow(0, 2)).toBe(0);
    expect(pow(0, 3)).toBe(0);
    expect(pow(0, 4)).toBe(0);
  });

  it("should return NaN when the base is negative and the exponent is not an integer", () => {
    expect(pow(-2, 0.5)).toBe(NaN);
    expect(pow(-5, 1.5)).toBe(NaN);
    expect(pow(-10, 2.5)).toBe(NaN);
  });
});
