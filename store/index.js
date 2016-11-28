import Vue from 'vue'
import Vuex from 'vuex'
import { EventEmitter } from 'events'
import * as actions from './actions'
import article from './modules/article'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  notes: [],
  activeNote: {}
}
const mutations = {
  /* region 路由状态 */
  UPDATE_LOADING(state, status) {
    state.isLoading = status
  },
  UPDATE_DIRECTION(state, direction) {
    state.direction = direction
  },
  /* endregion 路由状态 */

  /* region 文章操作 */
  ADD_NOTE(state) {
    const newNote = {
      text: 'New Note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
 
  EDIT_NOTE(state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE(state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },
  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note
  }
  /* endregion 文章操作 */

};
 
export default new Vuex.Store({
  state,
  mutations,
  modules: {
    article
  }
})


