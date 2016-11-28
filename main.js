import Vue from 'vue';
import VueRouter from 'vue-router'; 
//import $ from 'jquery';
//import './assets/css/index.less'; 

Vue.use(VueRouter);
Vue.config.debug = true;
// Vue.config.delimiters = ['${', '}']; // 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;

import App from './App.vue'

//
const router = new VueRouter({
  transitionOnLoad: false
})

/**
* sync router params
*/
import { sync } from 'vuex-router-sync'
import store from './store'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

/**
* sync router loading status
*/
const commit = store.commit || store.dispatch
router.beforeEach(({ to, from, next }) => {
  //# 检测cookie 验证跳转
        // if (transition.to.auth)
        //// 对用户身份进行验证...
        //     transition.redirect('/entry/login');
        // else
        //     transition.next();

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  commit('UPDATE_LOADING', true)
  setTimeout(next, 50)
})
router.afterEach(() => {
  commit('UPDATE_LOADING', false)
})
sync(store, router);

import routes from "./routes"
router.map(routes);
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
  '*': "./Home"//重定向任意未匹配路径到/Home
});
router.start(App, '#app');// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
//router.go({"path":"/"});  

