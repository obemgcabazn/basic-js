const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for(let site of domains){
    let domain = site.split('.').reverse();
    let curDom ='';
    for(let dom of domain){
      curDom += `.${dom}`;
      if(result[curDom]){
        result[curDom]++;
      }else{
        result[curDom] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
