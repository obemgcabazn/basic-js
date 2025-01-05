const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let namesCounter = {};
  for(let item of names){
    let newName = item;

    if (namesCounter[item]) {
      let count = namesCounter[item];
      for (let i = 1; ; i++) {
        newName = `${item}(${i})`;
        if (!namesCounter[newName]) {
          count = i;
          break;
        }
      }
      namesCounter[item] = count + 1;
    }
    namesCounter[newName] = 1;
    result.push(newName);
  }
  return result;
}

module.exports = {
  renameFiles
};
