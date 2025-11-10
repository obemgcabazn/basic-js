const {NotImplementedError} = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const emptyArr = arr.map((i) => {
        return (i === -1) ? i : undefined;
    });
    const dataArr = arr.filter(i => i !== -1).sort((a, b) => a - b);
    return emptyArr.map((i) => {
        return (i === undefined) ? dataArr.shift() : i;
    });
}

module.exports = {
    sortByHeight
};
