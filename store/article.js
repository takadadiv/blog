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
      content_type: 'article'
    })

    commit('setEntries', res.items)
  }
}

export const getters = {
  getByTagId: state => tagId => {
    return state.entries.filter(entry => entry.tags.filter(tag => tag.sys.id === tagId))
  }
}
