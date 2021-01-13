const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://source.unsplash.com/random/210x80" alt="" / >'
  title.innerHTML = 'Lorem ipsum dolor emet'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, voluptas.'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="">'
  name.innerHTML = 'Hoan Doer'
  date.innerHTML = 'Oct 08, 2021'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}

