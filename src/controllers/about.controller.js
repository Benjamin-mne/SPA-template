import view from '../pages/about.html'

export default () => {
  const sectionElement = document.createElement('section')
  sectionElement.innerHTML = view

  return sectionElement
}
