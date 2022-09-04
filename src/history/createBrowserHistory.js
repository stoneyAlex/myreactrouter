/*
 * @Author: shimingxia
 * @Date: 2022-08-17 19:11:35
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-18 15:35:53
 * @Description: 
 */
function createBrowserHistory(props) {
  const globalHistory = window.history
  let state
  let listeners = []
  let message = null
  let confirm = props.getUserConfirmation ? props.getUserConfirmation :  window.confirm
  function push(pathname, nextState) {
    const action = 'PUSH'
    if(typeof pathname === 'object') {
      state = pathname.state
      pathname = pathname.pathname
    } else {
      state = nextState
    }
    if(message) {
      let showMessage = message({pathname})
      let allow = confirm(showMessage)
      if(!allow) return
    }
    globalHistory.pushState(state, null, pathname)
    let location = { pathname, state}
    notify({action, location})
  }
  function notify(newHistory) {
    Object.assign(history, newHistory)
    listeners.forEach(listener => listener(history.location))
  }
  function listen(listener) {
    listeners.push(listener)
    // 监听方法返回一个取消此监听函数的方法
    return () => listeners = listeners.filter(l => l !== listener)
  }
  window.addEventListener('popstate', () => {
    let location = { pathname: window.location.pathname, state: window.location.state }
    notify({action: 'POP', location})
  })
  function go(n) {
    globalHistory.go(n)
  }
  function goBack() {
    globalHistory.go(-1)
  }
  function goForward() {
    globalHistory.go(1)
  }
  function block(newMessageFn) {
    message = newMessageFn
    return () => message = null
  }
  const history = {
    action: 'POP',
    push,
    listen,
    go,
    goBack,
    goForward,
    location: { pathname: window.location.pathname, state: window.location.state },
    block
  }
  return history
}

export default createBrowserHistory