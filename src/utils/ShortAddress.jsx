// 截取地址
export default function ShortAddress(address) {
  if (!address) return console.log('格式化的地址不对');

  const dispayAddress =
    address.substr(0, 4) +
    '...' +
    address.substr(address.length - 8, address.length);
  return dispayAddress;
}
