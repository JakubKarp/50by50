const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const userRole = document.querySelector('.role')

const testimonials = [
  {
    name: "RR aa",
    position: "retin",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus voluptatibus delectus aspernatur architecto nesciunt iste dolor quas commodi nihil inventore, magni minima excepturi. Quae reprehenderit possimus doloribus. Nisi, deserunt.",
  },
  {
    name: "aaxas",
    position: "ffff",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus voluptatibus delectus aspernatur architecto nesciunt iste dolor quas commodi nihil inventore, magni minima excepturi. Quae reprehenderit possimus doloribus. Nisi, deserunt.",
  },
  {
    name: "xcasdc",
    position: "wefwfe",
    photo: "https://randomuser.me/api/portraits/women/49.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus voluptatibus delectus aspernatur architecto nesciunt iste dolor quas commodi nihil inventore, magni minima excepturi. Quae reprehenderit possimus doloribus. Nisi, deserunt.",
  }
]

let idx = 1

function updateTestimonial() {
  const {name, position, photo, text} = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  userName.innerHTML = name
  userRole.innerHTML = position

  idx++

  if(idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 4000)