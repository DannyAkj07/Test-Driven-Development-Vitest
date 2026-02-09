import { describe, test, expect } from 'vitest';
import { multiply } from './multiply';

describe('multiply function', () => {
  test('multiply 2 * 6 to equal 12', () => {
    expect(multiply(2, 6)).toBe(12);
  });
  test('multiply 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });
});