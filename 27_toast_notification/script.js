const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Mes 11',
  'Mes 2',
  'Mes 356',
  'Mes 4',
  'Mes 55',
]

button.addEventListener('click', () => createNotification('worn'))

function createNotification(type = null) {
  console.log('aaaa', )
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : 'alert')

  notif.innerText = getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 2000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}