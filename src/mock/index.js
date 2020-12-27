import Mock from 'mockjs'
import { getUserInfo, UserInfo, authorization } from './response/user'
import { getTableDate, getFolderList, getFileList } from './response/data'
const Random = Mock.Random
// 请求地址， 请求方式， 自定义的数据名
Mock.mock('http://localhost:8080', 'post', getUserInfo)
Mock.mock('/login', 'post', UserInfo)
Mock.mock('/store', 'get', authorization)
Mock.mock('/getTableDate', 'get', getTableDate)
Mock.mock('/getFolderList', 'get', getFolderList)
Mock.mock('/getFileList', 'get', getFileList)

// Mock.setup(){ timeout: '100-600' } 设置定时器
Mock.setup({
  timeout: '100-600'
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'banana', 'peach']
    return this.pick(fruit)
  }
})
export default Mock
