let parentDom = null
let View = null
let data = null

const deepProxy = (target, callback) => new Proxy(target, {
  get(target, key, receiver) {
    const value = Reflect.get(target, key, receiver)
    return (typeof value === 'object' && value !== null) ? deepProxy(value, callback) : value
  },
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    callback()
    return result
  },
})

export const reactive = (model) => {
  data = deepProxy(model, render)
  return data
}

export const render = () => {
  parentDom.innerHTML = View(data)
}

export const createApp = (App, model, dom) => {
  parentDom = dom
  View = App
  data = model
  return { render }
}
