/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain: Worst-case complexity of O(n²). It's been used as only a small handful of swaps needed to be made.

function sortArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError();
  }
  let isNotSorted = true;
  while (isNotSorted) {
    isNotSorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (
        typeof arr[i] !== 'number' ||
        typeof arr[i + 1] !== 'number' ||
        arr[i] % 1 !== 0 ||
        arr[i + 1] % 1 !== 0
      ) {
        throw new TypeError();
      }
      if (arr[i] > arr[i + 1]) {
        isNotSorted = true;
        let bigger = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = bigger;
      }
    }
  }
  return arr;
}
module.exports = sortArray;
