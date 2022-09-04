/*
 * @Author: shimingxia
 * @Date: 2022-08-18 16:10:17
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-18 19:10:35
 * @Description: 
 */
const { pathToRegexp } = require("path-to-regexp");

function compilePath(path, options) {
  let keys = []
  let regexp = pathToRegexp(path, keys, options)
  return { keys, regexp }
}

function matchPath(pathname, options = {}) {
  let { path = '/', exact = false, strict = false, sensitive = false } = options
  let { keys, regexp } = compilePath(path, { end: exact, strict, sensitive})
  const match = regexp.exec(pathname)
  if(!match) return null
  const [url, ...values] = match
  const isExact = pathname === url
  if(exact && !isExact) return null
  return {
    path,
    url,
    isExact,
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = values[index]
      return memo
    }, {})
  }
}

export default  matchPath;