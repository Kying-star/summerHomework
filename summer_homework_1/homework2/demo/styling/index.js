import { createApp, styled } from '../../src/index.js'

const headerStyles = styled({
  color: 'red',
})

const mainStyles = styled({
  'font-size': '30px',
})

const App = () => `
  <header class="${headerStyles}">
    <h1>Rendering My Styles</h1>
  </header>
  <main class="${mainStyles}">
    styling...
  </main>
`

const rootDom = document.getElementById('root')
createApp(App, null, rootDom).render()
