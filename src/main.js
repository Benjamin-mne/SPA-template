import './styles/main.css'
import './styles/home.css'
import './styles/about.css'

import { router } from './router/index.routes.js'

window.addEventListener('hashchange', () => {
  router(window.location.hash)
})

window.addEventListener('load', () => {
  if (!window.location.hash) {
    window.location.hash = '#/'
  }
})
