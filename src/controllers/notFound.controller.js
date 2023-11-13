import view from '../pages/notFound.html'

export default () => {
  const sectionElement = document.createElement('section')
  sectionElement.innerHTML = view

  return sectionElement
}
