export default async ({ store }) => {
  if (store.state.article.entries.length === 0) {
    await store.dispatch('article/getAll')
  }

  if (store.state.tag.entries.length === 0) {
    await store.dispatch('tag/getAll')
  }
}
