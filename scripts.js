document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.animate-header')
  const figure = document.querySelectorAll('animate-figure')

  header.style.opacity = 0
  header.style.transform = 'translateY(-50px)'
  setTimeout(() => {
    header.style.transition = 'all 1s ease'
    header.style.opacity = 1
    header.style.transform = 'translateY(0)'
  }, 500)

  figure.forEach((el, index) => {
    el.style.opacity = 0
    el.style.transform = 'translateY(50px)'
    setTimeout(() => {
      el.style.transition = 'all 1s ease'
      el.style.opacity = 1
      el.style.transform = 'translateY(0)'
    }, 1000 + index * 300)
  })
})
