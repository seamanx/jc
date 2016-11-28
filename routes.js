
import profile from './components/profile'
import test from './test'
import articlelist from './components/articlelist'
import articleview from './components/articleview'



export default {
  '/': {
    component: function (resolve) {
      require(['./Home'], resolve)
    }
  },
  "/a": {
    name: "articlelist",
    component: articlelist,
    subRoutes: {
      "/v/:articleid": {
        name: "articleview",
        component: articleview
      }
    },
    "/test": {
      component: test
    },
    "/profile": {
      'auth': true,
      component: profile
    }
  }
}