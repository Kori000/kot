import React from 'react';
import { getToken } from './auth';
import axios from 'axios';
import useAntdCustomMessage from '../utils/useAntdCustomMessage';
import qs from 'qs';
const useRequest = () => {
  const { MessageSuccess, MessageError } = useAntdCustomMessage();

  const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000, // request timeout
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  // request interceptor
  request.interceptors.request.use(
    config => {
      if (config.isJson) {
        config.headers['Content-Type'] = 'application/json';
      } else if (config.data) {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        config.data = qs.stringify(config.data);
      }

      if (getToken()) {
        // let each request carry token
        config.headers['Authorization'] = `Bearer ${getToken()}`;
        console.log(config.headers.Authorization);
      }
      return config;
    },
    error => {
      // do something with request error
      console.log(error); // for debug
      return Promise.reject(error);
    }
  );

  // response interceptor
  request.interceptors.response.use(
    response => {
      const res = response.data;
      if (res.code === 99999) {
        return Promise.reject(new Error(res.message || 'Error'));
      } else {
        return res;
      }
    },
    error => {
      console.log('拦截错误', error);
      if (error.response.status === 401) {
        console.log('打点, 响应拦截器 error状态码返回 401');
        localStorage.clear();
        // 获取所有 cookie
        // var cookies = document.cookie.split(';');
        // // 循环遍历每个 cookie
        // for (var i = 0; i < cookies.length; i++) {
        //   // 获取 cookie 的名称
        //   var cookieName = cookies[i].split('=')[0];
        //   // 将 cookie 设置为过期
        //   document.cookie =
        //     cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // }
        // router.push('/');
      }
      if (error.response.status === 500) {
        console.log('打点, 响应拦截器 error状态码返回 500');
        MessageError('Network Error' + error, 2);
      }
      if (error.response.status === 422) {
        console.log('打点, 响应拦截器 error状态码返回 422');
        MessageError('Network Error' + error, 2);
      }
      console.log('错误消息' + error); // for debug
      return Promise.reject(error);
    }
  );

  return { request };
};

export default useRequest;
