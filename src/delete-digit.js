const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let results = [];
  const nArr = String(n);
  let str = nArr.split('');
  for (let i = 0; i < nArr.length; i++){
    let temp = Array.from(str);
    temp.splice(i, 1);
    results.push(temp.join(''));
  }
  return Number(results.reduce((previous, current) => (previous > current) ? previous : current));
}

module.exports = {
  deleteDigit
};
