import axios from 'axios';

let service = axios.create({
 baseURL: "http://123.207.32.32:8000/api/h8",
 timeout: 3000 // 1s
});

//请求拦截器
service.interceptors.request.use(
 config => {
  // 在请求发送前处理
  config.headers.token = "token1";
  return config;
 }, err => {
  return Promise.reject(err);
 });

//响应拦截器
service.interceptors.response.use(
 config => {
  // 在请求成功对响应数据处理
  return config;
 }, err => {
  return Promise.reject(err);
 });

export default service

