const buttons = document.querySelectorAll('.faq-toggle')
const parents = document.querySelectorAll('.faq')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // parents.forEach(parent => parent.classList.remove('active'))
    button.parentNode.classList.toggle('active')
  })
})