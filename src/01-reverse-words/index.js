/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain: The worst case time complexity is O(n log n) as it's splits the parent array to it's children components and pairs up an individual with another.

function reverseWordsInSentence(input) {
  const inputArr = input.split(' ');
  let reversedWords = new Array();

  for (let word of inputArr) {
    reversedWords.push(word.split('').reverse().join(''));
  }
  return reversedWords.join(' ');
}

module.exports = reverseWordsInSentence;
