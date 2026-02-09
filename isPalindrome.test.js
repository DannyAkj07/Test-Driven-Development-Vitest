import { describe, test, expect } from 'vitest';
import { isPalindrome } from './isPalindrome';

describe('isPalindrome function', () => {
  test('returns true for "radar"', () => {
    expect(isPalindrome('radar')).toBe(true);
  });
  test('returns false for "eaten"', () => {
    expect(isPalindrome('eaten')).toBe(false);
  });
});