<template lang="pug">
  .summary
    .time
      time {{ $formatDate(article.sys.createdAt) }}
    .title
      n-link(:to="{ name: 'articles-id', params: { id: article.sys.id } }") {{ article.fields.title }}
    .tags
      Tag(
        v-for="tag in article.fields.tags"
        :key="tag.sys.id"
        :tag="tag"
      )
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>

<style lang="stylus" scoped>
.summary
  margin-bottom 2rem
.time
  margin-bottom 0.25rem
.title
  font-size 1.5rem
  letter-spacing 0.1rem
  margin-bottom 0.5rem
  font-weight normal
.tags
  margin 0
</style>
