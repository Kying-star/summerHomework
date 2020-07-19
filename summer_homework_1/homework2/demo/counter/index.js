import { createApp, reactive } from '../../src/index.js'

const Header = (data) => `
  <header>
    <h1>${data.title}</h1>
    ${data.keywords.map(e => `<span>${e}</span>`).join(' ')}
  </header>
`
const Content = (data) => `
  <main>
    ${data.num}
  </main>
  <button onclick="${data.handleDec()}"> - </button>
  <button onclick="${data.handleInc()}"> + </button>
`
const App = (Model) => `
  ${Header(Model.Header)}
  ${Content(Model.Counter)}
`

const Model = reactive({
  Header: {
    title: 'Slowly Render',
    keywords: ['The', 'render', 'phase', 'is', 'very', 'slow'],
  },
  Counter: {
    num: 0,
    handleDec() {
      window.handleDec = () => Model.Counter.num -= 1
      return 'handleDec()'
    },
    handleInc() {
      window.handleInc = () => Model.Counter.num += 1
      return 'handleInc()'
    },
  },
})

const rootDom = document.getElementById('root')
createApp(App, Model, rootDom).render() // mount
