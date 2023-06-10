import { expect, test, describe } from "bun:test";
import { add, subtract, multiply, division } from "./math";

// Simple test
test("Addition two numbers", () => {
  expect(add(2, 2)).toBe(4);
});

// Tests can be async
test("Subtraction two numbers", async () => {
  const result = await Promise.resolve(subtract(16, 2));
  expect(result).toBe(14);
});

// Tests can be grouped into suites with describe.
describe("Multiplication and division two numbers", () => {
  test("Multiplication two numbers", () => {
    expect(multiply(3, 1)).toBe(3);
  });

  test("Division two numbers", () => {
    expect(division(27, 3)).toBe(9);
  });
});
