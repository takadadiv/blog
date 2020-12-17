<template lang="pug">
  article
    .time
      time {{ $formatDate(article.sys.createdAt) }}
    .title
      h1 {{ article.fields.title }}
    .tags
      Tag(
        v-for="tag in article.fields.tags"
        :key="tag.sys.id"
        :tag="tag"
      )
    .body(v-html="$md.render(article.fields.body)")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['init'],

  computed: {
    ...mapGetters('article', [
      'getById'
    ]),

    article() {
      return this.getById(this.$route.params.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.time
  margin-bottom 0.5rem
.title
  margin-bottom 0.8rem
  letter-spacing 0.1rem
.tags
  margin-bottom 2.5rem
.body
  >>> pre
    background inherit
    font-family inherit
    margin 1rem 0
    padding 0
    .code-name
      font-size 1rem
      display block
      margin-bottom 0.3rem
    code
      border-left 3px solid #333
      padding 1rem
</style>
