// 定义一些api接口请求的函数
import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: 'http://localhost:8080', // 请求地址
    method: 'post', // 请求类型
    data: {
      userId
    }
  })
}

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

export const authorization = () => {
  return axios.request({
    url: '/store',
    method: 'get'
  })
}
