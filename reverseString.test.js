import { describe, test, expect } from 'vitest';
import { reverseString } from './reverseString';

describe('reverseString function', () => {
  test('reverse "football" to "llabtoof"', () => {
    expect(reverseString('football')).toBe('llabtoof');
  });
  test('reverse "hello" to "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});