const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;
  let result = '';

  if(additionRepeatTimes && additionSeparator == null) {
    additionSeparator = '|';
  }

  for(let i = 0; i < options.repeatTimes - 1; i++){
    result += str
    if(additionRepeatTimes) {
      if(additionRepeatTimes > 1){
        for(let k = 0; k < additionRepeatTimes - 1; k++) {
          result += addition + additionSeparator;
        }
        result += addition;
      } else {
        result += addition;
      }
    } else {
      if(addition) result += addition;
    }
    result += separator;
  }
  result += str;
  if(additionRepeatTimes) {
    if(additionRepeatTimes > 1){
      for(let k = 0; k < additionRepeatTimes - 1; k++) {
        result += addition + additionSeparator;
      }
      result += addition;
    } else {
      result += addition;
    }
  } else {
    if(addition) result += addition;
  }
  return result;
}

module.exports = {
  repeater
};
