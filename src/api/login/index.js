import useRequest from '../../utils/useRequest';

const { request } = useRequest();

export function getUserInfo(data) {
  return request({
    url: '/api/user/info',
    method: 'GET',
    params: data
  });
}
