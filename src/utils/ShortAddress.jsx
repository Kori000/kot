// 截取地址
export default function ShortAddress(address, start = 4, end = 8) {
  if (!address) return console.log('格式化的地址不对');

  const dispayAddress =
    address.substr(0, start) +
    '...' +
    address.substr(address.length - end, address.length);
  return dispayAddress;
}
