const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let skip = [];
  for(let item of matrix) {
    for (let i = 0; i < item.length; i++) {
      if(skip.includes(i)) continue;
      if(item[i] === 0) {
        skip.push(i);
        continue;
      }
      result += item[i];
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
