import { expect, test, describe } from 'bun:test';

// Simple test
test('2 + 2', () => {
  expect(2 + 2).toBe(4);
});

// Tests can be async
test('2 + 12', async () => {
  const result = await Promise.resolve(2 + 12);
  expect(result).toBe(14);
});

// Tests can be grouped into suites with describe.
describe('arithmetic', () => {
  test('2 + 1', () => {
    expect(2 + 1).toBe(3);
  });

  test('3 * 3', () => {
    expect(3 * 3).toBe(9);
  });
});
