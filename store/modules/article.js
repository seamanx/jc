import {RECEIVE_ARTICLE, EDIT_ARTICLE,ADD_ARTICLE,DELETE_ARTICLE,SET_ACTIVE_ARTICLE } from '../mutation-types'

// 该模块的初始状态
const state = {
  articles: []
}

// 相关的 mutations
const mutations = {
  [RECEIVE_ARTICLE] (state, articles) {
    state.articles = articles
  },

  [SET_ACTIVE_ARTICLE] (state, articleId) {
  //  state.articles.find(p => p.id === articleId);// 
  }
}

export default {
  state,
  mutations
}
 
 