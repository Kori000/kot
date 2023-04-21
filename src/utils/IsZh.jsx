// 是否是中国, 是的话跳转到 /Kot/ban
const IsZh = async () => {
  const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace', {
    method: 'GET'
  });
  const data = await res.text();
  console.log(data);
  const regex = /loc=([^\n]+)/;
  const match = regex.exec(data);
  if (match) {
    const locValue = match[1];
    console.log(locValue); // 输出 loc
    if (locValue === 'CN') {
      console.log('是中国');
      window.location.href = '/Kot/ban';
    }
  } else {
    console.log('未找到 loc 值');
  }
};

export default IsZh;
