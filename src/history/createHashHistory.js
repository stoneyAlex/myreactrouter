/*
 * @Author: shimingxia
 * @Date: 2022-08-17 19:11:17
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-18 15:56:29
 * @Description: 
 */
export default function createHashHistory(props) {
  let historyStack = []
  let current = -1
  let action  = 'POP'
  let state
  let listeners = []
  let message = null
  let confirm = props.getUserConfirmation ? props.getUserConfirmation :  window.confirm
  function listen(listener) {
    listeners.push(listener)
    // 监听方法返回一个取消此监听函数的方法
    return () => listeners = listeners.filter(l => l !== listener)
  }
  function hashChangeHandler(event) {
    let pathname = window.location.hash.slice(1)
    let location = { pathname, state }
    Object.assign(history, { action, location})
    if(action === 'PUSH') {
      historyStack[++current] = location
    }
    listeners.forEach(listener => listener(history.location))
  }
  window.addEventListener('hashchange', hashChangeHandler)
  function go(n) {
    action = 'POP'
    current += n
    let nextLocation = historyStack[current]
    state = nextLocation.state
    window.location.hash = nextLocation.pathname
  }
  function goBack() {
    go(-1)
  }
  function goForward() {
    go(1)
  }
  function push(pathname, nextState) {
    action = 'PUSH'
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
    window.location.hash = pathname
  }
  function block(newMessageFn) {
    message = newMessageFn
    return () => message = null
  }
  let history = {
    action: 'POP',
    push,
    listen,
    go,
    goBack,
    goForward,
    location: { pathname: '/', state: undefined, },
    block
  }
  if(window.location.hash) {
    action = 'PUSH'
    hashChangeHandler()
  } else {
    window.location.hash = '/'
  }
  return history
}