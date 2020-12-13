<template lang="pug">
  article
    .time
      time {{ article.sys.createdAt }}
    .title
      h1 {{ article.fields.title }}
    .tags
      span.tag.is-dark(v-for="tag in article.fields.tags" :key="tag.sys.id") {{ tag.fields.name }}
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
  margin-bottom 1rem
  letter-spacing 0.1rem
</style>
