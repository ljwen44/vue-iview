import axios from './index'

export const getTableDate = () => {
  return axios.request({
    url: '/getTableDate',
    method: 'get'
  })
}

export const getFolderList = () => {
  return axios.request({
    url: '/getFolderList',
    method: 'get'
  })
}

export const getFileList = () => {
  return axios.request({
    url: '/getFileList',
    method: 'get'
  })
}

// 请求文件列表
export const getFilesList = () => {
  return axios.request({
    url: 'get_file_list',
    mothod: 'get',
    params: {
      userId: 1
    }
  })
}

// 请求下载文件
export const getFile = (key, type) => {
  return axios.request({
    url: 'get_file',
    method: 'post',
    data: {
      key,
      type
    }
  })
}

// 删除文件
export const deleteFile = key => {
  return axios.request({
    url: 'delete_file',
    data: {
      key
    },
    methods: 'delete'
  })
}

// 发送表单
export const sendFormData = ({ url, data }) => {
  return axios.request({
    url,
    method: 'post',
    data
  })
}
