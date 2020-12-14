// markdownit options (https://markdown-it.github.io/markdown-it/)
export const markdownit = {
  injected: true,
  linkify: true,
  breaks: true,
  html: true,
  highlight: (code, name) => {
    const hljs = require('highlight.js')
    const lang = name.replace(/^.*\./, '')
    const res = hljs.getLanguage(lang)
      ? hljs.highlight(lang, code, true).value
      : md.utils.escapeHtml(code)

    return `<pre><span class="code-name">${name}</span><code class="hljs">${res}</code></pre>`
  }
}
