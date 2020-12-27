import Mock from 'mockjs'
const Random = Mock.Random
export const getUserInfo = (options) => {
  // console.log(options)
  const template = {
    // 定义数据格式，后面为循环次数
    'str|2-4': 'Ljwen',
    'name|5': 'Ljwen',
    'age|+2': 18,
    'num|4-10': 0, // 0只是用来定义数据类型
    'float|3-10.2-5': 0, // .2-5表示小数点后几位
    'bool|1': true,
    'bool2|1-9': true, // 公式min/(min+max)
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    }, // 随机抽取2个属性,2可换为范围，2-9
    'arr|2-4': [1, 2, 3],
    'arr2|2': ['a', 'b'], // 指定重复次数
    'func': () => {
      return '内容'
    }, // 范围函数结果
    'reg': /[1-9][a-z]/, // 根据正则表达式生成数据
    email: Mock.mock('@email'),
    range: Random.range(3, 6, 1), // 3，6表示范围，1表示幅度
    date: Random.date('yyyy-mm-dd'), // 日期格式
    time: Random.time('hh:mm'), // 时间格式
    datetime: Random.datetime('yyyy-mm-dd hh:mm'),
    now: Random.now('hour', 'yyyy-mm-dd hh:mm'), // 截至到小时
    img: Random.img('100x200', 'red', '#000', 'jpg', 'Ljwen'), // 返回图片
    img_base64: Random.dataImage(),
    color: Random.color(),
    cword: Random.cword('hshsh', 2, 5), // 2表示最少取2个，5表示最多取5个
    cname: Random.cname(), // 返回一个中文名字
    region: Random.region(), // 返回一个中国的地区
    province: Random.province(), // 返回一个省
    city: Random.city(true), // 设置为true会连上一级也一起返回
    county: Random.county(),
    zip: Random.zip(),
    upperFirstLetter: Random.capitalize('ljwen'), // 首字母大写
    pick: Random.pick([1, 2, 3]), // 随机抽取
    shuffle: Random.shuffle([1, 2, 3]), // 打乱数组顺序
    guid: Random.guid(),
    fruit: Random.fruit(), // 自定义方法
    fruit1: '@fruit' // 占位符
  }
  return Mock.mock(template)
}

export const UserInfo = () => {
  return {
    code: 200,
    data: {
      userId: 'Ljwen',
      password: '111',
      token: 'Ljwen'
    }
  }
}

export const authorization = () => {
  return {
    code: 200,
    data: {
      token: 'Ljwen',
      rules: {
        page: {
          layout: true,
          home: true,
          home_page: true,
          upload: true,
          params: true,
          'count-to': true,
          menu_page: true,
          folder_tree: true,
          form: true,
          table: true,
          parent: true,
          child: true,
          name_view: true,
          store: true,
          demo: true,
          'split-pane': true,
          'icon_page': true,
          optimize: true
        },
        component: {
          edit_button: true,
          publish_button: false
        }
      }
    },
    mes: ''
  }
}
