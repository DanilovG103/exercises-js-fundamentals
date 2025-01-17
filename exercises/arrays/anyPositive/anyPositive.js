/**
 * Given an array of numbers, returns true if _any_ element is positive
 * and false otherwise.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if any number in the input array is positive
 *   and false otherwise.
 */
function anyPositive(array) {
  return array.some(el => el > 0);
}

if (require.main === module) {
  console.log('Running sanity checks for anyPositive:', anyPositive([1, 2, 3, 4, 5]), anyPositive([1, 2, -3, 4, 5]), anyPositive([0, 0, 1]), anyPositive([-10, -10, -10]), anyPositive([-10, -10, 1]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = anyPositive;
