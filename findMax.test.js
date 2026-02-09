import { describe, test, expect } from 'vitest';
import { findMax } from './findMax';

describe('findMax function', () => {
  test('finds 10 in [1, 10, 5]', () => {
    expect(findMax([1, 10, 5])).toBe(10);
  });
  test('finds -1 in [-6, -4, -20]', () => {
    expect(findMax([-6, -4, -20])).toBe(-4);
  });
});