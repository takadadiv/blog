export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital@0;1&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/site.sass'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit'
  ],

  // markdownit options (https://markdown-it.github.io/markdown-it/)
  markdownit: {
    injected: true,
    linkify: true,
    breaks: true,
    html: true,
    highlight: (str, lang) => {
      const hljs = require('highlight.js')
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`
        } catch (e) {}
      }
      return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
