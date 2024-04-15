import { sumNumbers } from "./sum";

describe("sumNumbers", () => {
  it("should return the sum of two numbers", () => {
    expect(sumNumbers(2, 3)).toBe(5);
    expect(sumNumbers(-1, 5)).toBe(4);
    expect(sumNumbers(0, 0)).toBe(0);
  });
});
