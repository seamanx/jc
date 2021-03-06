// getters.js
import store from './store'

// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

export function getCount (state) {
  return state.count
}

export function filteredTodos () {
  return store.state.messages.filter(message => {
    return message.threadID === vuex.state.currentThreadID
  })
}