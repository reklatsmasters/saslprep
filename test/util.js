'use strict';

const { setFlagsFromString } = require('v8');
const { range, inRange } = require('../lib/util');

// 984 by default.
setFlagsFromString('--stack_size=500');

test('should work', () => {
  const list = range(1, 3);
  expect(list).toEqual([1, 2, 3]);
});

test('should work for large ranges', () => {
  expect(() => range(1, 1e6)).not.toThrow();
});

describe('inRange', () => {
  const rangeMap = [10, 10, 12, 20, 22, 22, 30, 40, 50, 55, 57, 57];

  test('should return true for numbers in range map', () => {
    expect(inRange(10, rangeMap)).toBeTruthy();
    expect(inRange(12, rangeMap)).toBeTruthy();
    expect(inRange(15, rangeMap)).toBeTruthy();
    expect(inRange(20, rangeMap)).toBeTruthy();
    expect(inRange(22, rangeMap)).toBeTruthy();
    expect(inRange(30, rangeMap)).toBeTruthy();
    expect(inRange(31, rangeMap)).toBeTruthy();
    expect(inRange(35, rangeMap)).toBeTruthy();
    expect(inRange(39, rangeMap)).toBeTruthy();
    expect(inRange(40, rangeMap)).toBeTruthy();
    expect(inRange(52, rangeMap)).toBeTruthy();
    expect(inRange(57, rangeMap)).toBeTruthy();
  });

  test('should return false for numbers in range map', () => {
    expect(inRange(1, rangeMap)).toBeFalsy();
    expect(inRange(9, rangeMap)).toBeFalsy();
    expect(inRange(11, rangeMap)).toBeFalsy();
    expect(inRange(21, rangeMap)).toBeFalsy();
    expect(inRange(23, rangeMap)).toBeFalsy();
    expect(inRange(25, rangeMap)).toBeFalsy();
    expect(inRange(29, rangeMap)).toBeFalsy();
    expect(inRange(41, rangeMap)).toBeFalsy();
    expect(inRange(44, rangeMap)).toBeFalsy();
    expect(inRange(49, rangeMap)).toBeFalsy();
    expect(inRange(56, rangeMap)).toBeFalsy();
    expect(inRange(58, rangeMap)).toBeFalsy();
  });
});
