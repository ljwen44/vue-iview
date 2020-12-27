export default store => {
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state)) // 如果本地存在state，代替掉初始化的state值
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  }) // 每次提交的时候都会调用此函数，将改变的数据存储在本地
}
