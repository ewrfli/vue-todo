export function setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value));
}
export function getItem(key){
    return JSON.parse(localStorage.getItem(key));
}
export function removeItem(key){
    localStorage.remove(key);
}

import axios from 'axios';
// import { Message } from 'ant-design-vue'
// import { Toast } from 'vant';
// import store from '@/store'

// 请求超时时间
axios.defaults.timeout = 30000;
// axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/';

axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['accept'] = '*/*';

// 不使用token的请求
// const whiteList = ['/captchaImage', '/login']

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // if (!whiteList.some(item => config.url.includes(item))) {
        //     config.headers['Authorization'] = store.state.token || ''
        // }
        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            // const { code } = response.data
            const { status } = response
            // if (code == 401) {
            if (status == 401) {
                // store.commit('clearUserInfo')
                // Toast.fail('登录过期，请重新登录')
                return Promise.reject(response);
            } else if (status == 200) {
                if (response.data.rows) {
                    return Promise.resolve({ rows: response.data.rows, total: response.data.total });
                } else {
                    return Promise.resolve(response.data);
                }
            } else {
                // Toast.fail(response.data.msg);
                console.log(status);
                // Toast.fail('失败');
                return Promise.reject(response);
            }
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况 
    error => {
        return Promise.reject(error.response);
    }
);

//  // apimode:新时代apimode的为xsdwmsj,其他接口都是vmsapi
//  export function post(api, apidata, apimode = 'vmsapi') {
//      const params = {
//          'api': api, 
//          'apidata': JSON.stringify(apidata),
//          'apimode': apimode
//      };
//      return axios({
//          url: process.env.VUE_APP_API_BASE_URL,//'https://m2.zyh365.com/webproject/api/comm/currency.do',
//          method: 'post',
//          params,
//          headers: {
//              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//          //   'Content-Type': 'application/json;charset=UTF-8'
//            // Authorization: window.localStorage.getItem('token') || ''
//          }
//        })
//  }

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    return axios({
        url: url,
        method: 'get',
        params,
    })
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} data [请求时携带的参数] 
 */
export function post(url, data) {
    return axios({
        url: url,
        method: 'post',
        data,
    })
}

export function put(url, data) {
    return axios({
        url: url,
        method: 'post',
        data,
    })
}


