<template lang="pug">
  div
    ArticleSummary(v-for="article in articles" :key="article.sys.id" :article="article")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['init'],

  computed: {
    ...mapGetters('article', [
      'getByTagId'
    ]),

    articles() {
      return this.getByTagId(this.$route.params.id)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
