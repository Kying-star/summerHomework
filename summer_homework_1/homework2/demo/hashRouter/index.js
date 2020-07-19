import { createApp, render, reactive } from '../../src/render.js'
import { createHashRouter, RouterView, RouterLink } from '../../src/router.js'

const Home = (props) => `
  <h1>Home Page</h1>
  <button onclick="${props.handleGoAbout()}">go to about page</button>
`
const About = (props) => `<h1>About Page</h1>`
const App = (Model) => `
  ${RouterLink({ url: '/', text: 'home' })}
  ${RouterLink({ url: '/about', text: 'about' })}
  <div>
    ${RouterView(Model.Home)}
  </div>
`

const router = createHashRouter('/demo/hashRouter/#', [
  { path: '/', component: Home },
  { path: '/about', component: About },
])

const Model = reactive({
  Home: {
    handleGoAbout() {
      window.handleGoAbout = () => router.go('/about') // 命令式路由跳转
      return 'handleGoAbout()'
    },
  },
})

const rootDom = document.getElementById('root')
createApp(App, Model, rootDom).render() // mount
