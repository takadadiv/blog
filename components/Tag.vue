<template lang="pug">
  n-link.tag.is-dark(
    :to="{ name: 'tags-id', params: { id: tag.sys.id } }"
  ) {{ tag.fields.name }}
</template>

<script>
export default {
  props: {
    tag: Object
  }
}
</script>

<style lang="stylus" scoped>
a:hover
  text-decoration none
</style>
