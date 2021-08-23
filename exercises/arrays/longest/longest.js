/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  return Math.max(...array.map(el => el.length));
}

if (require.main === module) {
  console.log('Running sanity checks for longest:', longest(['giraffe', 'giraaafffe', 'banana']));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
