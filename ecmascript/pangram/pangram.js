export default class Pangram  {
  constructor(pangram) {
    this.pangram = pangram.replace(/[^a-zA-Z]/g, '')
      .split('')
      .map(letter => letter.toLowerCase());
  }

  isPangram() {
    return distinctValuesOfArray(this.pangram).length === 26;
  }
}

/**
 * Returns the unique values of an array.
 *
 * @whatItDoes It used ES6 Sets and the spread syntax to create a new array of unique values.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator}
 *
 * @credit {@link https://github.com/Chalarangelo/30-seconds-of-code#distinctvaluesofarray}
 *
 * @param arr
 */
const distinctValuesOfArray = arr => [...new Set(arr)];