const spinnerWrapper = document.querySelector('.spinner-wrapper')

window.addEventListener('load', () => {
  spinnerWrapper.style.opacity = '0'

  setTimeout(() => {
    spinnerWrapper.style.display = 'none'
  }, 200)
})

const tooltips = document.querySelectorAll('.tt')
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t)
})
