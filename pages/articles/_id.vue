<template lang="pug">
  article
    .time
      time {{ article.sys.createdAt }}
    .title
      h1 {{ article.fields.title }}
    .tag
      span(v-for="tag in article.fields.tags" :key="tag.sys.id") {{ tag.fields.name }}
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

</style>
