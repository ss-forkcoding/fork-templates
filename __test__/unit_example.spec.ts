// common function unit test example
import { expect, describe, it } from "vitest";

const sum = (a: number, b: number) => {
  return a + b;
};

// test suit should contain two test contest at least
// 1. edge case
// 2. error case

describe("happy path", () => {
  it("ex) should return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("ex) should not return", () => {
    // @ts-ignore
    expect(sum("a", "as")).throws;
  });
});
