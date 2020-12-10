import client from '~/plugins/contentful'

export const state = () => ({
  entries: []
})

export const mutations = {
  setEntries(state, entries) {
    state.entries = entries
  }
}

export const actions = {
  async getAll({ commit }) {
    const res = await client.getEntries({
      content_type: 'tag'
    })

    commit('setEntries', res.items)
  }
}
