import { ActionTree } from 'vuex'
import { SpoolmanState } from './types'
import { RootState } from '../types'
import { SocketActions } from '@/api/socketActions'

export const actions: ActionTree<SpoolmanState, RootState> = {
  /**
   * Reset our store
   */
  async reset ({ commit }) {
    commit('setReset')
  },

  /**
   * Make a socket request to init the spoolman component.
   */
  async init () {
    SocketActions.spoolmanState()
  },

  async onActiveSpool ({ commit }, payload) {
    commit('setActiveSpool', payload.spool_id)
  },

  async onAvailableSpools ({ commit }, payload) {
    commit('setAvailableSpools', [...payload])
  },

  async notifyActiveSpoolSet ({ commit }, payload) {
    commit('setActiveSpool', payload.spool_id)
  }
}
