const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str === '') return '';
  let curLetter = str[0];
  let counter = 0;
  let result = '';
  for(let letter of str){
    if(letter === curLetter){
      counter++;
    } else {
      if(counter > 1){
        result += `${counter}${curLetter}`;
      }else {
        result += curLetter;
      }
      curLetter = letter;
      counter = 1;
    }
  }
  if(counter > 1){
    result += `${counter}${curLetter}`;
  }else {
    result += curLetter;
  }
  return result;
}

module.exports = {
  encodeLine
};
