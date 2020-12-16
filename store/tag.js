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
    const res = await this.$contentful.getEntries({
      content_type: 'tag'
    })

    commit('setEntries', res.items)
  }
}
