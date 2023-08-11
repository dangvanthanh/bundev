import { expect, test } from 'bun:test';
import { one, two } from './export';

// Simple test
test('Export one', () => {
  expect(one).toEqual(1);
});

// Tests can be async
test('Export tow', async () => {
  const result = await Promise.resolve(two);
  expect(result).toEqual(2);
});
