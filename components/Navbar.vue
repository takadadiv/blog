<template lang="pug">
  nav.navbar.is-spaced
    .navbar-brand
      //- h1.navbar-item タイトル
      a.navbar-burger(
        role="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      )
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu
      .navbar-end
        n-link.navbar-item(:to="{ name: 'index' }") メモ帳
        n-link.navbar-item(:to="{ name: 'portfolio' }") ポートフォリオ
</template>
