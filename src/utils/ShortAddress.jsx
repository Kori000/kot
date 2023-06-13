/**
 * @desc
 * Shorten an address to display it in a table.
 * @usage
 * import ShortAddress from 'src/utils/ShortAddress';
 * ShortAddress('0x1234567890123456789012345678901234567890');
 * @param {string} address
 * @param {number} start
 * @param {number} end
 * @returns {string}
 */

// 截取地址
export default function ShortAddress(address, start = 4, end = 8) {
  if (!address) return console.log('格式化的地址不对');

  const dispayAddress =
    address.substr(0, start) +
    '...' +
    address.substr(address.length - end, address.length);
  return dispayAddress;
}
