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
      content_type: 'article'
    })

    commit('setEntries', res.items)
  }
}

export const getters = {
  getById: state => id => {
    return state.entries.find(entry => entry.sys.id === id)
  },

  getByTagId: state => tagId => {
    // filterは見つからなかったとき空配列を返す
    // 空配列はtruthyなので、lengthで判定
    return state.entries.filter(entry => {
      return (entry.fields.tags.filter(tag => tag.sys.id === tagId)).length > 0
    })
  }
}
