const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(value);
    return this;
  },
  removeLink(position) {
    if(
        !Number.isInteger(position) ||
        position > this.chainArr.length ||
        position < 1
    ){
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainArr.map((i) => "( " + i + " )");
    result = result.reduce((prev, cur) => prev + "~~" + cur );
    this.chainArr = [];
    return result;
  }
};

module.exports = {
  chainMaker,
};
