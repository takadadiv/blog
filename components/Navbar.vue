<template lang="pug">
  nav.navbar.is-spaced
    .navbar-brand
      a.navbar-burger(
        role="button"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isActive }"
        @click="toggleMenu"
      )
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu(:class="{ 'is-active': isActive }")
      .navbar-end
        n-link.navbar-item(:to="{ name: 'index' }" @click.native="toggleMenu") メモ帳
        n-link.navbar-item(:to="{ name: 'portfolio' }" @click.native="toggleMenu") ポートフォリオ
</template>

<script>
export default {
  data: () => ({
    isActive: false
  }),

  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="stylus" scoped>
.navbar-item
  &:focus
  &:focus-within
  &:hover
    background inherit

.navbar-burger
  z-index 999
  &:hover
    background inherit
  &:focus
    outline none

@media screen and (max-width: 1023px)
  .navbar-menu.is-active
    position absolute
    top 0
    right 0
    padding 3.5rem 1rem 1rem
</style>
