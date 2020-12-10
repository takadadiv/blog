<template lang="pug">
  div
    ArticleSummary(v-for="article in articles" :key="article.sys.id" :article="article")
</template>

<script>
import client from '~/plugins/contentful'

export default {
  middleware: ['init'],

  computed: {
    articles() {
      return this.$store.state.article.entries
    }
  }
}
</script>

<style lang="stylus">
h1
  color #333
</style>
