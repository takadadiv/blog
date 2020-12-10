<template lang="pug">
  div
    .time
      time {{ article.sys.createdAt }}
    .title
      n-link(:to="{ name: 'articles-id', params: { id: article.sys.id } }") {{ article.fields.title }}
    .tag
      n-link(
        v-for="tag in article.fields.tags"
        :key="tag.sys.id"
        :to="{ name: 'tags-id', params: { id: tag.sys.id } }"
      ) {{ tag.fields.name }}
    hr
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>

<style lang="stylus" scoped>

</style>
