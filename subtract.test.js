import { describe, test, expect } from 'vitest';
import { subtract } from './subtract';

describe('subtract function', () => {
  test('subtracts 10 - 5 to equal 5', () => {
    expect(subtract(10, 5)).toBe(5);
  });
  test('subtracts 0 - 5 to equal -5', () => {
    expect(subtract(0, 5)).toBe(-5);
  });
});