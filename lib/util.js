'use strict';

/**
 * Create an array of numbers.
 * @param {number} from
 * @param {number} to
 * @returns {number[]}
 */
function range(from, to) {
  // TODO: make this inlined.
  const list = new Array(to - from + 1);

  for (let i = 0; i < list.length; i += 1) {
    list[i] = from + i;
  }
  return list;
}

/**
 * Check if value is in a range map.
 * @param {number} value
 * @param {number[]} rangeMap
 * @returns {boolean}
 */
function inRange(value, rangeMap) {
  if (value < rangeMap[0]) return false;
  let startIndex = 0;
  let endIndex = rangeMap.length / 2;
  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    // actual array index
    const actualIndex = middleIndex * 2;

    // Check if value is in range pointed by actual index
    if (value >= rangeMap[actualIndex] && value <= rangeMap[actualIndex + 1]) {
      return true;
    }

    if (value > rangeMap[actualIndex + 1]) {
      // Search Right Side Of Array
      startIndex = middleIndex + 1;
    } else {
      // Search Left Side Of Array
      endIndex = middleIndex - 1;
    }
  }
  return false;
}

module.exports = {
  range,
  inRange,
};
