import { pages } from '../controllers/index.controller.js'

export const router = (route) => {
  const content = document.getElementById('root')
  content.innerHTML = ''

  switch (route) {
    case '#/':
      return content.appendChild(pages.home())

    case '#/about':
      return content.appendChild(pages.about())

    default:
      return content.appendChild(pages.notFound())
  }
}
