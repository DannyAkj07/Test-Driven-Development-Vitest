import { describe, test, expect } from 'vitest';
import { add } from './add';

describe('add function', () => {
  test('adds 4 + 6 to equal 10', () => {
    expect(add(4, 6)).toBe(10);
  });
  test('adds -3 + -5 to equal -8', () => {
    expect(add(-3, -5)).toBe(-8);
  });
});