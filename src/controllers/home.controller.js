import view from '../pages/home.html'

export default () => {
  const sectionElement = document.createElement('section')
  sectionElement.innerHTML = view

  return sectionElement
}
